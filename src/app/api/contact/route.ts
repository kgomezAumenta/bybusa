import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, phone, email, message, honeypot } = body ?? {};

        // Anti-spam
        if (honeypot) {
            return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
        }

        // Validation
        if (!fullName || !phone || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        const hubUrl = process.env.HUB_CONTACT_URL;
        const apiKey = process.env.HUB_API_KEY;

        if (!hubUrl) {
            return NextResponse.json(
                { message: 'HUB_CONTACT_URL missing' },
                { status: 500 }
            );
        }

        // Build payload EXACTLY like the form fields (no extras for now)
        const params = new URLSearchParams({
            fullName: String(fullName),
            phone: String(phone),
            email: String(email),
            message: String(message),
            honeypot: String(honeypot ?? ''),
        });

        const headers: Record<string, string> = {
            'Content-Type': 'application/x-www-form-urlencoded',
        };

        // Only if your Hub actually needs it
        if (apiKey) headers['Authorization'] = `Bearer ${apiKey}`;

        // Timeout 10s
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 10000);

        const hubRes = await fetch(hubUrl, {
            method: 'POST',
            headers,
            body: params.toString(),
            signal: controller.signal,
        }).finally(() => clearTimeout(timeoutId));

        const hubText = await hubRes.text();

        if (!hubRes.ok) {
            // Return upstream error details (super useful to debug)
            return NextResponse.json(
                {
                    message: 'Hub request failed',
                    hubStatus: hubRes.status,
                    hubBody: hubText.slice(0, 2000), // avoid huge payloads
                },
                { status: 502 }
            );
        }

        return NextResponse.json({ message: 'Success', hubBody: hubText }, { status: 200 });
    } catch (err: any) {
        if (err?.name === 'AbortError') {
            return NextResponse.json({ message: 'Request timeout. Please try again.' }, { status: 504 });
        }
        return NextResponse.json(
            { message: 'Failed to process request', error: err?.message ?? String(err) },
            { status: 500 }
        );
    }

    console.log('HUB_CONTACT_URL:', process.env.HUB_CONTACT_URL);
}
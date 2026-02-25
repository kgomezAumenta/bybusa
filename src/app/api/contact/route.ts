import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { fullName, phone, email, message, honeypot } = body;

        // Check honeypot (Anti-spam)
        if (honeypot) {
            return NextResponse.json({ message: 'Spam detected' }, { status: 400 });
        }

        // Basic validation
        if (!fullName || !phone || !email || !message) {
            return NextResponse.json({ message: 'All fields are required' }, { status: 400 });
        }

        console.log('New Contact Form Submission:', { fullName, phone, email, message });

        // SMTP Configuration from env vars
        const {
            SMTP_HOST,
            SMTP_PORT,
            SMTP_USER,
            SMTP_PASS,
            CONTACT_TO_EMAIL,
            CONTACT_FROM_EMAIL,
        } = process.env;

        // If SMTP environment variables are missing, we log and return success (fallback)
        if (!SMTP_HOST || !SMTP_USER || !SMTP_PASS) {
            console.warn('SMTP environment variables missing. Email was not sent, but message was logged.');
            return NextResponse.json({
                message: 'Message received and logged (Developer Mode: SMTP not configured)',
                logged: true
            }, { status: 200 });
        }

        // Create transporter
        const transporter = nodemailer.createTransport({
            host: SMTP_HOST,
            port: Number(SMTP_PORT) || 587,
            secure: Number(SMTP_PORT) === 465, // true for 465, false for other ports
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASS,
            },
        });

        // Send email
        await transporter.sendMail({
            from: CONTACT_FROM_EMAIL || SMTP_USER,
            to: CONTACT_TO_EMAIL,
            subject: `New Contact from BYB USA: ${fullName}`,
            text: `
        Name: ${fullName}
        Phone: ${phone}
        Email: ${email}
        Message: ${message}
      `,
            html: `
        <h3>New Contact Form Submission</h3>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
        });

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });

    } catch (error: any) {
        console.error('Error in contact route:', error);
        return NextResponse.json({
            message: 'Failed to process request',
            error: error.message
        }, { status: 500 });
    }
}

'use client';

import { useState } from 'react';
import Image from 'next/image';

const Contact = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        phone: '',
        email: '',
        message: '',
        honeypot: '', // Anti-spam
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
    const [errorMessage, setErrorMessage] = useState('');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Simple honeypot check
        if (formData.honeypot) {
            console.log('Spam detected');
            return;
        }

        setStatus('loading');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ fullName: '', phone: '', email: '', message: '', honeypot: '' });
            } else {
                const data = await response.json();
                setErrorMessage(data.message || 'Something went wrong. Please try again.');
                setStatus('error');
            }
        } catch (error) {
            setErrorMessage('Network error. Please check your connection.');
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding bg-white">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-stretch gap-12 bg-primary-blue rounded-3xl overflow-hidden shadow-2xl">
                    {/* Decorative Image Column */}
                    <div className="lg:w-1/2 relative hidden lg:block">
                        {/* TODO: replace with real image: /public/assets/contact/contact-side.png */}
                        <Image
                            src="/assets/contact/contact-side.png"
                            alt="Contact Us"
                            fill
                            className="object-cover"
                            onError={(e) => {
                                (e.target as any).src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1548&auto=format&fit=crop';
                            }}
                        />
                        <div className="absolute inset-0 bg-primary-blue/30" />
                        <div className="absolute inset-0 flex items-center justify-center p-12 text-center">
                            <h2 className="text-5xl font-bold text-white leading-tight">
                                FRESHNESS <br />
                                IS JUST AN <br />
                                <span className="text-accent-yellow">EMAIL AWAY</span>
                            </h2>
                        </div>
                    </div>

                    {/* Form Column */}
                    <div className="lg:w-1/2 p-8 md:p-12 lg:p-16 text-white">
                        <h2 className="text-3xl md:text-4xl font-bold mb-8 uppercase tracking-tight">
                            WE'D LOVE TO <span className="text-accent-yellow">HEAR FROM YOU!</span>
                        </h2>

                        <form onSubmit={handleSubmit} className="space-y-6">
                            {/* Honeypot hidden input */}
                            <input
                                type="text"
                                name="honeypot"
                                className="hidden"
                                value={formData.honeypot}
                                onChange={handleChange}
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Full Name</label>
                                    <input
                                        required
                                        type="text"
                                        name="fullName"
                                        value={formData.fullName}
                                        onChange={handleChange}
                                        className="w-full bg-blue-900/50 border border-blue-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-yellow transition-colors placeholder:text-blue-300"
                                        placeholder="John Doe"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Phone Number</label>
                                    <input
                                        required
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="w-full bg-blue-900/50 border border-blue-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-yellow transition-colors placeholder:text-blue-300"
                                        placeholder="+1 (555) 000-0000"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-blue-200">E-mail Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full bg-blue-900/50 border border-blue-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-yellow transition-colors placeholder:text-blue-300"
                                    placeholder="john@example.com"
                                />
                            </div>

                            <div className="space-y-2">
                                <label className="text-xs font-bold uppercase tracking-widest text-blue-200">Your Message</label>
                                <textarea
                                    required
                                    name="message"
                                    rows={4}
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full bg-blue-900/50 border border-blue-800 rounded-xl px-4 py-3 focus:outline-none focus:border-accent-yellow transition-colors placeholder:text-blue-300 resize-none"
                                    placeholder="How can we help you?"
                                />
                            </div>

                            <button
                                disabled={status === 'loading'}
                                type="submit"
                                className={`w-full py-4 rounded-xl font-bold uppercase tracking-widest transition-all ${status === 'loading'
                                        ? 'bg-blue-800 cursor-not-allowed'
                                        : 'bg-accent-yellow text-primary-blue hover:bg-accent-orange shadow-lg'
                                    }`}
                            >
                                {status === 'loading' ? 'SENDING...' : 'SEND FORM'}
                            </button>

                            {status === 'success' && (
                                <div className="p-4 bg-green-500/20 border border-green-500 text-green-300 rounded-xl text-center font-bold">
                                    MESSAGE SENT SUCCESSFULLY! WE'LL CONTACT YOU SOON.
                                </div>
                            )}

                            {status === 'error' && (
                                <div className="p-4 bg-red-500/20 border border-red-500 text-red-300 rounded-xl text-center font-bold">
                                    {errorMessage}
                                </div>
                            )}
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;

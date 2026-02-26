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
        <section id="contact" className="pb-10 pt-10 scroll-mt-20 bg-[#F7F2F0] rounded-t-[3vw] relative">
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-full h-0 z-30 pointer-events-none">
                {/* Tomato */}
                <div className="absolute top-0 right-0 w-[16vw] aspect-square -translate-y-[23%] translate-x-[35%]">
                    <Image
                        src="/assets/contact/tomato.png"
                        alt="Tomato Decoration"
                        fill
                        className="object-contain"
                    />
                </div>
                {/* Quality Trust SVG */}
                <div className="absolute top-0 right-0 w-[18vw] aspect-square -translate-y-[24%] translate-x-[20%]">
                    <Image
                        src="/assets/contact/right_quality-trust.svg"
                        alt="Quality Trust"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
            <div className="flex flex-col lg:flex-row items-stretch gap-12 overflow-hidden w-[95%] mx-auto">
                {/* Decorative Image Column */}
                <div className="lg:w-[45%] relative hidden lg:block">
                    <Image
                        src="/assets/contact/contact-side.png"
                        alt="Contact Us"
                        fill
                        className="object-cover rounded-3xl overflow-hidden"
                        onError={(e) => {
                            (e.target as any).src = 'https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&w=1548&auto=format&fit=crop';
                        }}
                    />
                    {/* Gradient Overlay */}
                    <div
                        className="absolute top-0 left-0 right-0 h-1/4 rounded-t-3xl pointer-events-none z-10"
                        style={{ background: 'linear-gradient(180deg, #88080875 0%, rgba(58, 5, 5, 0) 100%)' }}
                    />
                    <div
                        className="absolute bottom-0 left-0 right-0 h-1/4 rounded-b-3xl pointer-events-none z-10"
                        style={{ background: 'linear-gradient(180deg, rgba(58, 5, 5, 0) 0%, #88080898 100%)' }}
                    />
                    {/* Certified Insignia */}
                    <div className="absolute bottom-[12%] -right-30 z-20 w-65 h-65">
                        <Image
                            src="/assets/contact/insignia_certified.svg"
                            alt="Certified"
                            fill
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Form Column */}
                <div className="lg:w-[55%] p-8 md:pt-12 lg:pt-16">
                    <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none select-none tracking-wide text-primary-blue w-[85%]">
                        We'd love <span className="text-4xl md:text-6xl">to</span> hear from you!
                    </h2>

                    <p className="text-lg md:text-lg mb-8 leading-relaxed w-[70%] text-darker">
                        Do you have questions, suggestions, or want to distribute our products? <strong>We&apos;re here to help.</strong>
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-6 w-[85%]">
                        {/* Honeypot hidden input */}
                        <input
                            type="text"
                            name="honeypot"
                            className="hidden"
                            value={formData.honeypot}
                            onChange={handleChange}
                        />

                        <div className="space-y-2">
                            <label className="text-s font-bold tracking-widest text-darker">Full Name</label>
                            <input
                                required
                                type="text"
                                name="fullName"
                                value={formData.fullName}
                                onChange={handleChange}
                                className="w-full border-b-2 border-secondary-blue px-4 focus:outline-none focus:border-accent-yellow transition-colors"
                            />
                        </div>


                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <label className="text-s font-bold tracking-widest text-darker">Phone Number</label>
                                <input
                                    required
                                    type="tel"
                                    name="phone"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-secondary-blue px-4 focus:outline-none focus:border-accent-yellow transition-colors"
                                />
                            </div>
                            <div className="space-y-2">
                                <label className="text-s font-bold tracking-widest text-darker">E-mail Address</label>
                                <input
                                    required
                                    type="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="w-full border-b-2 border-secondary-blue px-4 focus:outline-none focus:border-accent-yellow transition-colors"
                                />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="text-s font-bold tracking-widest text-darker">Your Message</label>
                            <textarea
                                required
                                name="message"
                                rows={4}
                                value={formData.message}
                                onChange={handleChange}
                                className="w-full border-b-2 border-secondary-blue px-4 focus:outline-none focus:border-accent-yellow transition-colors resize-none"
                            />
                        </div>

                        <button
                            disabled={status === 'loading'}
                            type="submit"
                            className={`drop-shadow-[0_0_5px_rgba(255,255,255,0.36)] mx-auto flex items-center gap-3 p-2 px-8 rounded-full font-bold uppercase tracking-widest transition-all ${status === 'loading'
                                ? 'bg-blue-800 cursor-not-allowed'
                                : 'bg-[#D01215] text-white hover:bg-[#D01215]/80 shadow-lg'
                                }`}
                        >
                            <div className="relative w-8 h-8">
                                <Image
                                    src="/assets/icons/icon_bottle.svg"
                                    alt="Bottle Icon"
                                    fill
                                    className="object-contain brightness-0 invert"
                                />
                            </div>
                            <span className='drop-shadow-[0_0_5px_rgba(255,255,255,0.36)]'>{status === 'loading' ? 'SENDING...' : 'SEND FORM'}</span>
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
        </section>
    );
};

export default Contact;

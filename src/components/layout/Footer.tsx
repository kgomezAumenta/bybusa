'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-primary-blue text-white pt-20 pb-10 overflow-hidden">
            <div className="container mx-auto px-6">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12 mb-20">
                    <div className="text-center lg:text-left">
                        <h2 className="text-6xl md:text-8xl font-black mb-6 opacity-30 leading-none select-none">
                            MADE FOR <br /> YOU
                        </h2>

                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start space-x-4">
                                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                                    </svg>
                                </span>
                                <span className="text-lg">+1 (305) 123-4567</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-4">
                                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                                        <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                        <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                                    </svg>
                                </span>
                                <span className="text-lg">info@bybusa.com</span>
                            </div>
                            <div className="flex items-center justify-center lg:justify-start space-x-4">
                                <span className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                                    <svg className="w-5 h-5 text-accent-yellow" fill="currentColor" viewBox="0 0 20 20">
                                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                                    </svg>
                                </span>
                                <span className="text-lg text-blue-200">Miami, Florida. USA</span>
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        {/* Decorative Splash */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full filter blur-2xl z-0" />

                        {/* TODO: replace with real image: /public/assets/ui/footer-bowl.png */}
                        <div className="relative z-10 w-full max-w-[400px]">
                            <Image
                                src="/assets/ui/footer-bowl.png"
                                alt="Product Bowl"
                                width={400}
                                height={400}
                                className="object-contain"
                                onError={(e) => {
                                    (e.target as any).src = 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1587&auto=format&fit=crop';
                                }}
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 pt-10 flex flex-col md:row items-center justify-between gap-6">
                    <Link href="/" className="text-white font-bold text-2xl tracking-tighter">
                        BYB<span className="text-accent-yellow">USA</span>
                    </Link>

                    <p className="text-blue-300 text-sm">
                        © {new Date().getFullYear()} BYB USA. All rights reserved.
                        <span className="mx-2">|</span>
                        Designed with passion for quality.
                    </p>

                    <div className="flex space-x-6">
                        <Link href="#" className="hover:text-accent-yellow transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.248h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" /></svg>
                        </Link>
                        <Link href="#" className="hover:text-accent-yellow transition-colors">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;

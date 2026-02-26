'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [activeSection, setActiveSection] = useState('home');

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);

            // Basic scroll spy logic for active section
            const sections = ['home', 'about', 'products', 'contact'];
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 100 && rect.bottom >= 100) {
                        setActiveSection(section);
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home', id: 'home' },
        { name: 'About Us', href: '#about', id: 'about' },
        { name: 'Products', href: '#products', id: 'products' },
        { name: 'Contact', href: '#contact', id: 'contact' },
    ];

    const leftLinks = navLinks.slice(0, 2);
    const rightLinks = navLinks.slice(2, 4);

    return (
        <header className="absolute top-0 left-0 w-full z-50 bg-transparent">
            {/* 1. TOP BAR (PROMO) */}
            <div className="flex justify-center">
                <div className="bg-[#208EC8] px-8 py-2 md:py-3 rounded-b-[2rem] shadow-md z-10 transition-transform duration-300 transform origin-top">
                    <p className="text-white text-[10px] md:text-xs font-bold uppercase tracking-[0.15em] whitespace-nowrap">
                        ¡GET 20% OFF IN YOUR FIRST ORDER!
                    </p>
                </div>
            </div>

            {/* 2. HEADER PRINCIPAL */}
            <div
                className="w-full h-[90px] md:h-[110px] flex items-center"
            >
                <div className="container mx-auto px-6 h-full">
                    {/* Desktop Layout: 3 Columns (1fr auto 1fr) */}
                    <div className="hidden md:grid grid-cols-[1fr_auto_1fr] items-center h-full">

                        {/* Left Navigation */}
                        <nav className="flex justify-start space-x-12 lg:space-x-20">
                            {leftLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base tracking-[0.05em] uppercase transition-all duration-200 hover:opacity-70 ${activeSection === link.id ? 'font-bold text-[#1D1D1B]' : 'font-medium text-[#1D1D1B]/80'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>

                        {/* Centered Logo */}
                        <div className="flex justify-center px-8">
                            <Link href="/#home" className="relative w-30 h-15 lg:w-30 lg:h-15 transition-transform duration-300 hover:scale-105">
                                <Image
                                    src="/assets/ui/header-logo.svg"
                                    alt="BYB USA Logo"
                                    fill
                                    className="object-contain"
                                    priority
                                />
                            </Link>
                        </div>

                        {/* Right Navigation */}
                        <nav className="flex justify-end space-x-12 lg:space-x-20">
                            {rightLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={`text-base tracking-[0.05em] uppercase transition-all duration-200 hover:opacity-70 ${activeSection === link.id ? 'font-bold text-[#1D1D1B]' : 'font-medium text-[#1D1D1B]/80'
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </nav>
                    </div>

                    {/* Mobile Layout */}
                    <div className="flex md:hidden justify-between items-center h-full">
                        <div className="w-10"></div> {/* Spacer for symmetry if needed */}

                        <Link href="/#home" className="relative w-32 h-16">
                            <Image
                                src="/assets/ui/header-logo.svg"
                                alt="BYB USA Logo"
                                fill
                                className="object-contain"
                                priority
                            />
                        </Link>

                        <button
                            className={`${isScrolled ? 'text-[#1D1D1B]' : 'text-[#1D1D1B]'} focus:outline-none`}
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        >
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                {mobileMenuOpen ? (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                ) : (
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                                )}
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Nav Overlay */}
            <div
                className={`fixed inset-0 bg-white z-[60] transition-transform duration-500 transform ${mobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
                    } md:hidden`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-6">
                        <button onClick={() => setMobileMenuOpen(false)} className="text-[#1D1D1B]">
                            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                            </svg>
                        </button>
                    </div>

                    <nav className="flex flex-col items-center justify-center space-y-8 flex-grow">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`text-xl tracking-[0.1em] uppercase ${activeSection === link.id ? 'font-bold text-[#1D1D1B]' : 'font-medium text-[#1D1D1B]/60'
                                    }`}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;

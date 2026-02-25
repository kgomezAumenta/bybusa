'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-[#F7F2F0] text-light pb-10 overflow-hidden">
            <div className="bg-secondary-blue w-[95%] mx-auto p-10 rounded-[3vw]">
                <div className="grid grid-cols-1 lg:grid-cols-[40%_20%_40%] items-center gap-12">
                    {/* Column 1: Brand Message */}
                    <div className="text-center lg:text-left">
                        <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none select-none tracking-wide">
                            MADE <span className="text-4xl md:text-6xl">FOR</span> YOU
                        </h2>

                        <p className="text-m mb-6 max-w-md mx-auto lg:mx-0">
                            Market, adhering to the highest standards, complying with international regulations, and fostering solid and sustainable business relationships.
                        </p>
                    </div>

                    {/* Column 2: Contact Info */}
                    <div className="flex flex-col space-y-6 text-center lg:text-left items-center lg:items-start">
                        <h3 className="text-2xl mb-1 font-bold uppercase tracking-widest text-light">Contact Us</h3>
                        <p className="text-m mb-0 max-w-md mx-auto lg:mx-0 opacity-70">Alto Trading LLC</p>
                        <p className="text-m mb-2 max-w-md mx-auto lg:mx-0">121 ALHAMBRA PLZ STE 1500 CORAL GABLES, FL – 333134-4551</p>
                        <div className="space-y-4">
                            <div className="flex items-center justify-center lg:justify-start space-x-4">
                                <span className="w-10 h-10 flex items-center justify-center">
                                    <Image
                                        src="/assets/icons/icon_phone.svg"
                                        alt="Phone Icon"
                                        width={20}
                                        height={20}
                                        className="w-5 h-5 brightness-200"
                                    />
                                </span>
                                <span className="text-lg underline">703 350 0776</span>
                            </div>
                        </div>
                    </div>

                    {/* Column 3: Image & Insignia */}
                    <div className="relative flex justify-center lg:justify-center">
                        <div className="relative group">
                            {/* Decorative Splash Background */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full filter blur-2xl z-0" />

                            {/* Product Bowl */}
                            <div className="relative z-10 w-full max-w-[450px]">
                                <Image
                                    src="/assets/ui/footer-bowl.png"
                                    alt="Product Bowl"
                                    width={500}
                                    height={500}
                                    className="object-contain"
                                    onError={(e) => {
                                        (e.target as any).src = 'https://images.unsplash.com/photo-1547514701-42782101795e?q=80&w=1587&auto=format&fit=crop';
                                    }}
                                />

                                {/* Quality Insignia Overlapping */}
                                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 -translate-y-6 z-20 w-32 h-32 md:w-40 md:h-40 transform hover:scale-110 transition-transform duration-300">
                                    <Image
                                        src="/assets/ui/insignia_quality-trust.svg"
                                        alt="Quality and Trust Insignia"
                                        fill
                                        className="object-contain"
                                        onError={(e) => {
                                            (e.target as any).src = 'https://www.svgrepo.com/show/447233/badge-check-fill.svg';
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <p className="text-light text-sm text-center">
                    Powered by <span className="font-bold mr-4">Aumenta</span>
                    {/* <span className="mx-2">|</span> */}
                    Copyright <span className="font-bold">{new Date().getFullYear()}</span>
                </p>
            </div>
        </footer >
    );
};

export default Footer;

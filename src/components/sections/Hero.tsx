'use client';

import Image from 'next/image';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[90vh] md:min-h-screen flex items-center overflow-hidden pt-20 bg-white">

            {/* 2 & 3. BACKGROUND (MOUNT IMAGE + OVERLAY) */}
            <div className="absolute inset-0 z-0">
                {/* Image on the right half */}
                <div className="absolute right-0 top-0 w-full md:w-1/2 h-full">
                    <Image
                        src="/assets/hero/hero-bg.png"
                        alt="Authentic Homemade Taste"
                        fill
                        className="object-cover object-right"
                        priority
                        onError={(e) => {
                            (e.target as any).src = 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop';
                        }}
                    />
                </div>

                {/* Split Background Effect & Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#F2FAFF] via-[#F2FAFF]/95 md:via-[#F2FAFF]/70 to-transparent z-10" />
            </div>

            {/* 7. DECORATIVE ELEMENT (TOMATE) */}
            <div className="absolute left-[-100px] top-[15%] w-[300px] h-[300px] z-20 opacity-80 pointer-events-none hidden lg:block">
                <Image
                    src="/assets/hero/tomato.svg"
                    alt="Decorative Tomato"
                    width={300}
                    height={300}
                    className="object-contain"
                    onError={(e) => {
                        (e.target as any).className = "hidden";
                    }}
                />
            </div>

            {/* 4. CONTENIDO PRINCIPAL (TEXTO) */}
            <div className="container mx-auto px-6 md:px-12 relative z-30">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center md:items-start text-center md:text-left pt-10 pb-32 md:pb-40">
                    <h1 className="text-[#0E587F] font-bold text-[50px] md:text-[114px] leading-[100%] tracking-[-0.01em] uppercase mb-8">
                        {/* font-family: Merchanto (Requested as Bold Round) */}
                        AUTHENTIC <span className="text-[0.6em] md:text-[0.45em] align-baseline font-bold">TOUCH</span> <br />
                        OF HOMEMADE <br />
                        TASTE
                    </h1>
                </div>
            </div>

            {/* 5. WAVE INFERIOR AZUL */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-40 transform translate-y-1">
                <div className="relative w-full h-[350px] md:h-[280px]">
                    <svg
                        viewBox="0 0 1000 100"
                        preserveAspectRatio="none"
                        className="absolute bottom-0 left-0 w-full h-full fill-[#208ec8]"
                    >
                        <g transform="rotate(180 500 50)">
                            <path d="M500 4c-125 0-125 96-250 96S125 4 0 4V0h1000v4c-125 0-125 96-250 96S625 4 500 4Z"></path>
                        </g>
                    </svg>

                    {/* 6. FEATURES INFERIORES (Inside/On the blue zone) */}
                    <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-50">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1100px] mx-auto gap-8 md:gap-4">

                                {/* Feature 1 */}
                                <div className="flex items-center space-x-4 max-w-[280px]">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#0E587F] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                        </svg>
                                    </div>
                                    <div className="text-white text-left">
                                        <h4 className="font-bold text-sm md:text-base tracking-widest uppercase">100% NATURAL</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">No artificial preservatives or added colors.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center space-x-4 max-w-[320px]">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#0E587F] rounded-full flex items-center justify-center border-2 border-white shadow-lg">
                                        <svg className="w-6 h-6 md:w-8 md:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                                        </svg>
                                    </div>
                                    <div className="text-white text-left">
                                        <h4 className="font-bold text-sm md:text-base tracking-widest uppercase">ARTISANAL QUALITY</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">Crafted in small batches to ensure authentic flavor.</p>
                                    </div>
                                </div>

                                {/* yellow Button */}
                                <div className="pt-4 md:pt-0">
                                    <button className="bg-[#FEB100] hover:bg-[#E5A000] text-white font-bold py-4 px-10 md:py-5 md:px-14 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-[0.1em] text-sm md:text-base">
                                        SEE PRODUCTS!
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

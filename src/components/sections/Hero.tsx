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
                        {/* font-family: Staatliches */}
                        AUTHENTIC <span className="text-[0.6em] md:text-[0.45em] align-baseline font-bold">TOUCH</span> <br />
                        OF HOMEMADE <br />
                        TASTE
                    </h1>
                </div>
            </div>

            {/* 5. WAVE INFERIOR AZUL */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-40 transform translate-y-1">
                <div className="relative w-full h-[350px] md:h-[280px]">
                    <Image
                        src="/assets/hero/wave_hero.svg"
                        alt=""
                        fill
                        className="object-cover object-bottom"
                        priority
                    />

                    {/* 6. FEATURES INFERIORES (Inside/On the blue zone) */}
                    <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-50">
                        <div className="container mx-auto px-6">
                            <div className="flex flex-col md:flex-row items-center justify-between max-w-[1100px] mx-auto gap-8 md:gap-4">

                                {/* Feature 1 */}
                                <div className="flex items-center space-x-4 max-w-[280px]">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#0E587F] rounded-full flex items-center justify-center border-2 border-white shadow-lg overflow-hidden p-2">
                                        <div className="relative w-7 h-7 md:w-9 md:h-9">
                                            <Image
                                                src="/assets/icons/icon_natural.svg"
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-white text-left">
                                        <h4 className="font-bold text-sm md:text-base tracking-widest uppercase">100% NATURAL</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">No artificial preservatives or added colors.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center space-x-4 max-w-[320px]">
                                    <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 bg-[#0E587F] rounded-full flex items-center justify-center border-2 border-white shadow-lg overflow-hidden p-2">
                                        <div className="relative w-7 h-7 md:w-9 md:h-9">
                                            <Image
                                                src="/assets/icons/icon_artisanal.svg"
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-white text-left">
                                        <h4 className="font-bold text-sm md:text-base tracking-widest uppercase">ARTISANAL QUALITY</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">Crafted in small batches to ensure authentic flavor.</p>
                                    </div>
                                </div>

                                {/* yellow Button */}
                                <div className="pt-4 md:pt-0">
                                    <button className="bg-[#FEB100] hover:bg-[#E5A000] text-white font-bold p-2 px-8 rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl uppercase tracking-[0.1em] text-sm md:text-base flex items-center gap-3">
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="/assets/icons/icon_bottle.svg"
                                                alt="Bottle Icon"
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                        <span className='drop-shadow-[0_0_5px_rgba(255,255,255,0.36)]' >SEE PRODUCTS!</span>
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

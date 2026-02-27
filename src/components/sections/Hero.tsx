'use client';

import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
    return (
        <section id="home" className="relative min-h-[85vh] max-[400px]:min-h-[110vh] md:min-h-[100vh] flex items-center overflow-x-hidden overflow-y-hidden pt-20 bg-[#F2FAFF]">

            {/* 1. BACKGROUND (MOUNT IMAGE + OVERLAY) */}
            <div className="absolute inset-0 z-0">
                {/* Image on the right half */}
                <div className="absolute top-0 left-0 w-full md:left-[45%] md:w-[55%] h-full overflow-hidden">
                    <Image
                        src="/assets/hero/hero-bg.png"
                        alt="Authentic Homemade Taste"
                        fill
                        className="object-cover object-center md:object-left"
                        priority
                    />
                </div>

                {/* Overlay Gradient: Starting solid left, fading right */}
                <div className="absolute top-0 left-0 w-[0%] md:w-[55%] h-full bg-gradient-to-r from-[#F2FAFF] via-[#F2FAFF]/90 via-60% to-transparent z-10" />
            </div>
            {/* 2. DECORATIVE ELEMENT (TOMATO) */}
            <div className="absolute left-0 top-1/2 -translate-y-[15%] -translate-x-[50%] -rotate-15 w-[320px] h-[320px] z-50 pointer-events-none hidden lg:block">
                <Image
                    src="/assets/hero/tomato.png"
                    alt="Decorative Tomato"
                    fill
                    className="object-contain"
                />
            </div>

            {/* 3. MAIN CONTENT (TEXT) */}
            <div className="container mx-auto px-6 md:px-12 relative z-30">
                <div className="max-w-[1200px] mx-auto flex flex-col items-center md:items-start text-center md:text-left pt-10 pb-32 md:pb-40">
                    <h1 className="text-[#0E587F] font-bold text-[50px] md:text-[110px] leading-[100%] tracking-wide uppercase mb-8">
                        {/* font-family: Staatliches */}
                        AUTHENTIC <span className="text-[0.6em] md:text-[0.35em] align-baseline font-bold">TOUCH</span> <br />
                        OF HOMEMADE <br />
                        TASTE
                    </h1>
                </div>
            </div>

            {/* 4. BOTTOM WAVE ZONE */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-40">
                {/* Wrapper que recorta el SVG (30% vertical visible) */}
                <div className="relative w-full h-[330px] max-[400px]:h-[310px] md:h-[268px]">
                    <svg
                        viewBox="0 0 1442 570"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="block h-auto w-[250vw] max-w-none relative left-[55%] md:left-1/2 -translate-x-1/2 -translate-y-[4%] md:w-full md:left-0 md:-translate-x-1/2 md:-translate-y-[12%]"
                    >
                        <g filter="url(#filter0_d_1_734)">
                            <path
                                d="M-0.378783 140.668L281.555 190.505C328.305 198.769 376.47 190.133 417.437 166.142L466.678 137.306C593.305 63.1523 746.461 49.5212 884.193 100.147L1119.05 186.473C1149.14 197.533 1181.45 201.198 1213.25 197.158L1658 140.668V551.517H-0.378783V140.668Z"
                                fill="url(#fillTopRightFade)"
                            />
                        </g>

                        <defs>
                            <linearGradient id="fillTopRightFade" x1="0" y1="1" x2="1" y2="0">
                                <stop offset="0%" stopColor="#208EC8" stopOpacity="1" />
                                <stop offset="60%" stopColor="#208EC8" stopOpacity="1" />
                                <stop offset="100%" stopColor="#208EC8" stopOpacity="0.10" />
                            </linearGradient>

                            <filter
                                id="filter0_d_1_734"
                                x="-44.3788"
                                y="0"
                                width="1746.38"
                                height="569.517"
                                filterUnits="userSpaceOnUse"
                                colorInterpolationFilters="sRGB"
                            >
                                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                                <feColorMatrix
                                    in="SourceAlpha"
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                                    result="hardAlpha"
                                />
                                <feOffset dy="-26" />
                                <feGaussianBlur stdDeviation="22" />
                                <feComposite in2="hardAlpha" operator="out" />
                                <feColorMatrix
                                    type="matrix"
                                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                                />
                                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1_734" />
                                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1_734" result="shape" />
                            </filter>
                        </defs>
                    </svg>


                    {/* 5. FEATURES & BUTTON (Inside/On the blue zone) */}
                    <div className="absolute bottom-[16px] md:bottom-12 left-0 w-full z-50">
                        <div className="w-full md:w-[90%] px-6 md:pl-[114px] md:pr-12">
                            <div className="flex flex-col md:flex-row items-center md:items-end justify-start gap-6 md:gap-8">

                                {/* Feature 1 */}
                                <div className="flex items-center space-x-4 max-w-[320px]">
                                    <div className="flex-shrink-0 w-14 h-14 md:w-18 md:h-18 bg-[#0E587F] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                                        <div className="relative w-7 h-7 md:w-9 md:h-9">
                                            <Image
                                                src="/assets/icons/icon_natural.svg"
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-white text-center md:text-left">
                                        <h4 className="font-montserrat font-bold text-base md:text-lg tracking-widest uppercase">100% NATURAL</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">No artificial preservatives or added colors.</p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex items-center space-x-4 max-w-[320px]">
                                    <div className="flex-shrink-0 w-14 h-14 md:w-18 md:h-18 bg-[#0E587F] rounded-full flex items-center justify-center shadow-lg overflow-hidden">
                                        <div className="relative w-7 h-7 md:w-9 md:h-9">
                                            <Image
                                                src="/assets/icons/icon_artisanal.svg"
                                                alt=""
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                    </div>
                                    <div className="text-white text-center md:text-left">
                                        <h4 className="font-montserrat font-bold text-base md:text-lg tracking-widest uppercase">ARTISANAL QUALITY</h4>
                                        <p className="text-[10px] md:text-xs opacity-90 leading-tight">Crafted in small batches to ensure authentic flavor.</p>
                                    </div>
                                </div>

                                {/* yellow Button */}
                                <div className="pt-0 md:pt-0">
                                    <Link
                                        href="#products"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            const element = document.getElementById('products');
                                            if (element) {
                                                const offset = 80;
                                                const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
                                                window.scrollTo({
                                                    top: elementPosition - offset,
                                                    behavior: 'smooth'
                                                });
                                                window.history.pushState(null, '', '#products');
                                            }
                                        }}
                                        className="bg-[#FEB100] hover:bg-[#E5A000] text-white font-bold py-4 px-10 rounded-full transition-all duration-300 transform hover:scale-105 shadow-sm uppercase tracking-[0.1em] text-sm md:text-base flex items-center gap-3"
                                    >
                                        <div className="relative w-8 h-8 flex-shrink-0">
                                            <Image
                                                src="/assets/icons/icon_bottle.svg"
                                                alt="Bottle Icon"
                                                fill
                                                className="object-contain brightness-0 invert"
                                            />
                                        </div>
                                        <span className='drop-shadow-[0_0_5px_rgba(255,255,255,0.36)]' >SEE PRODUCTS!</span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </section >
    );
};

export default Hero;

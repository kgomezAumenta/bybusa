'use client';

import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="section-padding bg-secondary-blue overflow-x-hidden relative pt-40">
            <div className="container mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
                    {/* Image Column */}
                    <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
                        {/* Decorative Red Splash */}
                        <div className="absolute left-0 top-0 -translate-x-[51%] -translate-y-[22%] z-0 w-[400px] md:w-[800px]">
                            <Image
                                src="/assets/about/splash.png"
                                alt="Decorative red splash"
                                width={500}
                                height={500}
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Rotated Image Card */}
                        <div className="relative z-10 p-4 rotate-[5deg] inline-block ml-7 md:ml-8">
                            <div className="relative aspect-[4/5] w-[380px] sm:w-[450px] md:w-[555px] md:h-[625px] overflow-hidden">
                                <Image
                                    src="/assets/about/about-image.png"
                                    alt="Truck delivering goods"
                                    fill
                                    className="object-cover object-[73%_50%]"
                                />
                            </div>

                            {/* Red Sticker (Bottom Left of Image) */}
                            <div className="absolute -bottom-4 left-5 max-[400px]:left-6 md:-bottom-12 md:-left-4 z-30 w-38 md:w-62 rotate-[-6deg]">
                                <Image
                                    src="/assets/about/insignia_best.svg"
                                    alt="Best on the market badge"
                                    width={160}
                                    height={160}
                                    className="w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="w-full lg:w-1/2 relative">
                        {/* Top Right Quality Badge - Center on mobile, Right on desktop */}
                        <div className="absolute max-[400px]:-top-10 max-[400px]:left-80 max-[400px]:w-25 -top-10 left-85 w-30 md:-top-20 md:-left-1/2 -translate-x-1/2 lg:left-auto lg:right-0 lg:top-0 lg:-translate-x-11 lg:-translate-y-14 md:w-42 rotate-[6deg] z-20">
                            <Image
                                src="/assets/about/insignia_quality.svg"
                                alt="Quality guarantee badge"
                                width={128}
                                height={128}
                                className="w-full h-auto"
                            />
                        </div>

                        <div className="inline-block text-light text-2xl font-bold uppercase tracking-widest mb-2">
                            About Us
                        </div>
                        <div className="mb-16 text-[#F7F2F0] lg:w-[100%]">
                            <h2 className="text-6xl md:text-[6.5rem] font-black mb-6 leading-none select-none tracking-wider">
                                Committed <span className="text-4xl md:text-6xl">to</span> <br />
                                delivering high-quality products <span className="text-4xl md:text-6xl">to</span> the U.S
                            </h2>
                            <p className="text-m md:text-m mb-8 leading-relaxed lg:w-[95%]">
                                Market, adhering to the highest standards, complying with international regulations, and fostering solid and sustainable business relationships.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

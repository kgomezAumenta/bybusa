'use client';

import Image from 'next/image';

const About = () => {
    return (
        <section id="about" className="section-padding bg-white overflow-hidden">
            <div className="container mx-auto">
                <div className="flex flex-col lg:flex-row items-center gap-16">
                    {/* Image Column */}
                    <div className="lg:w-1/2 relative">
                        <div className="relative z-10 p-4 bg-white shadow-2xl rounded-2xl about-card-rotate inline-block">
                            {/* TODO: replace with real image: /public/assets/about/about-image.png */}
                            <div className="relative w-full max-w-[500px] aspect-[4/5] bg-gray-200 rounded-xl overflow-hidden">
                                <Image
                                    src="/assets/about/about-image.png"
                                    alt="Our Heritage"
                                    width={500}
                                    height={625}
                                    className="object-cover"
                                    onError={(e) => {
                                        (e.target as any).src = 'https://images.unsplash.com/photo-1550989460-0adf9ea622e2?q=80&w=1587&auto=format&fit=crop';
                                    }}
                                />
                            </div>
                        </div>

                        {/* Decorative Splash/Badge Placeholder */}
                        <div className="absolute -bottom-8 -left-8 z-20 w-32 h-32 md:w-40 md:h-40">
                            {/* TODO: replace with real image: /public/assets/ui/badge-about.png */}
                            <div className="w-full h-full bg-accent-yellow rounded-full flex items-center justify-center text-primary-blue font-bold text-center p-4 shadow-lg animate-pulse">
                                SINCE 1995
                            </div>
                        </div>

                        {/* Decorative Element Placeholder */}
                        <div className="absolute -top-10 -right-10 z-0 opacity-20">
                            <div className="w-64 h-64 bg-primary-blue rounded-full filter blur-3xl" />
                        </div>
                    </div>

                    {/* Text Column */}
                    <div className="lg:w-1/2">
                        <div className="inline-block bg-primary-blue/10 text-primary-blue px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-4">
                            Our Story
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary-blue">
                            CRAFTING TRADITION <br />
                            <span className="text-secondary-blue">IN EVERY BOTTLE</span>
                        </h2>
                        <div className="space-y-6 text-gray-600 text-lg leading-relaxed">
                            <p>
                                At BYB USA, we believe that the secret to great food lies in the quality of its
                                ingredients. What started as a small family kitchen in 1995 has grown into a
                                legacy of artisanal excellence.
                            </p>
                            <p>
                                Every sauce, dressing, and seasoning we produce is carefully crafted using
                                time-honored techniques and the freshest local ingredients. We don't take
                                shortcuts because we believe your family deserves the same quality we serve
                                at our own table.
                            </p>
                            <p className="font-semibold text-primary-blue italic">
                                "Authenticity isn't just a word for us; it's the foundation of everything we create."
                            </p>
                        </div>

                        <div className="mt-10 flex border-l-4 border-accent-yellow pl-6 py-2">
                            <div>
                                <h4 className="font-bold text-xl text-primary-blue">Family Recipe</h4>
                                <p className="text-gray-500">Passed down through generations of masters.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

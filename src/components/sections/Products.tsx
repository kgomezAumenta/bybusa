'use client';

import { useState } from 'react';
import Image from 'next/image';
import { productData } from '@/data/products';

const BestFlavorsStrip = () => {
    const items = Array.from({ length: 20 });
    return (
        <div className="absolute top-4 left-0 w-full overflow-visible z-20">
            <div
                className="bg-white py-2 md:py-2 flex items-center whitespace-nowrap w-[250vw] -left-[75vw] relative shadow-[0_4px_10px_rgba(0,0,0,0.1)] border-y border-gray-100"
                style={{ transform: 'rotate(-2.64deg)' }}
            >
                {items.map((_, i) => (
                    <div key={i} className="flex items-center shrink-0">
                        <span className="text-[#990722] font-staatliches font-bold text-2xl md:text-2xl uppercase tracking-[0.05em] leading-none">
                            BEST FLAVORS
                        </span>
                        <div className="relative w-5 h-7 md:w-6 md:h-9 mx-8 md:mx-8">
                            <Image
                                src="/assets/icons/icon_bottlered.svg"
                                alt=""
                                fill
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

const Products = () => {
    const [activeTab, setActiveTab] = useState(productData[0].id);

    const activeCategory = productData.find(cat => cat.id === activeTab);

    return (
        <section id="products" className="relative section-padding pt-45 bg-secondary-blue overflow-visible">
            <BestFlavorsStrip />
            <div className="absolute top-0 left-0 w-full z-0 pointer-events-none">
                <Image
                    src="/assets/general/wave_products.svg"
                    alt=""
                    width={1920}
                    height={500}
                    className="w-full h-auto"
                    priority
                />
            </div>
            <div className="w-[95%] lg:w-[100%] mx-auto relative z-10">
                <div className="text-center mb-16 text-[#F7F2F0]">
                    <h2 className="text-6xl md:text-8xl font-black mb-6 leading-none select-none tracking-wide">
                        <span className="text-4xl md:text-6xl">OUR</span> BEST <br /> PRODUCTS
                    </h2>
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {productData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-2 rounded-full font-bold text-sm tracking-widest transition-all duration-300 uppercase flex items-center gap-2 ${activeTab === category.id
                                ? 'product-tab-active scale-105'
                                : 'product-tab-inactive'
                                }`}
                            aria-selected={activeTab === category.id}
                            role="tab"
                        >
                            {activeTab === category.id && (
                                <div className="relative w-4 h-6 flex-shrink-0 -ml-1">
                                    <Image
                                        src="/assets/icons/icon_bottle.svg"
                                        alt=""
                                        fill
                                        className="object-contain brightness-0 invert"
                                    />
                                </div>
                            )}
                            <span>{category.label}</span>
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-20 transition-opacity duration-300 pt-20">
                    {activeCategory?.items.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1371A2] rounded-xl px-6 pt-6 pb-12 shadow-md hover:shadow-xl transition-shadow group flex flex-col relative overflow-visible"
                        >
                            <div className="relative h-[420px] md:h-[460px] -translate-y-[25%] flex items-center justify-center p-4 mb-[-20%] md:mb-[-20%] z-10 pointer-events-none">
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={500}
                                    height={500}
                                    className="h-full w-auto object-contain transition-transform duration-500 group-hover:scale-110 drop-shadow-2xl"
                                    onError={(e) => {
                                        (e.target as any).src = 'https://images.unsplash.com/photo-1590779033100-9f60705a013d?q=80&w=1587&auto=format&fit=crop';
                                    }}
                                />
                            </div>

                            <div className="-mt-12 flex flex-col flex-grow">
                                <h3 className="text-center font-montserrat text-[22px] font-bold text-white uppercase tracking-wide">
                                    {product.name}
                                </h3>
                                <p className="text-center font-montserrat text-[16px] text-white/90 font-normal leading-relaxed mb-4 flex-grow">
                                    {product.description}
                                </p>

                                <div className="mb-6">
                                    <h4 className="text-white font-montserrat uppercase text-[15px] font-bold tracking-[0.15em] mb-2">
                                        SIZE
                                    </h4>
                                    <div className="flex flex-wrap gap-2">
                                        {product.sizes.map((size, i) => (
                                            <span
                                                key={size}
                                                className={`px-4 py-2 text-sm font-semibold rounded-full min-w-[85px] text-center transition-colors cursor-default ${i === 0
                                                    ? 'bg-[#23B3FF] text-white'
                                                    : 'bg-[#0F4B6A]/30 text-white/80'
                                                    }`}
                                            >
                                                {size}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            <button className="absolute left-1/2 -translate-x-1/2 bottom-0 translate-y-1/2 flex items-center justify-center gap-3 py-4 px-10 bg-[#FEB100] text-white rounded-full font-bold hover:bg-[#D01215] transition-all uppercase tracking-[0.1em] text-[15px]  group/btn whitespace-nowrap">
                                <div className="relative w-5 h-5 flex-shrink-0">
                                    <Image
                                        src="/assets/icons/icon_bottle.svg"
                                        alt="Bottle Icon"
                                        fill
                                        className="object-contain brightness-0 invert group-hover/btn:scale-110 transition-transform"
                                    />
                                </div>
                                <span className='drop-shadow-[0_0_5px_rgba(255,255,255,0.36)]'>BUY NOW!</span>
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

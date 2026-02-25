'use client';

import { useState } from 'react';
import Image from 'next/image';
import { productData } from '@/data/products';

const Products = () => {
    const [activeTab, setActiveTab] = useState(productData[0].id);

    const activeCategory = productData.find(cat => cat.id === activeTab);

    return (
        <section id="products" className="section-padding bg-secondary-blue">
            <div className="container mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        OUR BEST <span className="text-white">PRODUCTS</span>
                    </h2>
                    {/* <div className="w-24 h-1 bg-accent-yellow mx-auto"></div> */}
                </div>

                {/* Tabs */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {productData.map((category) => (
                        <button
                            key={category.id}
                            onClick={() => setActiveTab(category.id)}
                            className={`px-6 py-3 rounded-full font-bold text-sm tracking-widest transition-all duration-300 uppercase ${activeTab === category.id
                                ? 'product-tab-active shadow-lg scale-105'
                                : 'product-tab-inactive'
                                }`}
                            aria-selected={activeTab === category.id}
                            role="tab"
                        >
                            {category.label}
                        </button>
                    ))}
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-opacity duration-300">
                    {activeCategory?.items.map((product) => (
                        <div
                            key={product.id}
                            className="bg-[#1371A2] rounded-2xl p-6 shadow-md hover:shadow-xl transition-shadow group flex flex-col"
                        >
                            <div className="relative aspect-square mb-6 overflow-hidden rounded-xl flex items-center justify-center p-8">
                                {/* TODO: replace with real image: /public/assets/products/[name].png */}
                                <Image
                                    src={product.image}
                                    alt={product.name}
                                    width={300}
                                    height={300}
                                    className="object-contain transition-transform duration-500 group-hover:scale-110"
                                    onError={(e) => {
                                        (e.target as any).src = 'https://images.unsplash.com/photo-1590779033100-9f60705a013d?q=80&w=1587&auto=format&fit=crop';
                                    }}
                                />
                            </div>

                            <h3 className="text-center text-[20px] font-bold text-light mb-2">{product.name}</h3>
                            <p className="text-center text-light text-[16px] mb-4 flex-grow">{product.description}</p>

                            <div className="flex flex-wrap gap-2 mb-6">
                                <h3 className="text-light text-[16px]">Sizes</h3><br />
                                {product.sizes.map((size) => (
                                    <span
                                        key={size}
                                        className="px-3 py-1 bg-[#0F4B6A] text-light text-xs font-bold rounded-md"
                                    >
                                        {size}
                                    </span>
                                ))}
                            </div>

                            <button className="w-full py-3 bg-[#FEB100] text-white rounded-xl font-bold hover:bg-secondary-blue transition-colors uppercase tracking-widest text-xs">
                                BUY NOW!
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Products;

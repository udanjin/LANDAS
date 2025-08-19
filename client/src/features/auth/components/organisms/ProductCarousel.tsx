import React, { useState, useEffect, useRef } from 'react';
import ProductCard from '../atoms/ProductCard';
import { ProductCardProps } from '@/shared/types/dashboardTypes';

// --- DATA DUMMY ---
const products: ProductCardProps[] = [
    { image: 'https://placehold.co/300x400/E2E8F0/4A5568?text=Vest', title: 'Lightweight Puffer Vest', description: 'Perfect for chilly weather', tags: ['#casual', '#lightweight'] },
    { image: 'https://placehold.co/300x400/4A5568/FFFFFF?text=Fleece', title: 'Cozy Warm Fleece', description: 'When you need extra warmth', tags: ['#cozy', '#warm'] },
    { image: 'https://placehold.co/300x400/1A202C/FFFFFF?text=Jacket', title: 'All-Weather Windbreaker', description: 'Suitable for windy days', tags: ['#windproof', '#jacket'] },
    { image: 'https://placehold.co/600x800/CBD5E0/2D3748?text=Main+Jacket', title: 'The Ultimate Season Jacket', description: 'Style and utility in one collection', tags: ['#versatile', '#stylish'] },
    { image: 'https://placehold.co/300x400/FEEBC8/9C4221?text=Sweater', title: 'Classic Knit Sweater', description: 'A timeless wardrobe staple', tags: ['#classic', '#knit'] },
    { image: 'https://placehold.co/300x400/C6F6D5/22543D?text=Polo', title: 'Performance Polo Shirt', description: 'Stay cool and comfortable', tags: ['#sporty', '#breathable'] },
    { image: 'https://placehold.co/300x400/E9D8FD/553C9A?text=Hoodie', title: 'Essential Pullover Hoodie', description: 'For a relaxed, easy look', tags: ['#hoodie', '#casual'] },
    { image: 'https://placehold.co/600x800/BEE3F8/1A365D?text=Main+Coat', title: 'Elegant Winter Overcoat', description: 'Sophistication meets warmth', tags: ['#elegant', '#winter'] },
];

const ProductCarousel: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef<number | null>(null);

    // Auto-play logic
    useEffect(() => {
        if (timeoutRef.current) clearTimeout(timeoutRef.current);
        timeoutRef.current = window.setTimeout(
            () => setCurrentIndex((prevIndex) => (prevIndex + 1) % products.length),
            5000
        );
        return () => { if (timeoutRef.current) clearTimeout(timeoutRef.current) };
    }, [currentIndex]);

    const getVisibleProducts = () => {
        const visible = [];
        for (let i = 0; i < 4; i++) {
            visible.push(products[(currentIndex + i) % products.length]);
        }
        return visible;
    };

    const visibleProducts = getVisibleProducts();

    return (
        <section className="bg-gray-100 py-20">
            <div className="container mx-auto px-4">
                <h2 className="text-xl font-semibold mb-8">스타일과 실용성을 모두 담은 시즌 컬렉션</h2>
                
                {/* PERUBAHAN DI SINI: Proporsi diubah menjadi 3/5 dan 2/5 */}
                <div className="flex items-end gap-6">
                    {/* 3 Kartu Kecil sekarang mengambil 3/5 (60%) ruang */}
                    <div className="grid grid-cols-3 gap-6 w-3/5">
                        {visibleProducts.slice(0, 3).map((product, index) => (
                            <ProductCard key={`${currentIndex}-${product.title}-${index}`} {...product} />
                        ))}
                    </div>
                    {/* 1 Kartu Besar sekarang mengambil 2/5 (40%) ruang */}
                    <div className="w-2/6">
                        {visibleProducts[3] && (
                            <ProductCard 
                                {...visibleProducts[3]} 
                                className="rounded-br-[60px]"
                                key={`${currentIndex}-${visibleProducts[3].title}`}
                            />
                        )}
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8">
                    <div className="relative w-24 h-1 bg-gray-300 rounded-full">
                        <div 
                            className="absolute top-0 left-0 h-full bg-yellow-400 rounded-full transition-transform duration-300"
                            style={{ 
                                width: `${100 / products.length}%`, 
                                transform: `translateX(${currentIndex * 100}%)` 
                            }}
                        ></div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ProductCarousel;
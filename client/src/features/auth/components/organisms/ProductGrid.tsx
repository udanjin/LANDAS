import React from 'react';
import ProductListItem from '../atoms/ProductListItem';
import { ProductListItemProps } from '@/shared/types/dashboardTypes';

// --- DATA DUMMY ---
const productList: ProductListItemProps[] = [
    {
        image: 'https://placehold.co/400x500/5A6752/FFFFFF?text=Jacket+1',
        name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
        brand: '브랜드명',
        code: '그레이코드-색상명',
        price: '000,000',
        colors: ['#FFD700', '#000000', '#FFFFFF', '#F5DEB3', '#A0522D']
    },
    {
        image: 'https://placehold.co/400x500/5A6752/FFFFFF?text=Jacket+2',
        name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
        brand: '브랜드명',
        code: '그레이코드-색상명',
        price: '000,000',
        colors: ['#000000', '#FFFFFF', '#FFD700', '#F5DEB3', '#A0522D']
    },
    {
        image: 'https://placehold.co/400x500/5A6752/FFFFFF?text=Jacket+3',
        name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
        brand: '브랜드명',
        code: '그레이코드-색상명',
        price: '000,000',
        colors: ['#FFFFFF', '#000000', '#FFD700', '#F5DEB3', '#A0522D']
    },
    {
        image: 'https://placehold.co/400x500/5A6752/FFFFFF?text=Jacket+4',
        name: '상품명이 노출 됩니다.상품명이 노출 됩니...',
        brand: '브랜드명',
        code: '그레이코드-색상명',
        price: '000,000',
        colors: ['#FFD700', '#000000', '#FFFFFF', '#F5DEB3', '#A0522D']
    },
];


const ProductGrid: React.FC = () => {
    return (
        <section className="bg-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-xl font-bold mb-2">상품 진열이 들어갑니다.</h2>
                <p className="text-gray-500 mb-12">부타이틀이 필요할 경우 텍스트가 들어갑니다.</p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-12">
                    {productList.map((product, index) => (
                        <ProductListItem key={index} {...product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
import React from 'react';
import { ProductListItemProps } from '@/shared/types/dashboardTypes';
import ColorSwatch from './ColorSwatch';

const ProductListItem: React.FC<ProductListItemProps> = ({ image, name, brand, code, price, colors }) => {
  return (
    <div className="text-left">
      <div className="bg-gray-200 rounded-lg mb-4 overflow-hidden">
        <img src={image} alt={name} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
      </div>
      <div className="flex items-center gap-1 mb-2">
        {colors.map((color, index) => (
          <ColorSwatch key={index} color={color} isActive={index === 0} />
        ))}
      </div>
      <h3 className="font-semibold text-sm truncate">{name}</h3>
      <p className="text-xs text-gray-500 mb-1">{`[${brand}] ${code}`}</p>
      <p className="text-sm font-bold">{price}원</p>
    </div>
  );
};

export default ProductListItem;
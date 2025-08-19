import React from 'react';
import { ProductCardProps } from '@/shared/types/dashboardTypes';
import { classNameMerge } from '@/shared/utils/classMerge'; // Pastikan Anda punya utilitas ini

// Tambahkan prop 'className'
type ExtendedProductCardProps = ProductCardProps & {
  className?: string;
};

const ProductCard: React.FC<ExtendedProductCardProps> = ({ image, title, description, tags, className }) => {
  return (
    // Gabungkan className dasar dengan className tambahan
    <div className={classNameMerge("flex-shrink-0 w-full h-full bg-white rounded-lg overflow-hidden", className)}>
      <img src={image} alt={title} className="w-full h-auto object-cover" />
      <div className="p-4 text-center">
        <h3 className="font-bold text-sm mb-1">{title}</h3>
        <p className="text-xs text-gray-600 mb-2">{description}</p>
        <div className="flex flex-wrap justify-center gap-1">
          {tags.map(tag => (
            <span key={tag} className="text-xs text-gray-400">{tag}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
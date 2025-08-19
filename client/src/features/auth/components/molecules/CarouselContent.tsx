import React from 'react';
import ProgressBar from '../atoms/ProgressBar';

type CarouselContentProps = {
  totalItems: number;
  currentIndex: number;
};

const CarouselContent: React.FC<CarouselContentProps> = ({ totalItems, currentIndex }) => {
  return (
    <div className="absolute bottom-20 md:bottom-32 left-1/2 -translate-x-1/2 w-full max-w-4xl text-white text-center px-4">
      <h1 className="text-3xl md:text-5xl font-bold leading-tight">
        Performance-Ready
      </h1>
      <p className="text-3xl md:text-5xl font-light">
        Apparel for Work & Beyond
      </p>
      <ProgressBar totalItems={totalItems} currentIndex={currentIndex} />
    </div>
  );
};

export default CarouselContent;
import React from 'react';

type ProgressBarProps = {
  totalItems: number;
  currentIndex: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ totalItems, currentIndex }) => {
  return (
    <div className="relative w-full max-w-xs mx-auto h-1 mt-8 bg-white bg-opacity-30">
      <div
        className="absolute top-0 left-0 h-full bg-yellow-400 transition-transform duration-500 ease-linear"
        style={{
          width: `${100 / totalItems}%`,
          transform: `translateX(${currentIndex * 100}%)`,
        }}
      ></div>
    </div>
  );
};

export default ProgressBar;
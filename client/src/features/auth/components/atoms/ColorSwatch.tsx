import React from 'react';

type ColorSwatchProps = {
  color: string;
  isActive?: boolean;
};

const ColorSwatch: React.FC<ColorSwatchProps> = ({ color, isActive = false }) => {
  return (
    <button
      className={`w-4 h-4 rounded-full border border-gray-300 focus:outline-none ${isActive ? 'ring-2 ring-offset-1 ring-black' : ''}`}
      style={{ backgroundColor: color }}
      aria-label={`Color ${color}`}
    />
  );
};

export default ColorSwatch;
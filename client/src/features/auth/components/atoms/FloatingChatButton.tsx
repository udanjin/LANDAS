import React from 'react';

const FloatingChatButton: React.FC = () => {
  return (
    <button 
      // Ubah 'fixed' menjadi 'absolute' dan sesuaikan posisinya
      className="absolute -bottom-8 -right-8 w-20 h-20 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg z-10 hover:bg-yellow-500 transition-colors"
      aria-label="Open Chat"
    >
      <span className="text-black font-bold text-xl">Ch</span>
    </button>
  );
};

export default FloatingChatButton;
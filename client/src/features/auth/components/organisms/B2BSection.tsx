import React from 'react';
import FloatingChatButton from '../atoms/FloatingChatButton'; // Impor tombol chat

const B2BSection: React.FC = () => {
  return (
    // Section luar untuk memberikan padding atas dan bawah
    <section className="bg-white py-20">
      {/* Container untuk membatasi lebar dan memposisikan di tengah */}
      <div className="container mx-auto px-4">
        {/* div ini menjadi 'relative' agar bisa menjadi anchor untuk tombol */}
        <div className="relative bg-black text-white py-20 px-12 rounded-lg">
          <h2 className="text-3xl font-bold">B2B 전문 의류 쇼핑몰!</h2>
          <h3 className="text-3xl font-bold mb-4">15년 이상의 노하우로 믿고 거래 하세요</h3>
          <p className="text-gray-400">수많은 기업이 선택한 신뢰받는 쇼핑, 지금 만나보세요</p>

          {/* Tombol chat sekarang berada di dalam B2BSection */}
          <FloatingChatButton />
        </div>
      </div>
    </section>
  );
};

export default B2BSection;
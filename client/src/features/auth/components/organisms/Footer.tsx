import React from 'react';
import { Instagram, Facebook, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#1C1C1C] text-gray-400 text-xs py-12">
      <div className="container mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Kolom 1: Info Perusahaan */}
        <div>
          <h3 className="text-2xl font-bold text-yellow-400 tracking-widest mb-4">LANDAS</h3>
          <p>대표이사 : 함정민</p>
          <p>사업자등록번호 : 201-86-15245</p>
          <p>서울특별사 중구 다산로 139 (랜다스빌딩) 6층</p>
          <p>통신판매업신고 : 중구 제0575호</p>
        </div>

        {/* Kolom 2: Info Kontak */}
        <div>
          <h4 className="text-white font-bold mb-2">대표 번호 및 AS 문의</h4>
          <p className="text-2xl text-white font-bold mb-2">1661-6244</p>
          <p>평일 : 09:00 ~ 18:00</p>
          <p>기관 : 기업은행</p>
          <p>계좌번호 : 213-111127-04-035</p>
          <p>예금주 : (주)랜다스</p>
        </div>

        {/* Kolom 3: Link & Social Media */}
        <div>
          <div className="flex gap-4 mb-4">
            <a href="#" className="hover:text-white">개인정보처리방침</a>
            <a href="#" className="hover:text-white">이용약관</a>
          </div>
          <div className="flex gap-3">
            <a href="#" className="text-gray-400 hover:text-white"><Instagram size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Facebook size={20} /></a>
            <a href="#" className="text-gray-400 hover:text-white"><Youtube size={20} /></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
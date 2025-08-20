import React from "react";
import Navbar from "@/features/auth/components/organisms/Navbar";
import Carousel from "@/features/auth/components/organisms/Carousel";
import ProductCarousel from "@/features/auth/components/organisms/ProductCarousel";
import ProductGrid from "@/features/auth/components/organisms/ProductGrid";
import B2BSection from "@/features/auth/components/organisms/B2BSection";
import Footer from "@/features/auth/components/organisms/Footer";
import FloatingChatButton from "@/features/auth/components/atoms/FloatingChatButton";

const HomePage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-white">
      <Navbar />
      <main>
        <Carousel />
        <ProductCarousel />
        <ProductGrid />
        <ProductGrid />
        <B2BSection /> {/* Tambahkan seksi baru */}
      </main>
      <Footer /> {/* Tambahkan footer */}
      {/* Tambahkan floating button */}
    </div>
  );
};

export default HomePage;

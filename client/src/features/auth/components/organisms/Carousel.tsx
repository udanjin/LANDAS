import React, { useState, useEffect, useRef } from "react";
import { CarouselImage } from "@/shared/types/dashboardTypes";
import CarouselContent from "../molecules/CarouselContent";

const carouselImages: CarouselImage[] = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1483985988355-763728e1935b?q=80&w=2070&auto=format&fit=crop",
    alt: "Fashion model 1",
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1490481651871-ab68de25d43d?q=80&w=2070&auto=format&fit=crop",
    alt: "Fashion model 2",
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1523381294911-8d3cead13475?q=80&w=2070&auto=format&fit=crop",
    alt: "Fashion model 3",
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&w=1920&auto=format&fit=crop",
    alt: "Fashion model 4",
  },
];

const Carousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  // **PERBAIKAN DI SINI:** Ubah NodeJS.Timeout menjadi number
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    // setTimeout di browser mengembalikan number, jadi kita perlu window.setTimeout
    timeoutRef.current = window.setTimeout(
      () =>
        setCurrentIndex((prev) =>
          prev === carouselImages.length - 1 ? 0 : prev + 1
        ),
      5000
    );

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="whitespace-nowrap transition-transform duration-1000 ease-in-out h-full"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {carouselImages.map((image) => (
          <div
            key={image.id}
            className="inline-block w-full h-full bg-cover bg-center"
            style={{ backgroundImage: `url(${image.src})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-40"></div>
          </div>
        ))}
      </div>
      <CarouselContent
        totalItems={carouselImages.length}
        currentIndex={currentIndex}
      />
    </div>
  );
};

export default Carousel;

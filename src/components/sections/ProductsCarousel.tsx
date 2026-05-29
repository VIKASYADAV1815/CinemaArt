"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { title: "Canon EOS R5", desc: "45MP Full-Frame Mirrorless", img: "/canon.webp" },
  { title: "Fujifilm X-E4", desc: "Compact Mirrorless System", img: "/fujifilms.webp" },
  { title: "Nikon Z9", desc: "Flagship Mirrorless", img: "/niko.webp" },
  { title: "Sony A7 IV", desc: "33MP Full-Frame Hybrid", img: "/canon.webp" },
  { title: "GoPro Hero 12", desc: "Action Camera 5.3K", img: "/gopro.webp" },
  { title: "Insta360 X3", desc: "360-degree Action Camera", img: "/fujifilms.webp" },
  { title: "DJI Mavic 3", desc: "Professional Aerial Drone", img: "/dji.webp" },
];

export default function ProductsCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % products.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % products.length);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + products.length) % products.length);

  return (
    <section className="bg-[#E6E6E6] py-32 overflow-hidden relative" id="products">
      <div className="w-full text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111] uppercase tracking-widest"
        >
          Our Top Products
        </motion.h2>
      </div>

      {/* Navigation Arrows */}
      <div className="absolute top-1/2 left-2 md:left-12 -translate-y-1/2 z-50 pointer-events-auto">
        <button onClick={prevSlide} className="w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 border border-gray-100">
           <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />
        </button>
      </div>
      <div className="absolute top-1/2 right-2 md:right-12 -translate-y-1/2 z-50 pointer-events-auto">
        <button onClick={nextSlide} className="w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 border border-gray-100">
           <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />
        </button>
      </div>

      <div className="relative h-[600px] w-full max-w-7xl mx-auto flex items-center justify-center perspective-[1200px]">
        {products.map((product, index) => {
          // 1. Calculate the raw distance between this card and the center active card
          let offset = index - currentIndex;
          
          // 2. Wrap the offset so cards always take the shortest paths around the circle 
          // (This explicitly eliminates the "loop back" jerkiness when jumping from end back to start)
          const halfLength = products.length / 2;
          if (offset > halfLength) offset -= products.length;
          if (offset < -halfLength) offset += products.length;

          // 3. Determine visibility thresholds
          const isVisible = Math.abs(offset) <= (isMobile ? 0 : 1);
          const xOffset = isMobile ? 0 : 340;

          // 4. Interpolate structural values cleanly based on distance from zero (center)
          const x = offset * xOffset;
          const scale = offset === 0 ? 1 : 0.82;
          const opacity = offset === 0 ? 1 : isVisible ? 0.6 : 0;
          const rotateY = offset * (isMobile ? 0 : -20); 
          const zIndex = 30 - Math.abs(offset) * 10;

          return (
            <motion.div
              key={index}
              // Animate layout changes using hardware-accelerated transforms
              animate={{ 
                x, 
                scale, 
                opacity, 
                rotateY,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 170, // Slightly reduced stiffness for silky structural pacing
                damping: 24,    // Perfectly counterbalanced damping to stop vibration snaps
                mass: 0.8       // Gives the card a lightweight, ultra-responsive tactile feel
              }}
              className="absolute w-[80vw] sm:w-[350px] md:w-[450px] h-[450px] md:h-[550px] cursor-pointer"
              onClick={() => setCurrentIndex(index)}
              style={{ 
                transformStyle: "preserve-3d",
                zIndex: Math.round(zIndex),
                // Avoid capturing mouse clicks on completely invisible background cards
                pointerEvents: isVisible ? "auto" : "none" 
              }}
            >
              <div className="w-full h-full bg-white rounded-lg shadow-2xl flex flex-col p-2 border border-gray-100">
                <div className="w-full h-[70%] bg-gray-100 rounded-md overflow-hidden relative">
                  <img
                    src={product.img}
                    alt={product.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex flex-col justify-center items-center h-[30%] text-center p-4">
                  <h3 className="font-syncopate text-xl md:text-2xl font-bold text-gray-900">{product.title}</h3>
                  <p className="font-space text-sm text-gray-500 mt-2">{product.desc}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
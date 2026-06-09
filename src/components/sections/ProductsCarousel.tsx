"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { 
    title: "Sony Alpha 7R V", 
    desc: "61MP Full-Frame High-Resolution Mirrorless", 
    brand: "Sony",
    img: "/heroimg/sony.png"
  },
  { 
    title: "Fujifilm X-T5", 
    desc: "40MP APS-C Mirrorless System", 
    brand: "Fujifilm",
    img: "/heroimg/fujifilm.png" 
  },
  { 
    title: "Nikon Z8", 
    desc: "45.7MP Full-Frame Hybrid Mirrorless", 
    brand: "Nikon",
    img: "/nikonz8.jpg" 
  }
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
    <section className="bg-background py-32 overflow-hidden relative" id="products">
      <div className="w-full text-center mb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111] uppercase tracking-widest"
        >
          Top Highlights
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="font-space mt-4 text-gray-600 max-w-2xl mx-auto text-sm md:text-base"
        >
          Explore current Sony, Fujifilm, and Nikon camera highlights picked from their flagship mirrorless ranges.
        </motion.p>
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

      <div className="relative h-[600px] w-full max-w-7xl mx-auto flex items-center justify-center perspective-distant">
        {products.map((product, index) => {
          let offset = index - currentIndex;
          
          const halfLength = products.length / 2;
          if (offset > halfLength) offset -= products.length;
          if (offset < -halfLength) offset += products.length;

          const isVisible = Math.abs(offset) <= (isMobile ? 0 : 1);
          const xOffset = isMobile ? 0 : 340;

          const x = offset * xOffset;
          const scale = offset === 0 ? 1 : 0.82;
          const opacity = offset === 0 ? 1 : isVisible ? 0.6 : 0;
          const rotateY = offset * (isMobile ? 0 : -20); 
          const zIndex = 30 - Math.abs(offset) * 10;

          return (
            <motion.div
              key={index}
              animate={{ 
                x, 
                scale, 
                opacity, 
                rotateY,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 170,
                damping: 24,
                mass: 0.8
              }}
              className="absolute w-[80vw] sm:w-87.5 md:w-[450px] h-[450px] md:h-137.5 cursor-pointer"
              onClick={() => setCurrentIndex(index)}
              style={{ 
                transformStyle: "preserve-3d",
                zIndex: Math.round(zIndex),
                pointerEvents: isVisible ? "auto" : "none" 
              }}
            >
              <div className="w-full h-full bg-white rounded-lg shadow-2xl flex flex-col p-2 border border-gray-100">
                <div className="w-full h-[70%] bg-gray-100 rounded-md overflow-hidden relative">
                  <span className="absolute top-4 left-4 bg-black/80 backdrop-blur text-white text-xs font-syncopate px-3 py-1 rounded-full z-10">
                    {product.brand}
                  </span>
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

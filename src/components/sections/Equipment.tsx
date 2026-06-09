"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const equipment = [
  { 
    brand: "Category", 
    title: "Mirrorless Cameras", 
    desc: "Professional-grade mirrorless systems offering unparalleled image quality, speed, and versatility for both photo and video.", 
    img: "/nikonz8.jpg" 
  },
  { 
    brand: "Category", 
    title: "Compact Pocket Cameras", 
    desc: "Powerful yet portable everyday carry cameras that deliver premium quality without the bulk.", 
    img: "/fujifilms.webp" 
  },
  { 
    brand: "Category", 
    title: "Action Cameras", 
    desc: "Rugged, waterproof, and ready for any adventure. Capture the impossible anywhere you go.", 
    img: "/gopro.webp" 
  },
  { 
    brand: "Category", 
    title: "360 Cameras", 
    desc: "Reframe your perspective with cutting-edge 360-degree capture, allowing you to shoot first and point later.", 
    img: "/equipmemt/360.webp" 
  },
  { 
    brand: "Category", 
    title: "Gimbals & Vlogging Gear", 
    desc: "Camera and mobile gimbals, tripods, light setups, podcasting setups, and essential vlogging gears.", 
    img: "/equipmemt/gimbal.png" 
  },
  { 
    brand: "Category", 
    title: "Binoculars & Optics", 
    desc: "Premium binoculars, rangefinders, and spotting scopes for wildlife, sports, and observation.", 
    img: "/equipmemt/bina.png" 
  }
];

export default function Equipment() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % equipment.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const len = equipment.length;
  const getPosition = (i: number) => {
    const diff = (i - currentIndex + len) % len;
    if (diff === 0) return 0;
    if (diff <= Math.floor(len / 2)) return diff;
    return diff - len;
  };

  const nextSlide = () => setCurrentIndex((prev) => (prev + 1) % len);
  const prevSlide = () => setCurrentIndex((prev) => (prev - 1 + len) % len);

  return (
    <section className="bg-[#E6E6E6] py-20 md:py-32 overflow-hidden flex flex-col items-center relative" id="equipment">
      <div className="w-full text-center mb-12 px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111]"
        >
          EQUIPMENT CATEGORIES
        </motion.h2>
      </div>

      <div className="relative h-[650px] md:h-[750px] w-full flex justify-center items-start mt-8">
        {/* Navigation Arrows */}
        <div className="absolute top-[420px] md:top-[500px] left-1/2 -translate-x-[185px] md:-translate-x-57.75 z-50 pointer-events-auto -translate-y-1/2">
          <button onClick={prevSlide} className="w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 border border-gray-100">
             <ChevronLeft className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />
          </button>
        </div>
        <div className="absolute top-[420px] md:top-[500px] left-1/2 translate-x-36.25 md:translate-x-43.75 z-50 pointer-events-auto -translate-y-1/2">
          <button onClick={nextSlide} className="w-10 h-10 md:w-14 md:h-14 bg-white/80 backdrop-blur-md rounded-full flex items-center justify-center shadow-xl hover:bg-white transition-all hover:scale-110 active:scale-95 border border-gray-100">
             <ChevronRight className="w-5 h-5 md:w-7 md:h-7 text-gray-800" />
          </button>
        </div>
        {equipment.map((item, index) => {
          const pos = getPosition(index);
          const isCenter = pos === 0;
          
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const xOffset = isMobile ? pos * 240 : pos * 340; 

          const isVisible = isMobile ? Math.abs(pos) <= 1 : Math.abs(pos) <= 2;

          return (
            <motion.div
              key={index}
              animate={{ 
                x: xOffset,
                opacity: isCenter ? 1 : isVisible ? 0.4 : 0,
                scale: isCenter ? 1 : 0.95,
              }}
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                damping: 22, 
                mass: 0.9 
              }}
              style={{
                zIndex: isCenter ? 30 : 10,
                pointerEvents: isVisible ? "auto" : "none"
              }}
              className="absolute top-12 w-[260px] md:w-77.5 flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              <div className="w-full bg-white rounded-[1.25rem] md:rounded-[1.5rem] p-2 md:p-3 shadow-sm flex flex-col h-[320px] md:h-[380px]">
                <div className="w-full h-55 md:h-70 bg-background rounded-[0.8rem] md:rounded-2xl overflow-hidden">
                  <img src={item.img} alt={item.title} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-3 md:mt-4 px-2 relative">
                  <h3 className="font-space font-bold text-gray-900 text-lg md:text-xl">{item.title}</h3>
                </div>
              </div>

              <motion.div
                animate={{ 
                  height: isCenter ? "auto" : 0,
                  opacity: isCenter ? 1 : 0,
                  marginTop: isCenter ? 12 : 0
                }}
                transition={{ duration: 0.4, ease: [0.25, 1, 0.5, 1] }}
                initial={false}
                className="w-full overflow-hidden"
              >
                <div className="w-full bg-white rounded-[1.25rem] md:rounded-[1.5rem] p-4 md:p-6 shadow-sm">
                  <h4 className="font-space text-[10px] md:text-xs font-bold text-gray-500 mb-2 md:mb-3">Overview</h4>
                  <p className="font-space text-xs md:text-sm text-gray-700 leading-relaxed mb-4 md:mb-6">
                    {item.desc}
                  </p>
                  <button className="font-space font-bold text-xs md:text-sm text-gray-900 hover:text-gray-500 transition-colors">
                    Explore Category
                  </button>
                </div>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

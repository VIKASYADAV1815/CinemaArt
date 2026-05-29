"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const equipment = [
  { brand: "Canon", title: "EOS System", desc: "Experience the pinnacle of optical engineering. Unmatched clarity and cinematic video capabilities.", img: "/canon.webp" },
  { brand: "Fujifilm", title: "X-Series", desc: "Where vintage soul meets cutting-edge sensor technology. Pure, unadulterated photography experience.", img: "/fujifilms.webp" },
  { brand: "Nikon", title: "Z System", desc: "The ultimate hybrid machine. Ultra-wide mount and advanced low-light capabilities.", img: "/niko.webp" },
  { brand: "Sony", title: "Alpha Series", desc: "Industry-leading autofocus and mirrorless innovation for creators who demand the best.", img: "/canon.webp" },
  { brand: "GoPro", title: "Action Cameras", desc: "Rugged, waterproof, and ready for any adventure. Capture the impossible.", img: "/gopro.webp" },
  { brand: "Insta360", title: "360 & Action", desc: "Reframe your perspective with cutting-edge 360-degree capture and stabilization.", img: "/fujifilms.webp" },
  { brand: "DJI", title: "Drones & Gimbals", desc: "Take your vision to the skies and stabilize your shots with industry-leading robotics.", img: "/dji.webp" }
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
      <div className="w-full text-center mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111]"
        >
          PREMIUM GEAR
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

      <div className="relative h-[650px] md:h-[750px] w-full flex justify-center items-start mt-8">
        {equipment.map((item, index) => {
          const pos = getPosition(index);
          const isCenter = pos === 0;
          
          // Responsive xOffset: less spread on mobile
          const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
          const xOffset = isMobile ? pos * 240 : pos * 340; 

          // Show 5 cards on desktop, 3 on mobile
          const isVisible = isMobile ? Math.abs(pos) <= 1 : Math.abs(pos) <= 2;

          return (
            <motion.div
              key={index}
              animate={{ 
                x: xOffset,
                opacity: isCenter ? 1 : isVisible ? 0.4 : 0,
                scale: isCenter ? 1 : 0.95,
              }}
              // Tuned spring variables for fluid, luxury-tier responsiveness
              transition={{ 
                type: "spring", 
                stiffness: 120, 
                damping: 22, 
                mass: 0.9 
              }}
              style={{
                zIndex: isCenter ? 30 : 10, // Handled outside animation loop to stop frame popping
                pointerEvents: isVisible ? "auto" : "none"
              }}
              className="absolute top-12 w-[260px] md:w-[310px] flex flex-col items-center cursor-pointer"
              onClick={() => setCurrentIndex(index)}
            >
              {/* Top Banner */}
              <motion.div
                animate={{ 
                  y: isCenter ? 0 : 20,
                  opacity: isCenter ? 1 : 0,
                }}
                transition={{ duration: 0.35, ease: "easeInOut" }}
                initial={false}
                className="absolute -top-12 md:-top-16 left-0 right-0 h-10 md:h-12 bg-white rounded-xl shadow-sm flex justify-between items-center px-4 overflow-hidden"
              >
                <span className="font-space font-medium text-xs md:text-sm text-gray-800">Seminars</span>
                <span className="font-space font-medium text-xs md:text-sm text-gray-800">26 Units</span>
              </motion.div>

              {/* Main Card */}
              <div className="w-full bg-white rounded-[1.25rem] md:rounded-[1.5rem] p-2 md:p-3 shadow-sm flex flex-col h-[320px] md:h-[380px]">
                <div className="w-full h-[220px] md:h-[280px] bg-[#E6E6E6] rounded-[0.8rem] md:rounded-[1rem] overflow-hidden">
                  <img src={item.img} alt={item.brand} className="w-full h-full object-cover mix-blend-multiply" />
                </div>
                <div className="mt-3 md:mt-4 px-2 relative">
                  <h3 className="font-space font-bold text-gray-900 text-lg md:text-xl">{item.brand}</h3>
                  {/* Kept mounted with opacity to prevent container layout crashing */}
                  <motion.p 
                    animate={{ opacity: isCenter ? 0 : 1 }}
                    transition={{ duration: 0.25 }}
                    className="font-space text-xs md:text-sm text-gray-500 absolute left-2 top-[24px] md:top-[28px]"
                  >
                    {item.title}
                  </motion.p>
                </div>
              </div>

              {/* Bottom Info Card */}
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
                  <h4 className="font-space text-[10px] md:text-xs font-bold text-gray-500 mb-2 md:mb-3">{item.title} Overview</h4>
                  <p className="font-space text-xs md:text-sm text-gray-700 leading-relaxed mb-4 md:mb-6">
                    {item.desc}
                  </p>
                  <button className="font-space font-bold text-xs md:text-sm text-gray-900 hover:text-gray-500 transition-colors">
                    Explore Brand
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
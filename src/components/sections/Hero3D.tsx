"use client";

import { motion, AnimatePresence } from "framer-motion";
import React, { useEffect, useState } from "react";

const slides = [
  { 
    id: '01', 
    brand: "FUJIFILM", 
    model: "X-SERIES", 
    desc: "Where vintage soul meets cutting-edge sensor technology. Pure, unadulterated photography experience.", 
    img: "/heroimg/fujifilm.png" 
  },
  { 
    id: '02', 
    brand: "GOPRO", 
    model: "HERO 12", 
    desc: "Rugged, waterproof, and ready for any adventure. Capture the impossible anywhere you go.", 
    img: "/heroimg/gopro.png" 
  },
  { 
    id: '03', 
    brand: "CANON", 
    model: "EOS SYSTEM", 
    desc: "Experience the pinnacle of optical engineering. Unmatched clarity and cinematic video capabilities.", 
    img: "/heroimg/canon.png" 
  },
  { 
    id: '04', 
    brand: "NIKON", 
    model: "Z SYSTEM", 
    desc: "The ultimate hybrid machine. Ultra-wide mount and advanced low-light capabilities for professionals.", 
    img: "/heroimg/nikon.png" 
  },
  { 
    id: '05', 
    brand: "SONY", 
    model: "ALPHA", 
    desc: "Industry-leading autofocus and mirrorless innovation for creators who demand the absolute best.", 
    img: "/heroimg/sony.png" 
  }
];

export default function Hero3D() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000); // 6 seconds auto-play
    return () => clearInterval(timer);
  }, []);

  const slide = slides[currentIndex];

  return (
    <section className="relative h-screen w-full bg-[#E6E6E6] overflow-hidden" id="home">
      
      {/* Left Vertical Text */}
      <div 
        className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block"
      >
         <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
            PREMIUM GEAR COLLECTION
         </span>
      </div>

      {/* Huge Background Typography (Faded & Masked) */}
      <div 
        className="absolute inset-0 flex flex-col justify-center px-6 md:px-16 pointer-events-none z-0 -mt-[45vh] md:mt-24"
        style={{
           maskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%)',
           WebkitMaskImage: 'linear-gradient(to right, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 30%, rgba(0,0,0,0) 80%)'
        }}
      >
         <div className="flex flex-col">
           <AnimatePresence mode="wait">
             <motion.h1 
               key={`brand-${slide.id}`}
               initial={{ opacity: 0, filter: "blur(10px)", x: -50 }} 
               animate={{ opacity: 1, filter: "blur(0px)", x: 0 }} 
               exit={{ opacity: 0, filter: "blur(10px)", x: 50 }}
               transition={{ duration: 0.8, ease: "easeOut" }}
               className="font-syncopate text-[12vw] md:text-[8vw] lg:text-[7vw] font-black text-black/30 leading-none whitespace-nowrap"
             >
               {slide.brand}
             </motion.h1>
           </AnimatePresence>
           <AnimatePresence mode="wait">
             <motion.h2 
               key={`model-${slide.id}`}
               initial={{ opacity: 0, filter: "blur(10px)", x: 50 }} 
               animate={{ opacity: 1, filter: "blur(0px)", x: 0 }} 
               exit={{ opacity: 0, filter: "blur(10px)", x: -50 }}
               transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
               className="font-syncopate text-[10vw] md:text-[6vw] lg:text-[5vw] font-bold text-black/40 leading-none flex items-center gap-4 ml-[5vw] md:ml-[12vw] -mt-2"
             >
               <span className="text-[#FF0000] drop-shadow-[0_0_8px_rgba(255,0,0,0.8)] text-[9vw] md:text-[5vw] lg:text-[4vw]">///</span> {slide.model}
             </motion.h2>
           </AnimatePresence>
         </div>
      </div>

      {/* Center Image with 3D Float Effect & Bottom Shadow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-10 md:ml-[35%] -mt-[5vh] md:mt-0">
         <div className="relative w-full max-w-[75vw] md:max-w-xl aspect-square flex flex-col items-center justify-center mt-0 md:mt-0">
            {/* Wrapper for the continuous floating animation */}
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ y: [0, -10, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
            >
              <AnimatePresence mode="wait">
                <motion.img
                  key={slide.id}
                  src={slide.img}
                  initial={{ opacity: 0, scale: 0.5, x: 100, filter: "blur(10px)" }}
                  animate={{ opacity: 1, scale: 0.7, x: 0, filter: "blur(0px)" }}
                  exit={{ opacity: 0, scale: 0.6, x: -100, filter: "blur(10px)" }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                  className="w-full h-full object-contain drop-shadow-[0_25px_25px_rgba(0,0,0,0.4)] md:drop-shadow-[0_45px_45px_rgba(0,0,0,0.6)]"
                />
              </AnimatePresence>
            </motion.div>

            {/* Gap and Shadow to simulate 3D hovering */}
            <div className="absolute bottom-[25%] md:bottom-[20%] w-[40%] md:w-[35%] h-4 md:h-6 bg-black/40 md:bg-black/60 blur-[15px] md:blur-[20px] rounded-[100%] scale-y-50" />
         </div>
      </div>

      {/* Right Bottom Info Block */}
      <div className="absolute bottom-[100px] md:bottom-12 left-4 md:left-auto right-[60px] md:right-[15%] max-w-none md:max-w-lg z-20 text-left md:text-right pointer-events-none">
        <div className="hidden md:block w-12 h-[1px] bg-gray-400 mb-4 ml-auto" />
        <p className="font-space text-[10px] md:text-sm text-gray-600 leading-relaxed max-w-[220px] md:max-w-none md:ml-auto">
          {slide.desc}
        </p>
        <div className="mt-3 md:mt-6 flex items-center justify-start md:justify-end gap-4 md:gap-6 pointer-events-auto">
           <button className="relative overflow-hidden group bg-[#E6E6E6] text-gray-800 px-4 md:px-8 py-2 md:py-3 rounded-full font-space text-[10px] md:text-sm font-bold transition-all duration-300 shadow-[6px_6px_12px_#b8b8b8,-6px_-6px_12px_#ffffff] hover:shadow-[8px_8px_16px_#b8b8b8,-8px_-8px_16px_#ffffff] hover:-translate-y-0.5 active:shadow-[inset_6px_6px_12px_#b8b8b8,inset_-6px_-6px_12px_#ffffff] active:translate-y-0 flex items-center gap-2">
             <span className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300">↗</span> 
             Start Exploring
           </button>
        </div>
      </div>

      {/* Right Pagination Indicator (Camera Zoom Style) */}
      <div className="absolute right-6 md:right-12 top-1/2 -translate-y-1/2 z-20 flex flex-col items-end justify-center py-10 pointer-events-auto">
         {slides.map((s, i) => (
           <React.Fragment key={s.id}>
             {/* Minor ticks between items */}
             {i > 0 && (
               <div className="flex flex-col items-end gap-2 my-2 opacity-60">
                 <div className="w-1.5 h-[1px] bg-gray-400" />
                 <div className="w-2.5 h-[1px] bg-gray-400" />
                 <div className="w-1.5 h-[1px] bg-gray-400" />
               </div>
             )}
             <div 
               onClick={() => setCurrentIndex(i)}
               className="cursor-pointer flex items-center justify-end gap-3 group py-1"
             >
               <span className={`font-space transition-all duration-300 ${i === currentIndex ? 'text-black text-sm font-bold' : 'text-gray-400 text-xs font-medium group-hover:text-gray-600'}`}>
                 {s.id}
               </span>
               <div 
                 className={`h-[1px] transition-all duration-300 ${i === currentIndex ? 'w-8 bg-black' : 'w-4 bg-gray-400 group-hover:w-6 group-hover:bg-gray-600'}`} 
               />
             </div>
           </React.Fragment>
         ))}
      </div>

      {/* Bottom Left Slider / Thumbnails */}
      <div className="absolute bottom-5 md:bottom-12 left-4 md:left-12 flex gap-2 md:gap-3 z-30 pointer-events-auto">
        {slides.map((s, i) => (
          <div key={s.id} className="flex flex-col gap-2 cursor-pointer" onClick={() => setCurrentIndex(i)}>
             <div className={`w-10 h-10 md:w-16 md:h-16 rounded-xl overflow-hidden bg-white/50 backdrop-blur-md border transition-all duration-500 flex items-center justify-center ${i === currentIndex ? 'border-gray-800 shadow-xl scale-110' : 'border-transparent opacity-50 hover:opacity-100'}`}>
                <img src={s.img} alt={s.brand} className="w-8 h-8 md:w-12 md:h-12 object-contain drop-shadow-sm" />
             </div>
             {/* Slider Progress Bar */}
             <div className="w-full h-1 bg-black/10 rounded-full overflow-hidden">
                {i === currentIndex && (
                  <motion.div
                    key={`progress-${currentIndex}`}
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 6, ease: "linear" }}
                    className="h-full bg-gray-800"
                  />
                )}
                {i < currentIndex && <div className="h-full bg-gray-800" />}
             </div>
          </div>
        ))}
      </div>

    </section>
  );
}
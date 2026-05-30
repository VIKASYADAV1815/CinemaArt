"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef } from "react";

export default function LensAnatomy() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  
  // Wipe effect matches the entire scroll duration
  const clipPercent = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipPercent}% 0 0)`;
  const sliderLeft = useMotionTemplate`${useTransform(scrollYProgress, [0, 1], [0, 100])}%`;

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-white" id="anatomy">
      <div className="sticky top-0 flex flex-col h-screen items-center justify-center overflow-hidden p-6 md:p-24">
         
         <div className="relative z-30 pointer-events-none text-center mb-8 md:mb-12">
           <h2 className="font-syncopate text-3xl md:text-5xl lg:text-6xl font-bold text-black">LENS INTERIOR</h2>
           <p className="font-space mt-2 md:mt-4 max-w-[280px] md:max-w-sm mx-auto text-gray-600 text-sm md:text-base">
             Scroll to slide and reveal the internal engineering.
           </p>
         </div>
         
         <div className="relative w-full max-w-5xl aspect-[3/4] md:aspect-[16/9] rounded-2xl pointer-events-none overflow-hidden">
            {/* Before Image */}
            <img src="/before.png" alt="Lens Exterior" className="absolute inset-0 w-full h-full object-contain pointer-events-none" />
            
            {/* After Image (Wipe) */}
            <motion.div style={{ clipPath }} className="absolute inset-0 z-10 pointer-events-none">
               <img src="/after.png" alt="Lens Interior" className="absolute inset-0 w-full h-full object-contain" />
            </motion.div>
            
            {/* Slider Line */}
            <motion.div style={{ left: sliderLeft }} className="absolute top-0 bottom-0 w-0.5 bg-black z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-lg text-[10px] md:text-xs">
                 ⏴⏵
               </div>
            </motion.div>
         </div>
         
      </div>
    </section>
  );
}

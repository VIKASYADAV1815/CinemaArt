"use client";

import { motion, useScroll, useTransform, useMotionTemplate } from "framer-motion";
import { useRef, useState } from "react";
import RandomRevealText from "@/components/ui/RandomRevealText";
import { useMotionValueEvent } from "framer-motion";

export default function LensAnatomy() {
  const targetRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: targetRef, offset: ["start start", "end start"] });
  
  // Wipe effect: 0 to 0.25 progress
  const clipPercent = useTransform(scrollYProgress, [0, 0.25], [100, 0]);
  const clipPath = useMotionTemplate`inset(0 ${clipPercent}% 0 0)`;
  const sliderLeft = useMotionTemplate`${useTransform(scrollYProgress, [0, 0.25], [0, 100])}%`;
  
  // Opacity of the slider line (fade out after wipe is done)
  const sliderOpacity = useTransform(scrollYProgress, [0.24, 0.26], [1, 0]);

  // Track progress to trigger RandomRevealText
  const [showL1, setShowL1] = useState(false);
  const [showL2, setShowL2] = useState(false);
  const [showL3, setShowL3] = useState(false);
  const [showL4, setShowL4] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    setShowL1(latest > 0.35);
    setShowL2(latest > 0.5);
    setShowL3(latest > 0.65);
    setShowL4(latest > 0.8);
  });

  const op1 = useTransform(scrollYProgress, [0.3, 0.35, 0.95, 1], [0, 1, 1, 0]);
  const y1 = useTransform(scrollYProgress, [0.3, 0.35], [20, 0]);
  
  const op2 = useTransform(scrollYProgress, [0.45, 0.5, 0.95, 1], [0, 1, 1, 0]);
  const y2 = useTransform(scrollYProgress, [0.45, 0.5], [20, 0]);
  
  const op3 = useTransform(scrollYProgress, [0.6, 0.65, 0.95, 1], [0, 1, 1, 0]);
  const y3 = useTransform(scrollYProgress, [0.6, 0.65], [20, 0]);
  
  const op4 = useTransform(scrollYProgress, [0.75, 0.8, 0.95, 1], [0, 1, 1, 0]);
  const y4 = useTransform(scrollYProgress, [0.75, 0.8], [20, 0]);

  return (
    <section ref={targetRef} className="relative h-[250vh] bg-white" id="anatomy">
      <div className="sticky top-0 flex flex-col h-screen items-center justify-center overflow-hidden p-6 md:p-24">
         
         <div className="relative z-30 pointer-events-none text-center mb-8 md:mb-12">
           <h2 className="font-syncopate text-3xl md:text-6xl font-bold text-black">LENS ANATOMY</h2>
           <p className="font-space mt-2 md:mt-4 max-w-[280px] md:max-w-sm mx-auto text-gray-600 text-sm md:text-base">Scroll to reveal the interior components.</p>
         </div>
         
         <div className="relative w-full max-w-5xl aspect-[3/4] md:aspect-21/9 rounded-2xl overflow-visible">
            {/* Before Image */}
            <img src="/before.png" alt="Lens Exterior" className="absolute inset-0 w-full h-full object-contain" />
            
            {/* After Image (Wipe) */}
            <motion.div style={{ clipPath }} className="absolute inset-0 z-10">
               <img src="/after.png" alt="Lens Interior" className="absolute inset-0 w-full h-full object-contain" />
            </motion.div>
            
            {/* Slider Line */}
            <motion.div style={{ left: sliderLeft, opacity: sliderOpacity }} className="absolute top-0 bottom-0 w-0.5 bg-black z-20 shadow-[0_0_15px_rgba(0,0,0,0.5)]">
               <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 md:w-8 md:h-8 bg-black rounded-full flex items-center justify-center text-white font-bold shadow-lg text-[10px] md:text-xs">
                 ⏴⏵
               </div>
            </motion.div>

            {/* Labels container (Z-index higher than images) */}
            <div className="absolute inset-0 z-30 pointer-events-none">
                {/* Front Element */}
                <motion.div style={{ opacity: op1, y: y1 }} className="absolute top-[5%] md:top-[10%] left-[5%] md:left-[-20%] max-w-[120px] md:max-w-50">
                    <div className="hidden md:block absolute top-6 -right-16 w-16 h-px bg-[#FF0055]" />
                    <h3 className="font-syncopate text-xs md:text-xl font-bold text-[#FF0055]">
                        <RandomRevealText text="FRONT ELEMENT" show={showL1} />
                    </h3>
                    <p className="font-space text-[10px] md:text-xs text-gray-600 mt-1 md:mt-2 font-medium">Large glass element capturing maximum light.</p>
                </motion.div>

                {/* Lens Group 1 */}
                <motion.div style={{ opacity: op2, y: y2 }} className="absolute top-[35%] md:top-[25%] left-[5%] md:left-[20%] max-w-[100px] md:max-w-37.5">
                    <div className="hidden md:block absolute top-0 left-1/2 w-px h-12 -translate-y-full bg-[#FF0055]" />
                    <h3 className="font-syncopate text-[10px] md:text-lg font-bold text-[#FF0055]">
                        <RandomRevealText text="LENS GROUP" show={showL2} />
                    </h3>
                </motion.div>

                {/* Aperture */}
                <motion.div style={{ opacity: op3, y: y3 }} className="absolute top-[5%] md:top-[10%] right-[5%] md:right-[30%] max-w-[100px] md:max-w-37.5 text-right md:text-center">
                    <div className="hidden md:block absolute top-6 left-1/2 w-px h-16 bg-[#FF0055]" />
                    <h3 className="font-syncopate text-[10px] md:text-lg font-bold text-[#FF0055]">
                        <RandomRevealText text="APERTURE" show={showL3} />
                    </h3>
                </motion.div>

                {/* Rear Element */}
                <motion.div style={{ opacity: op4, y: y4 }} className="absolute top-[35%] md:top-[15%] right-[5%] md:right-[-20%] max-w-[120px] md:max-w-50 text-right">
                    <div className="hidden md:block absolute top-6 -left-16 w-16 h-px bg-[#FF0055]" />
                    <h3 className="font-syncopate text-xs md:text-xl font-bold text-[#FF0055]">
                        <RandomRevealText text="REAR ELEMENT" show={showL4} />
                    </h3>
                    <p className="font-space text-[10px] md:text-xs text-gray-600 mt-1 md:mt-2 font-medium">Focuses light onto the sensor.</p>
                </motion.div>
            </div>
         </div>
      </div>
    </section>
  );
}
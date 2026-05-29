"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { Camera, MonitorPlay, Printer } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Premium Framing",
    desc: "Museum-grade framing using archival materials, anti-reflective glass, and custom moldings tailored to your artwork.",
    icon: <Camera className="w-6 h-6" />,
    img: "/fujifilms.webp"
  },
  {
    title: "Color Grading",
    desc: "Industry-standard DaVinci Resolve color suites. We bring cinematic depth and perfect color fidelity to your projects.",
    icon: <MonitorPlay className="w-6 h-6" />,
    img: "/canon.webp"
  },
  {
    title: "Fine Art Printing",
    desc: "Large format, wide-gamut giclée printing on premium Hahnemühle papers for exhibition-ready results.",
    icon: <Printer className="w-6 h-6" />,
    img: "/niko.webp"
  }
];

export default function Features() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const y2 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [140, -140]);

  // Disable parallax on mobile to prevent layout gaps
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;

  return (
    <section ref={containerRef} className="bg-[#E6E6E6] py-20 md:py-32 overflow-hidden flex flex-col items-center" id="services">
      <div className="w-full text-center mb-8 md:mb-12">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111]"
        >
          ARTISAN SERVICES
        </motion.h2>
        <p className="font-space mt-4 text-gray-600 max-w-xl mx-auto px-6 text-xs md:text-base">
          Beyond equipment, we provide the technical expertise and finishing services required by working professionals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full mt-4 md:mt-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 pt-8 md:pt-12 items-start">
          {services.map((service, index) => {
            const yTransform = isMobile ? 0 : (index === 0 ? y1 : index === 1 ? y2 : y3);
            
            return (
              <motion.div
                key={index}
                style={{ y: yTransform }}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full bg-white rounded-[1.25rem] md:rounded-[1.5rem] p-3 shadow-sm flex flex-col border border-gray-100 group"
              >
                {/* Visual Media Container */}
                <div className="w-full h-[220px] md:h-[280px] bg-[#E6E6E6] rounded-[0.8rem] md:rounded-[1rem] overflow-hidden relative">
                  <img 
                    src={service.img} 
                    alt={service.title} 
                    className="w-full h-full object-cover mix-blend-multiply group-hover:scale-102 transition-transform duration-700 select-none" 
                    draggable={false}
                  />
                  
                  {/* Floating Action Icon Component */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 w-10 h-10 md:w-12 md:h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-gray-900 border border-gray-50">
                    {service.icon}
                  </div>
                </div>

                {/* Typography and Metadata Details Box */}
                <div className="mt-4 md:mt-5 px-2 pb-2 md:pb-4 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="font-space font-bold text-gray-900 text-lg md:text-xl mb-1 md:mb-2">
                      {service.title}
                    </h3>
                    <p className="font-space text-xs md:text-sm text-gray-500 leading-relaxed mb-4 md:mb-6">
                      {service.desc}
                    </p>
                  </div>

                  <motion.button 
                    whileHover={{ x: 6 }}
                    transition={{ type: "spring", stiffness: 200, damping: 20 }}
                    className="font-space font-bold text-xs md:text-sm text-gray-900 hover:text-gray-600 transition-colors flex items-center gap-2 self-start mt-auto"
                  >
                    Learn More <span>→</span>
                  </motion.button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
"use client";

import { motion } from "framer-motion";
import { Camera, MonitorPlay, Printer, ArrowRight } from "lucide-react";
import { useRef } from "react";

const services = [
  {
    title: "Premium Framing",
    desc: "Museum-grade framing using archival materials, anti-reflective glass, and custom moldings tailored to your artwork.",
    icon: <Camera className="w-5 h-5 text-gray-900" />,
    img: "/frame.png"
  },
  {
    title: "Color Grading",
    desc: "Industry-standard DaVinci Resolve color suites. We bring cinematic depth and perfect color fidelity to your projects.",
    icon: <MonitorPlay className="w-5 h-5 text-gray-900" />,
    img: "/colror.png"
  },
  {
    title: "Fine Art Printing",
    desc: "Large format, wide-gamut giclée printing on premium Hahnemühle papers for exhibition-ready results.",
    icon: <Printer className="w-5 h-5 text-gray-900" />,
    img: "/orint.jpg"
  }
];

const creatorSolutions = [
  {
    title: "Content Creators",
    desc: "Hybrid camera kits, compact lights, wireless audio, and fast setup gear for daily creation."
  },
  {
    title: "YouTubers",
    desc: "Studio-ready cameras, creator mics, desktop lighting, and reliable vlogging accessories."
  },
  {
    title: "Podcasters",
    desc: "Voice-first setups with clean audio capture, monitoring tools, and practical desk accessories."
  },
  {
    title: "Wildlife Enthusiasts",
    desc: "Binoculars, spotting scopes, rangefinders, long-reach support gear, and field-ready carry solutions."
  },
  {
    title: "Freelancers",
    desc: "Flexible production kits covering client shoots, quick travel jobs, and compact multi-purpose support gear."
  },
  {
    title: "Riders & Cyclists",
    desc: "Action cameras, gimbals, mounts, and durable mobile creator gear built for movement."
  },
  {
    title: "Property Shoots",
    desc: "Stabilized video, wide-angle capture, support gear, and lighting solutions for interiors and walkthroughs."
  }
];

const premiumEase = [0.16, 1, 0.3, 1] as const;

export default function Features() {
  const containerRef = useRef(null);

  return (
    <section ref={containerRef} className="bg-[#E6E6E6] py-20 md:py-32 flex flex-col items-center" id="services">
      
      {/* --- SECTION 1: ARTISAN SERVICES --- */}
      <div className="w-full text-center mb-12 md:mb-20">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: premiumEase }}
          className="font-syncopate text-2xl md:text-5xl font-bold text-[#111] tracking-tight"
        >
          ARTISAN SERVICES
        </motion.h2>
        <motion.p 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
          className="font-space mt-4 text-gray-600 max-w-xl mx-auto px-6 text-xs md:text-base"
        >
          Beyond equipment, we provide the technical expertise and finishing services required by working professionals.
        </motion.p>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1, ease: premiumEase }}
              className="w-full bg-white rounded-2xl md:rounded-3xl p-4 shadow-sm flex flex-col border border-gray-100 group transition-colors duration-300 hover:bg-[#FBFBFB]"
            >
              <div className="w-full aspect-[4/3] bg-background rounded-xl md:rounded-2xl overflow-hidden relative mb-5">
                <motion.img 
                  src={service.img} 
                  alt={service.title} 
                  className="w-full h-full object-cover mix-blend-multiply select-none" 
                  whileHover={{ scale: 1.04 }}
                  transition={{ duration: 0.6, ease: premiumEase }}
                  draggable={false}
                />
              </div>
              
              <div className="px-2 pb-2 flex flex-col grow justify-between">
                <div>
                  <div className="flex items-center justify-between gap-4 mb-2">
                    <h3 className="font-space font-bold text-gray-900 text-lg md:text-xl tracking-tight">
                      {service.title}
                    </h3>
                    <div className="p-2 bg-gray-100 rounded-lg text-gray-800 shrink-0">
                      {service.icon}
                    </div>
                  </div>
                  <p className="font-space text-xs md:text-sm text-gray-500 leading-relaxed mb-6">
                    {service.desc}
                  </p>
                </div>

                <div className="font-space font-bold text-xs md:text-sm text-gray-900 flex items-center gap-2 cursor-pointer self-start">
                  <span className="relative pb-0.5 after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 group-hover:after:w-full after:bg-gray-900 after:transition-all after:duration-300">
                    Learn More
                  </span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* --- SECTION 2: CREATOR SOLUTIONS (SPLIT LAYOUT) --- */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 mt-32 md:mt-48">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Column: Fixed Header Description */}
          <div className="lg:col-span-4 lg:sticky lg:top-24">
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease: premiumEase }}
              className="font-syncopate text-xl md:text-3xl font-bold text-[#111] tracking-tight uppercase"
            >
              CREATOR <br className="hidden lg:block"/>SOLUTIONS
            </motion.h3>
            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1, ease: premiumEase }}
              className="font-space mt-4 text-gray-600 text-xs md:text-sm leading-relaxed max-w-md"
            >
              All the creator gear and accessories solutions for every category, from YouTubers and podcasters to wildlife and property shoots.
            </motion.p>
          </div>

          {/* Right Column: Borderless Stack Rows (Fits exactly 7 items cleanly) */}
          <div className="lg:col-span-8 border-t border-gray-300 w-full">
            {creatorSolutions.map((solution, idx) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.6, delay: idx * 0.04, ease: premiumEase }}
                className="border-b border-gray-300 py-6 md:py-8 px-4 flex items-start sm:items-center justify-between gap-6 group transition-colors duration-300 hover:bg-white/40 rounded-lg"
              >
                <div className="flex gap-4 md:gap-8 items-start flex-1">
                  {/* Structural Indexing */}
                  <span className="font-space font-mono text-[10px] md:text-xs text-gray-400 mt-1">
                    {(idx + 1).toString().padStart(2, '0')}
                  </span>
                  
                  {/* Text Container Split */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-6 w-full">
                    <h4 className="font-space text-base md:text-lg font-bold text-gray-900 tracking-tight md:col-span-1">
                      {solution.title}
                    </h4>
                    <p className="font-space text-xs md:text-sm leading-relaxed text-gray-500 md:col-span-2">
                      {solution.desc}
                    </p>
                  </div>
                </div>

                {/* Subtle Inline Dynamic Arrow Indicator */}
                <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-gray-900 transition-transform duration-300 group-hover:translate-x-1 shrink-0 mt-1 sm:mt-0" />
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}

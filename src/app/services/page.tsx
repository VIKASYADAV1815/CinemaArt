"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const servicesList = [
  {
    title: "SYSTEM ARCHITECTURE",
    description: "We design complete ecosystems—matching camera bodies with the perfect glass, rigging, and support equipment for seamless operation.",
  },
  {
    title: "STUDIO INTEGRATION",
    description: "On-site consultation for lighting grids, audio treating, and multi-camera switching environments tailored for modern broadcast.",
  },
  {
    title: "ARCHIVAL FINISHING",
    description: "Color-calibrated fine art printing on Hahnemühle papers and custom framing designed to preserve and elevate your final image.",
  },
  {
    title: "EQUIPMENT CALIBRATION",
    description: "Precision autofocus tuning, sensor cleaning, and lens calibration to ensure your gear operates at maximum sharpness.",
  },
  {
    title: "WORKFLOW OPTIMIZATION",
    description: "End-to-end media management strategies, from on-set backup solutions to DaVinci Resolve color pipelines.",
  },
  {
    title: "CUSTOM RIGGING",
    description: "Bespoke camera builds for cinema, documentary, and action sports, featuring top-tier components and weight distribution.",
  },
];

export default function ServicesPage() {
  return (
    <main className="bg-[#E6E6E6] min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b-8 border-[#111]">
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
           <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              TECHNICAL SERVICES
           </span>
        </div>

        <div className="max-w-7xl mx-auto flex flex-col items-start relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex flex-col"
          >
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase">
              END-TO-END <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-transparent leading-none tracking-tighter uppercase md:ml-[5vw]" style={{ WebkitTextStroke: '2px #111' }}>
              TECHNICAL
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase md:ml-[10vw]">
              SUPPORT <span className="text-[#FF0000]">///</span>
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[20vw]"
          >
            <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
              From studio builds to custom creator kits, we provide the expertise needed to turn creative vision into tangible output.
            </p>
          </motion.div>
        </div>
      </section>

      {/* SERVICES GRID (BRUTALIST) */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-y border-l border-[#111]">
            {servicesList.map((service, idx) => (
              <div 
                key={idx}
                className="group relative border-r border-b border-[#111] p-10 hover:bg-[#111] hover:text-white transition-colors duration-500 min-h-[300px] flex flex-col justify-between overflow-hidden cursor-pointer"
              >
                {/* Background red fill animation */}
                <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
                
                <div className="relative z-10">
                  <span className="font-space text-[10px] font-bold tracking-[0.2em] mb-4 block text-[#FF0000] group-hover:text-white transition-colors duration-500">
                    [ 0{idx + 1} ]
                  </span>
                  <h3 className="font-syncopate text-xl md:text-2xl font-bold mb-6 tracking-tight uppercase leading-tight group-hover:text-white transition-colors duration-500">
                    {service.title}
                  </h3>
                  <p className="font-space text-xs leading-relaxed text-gray-700 group-hover:text-white/90 transition-colors duration-500">
                    {service.description}
                  </p>
                </div>
                
                <div className="w-10 h-10 border-2 border-[#111] group-hover:border-white group-hover:bg-transparent rounded-full flex items-center justify-center self-end mt-8 transition-colors duration-500 relative z-10">
                  <ArrowUpRight className="w-4 h-4 text-[#111] group-hover:text-white transition-colors duration-500" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-16 border-t border-[#111] bg-[#E6E6E6] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="font-syncopate text-4xl md:text-6xl font-black text-[#111] uppercase leading-tight mb-8">
            BOOK A <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>CONSULTATION</span>
          </h2>
          <p className="font-space text-sm md:text-base text-gray-700 mb-10 max-w-2xl leading-relaxed uppercase font-medium">
            Reach out to our technical advisory team to discuss your next studio build, exhibition, or equipment upgrade.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 mt-4">
            <Link href="/contact" className="relative overflow-hidden group bg-[#111] text-white px-8 py-4 font-space text-sm font-bold flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-2">LET'S BUILD YOUR SETUP <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

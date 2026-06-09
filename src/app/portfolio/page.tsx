"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const categories = ["ALL", "STUDIO BUILDS", "FINE ART", "CREATOR KITS", "COLOR GRADING"];

const portfolioItems = [
  {
    id: 1,
    title: "THE HIMALAYAN EXPEDITION KIT",
    category: "CREATOR KITS",
    image: "https://images.unsplash.com/photo-1510127034890-ba27508e9f1c?q=80&w=1600&auto=format&fit=crop",
    description: "A lightweight, weather-sealed Fujifilm GFX system paired with essential prime lenses and robust audio gear, built for high-altitude documentary work.",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-2",
  },
  {
    id: 2,
    title: "GALLERY EXHIBITION SERIES",
    category: "FINE ART",
    image: "https://images.unsplash.com/photo-1580130281320-0ef0754f2bf7?q=80&w=1000&auto=format&fit=crop",
    description: "Museum-grade Hahnemühle prints with anti-reflective archival framing for a local wildlife photography exhibition.",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 3,
    title: "DOWNTOWN COMMERCIAL STUDIO",
    category: "STUDIO BUILDS",
    image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?q=80&w=1000&auto=format&fit=crop",
    description: "Complete lighting and camera grid installation for an e-commerce fashion brand, featuring Sony Alpha systems and continuous LED arrays.",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    id: 4,
    title: "INDIE FEATURE COLOR SUITE",
    category: "COLOR GRADING",
    image: "https://images.unsplash.com/photo-1622737133809-d95047b9e673?q=80&w=1600&auto=format&fit=crop",
    description: "DaVinci Resolve finishing suite setup with calibrated reference monitors and tactile control surfaces for a boutique post-house.",
    span: "col-span-1 md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    id: 5,
    title: "CINEMATIC VLOGGING SETUP",
    category: "CREATOR KITS",
    image: "https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?q=80&w=1000&auto=format&fit=crop",
    description: "Compact, highly stabilized rigs focusing on the Fujifilm X-M5 and 32-bit float audio for solo creators on the move.",
    span: "col-span-1 md:col-span-1 lg:col-span-1 row-span-1",
  }
];

const stats = [
  { label: "EXHIBITIONS FRAMED", value: "120+" },
  { label: "STUDIOS EQUIPPED", value: "045" },
  { label: "CREATOR KITS BUILT", value: "500+" },
  { label: "AUTHORIZED BRANDS", value: "015+" },
];

export default function PortfolioPage() {
  return (
    <main className="bg-[#E6E6E6] min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
           <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              PORTFOLIO SHOWCASE
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
              SELECTED <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase md:ml-[5vw]">
              WORK <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-transparent leading-none tracking-tighter uppercase md:ml-[10vw]" style={{ WebkitTextStroke: '2px #111' }}>
              PROJECTS
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[20vw]"
          >
            <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
              Where premium equipment meets creative execution. A showcase of the studios we’ve built, the exhibitions we’ve printed, and the custom kits we’ve curated for professionals worldwide.
            </p>
          </motion.div>
        </div>
      </section>

      {/* STATS BANNER (BRUTALIST) */}
      <section className="border-y border-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-[#111]">
          {stats.map((stat, idx) => (
            <div key={idx} className="relative p-8 md:p-12 flex flex-col justify-center items-center md:items-start group hover:text-white transition-colors duration-500 overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <span className="relative z-10 font-syncopate text-4xl md:text-6xl font-black text-[#111] group-hover:text-white transition-colors duration-500 mb-2">
                {stat.value}
              </span>
              <span className="relative z-10 font-space text-[10px] md:text-xs font-bold tracking-[0.2em] text-gray-500 group-hover:text-white/80 transition-colors duration-500">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* GALLERY GRID */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 border-b-2 border-[#111] pb-8">
            <h2 className="font-syncopate text-3xl md:text-5xl font-black text-[#111] uppercase">
              FEATURED <br/> PROJECTS
            </h2>
            <div className="flex flex-wrap gap-3">
              {categories.map((cat, idx) => (
                <button 
                  key={idx}
                  className={`font-space text-xs font-bold px-4 py-2 border-2 transition-all duration-300 uppercase ${
                    idx === 0 
                      ? 'bg-[#FF0000] text-white border-[#FF0000]' 
                      : 'bg-transparent text-[#111] border-[#111] hover:bg-[#FF0000] hover:text-white hover:border-[#FF0000]'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[350px]">
            {portfolioItems.map((item, idx) => (
              <motion.div 
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className={`relative group overflow-hidden bg-gray-200 cursor-pointer border border-[#111] ${item.span}`}
              >
                <img 
                  src={item.image} 
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale group-hover:grayscale-0"
                />
                
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-100 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content */}
                <div className="absolute inset-0 p-8 flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="inline-block px-3 py-1 text-[10px] font-space font-bold uppercase tracking-[0.2em] text-white bg-[#FF0000]">
                      {item.category}
                    </span>
                    <div className="w-10 h-10 bg-white text-[#111] flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ArrowUpRight className="w-5 h-5" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="font-syncopate text-2xl md:text-3xl font-bold text-white tracking-tight mb-3 uppercase">
                      {item.title}
                    </h3>
                    <p className="font-space text-white/80 text-xs md:text-sm leading-relaxed max-w-lg hidden md:block">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-16 border-t border-[#111] bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="font-syncopate text-4xl md:text-6xl font-black text-[#111] uppercase leading-tight mb-8">
            UPGRADE YOUR <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>WORKFLOW</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link href="/contact" className="relative overflow-hidden group bg-[#111] text-white px-8 py-4 font-space text-sm font-bold flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-2">CONTACT ADVISORY <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

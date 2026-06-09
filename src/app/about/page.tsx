"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const principles = [
  {
    title: "CURATED OVER CROWDED",
    description: "We focus on equipment and services that meaningfully improve image quality, workflow confidence, and long-term value instead of filling shelves with noise.",
  },
  {
    title: "ADVISORY BEFORE SELLING",
    description: "Every creator works differently. We help match systems, lenses, audio, support gear, and finishing services to real use cases, not just specifications.",
  },
  {
    title: "FINISH MATTERS",
    description: "From color-managed output to museum-grade framing and print presentation, we care about what happens after the shutter just as much as the capture itself.",
  },
];

const capabilities = [
  "Premium mirrorless cameras, lenses, audio, support gear",
  "Authorized brand guidance for Fujifilm, Sony, Canon, DJI",
  "Hybrid photo-video recommendations for studios & commercial teams",
  "Fine art printing, display preparation, archival framing",
  "Workflow-first advice for vlogging, portraiture, client shoots",
];

const whoWeServe = [
  {
    title: "CONTENT CREATORS",
    description: "Compact, reliable setups for daily publishing, reels, shorts, podcasts, and fast-turnaround production.",
  },
  {
    title: "WORKING PROFESSIONALS",
    description: "High-performance bodies, lenses, and workflow guidance for commercial, portrait, event, and studio assignments.",
  },
  {
    title: "EMERGING FILMMAKERS",
    description: "Balanced kits built around image quality, audio clarity, stabilization, and practical production flexibility.",
  },
  {
    title: "COLLECTORS & BUYERS",
    description: "Presentation-focused services for fine art prints, premium framing, and gallery-ready visual finishing.",
  },
];

export default function AboutPage() {
  return (
    <main className="bg-[#E6E6E6] min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
           <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              ABOUT CINEMAART
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
              IMAGE <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase md:ml-[5vw]">
              CRAFT <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-transparent leading-none tracking-tighter uppercase md:ml-[10vw]" style={{ WebkitTextStroke: '2px #111' }}>
              PROCESS
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[20vw]"
          >
            <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
              CinemaArt Studio brings together premium imaging equipment, thoughtful advisory, and finishing services for modern creators. We exist for photographers, filmmakers, studios, and visual brands who want more than a transaction.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CALLOUTS (RAW STYLE) */}
      <section className="border-y border-[#111]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#111]">
          <div className="relative p-10 md:p-20 hover:text-white transition-colors duration-500 group cursor-default overflow-hidden">
            <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <div className="relative z-10">
              <p className="font-space text-[10px] font-bold tracking-[0.2em] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">01 // POSITION</p>
              <h2 className="font-syncopate text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-500">INTERSECTION OF RETAIL & CONSULTANCY</h2>
              <p className="font-space text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                We operate at the intersection of premium retail, creator consultancy, and visual finishing, helping clients move from selection to output with confidence.
              </p>
            </div>
          </div>
          <div className="relative p-10 md:p-20 hover:text-white transition-colors duration-500 group cursor-default overflow-hidden">
            <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
            <div className="relative z-10">
              <p className="font-space text-[10px] font-bold tracking-[0.2em] mb-6 opacity-60 group-hover:opacity-100 transition-opacity duration-500">02 // DIFFERENCE</p>
              <h2 className="font-syncopate text-2xl md:text-3xl font-bold mb-6 group-hover:text-white transition-colors duration-500">EXPERTISE IS NOT SEPARATED FROM BUYING</h2>
              <p className="font-space text-sm md:text-base leading-relaxed group-hover:text-white/90 transition-colors duration-500">
                The same mindset that values a strong sensor, a good lens pairing, or reliable audio also values print fidelity, framing quality, and presentation.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY (BRUTALIST GRID) */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            <div className="w-full md:w-1/3">
               <h2 className="font-syncopate text-4xl md:text-6xl font-black text-[#111] leading-[0.9] uppercase sticky top-32">
                 STUDIO<br/>MINDSET<br/><span className="text-[#FF0000]">INSIDE</span><br/>RETAIL
               </h2>
            </div>
            <div className="w-full md:w-2/3 flex flex-col gap-12 font-space text-sm md:text-base leading-relaxed text-gray-800">
              <p className="text-xl md:text-2xl font-bold text-[#111]">
                The imaging world has changed. Today's buyers are rarely choosing for still photography alone.
              </p>
              <p>
                They need hybrid systems for photo and video, creator-friendly workflows, dependable autofocus, better audio, lighter kits, and stronger visual output across social, commercial, and printed formats. CinemaArt Studio is shaped around that reality.
              </p>
              <p>
                Our approach is informed by how professionals and creators actually work: they need portability without compromise, product advice without confusion, and finishing services that respect the image after capture. That is why our platform combines leading camera systems, creator tools, printing expertise, and premium framing into one coherent experience.
              </p>
              <div className="p-8 border-2 border-[#111] bg-[#111] text-white">
                <p className="font-bold text-lg">
                  We believe good equipment should not feel intimidating and premium service should not feel vague. The result is a studio-led retail environment designed to help clients buy well, create better, and present their work with more confidence.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRINCIPLES */}
      <section className="bg-[#111] text-white py-20 md:py-32 px-6 md:px-16 border-t-8 border-[#FF0000]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center gap-4 mb-16">
             <div className="w-12 h-1 bg-[#FF0000]" />
             <h2 className="font-syncopate text-2xl md:text-4xl font-bold">OUR PRINCIPLES</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {principles.map((item, i) => (
              <div key={i} className="flex flex-col">
                <span className="font-space text-6xl font-black text-white/10 mb-4">0{i+1}</span>
                <h3 className="font-syncopate text-lg md:text-xl font-bold mb-4 text-[#FF0000]">{item.title}</h3>
                <p className="font-space text-sm leading-relaxed text-gray-400">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT WE DO & SERVE */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
          <div>
            <h2 className="font-syncopate text-3xl font-black text-[#111] mb-12 uppercase">
              CAPABILITIES <span className="text-[#FF0000]">///</span>
            </h2>
            <div className="flex flex-col gap-6 font-space text-sm font-medium text-gray-800 uppercase">
              {capabilities.map((cap, i) => (
                <div key={i} className="flex items-start gap-4 pb-6 border-b border-[#111]">
                  <span className="text-[#FF0000] font-bold">[{i+1}]</span>
                  <p>{cap}</p>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h2 className="font-syncopate text-3xl font-black text-[#111] mb-12 uppercase">
              WHO WE SERVE <span className="text-[#FF0000]">///</span>
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-12">
              {whoWeServe.map((item, i) => (
                <div key={i} className="flex flex-col">
                  <h3 className="font-syncopate text-sm font-bold text-[#111] mb-3 border-b-2 border-[#111] inline-block pb-1 self-start">{item.title}</h3>
                  <p className="font-space text-xs leading-relaxed text-gray-600">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-32 px-6 md:px-16 border-t border-[#111] bg-[#E6E6E6] overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none" />
        <div className="max-w-4xl mx-auto text-center flex flex-col items-center relative z-10">
          <h2 className="font-syncopate text-4xl md:text-6xl font-black text-[#111] uppercase leading-tight mb-8">
            EXPLORE THE <br/> <span className="text-transparent" style={{ WebkitTextStroke: '2px #111' }}>STUDIO</span>
          </h2>
          <div className="flex flex-col sm:flex-row gap-6 mt-8">
            <Link href="/products" className="relative overflow-hidden group bg-[#111] text-white px-8 py-4 font-space text-sm font-bold flex items-center justify-center gap-3">
              <span className="relative z-10 flex items-center gap-2">START EXPLORING <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}

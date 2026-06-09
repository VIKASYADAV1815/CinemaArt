"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ContactPage() {
  return (
    <main className="bg-[#E6E6E6] min-h-screen selection:bg-[#FF0000] selection:text-white">
      <Navbar />
      
      {/* HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 md:px-16 overflow-hidden border-b-8 border-[#111]">
        <div className="absolute left-2 md:left-4 top-1/2 -translate-y-1/2 z-20 pointer-events-none hidden md:block">
           <span className="font-space tracking-[0.6em] text-[10px] font-bold text-gray-800" style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)' }}>
              CONTACT ADVISORY
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
              LET'S <span className="text-[#FF0000]">///</span>
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-transparent leading-none tracking-tighter uppercase md:ml-[5vw]" style={{ WebkitTextStroke: '2px #111' }}>
              DISCUSS
            </h1>
            <h1 className="font-syncopate text-[8vw] md:text-[5vw] lg:text-[4.5vw] font-black text-[#111] leading-none tracking-tighter uppercase md:ml-[10vw]">
              YOUR SETUP
            </h1>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="mt-12 md:mt-20 max-w-2xl border-l-2 border-[#FF0000] pl-6 md:pl-10 md:ml-[20vw]"
          >
            <p className="font-space text-sm md:text-base leading-relaxed text-gray-800 uppercase font-medium">
              Reach out to our technical advisory team to discuss your next studio build, exhibition, or equipment upgrade.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CONTACT CONTENT (BRUTALIST GRID) */}
      <section className="py-20 md:py-32 px-6 md:px-16">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-0 border border-[#111]">
          
          {/* Contact Info */}
          <div className="flex flex-col border-b lg:border-b-0 lg:border-r border-[#111]">
            <div className="relative p-10 md:p-16 border-b border-[#111] hover:text-white transition-colors duration-500 group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10">
                <span className="font-space text-[10px] font-bold tracking-[0.2em] mb-4 block text-[#FF0000] group-hover:text-white transition-colors duration-500">[ EMAIL ]</span>
                <h3 className="font-syncopate text-2xl font-bold mb-2 uppercase group-hover:text-white transition-colors duration-500">ADVISORY TEAM</h3>
                <a href="mailto:advisory@cinemaart.studio" className="font-space text-lg font-bold group-hover:text-white transition-colors duration-500 underline decoration-2 underline-offset-4">advisory@cinemaart.studio</a>
              </div>
            </div>

            <div className="relative p-10 md:p-16 border-b border-[#111] hover:text-white transition-colors duration-500 group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10">
                <span className="font-space text-[10px] font-bold tracking-[0.2em] mb-4 block text-[#FF0000] group-hover:text-white transition-colors duration-500">[ LOCATION ]</span>
                <h3 className="font-syncopate text-2xl font-bold mb-2 uppercase group-hover:text-white transition-colors duration-500">THE STUDIO</h3>
                <p className="font-space text-sm leading-relaxed uppercase font-medium group-hover:text-white/90 transition-colors duration-500">
                  120 Creator's Ave, Suite 400<br/>
                  New York, NY 10012<br/><br/>
                  <span className="text-[#FF0000] group-hover:text-white transition-colors duration-500">/// BY APPOINTMENT ONLY</span>
                </p>
              </div>
            </div>

            <div className="relative p-10 md:p-16 hover:text-white transition-colors duration-500 group overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out z-0" />
              <div className="relative z-10">
                <span className="font-space text-[10px] font-bold tracking-[0.2em] mb-4 block text-[#FF0000] group-hover:text-white transition-colors duration-500">[ PHONE ]</span>
                <h3 className="font-syncopate text-2xl font-bold mb-2 uppercase group-hover:text-white transition-colors duration-500">DIRECT LINE</h3>
                <a href="tel:+1234567890" className="font-space text-lg font-bold group-hover:text-white transition-colors duration-500">+1 (234) 567-890</a>
                <p className="font-space text-[10px] mt-2 text-gray-500 group-hover:text-white/80 transition-colors duration-500 uppercase">Mon-Fri, 9am - 6pm EST</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="p-10 md:p-16 bg-[#111] text-white flex flex-col justify-center relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] opacity-10 pointer-events-none mix-blend-overlay" />
            
            <h2 className="font-syncopate text-3xl font-black mb-10 uppercase relative z-10">SEND A MESSAGE</h2>
            
            <form className="relative z-10 flex flex-col gap-8 font-space">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col gap-2">
                  <label htmlFor="firstName" className="text-[10px] font-bold tracking-[0.2em] text-[#FF0000] uppercase">FIRST NAME</label>
                  <input type="text" id="firstName" className="bg-transparent border-b-2 border-white/20 px-0 py-3 text-sm focus:border-white focus:outline-none transition-colors rounded-none" placeholder="JOHN" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="lastName" className="text-[10px] font-bold tracking-[0.2em] text-[#FF0000] uppercase">LAST NAME</label>
                  <input type="text" id="lastName" className="bg-transparent border-b-2 border-white/20 px-0 py-3 text-sm focus:border-white focus:outline-none transition-colors rounded-none" placeholder="DOE" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-[10px] font-bold tracking-[0.2em] text-[#FF0000] uppercase">EMAIL ADDRESS</label>
                <input type="email" id="email" className="bg-transparent border-b-2 border-white/20 px-0 py-3 text-sm focus:border-white focus:outline-none transition-colors rounded-none" placeholder="JOHN@EXAMPLE.COM" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-[10px] font-bold tracking-[0.2em] text-[#FF0000] uppercase">MESSAGE / INQUIRY</label>
                <textarea id="message" rows={5} className="bg-transparent border-b-2 border-white/20 px-0 py-3 text-sm focus:border-white focus:outline-none transition-colors resize-none rounded-none" placeholder="TELL US ABOUT YOUR PROJECT..."></textarea>
              </div>

              <button type="button" className="mt-4 self-start relative overflow-hidden group bg-white text-[#111] px-8 py-4 text-sm font-bold flex items-center justify-center gap-3">
                <span className="relative z-10 flex items-center gap-2">SUBMIT INQUIRY <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                <div className="absolute inset-0 bg-[#FF0000] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out" />
              </button>
            </form>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
}

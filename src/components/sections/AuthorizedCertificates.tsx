"use client";

import { motion } from "framer-motion";
import { Award, CheckCircle, ShieldCheck } from "lucide-react";

const certificates = [
  { title: "Fujifilm Premium Partner", desc: "Authorized dealer for X-Series & GFX systems", icon: Award },
  { title: "Sony Pro Dealer", desc: "Certified for Alpha series and Cinema Line", icon: ShieldCheck },
  { title: "Canon Master Reseller", desc: "Highest tier partner for EOS cameras and lenses", icon: CheckCircle },
];

export default function AuthorizedCertificates() {
  return (
    <section className="bg-[#E6E6E6] py-24" id="certificates">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* User can add their custom image/layout here based on the reference */}
        <div className="flex flex-col items-center justify-center gap-12">
           <motion.h2 
             initial={{ opacity: 0, y: 30 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 0.8, ease: "easeOut" }}
             className="font-syncopate text-3xl md:text-5xl font-bold text-[#111]"
           >
             AUTHORIZED PARTNER
           </motion.h2>
           <motion.div 
             initial={{ opacity: 0, scale: 0.95 }}
             whileInView={{ opacity: 1, scale: 1 }}
             viewport={{ once: true, margin: "-100px" }}
             transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
             className="w-full max-w-4xl h-[400px] border-2 border-dashed border-gray-300 rounded-3xl flex items-center justify-center text-gray-500 shadow-[8px_8px_16px_#c4c4c4,-8px_-8px_16px_#ffffff] bg-[#E6E6E6]"
           >
             [Image Placeholder for Authorized Certificates]
           </motion.div>
        </div>
      </div>
    </section>
  );
}
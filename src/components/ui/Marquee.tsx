"use client";

import { motion } from "framer-motion";

export default function Marquee() {
  return (
    <div className="w-full bg-[#111] py-6 overflow-hidden flex items-center border-y border-white/10">
      <motion.div
        className="flex whitespace-nowrap gap-12 items-center"
        animate={{ x: ["0%", "-50%"] }}
        transition={{ ease: "linear", duration: 20, repeat: Infinity }}
      >
        {[...Array(2)].map((_, i) => (
          <div key={i} className="flex gap-12 items-center text-white font-syncopate text-xl md:text-2xl tracking-widest uppercase">
            <span>Authorized Sony Dealer</span>
            <span className="text-gray-600">✽</span>
            <span>Canon Master Partner</span>
            <span className="text-gray-600">✽</span>
            <span>Fujifilm Premium Partner</span>
            <span className="text-gray-600">✽</span>
            <span>Nikon Pro Services</span>
            <span className="text-gray-600">✽</span>
            <span>DJI Enterprise</span>
            <span className="text-gray-600">✽</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
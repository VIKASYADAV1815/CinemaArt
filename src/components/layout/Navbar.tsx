"use client";

import { motion } from "framer-motion";
import { Menu } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1.5, ease: [0.76, 0, 0.24, 1] }}
      className="fixed left-0 right-0 top-0 z-[150] flex items-center justify-between px-6 py-8 pointer-events-auto mix-blend-difference text-white md:px-12"
    >
      <div className="flex items-center gap-4">
        <Menu className="h-6 w-6 cursor-pointer hover:text-[#00E5FF] transition-colors" />
      </div>

      <div className="hidden md:flex gap-12 items-center text-xs font-syncopate tracking-[0.2em]">
        <Link href="/" className="font-caveat text-4xl lowercase text-[#00E5FF] tracking-normal">Home</Link>
        <Link href="/about" className="hover:text-[#00E5FF] transition-colors">ABOUT US</Link>
        <Link href="/portfolio" className="hover:text-[#00E5FF] transition-colors">PORTFOLIO</Link>
        <Link href="/services" className="hover:text-[#00E5FF] transition-colors">SERVICES</Link>
        <Link href="/contact" className="hover:text-[#00E5FF] transition-colors">CONTACT</Link>
      </div>

      <Link href="#home" className="font-syncopate text-2xl font-bold tracking-widest hover:text-[#00E5FF] transition-colors">
        CA.
      </Link>
    </motion.nav>
  );
}

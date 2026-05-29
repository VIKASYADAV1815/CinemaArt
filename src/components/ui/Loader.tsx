"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_+";

export default function Loader() {
  const [loading, setLoading] = useState(true);
  const [text, setText] = useState("CINEMA ART STUDIOS");

  useEffect(() => {
    let iterations = 0;
    const targetText = "CINEMA ART STUDIOS";
    
    const interval = setInterval(() => {
      setText((prev) => 
        targetText.split("").map((letter, index) => {
          if (letter === " ") return " ";
          if (index < iterations) {
            return targetText[index];
          }
          return characters[Math.floor(Math.random() * characters.length)];
        }).join("")
      );

      if (iterations >= targetText.length) {
        clearInterval(interval);
      }
      
      iterations += 1 / 3;
    }, 40);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  // Prevent hydration mismatch and ensure it blocks everything early
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111]">
        <h1 className="font-syncopate text-2xl font-bold tracking-widest text-white md:text-5xl lg:text-7xl text-center px-4">
          CINEMA ART STUDIOS
        </h1>
      </div>
    );
  }

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#111]"
        >
          <div className="overflow-hidden px-4">
            <motion.h1
              className="font-syncopate text-2xl font-bold tracking-widest text-white md:text-5xl lg:text-7xl tabular-nums text-center"
            >
              {text}
            </motion.h1>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
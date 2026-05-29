"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.2]);

  const titleWords = "CinemaArt Studio".split(" ");

  return (
    <section
      ref={containerRef}
      className="relative flex h-screen w-full items-center justify-center overflow-hidden bg-[#E6E6E6]"
    >
      {/* Background Image/Shape with Parallax */}
      <motion.div
        style={{ scale, y: y1 }}
        className="absolute inset-0 z-0 flex items-center justify-center opacity-30"
      >
        <div className="h-[40rem] w-[40rem] rounded-full bg-gradient-to-tr from-gray-300 to-gray-500 blur-3xl filter" />
      </motion.div>

      {/* Main Content */}
      <motion.div style={{ y: y2, opacity }} className="relative z-10 flex flex-col items-center">
        <div className="overflow-hidden">
          <motion.p
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, delay: 2.2, ease: [0.76, 0, 0.24, 1] }}
            className="mb-4 text-sm font-medium tracking-[0.3em] text-gray-500 uppercase"
          >
            The Art of Visual Storytelling
          </motion.p>
        </div>
        
        <h1 className="flex flex-wrap justify-center gap-4 text-center font-serif text-6xl md:text-8xl lg:text-9xl">
          {titleWords.map((word, index) => (
            <div key={index} className="overflow-hidden">
              <motion.span
                initial={{ y: "100%", rotate: 5 }}
                animate={{ y: 0, rotate: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 2.4 + index * 0.1,
                  ease: [0.76, 0, 0.24, 1],
                }}
                className="inline-block"
              >
                {word}
              </motion.span>
            </div>
          ))}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 3 }}
          className="mt-12"
        >
          <div className="h-24 w-[1px] bg-black/20" />
          <motion.div
            animate={{ y: [0, 100] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
            className="h-8 w-[1px] bg-black"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}

"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*";

export default function RandomRevealText({ text, show }: { text: string; show: boolean }) {
  const [displayText, setDisplayText] = useState(text);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted) return;

    if (!show) {
      setDisplayText(text.split("").map((c) => (c === " " ? " " : letters[Math.floor(Math.random() * letters.length)])).join(""));
      return;
    }

    let iteration = 0;
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        prev
          .split("")
          .map((char, index) => {
            if (index < iteration) {
              return text[index];
            }
            return text[index] === " " ? " " : letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 3;
    }, 30);

    return () => clearInterval(interval);
  }, [show, text]);

  return <span>{displayText}</span>;
}
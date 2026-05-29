"use client";

import { motion } from "framer-motion";

const brands = [
  { 
    name: "Fujifilm", 
    type: "img", 
    src: "https://upload.wikimedia.org/wikipedia/commons/a/a1/Fujifilm_logo.svg" 
  },
  { 
    name: "Sony", 
    type: "svg", 
    svg: (
      <svg viewBox="0 0 122.88 21.63" className="w-full h-full fill-current">
        <path d="M43.78,21.63c-4.45,0-8.59-1.33-11.34-3.81a9.28,9.28,0,0,1-3.09-7,9.4,9.4,0,0,1,3.09-7C35,1.46,39.52,0,43.78,0c4.71,0,8.48,1.19,11.36,3.8a9.36,9.36,0,0,1,3,7,9.72,9.72,0,0,1-3,7c-2.68,2.5-6.9,3.81-11.36,3.81V18.78a8.56,8.56,0,0,0,6.08-2.34,7.56,7.56,0,0,0,2.23-5.64,7.85,7.85,0,0,0-2.23-5.66,9.15,9.15,0,0,0-12.18,0,7.94,7.94,0,0,0-2.22,5.66,7.89,7.89,0,0,0,2.22,5.64,8.63,8.63,0,0,0,6.1,2.34v2.85ZM11.24,0A18.77,18.77,0,0,0,3.86,1.48C1.74,2.43,0,4,0,6.5a5.2,5.2,0,0,0,1.41,3.58,7.87,7.87,0,0,0,4.22,2.11c1.16.25,3.64.64,6.12.9s4.87.51,5.85.76c.79.2,2.1.47,2.1,1.94a2.21,2.21,0,0,1-1.62,2,12.44,12.44,0,0,1-4.89.85,20.61,20.61,0,0,1-5.82-1A7,7,0,0,1,4,15.4a3.85,3.85,0,0,1-.7-2.13H.6v7.57h3v-1a.43.43,0,0,1,.65-.37,24,24,0,0,0,4.4,1.42,18.68,18.68,0,0,0,4.55.56,19.58,19.58,0,0,0,6.12-.86,10.53,10.53,0,0,0,3.62-1.79,5,5,0,0,0,1.95-4,5.57,5.57,0,0,0-1.57-3.92,6.78,6.78,0,0,0-1.95-1.32A14.8,14.8,0,0,0,19,8.72c-1.55-.38-5.05-.85-6.72-1a49.24,49.24,0,0,1-6-.81A1.47,1.47,0,0,1,5.12,5.54,1.85,1.85,0,0,1,6.15,4a11.69,11.69,0,0,1,5.52-1.1,16.16,16.16,0,0,1,6.41,1.25A7.28,7.28,0,0,1,19.6,5a4.57,4.57,0,0,1,1.5,2.51h2.43V1H20.82v.77c0,.25-.26.57-.74.3a20.74,20.74,0,0,0-8.84-2Zm59.35,1.2L83.8,13.13l-.13-8c0-1-.21-1.49-1.35-1.49H79.84V1.21H91.13v2.4H88.71c-1.16,0-1.23.37-1.25,1.49l.21,15.34H83.8L68.58,6.86V16.5c0,1.05.06,1.54,1.14,1.54h2.71v2.4H61.35V18h2.59c1,0,.93-.92.93-1.6V5.19c0-.72-.1-1.58-1.62-1.58H61.14V1.21ZM104,18a4.8,4.8,0,0,0,.67-.05.8.8,0,0,0,.52-.46,2.29,2.29,0,0,0,0-.52V13.22c0-.09,0-.13-.17-.34S98.2,5,97.89,4.68a2.81,2.81,0,0,0-2.08-1.07H93.47V1.21h13.24v2.4h-1.59c-.37,0-.62.35-.3.74l4.5,5.39s.07.07.13,0,4.57-5.35,4.6-5.4a.46.46,0,0,0-.39-.74H112V1.21h10.86v2.4h-2.43a2.07,2.07,0,0,0-1.9.91l-7.31,8.34a.56.56,0,0,0-.08.36V17a2.29,2.29,0,0,0,0,.52.8.8,0,0,0,.52.46,4.68,4.68,0,0,0,.66,0h2.48v2.41H101.69V18Z"/>
      </svg>
    )
  },
  { 
    name: "GoPro", 
    type: "img", 
    src: "https://upload.wikimedia.org/wikipedia/commons/6/67/GoPro_logo_light.svg" 
  },
  { 
    name: "Nikon", 
    type: "text", 
    text: "Nikon" 
  },
  { 
    name: "Canon", 
    type: "svg", 
    svg: (
      <svg viewBox="0 0 122.88 25.7" className="w-full h-full fill-current text-white">
        <path d="M54.28,25.08,50,8.92a6.11,6.11,0,0,0-8-4.16L32.63,8.15h9.59l1.64,6.12a9,9,0,0,0-5.93-2.2c-4.5,0-8.15,3-8.15,6.74s3.65,6.74,8.15,6.74a9.72,9.72,0,0,0,7.88-4l.95,3.56Zm45.87-10A10.66,10.66,0,1,1,89.5,4.39a10.65,10.65,0,0,1,10.65,10.66ZM20.06,23.2a10.35,10.35,0,0,1,0-20.69,10.21,10.21,0,0,1,5.48,1.57l-5.48,8.77,10.32-6A14.06,14.06,0,0,0,25.71,2.4,19.27,19.27,0,0,0,16,0C10.56,0,5.79,2,3.14,4.93A11.76,11.76,0,0,0,0,12.85a11.8,11.8,0,0,0,3.14,7.93c2.66,3,7.35,4.92,12.69,4.92s10-2,12.7-4.92c.14-.16.29-.33.42-.5l-.4-1.51a10.35,10.35,0,0,1-8.49,4.43ZM89.94,7.63A2.35,2.35,0,1,0,85.4,8.84l3.65,13.63a2.35,2.35,0,1,0,4.54-1.22L89.94,7.63Zm29.18-3.24a3.9,3.9,0,0,0-1.6.35l-6,2.79a3.76,3.76,0,0,0-3.71-3.14,3.85,3.85,0,0,0-1.59.35L98.93,8.15h5.14V25.08h7.52V10a1.88,1.88,0,0,1,3.76,0V25.08h7.53V8.15a3.76,3.76,0,0,0-3.76-3.76Zm-47.18,0a3.73,3.73,0,0,0-1.58.35l-6,2.79a3.77,3.77,0,0,0-3.72-3.14,3.89,3.89,0,0,0-1.59.35l-7.3,3.41h5.13V25.08h7.53V10a1.88,1.88,0,0,1,3.76,0V25.08H75.7V8.15a3.76,3.76,0,0,0-3.76-3.76ZM41.07,22.57a3.76,3.76,0,1,1,3.76-3.76,3.76,3.76,0,0,1-3.76,3.76Z"/>
      </svg>
    )
  },
  { 
    name: "Insta360", 
    type: "img", 
    src: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Insta360_logo_%28transparent%29.svg" 
  },
  { 
    name: "DJI", 
    type: "img", 
    src: "https://upload.wikimedia.org/wikipedia/commons/9/9a/DJI_Innovations_logo.svg" 
  },
];

const duplicatedBrands = [...brands, ...brands, ...brands];

export default function BrandShowcase() {
  return (
    <section className="relative w-full bg-[#111] py-8 text-white overflow-hidden" id="cameras">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-4 flex flex-col items-center justify-center text-center"
        >
          <motion.h2 
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-syncopate text-sm md:text-base font-bold tracking-widest uppercase text-gray-400"
          >
            Premium Equipment
          </motion.h2>
        </motion.div>
      </div>

      <div className="relative flex overflow-hidden group">
        <motion.div
          className="flex whitespace-nowrap gap-12 md:gap-24 items-center"
          animate={{ x: ["0%", "-33.33%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
        >
          {duplicatedBrands.map((brand, i) => (
            <div key={i} className="flex-shrink-0 w-16 h-8 md:w-24 md:h-10 flex items-center justify-center opacity-50 hover:opacity-100 transition-opacity duration-300">
              {brand.type === "img" && (
                <img src={brand.src} alt={brand.name} className="max-w-full max-h-full object-contain filter brightness-0 invert" />
              )}
              {brand.type === "svg" && (
                <div className="w-full h-full flex items-center justify-center text-white">
                  {brand.svg}
                </div>
              )}
              {brand.type === "text" && (
                <span className="font-syncopate text-2xl md:text-4xl font-bold tracking-widest uppercase">{brand.text}</span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
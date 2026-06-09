"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, ShieldCheck, Truck, ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
import { use, useState, useEffect } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

export default function ProductPage({ params }: { params: Promise<{ category: string, slug: string }> }) {
  const resolvedParams = use(params);
  
  // Find product by slug
  const product = products.find(p => p.slug === resolvedParams.slug);
  
  const [activeColorIdx, setActiveColorIdx] = useState(0);
  const [activeLens, setActiveLens] = useState<string | null>(product?.lenses?.[0] || null);
  const [currentImage, setCurrentImage] = useState(0);
  const [openSpecCategory, setOpenSpecCategory] = useState<string | null>(null);
  const [isLightboxOpen, setIsLightboxOpen] = useState(false);

  // Handle lens selection logic
  useEffect(() => {
    if (!product) return;
    if (activeLens === "XC 15-45mm Lens") {
      // Find Silver color index
      const silverIdx = product.colors.findIndex(c => c.name === "Silver");
      if (silverIdx !== -1) {
        setActiveColorIdx(silverIdx);
        // Assuming f1.webp is the 0th image in silver
        setCurrentImage(0); 
      }
    } else if (activeLens === "Body") {
       // Just reset image to body only if needed, currently leaving color as is
       setCurrentImage(0);
    }
  }, [activeLens, product]);

  if (!product) {
    return (
      <main className="min-h-screen bg-background pt-40 pb-24 flex items-center justify-center">
        <h1 className="font-syncopate text-2xl">Product Not Found</h1>
      </main>
    );
  }

  const activeColor = product.colors[activeColorIdx];
  const nextImage = () => setCurrentImage((prev) => (prev + 1) % activeColor.images.length);
  const prevImage = () => setCurrentImage((prev) => (prev === 0 ? activeColor.images.length - 1 : prev - 1));

  // Thumbnail slider controls
  const scrollThumbnails = (direction: 'left' | 'right') => {
    const container = document.getElementById('thumbnail-slider');
    if (container) {
      const scrollAmount = 300; // Adjust scroll amount as needed
      container.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
    <Navbar />
    <main className="min-h-screen bg-backgroundd pt-40 pb-24">
      <div className="max-w-350 mx-auto px-6 md:px-12">
        
        {/* Breadcrumb */}
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center gap-2 text-xs font-space text-gray-500 mb-8"
        >
          <Link href="/products" className="hover:text-[#111] transition-colors flex items-center gap-1">
            <ArrowLeft className="w-3 h-3" /> Back to Products
          </Link>
          <span>/</span>
          <span className="capitalize">{resolvedParams.category.replace('-', ' ')}</span>
          <span>/</span>
          <span className="text-[#111] font-medium">{product.name}</span>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Image Gallery Area */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="flex flex-col gap-6"
          >
            <div className="bg-[#F5F5F5] border border-transparent rounded-sm p-12 flex items-center justify-center min-h-125 relative overflow-hidden shadow-sm group">
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              <div className="absolute top-6 left-6 z-20 flex flex-col gap-2">
                <span className="bg-[#111] text-white text-[10px] font-syncopate px-3 py-1.5 uppercase tracking-[0.2em] font-bold shadow-sm">
                  {product.brand}
                </span>
                {product.status !== 'In Stock' && (
                  <span className={`text-[10px] font-syncopate px-3 py-1.5 uppercase tracking-[0.2em] font-bold shadow-sm ${
                    product.status === 'Pre-order' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'
                  }`}>
                    {product.status}
                  </span>
                )}
              </div>
              
              <div 
                className="relative w-full h-full flex items-center justify-center cursor-zoom-in"
                onClick={() => setIsLightboxOpen(true)}
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImage}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.3 }}
                    src={activeColor.images[currentImage]}
                    alt={`${product.name} - ${activeColor.name}`}
                    className="w-full max-w-md object-contain mix-blend-multiply drop-shadow-2xl"
                  />
                </AnimatePresence>
              </div>

              {/* Slider Arrows */}
              <button onClick={prevImage} className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center shadow-md hover:bg-[#111] hover:text-white transition-colors z-20 group">
                <ChevronLeft className="w-5 h-5 group-hover:-translate-x-0.5 transition-transform" />
              </button>
              <button onClick={nextImage} className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white border border-gray-200 rounded-sm flex items-center justify-center shadow-md hover:bg-[#111] hover:text-white transition-colors z-20 group">
                <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
              </button>
            </div>

            {/* Thumbnails with Slider Controls */}
            <div className="relative group flex items-center">
              <button 
                onClick={() => scrollThumbnails('left')}
                className="absolute left-0 z-10 w-8 h-8 bg-white/90 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-[#111] hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-4"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              
              <div 
                id="thumbnail-slider"
                className="flex gap-3 overflow-x-auto py-2 px-1 scroll-smooth no-scrollbar"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
              >
                {activeColor.images.map((img, idx) => (
                   <button 
                     key={idx} 
                     onClick={() => setCurrentImage(idx)} 
                     className={`shrink-0 w-20 h-20 rounded-sm border-2 transition-all duration-300 ${currentImage === idx ? 'border-[#111] bg-white shadow-md' : 'border-transparent bg-[#F5F5F5] hover:bg-white'} p-2 flex items-center justify-center`}
                   >
                     <img src={img} className="max-w-full max-h-full object-contain mix-blend-multiply" />
                   </button>
                ))}
              </div>

              <button 
                onClick={() => scrollThumbnails('right')}
                className="absolute right-0 z-10 w-8 h-8 bg-white/90 border border-gray-200 rounded-full flex items-center justify-center shadow-md hover:bg-[#111] hover:text-white transition-colors opacity-0 group-hover:opacity-100 translate-x-4"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>

          {/* Product Info Area */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-col justify-center"
          >
            <h1 className="font-syncopate text-2xl md:text-4xl font-semibold text-[#111] mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="font-space text-gray-600 mb-8 leading-relaxed text-sm md:text-base">
              {product.overview}
            </p>

            {/* Color Selection */}
            {product.colors && product.colors.length > 0 && (
              <div className="mb-8">
                <h3 className="font-syncopate text-xs font-bold tracking-[0.2em] text-[#111] uppercase mb-3">COLOR: <span className="text-gray-500 font-space font-normal tracking-normal">{activeColor.name}</span></h3>
                <div className="flex gap-3">
                  {product.colors.map((color, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveColorIdx(idx)}
                      className={`w-14 h-14 rounded-sm border-2 flex items-center justify-center transition-all overflow-hidden ${
                        activeColorIdx === idx ? 'border-[#111] p-0.5' : 'border-gray-200 hover:border-gray-400'
                      }`}
                    >
                      <img 
                        src={color.images[0]} 
                        alt={color.name}
                        className="w-full h-full object-cover rounded-sm mix-blend-multiply" 
                      />
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Lenses Selection */}
            {product.lenses && product.lenses.length > 0 && (
              <div className="mb-8">
                <h3 className="font-syncopate text-xs font-bold tracking-[0.2em] text-[#111] uppercase mb-3">LENSES: <span className="text-gray-500 font-space font-normal tracking-normal">{activeLens}</span></h3>
                <div className="flex flex-wrap gap-3">
                  {product.lenses.map((lens, idx) => (
                    <button 
                      key={idx}
                      onClick={() => setActiveLens(lens)}
                      className={`px-6 py-3 rounded-sm border flex items-center justify-center transition-all font-space text-sm ${
                        activeLens === lens ? 'border-[#111] text-[#111] font-medium shadow-sm' : 'border-gray-300 text-gray-600 hover:border-gray-400'
                      }`}
                    >
                      {lens}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="space-y-4 mb-10">
              <h3 className="font-syncopate text-sm font-bold tracking-[0.2em] text-[#111] uppercase">KEY FEATURES</h3>
              <ul className="space-y-3">
                {product.keyFeatures.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3 font-space text-sm text-gray-600">
                    <span className="text-[#111] mt-0.5 opacity-40">■</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            {/* Information Section - No Pricing or Add to Cart */}
            <div className="grid grid-cols-2 gap-4 border-t border-gray-300 pt-8">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gray-400" />
                <span className="font-space text-xs text-gray-500">Authorized<br/>Dealer</span>
              </div>
              <div className="flex items-center gap-3">
                <Truck className="w-5 h-5 text-gray-400" />
                <span className="font-space text-xs text-gray-500">Information<br/>Available</span>
              </div>
            </div>

          </motion.div>
        </div>

        {/* Rich Features Section */}
        {product.richFeatures && product.richFeatures.length > 0 && (
          <div className="mt-32 border-t border-gray-300 pt-24">
            <div className="text-center mb-24">
              <h2 className="font-syncopate text-3xl md:text-5xl font-bold text-[#111] uppercase tracking-tighter">
                Discover The <span className="text-gray-400">Details</span>
              </h2>
            </div>
            
            <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-20">
              {product.richFeatures.map((feat, idx) => (
                <div 
                  key={idx}
                  className="flex flex-col gap-4 border-t border-gray-200 pt-8 hover:border-[#111] transition-colors duration-500"
                >
                  <span className="font-space text-sm font-medium text-gray-400 mb-2">
                    {String(idx + 1).padStart(2, '0')}
                  </span>
                  <h3 className="font-syncopate text-xl md:text-2xl font-bold text-[#111] uppercase tracking-tight leading-tight">
                    {feat.title}
                  </h3>
                  <p className="font-space text-base text-gray-600 leading-relaxed">
                    {feat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Specs Section */}
        {product.specs && product.specs.length > 0 && (
          <div className="mt-32 max-w-4xl mx-auto border-t border-gray-300 pt-20">
            <div className="text-center mb-16">
              <h2 className="font-syncopate text-2xl md:text-4xl font-bold text-[#111] uppercase tracking-tighter">
                Technical <span className="text-gray-400">Specs</span>
              </h2>
            </div>

            <div className="space-y-4">
              {product.specs.map((specGroup, idx) => (
                <div key={idx} className="bg-white border border-gray-200 rounded-sm overflow-hidden shadow-sm">
                  <button 
                    onClick={() => setOpenSpecCategory(openSpecCategory === specGroup.category ? null : specGroup.category)}
                    className="w-full px-6 py-5 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                  >
                    <h3 className="font-syncopate text-sm font-bold text-[#111] tracking-widest uppercase">{specGroup.category}</h3>
                    <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${openSpecCategory === specGroup.category ? 'rotate-180' : ''}`} />
                  </button>
                  
                  <AnimatePresence>
                    {openSpecCategory === specGroup.category && (
                      <motion.div 
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 py-2">
                          {specGroup.items.map((item, i) => (
                            <div key={i} className="py-4 border-b border-gray-100 last:border-0 flex flex-col md:flex-row md:gap-8">
                              <div className="md:w-1/3 font-syncopate text-xs text-gray-500 uppercase tracking-wider mb-2 md:mb-0">
                                {item.label}
                              </div>
                              <div className="md:w-2/3 font-space text-sm text-[#111]">
                                {item.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        )}

      </div>
    </main>
    <Footer />
    </>
  );
}

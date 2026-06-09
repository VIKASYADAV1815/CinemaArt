"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { Search, SlidersHorizontal, ArrowUpRight } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { products } from "@/data/products";

// Comprehensive categories matched with the Home Page
const categories = [
  "All", 
  "Mirrorless Cameras", 
  "Compact Cameras", 
  "Action Cameras", 
  "360 Cameras", 
  "Gimbals & Gear", 
  "Binoculars & Optics", 
  "Lenses", 
  "Accessories"
];

// Comprehensive brands matched with the Home Page BrandShowcase
const brands = ["Sony", "Fujifilm", "Canon", "Nikon", "GoPro", "DJI", "Insta360", "Sigma", "Rode", "Ulanzi"];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedBrands, setSelectedBrands] = useState<string[]>([]);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const toggleBrand = (brand: string) => {
    setSelectedBrands(prev => 
      prev.includes(brand) ? prev.filter(b => b !== brand) : [...prev, brand]
    );
  };

  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === "All" || product.category === activeCategory;
    const matchesBrand = selectedBrands.length === 0 || selectedBrands.includes(product.brand);
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          product.brand.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesBrand && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-[#E6E6E6] pt-40 pb-24">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 border-b border-gray-300 pb-8"
        >
          <h1 className="font-syncopate text-4xl md:text-6xl font-bold text-[#111] uppercase tracking-tighter">
            Equipment <br/> <span className="text-gray-400">Infographic</span>
          </h1>
          <p className="font-space mt-4 text-gray-600 max-w-xl">
            Explore detailed specifications and information about our professional-grade cinema and photography equipment from industry-leading brands.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          
          {/* Mobile Filter Toggle */}
          <button 
            className="lg:hidden w-full flex items-center justify-center gap-2 bg-white border border-gray-300 py-3 font-syncopate text-xs tracking-widest text-[#111]"
            onClick={() => setIsMobileFilterOpen(!isMobileFilterOpen)}
          >
            <SlidersHorizontal className="w-4 h-4" /> 
            {isMobileFilterOpen ? "HIDE FILTERS" : "SHOW FILTERS"}
          </button>

          {/* Sidebar Filters */}
          <motion.aside 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className={`w-full lg:w-64 flex-shrink-0 ${isMobileFilterOpen ? 'block' : 'hidden lg:block'}`}
          >
            <div className="sticky top-32 space-y-10 bg-[#E6E6E6] lg:bg-transparent pb-6 lg:pb-0 z-10">
              
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input 
                  type="text" 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search gear..." 
                  className="w-full bg-white/50 border border-gray-300 rounded-none py-2.5 pl-10 pr-4 text-sm font-space focus:outline-none focus:border-[#111] transition-colors"
                />
              </div>

              {/* Categories */}
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <SlidersHorizontal className="w-4 h-4 text-[#111]" />
                  <h3 className="font-syncopate text-sm font-bold tracking-widest text-[#111]">CATEGORIES</h3>
                </div>
                <ul className="space-y-3 font-space text-sm text-gray-600">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button 
                        onClick={() => setActiveCategory(cat)}
                        className={`hover:text-[#111] transition-colors text-left ${activeCategory === cat ? 'text-[#111] font-bold' : ''}`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Brands */}
              <div>
                <h3 className="font-syncopate text-sm font-bold tracking-widest text-[#111] mb-4">BRANDS</h3>
                <ul className="space-y-3 font-space text-sm text-gray-600">
                  {brands.map((brand) => (
                    <li key={brand} className="flex items-center gap-2">
                      <input 
                        type="checkbox" 
                        id={brand} 
                        checked={selectedBrands.includes(brand)}
                        onChange={() => toggleBrand(brand)}
                        className="accent-[#111] w-4 h-4 rounded-none" 
                      />
                      <label htmlFor={brand} className="cursor-pointer hover:text-[#111] transition-colors">{brand}</label>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </motion.aside>

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {filteredProducts.length > 0 ? filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 * index }}
                  className="group relative bg-white rounded-sm border border-transparent hover:border-gray-200 hover:shadow-2xl transition-all duration-500 flex flex-col overflow-hidden"
                >
                  {/* Image Backdrop Container */}
                  <div className="relative h-[240px] w-full bg-[#F5F5F5] flex items-center justify-center p-8 overflow-hidden">
                    {/* Subtle Overlay */}
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
                    
                    {/* Top Badges */}
                    <div className="absolute top-4 left-4 flex flex-col gap-2 z-10">
                      <span className="bg-[#111] text-white text-[9px] font-syncopate px-2.5 py-1 uppercase tracking-[0.2em] font-bold">
                        {product.brand}
                      </span>
                      {product.status !== 'In Stock' && (
                        <span className={`hidden text-[9px] font-syncopate px-2.5 py-1 uppercase tracking-[0.2em] font-bold ${
                          product.status === 'Pre-order' ? 'bg-blue-600 text-white' : 'bg-orange-500 text-white'
                        }`}>
                          {product.status}
                        </span>
                      )}
                    </div>
                    
                    <img 
                      src={product.colors[0].images[0]} 
                      alt={product.name} 
                      className={`max-h-full max-w-full object-contain mix-blend-multiply group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-xl ${product.category === 'Action Cameras' || product.category === '360 Cameras' ? 'p-4' : ''}`}
                    />

                    {/* Hover Action Button */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 z-20 w-3/4">
                      <Link href={`/products/${product.category.toLowerCase().replace(/ & | /g, '-')}/${product.slug}`} className="block w-full text-center bg-[#111] text-white font-syncopate text-[10px] uppercase tracking-widest py-3 hover:bg-black transition-colors shadow-lg">
                        View Details
                      </Link>
                    </div>
                  </div>

                  {/* Content Area */}
                  <div className="pt-5 pb-5 px-5 flex flex-col flex-1 bg-white z-10 relative border-t border-gray-100">
                    <p className="text-[9px] text-gray-400 font-syncopate mb-1 uppercase tracking-[0.2em]">{product.category}</p>
                    <h3 className="font-space text-lg font-bold text-[#111] mb-1 line-clamp-1">{product.name}</h3>
                    <p className="text-xs text-gray-500 font-space mb-4 line-clamp-2 min-h-[32px]">{product.desc}</p>
                    
                    <div className="mt-auto flex items-end justify-between">
                      <Link href={`/products/${product.category.toLowerCase().replace(/ & | /g, '-')}/${product.slug}`} className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-[#111] group-hover:bg-[#111] group-hover:text-white transition-colors ml-auto">
                        <ArrowUpRight className="w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              )) : (
                <div className="col-span-full py-20 flex flex-col items-center justify-center text-gray-500">
                  <Search className="w-12 h-12 mb-4 opacity-20" />
                  <p className="font-space text-lg">No products found matching your filters.</p>
                  <button 
                    onClick={() => { setActiveCategory("All"); setSelectedBrands([]); setSearchQuery(""); }}
                    className="mt-4 text-[#111] font-syncopate text-xs tracking-widest border-b border-[#111] pb-1 hover:text-[#FF0000] hover:border-[#FF0000] transition-colors"
                  >
                    Clear Filters
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </main>
    <Footer />
    </>
  );
}

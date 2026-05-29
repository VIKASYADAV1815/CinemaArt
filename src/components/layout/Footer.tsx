"use client";

import { motion } from "framer-motion";
import { MapPin, Award } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative bg-[#0a0a0a] px-6 py-20 text-white md:px-12 md:py-32" id="about">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-16 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand */}
          <div className="lg:col-span-2">
            <h2 className="font-syncopate text-4xl md:text-7xl">CA.</h2>
            <p className="font-space mt-4 md:mt-6 max-w-sm text-gray-400 text-sm md:text-base">
              Elevating the art of photography through premium equipment, custom printing, and expert framing.
            </p>
          </div>

          {/* Location */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <MapPin className="h-5 w-5 text-gray-400" />
              <h3 className="font-syncopate text-sm font-bold tracking-widest">LOCATION</h3>
            </div>
            <address className="font-space not-italic text-gray-400">
              123 Creative District<br />
              Artisan Avenue<br />
              New Delhi, India 110001
            </address>
          </div>

          {/* Certification */}
          <div>
            <div className="mb-6 flex items-center gap-3">
              <Award className="h-5 w-5 text-gray-400" />
              <h3 className="font-syncopate text-sm font-bold tracking-widest">AUTHORIZED</h3>
            </div>
            <ul className="font-space space-y-2 text-gray-400">
              <li>Fujifilm Premium Partner</li>
              <li>Sony Pro Dealer</li>
              <li>Canon Master Reseller</li>
              <li>DJI Enterprise Auth</li>
            </ul>
          </div>

        </div>

        <div className="mt-32 flex flex-col items-center justify-between border-t border-white/10 pt-8 md:flex-row">
          <p className="font-space text-sm text-gray-500">© 2026 CinemaArt Studio. All rights reserved.</p>
          <div className="font-space mt-4 flex gap-6 text-sm text-gray-500 md:mt-0">
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Instagram</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">Twitter</a>
            <a href="#" className="hover:text-[#00E5FF] transition-colors">LinkedIn</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

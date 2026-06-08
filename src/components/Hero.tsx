/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Send, BarChart2 } from 'lucide-react';
import { translations } from '../translations';

interface HeroProps {
  onContactClick: () => void;
  onViewDataClick: () => void;
  language: 'en' | 'id';
}

export default function Hero({ onContactClick, onViewDataClick, language }: HeroProps) {
  const t = translations[language];

  return (
    <section id="profil-section" className="relative w-full pt-16 pb-20 px-4 md:px-10 overflow-hidden flex flex-col items-center justify-center min-h-[75vh] scroll-mt-20">
      
      {/* Absolute decorative elements resembling technical grid ticks */}
      <div className="absolute top-10 left-10 w-24 h-24 border-l border-t border-[#2A2A2A] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 border-r border-b border-[#2A2A2A] pointer-events-none"></div>

      {/* Floating neon style ticks */}
      <div className="hidden lg:block absolute top-[25%] left-[15%] w-2 h-2 rounded-full bg-[#E0FF00] animate-pulse"></div>
      <div className="hidden lg:block absolute bottom-[40%] right-[12%] w-3 h-3 bg-[#E0FF00] opacity-20 animate-pulse"></div>
      <div className="hidden lg:block absolute top-[50%] left-[80%] w-2 h-2 bg-[#E0FF00]/50"></div>

      {/* Hero card main interface */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="w-full max-w-4xl glass-panel p-5 sm:p-8 md:p-12 rounded-none border border-[#2A2A2A] relative"
        id="hero_card"
      >
        {/* Stark yellow corner coordinates */}
        <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-[#E0FF00]"></div>
        <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-[#E0FF00]"></div>
        <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-[#E0FF00]"></div>
        <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-[#E0FF00]"></div>
        
        {/* Dynamic scanline element inside the card */}
        <div className="scanline"></div>

        {/* System metadata tagging */}
        <div className="flex justify-between items-center mb-8 text-[10px] font-mono text-slate-500 tracking-wider">
          <span>{t.hero_station}</span>
          <span className="flex items-center space-x-1.5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E0FF00] animate-ping"></span>
            <span className="text-[#E0FF00] font-bold">{t.hero_status}</span>
          </span>
        </div>

        {/* Content alignment: Brutalist text structure left aligned with enormous weight */}
        <div className="text-left space-y-8">
          <div>
            <span className="text-xs font-mono text-[#E0FF00] tracking-[0.2em] uppercase font-bold block mb-3">
              {t.hero_sub}
            </span>
            <h1 className="text-[34px] min-[380px]:text-[42px] sm:text-[72px] md:text-[90px] leading-[0.95] sm:leading-[0.85] font-black tracking-tighter uppercase text-[#F0F4FF]">
              MUHAMMAD<br className="xs:hidden" /> ALI FAJRI<br/>
              <span className="text-[#E0FF00]">{t.hero_title_eng}</span>
            </h1>
            <p className="text-slate-400 font-mono text-xs uppercase tracking-[0.15em] mt-4">
              {t.hero_desc}
            </p>
          </div>

          <div className="h-[1px] bg-[#2A2A2A]"></div>

          {/* Interactive quotation background in clean monochrome line details */}
          <div className="relative max-w-3xl border-l-4 border-[#E0FF00] bg-[#E0FF00]/5 px-6 py-4">
            <p className="text-sm md:text-base leading-relaxed text-[#F0F0F0] font-sans font-light">
              {t.hero_quote}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 pt-4">
            
            {/* Control buttons with pure block styling */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <button
                onClick={onContactClick}
                className="px-8 py-4 bg-[#F0F0F0] text-black font-mono text-xs uppercase font-bold hover:bg-[#E0FF00] transition-colors duration-200 cursor-pointer rounded-none text-center"
                id="initiate-contact-btn"
              >
                {t.hero_btn_contact}
              </button>
              
              <button
                onClick={onViewDataClick}
                className="px-8 py-4 border border-[#2A2A2A] text-[#F0F0F0] font-mono text-xs uppercase font-bold hover:bg-[#2A2A2A] hover:text-[#E0FF00] transition-all duration-200 cursor-pointer rounded-none text-center"
                id="view-data-btn"
              >
                {t.hero_btn_inspect}
              </button>
            </div>

            {/* Current load telemetry matched to design spec */}
            <div className="flex flex-col items-start sm:items-end font-mono">
              <span className="text-[10px] uppercase text-slate-500 tracking-wider mb-1">{t.hero_load}</span>
              <span className="text-4xl text-[#F0F0F0] font-black tracking-tighter leading-none">42.8%</span>
            </div>

          </div>
        </div>
      </motion.div>
    </section>
  );
}

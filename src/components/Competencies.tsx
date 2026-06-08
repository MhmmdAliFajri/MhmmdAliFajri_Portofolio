/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Sliders, Cpu } from 'lucide-react';
import { CompetencyItem } from '../types';
import { translations } from '../translations';

interface CompetenciesProps {
  language: 'en' | 'id';
}

export default function Competencies({ language }: CompetenciesProps) {
  const t = translations[language];
  const list = t.competenciesData;
  const [activeIndex, setActiveIndex] = useState<number>(1); // Default to index 1 (Flutter)

  const activeCompetency = list[activeIndex] || list[0];

  // Calculate percentage of bar (GPA: 3.69 out of 4.0 is 92.25%)
  const gpaPercentage = (3.69 / 4.0) * 100;

  return (
    <section id="competencies-section" className="relative w-full max-w-7xl mx-auto py-16 px-4 md:px-10 scroll-mt-20">
      
      {/* Centered Heading */}
      <div className="flex flex-col items-center mb-12 text-center">
        <h2 className="font-mono text-center text-xs tracking-[0.3em] text-[#E0FF00] uppercase font-bold mb-3 flex items-center justify-center space-x-2">
          <Sliders className="w-4 h-4 text-[#E0FF00]" />
          <span>{t.comp_heading_main}</span>
        </h2>
        <div className="w-16 h-[2px] bg-[#E0FF00]/40"></div>
        <p className="text-slate-400 font-mono text-[10px] uppercase mt-2 tracking-widest">
          {t.comp_heading_sub}
        </p>
      </div>

      {/* Grid tags arrangement */}
      <div className="flex flex-wrap items-center justify-center gap-3 max-w-4xl mx-auto mb-10">
        {list.map((item: CompetencyItem, index: number) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            className={`tech-tag px-5 py-3 rounded-none border cursor-pointer font-mono text-xs uppercase tracking-wider relative overflow-hidden transition-all duration-300 ${
              activeIndex === index
                ? 'bg-[#E0FF00]/10 text-[#E0FF00] border-[#E0FF00]'
                : 'bg-[#151515]/50 text-slate-400 border-[#2A2A2A] hover:border-[#E0FF00] hover:text-[#E0FF00]'
            }`}
            id={`comp-tag-${index}`}
          >
            {/* Visual signal dot */}
            <span className={`inline-block w-1.5 h-1.5 rounded-full mr-2 ${
              activeIndex === index 
                ? 'bg-[#E0FF00] animate-pulse' 
                : 'bg-slate-600'
            }`}></span>
            <span>{item.name}</span>
          </button>
        ))}
      </div>

      {/* Subsystem Detail panel inspector */}
      {activeCompetency && (
        <motion.div
          key={activeIndex}
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto glass-panel p-6 rounded-none border border-[#2A2A2A] mb-14 relative"
          id="competency_inspector"
        >
          {/* Subtle decoration corners */}
          <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#E0FF00]"></div>
          <div className="absolute top-0 right-0 w-2 h-2 border-t border-r border-[#E0FF00]"></div>
          
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-left">
            <div>
              <span className="font-mono text-[9px] text-[#E0FF00] tracking-widest uppercase block mb-1">
                {t.comp_inspector_lbl}
              </span>
              <h3 className="text-[#F0F0F0] text-base md:text-md font-bold tracking-wide uppercase">
                {activeCompetency.name}
              </h3>
            </div>
            
            {/* Percentage rating block */}
            <div className="flex items-center space-x-3 bg-[#151515] border border-[#2A2A2A] px-4 py-2 rounded-none self-start sm:self-center">
              <Cpu className="w-4 h-4 text-[#E0FF00]" />
              <div className="font-mono">
                <span className="text-[10px] text-slate-500 block">{t.comp_density}</span>
                <span className="text-[#E0FF00] font-black text-sm tracking-widest">{activeCompetency.level}%</span>
              </div>
            </div>
          </div>

          <p className="text-slate-400 text-sm leading-relaxed mt-4 font-sans font-light text-left">
            {activeCompetency.info}
          </p>
        </motion.div>
      )}

      {/* Edu tracker & GPA Bar representing SYS.LOAD */}
      <div className="max-w-3xl mx-auto glass-panel p-6 md:p-8 rounded-none border border-[#2A2A2A] relative" id="edu-tracker">
        <div className="flex flex-col space-y-4 text-left">
          
          {/* Bar Title details */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <span className="font-mono text-[11px] text-[#F0F0F0] tracking-widest font-bold uppercase">
              {t.comp_edu_sys}
            </span>
            <div className="font-mono text-xs text-[#E0FF00] tracking-wider flex items-center space-x-1">
              <span>GPA:</span>
              <span className="font-black text-sm text-[#E0FF00]">3.69 / 4.00</span>
            </div>
          </div>

          {/* Progress bar with segment glow and flowing layout */}
          <div className="w-full h-4 bg-[#0F0F0F] rounded-none p-0.5 border border-[#2A2A2A] relative overflow-hidden">
            {/* Pulsing overlay pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0)_1px,#0F0F0F_1px)] bg-[length:100%_2px] opacity-25 pointer-events-none z-10"></div>
            
            <motion.div
              initial={{ width: 0 }}
              whileInView={{ width: `${gpaPercentage}%` }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="h-full bg-[#E0FF00] rounded-none relative flex items-center justify-end"
            >
              <div className="w-1.5 h-full bg-white opacity-40"></div>
            </motion.div>
          </div>

          {/* University text info underneath */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1 text-[11px] font-mono text-slate-500 uppercase">
            <span>{t.comp_edu_desc}</span>
            <span className="text-[#E0FF00] font-bold">(2021-2026)</span>
          </div>

        </div>
      </div>
    </section>
  );
}

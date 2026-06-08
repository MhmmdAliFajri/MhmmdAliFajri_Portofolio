/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { TrendingUp, Briefcase } from 'lucide-react';
import { WorkExperienceItem } from '../types';
import { translations } from '../translations';

interface ExperienceProps {
  language: 'en' | 'id';
}

export default function Experience({ language }: ExperienceProps) {
  const t = translations[language];
  const list = t.workExperienceData;

  return (
    <section id="experience-section" className="relative w-full max-w-7xl mx-auto py-16 px-4 md:px-10 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-3 border-b border-[#2A2A2A] pb-4">
        <TrendingUp className="w-5 h-5 text-[#E0FF00]" />
        <h2 className="font-mono text-xs tracking-[0.25em] text-[#E0FF00] uppercase font-bold">
          {t.exp_heading_main}
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2A2A2A] to-transparent"></div>
        <div className="font-mono text-[9px] text-slate-500">{t.exp_nodes}</div>
      </div>

      <div className="text-left mb-10 font-mono text-[9px] tracking-wider text-slate-500 uppercase">
        {t.exp_heading_sub}
      </div>

      <div className="relative pl-6 md:pl-12">
        {/* Vertical circuit line representing timeline */}
        <div className="absolute left-[15px] md:left-[23px] top-0 bottom-0 w-[2px] bg-gradient-to-b from-[#E0FF00]/30 to-[#2A2A2A]/20"></div>

        <div className="space-y-12">
          {list.map((exp: WorkExperienceItem, idx: number) => (
            <motion.div 
              key={exp.id}
              initial={{ opacity: 0, x: -25 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              className="relative group"
            >
              
              {/* Outer floating node ring representing electrical terminal */}
              <div className="absolute -left-[16px] md:-left-[32px] top-3.5 flex items-center justify-center">
                <div className="w-4 h-4 rounded-full bg-[#0F0F0F] border-2 border-[#E0FF00] group-hover:scale-110 transition-transform duration-300 relative">
                  {/* Central glowing signal element */}
                  <div className="absolute inset-1.5 rounded-full bg-[#E0FF00] animate-pulse"></div>
                </div>
              </div>

              {/* Glassmorphic job card */}
              <div className="glass-panel p-6 md:p-8 rounded-none border border-[#2A2A2A] hover:border-[#E0FF00]/50 transition-all duration-300 relative overflow-hidden">
                
                {/* Visual scanline on card hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#E0FF00]/2 to-transparent -translate-x-full group-hover:animate-shimmer pointer-events-none"></div>

                {/* Card Title & Meta details */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-4">
                  <div>
                    <h3 className="text-[#F0F0F0] text-base md:text-lg font-bold tracking-wide group-hover:text-[#E0FF00] transition-colors uppercase">
                      {exp.company}
                    </h3>
                    <p className="text-[#E0FF00] font-mono text-xs uppercase font-medium tracking-widest mt-1 flex items-center space-x-1.5">
                      <Briefcase className="w-3 h-3 text-[#E0FF00]" />
                      <span>{exp.role}</span>
                    </p>
                  </div>

                  {/* Monospaced date stamp resembling compiler parameters */}
                  <div className="md:text-right">
                    <span className="inline-block font-mono text-[10px] md:text-xs text-[#E0FF00] bg-[#151515] border border-[#2A2A2A] hover:border-[#E0FF00]/60 px-3 py-1 rounded-none tracking-wide uppercase">
                      {exp.duration}
                    </span>
                  </div>
                </div>

                {/* Detailed descriptions */}
                <ul className="text-slate-300 text-sm space-y-2.5 font-sans leading-relaxed list-none pl-0">
                  {exp.description.map((bullet: string, bIdx: number) => (
                    <li key={bIdx} className="flex items-start">
                      {/* Technical checklist icon indicator */}
                      <span className="text-[#E0FF00] font-mono text-xs mr-3 mt-1.5 select-none text-[11px]">
                        {exp.company.includes('PLN') ? '⚡' : '▪'}
                      </span>
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

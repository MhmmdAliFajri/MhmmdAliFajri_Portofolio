/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Cpu, ArrowUpRight } from 'lucide-react';
import { ActiveProjectItem } from '../types';
import { translations } from '../translations';

interface ProjectsProps {
  onProjectClick: (project: ActiveProjectItem) => void;
  language: 'en' | 'id';
}

export default function Projects({ onProjectClick, language }: ProjectsProps) {
  const t = translations[language];
  const list = t.activeProjectsData;

  return (
    <section id="projects-section" className="relative w-full max-w-7xl mx-auto py-16 px-4 md:px-10 scroll-mt-20">
      
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-3 border-b border-[#2A2A2A] pb-4">
        <Cpu className="w-5 h-5 text-[#E0FF00]" />
        <h2 className="font-mono text-xs tracking-[0.25em] text-[#E0FF00] uppercase font-bold">
          {t.proj_heading_main}
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2A2A2A] to-transparent"></div>
        <div className="font-mono text-[9px] text-slate-500">{t.proj_nodes}</div>
      </div>

      <div className="text-left mb-10 font-mono text-[9px] tracking-wider text-slate-500 uppercase">
        {t.proj_heading_sub}
      </div>

      {/* Grid structure */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {list.map((project: ActiveProjectItem, idx: number) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group flex flex-col h-full bg-[#151515]/30 rounded-none border border-[#2A2A2A] hover:border-[#E0FF00]/50 overflow-hidden transition-all duration-300 cursor-pointer text-left"
            onClick={() => onProjectClick(project)}
            id={`project-card-${project.id}`}
          >
            {/* Project Image Container */}
            <div className="relative aspect-video w-full bg-[#0F0F0F] overflow-hidden border-b border-[#2A2A2A]">
              {/* Scanline pattern mask overlay over the image */}
              <div className="absolute inset-0 bg-[linear-gradient(rgba(15,15,15,0)_1.5px,#151515_1.5px)] bg-[length:100%_3px] opacity-15 pointer-events-none z-10"></div>
              
              <img
                src={project.imageUrl}
                alt={project.title}
                className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />

              {/* Glowing label overlay badge */}
              <div className="absolute top-3 right-3 z-20">
                <span className="font-mono text-[9px] text-black bg-[#E0FF00] font-black px-2.5 py-1 rounded-none tracking-widest uppercase">
                  {project.techBadge}
                </span>
              </div>
            </div>

            {/* Content Space */}
            <div className="p-6 flex flex-col flex-1 justify-between space-y-4">
              <div>
                <h3 className="text-[#F0F0F0] text-base md:text-md font-bold tracking-wide group-hover:text-[#E0FF00] transition-colors flex items-center justify-between uppercase">
                  <span>{project.title}</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-500 group-hover:text-[#E0FF00] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </h3>
                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light mt-2 line-clamp-3">
                  {project.subtitle}
                </p>
              </div>

              {/* Lower dynamic buttons matching the layout */}
              <div className="pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    onProjectClick(project);
                  }}
                  className="w-full text-center font-mono text-[10px] tracking-widest text-[#E0FF00] bg-transparent border border-[#2A2A2A] hover:bg-[#E0FF00] hover:text-black hover:border-[#E0FF00] py-3 rounded-none uppercase font-bold transition-all duration-200 cursor-pointer"
                  id={`project-btn-${project.id}`}
                >
                  {project.links.label}
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

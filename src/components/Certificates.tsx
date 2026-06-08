/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { ShieldCheck, Calendar, Award } from 'lucide-react';
import { CertificateItem } from '../types';
import { translations } from '../translations';

interface CertificatesProps {
  onCertificateClick: (cert: CertificateItem) => void;
  language: 'en' | 'id';
}

export default function Certificates({ onCertificateClick, language }: CertificatesProps) {
  const t = translations[language];
  const list = t.certificatesData;

  // Separate list into media-based certs and standard list courses
  const mediaCerts = list.filter(c => c.type !== 'COURSES');
  const courseCerts = list.find(c => c.type === 'COURSES');

  return (
    <section className="relative w-full max-w-7xl mx-auto py-16 px-4 md:px-10 scroll-mt-20" id="certificates-section">
      
      {/* Section Header */}
      <div className="flex items-center space-x-4 mb-3 border-b border-[#2A2A2A] pb-4">
        <ShieldCheck className="w-5 h-5 text-[#E0FF00]" />
        <h2 className="font-mono text-xs tracking-[0.25em] text-[#E0FF00] uppercase font-bold">
          {t.cert_heading_main}
        </h2>
        <div className="flex-1 h-[1px] bg-gradient-to-r from-[#2A2A2A] to-transparent"></div>
        <div className="font-mono text-[9px] text-slate-500">{t.cert_nodes}</div>
      </div>

      <div className="text-left mb-10 font-mono text-[9px] tracking-wider text-slate-500 uppercase">
        {t.cert_heading_sub}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Render individual certificate image cards for PLN and SMK */}
        {mediaCerts.map((cert: CertificateItem, idx: number) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="group glass-panel rounded-none border border-[#2A2A2A] hover:border-[#E0FF00]/50 overflow-hidden flex flex-col justify-between h-full transition-all duration-300 cursor-pointer text-left"
            onClick={() => onCertificateClick(cert)}
            id={`cert-card-${cert.id}`}
          >
            <div>
              {/* Render simulated Certificate Image */}
              <div className="relative aspect-[4/3] bg-[#0F0F0F] overflow-hidden border-b border-[#2A2A2A]">
                <img
                  src={cert.imageUrl}
                  alt={cert.title}
                  className="w-full h-full object-contain group-hover:scale-102 transition-transform duration-300"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual badge info */}
                <div className="absolute top-3 right-3">
                  <span className="font-mono text-[9px] text-black bg-[#E0FF00] font-black px-2.5 py-1 rounded-none tracking-widest uppercase">
                    {cert.type}
                  </span>
                </div>
              </div>

              {/* Certificate Metadata and Description */}
              <div className="p-6 space-y-3">
                <div className="flex justify-between items-start gap-2">
                  <h3 className="text-[#F0F0F0] text-sm md:text-md font-bold tracking-wide group-hover:text-[#E0FF00] transition-colors uppercase">
                    {cert.title}
                  </h3>
                  {cert.score && (
                    <span className="font-mono text-xs text-[#E0FF00] bg-[#151515] border border-[#2A2A2A] px-2 py-0.5 rounded-none whitespace-nowrap">
                      {t.cert_score}{cert.score}
                    </span>
                  )}
                </div>

                <div className="flex items-center space-x-2 text-slate-400 font-mono text-[11px]">
                  <Calendar className="w-3.5 h-3.5 text-[#E0FF00]" />
                  <span>{cert.issuer} ({cert.duration})</span>
                </div>

                <p className="text-slate-400 text-xs leading-relaxed font-sans font-light mt-1.5 pl-2 border-l border-[#2A2A2A]">
                  {cert.description}
                </p>
              </div>
            </div>

            {/* Click to expand hover marker */}
            <div className="px-6 pb-6 pt-2">
              <span className="font-mono text-[9px] tracking-wider text-slate-500 group-hover:text-[#E0FF00] transition-colors">
                {t.cert_view}
              </span>
            </div>
          </motion.div>
        ))}

        {/* Render Courses list panel */}
        {courseCerts && (
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="glass-panel p-6 rounded-none border border-[#2A2A2A] hover:border-[#E0FF00]/30 transition-all duration-300 flex flex-col justify-between h-full text-left"
            id="cert-card-courses"
          >
            <div className="space-y-6">
              {/* Panel Header */}
              <div className="flex justify-between items-center pb-3 border-b border-[#2A2A2A]">
                <div className="flex items-center space-x-2">
                  <Award className="w-4 h-4 text-[#E0FF00]" />
                  <span className="font-mono text-xs font-bold tracking-widest text-[#E0FF00] uppercase">
                    {courseCerts.title}
                  </span>
                </div>
                <span className="font-mono text-[9px] text-black bg-[#E0FF00] font-black px-2 py-1 rounded-none tracking-wider uppercase">
                  {courseCerts.type}
                </span>
              </div>

              {/* Course rows details */}
              <div className="space-y-4">
                <div className="group-course border-b border-[#2A2A2A] pb-3 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-[#F0F0F0] hover:text-[#E0FF00] transition-colors leading-snug">
                    {language === 'en' 
                      ? 'UNJ Journal Academic Article Management Training' 
                      : 'Pelatihan Pengelolaan Artikel Ilmiah Jurnal UNJ'}
                  </h4>
                  <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 mt-1">
                    <span>Universitas Negeri Jakarta</span>
                    <span className="text-[#E0FF00]">Jul 2025</span>
                  </div>
                </div>

                <div className="group-course border-b border-[#2A2A2A] pb-3 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-[#F0F0F0] hover:text-[#E0FF00] transition-colors leading-snug">
                    {language === 'en' 
                      ? 'Flutter Mobile Apps (Advanced)' 
                      : 'Flutter Aplikasi Seluler (Lanjut)'}
                  </h4>
                  <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 mt-1">
                    <span>Expert Development Academy</span>
                    <span className="text-[#E0FF00]">Jan - Mar 2026</span>
                  </div>
                </div>

                <div className="group-course pb-3 last:border-0 last:pb-0">
                  <h4 className="text-sm font-semibold text-[#F0F0F0] hover:text-[#E0FF00] transition-colors leading-snug">
                    {language === 'en' 
                      ? 'Flutter Mobile Apps (Basic)' 
                      : 'Flutter Aplikasi Seluler (Dasar)'}
                  </h4>
                  <div className="flex justify-between items-center font-mono text-[10px] text-slate-500 mt-1">
                    <span>Developer Training Hub</span>
                    <span className="text-[#E0FF00]">Feb - Mar 2026</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Verification marker */}
            <div className="pt-6 border-t border-[#2A2A2A]/40">
              <span className="font-mono text-[9px] text-slate-500 tracking-wider">
                VERIFIED BY_UNJ // SECURE_HASH
              </span>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}

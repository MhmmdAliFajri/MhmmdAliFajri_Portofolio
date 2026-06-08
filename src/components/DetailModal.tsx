/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Play, Lightbulb, CheckCircle } from 'lucide-react';
import { ActiveProjectItem, CertificateItem } from '../types';
import { translations } from '../translations';

interface DetailModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: ActiveProjectItem | null;
  certificate: CertificateItem | null;
  language: 'en' | 'id';
}

export default function DetailModal({ isOpen, onClose, project, certificate, language }: DetailModalProps) {
  const t = translations[language];

  // Logic Gate Simulator States
  const [inputA, setInputA] = useState<boolean>(true);
  const [inputB, setInputB] = useState<boolean>(false);
  const [activeGate, setActiveGate] = useState<'AND' | 'OR' | 'NAND' | 'NOR' | 'XOR' | 'NOT'>('AND');
  const [simulationOutput, setSimulationOutput] = useState<boolean>(false);

  // Close modal when pressing Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  // Handle live logic calculations
  useEffect(() => {
    let result = false;
    switch (activeGate) {
      case 'AND':
        result = inputA && inputB;
        break;
      case 'OR':
        result = inputA || inputB;
        break;
      case 'NAND':
        result = !(inputA && inputB);
        break;
      case 'NOR':
        result = !(inputA || inputB);
        break;
      case 'XOR':
        result = inputA !== inputB;
        break;
      case 'NOT':
        result = !inputA;
        break;
    }
    setSimulationOutput(result);
  }, [inputA, inputB, activeGate]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
        
        {/* Backdrop glass overlay */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="absolute inset-0 bg-[#0F0F0F]/95 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Main container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 15 }}
          transition={{ type: 'spring', duration: 0.5 }}
          className="relative w-full max-w-3xl max-h-[95vh] sm:max-h-[90vh] overflow-y-auto bg-[#0F0F0F] border border-[#2A2A2A] p-4 sm:p-6 md:p-8 rounded-none flex flex-col justify-between"
          id="detail_modal_container"
        >
          
          {/* Header Close absolute */}
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-none border border-[#2A2A2A] text-slate-400 hover:text-[#E0FF00] hover:bg-[#151515] transition-all cursor-pointer"
            id="modal-close-btn"
          >
            <X className="w-4 h-4" />
          </button>

          {/* Modal Header */}
          <div className="border-b border-[#2A2A2A] pb-4 mb-6 text-left">
            <span className="font-mono text-[9px] text-[#E0FF00] tracking-widest block uppercase mb-1 font-bold">
              {project ? t.modal_proj_node : t.modal_cert_report}
            </span>
            <h2 className="text-[#F0F0F0] text-lg md:text-xl font-bold tracking-wide uppercase">
              {project ? project.title : certificate?.title}
            </h2>
          </div>

          {/* Modal Body Content */}
          <div className="flex-1 space-y-6">

            {/* CASE 1: Render project logic */}
            {project && (
              <div className="space-y-6">
                
                {/* Standard Image Preview */}
                <div className="relative aspect-video w-full rounded-none border border-[#2A2A2A] bg-[#0F0F0F] overflow-hidden">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title}
                    className="w-full h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Long Description and Features list */}
                <div className="space-y-4 text-left">
                  <p className="text-slate-300 text-sm leading-relaxed font-sans font-light">
                    {project.longDescription}
                  </p>

                  <div className="space-y-3">
                    <span className="font-mono text-[10px] text-slate-500 tracking-widest uppercase block font-bold">
                      {t.modal_features}
                    </span>
                    <ul className="space-y-2 list-none pl-0">
                      {project.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start text-xs text-slate-300">
                           <span className="text-[#E0FF00] mr-3 mt-0.5 text-[11px]">▪</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

              </div>
            )}

            {/* CASE 2: Render certificate details zoom */}
            {certificate && (
              <div className="space-y-6">
                
                {/* Certificate Picture Zoom */}
                {certificate.imageUrl ? (
                  <div className="relative aspect-[4/3] w-full max-w-lg mx-auto rounded-none border border-[#2A2A2A] bg-[#0F0F0F] overflow-hidden">
                    <img 
                      src={certificate.imageUrl} 
                      alt={certificate.title}
                      className="w-full h-full object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                ) : (
                  <div className="p-10 border border-[#2A2A2A] bg-[#151515] text-center text-slate-500 font-mono text-xs rounded-none">
                    [ ELECTRONIC REGISTRATION RECORD ON FILE ]
                  </div>
                )}

                {/* Details list */}
                <div className="glass-panel p-5 rounded-none border border-[#2A2A2A] space-y-4 text-left">
                  
                  {/* Title detail tags */}
                  <div className="grid grid-cols-2 gap-4 font-mono text-xs">
                    <div>
                      <span className="text-slate-500 block uppercase text-[9px] mb-0.5">{t.modal_issuer}</span>
                      <span className="text-[#F0F0F0] font-bold">{certificate.issuer}</span>
                    </div>
                    <div>
                      <span className="text-slate-500 block uppercase text-[9px] mb-0.5">{t.modal_period}</span>
                      <span className="text-[#E0FF00] font-bold">{certificate.duration}</span>
                    </div>
                  </div>

                  <hr className="border-[#2A2A2A]" />

                  {/* Verification text */}
                  <div>
                    <span className="font-mono text-slate-500 block uppercase text-[9px] mb-2 font-bold font-mono">{t.modal_validation}</span>
                    <p className="text-slate-300 text-sm leading-relaxed pl-3 border-l-2 border-[#E0FF00]">
                      {certificate.description}
                    </p>
                  </div>

                  <div className="pt-2 flex justify-between items-center bg-[#0F0F0F] p-3 rounded-none font-mono text-[9.5px] border border-[#2A2A2A]">
                    <span className="text-[#E0FF00] flex items-center space-x-1 font-bold">
                      <CheckCircle className="w-3.5 h-3.5" />
                      <span>SIGNATURE VERIFIED SECURE // ID_OK</span>
                    </span>
                    <span className="text-slate-600">STAMP_2024_0392X</span>
                  </div>

                </div>

              </div>
            )}

          </div>

          {/* Modal Footer actions */}
          <div className="border-t border-[#2A2A2A] pt-4 mt-6 flex justify-end space-x-3 font-mono text-xs">
            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-none border border-[#2A2A2A] text-slate-400 hover:border-slate-500 hover:text-white transition-all cursor-pointer bg-transparent hover:bg-[#151515]"
              id="modal-close-foot-btn"
            >
              {t.modal_close}
            </button>
            
            {project && project.links?.url && (
              <a
                href={project.links.url}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-none bg-[#E0FF00] text-black font-black flex items-center space-x-1.5 hover:bg-[#F0F0F0] transition-colors cursor-pointer border border-transparent"
                id="modal-action-btn"
              >
                <span>
                  {project.id === 'proj-1' ? t.modal_action_proj1 :
                   project.id === 'proj-2' ? t.modal_action_proj2 :
                   t.modal_action_proj3}
                </span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            )}
          </div>

        </motion.div>
      </div>
    </AnimatePresence>
  );
}

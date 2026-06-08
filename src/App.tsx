/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Competencies from './components/Competencies';
import ContactForm from './components/ContactForm';
import DetailModal from './components/DetailModal';
import { ActiveProjectItem, CertificateItem } from './types';
import { Cpu, Server, Activity, ShieldAlert } from 'lucide-react';
import { translations } from './translations';

export default function App() {
  const [selectedProject, setSelectedProject] = useState<ActiveProjectItem | null>(null);
  const [selectedCertificate, setSelectedCertificate] = useState<CertificateItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Synchronized language choice
  const [language, setLanguage] = useState<'en' | 'id'>(() => {
    return (localStorage.getItem('cyber_portfolio_lang') as 'en' | 'id') || 'en';
  });

  useEffect(() => {
    localStorage.setItem('cyber_portfolio_lang', language);
  }, [language]);
  
  // Stored cyberpunk theme spectrum
  const [activeTheme, setActiveTheme] = useState(() => {
    return localStorage.getItem('cyber_portfolio_theme') || 'theme-cyber-blue';
  });

  // Stored Night Vision ultra black mode toggle state
  const [isNightVision, setIsNightVision] = useState(() => {
    return localStorage.getItem('cyber_portfolio_nightvision') === 'true';
  });

  useEffect(() => {
    localStorage.setItem('cyber_portfolio_theme', activeTheme);
  }, [activeTheme]);

  useEffect(() => {
    localStorage.setItem('cyber_portfolio_nightvision', String(isNightVision));
  }, [isNightVision]);

  // Custom toast notification states for portfolio events
  const [showNotification, setShowNotification] = useState(true);

  useEffect(() => {
    // Dismiss notification after 8 seconds
    const timer = setTimeout(() => setShowNotification(false), 8000);
    return () => clearTimeout(timer);
  }, []);

  const handleOpenProject = (project: ActiveProjectItem) => {
    setSelectedProject(project);
    setSelectedCertificate(null);
    setIsModalOpen(true);
  };

  const handleOpenCertificate = (cert: CertificateItem) => {
    setSelectedCertificate(cert);
    setSelectedProject(null);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
    setSelectedCertificate(null);
  };

  const handleConnectClick = () => {
    // Dispatch custom event to focus name input in contact form
    const focusEvent = new CustomEvent('focus-contact-form');
    window.dispatchEvent(focusEvent);
  };

  const handleViewDataClick = () => {
    const systemsPanel = document.getElementById('competencies-section');
    if (systemsPanel) {
      systemsPanel.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const t = translations[language];

  return (
    <div className={`relative min-h-screen text-[#F0F0F0] ${activeTheme} ${isNightVision ? 'night-vision-activated' : ''}`} id="app_root">
      
      {/* Decorative background grid and nodes mapping layer */}
      <div className="cyber-bg pointer-events-none"></div>
      <div className="cyber-nodes-gradient pointer-events-none"></div>
      <div className="circuit-line top-48 left-0 pointer-events-none"></div>
      <div className="circuit-line top-[65%] right-0 pointer-events-none" style={{ animationDelay: '4s' }}></div>

      {/* Primary Navigation System */}
      <Header 
        onConnectClick={handleConnectClick} 
        onViewDataClick={handleViewDataClick} 
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        isNightVision={isNightVision}
        setIsNightVision={setIsNightVision}
        language={language}
        setLanguage={setLanguage}
      />

      {/* Main system layout */}
      <main className="relative z-10 space-y-4">
        
        {/* Floating tech diagnostic overlay banner */}
        {showNotification && (
          <div 
            className="fixed bottom-6 right-6 z-40 max-w-sm bg-[#0F0F0F] p-4 rounded-none border border-[#E0FF00] shadow-2xl flex items-start space-x-3 text-xs animate-slide-up"
            id="diag-notification"
          >
            <div className="p-2 rounded-none bg-[#E0FF00]/10 text-[#E0FF00] border border-[#2A2A2A]">
              <Server className="w-4 h-4" />
            </div>
            <div className="flex-1 space-y-1 text-left">
              <div className="flex items-center justify-between font-mono text-[9px] text-[#E0FF00] font-bold">
                <span>{t.diag_title}</span>
                <span className="font-bold text-[#E0FF00]">{t.diag_status}</span>
              </div>
              <p className="font-sans font-light text-slate-300">
                {t.diag_msg}
              </p>
              <button 
                onClick={() => setShowNotification(false)}
                className="font-mono text-[9px] uppercase text-[#E0FF00]/75 hover:text-white cursor-pointer mt-1 block"
              >
                {t.diag_dismiss}
              </button>
            </div>
          </div>
        )}

        {/* Hero Segment */}
        <Hero 
          onContactClick={handleConnectClick} 
          onViewDataClick={handleViewDataClick} 
          language={language}
        />

        {/* Experience Segment */}
        <Experience language={language} />

        {/* Projects Nodes */}
        <Projects onProjectClick={handleOpenProject} language={language} />

        {/* Awards and Certification Proofs */}
        <Certificates onCertificateClick={handleOpenCertificate} language={language} />

        {/* Competencies Subsystem (Fitts index bars / GPAs) */}
        <Competencies language={language} />

        {/* Contact form system */}
        <FormSectionWithHeader language={language} />

      </main>

      {/* Footer System Details */}
      <footer className="relative z-10 border-t border-[#2A2A2A] py-10 px-4 md:px-10 bg-[#0F0F0F] mt-24">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left font-mono text-[10px] text-slate-500 tracking-wider">
          
          <div className="space-y-1" id="footer-brand">
            <span className="text-[#F0F0F0] font-bold tracking-widest block">
              M.A.F // ARCHITECTURE
            </span>
            <span className="block text-[9px]">
              © 2026 SYSTEM_OPERATOR // ALL RIGHTS RESERVED
            </span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 text-[9px]" id="footer-stats">
            <div className="flex items-center space-x-1 px-2.5 py-1 rounded-none bg-[#151515] border border-[#2A2A2A]">
              <Activity className="w-3.5 h-3.5 text-[#E0FF00] animate-pulse" />
              <span>DOCUMENTATION STATUS: <strong className="text-[#E0FF00]">OPTIMAL</strong></span>
            </div>
            
            <div className="flex items-center space-x-1 px-2.5 py-1 rounded-none bg-[#151515] border border-[#2A2A2A]">
              <Cpu className="w-3.5 h-3.5 text-[#E0FF00]" />
              <span>SECURITY_PROTOCOL: <strong className="text-[#E0FF00]">SEC_LEVEL_3</strong></span>
            </div>
          </div>

        </div>
      </footer>

      {/* Global Interactive Modal system */}
      <DetailModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        project={selectedProject}
        certificate={selectedCertificate}
        language={language}
      />

    </div>
  );
}

// Inline wrapper to bundle Form header layout seamlessly 
interface FormSectionWithHeaderProps {
  language: 'en' | 'id';
}
function FormSectionWithHeader({ language }: FormSectionWithHeaderProps) {
  return (
    <div className="relative">
      {/* Decorative center line */}
      <div className="w-[1px] h-24 bg-gradient-to-b from-transparent via-cyan-500/15 to-transparent mx-auto pointer-events-none"></div>
      <ContactForm language={language} />
    </div>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Settings, Radio, Menu, X, Sliders, Volume2, 
  Zap, Tv, Activity, Cpu, Terminal, Play, Square, Loader2, Moon
} from 'lucide-react';

import { translations } from '../translations';

interface HeaderProps {
  onConnectClick: () => void;
  onViewDataClick: () => void;
  activeTheme: string;
  setActiveTheme: (theme: string) => void;
  isNightVision: boolean;
  setIsNightVision: (nv: boolean) => void;
  language: 'en' | 'id';
  setLanguage: (lang: 'en' | 'id') => void;
}

export default function Header({ 
  onConnectClick, 
  onViewDataClick, 
  activeTheme, 
  setActiveTheme, 
  isNightVision, 
  setIsNightVision,
  language,
  setLanguage
}: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isControlsOpen, setIsControlsOpen] = useState(false);
  
  // Custom interactive settings states
  const [isOverclocked, setIsOverclocked] = useState(false);
  const [isScanlinesActive, setIsScanlinesActive] = useState(true);
  const [activeSignalTone, setActiveSignalTone] = useState<string | null>(null);

  // Synchronize overclock state onto global page elements if needed
  useEffect(() => {
    // When overclock is active, speed up scanline animations in index.css
    const scanlineElements = document.querySelectorAll('.scanline');
    scanlineElements.forEach((el) => {
      if (isOverclocked) {
        (el as HTMLElement).style.animationDuration = '3s';
      } else {
        (el as HTMLElement).style.animationDuration = '10s';
      }
    });

    // Update global app load readout text dynamically if elements exist
    const loadValueEl = document.querySelector('#hero_card span.text-4xl');
    if (loadValueEl) {
      if (isOverclocked) {
        loadValueEl.textContent = '99.9% MAX';
        loadValueEl.classList.add('text-[#E0FF00]', 'animate-pulse');
      } else {
        loadValueEl.textContent = '42.8%';
        loadValueEl.classList.remove('text-[#E0FF00]', 'animate-pulse');
      }
    }
  }, [isOverclocked]);

  // Synthesis engine utilizing standard client page Web Audio API
  const playSynthBeep = (freq: number, type: 'sine' | 'square' | 'sawtooth' | 'triangle' = 'sine', duration: number = 0.15) => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      // Gentle progressive envelope to avoid clipping pops
      gainNode.gain.setValueAtTime(0.001, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.08, ctx.currentTime + 0.03); // conservative volume
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (err) {
      console.warn("Audio Context blocked or unsupported:", err);
    }
  };

  const playSweepSynth = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      const osc = ctx.createOscillator();
      const gainNode = ctx.createGain();
      
      osc.type = 'sine';
      osc.frequency.setValueAtTime(140, ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(1860, ctx.currentTime + 0.55);
      
      gainNode.gain.setValueAtTime(0.08, ctx.currentTime);
      gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 0.55);
      
      osc.connect(gainNode);
      gainNode.connect(ctx.destination);
      
      osc.start();
      osc.stop(ctx.currentTime + 0.55);
    } catch (err) {}
  };

  const playTrisecAlertTone = () => {
    try {
      const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
      if (!AudioContextClass) return;
      const ctx = new AudioContextClass();
      
      // Schedule 3 sequential bleeps
      [0, 0.1, 0.2].forEach((delay, idx) => {
        const osc = ctx.createOscillator();
        const gainNode = ctx.createGain();
        
        osc.type = 'square';
        osc.frequency.setValueAtTime(990 + (idx * 330), ctx.currentTime + delay);
        
        gainNode.gain.setValueAtTime(0.001, ctx.currentTime + delay);
        gainNode.gain.exponentialRampToValueAtTime(0.05, ctx.currentTime + delay + 0.01);
        gainNode.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + delay + 0.07);
        
        osc.connect(gainNode);
        gainNode.connect(ctx.destination);
        
        osc.start(ctx.currentTime + delay);
        osc.stop(ctx.currentTime + delay + 0.08);
      });
    } catch (err) {}
  };

  const triggerSignalBenchTest = (sigName: string) => {
    setActiveSignalTone(sigName);
    
    switch (sigName) {
      case 'RECON_PING':
        playSynthBeep(1100, 'sine', 0.2);
        break;
      case 'CYBER_SWEEP':
        playSweepSynth();
        break;
      case 'TRIPLE_ALARM':
        playTrisecAlertTone();
        break;
      case 'STATIC_HUM':
        playSynthBeep(60, 'square', 0.7);
        break;
    }

    setTimeout(() => {
      setActiveSignalTone(null);
    }, 850);
  };

  const handleToggleOverclock = () => {
    const newState = !isOverclocked;
    setIsOverclocked(newState);
    
    if (newState) {
      playSweepSynth();
    } else {
      playSynthBeep(420, 'triangle', 0.35);
    }
  };

  const t = translations[language];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 6 specific custom navigation nodes matching user guidelines
  const menuItems = [
    { label: t.nav_profil, sectionId: 'profil-section' },
    { label: t.nav_experience, sectionId: 'experience-section' },
    { label: t.nav_projects, sectionId: 'projects-section' },
    { label: t.nav_certificates, sectionId: 'certificates-section' },
    { label: t.nav_competencies, sectionId: 'competencies-section' },
    { label: t.nav_links, sectionId: 'link-section' }
  ];

  return (
    <header className="sticky top-0 z-40 w-full bg-[#0F0F0F]/90 backdrop-blur-md border-b border-[#2A2A2A] py-4 px-4 md:px-10">
      
      {/* Invisible global scanlines overlays mapped through CRT component rendering */}
      {isScanlinesActive && (
        <div className="fixed inset-0 pointer-events-none z-50 bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%),linear-gradient(90deg,rgba(255,0,0,0.03),rgba(0,255,0,0.01),rgba(0,0,255,0.03))] bg-[size:100%_4px,3px_100%] opacity-40"></div>
      )}

      {/* Main navigation flexbox container */}
      <div className="max-w-7xl mx-auto flex items-center justify-between relative">
        
        {/* BRAND LOGO DESIGN (LEFT) */}
        <div 
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="flex items-center space-x-3 cursor-pointer group"
          id="nav_brand"
        >
          <div className="relative flex items-center justify-center w-8 h-8 rounded-full bg-[#E0FF00] overflow-hidden">
            <span className="font-mono text-black text-xs font-black group-hover:scale-110 transition-transform">MAF</span>
          </div>
          <span className="font-mono text-xs tracking-widest text-[#F0F4FF] hover:text-[#E0FF00] transition-colors font-bold uppercase">
            M. Alif_Fajri
          </span>
        </div>

        {/* HORIZONTAL MENU NAVIGATION (DESKTOP) */}
        {/* Replaced center sections with literal items 1-6 requested by user */}
        <nav className="hidden lg:flex items-center space-x-5 xl:space-x-6 font-mono text-[9px] xl:text-[10px] uppercase tracking-[0.15em] opacity-80" id="nav_menu">
          {menuItems.map((item) => (
            <button 
              key={item.label}
              onClick={() => scrollToSection(item.sectionId)}
              className="text-slate-400 hover:text-[#E0FF00] hover:scale-105 hover:opacity-100 transition-all cursor-pointer font-bold relative p-1"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* CONTROLS BUTTONS (RIGHT) */}
        <div className="flex items-center space-x-3" id="nav_actions">
          
          {/* Status feeding signal - Flashes neon yellow under overclock */}
          <div className={`hidden sm:flex items-center space-x-2 px-3 py-1 border rounded-full text-[9px] font-mono transition-all duration-300 ${
            isOverclocked 
              ? 'border-[#E0FF00] bg-[#E0FF00]/10 text-[#E0FF00] cyber-glow-cyan font-black'
              : 'border-[#2A2A2A] text-slate-400'
          }`}>
            <Radio className={`w-2.5 h-2.5 ${isOverclocked ? 'animate-ping text-[#E0FF00]' : 'animate-pulse text-emerald-400'}`} />
            <span>{isOverclocked ? t.overclocked : t.live_feed}</span>
          </div>

          {/* DUAL-LANGUAGE HANDSHAKE ROUTER (EN / ID Toggle) */}
          <button
            onClick={() => {
              const nextLang = language === 'en' ? 'id' : 'en';
              setLanguage(nextLang);
              playSynthBeep(600, 'sine', 0.1);
            }}
            className="px-2.5 py-1.5 border border-[#2A2A2A] hover:border-[#E0FF00] hover:text-[#E0FF00] bg-transparent text-[9px] md:text-[10px] font-mono font-black rounded-none transition-all cursor-pointer flex items-center space-x-1 uppercase group"
            id="lang-toggle-btn"
            title={language === 'en' ? 'Switch design language to Indonesian' : 'Ubah bahasa desain ke Bahasa Inggris'}
          >
            <span className={language === 'en' ? 'text-[#E0FF00]' : 'text-slate-500 group-hover:text-[#E0FF00]/70'}>EN</span>
            <span className="text-slate-600">/</span>
            <span className={language === 'id' ? 'text-[#E0FF00]' : 'text-slate-500 group-hover:text-[#E0FF00]/70'}>ID</span>
          </button>

          {/* DYNAMIC SYSTEM CONTROLS CABINET SWITCH (REPLACES GEAR) */}
          <button
            onClick={() => {
              setIsControlsOpen(!isControlsOpen);
              playSynthBeep(880, 'sine', 0.1);
            }}
            className={`p-2 rounded-none border transition-all cursor-pointer relative group ${
              isControlsOpen 
                ? 'bg-[#E0FF00] text-black border-[#E0FF00]' 
                : 'border-[#2A2A2A] text-[#A0A0A0] hover:bg-[#2A2A2A] hover:text-[#E0FF00]'
            }`}
            id="cabinet-trigger-btn"
            title="Launch Diagnostics Control"
          >
            <Settings className={`w-4 h-4 ${isControlsOpen ? 'animate-spin' : 'animate-spin-slow group-hover:rotate-45'}`} />
            <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-[#E0FF00] animate-ping" />
          </button>

          {/* HAMBURGER MENU / GARIS 3 (MOBILE & TABLET) */}
          <button
            onClick={() => {
              setIsMenuOpen(!isMenuOpen);
              playSynthBeep(720, 'sine', 0.08);
            }}
            className="lg:hidden p-2 rounded-none border border-[#2A2A2A] text-[#F0F0F0] hover:border-[#E0FF00] hover:text-[#E0FF00] cursor-pointer transition-all"
            id="mobile-drawer-hamburger"
            aria-label="Toggle Systems Navigation Menu"
          >
            {isMenuOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
          </button>

        </div>
      </div>

      {/* MOBILE & TABLET HAMBURGER SLIDE OUT DRAWER */}
      {/* Maximum responsiveness for tablet/mobile frame dimensions */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: 'easeInOut' }}
            className="lg:hidden absolute top-full left-0 w-full bg-[#0F0F0F]/98 border-b border-[#2A2A2A] z-40 overflow-hidden shadow-2xl backdrop-blur-lg"
          >
            <div className="px-5 py-6 space-y-3.5 font-mono text-[11px] uppercase tracking-wider text-left bg-[#0A0A0A] border-t border-[#1C1C1C]">
              <span className="text-[9px] text-[#E0FF00]/40 font-bold block pb-1 border-b border-[#2A2A2A]">
                {t.choose_node}
              </span>
              
              {menuItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => {
                    scrollToSection(item.sectionId);
                    setIsMenuOpen(false);
                    playSynthBeep(960, 'sine', 0.06);
                  }}
                  className="w-full py-3.5 px-4 bg-[#151515]/45 border border-[#2A2A2A] hover:border-[#E0FF00] hover:text-[#E0FF00] hover:bg-[#E0FF00]/5 text-left transition-all duration-200 flex items-center justify-between group rounded-none"
                >
                  <span className="flex items-center space-x-3.5">
                    <span className="text-[#E0FF00] font-black text-[10px]">▪</span>
                    <span className="font-bold text-slate-300 group-hover:text-white transition-colors">{item.label}</span>
                  </span>
                  <span className="text-slate-600 group-hover:text-[#E0FF00] font-black transition-transform group-hover:translate-x-1">→</span>
                </button>
              ))}

              <div className="pt-2 text-center text-slate-600 text-[8px] tracking-[0.25em] font-mono">
                [ SECURE PORT LINK MOBILE OVERVIEW ]
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SYSTEM DIAGNOSTIC CONTROL CABINET DRAWER */}
      <AnimatePresence>
        {isControlsOpen && (
          <>
            {/* Dark blur overlay backdrop screen */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsControlsOpen(false)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm cursor-pointer"
            />
            
            {/* Drawer layout */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 26, stiffness: 210 }}
              className="fixed top-0 right-0 h-full w-full max-w-[360px] bg-[#0F0F0F] border-l border-[#2A2A2A] z-50 p-6 shadow-2xl flex flex-col justify-between overflow-y-auto font-mono"
              id="control-cabinet-drawer"
            >
              
              {/* Drawer Content */}
              <div className="space-y-6">
                
                {/* Header title */}
                <div className="flex items-center justify-between pb-4 border-b border-[#2A2A2A]">
                  <div className="flex items-center space-x-2.5 text-[#E0FF00]">
                    <Sliders className="w-4 h-4" />
                    <span className="font-bold text-xs uppercase tracking-wider">{t.cabinet_title}</span>
                  </div>
                  
                  <button 
                    onClick={() => {
                      setIsControlsOpen(false);
                      playSynthBeep(400, 'sine', 0.08);
                    }}
                    className="p-1 border border-[#2A2A2A] hover:border-[#E0FF00] hover:text-[#E0FF00] transition-colors cursor-pointer"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                </div>

                {/* Subsystem status list */}
                <div className="space-y-4">
                  
                  {/* FEATURE 1: ANALOG SCANLINE OVERLAY SWITCH */}
                  <div className="p-4 bg-[#151515] border border-[#2A2A2A] rounded-none text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                        <Tv className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{t.cabinet_crt}</span>
                      </span>
                      <button
                        onClick={() => {
                          setIsScanlinesActive(!isScanlinesActive);
                          playSynthBeep(800, 'triangle', 0.12);
                        }}
                        className={`w-12 h-6 border transition-all rounded-none p-0.5 relative flex cursor-pointer ${
                          isScanlinesActive 
                            ? 'bg-[#E0FF00]/15 border-[#E0FF00]' 
                            : 'bg-transparent border-[#2A2A2A]'
                        }`}
                      >
                        <div className={`w-4 h-full transition-all duration-200 ${
                          isScanlinesActive 
                            ? 'bg-[#E0FF00] ml-6' 
                            : 'bg-slate-600'
                        }`} />
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans font-light leading-relaxed">
                      {t.cabinet_crt_desc}
                    </p>
                  </div>

                  {/* FEATURE 2: CPU OVERCLOCK SWITCH */}
                  <div className="p-4 bg-[#151515] border border-[#2A2A2A] rounded-none text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                        <Zap className="w-3.5 h-3.5 text-[#E0FF00]" />
                        <span>{t.cabinet_overclock}</span>
                      </span>
                      <button
                        onClick={handleToggleOverclock}
                        className={`w-12 h-6 border transition-all rounded-none p-0.5 relative flex cursor-pointer ${
                          isOverclocked 
                            ? 'bg-[#E0FF00]/15 border-[#E0FF00]' 
                            : 'bg-transparent border-[#2A2A2A]'
                        }`}
                      >
                        <div className={`w-4 h-full transition-all duration-200 ${
                          isOverclocked 
                            ? 'bg-[#E0FF00] ml-6' 
                            : 'bg-slate-600'
                        }`} />
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans font-light leading-relaxed">
                      {t.cabinet_overclock_desc}
                    </p>
                  </div>

                  {/* FEATURE 2.5: THEME SECTOR SELECTOR */}
                  <div className="p-4 bg-[#151515] border border-[#2A2A2A] rounded-none text-left space-y-3">
                    <span className="text-[10px] font-bold text-white uppercase tracking-wider flex items-center space-x-1.5">
                      <Sliders className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{t.cabinet_theme_title}</span>
                    </span>
                    
                    <p className="text-[10px] text-slate-500 font-sans font-light leading-relaxed">
                      {t.cabinet_theme_desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[10px] font-mono">
                      {[
                        { id: 'theme-electric-yellow', label: 'E_YELLOW', colorCode: '#E0FF00' },
                        { id: 'theme-neo-cyan', label: 'NEO CYAN', colorCode: '#00E5FF' },
                        { id: 'theme-cyber-blue', label: 'CYBER BLUE', colorCode: '#2E86FF' },
                        { id: 'theme-retro-amber', label: 'AMBER', colorCode: '#FFB300' },
                        { id: 'theme-hazard-red', label: 'HAZARD RED', colorCode: '#FF3D00' },
                        { id: 'theme-matrix-green', label: 'MATRIX', colorCode: '#00FF66' },
                        { id: 'theme-violet-pulse', label: 'V_PULSE', colorCode: '#D500F9' }
                      ].map((t) => (
                        <button
                          key={t.id}
                          onClick={() => {
                            setActiveTheme(t.id);
                            playSynthBeep(1200, 'sine', 0.08);
                          }}
                          className={`p-2 border rounded-none text-left flex items-center space-x-2 transition-all cursor-pointer relative ${
                            activeTheme === t.id
                              ? 'bg-[#E0FF00] text-black border-[#E0FF00] font-black'
                              : 'bg-[#0F0F0F] border-[#2A2A2A] text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <div 
                            className="w-2.5 h-2.5 rounded-full border border-black/10 shrink-0" 
                            style={{ backgroundColor: t.colorCode }} 
                          />
                          <span className="uppercase text-[9px] tracking-tight">{t.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* FEATURE 2.6: NIGHT VISION RADAR */}
                  <div className="p-4 bg-[#151515] border border-[#2A2A2A] rounded-none text-left space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white uppercase tracking-wider flex items-center space-x-1.5 font-mono">
                        <Moon className="w-3.5 h-3.5 text-indigo-400" />
                        <span>{t.cabinet_night_vision}</span>
                      </span>
                      <button
                        onClick={() => {
                          setIsNightVision(!isNightVision);
                          playSynthBeep(1600, 'sine', 0.15);
                        }}
                        className={`w-12 h-6 border transition-all rounded-none p-0.5 relative flex cursor-pointer ${
                          isNightVision 
                            ? 'bg-[#E0FF00]/15 border-[#E0FF00]' 
                            : 'bg-transparent border-[#2A2A2A]'
                        }`}
                      >
                        <div className={`w-4 h-full transition-all duration-200 ${
                          isNightVision 
                            ? 'bg-[#E0FF00] ml-6' 
                            : 'bg-slate-600'
                        }`} />
                      </button>
                    </div>
                    <p className="text-[10px] text-slate-500 font-sans font-light leading-relaxed">
                      {t.cabinet_night_vision_desc}
                    </p>
                  </div>

                  {/* FEATURE 3: WAVEFORM SYNTHESIZER BENCH */}
                  <div className="p-4 bg-[#151515] border border-[#2A2A2A] rounded-none text-left space-y-3">
                    <span className="text-[10px] font-bold text-[#E0FF00] uppercase tracking-wider flex items-center space-x-1.5">
                      <Volume2 className="w-3.5 h-3.5" />
                      <span>{t.cabinet_synth}</span>
                    </span>
                    
                    <p className="text-[10px] text-slate-500 font-sans font-light leading-relaxed">
                      {t.cabinet_synth_desc}
                    </p>

                    <div className="grid grid-cols-2 gap-2 text-[10px]">
                      {[
                        { id: 'RECON_PING', label: '1100Hz Sine', dsc: 'Ping Probe' },
                        { id: 'CYBER_SWEEP', label: 'Glide Sweep', dsc: '140 to 1860Hz' },
                        { id: 'TRIPLE_ALARM', label: 'Alarm Burst', dsc: '3-Sec Pulse' },
                        { id: 'STATIC_HUM', label: '60Hz Hum', dsc: 'Ground Static' }
                      ].map((sig) => (
                        <button
                          key={sig.id}
                          onClick={() => triggerSignalBenchTest(sig.id)}
                          className={`p-2 border rounded-none text-left flex flex-col justify-between transition-all cursor-pointer relative ${
                            activeSignalTone === sig.id
                              ? 'bg-[#E0FF00] text-black border-[#E0FF00] font-black'
                              : 'bg-[#0F0F0F] border-[#2A2A2A] text-slate-300 hover:border-slate-500'
                          }`}
                        >
                          <span className="font-bold block uppercase text-[10px]">{sig.label}</span>
                          <span className={`${activeSignalTone === sig.id ? 'text-black' : 'text-slate-600'} text-[8px] font-mono leading-none mt-1`}>{sig.dsc}</span>
                          
                          {activeSignalTone === sig.id && (
                            <span className="absolute top-1 right-1 flex h-1.5 w-1.5">
                              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
                              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-black"></span>
                            </span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* DIAGNOSTIC PANEL DATA METRICS */}
                  <div className="p-4 bg-[#151515]/40 border border-[#2A2A2A] rounded-none text-left space-y-1.5 font-mono text-[9px] text-slate-500">
                    <span className="text-[10px] font-bold text-slate-400 block mb-1">{t.cabinet_sys_fdb}</span>
                    <div className="flex justify-between">
                      <span>{t.cabinet_temp}:</span>
                      <span className={isOverclocked ? 'text-orange-400 font-bold' : 'text-slate-300'}>{isOverclocked ? '84.2°C [HOT]' : '41.5°C [SAFE]'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.cabinet_audio}:</span>
                      <span className="text-emerald-400">ACTIVATED</span>
                    </div>
                    <div className="flex justify-between">
                      <span>{t.cabinet_loads}:</span>
                      <span className="text-slate-300">MAF.ETH_PORT_3000</span>
                    </div>
                  </div>

                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="pt-4 border-t border-[#2A2A2A] text-center text-slate-600 text-[8.5px] uppercase tracking-widest leading-normal whitespace-pre-line">
                {t.cabinet_footer}
              </div>

            </motion.div>
          </>
        )}
      </AnimatePresence>

    </header>
  );
}

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Linkedin, Instagram, Mail, Send, Terminal, Loader2, AlertCircle } from 'lucide-react';
import { TransmissionLog } from '../types';
import { translations } from '../translations';

interface ContactFormProps {
  language: 'en' | 'id';
}

export default function ContactForm({ language }: ContactFormProps) {
  const t = translations[language];

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [isTransmitting, setIsTransmitting] = useState(false);
  const [terminalLogs, setTerminalLogs] = useState<TransmissionLog[]>([]);
  const [formError, setFormError] = useState('');
  
  const nameInputRef = useRef<HTMLInputElement>(null);
  const terminalBottomRef = useRef<HTMLDivElement>(null);

  // Auto-scroll terminal to bottom when new logs are compiled
  useEffect(() => {
    if (terminalBottomRef.current) {
      terminalBottomRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [terminalLogs]);

  // Handle focusing from external headers if requested
  useEffect(() => {
    const handleFocusForm = () => {
      if (nameInputRef.current) {
        nameInputRef.current.focus({ preventScroll: false });
        nameInputRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    };
    window.addEventListener('focus-contact-form', handleFocusForm);
    return () => window.removeEventListener('focus-contact-form', handleFocusForm);
  }, []);

  const triggerLog = (msg: string, type: 'info' | 'success' | 'warn' | 'error', delay: number) => {
    return new Promise<void>((resolve) => {
      setTimeout(() => {
        setTerminalLogs(prev => [
          ...prev, 
          { 
            timestamp: new Date().toLocaleTimeString(), 
            message: msg, 
            type 
          }
        ]);
        resolve();
      }, delay);
    });
  };

  const handleTransmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    if (!name || !email || !message) {
      setFormError(t.contact_err_empty);
      return;
    }

    if (!email.includes('@')) {
      setFormError(t.contact_err_email);
      return;
    }

    setIsTransmitting(true);
    setTerminalLogs([]);

    // Line by line high fidelity compilation console
    if (language === 'en') {
      await triggerLog(`[INIT] LOCAL TRANSMITTER REBOOT SEQUENCE ATTACHING COMPILER...`, 'info', 100);
      await triggerLog(`[COMP] PACKAGING DATAGRAM: ID_NAME: "${name}"`, 'info', 500);
      await triggerLog(`[COMP] ENCRYPTING SYS_EMAIL SOURCE: "${email}"`, 'info', 400);
      await triggerLog(`[SEC] GENERATING SIGNATURE SHA-256 HANDSHAKE HASH...`, 'info', 600);
      await triggerLog(`[ROUTE] ESTABLISHING ROUTE TO HOST muhammadalifajri19@gmail.com...`, 'info', 500);
      await triggerLog(`[SSH] CONNECTING TO SMTP RELAY CHANNELS ON PORT 3000...`, 'info', 600);
      await triggerLog(`[SSH] CONNECTION SECURE. INGRESS HANDSHAKE AUTHORIZED.`, 'success', 300);
      await triggerLog(`[TRANS] UPLOADING DATA_PACKET: "${message.substring(0, 30)}..."`, 'info', 600);
      await triggerLog(`[OK] 200 SUCCESS - PACKET TRANSMITTED COMPACTLY.`, 'success', 500);
      await triggerLog(`[COMM] TARGET CLIENT NOTIFIED. LOCAL LOG COPIED TO CLIENT_CACHE.`, 'success', 400);
    } else {
      await triggerLog(`[INIT] URUTAN REBOOT TRANSMITER LOKAL MENGHUBUNGKAN KOMPILER...`, 'info', 100);
      await triggerLog(`[COMP] PENGEMASAN DATAGRAM: ID_NAME: "${name}"`, 'info', 500);
      await triggerLog(`[COMP] ENKRIPSI SUMBER SYS_EMAIL: "${email}"`, 'info', 400);
      await triggerLog(`[SEC] MEMBUAT TANDA TANGAN SHA-256 HANDSHAKE HASH...`, 'info', 600);
      await triggerLog(`[ROUTE] MENETAPKAN RUTE KE ALAMAT muhammadalifajri19@gmail.com...`, 'info', 500);
      await triggerLog(`[SSH] MENGHUBUNGKAN KE SALURAN SMTP RELAY PADA PORT 3000...`, 'info', 600);
      await triggerLog(`[SSH] KONEKSI AMAN. HANDSHAKE REKANAN DISETUJUI.`, 'success', 300);
      await triggerLog(`[TRANS] MENGUNGGAH DATA_PACKET: "${message.substring(0, 30)}..."`, 'info', 600);
      await triggerLog(`[OK] 200 BERHASIL - DATA SELESAI DIKIRIMKAN.`, 'success', 500);
      await triggerLog(`[COMM] KLIEN TARGET DIKABARI. SALINAN LOG DIREKAM KEPADA CLIENT_CACHE.`, 'success', 400);
    }

    setIsTransmitting(false);
    
    // Clear the form fields upon successful transmission simulation
    setName('');
    setEmail('');
    setMessage('');
  };

  return (
    <section id="link-section" className="relative w-full max-w-7xl mx-auto py-16 px-4 md:px-10 scroll-mt-20">
      
      {/* Decorative circuitry backgrounds */}
      <div className="absolute top-[30%] right-10 w-48 h-1 bg-gradient-to-l from-[#E0FF00]/10 to-transparent pointer-events-none"></div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        
        {/* Left Info Column */}
        <div className="space-y-6 flex flex-col justify-between text-left">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 text-[#E0FF00]">
              <Terminal className="w-5 h-5" />
              <h2 className="font-mono text-xs tracking-[0.25em] font-bold uppercase">
                {t.contact_heading_main}
              </h2>
            </div>
            
            <p className="text-slate-400 text-sm md:text-md leading-relaxed font-sans font-light">
              {t.contact_heading_sub}
            </p>
          </div>

          {/* Social details coordinates with high precision styling */}
          <div className="space-y-4 py-6" id="coordinates_panel">
            <span className="font-mono text-[9px] text-slate-500 tracking-widest block uppercase">
              {t.contact_coordinates}
            </span>
            
            {/* Location */}
            <div className="flex items-center space-x-4 p-3 bg-[#151515]/30 border border-[#2A2A2A] rounded-none">
              <div className="p-2 rounded-none bg-[#0F0F0F] text-[#E0FF00] border border-[#2A2A2A]">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider">
                <span className="text-slate-500 block text-[9px]">LOCATION</span>
                <span className="text-[#F0F4FF]">Jakarta, Indonesia</span>
              </div>
            </div>

            {/* LinkedIn */}
            <a 
              href="https://www.linkedin.com/in/mhmmdalifajri/"
              target="_blank"
              rel="noreferrer" 
              className="flex items-center space-x-4 p-3 bg-[#151515]/30 border border-[#2A2A2A] hover:border-[#E0FF00]/40 rounded-none transition-all group"
            >
              <div className="p-2 rounded-none bg-[#0F0F0F] text-[#E0FF00] border border-[#2A2A2A] group-hover:bg-[#E0FF00] group-hover:text-black transition-all">
                <Linkedin className="w-4 h-4" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider">
                <span className="text-slate-500 block text-[9px]">LINKEDIN</span>
                <span className="text-[#E0FF00] hover:underline">mhmmdalifajri</span>
              </div>
            </a>

            {/* Instagram */}
            <a 
              href="https://www.instagram.com/muhammadalifajri_19/"
              target="_blank"
              rel="noreferrer" 
              className="flex items-center space-x-4 p-3 bg-[#151515]/30 border border-[#2A2A2A] hover:border-[#E0FF00]/40 rounded-none transition-all group"
            >
              <div className="p-2 rounded-none bg-[#0F0F0F] text-[#E0FF00] border border-[#2A2A2A] group-hover:bg-[#E0FF00] group-hover:text-black transition-all">
                <Instagram className="w-4 h-4" />
              </div>
              <div className="font-mono text-xs uppercase tracking-wider">
                <span className="text-slate-500 block text-[9px]">INSTAGRAM</span>
                <span className="text-[#E0FF00] hover:underline">muhammadalifajri_19</span>
              </div>
            </a>

            {/* Email */}
            <a 
              href="mailto:muhammadalifajri19@gmail.com" 
              className="flex items-center space-x-4 p-3 bg-[#151515]/30 border border-[#2A2A2A] hover:border-[#E0FF00]/40 rounded-none transition-all group"
            >
              <div className="p-2 rounded-none bg-[#0F0F0F] text-[#E0FF00] border border-[#2A2A2A] group-hover:bg-[#E0FF00] group-hover:text-black transition-all">
                <Mail className="w-4 h-4" />
              </div>
              <div className="font-mono text-xs tracking-wider">
                <span className="text-slate-500 block text-[9px] uppercase">EMAIL</span>
                <span className="text-[#E0FF00] hover:underline">muhammadalifajri19@gmail.com</span>
              </div>
            </a>
          </div>

          <div className="hidden lg:block font-mono text-[9px] text-slate-500">
            SECURE PORT ENCRYPTION TRACE: ON_SSL_TLS_443
          </div>
        </div>

        {/* Right Input Form Column */}
        <div className="glass-panel p-6 md:p-8 border border-[#2A2A2A] rounded-none relative">
          <div className="absolute top-0 right-0 p-3 font-mono text-[9px] text-[#E0FF00]">
            TRANSMITTER_V1.SYS
          </div>
          
          <form onSubmit={handleTransmit} className="space-y-5 text-left">
            {/* Header ID_NAME */}
            <div>
              <label htmlFor="id-name-field" className="block font-mono text-[10px] tracking-widest text-[#E0FF00] uppercase font-bold mb-2">
                {t.contact_field_name}
              </label>
              <input 
                id="id-name-field"
                type="text" 
                ref={nameInputRef}
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t.contact_field_name_placeholder}
                disabled={isTransmitting}
                className="w-full bg-[#0F0F0F] border border-[#2A2A2A] focus:border-[#E0FF00] rounded-none py-3 px-4 font-mono text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            {/* Header SYS_EMAIL */}
            <div>
              <label htmlFor="sys-email-field" className="block font-mono text-[10px] tracking-widest text-[#E0FF00] uppercase font-bold mb-2">
                {t.contact_field_email}
              </label>
              <input 
                id="sys-email-field"
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t.contact_field_email_placeholder}
                disabled={isTransmitting}
                className="w-full bg-[#0F0F0F] border border-[#2A2A2A] focus:border-[#E0FF00] rounded-none py-3 px-4 font-mono text-xs text-white placeholder-slate-600 outline-none transition-all"
              />
            </div>

            {/* Header DATA_PACKET */}
            <div>
              <label htmlFor="data-packet-field" className="block font-mono text-[10px] tracking-widest text-[#E0FF00] uppercase font-bold mb-2">
                {t.contact_field_msg}
              </label>
              <textarea 
                id="data-packet-field"
                rows={4}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={t.contact_field_msg_placeholder}
                disabled={isTransmitting}
                className="w-full bg-[#0F0F0F] border border-[#2A2A2A] focus:border-[#E0FF00] rounded-none py-3 px-4 font-mono text-xs text-white placeholder-slate-600 outline-none transition-all resize-none"
              ></textarea>
            </div>

            {/* Error notifications */}
            <AnimatePresence>
              {formError && (
                <motion.div 
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="flex items-center space-x-2 text-[11px] font-mono text-red-400 bg-red-950/20 border border-red-500/30 p-2.5 rounded-none"
                  id="form-error-banner"
                >
                  <AlertCircle className="w-3.5 h-3.5" />
                  <span>{formError}</span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isTransmitting}
              className={`w-full font-mono text-xs tracking-widest uppercase font-bold py-3.5 rounded-none flex items-center justify-center space-x-2 border transition-all duration-300 cursor-pointer ${
                isTransmitting 
                  ? 'bg-[#151515] border-[#2A2A2A] text-slate-500 cursor-not-allowed'
                  : 'bg-transparent border-[#E0FF00] text-[#E0FF00] hover:bg-[#E0FF00] hover:text-black font-black'
              }`}
              id="transmit-btn-form"
            >
              {isTransmitting ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-[#E0FF00]" />
                  <span>{t.contact_btn_transacting}</span>
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  <span>{t.contact_btn_trans}</span>
                </>
              )}
            </button>
          </form>

          {/* Glowing Terminal Screen for Live log simulation */}
          <AnimatePresence>
            {(terminalLogs.length > 0 || isTransmitting) && (
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="mt-6 border border-[#E0FF00]/20 bg-[#0F0F0F] rounded-none p-4 h-44 overflow-y-auto font-mono text-[10px]"
                id="digital_terminal"
              >
                <div className="flex items-center justify-between border-b border-[#2A2A2A] pb-2 mb-2 text-slate-500 select-none">
                  <span className="flex items-center space-x-1">
                    <span className="w-2 h-2 rounded-full bg-[#E0FF00] animate-pulse"></span>
                    <span className="text-[#E0FF00] text-[9px] font-bold">{t.contact_console_feed}</span>
                  </span>
                  <span>{t.contact_console_lines}: {terminalLogs.length}</span>
                </div>
                
                <div className="space-y-1.5 leading-normal">
                  {terminalLogs.map((log: TransmissionLog, lIdx: number) => (
                    <div 
                      key={lIdx} 
                      className={`${
                        log.type === 'success' 
                          ? 'text-[#E0FF00]' 
                          : log.type === 'error'
                          ? 'text-red-400'
                          : 'text-slate-300'
                      }`}
                    >
                      <span className="text-slate-600 mr-2">[{log.timestamp}]</span>
                      <span>{log.message}</span>
                    </div>
                  ))}
                  
                  {isTransmitting && (
                    <div className="text-[#E0FF00] flex items-center space-x-1 font-bold animate-pulse">
                      <span>_ GENERATING LOG STREAM_PORTS_CONNECTED_WAIT</span>
                      <span className="text-[#E0FF00] animate-ping">...</span>
                    </div>
                  )}

                  {/* Anchor div to keep scroll down */}
                  <div ref={terminalBottomRef} />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}

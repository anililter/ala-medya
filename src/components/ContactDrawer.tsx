"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function ContactDrawer() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed right-0 top-0 bottom-0 z-[100] flex items-center pointer-events-none">
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop for closing on click outside */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/20 backdrop-blur-[2px] pointer-events-auto"
            />
            
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 300, damping: 35 }}
              className="flex flex-col h-screen w-[340px] overflow-y-auto bg-[#0d6efd] text-white shadow-[-20px_0_40px_rgba(0,0,0,0.2)] pointer-events-auto relative z-[101]"
            >
              {/* LARGE HIGHLY VISIBLE CLOSE BUTTON */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute right-6 top-6 flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-white hover:bg-white/20 hover:scale-110 active:scale-95 transition-all shadow-lg focus:outline-none"
                aria-label="Kapat"
              >
                <span className="text-3xl font-light leading-none">×</span>
              </button>

              <div className="px-8 py-20 flex flex-col justify-center min-h-full">
                <h3 className="mb-12 text-2xl font-bold leading-tight tracking-wide">
                  FORMU DOLDURUN<br />SİZİ ARAYALIM
                </h3>

                <form className="space-y-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Ad Soyad *"
                      className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="text"
                      placeholder="Firma Adı *"
                      className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="tel"
                      placeholder="Telefon Numaranız *"
                      className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email Adresiniz *"
                      className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:ring-0 outline-none transition-colors"
                      required
                    />
                  </div>
                  <div className="relative">
                    <select
                      className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white/90 focus:border-white focus:text-white focus:ring-0 outline-none transition-colors appearance-none"
                      required
                    >
                      <option value="" className="text-black">Bilgi almak istediğiniz hizmeti seçin</option>
                      <option value="dijital-pazarlama" className="text-black">Dijital Pazarlama</option>
                      <option value="seo" className="text-black">SEO</option>
                      <option value="web-tasarim" className="text-black">Web Tasarım</option>
                      <option value="yapay-zeka" className="text-black">Yapay Zeka Destekli Büyüme (GPT-5 & Gemini 3.1)</option>
                    </select>
                    <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none text-white/50">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </div>
                  <div>
                    <textarea
                      placeholder="Mesajınız"
                      rows={2}
                      className="w-full resize-none bg-transparent border-0 border-b border-white/30 px-0 py-3 text-base text-white placeholder:text-white/70 focus:border-white focus:ring-0 outline-none transition-colors"
                    />
                  </div>
                  <div className="pt-6">
                    <button
                      type="submit"
                      className="w-full rounded-full bg-[#38bdf8] py-4 text-lg font-bold text-white transition hover:bg-[#0ea5e9] shadow-[0_4px_14px_rgba(56,189,248,0.4)] active:scale-95"
                    >
                      Gönder
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

    </div>
  );
}

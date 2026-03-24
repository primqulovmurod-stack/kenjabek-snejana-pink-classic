'use client';

import React from 'react';
import { motion } from 'framer-motion';

interface LockScreenProps {
  onUnlock: () => void;
}

export function LockScreen({ onUnlock }: LockScreenProps) {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0, 
        y: "-100%", 
        transition: { duration: 0.8, ease: "easeInOut" } 
      }}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white text-[#0F172A] font-sans selection:bg-purple-200"
    >
      {/* Decorative Blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] left-[10%] w-[300px] h-[300px] bg-[#F3E8FF] rounded-full blur-[100px] opacity-80" />
        <div className="absolute bottom-[10%] right-[10%] w-[400px] h-[400px] bg-[#F3E8FF] rounded-full blur-[120px] opacity-60" />
      </div>

      {/* Main Content */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="relative flex flex-col items-center justify-center space-y-10 px-6 max-w-sm w-full"
      >
        {/* E-Commerce style Logo / Monogram */}
        <div className="w-28 h-28 rounded-full bg-white shadow-2xl shadow-purple-900/10 flex flex-col items-center justify-center border-4 border-double border-purple-200 relative">
            <div className="absolute inset-[3px] rounded-full border-[0.5px] border-purple-100" />
            <span className="text-purple-300 text-[10px] mb-1 opacity-80">⚜</span>
            <span 
              className="text-4xl text-[#7E22CE] leading-none tracking-widest flex items-center justify-center italic"
              style={{ fontFamily: 'var(--font-cormorant)' }}
            >
              X<span className="text-purple-300 font-light text-xl mx-0.5" style={{ fontFamily: 'var(--font-playfair)' }}>&amp;</span>M
            </span>
            <span className="text-purple-300 text-[10px] mt-1 opacity-80 rotate-180">⚜</span>
          </div>

        {/* Text */}
        <div className="text-center space-y-3">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[#0F172A] tracking-tight leading-snug">
            Siz uchun maxsus taklifnoma
          </h2>
          <p className="text-sm text-[#64748B] font-medium">
            Tafsilotlarni ko&apos;rish uchish tugmani bosing.
          </p>
        </div>

        {/* Unlock Button */}
        <button
          onClick={onUnlock}
          className="group relative flex items-center justify-center w-full max-w-[280px] h-14 overflow-hidden rounded-full bg-[#7E22CE] text-white shadow-xl shadow-purple-500/30 hover:-translate-y-1 transition-all duration-300"
        >
          <span className="relative z-10 font-bold text-sm tracking-wide flex items-center gap-3">
            Ochish <span>&rarr;</span>
          </span>
          <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out" />
        </button>
      </motion.div>
    </motion.div>
  );
}

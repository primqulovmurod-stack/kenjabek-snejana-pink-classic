'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';

export const RSVP: React.FC = () => {
  const [status, setStatus] = useState<'attending' | 'not-attending' | null>(null);

  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-24 pb-32 px-6 max-w-2xl mx-auto bg-stitch-surface text-stitch-on-surface min-h-[100dvh]"
    >
      <h2 className="font-headline text-5xl text-stitch-primary mb-4 leading-tight">
        Bizga <br/> <span className="italic font-normal text-stitch-on-surface">qo'shilasizmi?</span>
      </h2>
      <p className="text-stitch-on-surface-variant font-body mb-10 max-w-xs">Iltimos, ishtirokingizni tasdiqlang. Sizni ko'rishdan juda xursand bo'lamiz!</p>
      
      <section className="bg-stitch-surface-container-low rounded-[2.5rem] p-8 border border-stitch-outline-variant/10 shadow-sm relative overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-stitch-primary/5 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <form className="space-y-10 relative z-10" onSubmit={(e) => e.preventDefault()}>
          <div className="relative">
            <label className="text-[10px] uppercase font-bold text-stitch-primary tracking-[0.2rem] ml-1 mb-2 block">Sizning ismingiz</label>
            <input 
              type="text" 
              placeholder="Mehmon ismi" 
              className="w-full bg-transparent border-b border-stitch-outline-variant/40 px-0 py-4 focus:border-stitch-primary focus:outline-none transition-all font-body text-xl placeholder:text-stitch-on-surface-variant/30" 
            />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button
              type="button"
              onClick={() => setStatus('attending')}
              className={`p-6 rounded-3xl transition-all flex flex-col items-center justify-center gap-3 border-2 ${
                status === 'attending' 
                  ? 'bg-stitch-secondary-container border-stitch-secondary text-stitch-on-secondary-container shadow-xl scale-[1.02]' 
                  : 'bg-white border-stitch-outline-variant/10 text-stitch-on-surface-variant hover:bg-white/80'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">done_all</span>
              <span className="font-body text-xs uppercase font-bold tracking-[0.15rem]">Jon deb boraman</span>
            </button>
            <button
              type="button"
              onClick={() => setStatus('not-attending')}
              className={`p-6 rounded-3xl transition-all flex flex-col items-center justify-center gap-3 border-2 ${
                status === 'not-attending' 
                  ? 'bg-stitch-surface-container-highest border-stitch-outline text-stitch-on-surface shadow-md scale-[1.02]' 
                  : 'bg-white border-stitch-outline-variant/10 text-stitch-on-surface-variant hover:bg-white/80'
              }`}
            >
              <span className="material-symbols-outlined text-3xl">close</span>
              <span className="font-body text-xs uppercase font-bold tracking-[0.15rem]">Borolmayman</span>
            </button>
          </div>
          
          <div className="space-y-4">
             <label className="text-[10px] uppercase font-bold text-stitch-primary tracking-[0.2rem] ml-1 block">Kelin-kuyovga tilaklar</label>
             <textarea 
               placeholder="Qalbingizdagi so'zlarni yozing..." 
               rows={4} 
               className="w-full bg-white rounded-3xl p-6 border border-stitch-outline-variant/20 focus:border-stitch-primary focus:outline-none transition-all font-body resize-none shadow-inner"
             ></textarea>
          </div>
          
          <button className="w-full bg-stitch-primary text-white py-6 rounded-full font-bold uppercase tracking-[0.3rem] shadow-2xl hover:bg-stitch-primary/90 transition-all active:scale-[0.98] mt-4">
            Tasdiqlash
          </button>
        </form>
      </section>
    </motion.main>
  );
};

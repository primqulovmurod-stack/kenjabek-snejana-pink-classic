'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Details: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-24 pb-32 px-6 max-w-screen-md mx-auto bg-stitch-surface text-stitch-on-surface min-h-[100dvh]"
    >
      <h2 className="font-headline text-5xl text-stitch-primary mb-12 leading-tight">Tadbir <br/><span className="italic font-normal text-stitch-on-surface">tafsilotlari</span></h2>
      <div className="grid grid-cols-1 gap-10">
        <div className="flex flex-col gap-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stitch-outline-variant/10 flex items-start gap-6 transition-transform hover:scale-[1.01]">
            <span className="material-symbols-outlined text-stitch-primary text-4xl">favorite</span>
            <div>
              <h3 className="font-headline text-2xl mb-1 text-stitch-on-surface">Nikoh marosimi</h3>
              <p className="text-stitch-on-surface-variant font-body">17:00 — 18:30</p>
            </div>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-stitch-outline-variant/10 flex items-start gap-6 transition-transform hover:scale-[1.01]">
            <span className="material-symbols-outlined text-stitch-primary text-4xl">restaurant</span>
            <div>
              <h3 className="font-headline text-2xl mb-1 text-stitch-on-surface">To'y oshi va kechki ovqat</h3>
              <p className="text-stitch-on-surface-variant font-body">19:00 — 22:00</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-[2.5rem] overflow-hidden bg-stitch-surface-container-low min-h-[350px] relative p-8 flex flex-col justify-end shadow-2xl group border border-stitch-outline-variant/10">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10"></div>
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA4Um73ePLLBN16N1k2jAHYO8s-JZmZosYV3sHhUC3EqDQmK6smKyhabgaRlt7rLaaqcTtHxpym5Y_84XYcE25cDGi_gXuUpNISW_COWgvaNPHEgD2ASmPcAtFX4nLCs2EZpK_GznBup-qG7jBwPHBFUCD2m7VQrsgAGeQ9FGM3rTZnBGnbT6ChghwnuaIzzs3JYQY_DsFDe-7p4bKo85FUAiL517r2QpnyAlhUAnwOvV3yB6t-tQ54EWNe4foPz9ns7Dwjw4Y180O4" 
            alt="Venue"
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="relative z-20 text-white space-y-2">
            <h2 className="font-headline text-4xl tracking-wide">Toshkent Grand Hall</h2>
            <p className="text-sm opacity-80 font-body tracking-wider uppercase">Yunusobod tumani, 4-mavze</p>
            <a 
               href="https://maps.google.com" 
               target="_blank" 
               rel="noopener noreferrer"
               className="inline-flex items-center gap-3 mt-6 bg-white/15 backdrop-blur-xl px-8 py-3 rounded-full border border-white/30 text-sm font-bold uppercase tracking-widest hover:bg-white/25 transition-all shadow-lg active:scale-95"
            >
              <span className="material-symbols-outlined text-lg">location_on</span>
              Lokatsiyani ko'rish
            </a>
          </div>
        </div>
      </div>
    </motion.main>
  );
};

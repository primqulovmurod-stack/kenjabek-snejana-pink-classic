'use client';

import React from 'react';
import { motion } from 'framer-motion';

export const Story: React.FC = () => {
  return (
    <motion.main
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      className="pt-24 pb-32 px-6 max-w-4xl mx-auto bg-stitch-surface text-stitch-on-surface min-h-[100dvh]"
    >
      <section className="mb-16 relative">
        <div className="absolute -top-8 -left-4 text-stitch-primary/10 font-headline text-[8rem] select-none">01</div>
        <h1 className="text-5xl md:text-7xl font-headline text-stitch-on-surface mb-8 relative z-10 leading-tight">
          Bizning <span className="italic text-stitch-primary font-normal">Hikoyamiz</span>
        </h1>
        <div className="flex flex-col md:flex-row gap-12 items-start mt-8">
          <div className="w-full md:w-1/2 space-y-6">
            <p className="text-lg leading-relaxed text-stitch-on-surface-variant font-body">
              Hammasi oddiygina uchrashuvdan boshlangan. Birinchi ko'rishdayoq biz bir-birimiz uchun yaralganimizni angladik. 
              Har bir kunimiz quvonch va baxtga to'la o'tdi.
            </p>
            <p className="text-lg leading-relaxed text-stitch-on-surface-variant font-body italic">
              "Sening kulging - mening dunyoyim."
            </p>
            <div className="mt-8 pt-8 border-t border-stitch-outline-variant/30">
              <span className="font-body text-[10px] uppercase font-bold text-stitch-primary mb-2 block tracking-widest">Taklif</span>
              <h2 className="text-2xl font-headline italic text-stitch-on-surface">Yulduzlar ostidagi va'da</h2>
            </div>
          </div>
          <div className="w-full md:w-1/2 rounded-[2rem] overflow-hidden shadow-2xl rotate-2">
            <img 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDiaRrceiII1dx3F9YFy2IsJQQ4QqKgZBROYtmphcGQN-iNZW0P2LiZSq1s950TCclIT648E0Aj91tF_4FeoHWK98OFYkueuPCkENqxi1XXYXStyletIxl__GeHrAGdsx4UNoxP8Nhc4QmPt56muZKuGYehkKEbbrK1WYjgMeMFeBvuOiET-w5w4Q3mSLD8Jl707I0zM5y_0N8bTlqRC98_eQAlA-I0WOIKxLs2axgG2fWt55XGiK-GyUxLT_ekZy7mFOu-5E-yaIPL" 
              alt="Story"
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </section>
    </motion.main>
  );
};

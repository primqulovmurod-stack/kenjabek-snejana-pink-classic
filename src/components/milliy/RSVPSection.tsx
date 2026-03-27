'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';

export function RSVPSection() {
  const [name, setName] = useState('');
  const [attending, setAttending] = useState<boolean | null>(null);
  const [wishes, setWishes] = useState('');

  return (
    <section className="w-full max-w-xl mx-auto px-6 py-12 font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="bg-milliy-background rounded-[40px] p-8 md:p-12 shadow-sm border border-milliy-primary/5"
      >
        <div className="space-y-10">
          {/* Name Input */}
          <div className="space-y-4">
            <label className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-milliy-primary uppercase">
              Sizning ismingiz
            </label>
            <input 
              type="text" 
              placeholder="Mehmon ismi"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full bg-transparent border-b border-milliy-primary/20 py-4 text-xl md:text-2xl font-light focus:outline-none focus:border-milliy-primary transition-colors placeholder:text-milliy-primary/30"
            />
          </div>

          {/* Attendance Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <button 
              onClick={() => setAttending(true)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 border ${
                attending === true 
                ? 'bg-white shadow-sm border-milliy-primary/20 ring-1 ring-milliy-primary/5' 
                : 'bg-white/40 border-transparent hover:bg-white/60 hover:border-milliy-primary/10'
              }`}
            >
              <div className="mb-3">
                <Check className={`w-6 h-6 ${attending === true ? 'text-milliy-primary' : 'text-milliy-primary/40'}`} strokeWidth={3} />
              </div>
              <span className="text-[10px] md:text-xs font-black tracking-widest text-milliy-primary uppercase">
                Jon deb boraman
              </span>
            </button>

            <button 
              onClick={() => setAttending(false)}
              className={`flex flex-col items-center justify-center p-6 rounded-xl transition-all duration-200 border ${
                attending === false 
                ? 'bg-white shadow-sm border-milliy-primary/20 ring-1 ring-milliy-primary/5' 
                : 'bg-white/40 border-transparent hover:bg-white/60 hover:border-milliy-primary/10'
              }`}
            >
              <div className="mb-3">
                <X className={`w-6 h-6 ${attending === false ? 'text-milliy-primary' : 'text-milliy-primary/40'}`} strokeWidth={3} />
              </div>
              <span className="text-[10px] md:text-xs font-black tracking-widest text-milliy-primary uppercase">
                Borolmayman
              </span>
            </button>
          </div>

          {/* Wishes Input */}
          <div className="space-y-4">
            <label className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-milliy-primary uppercase">
              Kelin-kuyovga tilaklar
            </label>
            <div className="relative">
              <textarea 
                placeholder="Qalbingizdagi so'zlarni yozing..."
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                rows={4}
                className="w-full bg-transparent border border-milliy-primary/20 rounded-3xl p-6 text-sm md:text-base focus:outline-none focus:border-milliy-primary transition-colors placeholder:text-milliy-primary/30 resize-none"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button 
            className="w-full bg-milliy-primary text-white py-4 rounded-xl text-sm font-bold tracking-[0.2em] uppercase hover:bg-milliy-primary/95 transition-all shadow-sm active:scale-[0.99] disabled:opacity-50"
          >
            Tasdiqlash
          </button>
        </div>
      </motion.div>
    </section>
  );
}

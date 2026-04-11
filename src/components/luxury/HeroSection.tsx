'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Navigation } from 'lucide-react';

// Animatsiya variantlari
const fadeUp = (delay = 0): any => ({
  initial: { opacity: 0, y: 60 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 0.9, ease: 'easeOut', delay },
});

const fadeLeft = (delay = 0): any => ({
  initial: { opacity: 0, x: 80 },
  whileInView: { opacity: 1, x: 0 },
  viewport: { once: true, margin: '-80px' },
  transition: { duration: 1, ease: 'easeOut', delay },
});

export function HeroSection({ groomName, brideName, date, time, locationName, locationAddress, locationUrl, description, isPreview = false, imageUrl }: { groomName?: string; brideName?: string; date?: string; time?: string; locationName?: string; locationAddress?: string; locationUrl?: string; description?: string; isPreview?: boolean; imageUrl?: string }) {
  const defaultImage = "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2000&auto=format&fit=crop";
  const mapsUrl = locationUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${locationName || ''} ${locationAddress || ''}`.trim())}`;

  return (
    <section className={`relative w-full ${isPreview ? 'min-h-0' : 'min-h-[95vh]'} bg-transparent flex flex-col items-center justify-center overflow-hidden font-sans pt-8 md:pt-20 pb-12 md:pb-20`}>
      
      {/* Animated Background Blobs */}
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.8 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
        className="absolute top-[5%] left-[0%] w-80 h-80 bg-[#F3E8FF] rounded-full blur-[100px] pointer-events-none"
      />
      <motion.div
        initial={{ scale: 0.5, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 0.6 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.3 }}
        className="absolute bottom-[10%] right-[5%] w-[400px] h-[400px] bg-[#F3E8FF] rounded-full blur-[100px] pointer-events-none"
      />

      {/* Decorative dots */}
      <div className="absolute top-[20%] left-[45%] w-32 h-32 opacity-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at center, #7E22CE 2px, transparent 2px)', backgroundSize: '16px 16px' }} />

      <div className={`relative z-10 w-full max-w-6xl mx-auto px-6 flex ${isPreview ? 'flex-col' : 'flex-col md:flex-row'} items-center justify-between gap-12`}>
        
        {/* Left Typography Side — staggered animations */}
        <div className={`w-full ${isPreview ? '' : 'md:w-1/2'} flex flex-col items-center ${isPreview ? '' : 'md:items-start md:text-left'} space-y-4 md:space-y-6 text-center`}>

          {/* Groom name */}
          <motion.h1
            {...fadeUp(0)}
            className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black text-[#0F172A] leading-[1.1] tracking-tight"
          >
            {groomName}
            <br className="hidden md:block" />
            {' '}
            <motion.span {...fadeUp(0.15)} className="text-2xl md:text-5xl text-[#64748B] font-medium mx-2">
              &amp;
            </motion.span>
            {' '}
            <br className="hidden md:block" />
            <motion.span {...fadeUp(0.3)} className="text-purple-700">
              {brideName}
            </motion.span>
          </motion.h1>

          {/* Description */}
          <motion.p {...fadeUp(0.4)} className={`${isPreview ? 'w-full' : 'max-w-md'} text-[#64748B] text-sm md:text-base leading-relaxed whitespace-pre-line break-all text-center ${isPreview ? '' : 'md:text-left'}`}>
            {description}
          </motion.p>

          {/* Location button */}
          <motion.a
            {...fadeUp(0.55)}
            href={mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-purple-700 text-white h-12 md:h-14 px-8 rounded-full font-bold text-sm hover:bg-purple-800 transition-colors shadow-lg shadow-purple-500/20 gap-3 w-full sm:w-max hover:-translate-y-1 transform duration-300"
          >
            <span>Xaritada ko&apos;rish</span>
            <Navigation className="w-4 h-4" strokeWidth={2} />
          </motion.a>

          {/* Date / Time */}
          <motion.div
            {...fadeUp(0.7)}
            className={`flex items-center gap-6 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-gray-100 w-full justify-center ${isPreview ? 'justify-center' : 'md:justify-start'}`}
          >
            <div className="text-center">
              <span className={`${isPreview ? 'text-lg' : 'font-extrabold text-2xl'} text-[#0F172A]`}>
                {date ? date.split('-').reverse().join('.') : '-'}
              </span>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">Sana</p>
            </div>
            <div className="w-[1px] h-10 bg-gray-200" />
            <div className="text-center">
              <span className={`${isPreview ? 'text-lg' : 'font-extrabold text-2xl'} text-[#0F172A]`}>{time}</span>
              <p className="text-gray-400 text-xs mt-1 uppercase tracking-widest font-semibold">Vaqt</p>
            </div>
          </motion.div>
        </div>

        {/* Right side image — slides in from right */}
        <motion.div
          {...fadeLeft(0.2)}
          className={`w-full ${isPreview ? '' : 'md:w-1/2'} mt-12 md:mt-0 relative flex justify-center`}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.1, ease: 'easeOut', delay: 0.35 }}
            className={`relative ${isPreview ? 'w-[200px] h-[300px]' : 'w-[300px] h-[400px] md:w-[400px] md:h-[500px] lg:w-[450px] lg:h-[600px]'} mx-auto overflow-hidden shadow-2xl bg-gray-100 rounded-[2rem] md:rounded-[3rem] lg:rounded-[4rem] border-8 border-white`}
          >
            <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url("${imageUrl || defaultImage}")` }} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

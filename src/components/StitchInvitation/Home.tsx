'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export const Home: React.FC = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 184,
    hours: 12,
    minutes: 45,
    seconds: 30,
  });

  useEffect(() => {
    // Target date: September 21, 2026
    const targetDate = new Date('2026-09-21T00:00:00');
    
    const updateTimer = () => {
      const now = new Date();
      const difference = targetDate.getTime() - now.getTime();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    updateTimer();
    const timer = setInterval(updateTimer, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <motion.main
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="relative min-h-[100dvh] pt-12 pb-28 px-6 max-w-md mx-auto bg-stitch-surface text-stitch-on-surface flex flex-col items-center"
    >
      <section className="relative z-10 mt-4 mb-12 w-full">
        <div className="aspect-[4/5] rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD_N7P8WXrSoxqdnGlfiVuNkiBmg1dJO4a418teSDNLnHVeuhVKzLwUqSws2vwvNld3DgKr9lWVu695cDpW5-Ma9JSVQU_ssrtj9GAVkY-XDjf7MEpYgRRyLNHVoK-3PVLNS3evObs4C7X4Hrn75Hl1A3Quv_E2dB-4xssRlIO1E-dBnxPQYpSZ2E-MlCsD1IDD3DDk8NA-brPrW92WpLPV4Wwt5XYo2pBxA7L7LbcVcYvuok9bV8BT-2wsyHkRGmuUZFsMHYX5DpCq" 
            alt="Couple Hero"
            className="w-full h-full object-cover grayscale-[20%] sepia-[10%]" 
          />
        </div>
        <div className="absolute -bottom-6 -right-2 w-28 h-28 border-2 border-stitch-secondary/20 rounded-full flex items-center justify-center bg-white/70 backdrop-blur-sm shadow-lg">
          <span className="font-headline italic text-stitch-primary text-sm font-semibold">Forever</span>
        </div>
      </section>

      <section className="text-center space-y-4 mb-12 w-full">
        <p className="font-body text-stitch-primary uppercase tracking-[0.2rem] text-[10px] font-bold">Biz Baxtlimiz</p>
        <h2 className="font-headline text-5xl text-stitch-on-surface leading-tight">
          Alisher <span className="text-stitch-primary italic">&amp;</span> Madina
        </h2>
        <div className="inline-block px-8 py-2 border-y-[0.5px] border-stitch-outline-variant/30">
          <p className="font-body text-stitch-on-surface-variant uppercase text-xs tracking-[0.15rem]">Sentabr 21, 2026</p>
        </div>
      </section>

      <section className="mb-8 bg-stitch-surface-container-low p-8 rounded-[2rem] w-full border border-stitch-outline-variant/10">
        <h3 className="font-headline text-lg text-stitch-primary text-center mb-6">Tantanaga oz qoldi</h3>
        <div className="grid grid-cols-4 gap-2 text-center font-headline">
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{timeLeft.days}</span>
            <span className="text-[10px] uppercase font-body text-stitch-on-surface-variant opacity-70">Kun</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{String(timeLeft.hours).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-body text-stitch-on-surface-variant opacity-70">Soat</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{String(timeLeft.minutes).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-body text-stitch-on-surface-variant opacity-70">Daqiqa</span>
          </div>
          <div className="flex flex-col">
            <span className="text-2xl font-bold">{String(timeLeft.seconds).padStart(2, '0')}</span>
            <span className="text-[10px] uppercase font-body text-stitch-on-surface-variant opacity-70">Soniya</span>
          </div>
        </div>
      </section>
    </motion.main>
  );
};

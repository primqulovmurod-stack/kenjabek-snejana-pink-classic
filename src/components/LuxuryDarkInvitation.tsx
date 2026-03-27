'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { Play, Pause, MapPin, Navigation, CreditCard, ChevronDown } from 'lucide-react';

interface LuxuryDarkInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  imageUrl?: string;
  musicUrl?: string;
}

export default function LuxuryDarkInvitation({
  groomName = "Xurshidbek",
  brideName = "Mohinur",
  date = "20 Iyun 2026",
  time = "18:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Surxondaryo viloyati, Sho'rchi tumani",
  imageUrl = "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?q=80&w=1000",
  musicUrl = "/assets/music.mp3"
}: LuxuryDarkInvitationProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const handleUnlock = () => {
    setIsUnlocked(true);
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Gold/Bronze Palette
  const gold = "#C5A059";
  const darkBg = "radial-gradient(circle at center, #1c1917 0%, #0c0a09 50%, #000000 100%)";

  return (
    <div 
      ref={containerRef}
      className={`relative w-full min-h-screen text-white overflow-x-hidden selection:bg-[#C5A059]/30`}
      style={{ background: "#000" }}
    >
      <audio ref={audioRef} src={musicUrl} loop />

      {/* Lock Screen */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.76, 0, 0.24, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0C0C0C]"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut" }}
              className="relative text-center px-12"
            >
              <div className="relative w-48 h-48 mb-12 mx-auto">
                {/* Dial Effect */}
                {[...Array(60)].map((_, i) => (
                  <motion.div
                    key={i}
                    className="absolute top-1/2 left-1/2 w-[1px] h-3 bg-[#C5A059]/20"
                    style={{
                      transformOrigin: "0 -90px",
                      transform: `translate(-50%, -50%) rotate(${i * 6}deg) translateY(-90px)`,
                    }}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.05 }}
                  />
                ))}
                
                <button 
                  onClick={handleUnlock}
                  className="absolute inset-0 flex flex-col items-center justify-center group"
                >
                  <div className="text-4xl font-serif tracking-tighter mb-1 italic">
                    {groomName[0]} <span className="text-[#C5A059] not-italic">&</span> {brideName[0]}
                  </div>
                  <div className="w-8 h-[1px] bg-[#C5A059]/40 mb-2" />
                  <span className="text-[8px] tracking-[0.4em] uppercase text-[#C5A059]/60 group-hover:text-[#C5A059] transition-colors">Ochish</span>
                </button>
              </div>

              <h2 className="text-[#C5A059] text-[10px] tracking-[0.8em] font-bold uppercase mb-4">Taklifnoma</h2>
              <p className="text-white/20 text-[9px] tracking-[0.3em] uppercase max-w-[200px] mx-auto leading-relaxed">
                Siz uchun maxsus tayyorlangan raqamli taklifnoma
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Content */}
      <main className={`relative transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
        {/* Navigation & Music */}
        <div className="fixed top-0 left-0 w-full z-50 flex justify-between items-center p-8 pointer-events-none">
          <div className="flex items-center gap-4 pointer-events-auto">
            <button 
              onClick={toggleMusic}
              className="w-10 h-10 rounded-full border border-white/10 backdrop-blur-md flex items-center justify-center hover:bg-white/5 transition-all"
            >
              {isPlaying ? <Pause size={14} className="text-[#C5A059]" /> : <Play size={14} className="text-[#C5A059] translate-x-0.5" />}
            </button>
          </div>
          <div className="hidden md:flex items-center gap-8 pointer-events-auto">
            {['HOME', 'EVENT', 'VENUE', 'GIFT'].map(item => (
              <button key={item} className="text-[9px] tracking-[0.4em] text-white/40 hover:text-white transition-colors">{item}</button>
            ))}
          </div>
          <div className="flex items-center gap-4 pointer-events-auto">
            <div className="text-[10px] font-serif tracking-tighter text-[#C5A059]">THE LUXE</div>
          </div>
        </div>

        {/* Hero Section */}
        <section className="relative min-h-screen flex flex-col items-center justify-center px-6 overflow-hidden pt-20">
          {/* Subtle radial dial background */}
          <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-10">
             <div className="w-[150%] aspect-square rounded-full border border-[#C5A059]/20 animate-spin-slow" />
             <div className="absolute w-[120%] aspect-square rounded-full border border-[#C5A059]/10 animate-spin-slow-reverse" />
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="relative z-10 text-center space-y-12"
          >
            <div className="space-y-4">
              <p className="text-[#C5A059] text-[10px] tracking-[0.6em] uppercase font-bold">Nikoh Oqshomi</p>
              <h1 className="text-7xl md:text-9xl font-serif tracking-tighter leading-none flex flex-col">
                <span className="opacity-90">{groomName}</span>
                <span className="text-[#C5A059] text-3xl md:text-5xl italic font-light my-2">&</span>
                <span className="opacity-90">{brideName}</span>
              </h1>
            </div>

            {/* Central Dial Image */}
            <div className="relative w-64 h-64 md:w-80 md:h-80 mx-auto">
               <div className="absolute inset-0 rounded-full border border-[#C5A059]/30" />
               <div className="absolute inset-[10px] rounded-full border border-[#C5A059]/10" />
               
               {/* Animated dots around the circle */}
               {[...Array(12)].map((_, i) => (
                 <div
                   key={i}
                   className="absolute top-1/2 left-1/2 w-1 h-1 bg-[#C5A059]/40 rounded-full"
                   style={{
                     transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-145px)`,
                   }}
                 />
               ))}

               <div className="absolute inset-[15px] rounded-full overflow-hidden">
                  <Image 
                    src={imageUrl} 
                    alt="Couple" 
                    fill 
                    className="object-cover grayscale hover:grayscale-0 transition-all duration-1000 scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
               </div>
            </div>

            <div className="space-y-6 pt-12">
               <h2 className="text-3xl md:text-4xl font-serif italic text-white/90">The Purity of Love</h2>
               <p className="text-white/40 text-[10px] md:text-sm max-w-sm mx-auto leading-relaxed tracking-widest font-light">
                 Yulduzlar guvohligida, qalbimiz amri bilan boshlayotgan ushbu yangi hayotimizning ilk sahifasida sizni ko'rishdan xursandmiz.
               </p>
            </div>

            <motion.div 
               animate={{ y: [0, 10, 0] }}
               transition={{ duration: 2, repeat: Infinity }}
               className="pt-12 text-[#C5A059]/40"
            >
               <ChevronDown size={24} />
            </motion.div>
          </motion.div>
          
          <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-black to-transparent" />
        </section>

        {/* Date & Details Section */}
        <section className="relative py-32 px-6 flex flex-col items-center justify-center text-center space-y-20">
           <div className="space-y-4">
              <p className="text-[#C5A059] text-[10px] tracking-[0.5em] uppercase font-bold">Save The Date</p>
              <div className="w-12 h-px bg-[#C5A059]/20 mx-auto" />
           </div>

           <div className="grid grid-cols-1 md:grid-cols-3 gap-12 w-full max-w-5xl items-center">
              <div className="space-y-2">
                 <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Kun</p>
                 <p className="text-5xl font-serif text-white/90">{date.split(' ')[0]} {date.split(' ')[1]}</p>
              </div>
              <div className="md:border-x border-white/10 px-6 py-4">
                 <p className="text-[#C5A059] text-sm tracking-[0.8em] uppercase font-bold mb-4 italic">Shanba</p>
                 <p className="text-8xl font-serif text-white tracking-widest">{date.split(' ')[2]}</p>
              </div>
              <div className="space-y-2">
                 <p className="text-white/30 text-[10px] tracking-[0.3em] uppercase">Vaqt</p>
                 <p className="text-5xl font-serif text-white/90">{time}</p>
              </div>
           </div>

           <div className="max-w-md mx-auto p-12 bg-white/5 backdrop-blur-xl rounded-[3rem] border border-white/10 shadow-2xl space-y-8">
              <p className="text-white/70 text-sm font-light leading-relaxed font-cormorant italic italic">
                "Ikki qalbning birlashishi - bu dunyodagi eng buyuk mo'jizalardan biridir. Ushbu tantanali kunda sizning ishtirokingiz bizga quvonch bag'ishlaydi."
              </p>
              <div className="flex justify-center gap-3">
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/60" />
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/30" />
                 <div className="w-1.5 h-1.5 rounded-full bg-[#C5A059]/10" />
              </div>
           </div>
        </section>

        {/* Venue Section */}
        <section className="relative py-32 px-6 overflow-hidden">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-16">
              <motion.div 
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="w-full md:w-1/2 relative aspect-[4/5] rounded-[3rem] overflow-hidden group shadow-2xl"
              >
                 <Image 
                   src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2000" 
                   alt="Venue" 
                   fill 
                   className="object-cover group-hover:scale-105 transition-transform duration-2000"
                 />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                 <div className="absolute bottom-10 left-10 space-y-2">
                    <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">Marosim Joyi</p>
                    <h3 className="text-4xl font-serif text-white">{locationName}</h3>
                 </div>
              </motion.div>

              <div className="w-full md:w-1/2 space-y-10 text-left">
                 <div className="space-y-4">
                    <MapPin className="text-[#C5A059] w-8 h-8" strokeWidth={1.5} />
                    <h2 className="text-5xl font-serif text-white tracking-tight">Qayerda ko'rishamiz?</h2>
                    <p className="text-white/40 text-sm max-w-sm leading-relaxed tracking-wider font-light">
                      {locationAddress}
                    </p>
                 </div>

                 <div className="flex flex-col sm:flex-row gap-4">
                    <a href="#" className="flex-1 h-16 bg-[#C5A059] text-black rounded-2xl flex items-center justify-center gap-3 font-bold text-xs tracking-[0.2em] uppercase hover:bg-[#d4b47a] transition-all shadow-xl shadow-[#C5A059]/10">
                       <Navigation size={18} />
                       Google Maps
                    </a>
                    <a href="#" className="flex-1 h-16 bg-white/5 border border-white/10 text-white rounded-2xl flex items-center justify-center gap-3 font-bold text-xs tracking-[0.2em] uppercase hover:bg-white/10 transition-all">
                       <MapPin size={18} />
                       Yandex Maps
                    </a>
                 </div>
              </div>
           </div>
        </section>

        {/* Gift Section */}
        <section className="relative py-32 px-6 flex flex-col items-center gap-16">
           <div className="text-center space-y-4">
              <p className="text-[#C5A059] text-[10px] tracking-[0.4em] uppercase font-bold">To'yona</p>
              <h2 className="text-5xl font-serif text-white">Yaxshi niyat va Tabriklar</h2>
              <p className="text-white/40 text-sm max-w-sm mx-auto leading-relaxed tracking-widest font-light">
                Agarda bizni masofadan turib tabriklamoqchi bo'lsangiz, ushbu karta raqamini ishlatishingiz mumkin:
              </p>
           </div>

           <motion.div 
             whileHover={{ rotateY: 5, rotateX: -2, z: 50 }}
             className="relative w-full max-w-md aspect-[1.6/1] bg-gradient-to-br from-neutral-900 to-black rounded-[2.5rem] border border-white/10 p-10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] overflow-hidden preserve-3d"
           >
              <div className="absolute top-0 right-0 p-10 opacity-5">
                 <CreditCard size={120} className="text-white" />
              </div>
              <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-[#C5A059]/10 rounded-full blur-[80px]" />

              <div className="relative h-full flex flex-col justify-between">
                 <div className="flex justify-between items-start">
                    <div className="w-12 h-10 bg-gradient-to-tr from-[#C5A059] to-[#ebd4a5] rounded-lg" />
                    <p className="text-white/30 text-[8px] tracking-[0.3em] uppercase font-bold">Uzcard / Humo</p>
                 </div>
                 
                 <div className="space-y-6">
                    <div className="space-y-1">
                       <p className="text-white/20 text-[8px] tracking-[0.2em] uppercase">Karta raqami</p>
                       <p className="text-2xl font-mono text-white/90 tracking-[0.1em]">9860 **** **** 1234</p>
                    </div>
                    <div className="flex justify-between items-end">
                       <div className="space-y-1">
                          <p className="text-white/20 text-[8px] tracking-[0.2em] uppercase">Karta egasi</p>
                          <p className="text-lg font-serif text-white/80 uppercase">{groomName}</p>
                       </div>
                       <button className="h-10 px-6 bg-white/5 border border-white/10 rounded-full text-[8px] font-bold uppercase tracking-[0.2em] hover:bg-white/10 transition-all">Nusxa olish</button>
                    </div>
                 </div>
              </div>
           </motion.div>
        </section>

        {/* Footer */}
        <footer className="relative py-32 px-6 text-center border-t border-white/5">
           <div className="space-y-12">
              <div className="text-6xl text-[#C5A059]/20 font-serif italic">❦</div>
              <p className="text-4xl md:text-5xl font-serif italic text-white/90">Sizni intiqlik bilan kutamiz!</p>
              
              <div className="space-y-8 pt-12">
                 <div className="w-12 h-[1px] bg-[#C5A059]/20 mx-auto" />
                 <div className="space-y-4">
                    <p className="text-[#C5A059] text-[10px] tracking-[0.6em] uppercase font-bold">onlinetaklifnoma.uz</p>
                    <p className="text-white/20 text-[8px] uppercase tracking-widest font-light">Milliy va Zamonaviy Raqamli Taklifnomalar</p>
                 </div>
              </div>
           </div>
        </footer>
      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes spin-slow-reverse {
          from { transform: rotate(360deg); }
          to { transform: rotate(0deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 60s linear infinite;
        }
        .animate-spin-slow-reverse {
          animation: spin-slow-reverse 40s linear infinite;
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
      `}</style>
    </div>
  );
}

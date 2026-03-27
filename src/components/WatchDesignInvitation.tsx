'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'framer-motion';
import { MapPin, Navigation, Clock, Calendar, CreditCard, ChevronDown, Volume2, VolumeX, Menu, X, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';

interface WatchDesignInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  imageUrl?: string;
  musicUrl?: string;
}

export default function WatchDesignInvitation({
  groomName = "Xurshidbek",
  brideName = "Mohinur",
  date = "20 Iyun 2026",
  time = "18:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Surxondaryo viloyati, Sho'rchi tumani",
  imageUrl = "https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg",
  musicUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-MP3-File.mp3"
}: WatchDesignInvitationProps) {
  const [isUnlocked, setIsUnlocked] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
      stiffness: 100,
      damping: 30,
      restDelta: 0.001
  });

  const handleUnlock = () => {
    setIsUnlocked(true);
    if (musicUrl && audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const toggleMusic = () => {
    if (musicUrl && audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(e => console.log('Playback error:', e));
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-black text-white selection:bg-[#D4AF37]/30 font-sans overflow-x-hidden antialiased"
      style={{ 
        background: 'radial-gradient(circle at center, #1a1410 0%, #000000 100%)'
      }}
    >
      {musicUrl && (
        <audio 
          ref={audioRef} 
          loop 
          preload="auto"
        >
          <source src={musicUrl} type="audio/mpeg" />
        </audio>
      )}

      {/* Luxury Navigation Bar */}
      <nav className="fixed top-0 left-0 w-full z-50 px-6 py-6 flex justify-between items-center mix-blend-difference">
        <div className="flex flex-col items-start px-2">
           <span className="text-[10px] tracking-[0.5em] font-bold text-white uppercase leading-none mb-1">Taklifnoma</span>
           <span className="text-[8px] tracking-[0.3em] font-medium text-[#D4AF37] uppercase opacity-70">2026-YIL NASHRI</span>
        </div>
        
        <div className="absolute left-1/2 -translate-x-1/2 hidden md:block">
            <span className="text-xl font-serif italic tracking-[0.2em]">TAKLIFNOMA</span>
        </div>

        <div className="flex items-center gap-6 px-2">
          <button 
            onClick={toggleMusic}
            className="text-white p-2 border border-white/5 rounded-full hover:bg-white/10 transition-all backdrop-blur-md"
          >
            {isPlaying ? <Volume2 size={12} /> : <VolumeX size={12} />}
          </button>
          <div className="h-4 w-px bg-white/10 hidden sm:block"></div>
          <button className="text-white p-2 border border-white/5 rounded-full hover:bg-white/10 transition-all backdrop-blur-md">
            <Menu size={12} />
          </button>
        </div>
      </nav>

      {/* Opening Screen (The Watch Box) */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.5, ease: [0.22, 1, 0.36, 1] } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black"
            style={{ 
                background: 'radial-gradient(circle at center, #1a1410 0%, #000000 100%)'
            }}
          >
             {/* Background Dial Pattern */}
             <div className="absolute inset-0 flex items-center justify-center opacity-20 pointer-events-none">
                <div className="relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] rounded-full border border-white/5 flex items-center justify-center">
                    {Array.from({ length: 60 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`absolute h-full w-[1px] origin-center ${i % 5 === 0 ? 'bg-[#D4AF37]/40 w-[2px]' : 'bg-white/5'}`} 
                            style={{ transform: `rotate(${i * 6}deg)` }}
                        />
                    ))}
                    <div className="w-[85%] h-[85%] rounded-full border border-white/5"></div>
                </div>
             </div>

             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               transition={{ duration: 1.5, ease: "easeOut" }}
               className="relative z-10 text-center space-y-16"
             >
                <div className="space-y-6">
                    <span className="text-[10px] tracking-[1.2em] text-[#D4AF37] uppercase font-bold block mb-4">Lahzalarning Soffigi</span>
                    <h2 className="text-5xl xs:text-6xl md:text-8xl font-serif tracking-tighter italic text-white leading-[0.8]">
                        {groomName} <br />
                        <span className="text-3xl md:text-5xl opacity-40 block my-4">&</span>
                        {brideName}
                    </h2>
                </div>

                <div className="flex flex-col items-center gap-10">
                    <div className="w-px h-20 bg-gradient-to-b from-[#D4AF37] to-transparent"></div>
                    <button 
                        onClick={handleUnlock}
                        className="group relative px-14 py-4 rounded-full bg-[#D4AF37] text-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-[0_10px_40px_rgba(212,175,55,0.3)]"
                    >
                        <span className="relative z-10 text-[11px] font-bold tracking-[0.5em] uppercase">Ochish</span>
                    </button>
                    <p className="text-[8px] text-white/20 tracking-[0.4em] uppercase font-bold">Taklifnomani ko&apos;rish</p>
                </div>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`transition-opacity duration-2000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Dynamic Hero Section (Zenith Chronos Layout) */}
        <section className="relative min-h-screen w-full flex flex-col md:flex-row items-center justify-between pt-32 pb-20 px-8 md:px-24 overflow-hidden">
          
          {/* Background Watermark */}
          <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none select-none">
             <span className="text-[25vw] font-serif italic tracking-tighter leading-none">NIKOH</span>
          </div>

          {/* Left Text Content */}
          <div className="relative z-10 w-full md:w-1/2 flex flex-col items-start gap-12 text-left mb-20 md:mb-0">
             <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={isUnlocked ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 1.5, delay: 0.8 }}
                className="space-y-8"
             >
                <div className="space-y-2">
                    <span className="text-[10px] tracking-[0.8em] text-[#D4AF37] font-bold uppercase block">Abadiyatning Boshlanishi</span>
                    <h1 className="text-5xl md:text-8xl font-serif tracking-tighter leading-[0.9] italic text-white pt-4">
                       {groomName} <br />
                       <span className="text-[#D4AF37] opacity-60 italic pr-4">&</span> {brideName}
                    </h1>
                </div>

                <div className="space-y-4">
                    <p className="text-xl md:text-2xl font-serif text-[#D4AF37] italic opacity-80">{date}</p>
                    <p className="text-sm font-light text-white/40 tracking-widest uppercase">{locationName}</p>
                </div>
                
                <div className="pt-8 flex flex-col sm:flex-row gap-6">
                    <button className="px-12 py-4 rounded-full bg-[#D4AF37] text-black text-[10px] font-bold tracking-[0.4em] uppercase shadow-[0_10px_30px_rgba(212,175,55,0.2)] hover:bg-white transition-all">
                       MANZILNI KO&apos;RISH
                    </button>
                    <button className="px-12 py-4 rounded-full border border-white/10 text-white text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-white/5 transition-all">
                       ESLATMA QO&apos;SHISH
                    </button>
                </div>
             </motion.div>
          </div>

          {/* Right Watch Face Visual */}
          <div className="relative z-10 w-full md:w-1/2 h-[400px] md:h-[600px] flex items-center justify-center">
             
             {/* Suble Glow */}
             <div className="absolute w-[400px] h-[400px] bg-[#D4AF37]/5 rounded-full blur-[100px]"></div>

             {/* 360 Dial Frame */}
             <div className="relative w-[320px] h-[320px] md:w-[500px] md:h-[500px] flex items-center justify-center">
                {/* Visual Ticks */}
                <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-20"
                >
                    {Array.from({ length: 120 }).map((_, i) => (
                        <div 
                            key={i} 
                            className={`absolute h-full w-px origin-center ${i % 10 === 0 ? 'bg-[#D4AF37] w-[2px]' : 'bg-white/20'}`} 
                            style={{ transform: `rotate(${i * 3}deg)` }}
                        >
                            <div className="h-4 w-full"></div>
                        </div>
                    ))}
                </motion.div>

                {/* Left/Right Arrows */}
                <div className="absolute w-full px-[-20px] md:px-[-40px] flex justify-between items-center z-20">
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all transform -translate-x-6 md:-translate-x-12">
                        <ChevronLeft size={24} strokeWidth={1} />
                    </button>
                    <button className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-white/40 hover:text-white hover:border-white transition-all transform translate-x-6 md:translate-x-12">
                        <ChevronRight size={24} strokeWidth={1} />
                    </button>
                </div>

                {/* Main Content Image Circle */}
                <motion.div 
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={isUnlocked ? { scale: 1, opacity: 1 } : {}}
                  transition={{ duration: 1.5, delay: 1 }}
                  className="relative w-[85%] h-[85%] rounded-full overflow-hidden border border-[#D4AF37]/20 p-2 bg-gradient-to-tr from-white/10 to-transparent"
                >
                    <div className="absolute inset-0 bg-[#D4AF37]/5 mix-blend-overlay"></div>
                    <img 
                      src={imageUrl}
                      alt="Product"
                      className="w-full h-full object-cover rounded-full contrast-[1.1] brightness-[0.9] grayscale-[0.2]"
                    />
                </motion.div>
             </div>
          </div>
        </section>

        {/* Technical Specifications (Event Details) */}
        <section className="py-32 md:py-40 px-6 relative bg-black/50 border-t border-white/5 overflow-hidden">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-0 border border-white/5 divide-y lg:divide-y-0 lg:divide-x divide-white/5">
                    
                    <div className="p-12 space-y-8 bg-black/20">
                        <div className="space-y-4">
                            <span className="text-[#D4AF37] text-[9px] tracking-[0.8em] font-bold uppercase block">TEXNIK TAVSIF №01</span>
                            <h2 className="text-4xl font-serif italic leading-tight">Abadiy Lahza San&apos;ati</h2>
                        </div>
                        <p className="text-sm font-light text-white/40 leading-relaxed italic">
                            Eng mukammal mexanizm kabi, bizning muhabbatimiz ham aniqlik va sadoqat bilan shakllandi. Sizni yangi hayotimiz poydevori bo&apos;lmish nikoh oqshomimizda kutib qolamiz.
                        </p>
                    </div>

                    <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2">
                        <SpecItemBox 
                            label="KALENDAR" 
                            title={date} 
                            description="SHANBA • 2026-YIL" 
                            highlight={true} 
                        />
                        <SpecItemBox 
                            label="NIKOH OQSHOMI" 
                            title={time} 
                            description="TANTANALI ZIYOFAT" 
                        />
                        <SpecItemBox 
                            label="KOORDINATALAR" 
                            title={locationName} 
                            description="SHO'RCHI TUMANI" 
                        />
                        <SpecItemBox 
                            label="HOLATI" 
                            title="TAYYOR" 
                            description="MAROSIMGA TAYYORLIK" 
                        />
                    </div>
                </div>
            </div>
        </section>

        {/* Maps Section */}
        <section className="py-24 md:py-40 px-6 bg-black">
            <div className="max-w-7xl mx-auto space-y-20">
                <div className="flex flex-col md:flex-row justify-between items-end gap-10">
                    <div className="space-y-4">
                        <span className="text-[#D4AF37] text-[10px] tracking-[0.8em] font-bold uppercase block">MANZIL</span>
                        <h2 className="text-4xl md:text-7xl font-serif italic text-white/90">{locationName}</h2>
                        <p className="text-white/30 text-sm tracking-widest">{locationAddress}</p>
                    </div>
                    <a href="https://maps.google.com" target="_blank" className="px-12 py-5 bg-white text-black text-[10px] font-bold tracking-[0.4em] uppercase hover:bg-[#D4AF37] transition-all rounded-full shadow-2xl">
                        XARITANI OCHISH
                    </a>
                </div>

                <div className="relative w-full aspect-[21/9] grayscale contrast-[1.2] invert opacity-40 hover:opacity-100 hover:grayscale-0 hover:invert-0 transition-all duration-1000 border border-white/5 rounded-2xl overflow-hidden">
                    <iframe 
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6286.888942566946!2d67.7857508586914!3d38.013416346030404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b56840f87c9dd7%3A0x41895077daa18e54!2sShurchi%2C%20Surxondaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1774416136626!5m2!1sen!2s"
                        width="100%" 
                        height="100%" 
                        style={{ border: 0 }} 
                        allowFullScreen 
                        loading="lazy" 
                    />
                </div>
            </div>
        </section>

        {/* Gift Section */}
        <section className="py-40 px-6 bg-transparent relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[#1a1410]/20 blur-[150px] rounded-full pointer-events-none"></div>
            
            <div className="max-w-3xl mx-auto text-center space-y-16 relative z-10">
                 <div className="space-y-6">
                    <span className="text-[#D4AF37] text-[10px] tracking-[0.8em] font-bold uppercase block">TO&apos;YONA UCHUN</span>
                    <h2 className="text-4xl md:text-6xl font-serif italic">To&apos;yona Harakati</h2>
                    <p className="text-white/40 text-sm italic font-light leading-relaxed">
                        Sizning tashrifingiz biz uchun eng go&apos;zal sovg&apos;adir. <br />
                        Masofadan tabriklash istagida bo&apos;lganlar uchun maxsus ma&apos;lumotlar:
                    </p>
                 </div>

                 <div className="bg-black/40 backdrop-blur-3xl border border-white/5 p-12 rounded-[2rem] text-left relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-[#D4AF37]/5 blur-[80px] group-hover:bg-[#D4AF37]/10 transition-colors"></div>
                    
                    <div className="relative z-10 flex flex-col gap-12">
                        <div className="flex justify-between items-center">
                            <span className="text-[10px] font-bold tracking-[0.4em] text-white/30 uppercase">Karta Turi: UZCARD PREMIUM</span>
                            <CreditCard className="text-[#D4AF37] opacity-40" size={24} />
                        </div>

                        <div className="space-y-10">
                            <div>
                                <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 mb-3 uppercase">HISOBA RAQAMI</p>
                                <p className="text-3xl md:text-4xl font-mono tracking-[0.2em] text-white/90">9860 1234 •••• 5678</p>
                            </div>
                            
                            <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                                <div>
                                    <p className="text-[9px] font-bold tracking-[0.5em] text-white/20 mb-2 uppercase">EGASI</p>
                                    <p className="text-2xl font-serif italic text-[#D4AF37]">{groomName} P.</p>
                                </div>
                                <button 
                                    onClick={() => {
                                        navigator.clipboard.writeText("9860123456785678");
                                        alert("Nusxalandi!");
                                    }}
                                    className="w-full md:w-auto px-12 py-4 bg-[#D4AF37] text-black text-[11px] font-bold tracking-[0.4em] uppercase rounded-full shadow-lg hover:bg-white transition-all transform active:scale-95"
                                >
                                    NUSXALASH
                                </button>
                            </div>
                        </div>
                    </div>
                 </div>
            </div>
        </section>

        {/* Footer */}
        <footer className="py-40 px-6 bg-transparent text-center space-y-24">
            <div className="space-y-8">
                <div className="w-20 h-20 rounded-full border border-[#D4AF37]/50 flex items-center justify-center mx-auto bg-black/50">
                    <span className="text-2xl font-serif italic text-[#D4AF37]">{groomName[0]}{brideName[0]}</span>
                </div>
                <h2 className="text-5xl md:text-8xl font-serif italic text-white/10 leading-none">Tantanali Marosim</h2>
            </div>
            
            <div className="flex items-center justify-center gap-10 text-[#D4AF37] text-[10px] tracking-[1em] font-bold uppercase opacity-40">
                <span>ANIQLIK</span>
                <span>HASHAMAT</span>
                <span>ABADIYAT</span>
            </div>

            <div className="pt-32 flex flex-col items-center gap-12">
                <div className="text-center space-y-6 max-w-lg">
                    <p className="text-[11px] tracking-[0.5em] text-[#D4AF37] font-bold uppercase italic">TAKILFNOMA BUYURTMA QILISH UCHUN</p>
                    <h3 className="text-3xl md:text-5xl font-serif italic text-white/90">Siz ham o&apos;z taklifnomangizni yarating</h3>
                    <p className="text-white/30 text-sm italic font-light">Biz har bir juftlik uchun takrorlanmas va hashamatli raqamli taklifnomalar yaratamiz.</p>
                </div>
                
                <a 
                    href="tel:+998915930833" 
                    className="group relative px-16 py-5 rounded-full bg-white text-black overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-2xl"
                >
                    <span className="relative z-10 text-[12px] font-bold tracking-[0.4em] uppercase">HOZIR BUYURTMA QILING</span>
                </a>

                <div className="text-center space-y-4 pt-10">
                    <p className="text-[10px] tracking-[0.4em] text-white/20 font-bold uppercase">BOG&apos;LANISH</p>
                    <a href="tel:+998915930833" className="text-2xl font-serif hover:text-[#D4AF37] transition-all">+998 91 593 0833</a>
                </div>
            </div>

            <div className="pt-20 space-y-12">
                <div className="space-y-4">
                    <p className="text-[9px] tracking-[0.6em] text-white/20 font-bold uppercase italic">Barcha huquqlar himoyalangan</p>
                    <p className="text-xl font-serif italic opacity-30">© 2026 TAKLIFNOMA.AI</p>
                </div>
            </div>
        </footer>

      </main>

      <style jsx global>{`
        body {
            overscroll-behavior: none;
            background-color: black;
        }
        ::selection {
            background: #D4AF37;
            color: black;
        }
      `}</style>
    </div>
  );
}

const SpecItemBox = ({ label, title, description, highlight = false }: { label: string, title: string, description: string, highlight?: boolean }) => (
    <div className={`p-12 space-y-6 transition-all border-b md:border-b-0 border-white/5 hover:bg-white/[0.02] cursor-default ${highlight ? 'bg-white/[0.01]' : ''}`}>
        <div className="flex justify-between items-center">
            <span className="text-[9px] tracking-[0.6em] font-bold text-white/20 uppercase">{label}</span>
            <div className={`w-1 h-1 rounded-full ${highlight ? 'bg-[#D4AF37]' : 'bg-white/10'}`}></div>
        </div>
        <div className="space-y-2">
            <p className="text-2xl md:text-3xl font-serif italic text-white/90">{title}</p>
            <p className="text-[10px] tracking-[0.3em] font-medium text-[#D4AF37] opacity-60 uppercase">{description}</p>
        </div>
    </div>
);

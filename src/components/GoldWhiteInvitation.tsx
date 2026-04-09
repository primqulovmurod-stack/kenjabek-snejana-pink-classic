'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  CreditCard, 
  ChevronDown, 
  Volume2, 
  VolumeX,
  Heart,
  Music,
  MailOpen
} from 'lucide-react';

interface GoldWhiteInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  locationUrl?: string;
  imageUrl?: string;
  musicUrl?: string;
  cardNumber?: string;
  cardName?: string;
  isPreview?: boolean;
  isMuted?: boolean;
}

const goldText = "bg-clip-text text-transparent bg-gradient-to-b from-[#B8860B] via-[#FFD700] to-[#B8860B]";
const goldGradient = "bg-gradient-to-br from-[#B8860B] via-[#FFD700] to-[#DAA520]";

export default function GoldWhiteInvitation({
  groomName = "Kenjabek",
  brideName = "Snejana",
  date = "24 - APREL - 2026",
  time = "19:00",
  locationName = "Demir (Asr)",
  locationAddress = "Sho'rchi tumani",
  locationUrl = "https://www.google.com/maps/place/ASR+Wedding+Hall/@40.1490597,67.8229612,20.75z/data=!4m6!3m5!1s0x38b2969244164953:0xcf441bf7b030ea16!8m2!3d40.1490952!4d67.8228464!16s%2Fg%2F11h9w32rg7!5m1!1e2?entry=ttu",
  imageUrl = "https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg",
  musicUrl = "/assets/die_with_a_smile.mp3",
  cardNumber = "9860 6004 0356 5382",
  cardName = "Kenjabek",
  isPreview = false,
  isMuted = false
}: GoldWhiteInvitationProps) {
  const [isOpened, setIsOpened] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    if (isPreview) return;
    if (!isOpened) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpened, isPreview]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.muted = isMuted;
      if (isMuted && isPlaying) {
        // Option 1: Just mute (already done)
        // Option 2: Pause if muted in preview
      }
    }
  }, [isMuted, isPlaying]);

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

  const handleOpen = () => {
    setIsOpened(true);
    window.scrollTo({ top: 0, behavior: 'instant' });
    if (audioRef.current) {
      audioRef.current.play().catch(e => console.log('Autoplay blocked:', e));
      setIsPlaying(true);
    }
  };

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: "easeOut" } as any
  };

  const GoldOrnament = ({ className = "" }: { className?: string }) => (
    <div className={`flex items-center justify-center gap-4 py-12 ${className}`}>
        <div className="h-[0.5px] w-12 md:w-32 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent" />
        <div className="relative group">
            <div className="absolute inset-0 bg-[#D4AF37] blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
            <svg width="40" height="20" viewBox="0 0 40 20" fill="none" className="text-[#D4AF37] relative z-10">
                <path d="M20 0L24 10L34 10L26 15L29 20L20 16L11 20L14 15L6 10L16 10L20 0Z" fill="currentColor" className="opacity-80" />
                <path d="M0 10C5 10 10 5 20 5C30 5 35 10 40 10" stroke="currentColor" strokeWidth="0.5" />
                <path d="M0 10C5 10 10 15 20 15C30 15 35 10 40 10" stroke="currentColor" strokeWidth="0.5" />
            </svg>
        </div>
        <div className="h-[0.5px] w-12 md:w-32 bg-gradient-to-l from-transparent via-[#D4AF37]/50 to-transparent" />
    </div>
  );

  // Parse date string (e.g., "24 - APREL - 2026")
  const dateParts = date.split(' - ');
  const day = parseInt(dateParts[0]) || 24;
  const monthName = dateParts[1] || "APREL";
  const year = dateParts[2] || "2026";

  const monthMap: { [key: string]: number } = {
    "YANVAR": 0, "FEVRAL": 1, "MART": 2, "APREL": 3, "MAY": 4, "IYUN": 5,
    "IYUL": 6, "AVGUST": 7, "SENTYABR": 8, "OKTYABR": 9, "NOYABR": 10, "DEKABR": 11
  };

  const targetDate = new Date(
    parseInt(year),
    monthMap[monthName.toUpperCase()] || 3,
    day,
    parseInt(time.split(':')[0]) || 19,
    parseInt(time.split(':')[1]) || 0
  ).toISOString();

  const firstDayOfMonth = new Date(
    parseInt(year),
    monthMap[monthName.toUpperCase()] || 3,
    1
  ).getDay();

  const daysInMonth = new Date(
    parseInt(year),
    (monthMap[monthName.toUpperCase()] || 3) + 1,
    0
  ).getDate();

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans overflow-x-hidden selection:bg-[#D4AF37]/20 relative">
      <audio ref={audioRef} src={musicUrl} loop />

      <div className="fixed inset-0 pointer-events-none opacity-[0.05] z-0" 
           style={{ backgroundImage: `url("https://www.transparenttextures.com/patterns/natural-paper.png")` }} />

      {isOpened && (
        <button 
          onClick={toggleMusic}
          className="fixed top-6 right-6 z-50 p-4 bg-black/40 backdrop-blur-xl border border-[#D4AF37]/40 rounded-full shadow-[0_10px_30px_rgba(212,175,55,0.2)] text-[#D4AF37] hover:scale-110 transition-all active:scale-95"
        >
          {isPlaying ? <Volume2 size={24} /> : <VolumeX size={24} />}
        </button>
      )}

      <AnimatePresence>
        {!isOpened && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.05, transition: { duration: 1.2, ease: "easeInOut" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-white p-6 overflow-hidden"
          >
            <div className="absolute inset-0 opacity-20">
                <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-[#D4AF37]/20 blur-[120px] rounded-full animate-pulse" />
                <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-[#B8860B]/20 blur-[120px] rounded-full animate-pulse delay-1000" />
            </div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5 }}
              className="text-center space-y-20 relative z-10"
            >
              <div className="relative">
                <div className="w-40 h-40 md:w-56 md:h-56 border border-[#D4AF37] rounded-full flex items-center justify-center mx-auto relative">
                    <div className="w-[112%] h-[112%] border border-[#D4AF37]/30 rounded-full absolute animate-[spin_20s_linear_infinite]" 
                         style={{ borderStyle: 'dashed' }} />
                    <div className="w-[105%] h-[105%] border border-[#D4AF37]/50 rounded-full absolute" />
                    <h1 className={`text-5xl md:text-7xl font-serif italic ${goldText}`}>
                        {groomName[0]} <span className="text-3xl md:text-4xl align-middle font-serif">&</span> {brideName[0]}
                    </h1>
                    
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-white px-4 py-1 border border-[#D4AF37]/30 rounded-full text-[#D4AF37]"
                    >
                        <Heart size={18} fill="currentColor" />
                    </motion.div>
                </div>
              </div>
              
              <div className="space-y-8">
                <p className="text-[11px] tracking-[0.8em] uppercase font-bold text-[#D4AF37]/80">TO'YIMIZGA TAKLIF ETAMIZ</p>
                <GoldOrnament className="py-2" />
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1 }}
                    className="flex flex-col items-center gap-10"
                >
                    <motion.button 
                        onClick={handleOpen}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group relative flex flex-col items-center gap-6"
                    >
                        <div className="relative w-24 h-24 mb-2">
                             <div className="absolute inset-[-4px] border border-[#D4AF37]/20 rounded-full animate-pulse" />
                             <div className="absolute inset-0 bg-[#D4AF37] blur-3xl opacity-10 group-hover:opacity-30 transition-opacity duration-700" />
                             
                             <div className="relative w-full h-full rounded-full border border-[#D4AF37]/40 flex items-center justify-center bg-white shadow-[0_0_50px_rgba(212,175,55,0.1)] group-hover:border-[#D4AF37] transition-all duration-500 overflow-hidden">
                                 <div className="absolute inset-0 gold-shimmer opacity-0 group-hover:opacity-10 transition-opacity" />
                                 <MailOpen className="w-10 h-10 text-[#D4AF37] group-hover:scale-110 transition-transform duration-500" strokeWidth={1} />
                             </div>
                        </div>

                        <div className="space-y-3 flex flex-col items-center">
                            <span className="text-[13px] font-bold tracking-[0.6em] text-[#D4AF37] uppercase group-hover:tracking-[0.8em] transition-all duration-700">
                                TAKLIFNOMANI OCHISH
                            </span>
                            <div className="h-[0.5px] w-12 bg-gradient-to-r from-transparent via-[#D4AF37]/50 to-transparent scale-x-0 group-hover:scale-x-100 transition-transform duration-700 origin-center" />
                        </div>
                    </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`transition-all duration-1000 ${isOpened ? 'opacity-100' : 'opacity-0'}`}>
        
        <section className="relative min-h-screen w-full flex items-center justify-center bg-white px-4 py-24 md:py-32">
          <motion.div 
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
            className="relative z-10 text-center space-y-6 md:space-y-12 w-full"
          >
            <div className="space-y-4">
                <span className="text-[10px] md:text-sm tracking-[0.6em] md:tracking-[1em] font-bold text-[#D4AF37] uppercase block text-center">OILALARIMIZ BILAN BIRGA</span>
                <div className="w-16 md:w-24 h-px bg-[#D4AF37]/50 mx-auto" />
            </div>

            <h1 className="flex flex-col items-center justify-center gap-[1.5vw] md:gap-[3vw] w-full px-4 pt-[4vh] md:pt-20">
              <span className={`text-[9vw] md:text-[6vw] lg:text-[5vw] font-serif italic drop-shadow-[0_0_30px_rgba(212,175,55,0.2)] ${goldText} leading-none text-center w-full break-words px-4`}>{groomName}</span>
              <span className="text-serif italic text-[4vw] md:text-[2.5vw] text-gray-400 align-middle py-1">va</span>
              <span className={`text-[9vw] md:text-[6vw] lg:text-[5vw] font-serif italic drop-shadow-[0_0_30px_rgba(212,175,55,0.2)] ${goldText} leading-none text-center w-full break-words px-4`}>{brideName}</span>
            </h1>

            <div className="space-y-[2.5vw] md:space-y-6 pt-[4vh] md:pt-20 px-8">
              <p className="text-[3vw] md:text-[1.8vw] lg:text-[1.2vw] font-serif italic tracking-wide max-w-[85%] md:max-w-xl mx-auto text-center text-gray-700 leading-relaxed opacity-90">
                  Bizning hayotimizdagi eng muhim va unutilmas kunda yonimizda bo'lishingizdan bag'oyatda xursandmiz. <br className="hidden md:block" /> Ushbu kunni biz bilan baham ko'ring.
              </p>
            </div>

            <div className="pt-[4vh] md:pt-16 pb-12">
                <div className="inline-block relative px-[6vw] md:px-12 py-[3vw] md:py-6 border-y border-[#D4AF37]/20">
                    <p className={`text-[4vw] md:text-3xl font-serif tracking-[0.4em] md:tracking-[0.6em] uppercase ${goldText} font-bold`}>{date}</p>
                </div>
            </div>
          </motion.div>
        </section>

        <section className="py-20 md:py-48 px-4 md:px-6 bg-[#FAFAFA] relative">
          <div className="max-w-5xl mx-auto flex flex-col items-center">
            <motion.div {...fadeIn} className="text-center mb-12 md:mb-24 space-y-4 md:space-y-6">
                <div className="flex items-center justify-center gap-4 mb-2 md:mb-4">
                    <div className="w-12 md:w-16 h-px bg-gradient-to-r from-transparent to-[#D4AF37]" />
                    <span className="text-[#D4AF37] text-[10px] md:text-sm tracking-[0.4em] md:tracking-[0.6em] font-bold uppercase">Wedding Day</span>
                    <div className="w-12 md:w-16 h-px bg-gradient-to-l from-transparent to-[#D4AF37]" />
                </div>
                <h2 className={`text-4xl md:text-6xl font-serif italic tracking-tight ${goldText}`}>Sanani Eslab Qoling</h2>
                <GoldOrnament />
            </motion.div>

            <motion.div 
              {...fadeIn}
              className="w-full max-w-lg bg-white p-4 md:p-12 rounded-[2rem] md:rounded-3xl border border-[#D4AF37]/20 shadow-[0_20px_50px_rgba(0,0,0,0.05)] relative mx-auto z-10"
            >
              <div className="text-center mb-6 md:mb-10 pb-4 md:pb-6 border-b border-[#D4AF37]/10">
                <h3 className={`text-2xl md:text-3xl font-serif italic ${goldText} font-bold`}>{monthName} {year}</h3>
              </div>
              
              <div className="grid grid-cols-7 gap-1 md:gap-4 text-center text-[9px] md:text-[11px] font-bold text-[#D4AF37] opacity-60 mb-8 tracking-[0.2em]">
                <span>YAK</span><span>DUSH</span><span>SESH</span><span>CHOR</span><span>PAY</span><span>JUM</span><span>SHAN</span>
              </div>
              
              <div className="grid grid-cols-7 gap-y-3 md:gap-y-6 text-center items-center">
                {[...Array(firstDayOfMonth)].map((_, i) => (
                  <div key={`empty-${i}`} className="py-2" />
                ))}

                {[...Array(daysInMonth)].map((_, i) => (
                  <div key={i} className="relative py-2">
                    {i + 1 === day ? (
                      <div className="relative inline-flex items-center justify-center w-8 h-8 md:w-12 md:h-12 mx-auto">
                        <motion.div 
                          initial={{ scale: 0, rotate: -45 }}
                          whileInView={{ scale: 1, rotate: 0 }}
                          className={`absolute inset-0 ${goldGradient} rounded-lg shadow-lg shadow-[#D4AF37]/40`}
                        />
                        <span className="text-black font-bold text-base md:text-lg relative z-10">{i + 1}</span>
                        <div className="absolute -top-6 left-1/2 -translate-x-1/2 text-[#D4AF37] drop-shadow-md">
                            <Heart size={18} fill="currentColor" />
                        </div>
                      </div>
                    ) : (
                      <span className="opacity-40 text-base font-medium hover:opacity-100 transition-opacity cursor-default text-[#D4AF37]">{i + 1}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 md:py-48 px-6 bg-white relative overflow-hidden">
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
             <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#D4AF37]/5 blur-[120px] rounded-full" />
             <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#B8860B]/5 blur-[120px] rounded-full" />
          </div>

          <div className="max-w-3xl mx-auto relative z-10">
            <motion.div {...fadeIn} className="text-center mb-20 space-y-4">
               <span className="text-[#D4AF37] text-xs tracking-[0.8em] font-bold uppercase text-center">EVENT DETAILS</span>
               <h2 className={`text-5xl md:text-6xl font-serif italic ${goldText}`}>Nikoh Oqshomi</h2>
               <GoldOrnament />
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-white/5 backdrop-blur-md p-8 md:p-20 text-center space-y-12 border border-[#D4AF37]/20 shadow-2xl rounded-3xl group transition-all duration-500 hover:border-[#D4AF37]/50"
            >
                <div className="w-24 h-24 border-2 border-[#D4AF37] rounded-full flex items-center justify-center mx-auto text-[#D4AF37] relative">
                    <div className="absolute inset-1 border border-[#D4AF37]/30 rounded-full animate-ping" />
                    <MapPin size={32} strokeWidth={1} />
                </div>

                <div className="space-y-6">
                    <div className="space-y-2">
                        <p className={`text-3xl md:text-4xl font-serif italic text-gray-900`}>{locationName}</p>
                        <p className="text-[#D4AF37] text-[11px] tracking-[0.5em] font-bold uppercase">{locationAddress}</p>
                    </div>
                    
                    <div className="w-20 h-px bg-[#D4AF37]/30 mx-auto" />
                    
                    <p className="text-xl md:text-2xl text-[#D4AF37] font-serif italic tracking-wide">
                        {date}, JUMA <br />
                        <span className="text-[#D4AF37] font-bold mt-2 inline-block uppercase">VAQT {time}</span>
                    </p>
                </div>

                <div className="pt-8">
                    <a 
                        href={locationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`w-full max-w-sm mx-auto h-16 gold-shimmer text-black font-bold tracking-[0.4em] uppercase text-[12px] shadow-[0_10px_40px_rgba(212,175,55,0.3)] hover:shadow-[0_15px_60px_rgba(212,175,55,0.5)] transition-all flex items-center justify-center gap-4 rounded-full active:scale-95`}
                    >
                        <MapPin size={20} />
                        XARITANI KO'RISH
                    </a>
                </div>
            </motion.div>
          </div>
        </section>

        <section className="py-32 md:py-48 px-6 bg-[#FAFAFA] text-gray-900 overflow-hidden relative">
          <div className="max-w-5xl mx-auto text-center space-y-24 relative z-10">
            <motion.div {...fadeIn} className="space-y-6">
              <span className="text-[#D4AF37] text-xs tracking-[1em] font-bold uppercase opacity-80">QANCHA VAQT QOLDI?</span>
              <h2 className={`text-5xl md:text-7xl font-serif italic drop-shadow-[0_0_20px_rgba(212,175,55,0.2)] ${goldText}`}>Baxtli Kunimizgacha</h2>
              <GoldOrnament />
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                <CountdownItem label="KUN" date={targetDate} type="days" />
                <CountdownItem label="SOAT" date={targetDate} type="hours" />
                <CountdownItem label="DAQIQA" date={targetDate} type="minutes" />
                <CountdownItem label="SONIYA" date={targetDate} type="seconds" />
            </div>
          </div>
          
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-[0.03] text-[20vw] font-serif italic tracking-tighter whitespace-nowrap whitespace-pre hidden md:block text-center">
            {groomName} & {brideName}
          </div>
        </section>

        <section className="py-32 md:py-48 px-6 bg-white relative overflow-hidden">
           <div className="max-w-4xl mx-auto text-center space-y-20 relative z-10">
              <motion.div {...fadeIn} className="space-y-4">
                <span className="text-[#D4AF37] text-xs tracking-[0.6em] font-bold uppercase">TO'YONA UCHUN</span>
                <h2 className={`text-5xl md:text-6xl font-serif italic ${goldText}`}>Wedding Gift</h2>
                <GoldOrnament />
              </motion.div>

              <motion.div 
                whileHover={{ y: -15, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 100 }}
                className="w-full max-w-[420px] mx-auto aspect-[1.586/1] bg-white p-5 md:p-8 text-gray-900 text-left relative overflow-hidden shadow-[0_40px_100px_rgba(0,0,0,0.08)] rounded-[1.5rem] md:rounded-[2.5rem] border border-[#D4AF37]/20 group"
              >
                 <div className="relative z-10 h-full flex flex-col justify-between">
                    <div className="flex justify-between items-start pt-1 md:pt-2">
                       {/* Gold Chip */}
                       <div className={`w-10 h-8 md:w-14 md:h-11 ${goldGradient} rounded-lg md:rounded-xl shadow-inner relative overflow-hidden shrinkage-0`}>
                           <div className="absolute inset-0 opacity-30 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,.5)_50%,transparent_75%)] bg-[length:6px_6px] md:bg-[length:10px_10px]" />
                           <div className="absolute inset-1.5 md:inset-2 border-[0.5px] border-black/10 rounded-md md:rounded-lg" />
                       </div>
                       <div className="text-right">
                           <span className="text-[7px] md:text-[10px] font-bold tracking-[0.1em] md:tracking-[0.2em] text-[#D4AF37] uppercase block mb-1 pr-4 md:pr-6 whitespace-nowrap">UZCARD / HUMO</span>
                           <div className="pr-3 md:pr-4"><CreditCard size={16} className="text-[#D4AF37] opacity-60 ml-auto md:w-5 md:h-5" /></div>
                       </div>
                    </div>

                    <div className="space-y-4 md:space-y-6">
                       <div className="space-y-2 md:space-y-3">
                          <p className="text-[8px] md:text-[9px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[#D4AF37] uppercase">KARTA RAQAMI</p>
                          <p className="text-[15px] sm:text-lg md:text-3xl font-mono tracking-[0.05em] md:tracking-[0.1em] text-gray-800 py-0.5 md:py-1 whitespace-nowrap overflow-hidden">
                            {cardNumber}
                          </p>
                       </div>
                       
                       <div className="w-full h-px bg-gray-100" />

                       <div className="flex justify-between items-end gap-2 pb-1 md:pb-2">
                          <div className="min-w-0 pr-1 md:pr-2">
                             <p className="text-[8px] md:text-[10px] font-bold tracking-[0.2em] md:tracking-[0.3em] text-[#D4AF37] uppercase mb-1 md:mb-2">KARTA EGASI</p>
                             <p className={`text-lg md:text-3xl font-serif italic ${goldText} drop-shadow-sm truncate`}>
                               {cardName}
                             </p>
                          </div>
                          
                          {/* Mastercard-like Logo */}
                          <div className="flex -space-x-3 md:-space-x-4 mb-1 shrink-0">
                             <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#EB001B] opacity-90 blur-[0.2px] md:blur-[0.5px]" />
                             <div className="w-7 h-7 md:w-10 md:h-10 rounded-full bg-[#F79E1B] opacity-80 blur-[0.2px] md:blur-[0.5px]" />
                          </div>
                       </div>
                    </div>
                 </div>

                 <button 
                    onClick={() => {
                        navigator.clipboard.writeText(cardNumber.replace(/\s/g, ''));
                        alert("Nusxalandi!");
                    }}
                    className="absolute inset-0 z-20"
                 />
              </motion.div>
              <p className="text-lg text-gray-400 font-serif italic tracking-wide px-4">"Sizning tashrifingiz biz uchun eng ulug' to'yonadir"</p>
           </div>
        </section>

        <footer className="py-32 md:py-48 px-6 bg-[#FAFAFA] text-center relative border-t border-[#D4AF37]/10">
          <div className="space-y-12">
            <div className="space-y-4">
               <p className="text-xl md:text-2xl font-serif italic text-gray-300">Minnatdorchilik va sevgi bilan,</p>
               <div className={`text-3xl sm:text-4xl md:text-8xl font-serif italic drop-shadow-[0_0_40px_rgba(212,175,55,0.1)] ${goldText} leading-tight px-4`}>{groomName} va {brideName}</div>
            </div>
            
            <GoldOrnament />
            
            <div className="pt-24 border-t border-gray-100 max-w-lg mx-auto space-y-8">
              <div className="space-y-2">
                <p className="text-[12px] tracking-[1em] font-bold text-[#D4AF37] uppercase text-center">TAKLIFNOMA ASIA</p>
                <div className="h-px w-24 bg-[#D4AF37]/30 mx-auto" />
              </div>

              <div className="space-y-4">
                <p className="text-[10px] text-gray-600 uppercase tracking-[0.5em] text-center">Ximatdan foydalanish:</p>
                <a href="https://taklifnoma.asia" target="_blank" className="inline-block px-10 py-5 bg-[#B8962E] text-white rounded-full text-[11px] font-black tracking-widest uppercase shadow-lg hover:brightness-110 transition-all active:scale-95">TAKLIFNOMA YARATISH</a>
              </div>
            </div>
          </div>
        </footer>

      </main>

      <style jsx global>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400;1,700&family=Montserrat:wght@300;400;700&display=swap');
        
        .font-serif {
          font-family: 'Playfair Display', serif;
        }

        .font-sans {
          font-family: 'Montserrat', sans-serif;
        }

        @keyframes shimmer {
            0% { background-position: -200% 0; }
            100% { background-position: 200% 0; }
        }

        .gold-shimmer {
            background: linear-gradient(90deg, #B8860B 25%, #FFD700 50%, #DAA520 75%);
            background-size: 200% auto;
            animation: shimmer 5s infinite linear;
        }

        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}

const CountdownItem = ({ label, date, type }: { label: string, date: string, type: string }) => {
    const [value, setValue] = useState(0);

    useEffect(() => {
        const target = new Date(date).getTime();
        const interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = target - now;
            
            let val = 0;
            if (type === 'days') val = Math.floor(distance / (1000 * 60 * 60 * 24));
            else if (type === 'hours') val = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            else if (type === 'minutes') val = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            else if (type === 'seconds') val = Math.floor((distance % (1000 * 60)) / 1000);
            
            setValue(val >= 0 ? val : 0);
        }, 1000);
        return () => clearInterval(interval);
    }, [date, type]);

    return (
        <div className="relative p-6 md:p-10 bg-white border border-[#D4AF37]/10 group overflow-hidden rounded-2xl backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.05)] transition-all duration-500 hover:border-[#D4AF37]/40 hover:-translate-y-2">
            <div className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-[#D4AF37]" />
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-[#D4AF37]" />
            
            <div className={`text-4xl md:text-7xl font-serif font-bold mb-4 ${goldText}`}>
                {String(value).padStart(2, '0')}
            </div>
            <div className="text-[10px] md:text-[11px] tracking-[0.5em] font-bold text-black uppercase group-hover:text-[#D4AF37] transition-colors">{label}</div>
        </div>
    );
};

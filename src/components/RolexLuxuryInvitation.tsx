'use client';

import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Crown, MapPin, Navigation, Clock, Calendar, CreditCard, ChevronDown, Volume2, VolumeX } from 'lucide-react';

interface RolexLuxuryInvitationProps {
  groomName?: string;
  brideName?: string;
  date?: string;
  time?: string;
  locationName?: string;
  locationAddress?: string;
  imageUrl?: string;
  musicUrl?: string;
}

export default function RolexLuxuryInvitation({
  groomName = "Xurshidbek",
  brideName = "Mohinur",
  date = "20 Iyun 2026",
  time = "18:00",
  locationName = "Oqsaroy Koshonasi",
  locationAddress = "Surxondaryo viloyati, Sho'rchi tumani",
  imageUrl = "https://images.pexels.com/photos/30206324/pexels-photo-30206324/free-photo-of-elegant-gold-wedding-rings-on-marble-surface.jpeg",
  musicUrl = "https://www.learningcontainer.com/wp-content/uploads/2020/02/Sample-MP3-File.mp3"
}: RolexLuxuryInvitationProps) {
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

  // Rolex Palette
  const rolexGreen = "#006039";
  const rolexGold = "#a37e2c";
  const rolexLight = "#f8f8f8";
  const rolexDark = "#212121";

  const fadeIn = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-100px" },
    transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any }
  };

  return (
    <div 
      ref={containerRef}
      className="relative w-full min-h-screen bg-white text-[#212121] selection:bg-[#006039]/10 font-sans overflow-x-hidden"
    >
      <audio 
        ref={audioRef} 
        src={musicUrl}
        loop 
        crossOrigin="anonymous"
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
      />

      {/* Navigation Bar (Rolex Style) */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#006039] px-6 py-4 flex justify-between items-center shadow-lg">
        <div className="w-24"></div>
        
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center mb-1">
             <span className="text-[10px] text-white font-serif italic">{groomName[0]}{brideName[0]}</span>
          </div>
          <span className="text-[10px] tracking-[0.3em] font-bold text-white uppercase block leading-none">Nikoh</span>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleMusic}
            className="text-white p-2 border border-white/20 rounded-full hover:bg-white/10 transition-all"
          >
            {isPlaying ? <Volume2 size={16} /> : <VolumeX size={16} />}
          </button>
        </div>
      </nav>

      {/* Lock Screen Overlay */}
      <AnimatePresence>
        {!isUnlocked && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 1.2, ease: "circIn" } }}
            className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#f8f8f8]"
          >
             <motion.div 
               initial={{ scale: 0.95, opacity: 0 }}
               animate={{ scale: 1, opacity: 1 }}
               className="text-center space-y-12"
             >
                <div className="relative inline-block px-6 xs:px-12 py-12 xs:py-16 bg-white shadow-2xl rounded-sm border border-black/5 mx-4">
                   <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-14 h-14 bg-[#006039] rounded-full flex items-center justify-center border-4 border-[#f8f8f8] shadow-xl">
                      <span className="text-xl text-white font-serif italic">{groomName[0]}{brideName[0]}</span>
                   </div>
                   <h2 className="text-2xl xs:text-3xl font-serif tracking-tighter italic mb-2">{groomName} & {brideName}</h2>
                   <div className="w-12 h-px bg-[#a37e2c] mx-auto mb-6 xs:mb-8" />
                   <p className="text-[10px] tracking-[0.4em] uppercase font-bold text-[#006039] mb-10 xs:mb-12">Taklifnoma</p>
                   
                   <button 
                     onClick={handleUnlock}
                     className="w-full h-14 bg-[#006039] text-white text-[10px] xs:text-[11px] font-bold tracking-[0.3em] uppercase hover:bg-[#004e2e] transition-all flex items-center justify-center gap-3 px-6 xs:px-8 group"
                   >
                     <span>Ochish</span>
                     <ChevronDown className="group-hover:translate-y-1 transition-transform" />
                   </button>
                </div>
                <p className="text-[10px] text-black/30 tracking-[0.2em] font-medium uppercase italic px-4">Siz uchun maxsus tayyorlandi</p>
             </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className={`transition-opacity duration-1000 ${isUnlocked ? 'opacity-100' : 'opacity-0'}`}>
        
        {/* Dynamic Hero Section */}
        <section className="relative h-screen w-full flex items-center justify-center pt-20 px-4 md:px-6 overflow-hidden bg-[#006039]">
          <motion.div 
            style={{ y: useTransform(scrollYProgress, [0, 0.2], [0, 100]) }}
            className="absolute inset-0 z-0"
          >
            <img 
              src={imageUrl}
              alt="Baxtli lahzalar"
              className="absolute inset-0 w-full h-full object-cover brightness-50"
            />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 1.1 }}
            animate={isUnlocked ? { opacity: 1, scale: 1 } : { opacity: 0 }}
            transition={{ duration: 2 }}
            className="relative z-10 text-center text-white space-y-8"
          >
             <div className="space-y-6">
                <div className="overflow-hidden">
                   <motion.h1 
                     initial={{ opacity: 0, y: 30 }}
                     animate={isUnlocked ? { opacity: 1, y: 0 } : { opacity: 0 }}
                     transition={{ duration: 1.2, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                     className="text-4xl xs:text-5xl md:text-8xl font-serif leading-tight italic"
                   >
                      {groomName} & <br className="md:hidden" /> {brideName}
                   </motion.h1>
                </div>
                <motion.div 
                  initial={{ width: 0, opacity: 0 }}
                  whileInView={{ width: "120px", opacity: 1 }}
                  transition={{ duration: 1.5, delay: 0.5 }}
                  className="h-[2px] bg-[#a37e2c] mx-auto shadow-[0_0_10px_rgba(163,126,44,0.5)]"
                />
             </div>
             <div className="w-16 h-[2px] bg-[#a37e2c] mx-auto" />
             <p className="text-sm md:text-xl font-light tracking-widest max-w-xl mx-auto px-4 opacity-80 leading-relaxed">
               Ushbu lahzalarning har bir soniyasi - abadiylikka daxldor. Bizning eng baxtli kunimizda birga bo'ling.
             </p>
             
             <motion.div 
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 2.5, repeat: Infinity }}
                className="pt-20 opacity-40"
             >
                <div className="w-px h-24 bg-gradient-to-b from-white to-transparent mx-auto" />
             </motion.div>
          </motion.div>
        </section>

        {/* The Story Section (Uzbek Headings) */}
        <section className="py-32 md:py-48 px-6 bg-white flex flex-col items-center">
            <motion.div {...fadeIn} className="max-w-4xl w-full text-center space-y-16">
               <div className="space-y-4">
                  <span className="text-[#006039] text-[10px] tracking-[0.6em] font-bold uppercase block text-center">Bizning Hikoyamiz</span>
                  <p className="text-black/40 text-[10px] tracking-[0.4em] font-bold uppercase text-center">taklifnoma.ai</p>
                  <h2 className="text-4xl md:text-5xl font-serif tracking-tight text-[#212121] text-center italic">Muhabbat San'ati</h2>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center text-left">
                  <div className="space-y-8">
                     <p className="text-lg leading-relaxed text-black/70 font-light first-letter:text-5xl first-letter:font-serif first-letter:text-[#006039] first-letter:mr-3 first-letter:float-left">
                       Muhabbat - bu vaqt sinovlaridan o'tadigan, har bir daqiqasi oltindan qimmat bo'lgan tuyg'udir. Biz yangi hayotimizning ilk sahifasini siz bilan birga varaqlashni istaymiz.
                     </p>
                     <p className="text-black/60 leading-relaxed font-light">
                       Inson hayotidagi eng go'zal onlarni yaqinlar davrasida baham ko'rish, bu onlarga yanada ko'proq yorqinlik bag'ishlaydi. Bizning eng qadrli mehmonlarimiz safida sizni ko'rishdan bag'oyat mamnunmiz.
                     </p>
                  </div>
                  <div className="relative aspect-square rounded-sm overflow-hidden shadow-2xl bg-[#006039]/5">
                     <img 
                       src="https://images.pexels.com/photos/265856/pexels-photo-265856.jpeg?auto=compress&cs=tinysrgb&w=800"
                       alt="Uzuklar" 
                       className="w-full h-full object-cover hover:scale-105 transition-transform duration-3000"
                     />
                  </div>
               </div>
            </motion.div>
        </section>

        {/* The Showcase (Sana) */}
        <section className="bg-[#f8f8f8] py-32 md:py-48 px-6 border-y border-black/5">
           <div className="max-w-6xl mx-auto space-y-32">
              <motion.div {...fadeIn} className="text-center space-y-4">
                 <span className="text-[#006039] text-[10px] tracking-[0.8em] font-bold uppercase block text-center">Tantana Sanasi</span>
                 <h2 className="text-5xl md:text-7xl font-serif tracking-tighter text-[#212121] text-center">{date}</h2>
                 <p className="text-sm tracking-[0.4em] text-black/40 uppercase font-bold text-center">{time}</p>
              </motion.div>

              <motion.div 
                 initial="hidden"
                 whileInView="visible"
                 viewport={{ once: true, margin: "-100px" }}
                 variants={{
                   hidden: { opacity: 0, y: 50 },
                   visible: {
                     opacity: 1,
                     y: 0,
                     transition: { 
                        staggerChildren: 0.15,
                        duration: 0.8,
                        ease: "easeOut"
                     }
                   }
                 }}
                 className="grid grid-cols-2 md:grid-cols-4 border border-black/5 rounded-sm overflow-hidden bg-white shadow-2xl"
              >
                 <InfoItem icon={<Calendar size={20} />} title="Sana" value={date} sub="Shanba" />
                 <InfoItem icon={<Clock size={20} />} title="Vaqt" value={time} sub="Nikoh Oqshomi" />
                 <InfoItem icon={<MapPin size={20} />} title="Manzil" value="Sho'rchi" sub="Oqsaroy" />
                 <InfoItem icon={<CreditCard size={20} />} title="To'yona" value="Uzcard" sub="Xurshidbek P." />
              </motion.div>
           </div>
        </section>

        {/* The Boutique (Venue) */}
        <section className="py-24 md:py-48 px-4 md:px-6 bg-white overflow-hidden text-center md:text-left">
           <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 md:gap-24">
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                className="w-full md:w-1/2 space-y-12"
              >
                 <div className="space-y-4">
                    <h2 className="text-4xl xs:text-5xl font-serif tracking-tight text-[#212121] text-center md:text-left">{locationName}</h2>
                    <p className="text-black/50 text-base leading-relaxed font-light tracking-wide italic text-center md:text-left">
                      Ushbu maskan bizning yangi hayotimiz poydevori - nikoh oqshomimiz guvohiga aylanadi.
                    </p>
                 </div>
                 
                 <div className="space-y-4 bg-white p-6 xs:p-8 border border-black/5 shadow-xl rounded-sm">
                    <div className="flex items-center gap-4 border-b border-black/5 pb-4">
                       <Navigation className="text-[#006039]" size={20} />
                       <div>
                          <p className="text-[10px] font-bold tracking-widest text-black/30 text-left uppercase">LOKATSIYA</p>
                          <p className="text-sm font-medium text-left">{locationAddress}</p>
                       </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-4 pt-4">
                       <a href="#" className="h-14 bg-[#006039] text-white text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-[#004e2e] transition-all">
                          GOOGLE XARITA
                       </a>
                       <a href="#" className="h-14 border border-black/10 text-[#212121] text-[10px] font-bold tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-black/5 transition-all">
                          YANDEX XARITA
                       </a>
                    </div>
                 </div>
              </motion.div>

                 <div className="w-full md:w-1/2 relative aspect-[4/3] shadow-2xl rounded-sm overflow-hidden bg-[#006039]/5 border border-black/5">
                    <iframe 
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6286.888942566946!2d67.7857508586914!3d38.013416346030404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38b56840f87c9dd7%3A0x41895077daa18e54!2sShurchi%2C%20Surxondaryo%20Region%2C%20Uzbekistan!5e0!3m2!1sen!2s!4v1774416136626!5m2!1sen!2s"
                      width="100%" 
                      height="100%" 
                      style={{ border: 0 }} 
                      allowFullScreen 
                      loading="lazy" 
                      referrerPolicy="no-referrer-when-downgrade"
                      className="grayscale hover:grayscale-0 transition-all duration-1000"
                    />
                 </div>
           </div>
        </section>

        {/* The Endowment (Gift) Section */}
        <section className="bg-[#f8f8f8] py-32 md:py-48 px-4 md:px-6 text-center">
           <motion.div {...fadeIn} className="max-w-2xl mx-auto space-y-16">
              <div className="space-y-4 text-center">
                 <h2 className="text-4xl xs:text-5xl font-serif tracking-tight text-[#212121] text-center">To'yona uchun</h2>
              </div>
              
              <p className="text-black/50 text-sm leading-relaxed tracking-widest font-light italic text-center">
                Sizning samimiy tabriklaringiz va yaxshi niyatlaringiz biz uchun eng katta to'yona. Masofadan tabriklamoqchi bo'lganlar uchun:
              </p>

              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#006039] p-4 xs:p-8 md:p-12 text-white text-left relative overflow-hidden shadow-2xl rounded-sm"
              >
                 <div className="absolute top-0 right-0 p-8 md:p-12 opacity-10 rotate-12">
                   <CreditCard size={120} className="md:size-[180px]" />
                 </div>
                 
                 <div className="relative z-10 space-y-8 md:space-y-12">
                    <div className="flex justify-between items-start">
                       <div className="w-12 h-8 md:w-14 md:h-10 bg-gradient-to-tr from-[#a37e2c] to-[#ebd4a5] rounded-md shadow-lg" />
                       <div className="text-right">
                          <p className="text-[7px] md:text-[8px] font-bold tracking-widest text-white/30 mb-1 uppercase text-right">TIZIM</p>
                          <p className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-right">UZCARD / HUMO</p>
                       </div>
                    </div>

                    <div className="space-y-6">
                       <div>
                          <p className="text-[7px] md:text-[8px] font-bold tracking-widest text-white/20 mb-2 uppercase text-left">Karta raqami</p>
                          <p className="text-lg xs:text-2xl font-mono tracking-[0.1em] xs:tracking-[0.2em] text-left">9860 •••• •••• 1234</p>
                       </div>
                       <div className="flex flex-col xs:flex-row justify-between items-start xs:items-end border-t border-white/5 pt-6 gap-4">
                          <div className="text-left">
                             <p className="text-[7px] md:text-[8px] font-bold tracking-widest text-white/20 mb-1 uppercase text-left">Egasi</p>
                             <p className="text-base md:text-lg font-serif italic tracking-wider leading-none text-left">{groomName}</p>
                          </div>
                          <button 
                            className="w-full xs:w-auto bg-white text-[#006039] px-4 xs:px-6 py-3 text-[9px] font-bold tracking-[0.2em] uppercase hover:bg-white/90 active:scale-95 transition-all text-center"
                            onClick={() => {
                              navigator.clipboard.writeText("9860123456781234");
                              alert("Nusxalandi!");
                            }}
                          >
                             NUSXALASH
                          </button>
                       </div>
                    </div>
                 </div>
              </motion.div>
           </motion.div>
        </section>

        {/* Footer (Baxtli Kun) */}
        <footer className="py-32 px-6 bg-white border-t border-black/5 text-center space-y-24">
           <div className="space-y-12 text-center">
              <div className="w-20 h-20 rounded-full border border-[#006039]/10 flex items-center justify-center mx-auto">
                 <span className="text-3xl text-[#006039] font-serif italic">{groomName[0]}{brideName[0]}</span>
              </div>
              <div className="space-y-4 text-center">
                 <p className="text-5xl md:text-6xl font-serif tracking-tighter italic text-[#212121] text-center">Bizning Baxtli Kunimiz</p>
                 <p className="text-[10px] tracking-[0.8em] text-[#006039] font-bold uppercase text-center">Sizni kutib qolamiz</p>
              </div>
           </div>

           <div className="pt-24 border-t border-black/5 flex flex-col items-center gap-12 max-w-6xl mx-auto">
              <div className="text-center space-y-4">
                 <p className="text-[12px] tracking-[0.2em] font-bold text-[#006039] uppercase text-center">Taklifnoma buyurtma qilish uchun</p>
                 <a href="tel:+998915930833" className="text-2xl font-serif hover:text-[#a37e2c] transition-colors tracking-tight text-center">+998 91 593 0833</a>
              </div>
              <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-24 opacity-30 w-full">
                 <p className="text-[9px] tracking-widest font-bold uppercase text-[#212121]">taklifnoma.ai</p>
                 <span className="text-[10px] tracking-[0.5em] font-bold uppercase">Nikoh</span>
                 <span className="text-[10px] tracking-[0.5em] font-bold uppercase">Hashamat</span>
                 <span className="text-[10px] tracking-[0.5em] font-bold uppercase">Muhabbat</span>
              </div>
           </div>
        </footer>

      </main>

      <style jsx global>{`
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spin-slow 120s linear infinite;
        }
      `}</style>
    </div>
  );
}

const InfoItem = ({ icon, title, value, sub }: { icon: React.ReactNode, title: string, value: string, sub: string }) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, scale: 0.95 },
      visible: { opacity: 1, scale: 1 }
    }}
    className="p-4 xs:p-8 md:p-12 border-r border-b border-black/5 last:border-r-0 flex flex-col items-center justify-center text-center space-y-4 hover:bg-[#fcfcfc] transition-colors group"
  >
     <div className="text-[#006039] opacity-30 group-hover:opacity-100 transition-opacity transform group-hover:scale-110 duration-500">
        {icon}
     </div>
     <div className="space-y-1">
        <p className="text-[9px] font-bold tracking-widest text-black/30 text-center uppercase">{title}</p>
        <p className="text-2xl font-serif text-[#212121] tracking-tight text-center">{value}</p>
        <p className="text-[10px] tracking-widest text-black/40 font-bold uppercase italic text-center">{sub}</p>
        <p className="text-[8px] xs:text-[10px] tracking-widest text-black/20 font-bold uppercase pt-2 text-center">© 2026 taklifnoma.ai</p>
     </div>
  </motion.div>
);

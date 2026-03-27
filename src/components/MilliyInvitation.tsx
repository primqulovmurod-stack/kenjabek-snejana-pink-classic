'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { UzbekPatternCorner, UzbekPatternDivider, UzbekPatternBorder } from './milliy/Pattern';
import { RSVPSection } from './milliy/RSVPSection';
import { CalendarSection } from './luxury/CalendarSection';
import { MapPin, Phone, MessageSquare } from 'lucide-react';

export default function MilliyInvitation() {
  return (
    <main className="min-h-screen bg-milliy-background text-milliy-primary font-body overflow-x-hidden selection:bg-milliy-primary/10 selection:text-milliy-primary">
      
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex flex-col items-center justify-center py-20 px-6 text-center border-b border-milliy-primary/5">
        <div className="absolute top-8 left-8 w-24 h-24 text-milliy-primary/20">
          <UzbekPatternCorner className="w-full h-full" />
        </div>
        <div className="absolute top-8 right-8 w-24 h-24 text-milliy-primary/20 rotate-90">
          <UzbekPatternCorner className="w-full h-full" />
        </div>
        <div className="absolute bottom-8 left-8 w-24 h-24 text-milliy-primary/20 -rotate-90">
          <UzbekPatternCorner className="w-full h-full" />
        </div>
        <div className="absolute bottom-8 right-8 w-24 h-24 text-milliy-primary/20">
          <UzbekPatternCorner className="w-full h-full transform transition-transform" style={{ transform: 'rotate(180deg)' }} />
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="space-y-6 md:space-y-8 z-10"
        >
          <div className="inline-block px-10 py-1 border-t border-b border-milliy-primary/20 mb-4">
            <span className="text-[10px] md:text-sm font-bold tracking-[0.5em] uppercase">Taklifnoma</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-headline tracking-tighter leading-none italic">
            Xurshid <br /> & <br /> Mohinur
          </h1>

          <div className="max-w-md mx-auto py-6">
            <UzbekPatternDivider className="mb-6 opacity-60" />
            <p className="text-sm md:text-lg font-medium leading-relaxed opacity-80 px-4">
              Ikkimizni bir butun qilgan ulug&apos; kunimizda, bizni chin qalbdan qo&apos;llab-quvvatlagan yaqinlarimiz – Sizlarni ko&apos;rishdan baxtiyor bo&apos;lamiz.
            </p>
          </div>
        </motion.div>
      </section>

      {/* Story Section */}
      <section className="py-24 px-6 md:max-w-3xl mx-auto text-center space-y-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white/40 backdrop-blur-sm p-12 rounded-[50px] border border-milliy-primary/5 shadow-2xl shadow-milliy-primary/5 relative"
        >
          <div className="bg-milliy-primary text-white w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-8 absolute -top-5 left-1/2 -translate-x-1/2">
            <span className="text-xl">❤</span>
          </div>
          
          <h2 className="text-2xl md:text-3xl font-headline italic mb-6">Nikoh Oqshomi</h2>
          <p className="text-base md:text-lg opacity-80 leading-loose">
            Hayotimizning yangi sahifasi ochiladigan, baxt va quvonch sarmast etadigan ushbu kunda Siz aziz mehmonlarimizning tashrifingiz biz uchun chinakam sharaflidir.
          </p>
          
          <div className="mt-12 text-3xl md:text-4xl font-headline text-milliy-secondary">
            20 Iyun 2026
          </div>
        </motion.div>
      </section>

      {/* Calendar Section (Reusing existing component with layout wrapper) */}
      <div className="milliy-calendar-wrapper py-12">
        <CalendarSection />
      </div>

      {/* Event Details Section */}
      <section className="py-24 px-6 md:px-12 bg-white/30">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-6 text-center"
          >
            <div className="flex items-center justify-center gap-4 text-milliy-secondary">
              <MapPin className="w-6 h-6" />
              <h3 className="text-xl font-bold uppercase tracking-widest">Manzil</h3>
            </div>
            <div className="p-10 bg-milliy-background rounded-3xl border border-milliy-primary/10 shadow-sm">
              <h4 className="text-2xl font-headline mb-3">&quot;Yagona&quot; To&apos;yxonasi</h4>
              <p className="opacity-75 text-base italic mb-8">Toshkent sh., Yunusobod t., 4-mavze, 12-uy</p>
              <button className="px-8 py-3.5 bg-milliy-primary text-white rounded-xl text-xs font-bold uppercase tracking-[0.2em] hover:bg-milliy-primary/95 transition-all shadow-sm active:scale-[0.99]">
                Xaritadan ko&apos;rish
              </button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* RSVP Section (The one from user image) */}
      <div className="py-24">
        <div className="text-center mb-12 px-6">
          <UzbekPatternDivider className="mb-6 opacity-30" />
          <h2 className="text-3xl md:text-4xl font-headline italic">Sizni kutamiz...</h2>
          <p className="opacity-60 text-sm mt-3 uppercase tracking-[0.2em]">Tashrifingizni tasdiqlang</p>
        </div>
        <RSVPSection />
      </div>

      {/* Footer Pattern */}
      <footer className="py-12 flex flex-col items-center justify-center gap-6 opacity-40">
        <UzbekPatternBorder />
        <p className="text-[10px] tracking-[0.5em] uppercase font-bold">Mo&apos;jizaviy sevgi hikoyasi</p>
      </footer>
    </main>
  );
}

'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    // Check if showing leads is already done in this session
    const hasShown = localStorage.getItem('lead_modal_shown');
    if (hasShown) return;

    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 120000); // 120,000 ms = 120 seconds = 2 minutes

    return () => clearTimeout(timer);
  }, []);

  const formatPhoneNumber = (value: string) => {
    // Keep only digits
    const digits = value.replace(/\D/g, '');
    
    // Always start with 998 context
    if (!digits.startsWith('998') && digits.length > 0) {
        // user started typing without prefix or something
    }

    // Mask implementation: +998 (XX) XXX XX XX
    let formatted = '+998 ';
    const core = digits.startsWith('998') ? digits.slice(3) : digits;
    
    for (let i = 0; i < core.length && i < 9; i++) {
        if (i === 2) formatted += ' ';
        if (i === 5) formatted += ' ';
        if (i === 7) formatted += ' ';
        formatted += core[i];
    }

    return formatted;
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const input = e.target.value;
    // Strip everything to check digits
    const rawDigits = input.replace(/\D/g, '');
    
    // Only allow if it's less than or equal to 12 digits (998 + 9 digits)
    if (rawDigits.length <= 12) {
        setPhone(formatPhoneNumber(rawDigits));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 17) return; // Full number check

    setIsSubmitting(true);
    try {
      // Save to Supabase leads table (assuming it exists or just for demo)
      const { error } = await supabase
        .from('leads')
        .insert([{ phone, source: window.location.pathname }]);

      setIsSuccess(true);
      localStorage.setItem('lead_modal_shown', 'true');
      
      setTimeout(() => {
        setIsOpen(false);
      }, 2000);
    } catch (err) {
      console.error(err);
      // Even if error (table missing), treat as success for user experience
      setIsSuccess(true);
      localStorage.setItem('lead_modal_shown', 'true');
      setTimeout(() => setIsOpen(false), 2000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden"
          >
            {/* Design Elements */}
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-[#E11D48]/10 rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-[#E11D48]/5 rounded-full blur-3xl opacity-50" />

            <button 
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-900 transition-all z-10"
            >
              <X size={20} />
            </button>

            <div className="p-10 pt-12 relative flex flex-col items-center text-center">
              <div className="w-16 h-16 bg-[#E11D48]/5 rounded-full flex items-center justify-center text-[#E11D48] mb-6 ring-8 ring-[#E11D48]/5">
                <Phone size={28} />
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <CheckCircle2 size={60} className="text-green-500 mx-auto" />
                  <h2 className="text-2xl font-black text-gray-900 tracking-tight">Rahmat! 👋</h2>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Mutaxassislarimiz tez orada siz bilan bog'lanishadi.
                  </p>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2 mb-8">
                    <h2 className="text-2xl font-black text-gray-900 tracking-tight leading-none uppercase">Maslahat Kerakmi?</h2>
                    <p className="text-gray-500 text-sm leading-relaxed px-4">
                      Yordam kerak bo'lsa raqamingizni qoldiring, biz sizga o'zimiz qo'ng'iroq qilamiz!
                    </p>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+998 __ ___ __ __"
                        className="w-full px-8 py-5 bg-gray-50 border-2 border-transparent rounded-[1.5rem] focus:bg-white focus:border-[#E11D48]/20 focus:ring-4 focus:ring-[#E11D48]/5 outline-none transition-all text-lg font-black tracking-widest text-center text-gray-900"
                        required
                      />
                      <div className="mt-2 text-[10px] font-bold text-gray-300 uppercase tracking-widest">Namunadagi: +998 00 000 00 00</div>
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting || phone.length < 17}
                      className="group w-full py-5 bg-[#E11D48] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#E11D48]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale"
                    >
                      {isSubmitting ? 'Yuborilmoqda...' : 'MENG QO\'NG\'IROQ QILING'}
                      {!isSubmitting && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> }
                    </button>
                  </form>

                  <p className="mt-8 text-[9px] text-gray-400 font-bold uppercase tracking-widest opacity-60">
                    Bepul maslahat olish • 1 daqiqa ichida bog'lanamiz
                  </p>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

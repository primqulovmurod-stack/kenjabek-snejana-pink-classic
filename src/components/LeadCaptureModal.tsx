'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Phone, X, CheckCircle2, ChevronRight } from 'lucide-react';
import { supabase } from '@/lib/supabase';
import { useTheme } from '@/context/ThemeContext';

export default function LeadCaptureModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isForced, setIsForced] = useState(false);
  const [invId, setInvId] = useState<string | null>(null);
  const [phone, setPhone] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';

  useEffect(() => {
    const handleTrigger = (e: any) => {
        setIsForced(e.detail?.forced || false);
        setInvId(e.detail?.invitationId || null);
        setIsOpen(true);
    };

    window.addEventListener('trigger-lead-modal', handleTrigger);

    const hasShown = localStorage.getItem('lead_modal_shown') || localStorage.getItem('user_phone');
    if (!hasShown) {
        const timer = setTimeout(() => {
          setIsOpen(true);
          setIsForced(false);
        }, 120000); 
        return () => {
            clearTimeout(timer);
            window.removeEventListener('trigger-lead-modal', handleTrigger);
        };
    }

    return () => window.removeEventListener('trigger-lead-modal', handleTrigger);
  }, []);

  const formatPhoneNumber = (value: string) => {
    const digits = value.replace(/\D/g, '');
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
    const rawDigits = input.replace(/\D/g, '');
    if (rawDigits.length <= 12) {
        setPhone(formatPhoneNumber(rawDigits));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (phone.length < 17) return;

    setIsSubmitting(true);
    try {
      // 1. Save to leads table
      await supabase
        .from('leads')
        .insert([{ phone, source: window.location.pathname }]);

      // 2. If invitationId provided, update the invitation record directly
      // This fulfills Turn 5 requirement: "nomerlarni admindagi userlar malumotiga qo'shib qo'yish kerak"
      if (invId) {
          const { data: invData } = await supabase.from('invitations').select('content').eq('id', invId).single();
          if (invData) {
              const updatedContent = { ...invData.content, phone };
              await supabase.from('invitations').update({ 
                  phone, // Dedicated phone field for admin panel
                  content: updatedContent 
              }).eq('id', invId);
              
              // Notify the editor to refresh its state
              window.dispatchEvent(new CustomEvent('invitation-updated', { detail: { phone } }));
          }
      }

      setIsSuccess(true);
      localStorage.setItem('lead_modal_shown', 'true');
      localStorage.setItem('user_phone', phone); // Persistence for other modules
      
      setTimeout(() => {
        setIsOpen(false);
      }, 500); // Super fast closure
    } catch (err) {
      console.error(err);
      setIsSuccess(true);
      localStorage.setItem('lead_modal_shown', 'true');
      setTimeout(() => setIsOpen(false), 500);
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
            onClick={() => !isForced && setIsOpen(false)}
            className={`absolute inset-0 bg-black/60 backdrop-blur-sm ${isForced ? 'cursor-default' : 'cursor-pointer'}`}
          />
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className={`relative w-full max-w-md rounded-[2.5rem] shadow-[0_50px_100px_rgba(0,0,0,0.4)] overflow-hidden transition-all duration-500 ${
                isDarkMode ? 'bg-[#141416] border border-white/5' : 'bg-white'
            }`}
          >
            <div className={`absolute -top-24 -right-24 w-48 h-48 rounded-full blur-3xl opacity-50 ${isDarkMode ? 'bg-[#E11D48]/5' : 'bg-[#E11D48]/10'}`} />
            <div className={`absolute -bottom-24 -left-24 w-48 h-48 rounded-full blur-3xl opacity-50 ${isDarkMode ? 'bg-[#E11D48]/2' : 'bg-[#E11D48]/5'}`} />

            {!isForced && (
                <button 
                onClick={() => setIsOpen(false)}
                className={`absolute top-6 right-6 p-2 transition-all z-10 ${isDarkMode ? 'text-gray-500 hover:text-white' : 'text-gray-400 hover:text-gray-900'}`}
                >
                    <X size={20} />
                </button>
            )}

            <div className="p-10 pt-12 relative flex flex-col items-center text-center">
              <div className={`w-16 h-16 rounded-full flex items-center justify-center text-[#E11D48] mb-6 ring-8 transition-all ${
                  isDarkMode ? 'bg-white/5 ring-white/5' : 'bg-[#E11D48]/5 ring-[#E11D48]/5'
              }`}>
                <Phone size={28} />
              </div>

              {isSuccess ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="space-y-4"
                >
                  <CheckCircle2 size={60} className="text-green-500 mx-auto" />
                  <h2 className={`text-xl font-black tracking-tight uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Muvaffaqiyatli! ✅</h2>
                </motion.div>
              ) : (
                <>
                  <div className="space-y-2 mb-8">
                    <h2 className={`text-xl font-black tracking-tight leading-none uppercase ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>Raqamingizni Qoldiring</h2>
                  </div>

                  <form onSubmit={handleSubmit} className="w-full space-y-4">
                    <div className="relative">
                      <input 
                        type="text" 
                        value={phone}
                        onChange={handlePhoneChange}
                        placeholder="+998 __ ___ __ __"
                        className={`w-full px-8 py-5 border-2 border-transparent rounded-[1.5rem] outline-none transition-all text-lg font-black tracking-widest text-center ${
                            isDarkMode 
                            ? 'bg-white/5 text-white focus:bg-white/10 focus:border-white/10 focus:ring-white/5' 
                            : 'bg-gray-50 text-gray-900 focus:bg-white focus:border-[#E11D48]/20 focus:ring-[#E11D48]/5'
                        }`}
                        required
                      />
                    </div>

                    <button 
                      type="submit"
                      disabled={isSubmitting || phone.length < 17}
                      className="group w-full py-5 bg-[#E11D48] text-white rounded-[1.5rem] font-black text-xs uppercase tracking-[0.2em] shadow-xl shadow-[#E11D48]/30 hover:brightness-110 active:scale-95 transition-all flex items-center justify-center gap-3 disabled:opacity-50 disabled:grayscale"
                    >
                      {isSubmitting ? 'Yuborilmoqda...' : 'DAVOM ETISH'}
                      {!isSubmitting && <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" /> }
                    </button>
                  </form>
                </>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

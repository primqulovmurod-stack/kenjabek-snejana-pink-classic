'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import { Sparkles, ArrowRight, ShieldCheck, Mail, Lock, User, CheckCircle, X, Zap, ChevronDown, ChevronRight } from 'lucide-react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const { signInWithGoogle, user, loading } = useAuth();
  const [isRedirecting, setIsRedirecting] = useState(false);
  const [loginError, setLoginError] = useState<string | null>(null);
  const [phoneNumber, setPhoneNumber] = useState('');
  const router = useRouter();

  // If already logged in, redirect to dashboard
  React.useEffect(() => {
    if (user) {
      router.replace('/dashboard');
    }
  }, [user, router]);

  const handleGoogleLogin = async () => {
    try {
      setIsRedirecting(true);
      setLoginError(null);
      await signInWithGoogle();
    } catch (error: any) {
      console.error('Login error:', error);
      setLoginError('Google orqali kirishda xatolik yuz berdi. Iltimos, qaytadan urinib ko\'ring.');
      setIsRedirecting(false);
    }
  };

  if (loading || user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
          <div className="w-12 h-12 border-4 border-[#E11D48] border-t-transparent rounded-full" />
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-6 relative overflow-hidden font-sans">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-full -z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-[#E11D48]/5 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-blue-600/5 rounded-full blur-[120px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-[440px] bg-[#1C1C1E] border border-white/10 rounded-[2.5rem] p-8 md:p-12 relative z-10 shadow-2xl"
      >
        <button 
          onClick={() => router.push('/')}
          className="absolute right-8 top-8 text-gray-500 hover:text-white transition-colors"
        >
          <X size={20} />
        </button>

        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-10"
        >
          <div className="flex flex-col items-center gap-4">
            <div className="w-16 h-16 bg-[#2C2C2E] rounded-2xl flex items-center justify-center border border-white/5 shadow-inner">
               <Zap className="text-[#E11D48] fill-current" size={28} />
            </div>
            <h1 className="text-3xl font-black text-white text-center leading-tight">Taklifnoma.Asia-ga qo'shiling</h1>
          </div>

          <div className="space-y-4">
            <button 
              onClick={handleGoogleLogin}
              disabled={isRedirecting}
              className="w-full flex items-center justify-center gap-3 py-4.5 bg-white text-black rounded-2xl font-black text-sm hover:bg-gray-100 transition-all active:scale-95 shadow-xl disabled:opacity-50"
            >
              {isRedirecting ? (
                <motion.div animate={{ rotate: 360 }} transition={{ repeat: Infinity, duration: 1 }}>
                  <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full" />
                </motion.div>
              ) : (
                <>
                  <img src="https://www.gstatic.com/images/branding/product/2x/googleg_48dp.png" alt="Google" className="w-6 h-6" />
                  Google orqali davom etish
                </>
              )}
            </button>

            <div className="flex items-center gap-4 py-4">
              <div className="flex-1 h-[1px] bg-white/5"></div>
              <span className="text-[10px] font-black text-gray-600 uppercase tracking-[0.4em]">yoki</span>
              <div className="flex-1 h-[1px] bg-white/5"></div>
            </div>

            <div className="space-y-4">
               <div className="relative group">
                 <span className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 font-bold text-base">+998</span>
                 <input 
                   value={phoneNumber}
                   onChange={(e) => setPhoneNumber(e.target.value)}
                   placeholder="   Telefon raqam"
                   className="w-full pl-16 pr-6 py-5 bg-[#2C2C2E]/50 border border-white/5 rounded-2xl text-white font-bold text-lg outline-none focus:border-[#E11D48]/30 transition-all"
                 />
               </div>
               <button 
                disabled
                className="w-full py-5 bg-[#3A3A3C] text-gray-500 rounded-2xl font-black uppercase text-xs tracking-[0.2em] opacity-40"
               >
                 RO'YXATDAN O'TISH
               </button>
            </div>
          </div>

          {loginError && (
            <p className="text-xs text-red-400 font-bold text-center bg-red-400/10 py-3 rounded-xl border border-red-400/20">
              {loginError}
            </p>
          )}
        </motion.div>

        <div className="mt-12 text-center text-gray-600 text-[10px] uppercase font-black tracking-widest flex items-center justify-center gap-2">
           <ShieldCheck size={14} className="text-green-500/50" />
           Ma&apos;lumotlar xavfsiz himoyalangan
        </div>
      </motion.div>
    </div>
  );
}

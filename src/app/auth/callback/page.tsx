'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { supabase } from '@/lib/supabase';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

export default function AuthCallbackPage() {
  const router = useRouter();

  useEffect(() => {
    const handleAuthCallback = async () => {
      const { error } = await supabase.auth.getSession();
      if (error) {
        console.error('Error during auth callback:', error.message);
        router.push('/auth/login?error=' + encodeURIComponent(error.message));
      } else {
        router.push('/dashboard');
      }
    };

    handleAuthCallback();
  }, [router]);

  return (
    <div className="min-h-screen bg-[#FFF9FA] dark:bg-[#0A0A0A] flex flex-col items-center justify-center p-6">
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center space-y-8 text-center"
      >
        <div className="w-20 h-20 bg-[#E11D48] rounded-[2rem] flex items-center justify-center text-white shadow-2xl shadow-[#E11D48]/20 animate-bounce">
          <Sparkles size={32} fill="currentColor" />
        </div>
        
        <div className="space-y-4">
          <h2 className="text-3xl font-playfair font-black text-gray-900 dark:text-white uppercase tracking-tighter">
            Tasdiqlanmoqda...
          </h2>
          <p className="text-gray-400 font-bold uppercase tracking-[0.3em] text-[10px]">
            Hozir dashboardga o'tasiz
          </p>
        </div>

        <div className="w-48 h-1 bg-gray-100 dark:bg-white/5 rounded-full overflow-hidden">
          <motion.div 
            initial={{ width: 0 }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, repeat: Infinity }}
            className="h-full bg-[#E11D48]"
          />
        </div>
      </motion.div>
    </div>
  );
}

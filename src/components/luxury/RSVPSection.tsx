'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, X, Send } from 'lucide-react';

export function RSVPSection() {
  const [status, setStatus] = useState<'going' | 'not-going' | null>(null);
  const [name, setName] = useState('');
  const [wishes, setWishes] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !status) return;
    
    // In a real app, you'd send this to a backend/spreadsheet
    console.log({ name, status, wishes });
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section className="relative w-full py-24 bg-white flex flex-col items-center justify-center font-sans">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-purple-50 p-10 rounded-[2.5rem] text-center max-w-md mx-4 border border-purple-100"
        >
          <div className="w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg shadow-purple-200">
            <Check className="text-white w-8 h-8" />
          </div>
          <h2 className="text-2xl font-bold text-[#0F172A] mb-2">Rahmat!</h2>
          <p className="text-[#64748B]">Sizning javobingiz muvaffaqiyatli qabul qilindi.</p>
        </motion.div>
      </section>
    );
  }

  return (
    <section className="relative w-full py-24 bg-white flex flex-col items-center justify-center overflow-hidden font-sans">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-lg px-6 relative z-10"
      >
        <div className="bg-[#F8FAFC] rounded-[2.5rem] p-8 md:p-12 shadow-xl shadow-gray-200/50 border border-gray-100">
          <form onSubmit={handleSubmit} className="space-y-8">
            
            {/* Name Input */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-400">
                Sizning ismingiz
              </label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Mehmon ismi"
                className="w-full bg-white border border-gray-200 rounded-2xl h-14 px-6 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300 transition-all font-medium"
              />
            </div>

            {/* Attendance Choice */}
            <div className="grid grid-cols-2 gap-4">
              <button
                type="button"
                onClick={() => setStatus('going')}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${
                  status === 'going' 
                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-200' 
                    : 'bg-white border-gray-100 text-[#0F172A] hover:border-purple-200'
                }`}
              >
                <Check size={20} className={status === 'going' ? 'text-white' : 'text-purple-400'} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Jon deb boraman</span>
              </button>
              
              <button
                type="button"
                onClick={() => setStatus('not-going')}
                className={`flex flex-col items-center justify-center gap-3 p-6 rounded-2xl border transition-all duration-300 ${
                  status === 'not-going' 
                    ? 'bg-gray-800 border-gray-800 text-white shadow-lg shadow-gray-200' 
                    : 'bg-white border-gray-100 text-[#0F172A] hover:border-gray-200'
                }`}
              >
                <X size={20} className={status === 'not-going' ? 'text-white' : 'text-gray-400'} />
                <span className="text-[10px] font-bold uppercase tracking-widest text-center">Borolmayman</span>
              </button>
            </div>

            {/* Wishes Input */}
            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] font-bold text-purple-400">
                Kelin-kuyovga tilaklar
              </label>
              <textarea 
                value={wishes}
                onChange={(e) => setWishes(e.target.value)}
                placeholder="Qalbingizdagi so'zlarni yozing..."
                className="w-full bg-white border border-gray-200 rounded-2xl p-6 h-32 text-[#0F172A] placeholder:text-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-200 focus:border-purple-300 transition-all font-medium resize-none"
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={!name || !status}
              className={`w-full h-14 rounded-2xl font-bold text-sm tracking-widest uppercase transition-all duration-300 flex items-center justify-center gap-3 ${
                name && status 
                  ? 'bg-purple-700 text-white shadow-lg shadow-purple-200 hover:bg-purple-800 hover:-translate-y-0.5' 
                  : 'bg-gray-100 text-gray-400 cursor-not-allowed'
              }`}
            >
              Tasdiqlash
              <Send size={16} />
            </button>

          </form>
        </div>
      </motion.div>
    </section>
  );
}

import React from 'react';
import { motion } from 'framer-motion';
import { AnimatedLogisticsBackground } from '@/components/AnimatedLogisticsBackground';
import { ContactBadge } from '@/components/ContactBadge';
import { ThemeToggle } from '@/components/ThemeToggle';
import { Toaster } from '@/components/ui/sonner';
export function HomePage() {
  return (
    <div className="min-h-screen relative overflow-hidden bg-[#0a0f1e] flex flex-col font-sans selection:bg-logistics-orange/30">
      {/* Refined Dark Premium Gradient Layer */}
      <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-from)_0%,_transparent_70%)] from-[#1a2332]/30 to-transparent" />
      <ThemeToggle className="absolute top-6 right-6" />
      {/* Background Layer */}
      <AnimatedLogisticsBackground />
      {/* Main Content Layer */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="w-full flex flex-col items-center text-center"
        >
          {/* Refined Glassmorphism Card with fixed minimum height for stability */}
          <div className="backdrop-blur-2xl bg-slate-950/40 border border-white/10 p-8 md:p-20 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_0_50px_-12px_rgba(0,0,0,0.5)] shadow-orange-500/5 max-w-4xl w-full min-h-[500px] md:min-h-[600px] flex flex-col justify-center relative overflow-hidden group">
            {/* Animated Glowing Header Line */}
            <div className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-logistics-orange to-transparent opacity-40 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="space-y-12">
              <div className="space-y-6">
                <motion.h1
                  className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-white leading-[1.05] tracking-tighter"
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2, duration: 0.8 }}
                >
                  Logistics <br />
                  <span className="text-logistics-orange italic font-normal">In Motion</span>
                </motion.h1>
                <motion.p
                  className="text-lg md:text-xl text-slate-300 max-w-2xl mx-auto font-medium leading-relaxed tracking-tight px-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4, duration: 0.8 }}
                >
                  Crafting the future of global supply chains. Our new digital experience is currently in transit and arriving soon.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="flex flex-col items-center gap-10 pb-4"
              >
                <ContactBadge />
                <p className="text-[10px] text-slate-500 font-bold uppercase tracking-[0.25em]">
                  Inquiry: Global Operations & Strategy
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </main>
      {/* Footer */}
      <footer className="relative z-10 p-8 md:p-12 text-center mt-auto">
        <p className="text-[10px] font-bold text-white/15 uppercase tracking-[0.4em] leading-loose">
          &copy; {new Date().getFullYear()} WPServices. <span className="hidden sm:inline">Global Logistics Infrastructure.</span>
        </p>
      </footer>
      <Toaster richColors closeButton theme="dark" />
    </div>
  );
}
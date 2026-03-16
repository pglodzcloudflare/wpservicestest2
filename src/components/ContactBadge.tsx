import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
interface ContactBadgeProps {
  className?: string;
}
export const ContactBadge: React.FC<ContactBadgeProps> = ({ className }) => {
  return (
    <div className="relative group">
      {/* Glowing Pulse Ring */}
      <motion.div
        className="absolute inset-0 rounded-full bg-logistics-orange/40 blur-md pointer-events-none"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.a
        href="mailto:sales@wpservices.org"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className={cn(
          "relative z-10 inline-flex items-center gap-3 px-8 py-5 bg-[#0a0f1e] text-white rounded-full border border-white/10 shadow-lg transition-all duration-300",
          "hover:border-logistics-orange/50 hover:shadow-[0_0_20px_rgba(249,115,22,0.3)]",
          className
        )}
      >
        <div className="bg-logistics-orange/20 p-2.5 rounded-full transition-colors group-hover:bg-logistics-orange/40">
          <Mail className="w-5 h-5 text-logistics-orange" />
        </div>
        <div className="flex flex-col items-start text-left">
          <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-logistics-orange">Get in touch</span>
          <span className="text-sm font-semibold tracking-tight">sales@wpservices.org</span>
        </div>
      </motion.a>
    </div>
  );
};
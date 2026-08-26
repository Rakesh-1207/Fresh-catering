import React from 'react';
import { MessageCircle, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import { siteData } from '../data/cateringData';

export default function FixedActionButtons({ setActivePage }) {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-auto">
      
      {/* Sleek Floating Enquire Pill */}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => {
          setActivePage('enquire');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className="px-4 py-2.5 rounded-full shadow-2xl bg-white text-[#006B46] border-2 border-[#006B46] font-title font-bold text-[10px] tracking-widest uppercase flex items-center gap-1.5 transition-all hover:bg-[#006B46] hover:text-white group"
        aria-label="Enquire Now"
      >
        <span>ENQUIRE NOW</span>
        <Send className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
      </motion.button>

      {/* Sleek Floating WhatsApp Action Pill */}
      <motion.a
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        href={`https://wa.me/${siteData.brand.whatsapp}?text=Hi%20Fresh%20Catering,%20I%20would%20like%20to%20enquire%20about%20catering%20services.`}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 rounded-full shadow-2xl bg-[#006B46] text-white font-title font-bold text-[10px] tracking-widest uppercase flex items-center gap-2 border-2 border-[#006B46] hover:bg-[#044C33] hover:border-[#044C33] transition-all"
        aria-label="WhatsApp Us"
      >
        <MessageCircle className="w-4 h-4 fill-white" />
        <span>WHATSAPP</span>
      </motion.a>

    </div>
  );
}

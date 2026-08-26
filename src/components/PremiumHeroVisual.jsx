import React from 'react';
import { motion } from 'framer-motion';

export default function PremiumHeroVisual() {
  return (
    <div className="relative w-full max-w-md sm:max-w-lg mx-auto aspect-square flex items-center justify-center p-4">
      
      {/* 1. ANIMATED EXPANDING RED KUMKUM CIRCLE ACCENT */}
      <motion.div 
        initial={{ scale: 0.85, opacity: 0.9 }}
        animate={{ 
          scale: [0.95, 1.05, 0.95],
          opacity: [0.85, 1, 0.85]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute w-[270px] h-[270px] sm:w-[340px] sm:h-[340px] rounded-full bg-[#B91C1C] shadow-2xl z-0"
      />

      {/* 2. ROTATING DASHED GOLDEN DECORATIVE HALO (NO TEXT) */}
      <motion.div 
        initial={{ scale: 0.9, opacity: 0.8 }}
        animate={{ 
          scale: [1, 1.08, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ 
          duration: 25,
          repeat: Infinity,
          ease: "linear"
        }}
        className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border-2 border-[#C5A059]/40 border-dashed z-0"
      />

      {/* 3. REAL VIEW GRAPHICS - HIGH-DEFINITION REAL SOUTH INDIAN FEAST PHOTOGRAPHY CUTOUT (COMPLETELY TEXT-FREE) */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ 
          opacity: 1, 
          scale: [0.98, 1.03, 0.98],
          y: [0, -8, 0]
        }}
        transition={{ 
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="relative z-10 w-[240px] h-[240px] sm:w-[310px] sm:h-[310px] rounded-full overflow-hidden border-4 border-white shadow-2xl ring-4 ring-[#006B46]/20 group cursor-pointer"
      >
        <img 
          src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1000&auto=format&fit=crop" 
          alt="Authentic South Indian Banana Leaf Feast Real View" 
          decoding="async"
          loading="eager"
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />

        {/* Real Food Subtle Lighting Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />
      </motion.div>

    </div>
  );
}

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Maximize2 } from 'lucide-react';
import { siteData } from '../data/cateringData';
import PageHeaderBanner from './PageHeaderBanner';

export default function GallerySection() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ['All', 'Food', 'Buffet Setup', 'Events', 'Catering'];

  const filteredGallery = activeCategory === 'All'
    ? siteData.gallery
    : siteData.gallery.filter(item => item.category === activeCategory);

  return (
    <div className="space-y-0 text-[#111827] gpu-accelerated">
      
      {/* Compact Cinematic Dark Banner */}
      <PageHeaderBanner 
        badge="GALLERY & PORTFOLIO"
        title="See Our Culinary"
        highlight="Craftsmanship"
        subtitle="Real moments from our live counters, ceremonial leaf feasts, luxury wedding buffets, and corporate setups."
        bgImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 bg-[#F9F8F6] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Sliding Animated Category Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`relative px-5 py-2 rounded-full text-[10px] font-title tracking-widest uppercase transition-colors duration-300 ${
                  activeCategory === cat
                    ? 'text-white font-bold'
                    : 'text-[#374151] hover:text-[#006B46]'
                }`}
              >
                {activeCategory === cat && (
                  <motion.span
                    layoutId="activeGalleryTab"
                    className="absolute inset-0 bg-[#006B46] rounded-full shadow-sm -z-0"
                    transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{cat}</span>
              </button>
            ))}
          </div>

          {/* Photo Grid with Motion */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={activeCategory}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
            >
              {filteredGallery.map((item) => (
                <motion.div
                  key={item.id}
                  onClick={() => setSelectedImage(item)}
                  whileHover={{ scale: 1.03 }}
                  transition={{ duration: 0.3 }}
                  className="editorial-card rounded-xl overflow-hidden relative group cursor-pointer h-60 bg-white"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    decoding="async"
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity" />

                  <div className="absolute bottom-4 left-4 right-4 text-left">
                    <span className="font-title text-[9px] tracking-widest text-[#C5A059] uppercase font-bold block mb-1">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-base font-bold text-white">
                      {item.title}
                    </h4>
                  </div>

                  <div className="absolute top-3 right-3 p-1.5 rounded-full bg-black/40 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <motion.div 
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div 
              className="relative max-w-4xl w-full bg-white p-4 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ type: 'spring', damping: 25 }}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-6 right-6 p-2 rounded-full bg-black/60 text-white hover:bg-[#006B46] transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <img
                src={selectedImage.image}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain rounded-lg mb-4"
              />
              <div className="text-center space-y-1">
                <span className="font-title text-[9px] text-[#006B46] font-bold tracking-widest uppercase">{selectedImage.category}</span>
                <h3 className="font-serif text-xl font-bold text-[#111827]">{selectedImage.title}</h3>
              </div>
            </motion.div>
          </motion.div>
        )}
      </section>

    </div>
  );
}

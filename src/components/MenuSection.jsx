import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, ArrowRight, Utensils, Coffee, Moon, Sun } from 'lucide-react';
import { siteData } from '../data/cateringData';
import PageHeaderBanner from './PageHeaderBanner';

export default function MenuSection({ setActivePage }) {
  const [activeCategoryIndex, setActiveCategoryIndex] = useState(0);
  const [dietFilter, setDietFilter] = useState('all');

  const categoryVisuals = [
    { 
      id: 'breakfast', 
      name: 'Breakfast & Morning Tiffin', 
      desc: 'Piping hot ghee Mini Idlis, crisp live Dosas, and Kumbakonam degree coffee.',
      image: 'https://images.unsplash.com/photo-1626777552726-4a6b54c97e46?q=80&w=800&auto=format&fit=crop',
      icon: Sun
    },
    { 
      id: 'lunch', 
      name: 'Lunch & Grand Leaf Feast', 
      desc: 'Authentic 21-item traditional banana leaf meals & Chettinad biryani spreads.',
      image: 'https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=800&auto=format&fit=crop',
      icon: Utensils
    },
    { 
      id: 'dinner', 
      name: 'Dinner Buffet & Live Grill', 
      desc: 'Live charcoal kebabs, flaky coin parottas, and global dinner banquet spreads.',
      image: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?q=80&w=800&auto=format&fit=crop',
      icon: Moon
    },
    { 
      id: 'hightea', 
      name: 'High Tea & Evening Snacks', 
      desc: 'Live Pani Puri stalls, crispy onion samosas, and freshly brewed masala chai.',
      image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?q=80&w=800&auto=format&fit=crop',
      icon: Coffee
    }
  ];

  const categories = siteData.menuCategories || [];
  const currentCategoryData = categories[activeCategoryIndex] || categories[0];
  const currentCategoryVisual = categoryVisuals[activeCategoryIndex] || categoryVisuals[0];

  // Process items
  const categoryItems = (currentCategoryData?.items || []).map((item, idx) => ({
    ...item,
    id: idx,
    isVeg: item.tag ? item.tag.includes('Veg') && !item.tag.includes('Non-Veg') : true
  }));

  const filteredItems = categoryItems.filter(item => {
    if (dietFilter === 'veg') return item.isVeg;
    if (dietFilter === 'nonveg') return !item.isVeg;
    return true;
  });

  return (
    <div className="space-y-0 text-[#111827] gpu-accelerated">
      
      {/* Compact Cinematic Dark Banner */}
      <PageHeaderBanner 
        badge="OUR MENUS & PACKAGES"
        title="Curated Culinary"
        highlight="Collections"
        subtitle="Explore our authentic traditional dishes and specially crafted catering packages designed for taste perfection."
        bgImage="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Main Content Area */}
      <section className="py-16 bg-[#F9F8F6] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* 1. VISUAL MEAL CATEGORY CARDS */}
          <div className="mb-12">
            <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
              <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                SELECT MEAL TIMING
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
                Choose Your <span className="font-serif italic text-[#006B46]">Feast Category</span>
              </h2>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {categoryVisuals.map((cat, idx) => {
                const isActive = activeCategoryIndex === idx;
                const IconComponent = cat.icon;
                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategoryIndex(idx)}
                    className={`relative rounded-2xl overflow-hidden text-left transition-all duration-300 group border-2 ${
                      isActive 
                        ? 'border-[#006B46] shadow-xl ring-2 ring-[#006B46]/20' 
                        : 'border-transparent opacity-85 hover:opacity-100 hover:border-[#006B46]/30'
                    }`}
                  >
                    <div className="h-36 sm:h-44 relative overflow-hidden">
                      <img 
                        src={cat.image} 
                        alt={cat.name} 
                        decoding="async"
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      <div className={`absolute inset-0 transition-opacity duration-300 ${
                        isActive 
                          ? 'bg-gradient-to-t from-[#006B46] via-[#006B46]/60 to-black/30' 
                          : 'bg-gradient-to-t from-black/80 via-black/40 to-transparent'
                      }`} />
                      
                      <div className="absolute top-3 left-3 p-1.5 rounded-full bg-white/20 backdrop-blur-md text-white">
                        <IconComponent className="w-4 h-4" />
                      </div>

                      {isActive && (
                        <span className="absolute top-3 right-3 bg-[#006B46] text-white font-title text-[9px] tracking-widest px-2.5 py-0.5 rounded-full uppercase font-bold border border-white/20">
                          ACTIVE
                        </span>
                      )}

                      <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                        <h4 className="font-serif font-bold text-base sm:text-lg leading-snug">{cat.name}</h4>
                      </div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* 2. DIET FILTER BADGES */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-4 border-b border-[#006B46]/10">
            <div className="space-y-0.5">
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">
                {currentCategoryVisual.name}
              </h3>
              <p className="text-xs sm:text-sm text-[#374151] font-light">
                {currentCategoryVisual.desc}
              </p>
            </div>

            {/* Diet Filter Switch */}
            <div className="flex items-center gap-1.5 bg-white p-1.5 rounded-full border border-[#006B46]/15 shadow-sm">
              <button
                onClick={() => setDietFilter('all')}
                className={`px-4 py-1.5 rounded-full font-title text-[10px] tracking-widest uppercase font-bold transition-all ${
                  dietFilter === 'all' 
                    ? 'bg-[#006B46] text-white shadow-sm' 
                    : 'text-[#374151] hover:text-[#006B46]'
                }`}
              >
                ALL DISHES
              </button>
              
              <button
                onClick={() => setDietFilter('veg')}
                className={`px-4 py-1.5 rounded-full font-title text-[10px] tracking-widest uppercase font-bold transition-all ${
                  dietFilter === 'veg' 
                    ? 'bg-emerald-600 text-white shadow-sm' 
                    : 'text-[#374151] hover:text-emerald-600'
                }`}
              >
                🌱 PURE VEG
              </button>

              <button
                onClick={() => setDietFilter('nonveg')}
                className={`px-4 py-1.5 rounded-full font-title text-[10px] tracking-widest uppercase font-bold transition-all ${
                  dietFilter === 'nonveg' 
                    ? 'bg-amber-700 text-white shadow-sm' 
                    : 'text-[#374151] hover:text-amber-700'
                }`}
              >
                🍗 NON-VEG
              </button>
            </div>
          </div>

          {/* 3. EDITORIAL DISH CARDS GRID */}
          <AnimatePresence mode="wait">
            <motion.div 
              key={`${activeCategoryIndex}-${dietFilter}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredItems.map((dish) => (
                <div 
                  key={dish.id} 
                  className="editorial-card p-6 sm:p-7 rounded-2xl bg-white flex flex-col justify-between space-y-4 group hover:border-[#006B46]/40"
                >
                  <div className="space-y-3">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="text-lg sm:text-xl font-serif font-bold text-[#111827] group-hover:text-[#006B46] transition-colors leading-snug">
                        {dish.name}
                      </h4>
                      
                      <span className={`px-2.5 py-0.5 rounded-full text-[9px] font-title font-bold uppercase shrink-0 ${
                        dish.isVeg 
                          ? 'bg-emerald-50 text-[#006B46] border border-[#006B46]/20' 
                          : 'bg-amber-50 text-amber-800 border border-amber-200'
                      }`}>
                        {dish.tag || (dish.isVeg ? 'VEG 🌱' : 'NON-VEG 🍖')}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#374151] font-light leading-relaxed">
                      {dish.desc}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-gray-100 flex items-center justify-between">
                    <span className="text-[10px] font-title tracking-wider text-gray-400 uppercase font-semibold">
                      AUTHENTIC PREPARATION
                    </span>
                    
                    <button
                      onClick={() => {
                        setActivePage('enquire');
                        if (window.lenis) {
                          window.lenis.scrollTo(0, { immediate: true });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }
                      }}
                      className="font-title text-[10px] tracking-widest text-[#006B46] hover:underline uppercase font-bold flex items-center gap-1"
                    >
                      <span>ENQUIRE DISH</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* 4. CATERING PACKAGES & PRICING TIERS */}
          <div className="mt-20 pt-16 border-t border-[#006B46]/15">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-2">
              <span className="font-title text-[10px] tracking-widest text-[#006B46] uppercase font-bold block">
                CATERING PACKAGES & PRICING
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
                Transparent Per-Plate <span className="font-serif italic text-[#006B46]">Packages</span>
              </h2>
              <p className="text-xs sm:text-sm text-[#374151] font-light">
                Complete all-inclusive catering packages with food, live stalls, buffet décor, and butler service.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {siteData.packages.map((pkg, idx) => (
                <div 
                  key={idx}
                  className={`editorial-card p-8 rounded-2xl flex flex-col justify-between ${
                    pkg.popular ? 'border-[#006B46] shadow-xl bg-white relative' : 'bg-white'
                  }`}
                >
                  {pkg.popular && (
                    <span className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-[#006B46] text-white font-title text-[10px] tracking-widest uppercase font-bold px-4 py-1 rounded-full shadow-sm">
                      MOST POPULAR
                    </span>
                  )}

                  <div className="space-y-4">
                    <div>
                      <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#111827]">{pkg.name}</h3>
                      <p className="text-xs sm:text-sm text-[#374151] font-light mt-1">{pkg.subtitle}</p>
                    </div>

                    <div className="py-3 border-y border-gray-100 flex items-baseline gap-1.5">
                      <span className="text-3xl sm:text-4xl font-serif font-bold text-[#006B46]">{pkg.price}</span>
                      <span className="text-xs sm:text-sm text-gray-400 font-sans">{pkg.priceUnit}</span>
                    </div>

                    <div className="space-y-2.5 pt-1">
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs sm:text-sm text-[#111827]">
                          <Check className="w-4 h-4 text-[#006B46] shrink-0" />
                          <span className="font-sans text-xs sm:text-sm text-[#374151]">{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-8">
                    <button
                      onClick={() => {
                        setActivePage('enquire');
                        if (window.lenis) {
                          window.lenis.scrollTo(0, { immediate: true });
                        } else {
                          window.scrollTo({ top: 0, behavior: 'instant' });
                        }
                      }}
                      className="btn-editorial-outline py-3.5 rounded-full text-center block w-full text-xs"
                    >
                      ENQUIRE FOR THIS PACKAGE
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 5. CUSTOM MENU PROPOSAL ENQUIRY BOX */}
          <div className="mt-16 text-center bg-white p-8 sm:p-12 rounded-2xl border border-[#006B46]/15 shadow-sm max-w-2xl mx-auto space-y-4">
            <h3 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827]">Need a Custom Menu Combination?</h3>
            <p className="text-xs sm:text-sm text-[#374151] font-light leading-relaxed">
              We specialize in custom live food stalls, traditional banana leaf item selection, and personalized spice tuning.
            </p>
            <div className="pt-2">
              <button
                onClick={() => {
                  setActivePage('enquire');
                  if (window.lenis) {
                    window.lenis.scrollTo(0, { immediate: true });
                  } else {
                    window.scrollTo({ top: 0, behavior: 'instant' });
                  }
                }}
                className="btn-editorial-outline px-8 py-3.5 rounded-full text-xs inline-block font-bold"
              >
                ENQUIRE FOR CUSTOM MENU PROPOSAL
              </button>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}

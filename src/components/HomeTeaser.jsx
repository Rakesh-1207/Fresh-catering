import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronDown } from 'lucide-react';

export default function HomeTeaser({ setActivePage }) {
  const handlePageChange = (page) => {
    setActivePage(page);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      }
    }
  };

  const heroItemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  // Translucent steam particles rising from hot brass uruli vessels & banana leaf feast
  const steamParticles = [
    { left: '58%', bottom: '32%', width: '140px', height: '260px', duration: 4.0, delay: 0 },
    { left: '70%', bottom: '36%', width: '160px', height: '290px', duration: 4.6, delay: 0.7 },
    { left: '82%', bottom: '34%', width: '170px', height: '300px', duration: 4.3, delay: 1.3 },
    { left: '90%', bottom: '38%', width: '130px', height: '240px', duration: 3.6, delay: 0.2 },
  ];

  return (
    <div className="space-y-0 text-[#111827]">
      
      {/* 1. SOUTH INDIAN CATERING FEAST HERO ILLUSTRATION */}
      <section className="relative min-h-[65vh] flex items-center justify-center pt-24 pb-8 sm:pt-28 sm:pb-12 overflow-hidden bg-[#FAF7F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center">
          <motion.div 
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="w-full flex justify-center"
          >
            <img 
              src="hero_catering_illustration.jpg" 
              alt="South Indian Catering Banana Leaf Feast Illustration" 
              decoding="async"
              loading="eager"
              className="w-full max-h-[75vh] md:max-h-[82vh] object-contain rounded-2xl shadow-sm"
            />
          </motion.div>
        </div>
      </section>

      {/* 2. INTEGRATED WARM LINEN & GOLD METRIC ROW */}
      <section className="py-6 bg-[#F4F2ED] border-b border-[#006B46]/15">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            {[
              { val: "500+", label: "CELEBRATIONS CATERED" },
              { val: "100%", label: "PURE FRESH GHEE" },
              { val: "50,000+", label: "HAPPY GUESTS SERVED" },
              { val: "1 KITCHEN", label: "PURE HYGIENE GUARANTEE" }
            ].map((metric, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-20px" }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="border-r border-[#006B46]/10 last:border-none px-2"
              >
                <p className="text-xl sm:text-2xl font-serif font-bold text-[#006B46]">{metric.val}</p>
                <p className="text-[10px] font-title tracking-[0.2em] uppercase text-[#374151] font-bold">{metric.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. COMPACT ABOUT US STORY SECTION */}
      <section className="py-16 bg-[#F9F8F6]">
        <div className="max-w-4xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="editorial-card p-8 sm:p-12 rounded-2xl text-center space-y-5 bg-white shadow-sm"
          >
            <div className="inline-block">
              <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                ABOUT FRESH CATERING
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#111827] leading-snug max-w-2xl mx-auto">
              "Founded on the belief that great feasts are remembered by the <span className="font-serif italic text-[#006B46]">warmth of hospitality</span> and <span className="font-serif italic text-[#006B46]">purity of taste.</span>"
            </h2>

            <p className="font-sans text-sm text-[#374151] font-light leading-relaxed max-w-2xl mx-auto">
              Fresh Catering brings together decades of culinary heritage, time-honored South Indian family recipes, and uncompromised standards of hygiene for weddings, housewarmings, and celebrations.
            </p>

            <div className="pt-2">
              <motion.button
                whileHover={{ x: 3 }}
                onClick={() => handlePageChange('about')}
                className="font-title text-[11px] tracking-[0.2em] text-[#006B46] hover:text-[#044C33] uppercase inline-flex items-center gap-2 font-bold group"
              >
                <span>DISCOVER OUR STORY</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 4. SIGNATURE FEAST EXPERIENCE */}
      <section className="py-20 bg-[#F4F2ED] border-y border-[#006B46]/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            <motion.div 
              className="lg:col-span-6 space-y-5"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
            >
              <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase font-bold block">
                THE BANANA LEAF EXPERIENCE
              </span>
              <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827] leading-tight">
                Authentic 21-Item Feast: <br />
                <span className="font-serif italic text-[#006B46]">Preserved in royal traditional style.</span>
              </h2>
              <p className="text-sm text-[#374151] font-light leading-relaxed">
                From fragrant Elaneer Payasam and hot ghee parottas to aromatic Chettinad biryani spreads and live dessert counters, our master chefs deliver authentic taste served with trained butler hospitality.
              </p>

              <div className="pt-1">
                <motion.button
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => handlePageChange('services')}
                  className="btn-editorial-solid px-8 py-3.5 rounded-full text-xs"
                >
                  EXPLORE OUR SERVICES
                </motion.button>
              </div>
            </motion.div>

            <motion.div 
              className="lg:col-span-6"
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative rounded-xl overflow-hidden shadow-xl border-4 border-white group">
                <img 
                  src="https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?q=80&w=1200&auto=format&fit=crop" 
                  alt="Traditional South Indian Banana Leaf Feast" 
                  decoding="async"
                  loading="lazy"
                  className="w-full h-[360px] sm:h-[420px] object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-[#006B46]/20 shadow-md">
                  <p className="font-serif text-lg font-bold text-[#111827]">Traditional 21-Item Leaf Spread</p>
                  <p className="text-xs sm:text-sm text-[#374151] font-light">100% Farm-Fresh Ingredients, Live Counters & Royal Butler Service</p>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* 5. HORIZONTAL STEPPER TIMELINE */}
      <section className="py-24 bg-[#F9F8F6] border-t border-[#006B46]/10 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-2xl mx-auto mb-16 space-y-2">
            <span className="font-title text-[10px] tracking-[0.25em] text-[#006B46] uppercase block font-bold">
              OUR PROCESS
            </span>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
              How We Work: <span className="font-serif italic text-[#006B46]">Meticulous planning, flawless taste.</span>
            </h2>
          </div>

          <div className="relative">
            <div className="hidden md:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-[#006B46]/20 z-0" />

            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 relative z-10">
              {[
                { num: '01', title: 'Consultation', desc: 'Share your event date, venue, and guest count for a curated proposal.' },
                { num: '02', title: 'Tasting Session', desc: 'Visit our kitchen studio to sample signature dishes and refine your menu.' },
                { num: '03', title: 'Farm Sourcing', desc: '24 hours prior, ingredients, cold-pressed oils, and pure ghee are sourced.' },
                { num: '04', title: 'Live Execution', desc: 'Chefs and butler team arrive early, live counters fire up hot.' },
                { num: '05', title: 'Clean Departure', desc: 'Hygienic leftover packaging and spotless kitchen venue cleanup.' }
              ].map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="flex flex-col items-center text-center space-y-3 group"
                >
                  <div className="w-14 h-14 rounded-full bg-white border-2 border-[#006B46] text-[#006B46] font-serif font-bold text-lg flex items-center justify-center shadow-md transition-transform duration-300 group-hover:scale-105 group-hover:bg-[#006B46] group-hover:text-white">
                    {step.num}
                  </div>

                  <h4 className="font-serif text-lg font-bold text-[#111827] pt-1">{step.title}</h4>
                  <p className="text-xs sm:text-sm text-[#374151] font-light leading-relaxed max-w-[200px]">{step.desc}</p>
                </motion.div>
              ))}
            </div>

          </div>

        </div>
      </section>

      {/* 6. QUIET INQUIRY CLOSING CTA */}
      <section className="py-20 bg-[#F4F2ED] border-t border-[#006B46]/10 text-center">
        <div className="max-w-2xl mx-auto px-6 space-y-4">
          <h2 className="text-2xl sm:text-4xl font-serif font-bold text-[#111827]">
            Planning a Wedding or Celebration?
          </h2>
          <p className="text-sm sm:text-base text-[#374151] font-light leading-relaxed">
            Share your event date and estimated guest count to receive a personalized menu proposal.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => handlePageChange('enquire')}
            className="btn-editorial-solid px-9 py-4 rounded-full text-xs"
          >
            REQUEST A CUSTOM QUOTE
          </motion.button>
        </div>
      </section>

    </div>
  );
}

import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import PageHeaderBanner from './PageHeaderBanner';

export default function AboutSection() {
  return (
    <div className="space-y-0 text-[#111827]">
      
      {/* Compact Cinematic Dark Banner */}
      <PageHeaderBanner 
        badge="ABOUT FRESH CATERING"
        title="Preserving Tradition in Every"
        highlight="Single Dish"
        subtitle="At Fresh Catering, food is not just a meal—it is a sacred celebration of hospitality, culture, and togetherness."
        bgImage="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop"
      />

      {/* Main Content Section */}
      <section className="py-16 bg-[#F9F8F6] relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* Story & Image Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            
            <div className="relative rounded-xl overflow-hidden shadow-lg border border-[#006B46]/15">
              <img 
                src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=1000&auto=format&fit=crop" 
                alt="Authentic Indian Wedding Catering Setup" 
                decoding="async"
                loading="eager"
                className="w-full h-[360px] sm:h-[420px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-5 left-5 right-5 p-4 bg-white/95 backdrop-blur-md rounded-lg border border-[#006B46]/20 shadow-md">
                <p className="text-[9px] font-title text-[#006B46] font-bold tracking-widest uppercase mb-1">OUR PROMISE</p>
                <p className="text-xs font-serif italic text-[#111827]">
                  "Every grain of rice, every spice blend, and every service interaction is crafted with authentic care."
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl sm:text-3xl font-serif font-bold text-[#111827] leading-snug">
                Why Families & Businesses Trust Fresh Catering
              </h3>
              <p className="text-[#374151] text-xs leading-relaxed font-light">
                Founded with a passion for genuine culinary authenticity, Fresh Catering has grown into one of the most trusted catering services. Whether serving a 2,000-guest traditional wedding leaf feast or an intimate corporate gala, our commitment remains unshakeable.
              </p>

              <div className="space-y-2 pt-2">
                {[
                  "100% Pure Ghee & Cold-Pressed Oils Used",
                  "Customized Menus Tailored to Your Budget & Guests",
                  "Strict Hygiene & Temperature-Controlled Transport",
                  "Dedicated On-Site Event Coordinator for Every Function"
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#006B46] shrink-0" />
                    <span className="text-xs text-[#111827] font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}

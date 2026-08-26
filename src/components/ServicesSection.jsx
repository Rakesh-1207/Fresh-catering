import React from 'react';
import { MessageCircle, ArrowRight, Check } from 'lucide-react';
import { siteData } from '../data/cateringData';
import PageHeaderBanner from './PageHeaderBanner';

export default function ServicesSection({ setActivePage }) {
  return (
    <div className="space-y-0 text-[#111827]">
      
      <PageHeaderBanner 
        badge="WHAT WE DO"
        title="Bespoke Catering for"
        highlight="Every Event"
        subtitle="Whether planning an intimate home gathering or a grand destination wedding, explore our specialized catering services designed for flawless hospitality."
        bgImage="https://images.unsplash.com/photo-1555244162-803834f70033?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 bg-[#F9F8F6] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {siteData.services.map((service) => (
              <div 
                key={service.id} 
                className="editorial-card rounded-xl overflow-hidden flex flex-col justify-between group bg-white"
              >
                <div>
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      decoding="async"
                      loading="lazy"
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60" />
                  </div>

                  <div className="p-5 space-y-2">
                    <h3 className="text-xl font-serif font-bold text-[#111827] group-hover:text-[#006B46] transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-[10px] text-[#006B46] font-title font-bold tracking-wider uppercase">
                      {service.subtitle}
                    </p>
                    <p className="text-xs text-[#374151] font-light leading-relaxed">
                      {service.description}
                    </p>

                    <div className="space-y-1.5 pt-2.5 border-t border-[#111827]/10">
                      {service.highlights.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-[#006B46] shrink-0" />
                          <span className="text-xs text-[#374151] font-medium">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-5 pt-0 flex items-center justify-between border-t border-[#111827]/10 mt-3">
                  <a
                    href={`https://wa.me/${siteData.brand.whatsapp}?text=Hi%20Fresh%20Catering,%20I%20would%20like%20to%20enquire%20about%20${encodeURIComponent(service.title)}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-title text-[9px] tracking-widest text-[#006B46] hover:text-[#044C33] font-bold uppercase flex items-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" />
                    <span>Enquire on WhatsApp</span>
                  </a>
                  
                  <button
                    onClick={() => {
                      setActivePage('enquire');
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }}
                    className="p-1.5 text-[#374151] hover:text-[#006B46] transition-colors"
                  >
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

    </div>
  );
}

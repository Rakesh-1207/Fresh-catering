import React from 'react';
import { Phone, Mail, MapPin, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { siteData } from '../data/cateringData';
import PageHeaderBanner from './PageHeaderBanner';

export default function ContactSection() {
  return (
    <div className="space-y-0 text-[#111827] gpu-accelerated">
      
      {/* Compact Cinematic Dark Banner */}
      <PageHeaderBanner 
        badge="REACH OUT TO US"
        title="Contact"
        highlight="Fresh Catering"
        subtitle="Reach out directly for booking inquiries, menu consultations, or kitchen visits."
        bgImage="https://images.unsplash.com/photo-1546833999-b9f581a1996d?q=80&w=2000&auto=format&fit=crop"
      />

      <section className="py-16 bg-[#F9F8F6] relative">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          
          {/* 4-Column Aligned Grid: CALL US | EMAIL US | VISIT KITCHEN | FOLLOW US */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            
            {/* 1. CALL US */}
            <div className="editorial-card p-6 sm:p-7 rounded-2xl text-center space-y-3 bg-white flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full bg-[#006B46]/10 text-[#006B46] flex items-center justify-center mx-auto border border-[#006B46]/20">
                  <Phone className="w-5 h-5" />
                </div>
                <span className="font-title text-[10px] tracking-widest text-[#006B46] uppercase font-bold block">CALL US</span>
                <a 
                  href={`tel:${siteData.brand.phone.replace(/\s+/g, '')}`}
                  className="font-serif text-lg sm:text-xl font-bold text-[#111827] hover:text-[#006B46] transition-colors block"
                >
                  {siteData.brand.phone}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] font-light pt-2 border-t border-gray-100">Daily 8am - 10pm</p>
            </div>

            {/* 2. EMAIL US */}
            <div className="editorial-card p-6 sm:p-7 rounded-2xl text-center space-y-3 bg-white flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full bg-[#006B46]/10 text-[#006B46] flex items-center justify-center mx-auto border border-[#006B46]/20">
                  <Mail className="w-5 h-5" />
                </div>
                <span className="font-title text-[10px] tracking-widest text-[#006B46] uppercase font-bold block">EMAIL US</span>
                <a 
                  href={`mailto:${siteData.brand.email}`}
                  className="font-serif text-xs sm:text-sm font-bold text-[#111827] hover:text-[#006B46] transition-colors block truncate"
                >
                  {siteData.brand.email}
                </a>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] font-light pt-2 border-t border-gray-100">Proposals & inquiries</p>
            </div>

            {/* 3. VISIT KITCHEN */}
            <div className="editorial-card p-6 sm:p-7 rounded-2xl text-center space-y-3 bg-white flex flex-col justify-between">
              <div className="space-y-2">
                <div className="w-11 h-11 rounded-full bg-[#006B46]/10 text-[#006B46] flex items-center justify-center mx-auto border border-[#006B46]/20">
                  <MapPin className="w-5 h-5" />
                </div>
                <span className="font-title text-[10px] tracking-widest text-[#006B46] uppercase font-bold block">VISIT KITCHEN</span>
                <p className="font-serif text-lg sm:text-xl font-bold text-[#111827]">Coimbatore, TN</p>
              </div>
              <p className="text-xs sm:text-sm text-[#374151] font-light leading-relaxed pt-2 border-t border-gray-100">Grand Culinary Avenue</p>
            </div>

            {/* 4. FOLLOW US */}
            <div className="editorial-card p-6 sm:p-7 rounded-2xl text-center space-y-3 bg-white flex flex-col justify-between border border-[#006B46]/20">
              <div className="space-y-2">
                <span className="font-title text-[10px] tracking-[0.2em] text-[#006B46] uppercase font-bold block">
                  FOLLOW US
                </span>
                <h4 className="font-serif text-lg sm:text-xl font-bold text-[#111827]">Social Media</h4>
              </div>

              <div className="flex justify-center items-center gap-3 pt-2">
                <a 
                  href={siteData.brand.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="p-3 rounded-full bg-[#006B46]/10 text-[#006B46] hover:bg-[#006B46] hover:text-white transition-all transform hover:scale-110 shadow-sm"
                >
                  <Instagram className="w-4.5 h-4.5" />
                </a>

                <a 
                  href={siteData.brand.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="p-3 rounded-full bg-red-100 text-red-600 hover:bg-red-600 hover:text-white transition-all transform hover:scale-110 shadow-sm"
                >
                  <Youtube className="w-4.5 h-4.5" />
                </a>

                <a 
                  href={`https://wa.me/${siteData.brand.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="p-3 rounded-full bg-[#006B46]/10 text-[#006B46] hover:bg-[#006B46] hover:text-white transition-all transform hover:scale-110 shadow-sm"
                >
                  <MessageCircle className="w-4.5 h-4.5 fill-current" />
                </a>
              </div>
            </div>

          </div>

          {/* Map */}
          <div className="editorial-card p-2 rounded-2xl overflow-hidden shadow-md bg-white">
            <iframe
              title="Fresh Catering Map"
              src="https://maps.google.com/maps?q=Coimbatore,TamilNadu&t=&z=13&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="360"
              style={{ border: 0, borderRadius: '0.75rem' }}
              allowFullScreen=""
              loading="lazy"
            />
          </div>

        </div>
      </section>

    </div>
  );
}

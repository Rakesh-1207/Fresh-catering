import React from 'react';
import { ArrowUp, Instagram, Youtube, MessageCircle } from 'lucide-react';
import { siteData } from '../data/cateringData';

export default function Footer({ setActivePage }) {
  const scrollToTop = () => {
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'What We Do' },
    { id: 'menus', label: 'Menus & Packages' },
    { id: 'gallery', label: 'Gallery' },
    { id: 'enquire', label: 'Enquire' },
  ];

  return (
    <footer className="bg-[#0A1411] text-gray-300 pt-16 pb-14 border-t border-white/10 font-sans">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-10">
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs font-light">
          
          <div className="md:col-span-2 space-y-4">
            <img 
              src="Primary Logo - Wordmark.png" 
              alt="Fresh Catering" 
              className="h-9 w-auto object-contain brightness-125"
            />
            <p className="font-serif italic text-xs text-[#C5A059]">
              {siteData.brand.tagline}
            </p>
            <p className="text-xs text-gray-400 leading-relaxed font-light max-w-md">
              Delivering traditional authentic taste, hygienic cooking standards, live counters, and royal hospitality for weddings, corporate, and private celebrations across South India.
            </p>

            {/* FOLLOW US SOCIAL LINKS (Instagram, YouTube, WhatsApp) */}
            <div className="pt-2 space-y-2">
              <h5 className="font-title text-[9px] tracking-[0.25em] text-[#C5A059] uppercase font-bold">
                FOLLOW US
              </h5>
              <div className="flex items-center gap-3">
                <a 
                  href={siteData.brand.instagram} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#006B46] hover:border-[#006B46] transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>

                <a 
                  href={siteData.brand.youtube} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#006B46] hover:border-[#006B46] transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>

                <a 
                  href={`https://wa.me/${siteData.brand.whatsapp}`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-white/10 border border-white/15 flex items-center justify-center text-white hover:bg-[#006B46] hover:border-[#006B46] transition-colors"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-title text-[10px] tracking-[0.25em] text-white uppercase font-bold">Navigation</h4>
            <ul className="space-y-1.5 text-xs">
              {navLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => {
                      setActivePage(link.id);
                      scrollToTop();
                    }}
                    className="hover:text-[#C5A059] transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-2.5">
            <h4 className="font-title text-[10px] tracking-[0.25em] text-white uppercase font-bold">Contact Info</h4>
            <div className="space-y-1.5 text-xs text-gray-400">
              <p>{siteData.brand.phone}</p>
              <p>{siteData.brand.email}</p>
              <p>Coimbatore, Tamil Nadu</p>
            </div>
          </div>

        </div>

        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} Fresh Catering. All Rights Reserved.</p>
          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-semibold text-[#C5A059] hover:text-white transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}

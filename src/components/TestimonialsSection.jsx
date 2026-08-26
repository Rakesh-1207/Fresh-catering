import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { siteData } from '../data/cateringData';

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev === 0 ? siteData.testimonials.length - 1 : prev - 1));
  };

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev === siteData.testimonials.length - 1 ? 0 : prev + 1));
  };

  const current = siteData.testimonials[currentIndex];

  return (
    <section className="py-20 bg-[#F4F0EA] relative border-t border-[#006B46]/10">
      <div className="max-w-4xl mx-auto px-6 text-center space-y-6">
        
        <span className="font-title text-[9px] tracking-widest text-[#006B46] uppercase block font-bold">
          CLIENT STORIES
        </span>

        <div className="relative py-2 px-4">
          <Quote className="w-10 h-10 text-[#006B46]/20 mx-auto mb-3" />

          <p className="font-serif text-lg sm:text-2xl text-[#1A221E] font-light leading-relaxed max-w-3xl mx-auto italic">
            "{current.quote}"
          </p>

          <div className="pt-6 space-y-0.5">
            <h4 className="font-title text-xs tracking-widest text-[#006B46] uppercase font-bold">
              {current.author}
            </h4>
            <p className="text-[10px] font-title tracking-widest text-[#1A221E]/60 uppercase">
              {current.eventType} &bull; {current.location}
            </p>
          </div>
        </div>

        <div className="flex justify-center items-center gap-4 pt-1">
          <button
            onClick={prevTestimonial}
            className="p-2.5 rounded-full border border-[#006B46]/20 hover:bg-[#006B46] text-[#1A221E] hover:text-white transition-all"
            aria-label="Previous Review"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex gap-1.5">
            {siteData.testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  currentIndex === idx ? 'w-5 bg-[#006B46]' : 'w-1.5 bg-[#006B46]/20'
                }`}
                aria-label={`Go to review ${idx + 1}`}
              />
            ))}
          </div>

          <button
            onClick={nextTestimonial}
            className="p-2.5 rounded-full border border-[#006B46]/20 hover:bg-[#006B46] text-[#1A221E] hover:text-white transition-all"
            aria-label="Next Review"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </section>
  );
}

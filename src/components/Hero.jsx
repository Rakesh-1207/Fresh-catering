import React from 'react';

export default function Hero({ setActivePage }) {
  return (
    <section className="relative min-h-[65vh] flex items-center justify-center pt-24 pb-12 overflow-hidden bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex justify-center items-center">
        <img 
          src="hero_catering_illustration.jpg" 
          alt="South Indian Catering Banana Leaf Feast Illustration" 
          className="w-full max-h-[75vh] md:max-h-[82vh] object-contain rounded-2xl shadow-sm"
        />
      </div>
    </section>
  );
}

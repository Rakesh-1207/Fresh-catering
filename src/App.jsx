import React, { useState, useEffect } from 'react';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import Navbar from './components/Navbar';
import HomeTeaser from './components/HomeTeaser';
import AboutSection from './components/AboutSection';
import ServicesSection from './components/ServicesSection';
import MenuSection from './components/MenuSection';
import GallerySection from './components/GallerySection';
import TestimonialsSection from './components/TestimonialsSection';
import EnquirySection from './components/EnquirySection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import FixedActionButtons from './components/FixedActionButtons';

export default function App() {
  const [activePage, setActivePage] = useState('home');

  // Initialize Official Lenis Smooth Inertial Scroll
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1.0,
      touchMultiplier: 1.5,
      smoothTouch: false,
      infinite: false,
    });

    window.lenis = lenis;

    let animationFrameId;

    function raf(time) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
      delete window.lenis;
    };
  }, []);

  const handlePageChange = (page) => {
    setActivePage(page);
    if (window.lenis) {
      window.lenis.scrollTo(0, { immediate: true });
    } else {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F8F6] text-[#111827] flex flex-col justify-between selection:bg-[#006B46] selection:text-white antialiased">
      
      {/* Global Glass Navbar */}
      <Navbar activePage={activePage} setActivePage={handlePageChange} />

      {/* Main Content Area */}
      <main className="flex-1">
        {activePage === 'home' && (
          <HomeTeaser setActivePage={handlePageChange} />
        )}

        {activePage === 'about' && (
          <div>
            <AboutSection />
            <TestimonialsSection />
          </div>
        )}

        {activePage === 'services' && (
          <div>
            <ServicesSection setActivePage={handlePageChange} />
          </div>
        )}

        {activePage === 'menus' && (
          <div>
            <MenuSection setActivePage={handlePageChange} />
          </div>
        )}

        {activePage === 'gallery' && (
          <div>
            <GallerySection />
          </div>
        )}

        {activePage === 'enquire' && (
          <div className="pt-16">
            <EnquirySection />
          </div>
        )}

        {activePage === 'contact' && (
          <div className="pt-16">
            <ContactSection />
          </div>
        )}
      </main>

      {/* Global Footer */}
      <Footer setActivePage={handlePageChange} />

      {/* Viewport Fixed Floating Action Buttons */}
      <FixedActionButtons setActivePage={handlePageChange} />

    </div>
  );
}

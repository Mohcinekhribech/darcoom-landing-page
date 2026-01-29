import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Menu from './components/Menu';
import DeliverySection from './components/DeliverySection';
import Reviews from './components/Reviews';
import LocationSection from './components/LocationSection';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    
    // Check initial scroll position
    handleScroll();
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-amber-50 flex flex-col">
      {/* Skip Link for Accessibility */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      
      <Header scrolled={scrolled} />
      
      <main id="main-content" className="flex-grow">
        <Hero />
        <About />
        <Menu />
        <DeliverySection />
        <Reviews />
        <LocationSection />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;

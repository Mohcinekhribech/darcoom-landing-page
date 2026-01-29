import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Hero: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! I'd like to reserve a table or order some delicious food.")}`;

  return (
    <section
      className="relative min-h-screen min-h-[100dvh] flex items-center justify-center overflow-hidden"
      aria-label={`Welcome to ${BUSINESS_INFO.name}`}
    >
      {/* Background Image with Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80&w=2000"
          alt="Delicious Moroccan cuisine spread"
          className="w-full h-full object-cover scale-105"
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/80"
          aria-hidden
        />
        {/* Decorative overlay pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
          }}
          aria-hidden
        />
      </div>

      {/* Main Content */}
      <div className="container-narrow relative z-10 text-center text-white px-4 sm:px-6 pt-28 pb-24">
        {/* Badge */}
        <div className="animate-fade-in-up mb-6">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
            Open Now · Accepting Orders
          </span>
        </div>

        {/* Headline */}
        <h1 className="animate-fade-in-up delay-100 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.08] tracking-tight max-w-4xl mx-auto mb-6">
          Authentic Moroccan
          <span className="block mt-1 sm:mt-2 text-transparent bg-clip-text bg-gradient-to-r from-amber-300 to-amber-500">
            Cuisine in Belgium
          </span>
        </h1>

        {/* Subtitle */}
        <p className="animate-fade-in-up delay-200 text-base sm:text-lg md:text-xl max-w-2xl mx-auto text-white/90 leading-relaxed mb-10 md:mb-12">
          Experience the rich flavors of Morocco with our homemade dishes, warm hospitality, and fresh ingredients — delivered to your table or your door.
        </p>

        {/* CTA Buttons */}
        <div className="animate-fade-in-up delay-300 flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 md:mb-20">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group w-full sm:w-auto btn btn-whatsapp text-base shadow-lg shadow-green-600/30 hover:shadow-xl hover:shadow-green-600/40 hover:-translate-y-0.5"
          >
            <i className="fab fa-whatsapp text-xl group-hover:scale-110 transition-transform" aria-hidden />
            Order via WhatsApp
          </a>
          <a
            href="#menu"
            className="w-full sm:w-auto btn bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
          >
            <i className="fas fa-utensils text-sm" aria-hidden />
            View Our Menu
          </a>
        </div>

        {/* Trust Indicators */}
        <div className="animate-fade-in-up delay-400 flex flex-wrap justify-center items-center gap-8 sm:gap-12 md:gap-16">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline gap-1 mb-1">
              <span className="text-3xl md:text-4xl font-bold text-amber-400">4.1</span>
              <span className="text-amber-400/70 text-sm">/5</span>
            </div>
            <div className="flex text-amber-400 gap-0.5 mb-2" aria-hidden>
              {[...Array(5)].map((_, i) => (
                <i key={i} className={`fas fa-star text-xs ${i >= 4 ? 'opacity-40' : ''}`} />
              ))}
            </div>
            <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
              Google Rating
            </span>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" aria-hidden />

          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">100%</span>
            <div className="text-amber-400 mb-2" aria-hidden>
              <i className="fas fa-heart text-base" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
              Homemade Fresh
            </span>
          </div>

          <div className="hidden sm:block w-px h-16 bg-gradient-to-b from-transparent via-white/20 to-transparent" aria-hidden />

          <div className="flex flex-col items-center">
            <span className="text-3xl md:text-4xl font-bold text-amber-400 mb-1">Fast</span>
            <div className="text-amber-400 mb-2" aria-hidden>
              <i className="fas fa-motorcycle text-base" />
            </div>
            <span className="text-[11px] uppercase tracking-wider text-white/60 font-medium">
              Quick Delivery
            </span>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 hover:text-white transition-colors group"
        aria-label="Scroll to learn more"
      >
        <span className="text-[10px] uppercase tracking-widest font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Discover
        </span>
        <div className="w-6 h-10 rounded-full border-2 border-current flex justify-center pt-2">
          <div className="w-1 h-2 bg-current rounded-full animate-bounce" />
        </div>
      </a>
    </section>
  );
};

export default Hero;

import React from 'react';
import { BUSINESS_INFO } from '../constants';

const About: React.FC = () => {
  const features = [
    {
      icon: 'fa-pepper-hot',
      title: 'Authentic Spices',
      description: 'Imported directly from Moroccan souks for genuine flavors.',
    },
    {
      icon: 'fa-leaf',
      title: 'Fresh Daily',
      description: 'Premium halal meats and hand-picked vegetables.',
    },
    {
      icon: 'fa-heart',
      title: 'Made with Love',
      description: 'Family recipes passed down through generations.',
    },
  ];

  return (
    <section id="about" className="section-spacing bg-white overflow-hidden">
      <div className="container-narrow">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Image Side */}
          <div className="w-full lg:w-1/2 relative">
            <div className="relative z-10">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1555126634-323283e090fa?auto=format&fit=crop&q=80&w=1200"
                  alt="Chef preparing authentic Moroccan dishes"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300" />
              </div>
              
              {/* Floating Card */}
              <div className="absolute -bottom-6 -right-4 sm:right-4 bg-white rounded-xl shadow-xl p-4 sm:p-5 border border-slate-100 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center">
                    <i className="fas fa-award text-amber-600 text-xl" aria-hidden />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-slate-900">10+</p>
                    <p className="text-xs text-slate-500 uppercase tracking-wide">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div
              className="absolute -bottom-8 -left-8 w-32 h-32 sm:w-40 sm:h-40 bg-[#8b1d1d]/10 rounded-2xl -z-0 hidden md:block"
              aria-hidden
            />
            <div
              className="absolute -top-8 -right-8 w-32 h-32 sm:w-40 sm:h-40 border-4 border-amber-400/30 rounded-2xl -z-0 hidden md:block"
              aria-hidden
            />
          </div>

          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-8">
            {/* Header */}
            <div>
              <div className="section-label">
                <span className="w-8 h-0.5 bg-[#8b1d1d]" aria-hidden />
                Our Story
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight font-serif">
                A Taste of Morocco,{' '}
                <span className="text-[#8b1d1d]">Made with Passion</span>
              </h2>
            </div>

            {/* Description */}
            <div className="space-y-5">
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                <strong className="text-slate-800">{BUSINESS_INFO.name}</strong> began with a simple dream: 
                to share the rich, vibrant flavors of our Moroccan heritage with the people of Belgium.
              </p>
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
                Every dish is a tribute to family recipes passed down through generations. 
                From our slow-cooked tagines to our fragrant couscous, experience the magic 
                of authentic Moroccan cooking.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              {features.map(({ icon, title, description }) => (
                <div 
                  key={title} 
                  className="group p-5 rounded-xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100/50 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
                >
                  <div className="w-11 h-11 rounded-lg bg-white shadow-sm flex items-center justify-center text-[#8b1d1d] mb-4 group-hover:scale-110 transition-transform">
                    <i className={`fas ${icon} text-lg`} aria-hidden />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-1">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{description}</p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <a
                href="#menu"
                className="inline-flex items-center gap-2 text-[#8b1d1d] font-semibold hover:gap-4 transition-all duration-300"
              >
                Explore Our Menu
                <i className="fas fa-arrow-right text-sm" aria-hidden />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

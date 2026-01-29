import React from 'react';
import { BUSINESS_INFO } from '../constants';

const DeliverySection: React.FC = () => {
  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hi! I'd like to place an order for delivery.")}`;

  const services = [
    {
      icon: 'fa-utensils',
      title: 'Dine-In Experience',
      description: 'Enjoy our warm Moroccan ambiance. Perfect for dates, family gatherings, or a cozy meal.',
      highlight: 'Reservations welcome',
    },
    {
      icon: 'fa-box',
      title: 'Takeaway',
      description: 'Grab your favorites to go. Ready in 20-30 minutes for your convenience.',
      highlight: 'Quick pickup',
    },
    {
      icon: 'fa-motorcycle',
      title: 'Home Delivery',
      description: 'Hot, fresh dishes delivered to your doorstep. No-contact delivery available.',
      highlight: 'Fast & safe',
    },
  ];

  return (
    <section id="delivery" className="section-spacing bg-[#8b1d1d] text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div
        className="absolute top-0 right-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -mr-48 -mt-48"
        aria-hidden
      />
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-amber-400/10 rounded-full blur-3xl -ml-48 -mb-48"
        aria-hidden
      />
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden
      />

      <div className="container-narrow relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
          
          {/* Content Side */}
          <div className="w-full lg:w-1/2 space-y-10">
            {/* Header */}
            <div>
              <div className="inline-flex items-center gap-2 text-amber-300 text-sm font-semibold uppercase tracking-wider mb-4">
                <i className="fas fa-concierge-bell" aria-hidden />
                Our Services
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif leading-tight">
                Dine In, Take Out,
                <span className="block text-amber-400">or Delivered</span>
              </h2>
            </div>

            {/* Service Cards */}
            <div className="space-y-5">
              {services.map(({ icon, title, description, highlight }, index) => (
                <div
                  key={title}
                  className="group flex gap-5 p-5 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 cursor-default"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-amber-400/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400/30 transition-all duration-300">
                    <i className={`fas ${icon} text-xl`} aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold">{title}</h3>
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-amber-400/20 text-amber-300 text-[10px] font-semibold uppercase tracking-wide">
                        <i className="fas fa-check text-[8px]" aria-hidden />
                        {highlight}
                      </span>
                    </div>
                    <p className="text-white/70 text-sm leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn bg-white text-[#8b1d1d] hover:bg-amber-400 hover:text-slate-900 shadow-xl shadow-black/20"
              >
                <i className="fab fa-whatsapp text-xl" aria-hidden />
                Order Now
              </a>
              <a
                href={`tel:${BUSINESS_INFO.phone}`}
                className="btn bg-white/10 border-2 border-white/30 text-white hover:bg-white/20 hover:border-white/50"
              >
                <i className="fas fa-phone text-sm" aria-hidden />
                Call Us
              </a>
            </div>
          </div>

          {/* Image Side */}
          <div className="w-full lg:w-1/2">
            <div className="relative max-w-md mx-auto lg:max-w-none">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/10">
                <img
                  src="https://images.pexels.com/photos/30068445/pexels-photo-30068445.jpeg"
                  alt="Delicious Moroccan food ready for delivery"
                  className="w-full aspect-[4/3] object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute -bottom-5 -left-5 sm:left-auto sm:-right-5 bg-gradient-to-br from-amber-400 to-orange-500 text-slate-900 px-5 py-4 rounded-xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/30 flex items-center justify-center">
                    <i className="fas fa-location-dot text-lg" aria-hidden />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-wider font-semibold opacity-80">
                      Serving
                    </p>
                    <p className="font-bold text-sm">
                      Houthalen & Area
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Ring */}
              <div 
                className="absolute -top-4 -right-4 w-24 h-24 border-4 border-amber-400/30 rounded-full hidden lg:block"
                aria-hidden
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DeliverySection;

import React from 'react';
import { MENU_HIGHLIGHTS, BUSINESS_INFO } from '../constants';

const Menu: React.FC = () => {
  const handleOrder = (itemName: string) => {
    const text = `Hello! I'd like to order the "${itemName}" for delivery. Could you please help me?`;
    window.open(
      `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(text)}`,
      '_blank'
    );
  };

  return (
    <section id="menu" className="section-spacing bg-gradient-to-b from-amber-50/80 to-orange-50/50 overflow-hidden">
      <div className="container-narrow">
        {/* Section Header */}
        <header className="section-header">
          <div className="section-label justify-center">
            <i className="fas fa-utensils text-xs" aria-hidden />
            Chef's Selection
          </div>
          <h2 className="section-title font-serif">
            Our Signature Dishes
          </h2>
          <div className="decorative-line" aria-hidden />
          <p className="mt-5 text-slate-600 max-w-2xl mx-auto">
            Handcrafted with authentic spices and fresh ingredients, each dish tells a story of Moroccan tradition.
          </p>
        </header>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {MENU_HIGHLIGHTS.map((item, index) => (
            <article
              key={item.id}
              className="group card hover-lift bg-white"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className="relative h-52 sm:h-56 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                {/* Price Tag */}
                <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-lg">
                  <span className="font-bold text-[#8b1d1d]">{item.price}</span>
                </div>
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#8b1d1d] text-white text-xs font-semibold uppercase tracking-wide shadow-lg">
                    <i className="fas fa-fire-flame-curved text-amber-300" aria-hidden />
                    {item.category}
                  </span>
                </div>

                {/* Quick Order Button (visible on hover) */}
                <button
                  onClick={() => handleOrder(item.name)}
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 btn btn-whatsapp text-sm py-2 px-5 shadow-xl"
                >
                  <i className="fab fa-whatsapp" aria-hidden />
                  Quick Order
                </button>
              </div>

              {/* Content */}
              <div className="p-5 sm:p-6">
                <h3 className="text-lg sm:text-xl font-bold font-serif text-slate-900 mb-2 group-hover:text-[#8b1d1d] transition-colors">
                  {item.name}
                </h3>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-5">
                  {item.description}
                </p>
                <button
                  type="button"
                  onClick={() => handleOrder(item.name)}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl border-2 border-slate-200 text-slate-700 font-semibold text-sm hover:border-[#8b1d1d] hover:text-[#8b1d1d] hover:bg-red-50/50 transition-all duration-300"
                >
                  <i className="fab fa-whatsapp text-green-600" aria-hidden />
                  Order via WhatsApp
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-14 md:mt-16 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-6 sm:p-8 rounded-2xl bg-white shadow-lg border border-slate-100">
            <div className="text-center sm:text-left">
              <p className="text-slate-900 font-semibold mb-1">
                Want to see our full menu?
              </p>
              <p className="text-slate-500 text-sm">
                Vegetarian & vegan options available
              </p>
            </div>
            <a
              href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! Could you please send me your full menu?")}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary text-sm whitespace-nowrap"
            >
              <i className="fas fa-book-open" aria-hidden />
              Request Full Menu
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu;

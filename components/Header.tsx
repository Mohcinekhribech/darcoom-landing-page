import React, { useState } from 'react';
import { BUSINESS_INFO } from '../constants';

interface HeaderProps {
  scrolled: boolean;
}

const NAV_LINKS = [
  { label: 'About', href: '#about', icon: 'fa-info-circle' },
  { label: 'Menu', href: '#menu', icon: 'fa-utensils' },
  { label: 'Delivery', href: '#delivery', icon: 'fa-motorcycle' },
  { label: 'Location', href: '#location', icon: 'fa-location-dot' },
];

const Header: React.FC<HeaderProps> = ({ scrolled }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const whatsappUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! I'd like to make a reservation or place an order.")}`;

  const closeMobile = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-lg shadow-lg shadow-slate-900/5 py-3'
          : 'bg-gradient-to-b from-black/30 to-transparent py-4 sm:py-5'
      }`}
    >
      <div className="container-narrow">
        <div className="flex justify-between items-center gap-4">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-2.5 group"
            aria-label={`${BUSINESS_INFO.name} – Home`}
            onClick={closeMobile}
          >
            <span
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center font-bold text-lg shadow-lg transition-all duration-300 group-hover:scale-105 ${
                scrolled
                  ? 'bg-gradient-to-br from-[#8b1d1d] to-[#6d1717] text-white'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/20'
              }`}
            >
              {BUSINESS_INFO.name.charAt(0)}
            </span>
            <span
              className={`font-serif font-bold text-lg sm:text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white'
              }`}
            >
              {BUSINESS_INFO.name}
            </span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {NAV_LINKS.map(({ label, href }) => (
              <a
                key={label}
                href={href}
                className={`px-4 py-2 rounded-lg font-medium text-sm transition-all duration-200 ${
                  scrolled
                    ? 'text-slate-600 hover:text-[#8b1d1d] hover:bg-red-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {label}
              </a>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-3">
            {/* WhatsApp Button */}
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-4 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                scrolled
                  ? 'bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-green-600/20'
                  : 'bg-white/20 backdrop-blur-md text-white border border-white/20 hover:bg-white/30'
              }`}
            >
              <i className="fab fa-whatsapp text-lg" aria-hidden />
              <span className="hidden md:inline">Order Now</span>
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`lg:hidden w-10 h-10 rounded-lg flex items-center justify-center transition-all duration-200 ${
                scrolled
                  ? 'text-slate-700 hover:bg-slate-100'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-expanded={mobileOpen}
              aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
            >
              <div className="relative w-5 h-4">
                <span
                  className={`absolute left-0 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${mobileOpen ? 'top-1.5 rotate-45' : 'top-0'}`}
                />
                <span
                  className={`absolute left-0 top-1.5 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${mobileOpen ? 'opacity-0' : 'opacity-100'}`}
                />
                <span
                  className={`absolute left-0 w-5 h-0.5 rounded-full transition-all duration-300 ${
                    scrolled ? 'bg-slate-700' : 'bg-white'
                  } ${mobileOpen ? 'top-1.5 -rotate-45' : 'top-3'}`}
                />
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`lg:hidden transition-all duration-300 ease-out overflow-hidden ${
            mobileOpen ? 'max-h-96 opacity-100 mt-4' : 'max-h-0 opacity-0 mt-0'
          }`}
        >
          <nav
            className={`p-4 rounded-2xl ${
              scrolled
                ? 'bg-slate-50 border border-slate-100'
                : 'bg-white/10 backdrop-blur-lg border border-white/10'
            }`}
            aria-label="Mobile navigation"
          >
            <ul className="space-y-1">
              {NAV_LINKS.map(({ label, href, icon }) => (
                <li key={label}>
                  <a
                    href={href}
                    onClick={closeMobile}
                    className={`flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-all duration-200 ${
                      scrolled
                        ? 'text-slate-700 hover:bg-white hover:text-[#8b1d1d] hover:shadow-sm'
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <i className={`fas ${icon} text-sm opacity-60`} aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
            
            {/* Mobile CTA */}
            <div className="mt-4 pt-4 border-t border-slate-200/20">
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
                className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-[#25D366] text-white font-semibold transition-all duration-200 hover:bg-[#128C7E]"
              >
                <i className="fab fa-whatsapp text-xl" aria-hidden />
                Order via WhatsApp
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;

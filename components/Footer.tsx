import React from 'react';
import { BUSINESS_INFO } from '../constants';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', href: '#about' },
    { label: 'Our Menu', href: '#menu' },
    { label: 'Delivery', href: '#delivery' },
    { label: 'Location', href: '#location' },
  ];

  const legalLinks = [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ];

  return (
    <footer className="bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative Top Border */}
      <div className="h-1 bg-gradient-to-r from-[#8b1d1d] via-amber-500 to-[#8b1d1d]" aria-hidden />
      
      <div className="container-narrow py-12 sm:py-16 lg:py-20">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 mb-12 lg:mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <a href="#" className="inline-flex items-center gap-3 mb-6 group">
              <span className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#8b1d1d] to-[#6d1717] flex items-center justify-center text-white font-bold text-xl shadow-lg group-hover:scale-105 transition-transform">
                {BUSINESS_INFO.name.charAt(0)}
              </span>
              <div>
                <h3 className="text-xl font-bold font-serif">{BUSINESS_INFO.name}</h3>
                <p className="text-slate-400 text-xs">Authentic Moroccan Cuisine</p>
              </div>
            </a>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-sm">
              Experience the rich flavors of Morocco in the heart of Belgium. 
              Fresh ingredients, authentic recipes, and warm hospitality.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {BUSINESS_INFO.socials.instagram && (
                <a
                  href={BUSINESS_INFO.socials.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-gradient-to-br hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                  aria-label="Follow us on Instagram"
                >
                  <i className="fab fa-instagram text-lg" />
                </a>
              )}
              {BUSINESS_INFO.socials.facebook && (
                <a
                  href={BUSINESS_INFO.socials.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all duration-300"
                  aria-label="Follow us on Facebook"
                >
                  <i className="fab fa-facebook-f" />
                </a>
              )}
              <a
                href={`https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-400 hover:bg-green-600 hover:text-white transition-all duration-300"
                aria-label="Contact us on WhatsApp"
              >
                <i className="fab fa-whatsapp text-lg" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    className="text-slate-400 text-sm hover:text-white hover:pl-1 transition-all duration-200 inline-flex items-center gap-2"
                  >
                    <i className="fas fa-chevron-right text-[8px] text-amber-400/50" aria-hidden />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-amber-400 font-semibold text-sm uppercase tracking-wider mb-5">
              Contact Us
            </h4>
            <ul className="space-y-4">
              <li>
                <a
                  href={BUSINESS_INFO.mapLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-slate-400 text-sm hover:text-white transition-colors"
                >
                  <i className="fas fa-location-dot text-amber-400/70 mt-0.5" aria-hidden />
                  <span className="leading-relaxed">{BUSINESS_INFO.address}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${BUSINESS_INFO.phone}`}
                  className="flex items-center gap-3 text-slate-400 text-sm hover:text-white transition-colors"
                >
                  <i className="fas fa-phone text-amber-400/70" aria-hidden />
                  {BUSINESS_INFO.phone}
                </a>
              </li>
              <li className="flex items-start gap-3 text-slate-400 text-sm">
                <i className="fas fa-clock text-amber-400/70 mt-0.5" aria-hidden />
                <div>
                  {BUSINESS_INFO.openingHours.map((item, idx) => (
                    <p key={idx} className="leading-relaxed">
                      <span className="text-white/70">{item.day}:</span>{' '}
                      {item.hours}
                    </p>
                  ))}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-slate-500 text-sm text-center sm:text-left">
              © {currentYear} {BUSINESS_INFO.name}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {legalLinks.map(({ label, href }) => (
                <a
                  key={label}
                  href={href}
                  className="text-slate-500 text-sm hover:text-slate-300 transition-colors"
                >
                  {label}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

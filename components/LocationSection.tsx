import React from 'react';
import { BUSINESS_INFO } from '../constants';

const LocationSection: React.FC = () => {
  const reservationUrl = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent("Hello! I'd like to reserve a table.")}`;

  const contactInfo = [
    {
      icon: 'fa-location-dot',
      label: 'Address',
      value: BUSINESS_INFO.address,
      link: BUSINESS_INFO.mapLink,
      linkLabel: 'Get Directions',
    },
    {
      icon: 'fa-phone',
      label: 'Phone',
      value: BUSINESS_INFO.phone,
      link: `tel:${BUSINESS_INFO.phone}`,
      linkLabel: 'Call Now',
    },
    {
      icon: 'fa-clock',
      label: 'Hours',
      value: BUSINESS_INFO.openingHours[0]?.hours || 'Open Daily',
      subValue: BUSINESS_INFO.openingHours[0]?.day,
    },
  ];

  return (
    <section id="location" className="section-spacing bg-slate-900 text-white overflow-hidden relative">
      {/* Background Pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}
        aria-hidden
      />

      <div className="container-narrow relative z-10">
        {/* Section Header */}
        <header className="text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 text-sm font-semibold uppercase tracking-wider mb-4">
            <i className="fas fa-map-pin" aria-hidden />
            Find Us
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-serif">
            Visit Our Restaurant
          </h2>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          
          {/* Info Card */}
          <div className="bg-gradient-to-br from-[#8b1d1d] to-[#6d1717] rounded-2xl p-6 sm:p-8 lg:p-10 flex flex-col">
            <div className="flex-1 space-y-8">
              {/* Contact Items */}
              {contactInfo.map(({ icon, label, value, link, linkLabel, subValue }) => (
                <div key={label} className="flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-amber-400">
                    <i className={`fas ${icon} text-lg`} aria-hidden />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white/60 text-xs uppercase tracking-wider mb-1">{label}</p>
                    <p className="text-white font-semibold leading-snug">{value}</p>
                    {subValue && (
                      <p className="text-white/70 text-sm mt-0.5">{subValue}</p>
                    )}
                    {link && (
                      <a
                        href={link}
                        target={link.startsWith('http') ? '_blank' : undefined}
                        rel={link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-1.5 mt-2 text-amber-400 text-sm font-medium hover:text-amber-300 hover:gap-2.5 transition-all"
                      >
                        {linkLabel}
                        <i className="fas fa-arrow-right text-xs" aria-hidden />
                      </a>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="mt-10 flex flex-col sm:flex-row gap-4">
              <a
                href={reservationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn bg-white text-[#8b1d1d] hover:bg-amber-400 hover:text-slate-900"
              >
                <i className="fab fa-whatsapp text-lg" aria-hidden />
                Reserve a Table
              </a>
              <a
                href={BUSINESS_INFO.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 btn bg-white/10 border-2 border-white/20 text-white hover:bg-white/20"
              >
                <i className="fas fa-map text-sm" aria-hidden />
                Directions
              </a>
            </div>
          </div>

          {/* Map */}
          <div className="relative rounded-2xl overflow-hidden shadow-2xl min-h-[350px] lg:min-h-0 group">
            <iframe
              src="https://www.google.com/maps?q=Weg+naar+Zwartberg+102,+3530+Houthalen-Helchteren,+Belgium&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: '400px' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title={`${BUSINESS_INFO.name} location`}
              className="grayscale group-hover:grayscale-0 transition-all duration-500"
            />
            
            {/* Map Overlay on Load */}
            <div className="absolute inset-0 bg-slate-900/10 pointer-events-none group-hover:bg-transparent transition-colors duration-300" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default LocationSection;

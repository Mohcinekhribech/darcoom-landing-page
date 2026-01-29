import React, { useState, useEffect } from 'react';
import { BUSINESS_INFO } from '../constants';

const WhatsAppButton: React.FC = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  // Show button after scrolling down
  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const openWhatsApp = (msg: string) => {
    const url = `https://wa.me/${BUSINESS_INFO.phone.replace(/\D/g, '')}?text=${encodeURIComponent(msg)}`;
    window.open(url, '_blank');
    setShowOptions(false);
  };

  const quickActions = [
    {
      label: 'Reserve a Table',
      msg: "Hello! I'd like to reserve a table.",
      icon: 'fa-calendar-check',
      color: 'text-blue-500',
    },
    {
      label: 'Order Delivery',
      msg: "Hello! I'd like to order food for delivery.",
      icon: 'fa-motorcycle',
      color: 'text-orange-500',
    },
    {
      label: 'See Full Menu',
      msg: 'Hello! Can I see your full menu?',
      icon: 'fa-book-open',
      color: 'text-purple-500',
    },
    {
      label: 'Ask a Question',
      msg: 'Hello! I have a question.',
      icon: 'fa-circle-question',
      color: 'text-green-500',
    },
  ];

  return (
    <div
      className={`fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-[9999] flex flex-col items-end gap-3 transition-all duration-300 ${
        isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'
      }`}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
        paddingRight: 'env(safe-area-inset-right)',
      }}
    >
      {/* Options Panel */}
      {showOptions && (
        <div
          className="bg-white rounded-2xl shadow-2xl border border-slate-100 w-72 sm:w-80 whatsapp-popover-in overflow-hidden"
          role="dialog"
          aria-label="WhatsApp quick actions"
        >
          {/* Header */}
          <div className="bg-[#075E54] p-4 flex items-center gap-3">
            <div className="w-11 h-11 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
              <i className="fab fa-whatsapp text-white text-2xl" aria-hidden />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-white font-semibold truncate">{BUSINESS_INFO.name}</p>
              <p className="text-white/70 text-xs flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-green-400" aria-hidden />
                Usually replies instantly
              </p>
            </div>
            <button
              onClick={() => setShowOptions(false)}
              className="w-8 h-8 rounded-full hover:bg-white/10 flex items-center justify-center text-white/70 hover:text-white transition-colors"
              aria-label="Close"
            >
              <i className="fas fa-times" />
            </button>
          </div>

          {/* Content */}
          <div className="p-4">
            <p className="text-slate-600 text-sm mb-4">
              Hi there! How can we help you today?
            </p>
            <div className="space-y-2">
              {quickActions.map(({ label, msg, icon, color }) => (
                <button
                  key={label}
                  type="button"
                  onClick={() => openWhatsApp(msg)}
                  className="w-full flex items-center gap-3 p-3 rounded-xl bg-slate-50 hover:bg-slate-100 text-left transition-colors group"
                >
                  <div className={`w-9 h-9 rounded-lg bg-white shadow-sm flex items-center justify-center ${color} group-hover:scale-110 transition-transform`}>
                    <i className={`fas ${icon} text-sm`} aria-hidden />
                  </div>
                  <span className="text-slate-700 text-sm font-medium">{label}</span>
                  <i className="fas fa-chevron-right text-slate-300 text-xs ml-auto group-hover:text-slate-400 group-hover:translate-x-0.5 transition-all" aria-hidden />
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-slate-50 border-t border-slate-100">
            <p className="text-[10px] text-slate-400 text-center">
              Powered by WhatsApp Business
            </p>
          </div>
        </div>
      )}

      {/* Main Button */}
      <button
        type="button"
        onClick={() => setShowOptions(!showOptions)}
        className={`group relative w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 ${
          showOptions 
            ? 'bg-slate-700 hover:bg-slate-800 rotate-0' 
            : 'bg-[#25D366] hover:bg-[#128C7E] hover:scale-105'
        }`}
        aria-expanded={showOptions}
        aria-label={showOptions ? 'Close WhatsApp menu' : 'Open WhatsApp chat'}
      >
        {/* Pulse Ring */}
        {!showOptions && (
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20" aria-hidden />
        )}
        
        <i
          className={`text-white text-2xl sm:text-3xl transition-transform duration-300 ${
            showOptions ? 'fas fa-times rotate-90' : 'fab fa-whatsapp rotate-0'
          }`}
          aria-hidden
        />

        {/* Tooltip */}
        {!showOptions && (
          <span className="absolute right-full mr-3 px-3 py-2 rounded-lg bg-slate-900 text-white text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity hidden lg:block shadow-lg">
            Chat with us
            <span className="absolute top-1/2 -right-1 -translate-y-1/2 w-2 h-2 bg-slate-900 rotate-45" aria-hidden />
          </span>
        )}
      </button>

      {/* Notification Badge */}
      {!showOptions && (
        <span className="absolute top-0 right-0 w-5 h-5 rounded-full bg-red-500 text-white text-[10px] font-bold flex items-center justify-center shadow-lg animate-bounce">
          1
        </span>
      )}
    </div>
  );
};

export default WhatsAppButton;

import React, { useState, useEffect } from 'react';

export default function StickyNav({ pricePerNight, rating, reviewCount }) {
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState('Photos');

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down past hero section (approx 600px)
      if (window.scrollY > 550) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      // Track active section based on scroll offset
      const sections = [
        { id: 'photos', name: 'Photos' },
        { id: 'amenities', name: 'Amenities' },
        { id: 'reviews', name: 'Reviews' },
        { id: 'location', name: 'Location' },
      ];

      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 100) {
            setActiveTab(section.name);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      const yOffset = -80;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  if (!isVisible) return null;

  return (
    <div className="sticky top-0 z-40 bg-white border-b border-gray-200 shadow-sm transition-all duration-300">
      <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Nav Tabs */}
        <div className="flex items-center gap-8 h-full text-sm font-semibold text-gray-700">
          {[
            { name: 'Photos', target: 'photos' },
            { name: 'Amenities', target: 'amenities' },
            { name: 'Reviews', target: 'reviews' },
            { name: 'Location', target: 'location' },
          ].map((tab) => (
            <button
              key={tab.name}
              onClick={() => scrollToSection(tab.target)}
              className={`h-full flex items-center border-b-2 transition ${
                activeTab === tab.name
                  ? 'border-black text-black font-bold'
                  : 'border-transparent text-gray-700 hover:text-black hover:border-gray-300'
              }`}
            >
              {tab.name}
            </button>
          ))}
        </div>

        {/* Right Side Price Summary & Reserve Button */}
        <div className="flex items-center gap-4">
          <div className="text-right">
            <div className="text-sm font-bold text-gray-900">
              ₹{(pricePerNight * 5 + 1000 + 5210).toLocaleString('en-IN')} <span className="font-normal text-xs text-gray-500">for 5 nights</span>
            </div>
            <div className="text-xs text-gray-600 flex items-center justify-end gap-1 font-semibold">
              <span>★ {rating}</span>
              <span>·</span>
              <span className="text-gray-500 font-normal">{reviewCount} reviews</span>
            </div>
          </div>

          <button
            onClick={() => scrollToSection('booking')}
            className="px-6 py-2.5 bg-gradient-to-r from-[#E31C5F] via-[#D70466] to-[#BD1E59] text-white text-sm font-semibold rounded-lg hover:brightness-105 transition shadow-sm"
          >
            Reserve
          </button>
        </div>
      </div>
    </div>
  );
}

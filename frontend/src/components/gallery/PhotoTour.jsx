import React, { useEffect, useState } from 'react';

export default function PhotoTour({ isOpen, images = [], onClose, onPhotoClick, onShareClick }) {
  const [activeCategory, setActiveCategory] = useState('all');

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  // Categories definition matching reference
  const categories = [
    {
      id: 'living-room',
      title: 'Living room 1',
      subtitle: 'Sofa, Accented lighting, Living room',
      thumb: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=200&q=80',
      items: [
        { ...images[5], id: 6 },
        { ...images[10], id: 11 },
        { ...images[11], id: 12 }
      ]
    },
    {
      id: 'bedroom',
      title: 'Bedroom 1',
      subtitle: 'King double bed, Ambient lighting',
      thumb: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=200&q=80',
      items: [
        { ...images[3], id: 4 },
        { ...images[12], id: 13 }
      ]
    },
    {
      id: 'jacuzzi',
      title: 'Private Jacuzzi & Patio',
      subtitle: 'Outdoor lounge, Jacuzzi tub, Palm view',
      thumb: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=200&q=80',
      items: [
        { ...images[0], id: 1 },
        { ...images[1], id: 2 },
        { ...images[2], id: 3 },
        { ...images[8], id: 9 }
      ]
    },
    {
      id: 'kitchen',
      title: 'Kitchen & Dining',
      subtitle: 'Full kitchen, Modern appliances',
      thumb: 'https://images.unsplash.com/photo-1600566753376-12c8ab7fb75b?auto=format&fit=crop&w=200&q=80',
      items: [
        { ...images[6], id: 7 },
        { ...images[13], id: 14 }
      ]
    },
    {
      id: 'exterior',
      title: 'Exterior & Pool',
      subtitle: 'Resort building, Swimming pool',
      thumb: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=200&q=80',
      items: [
        { ...images[4], id: 5 },
        { ...images[9], id: 10 },
        { ...images[14], id: 15 }
      ]
    }
  ];

  const scrollToCategory = (id) => {
    setActiveCategory(id);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-white overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-label="Photo tour"
    >
      {/* Top Header */}
      <div className="sticky top-0 bg-white z-30 px-6 py-4 border-b border-gray-200 flex items-center justify-between">
        <button
          onClick={onClose}
          className="p-2.5 rounded-full hover:bg-gray-100 text-gray-800 transition flex items-center justify-center"
          aria-label="Close photo tour"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <h2 className="text-base font-bold text-gray-900">Photo tour</h2>

        <div className="flex items-center gap-2">
          <button
            onClick={onShareClick}
            className="p-2 rounded-full hover:bg-gray-100 text-gray-800 transition"
            aria-label="Share"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 107.03-3.666 3 3 0 00-7.03 3.666zm0 12.632a3 3 0 107.03-3.666 3 3 0 00-7.03 3.666z" />
            </svg>
          </button>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-5xl mx-auto px-6 py-8">

        {/* Category Thumbnail Navigation Strip */}
        <div className="sticky top-16 bg-white py-4 z-20 overflow-x-auto border-b border-gray-100 mb-8 scrollbar-none flex items-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => scrollToCategory(cat.id)}
              className={`flex flex-col items-center shrink-0 p-2 rounded-xl border transition ${
                activeCategory === cat.id
                  ? 'border-black bg-gray-50'
                  : 'border-transparent hover:bg-gray-50'
              }`}
            >
              <img
                src={cat.thumb}
                alt={cat.title}
                className="w-16 h-12 rounded-lg object-cover mb-1.5 shadow-sm"
              />
              <span className="text-xs font-semibold text-gray-800 whitespace-nowrap">{cat.title}</span>
            </button>
          ))}
        </div>

        {/* Room Sections List */}
        <div className="space-y-16">
          {categories.map((cat) => (
            <div key={cat.id} id={cat.id} className="scroll-mt-36">
              {/* Category Header */}
              <div className="mb-6">
                <h3 className="text-2xl font-bold text-gray-900">{cat.title}</h3>
                <p className="text-sm text-gray-500 mt-1">{cat.subtitle}</p>
              </div>

              {/* Photos Grid for Room */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cat.items.map((item, idx) => {
                  const globalIndex = images.findIndex((img) => img.url === item.url);
                  return (
                    <div
                      key={item.id || idx}
                      onClick={() => onPhotoClick(globalIndex >= 0 ? globalIndex : 0)}
                      className={`group cursor-pointer overflow-hidden rounded-2xl bg-gray-100 relative ${
                        idx === 0 && cat.items.length % 2 !== 0 ? 'md:col-span-2 h-[450px]' : 'h-[320px]'
                      }`}
                    >
                      <img
                        src={item.url}
                        alt={item.caption || cat.title}
                        className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-95 transition duration-300"
                      />
                      {item.caption && (
                        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4 text-white text-xs font-medium">
                          {item.caption}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

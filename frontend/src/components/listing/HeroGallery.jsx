import React from 'react';

export default function HeroGallery({ images = [], onShowAllPhotos, onImageClick }) {
  const heroImages = images.slice(0, 5);

  return (
    <div className="relative rounded-xl overflow-hidden mt-2 grid grid-cols-1 md:grid-cols-4 gap-2 h-[350px] md:h-[450px]">
      {/* Main Large Image */}
      {heroImages[0] && (
        <div
          onClick={() => onImageClick(0)}
          className="md:col-span-2 h-full overflow-hidden cursor-pointer group relative"
        >
          <img
            src={heroImages[0].url}
            alt={heroImages[0].caption || "Hero photo"}
            className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
          />
        </div>
      )}

      {/* Grid of 4 Smaller Images */}
      <div className="hidden md:grid md:col-span-2 grid-cols-2 gap-2 h-full">
        {heroImages.slice(1, 5).map((img, idx) => (
          <div
            key={img.id || idx}
            onClick={() => onImageClick(idx + 1)}
            className="h-full overflow-hidden cursor-pointer group relative"
          >
            <img
              src={img.url}
              alt={img.caption || `Gallery photo ${idx + 2}`}
              className="w-full h-full object-cover group-hover:scale-105 group-hover:brightness-90 transition duration-300"
            />
          </div>
        ))}
      </div>

      {/* Show all photos button */}
      <button
        onClick={() => onShowAllPhotos(0)}
        className="absolute bottom-5 right-5 bg-white text-gray-900 px-4 py-2 rounded-lg border border-black shadow-md hover:bg-gray-100 transition flex items-center gap-2.5 text-sm font-semibold z-10"
      >
        <svg className="w-4 h-4" viewBox="0 0 16 16" fill="currentColor">
          <path d="M3 3h2v2H3V3zm4 0h2v2H7V3zm4 0h2v2h-2V3zM3 7h2v2H3V7zm4 0h2v2H7V7zm4 0h2v2h-2V7zM3 11h2v2H3v-2zm4 0h2v2H7v-2zm4 0h2v2h-2v-2z" />
        </svg>
        Show all photos
      </button>
    </div>
  );
}

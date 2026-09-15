import React, { useEffect } from 'react';

export default function Lightbox({ isOpen, images = [], currentIndex = 0, onClose, onNavigate }) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        onNavigate((currentIndex - 1 + images.length) % images.length);
      } else if (e.key === 'ArrowRight') {
        onNavigate((currentIndex + 1) % images.length);
      } else if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, currentIndex, images.length, onClose, onNavigate]);

  if (!isOpen || !images.length) return null;

  const currentImage = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 flex flex-col justify-between p-4 md:p-8"
      role="dialog"
      aria-modal="true"
      aria-label="Image Lightbox"
    >
      {/* Lightbox Top Control Bar */}
      <div className="flex items-center justify-between text-white z-10">
        <button
          onClick={onClose}
          className="p-2 rounded-full hover:bg-white/20 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Close Lightbox"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <span className="text-sm font-semibold tracking-widest">
          {currentIndex + 1} / {images.length}
        </span>

        <div className="w-10"></div>
      </div>

      {/* Main Image Container & Side Navigation Arrows */}
      <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
        {/* Previous Button */}
        <button
          onClick={() => onNavigate((currentIndex - 1 + images.length) % images.length)}
          className="absolute left-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Previous photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        {/* Display Image */}
        <div className="max-w-5xl max-h-full flex flex-col items-center justify-center p-2">
          <img
            src={currentImage.url}
            alt={currentImage.caption || `Photo ${currentIndex + 1}`}
            className="max-h-[75vh] max-w-full object-contain rounded-lg shadow-2xl transition duration-200"
          />
          {currentImage.caption && (
            <p className="text-white/80 text-sm mt-4 text-center max-w-lg font-normal">
              {currentImage.caption}
            </p>
          )}
        </div>

        {/* Next Button */}
        <button
          onClick={() => onNavigate((currentIndex + 1) % images.length)}
          className="absolute right-4 p-3 bg-white/10 hover:bg-white/30 text-white rounded-full transition z-20 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Next photo"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Bottom Spacer */}
      <div className="h-6"></div>
    </div>
  );
}

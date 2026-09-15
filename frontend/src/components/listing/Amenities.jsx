import React from 'react';

export default function Amenities({ amenities = [], onShowAllAmenities }) {
  const visibleAmenities = amenities.slice(0, 10);

  return (
    <div className="py-8 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">What this place offers</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        {visibleAmenities.map((item, idx) => (
          <div key={idx} className="flex items-center gap-4 text-gray-800 text-sm">
            <svg className="w-6 h-6 text-gray-700 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M5 13l4 4L19 7" />
            </svg>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      <button
        onClick={onShowAllAmenities}
        className="mt-8 px-6 py-3 border border-gray-900 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-100 transition"
      >
        Show all 32 amenities
      </button>
    </div>
  );
}

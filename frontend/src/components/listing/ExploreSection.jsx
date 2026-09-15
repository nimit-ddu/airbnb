import React from 'react';

export default function ExploreSection({ listings = [] }) {
  if (!listings.length) return null;

  return (
    <div className="py-10 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Explore other options in and around Candolim</h3>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {listings.map((item) => (
          <div key={item.id} className="group cursor-pointer">
            <div className="h-56 rounded-xl overflow-hidden mb-3">
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
              />
            </div>
            <div className="flex justify-between items-start text-sm">
              <h4 className="font-semibold text-gray-900 line-clamp-1">{item.title}</h4>
              <span className="flex items-center gap-1 font-medium text-xs">
                ★ {item.rating}
              </span>
            </div>
            <p className="text-xs text-gray-500">{item.location}</p>
            <p className="text-sm font-semibold text-gray-900 mt-1">{item.price} <span className="font-normal text-xs text-gray-500">night</span></p>
          </div>
        ))}
      </div>
    </div>
  );
}

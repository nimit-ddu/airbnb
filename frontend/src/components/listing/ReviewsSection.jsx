import React from 'react';

export default function ReviewsSection({ rating, reviewCount, categoryRatings = [], reviews = [] }) {
  return (
    <div className="py-10 border-b border-gray-200">
      {/* Laurel Wreath Badge */}
      <div className="flex flex-col items-center justify-center text-center py-6">
        <div className="flex items-center justify-center gap-3">
          <span className="text-4xl font-serif text-gray-800">«</span>
          <span className="text-6xl font-bold text-gray-900 tracking-tighter">{rating}</span>
          <span className="text-4xl font-serif text-gray-800">»</span>
        </div>
        <h3 className="text-lg font-bold text-gray-900 mt-2">Guest favourite</h3>
        <p className="text-gray-500 text-sm max-w-sm mt-1">
          One of the most loved homes on Airbnb, according to guests
        </p>
      </div>

      {/* Category Ratings Bar Grid */}
      <div className="grid grid-cols-2 md:grid-cols-6 gap-4 py-8 border-y border-gray-200 text-center my-6">
        {categoryRatings.map((cat, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <span className="text-xs font-semibold text-gray-800">{cat.name}</span>
            <span className="text-base font-bold text-gray-900 my-1">{cat.score}</span>
            <div className="w-12 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="bg-gray-900 h-full rounded-full"
                style={{ width: `${(cat.score / 5) * 100}%` }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      {/* Review Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-6">
        {reviews.map((rev) => (
          <div key={rev.id} className="space-y-3">
            <div className="flex items-center gap-3">
              <img
                src={rev.avatar}
                alt={rev.author}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{rev.author}</h4>
                <p className="text-gray-500 text-xs">{rev.date}</p>
              </div>
            </div>
            <div className="flex items-center gap-1 text-xs text-gray-900">
              {'★'.repeat(rev.rating)}
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{rev.text}</p>
          </div>
        ))}
      </div>

      <button className="mt-4 px-6 py-3 border border-gray-900 rounded-lg text-sm font-semibold text-gray-900 hover:bg-gray-100 transition">
        Show all {reviewCount} reviews
      </button>
    </div>
  );
}

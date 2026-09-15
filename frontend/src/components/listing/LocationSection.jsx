import React from 'react';

export default function LocationSection({ location }) {
  return (
    <div className="py-8 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">Where you'll be</h3>
      <p className="text-gray-600 text-sm mb-6">{location}</p>

      {/* Map visual representation */}
      <div className="relative w-full h-[380px] rounded-2xl overflow-hidden bg-sky-100 border border-gray-200 flex items-center justify-center">
        {/* Decorative Map Styling */}
        <div className="absolute inset-0 bg-gradient-to-tr from-emerald-100 via-sky-100 to-amber-50"></div>
        <div className="absolute w-64 h-64 bg-emerald-200/40 rounded-full blur-xl top-10 left-10"></div>
        <div className="absolute w-80 h-80 bg-sky-200/50 rounded-full blur-2xl bottom-10 right-10"></div>
        
        {/* Pins / Circles */}
        <div className="relative z-10 flex flex-col items-center">
          <div className="w-24 h-24 bg-[#FF385C]/20 rounded-full animate-ping absolute"></div>
          <div className="w-16 h-16 bg-[#FF385C]/30 rounded-full flex items-center justify-center relative">
            <div className="w-10 h-10 bg-[#FF385C] rounded-full flex items-center justify-center text-white shadow-lg">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
            </div>
          </div>
          <span className="mt-2 bg-white px-3 py-1 rounded-full text-xs font-semibold text-gray-800 shadow-md">
            Exact location provided after booking
          </span>
        </div>

        {/* Map Controls */}
        <div className="absolute top-4 right-4 bg-white rounded-lg shadow border border-gray-200 flex flex-col divide-y divide-gray-200 text-gray-700">
          <button className="p-2 hover:bg-gray-50 text-sm font-bold">+</button>
          <button className="p-2 hover:bg-gray-50 text-sm font-bold">-</button>
        </div>
      </div>
    </div>
  );
}

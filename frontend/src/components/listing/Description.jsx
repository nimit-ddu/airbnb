import React, { useState } from 'react';

export default function Description({ text }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="py-6 border-b border-gray-200">
      {/* Translation Badge */}
      <div className="bg-gray-100 p-4 rounded-xl mb-6 text-sm text-gray-800 flex items-center justify-between">
        <span>Some info has been automatically translated.</span>
        <button className="font-semibold underline cursor-pointer hover:text-black">
          Show original
        </button>
      </div>

      {/* Description Content */}
      <div className={`text-gray-800 text-sm leading-relaxed whitespace-pre-line ${isExpanded ? '' : 'line-clamp-4'}`}>
        {text}
      </div>

      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="mt-4 font-semibold text-gray-900 underline flex items-center gap-1 hover:text-black"
      >
        {isExpanded ? 'Show less' : 'Show more'}
        <svg
          className={`w-4 h-4 transform transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
        </svg>
      </button>
    </div>
  );
}

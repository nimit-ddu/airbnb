import React, { useState } from 'react';

export default function ListingHeader({ title, onShareClick }) {
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="pt-6 pb-4">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">
          {title}
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={onShareClick}
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition text-sm font-semibold underline underline-offset-2 text-gray-800"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 107.03-3.666 3 3 0 00-7.03 3.666zm0 12.632a3 3 0 107.03-3.666 3 3 0 00-7.03 3.666z" />
            </svg>
            Share
          </button>

          <button
            onClick={() => setIsSaved(!isSaved)}
            className="flex items-center gap-2 py-2 px-3 rounded-md hover:bg-gray-100 transition text-sm font-semibold underline underline-offset-2 text-gray-800"
          >
            <svg
              className={`w-4 h-4 ${isSaved ? 'text-[#FF385C] fill-[#FF385C]' : ''}`}
              fill={isSaved ? '#FF385C' : 'none'}
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.684a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            {isSaved ? 'Saved' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
}

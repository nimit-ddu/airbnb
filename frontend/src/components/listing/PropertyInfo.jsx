import React from 'react';

export default function PropertyInfo({ specs, rating, reviewCount, host, highlights }) {
  return (
    <div className="py-6 border-b border-gray-200">
      {/* Subheader */}
      <h2 className="text-xl font-semibold text-gray-900">
        {specs.propertyType} in {host ? "Candolim, India" : ""}
      </h2>
      <p className="text-gray-600 text-sm mt-1">
        {specs.guests} guests · {specs.bedrooms} bedroom · {specs.beds} bed · {specs.bathrooms} bathroom
      </p>

      {/* Guest Favourite Rating Banner */}
      <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-gray-900">
        <span className="flex items-center gap-1">
          <svg className="w-4 h-4 fill-current text-gray-900" viewBox="0 0 32 32">
            <path d="M15.094 1.579l-4.124 8.885-9.728 1.161c-.96.115-1.348 1.305-.638 1.956l7.218 6.634-1.92 9.59c-.19.95.83 1.69 1.66 1.207l8.438-4.884 8.438 4.884c.83.483 1.85-.257 1.66-1.207l-1.92-9.59 7.218-6.634c.71-.651.322-1.841-.638-1.956l-9.728-1.161-4.124-8.885c-.43-.925-1.748-.925-2.178 0z" />
          </svg>
          {rating}
        </span>
        <span>·</span>
        <span className="underline cursor-pointer">{reviewCount} reviews</span>
      </div>

      {/* Host Summary */}
      {host && (
        <div className="mt-6 flex items-center gap-4 pt-6 border-t border-gray-200">
          <img
            src={host.avatar}
            alt={host.name}
            className="w-14 h-14 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 text-base">
              Hosted by {host.name}
            </h3>
            <p className="text-gray-500 text-sm">
              {host.isSuperhost ? 'Superhost · ' : ''}{host.yearsHosting} years hosting
            </p>
          </div>
        </div>
      )}

      {/* Feature Highlights */}
      {highlights && highlights.length > 0 && (
        <div className="mt-6 space-y-6 pt-6 border-t border-gray-200">
          {highlights.map((item, idx) => (
            <div key={idx} className="flex gap-4 items-start">
              <div className="mt-0.5 text-gray-800">
                {item.icon === 'key' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H4a1 1 0 01-1-1v-2.586a1 1 0 01.293-.707l5.964-5.964A6 6 0 1121 9z" />
                  </svg>
                )}
                {item.icon === 'superhost' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                  </svg>
                )}
                {item.icon === 'location' && (
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                )}
              </div>
              <div>
                <h4 className="font-semibold text-gray-900 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs mt-0.5">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

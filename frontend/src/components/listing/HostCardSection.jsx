import React from 'react';

export default function HostCardSection({ host }) {
  if (!host) return null;

  return (
    <div className="py-10 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Meet your Host</h3>

      <div className="bg-gray-50 border border-gray-200 rounded-3xl p-8 flex flex-col md:flex-row gap-8 items-start">
        {/* Host Card Profile */}
        <div className="bg-white border border-gray-200 rounded-2xl p-6 flex flex-col items-center text-center shadow-sm min-w-[280px]">
          <div className="relative">
            <img
              src={host.avatar}
              alt={host.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            {host.isSuperhost && (
              <span className="absolute bottom-0 right-0 bg-[#FF385C] text-white p-1.5 rounded-full text-xs">
                ★
              </span>
            )}
          </div>
          <h4 className="text-2xl font-bold text-gray-900 mt-4">{host.name}</h4>
          <span className="text-xs text-gray-500 font-medium">Superhost</span>

          <div className="grid grid-cols-2 gap-4 w-full mt-6 pt-6 border-t border-gray-100 text-left">
            <div>
              <div className="text-xl font-bold text-gray-900">{host.reviewsCount}</div>
              <div className="text-xs text-gray-500 font-medium">Reviews</div>
            </div>
            <div>
              <div className="text-xl font-bold text-gray-900">{host.rating} ★</div>
              <div className="text-xs text-gray-500 font-medium">Rating</div>
            </div>
            <div className="col-span-2 pt-2">
              <div className="text-xl font-bold text-gray-900">{host.yearsHosting}</div>
              <div className="text-xs text-gray-500 font-medium">Years hosting</div>
            </div>
          </div>
        </div>

        {/* Host Info Details */}
        <div className="flex-1 space-y-6">
          <div>
            <h5 className="font-semibold text-gray-900 text-base mb-2">Host details</h5>
            <p className="text-sm text-gray-600">Response rate: {host.responseRate}%</p>
            <p className="text-sm text-gray-600">Responds {host.responseTime}</p>
          </div>

          {host.coHosts && host.coHosts.length > 0 && (
            <div>
              <h5 className="font-semibold text-gray-900 text-sm mb-3">Co-hosts</h5>
              <div className="flex items-center gap-4">
                {host.coHosts.map((co, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <img
                      src={co.avatar}
                      alt={co.name}
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <span className="text-xs font-semibold text-gray-800">{co.name}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-sm text-gray-700 leading-relaxed pt-2">{host.bio}</p>

          <button className="px-6 py-3 bg-black text-white text-sm font-semibold rounded-lg hover:bg-gray-800 transition">
            Message Host
          </button>
        </div>
      </div>
    </div>
  );
}

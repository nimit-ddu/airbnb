import React, { useState } from 'react';

export default function BookingCard({ pricePerNight, cleaningFee, serviceFee, rating, reviewCount }) {
  const [nights, setNights] = useState(5);
  const [guests, setGuests] = useState(1);
  const [showGuestPicker, setShowGuestPicker] = useState(false);

  const baseTotal = pricePerNight * nights;
  const grandTotal = baseTotal + cleaningFee + serviceFee;

  return (
    <div className="sticky top-28 bg-white border border-gray-200 rounded-2xl p-6 shadow-xl space-y-6">
      {/* Price Header */}
      <div className="flex justify-between items-baseline">
        <div>
          <span className="text-2xl font-bold text-gray-900">₹{pricePerNight.toLocaleString('en-IN')}</span>
          <span className="text-gray-500 text-sm font-normal"> / night</span>
        </div>
        <div className="flex items-center gap-1 text-xs font-semibold text-gray-900">
          <span>★ {rating}</span>
          <span>·</span>
          <span className="text-gray-500 font-normal underline">{reviewCount} reviews</span>
        </div>
      </div>

      {/* Date & Guest Input Matrix */}
      <div className="border border-gray-400 rounded-xl overflow-hidden divide-y divide-gray-400">
        <div className="grid grid-cols-2 divide-x divide-gray-400">
          <div className="p-2.5">
            <label className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
              CHECK-IN
            </label>
            <input
              type="text"
              value="12/11/2023"
              readOnly
              className="w-full text-xs font-medium text-gray-700 bg-transparent focus:outline-none cursor-pointer"
            />
          </div>
          <div className="p-2.5">
            <label className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
              CHECKOUT
            </label>
            <input
              type="text"
              value="17/11/2023"
              readOnly
              className="w-full text-xs font-medium text-gray-700 bg-transparent focus:outline-none cursor-pointer"
            />
          </div>
        </div>

        {/* Guests selector */}
        <div className="p-2.5 relative">
          <label className="block text-[10px] font-bold tracking-wider text-gray-800 uppercase">
            GUESTS
          </label>
          <button
            onClick={() => setShowGuestPicker(!showGuestPicker)}
            className="w-full text-left flex justify-between items-center text-xs font-medium text-gray-800"
          >
            <span>{guests} guest{guests > 1 ? 's' : ''}</span>
            <svg className={`w-4 h-4 text-gray-600 transition-transform ${showGuestPicker ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {/* Guest dropdown menu */}
          {showGuestPicker && (
            <div className="absolute top-full left-0 right-0 bg-white border border-gray-300 rounded-xl shadow-2xl p-4 mt-2 z-30 space-y-4">
              <div className="flex justify-between items-center text-sm">
                <div>
                  <div className="font-semibold text-gray-900">Adults</div>
                  <div className="text-xs text-gray-500">Age 13+</div>
                </div>
                <div className="flex items-center gap-3">
                  <button
                    disabled={guests <= 1}
                    onClick={() => setGuests(guests - 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-black"
                  >
                    -
                  </button>
                  <span className="font-semibold text-sm">{guests}</span>
                  <button
                    disabled={guests >= 2}
                    onClick={() => setGuests(guests + 1)}
                    className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center disabled:opacity-30 disabled:cursor-not-allowed hover:border-black"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Primary Reserve Button */}
      <button className="w-full py-3.5 bg-gradient-to-r from-[#E31C5F] via-[#D70466] to-[#BD1E59] text-white font-semibold rounded-xl text-base shadow-md hover:brightness-105 transition active:scale-[0.99]">
        Reserve
      </button>

      <p className="text-center text-xs text-gray-500 font-normal">
        You won't be charged yet
      </p>

      {/* Itemized Pricing Breakdown */}
      <div className="space-y-3 pt-2 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="underline">₹{pricePerNight.toLocaleString('en-IN')} x {nights} nights</span>
          <span>₹{baseTotal.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Cleaning fee</span>
          <span>₹{cleaningFee.toLocaleString('en-IN')}</span>
        </div>
        <div className="flex justify-between">
          <span className="underline">Airbnb service fee</span>
          <span>₹{serviceFee.toLocaleString('en-IN')}</span>
        </div>
      </div>

      <hr className="border-gray-200" />

      {/* Total before taxes */}
      <div className="flex justify-between items-center font-bold text-base text-gray-900">
        <span>Total before taxes</span>
        <span>₹{grandTotal.toLocaleString('en-IN')}</span>
      </div>
    </div>
  );
}

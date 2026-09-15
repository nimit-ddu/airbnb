import React, { useState } from 'react';

export default function CalendarSection() {
  const [selectedRange, setSelectedRange] = useState({ start: 12, end: 17 });

  const renderMonth = (monthName, startDay, totalDays) => {
    const days = [];
    // Padding
    for (let i = 0; i < startDay; i++) {
      days.push(<div key={`pad-${i}`} className="h-9"></div>);
    }
    for (let d = 1; d <= totalDays; d++) {
      const isSelected = d >= selectedRange.start && d <= selectedRange.end && monthName === "November 2023";
      days.push(
        <button
          key={d}
          onClick={() => setSelectedRange({ start: d, end: Math.min(d + 4, totalDays) })}
          className={`h-9 w-9 mx-auto rounded-full flex items-center justify-center text-xs font-semibold ${
            isSelected
              ? 'bg-black text-white'
              : 'hover:border hover:border-black text-gray-800'
          }`}
        >
          {d}
        </button>
      );
    }
    return days;
  };

  return (
    <div className="py-8 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">5 nights in Candolim</h3>
      <p className="text-gray-500 text-sm mb-6">Nov 12, 2023 - Nov 17, 2023</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* November 2023 */}
        <div>
          <h4 className="font-semibold text-center text-sm mb-4">November 2023</h4>
          <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-2">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-y-1">
            {renderMonth("November 2023", 3, 30)}
          </div>
        </div>

        {/* December 2023 */}
        <div>
          <h4 className="font-semibold text-center text-sm mb-4">December 2023</h4>
          <div className="grid grid-cols-7 text-center text-xs text-gray-500 font-semibold mb-2">
            <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
          </div>
          <div className="grid grid-cols-7 gap-y-1">
            {renderMonth("December 2023", 5, 31)}
          </div>
        </div>
      </div>

      <div className="mt-6 flex justify-between items-center text-xs text-gray-600">
        <button className="p-1 hover:bg-gray-100 rounded">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
          </svg>
        </button>
        <button onClick={() => setSelectedRange({ start: 0, end: 0 })} className="font-semibold underline hover:text-black">
          Clear dates
        </button>
      </div>
    </div>
  );
}

import React from 'react';

export default function SleepingArrangements({ rooms = [] }) {
  if (!rooms.length) return null;

  return (
    <div className="py-8 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Where you'll sleep</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {rooms.map((room, idx) => (
          <div key={idx} className="border border-gray-200 rounded-xl p-4 flex flex-col">
            <div className="h-32 overflow-hidden rounded-lg mb-3">
              <img
                src={room.image}
                alt={room.room}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-gray-900 text-base">{room.room}</h4>
            <p className="text-gray-500 text-sm">{room.details}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

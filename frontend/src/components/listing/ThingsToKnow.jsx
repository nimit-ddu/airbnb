import React from 'react';

export default function ThingsToKnow({ thingsToKnow }) {
  if (!thingsToKnow) return null;

  return (
    <div className="py-10 border-b border-gray-200">
      <h3 className="text-xl font-semibold text-gray-900 mb-6">Things to know</h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
        {/* House Rules */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">House rules</h4>
          <ul className="space-y-2.5 text-gray-600">
            {thingsToKnow.houseRules.map((rule, idx) => (
              <li key={idx}>{rule}</li>
            ))}
          </ul>
        </div>

        {/* Safety & property */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Safety & property</h4>
          <ul className="space-y-2.5 text-gray-600">
            {thingsToKnow.safety.map((item, idx) => (
              <li key={idx}>{item}</li>
            ))}
          </ul>
        </div>

        {/* Cancellation policy */}
        <div>
          <h4 className="font-semibold text-gray-900 mb-3">Cancellation policy</h4>
          <p className="text-gray-600 leading-relaxed">
            {thingsToKnow.cancellation}
          </p>
        </div>
      </div>
    </div>
  );
}

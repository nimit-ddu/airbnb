import React, { useEffect, useState } from 'react';

export default function ShareModal({ isOpen, title, onClose }) {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleCopy = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-label="Share listing"
    >
      <div className="bg-white rounded-2xl w-full max-w-lg p-6 shadow-2xl space-y-6">
        <div className="flex justify-between items-center pb-4 border-b border-gray-200">
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full text-gray-700 transition"
          >
            ✕
          </button>
          <h3 className="font-bold text-gray-900 text-base">Share this place</h3>
          <div className="w-8"></div>
        </div>

        <p className="text-sm font-medium text-gray-800">{title}</p>

        <div className="flex items-center gap-3 border border-gray-300 rounded-xl p-3 bg-gray-50">
          <input
            type="text"
            readOnly
            value={window.location.href}
            className="w-full text-xs font-mono text-gray-600 bg-transparent focus:outline-none"
          />
          <button
            onClick={handleCopy}
            className="px-4 py-2 bg-black text-white text-xs font-semibold rounded-lg hover:bg-gray-800 transition shrink-0"
          >
            {copied ? 'Copied!' : 'Copy Link'}
          </button>
        </div>
      </div>
    </div>
  );
}

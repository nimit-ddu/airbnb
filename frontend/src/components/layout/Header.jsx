import React from 'react';

export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white border-b border-gray-200">
      <div className="max-w-[1120px] mx-auto px-6 h-20 flex items-center justify-between">
        {/* Logo Container */}
        <div className="flex items-center gap-2 cursor-pointer group">
          <svg
            className="h-8 text-[#FF385C]"
            viewBox="0 0 32 32"
            fill="currentColor"
            aria-label="Airbnb homepage"
          >
            <path d="M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 2.472.96 3.396l.011.315c0 4.408-3.6 8.006-8.006 8.006-3.292 0-6.18-1.999-7.494-4.89l-.09-.214-.09.214c-1.314 2.891-4.202 4.89-7.494 4.89-4.406 0-8.006-3.598-8.006-8.006 0-.924.243-1.805.91-3.396l.145-.353c.986-2.296 5.146-11.006 7.1-14.836l.533-1.025C9.537 1.963 10.992 1 13 1h3zm0 2h-3c-1.229 0-2.228.6-3.21 2.37l-.46.883c-1.912 3.748-5.992 12.302-6.945 14.524l-.128.312c-.567 1.353-.757 2.05-.795 2.766l-.006.239c0 3.308 2.698 6.006 6.006 6.006 2.656 0 5.01-1.745 5.794-4.322l.14-.522h2.208l.14.522c.784 2.577 3.138 4.322 5.794 4.322 3.308 0 6.006-2.698 6.006-6.006 0-.716-.19-1.413-.757-2.766l-.128-.312c-.953-2.222-5.033-10.776-6.945-14.524l-.46-.883C18.228 3.6 17.229 3 16 3zm0 15c1.657 0 3 1.343 3 3 0 2.21-1.79 4-4 4s-4-1.79-4-4c0-1.657 1.343-3 3-3zm0 2c-.552 0-1 .448-1 1 0 1.105.895 2 2 2s2-.895 2-2c0-.552-.448-1-1-1z" />
          </svg>
          <span className="font-bold text-2xl tracking-tighter text-[#FF385C] select-none">
            airbnb
          </span>
        </div>

        {/* Center Search Pill Bar */}
        <div className="hidden md:flex items-center border border-gray-300 rounded-full py-2 px-4 shadow-sm hover:shadow-md transition cursor-pointer divide-x divide-gray-200">
          <button className="px-3 text-sm font-semibold text-gray-800">Anywhere</button>
          <button className="px-3 text-sm font-semibold text-gray-800">Any week</button>
          <div className="pl-3 flex items-center gap-3">
            <span className="text-sm font-normal text-gray-500">Add guests</span>
            <div className="bg-[#FF385C] text-white p-2 rounded-full flex items-center justify-center">
              <svg className="w-3.5 h-3.5" viewBox="0 0 32 32" fill="none" stroke="currentColor" strokeWidth="4">
                <path d="M13 24a11 11 0 1 0 0-22 11 11 0 0 0 0 22zm8-3 9 9" />
              </svg>
            </div>
          </div>
        </div>

        {/* Right Menu */}
        <div className="flex items-center gap-3">
          <button className="hidden md:block px-3 py-2 text-sm font-semibold text-gray-800 rounded-full hover:bg-gray-100 transition">
            Airbnb your home
          </button>
          <button className="p-2.5 rounded-full hover:bg-gray-100 text-gray-700 transition" aria-label="Language & region">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
            </svg>
          </button>
          <button className="flex items-center gap-3 border border-gray-300 rounded-full py-1.5 px-3 hover:shadow-md transition">
            <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <div className="w-7 h-7 bg-gray-500 rounded-full text-white flex items-center justify-center text-xs font-semibold">
              S
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}

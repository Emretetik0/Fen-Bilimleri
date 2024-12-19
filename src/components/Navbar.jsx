import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="w-full h-24 bg-yellow-500 sticky top-0 flex items-center shadow-md z-50">
      <div className="flex items-center justify-between w-full max-w-6xl mx-auto h-full">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-black rounded-full flex items-center justify-center">
            <span className="text-white font-bold text-lg">FB</span>
          </div>
          <h1 className="text-black font-extrabold text-lg sm:text-xl">Fen Bilimleri</h1>
        </div>

        {/* Menü */}
        <div className="hidden md:flex space-x-8">
          <a href="#about" className="text-black font-bold hover:text-white transition">
            Hakkımızda
          </a>
          <a href="#team" className="text-black font-bold hover:text-white transition">
            Öğretmen Kadromuz
          </a>
          <a href="#announcement" className="text-black font-bold hover:text-white transition">
            Duyurular
          </a>
        </div>

        {/* Mobil Menü Butonu */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-black hover:text-white p-2"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>

        {/* Açılır Menü */}
        {isMenuOpen && (
          <div className="fixed top-16 left-0 w-full bg-yellow-500 shadow-md flex flex-col items-center space-y-4 py-4 z-50">
            <a href="#about" className="text-black font-bold hover:text-white transition">
              Hakkımızda
            </a>
            <a href="#team" className="text-black font-bold hover:text-white transition">
              Öğretmen Kadromuz
            </a>
            <a href="#announcement" className="text-black font-bold hover:text-white transition">
              Duyurular
            </a>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;

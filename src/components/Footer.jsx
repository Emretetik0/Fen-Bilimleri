import React from 'react';
import { FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-yellow-500 py-8">
      <div className="max-w-7xl mx-auto flex flex-col ">
        {/* Grid Düzeni */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 w-full text-center">

          {/* Mail */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Mail</h2>
            <p className="flex items-center space-x-2">
              <FaEnvelope className="text-yellow-500" />
              <span className="hover:text-white cursor-pointer">info@fenbilimleri.com</span>
            </p>
          </div>

          {/* Adres */}
          <div className="flex flex-col items-center">
            <h2 className="text-lg font-bold mb-4">Adres</h2>
            <p className="flex items-center space-x-2">
              <FaMapMarkerAlt className="text-yellow-500" />
              <span className="hover:text-white cursor-pointer">Yeni, Antalya Cd No:95, 07800 Korkuteli/Antalya</span>
            </p>
          </div>

          {/* İletişim */}
          <div className="flex flex-col items-center ">
            <h2 className="text-lg font-bold mb-4">İletişim</h2>
            <p className="flex items-center space-x-2">
              <FaPhoneAlt className="text-yellow-500" />
              <span className="hover:text-white cursor-pointer">+90 542 143 42 12</span>
            </p>
            <p className="flex items-center space-x-2 mt-4">
              <FaInstagram className="text-yellow-500" />
              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                @korkutelifenbilimleri
              </a>
            </p>
          </div>
        </div>

        {/* Alt Bilgi */}
        <div className="mt-8 text-center text-sm text-yellow-500">
          &copy; {new Date().getFullYear()} Fen Bilimleri. Tüm Hakları Saklıdır.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/footer';
import Team from '../components/Team';
import About from '../components/About';
import Announcement from '../components/Announcements';

const Home = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar */}
      <Navbar />
      {/* Duyurular */}
      <div className="bg-gray-100">
        <Announcement />
      </div>
      {/* İçerik Alanı */}
      <main className="flex-1 p-16 bg-gray-100">
        <div className="max-w-7xl mx-auto">
          {/* Hakkımızda */}
          <div id="about">
            <About />
          </div>
          {/* Ekip Üyeleri */}
          <div id="team">
            <Team />
          </div>
        </div>
      </main>
      {/* Footer */}
      <Footer />
    </div>
  );
};
export default Home;
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Announcement = () => {
  const announcements = [
    { id: 1, text: 'Yeni eğitim dönemi 1 Eylül\'de başlıyor!', image: 'https://via.placeholder.com/600x300?text=Duyuru+1' },
    { id: 2, text: 'Öğrenci kayıtları 15 Ağustos\'ta sona erecek.', image: 'https://via.placeholder.com/600x300?text=Duyuru+2' },
    { id: 3, text: 'Yaz kampı kayıtları başladı, yerinizi ayırtın!', image: 'https://via.placeholder.com/600x300?text=Duyuru+3' },
    { id: 4, text: 'Eğitim seminerleri için kayıtlar açıldı.', image: 'https://via.placeholder.com/600x300?text=Duyuru+4' },
    { id: 5, text: 'Okul açılış etkinliği 5 Eylül\'de gerçekleşecek.', image: 'https://via.placeholder.com/600x300?text=Duyuru+5' },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
    arrows: false, // Remove arrows
  };

  return (
    <div id='announcement' className="max-w-screen-xl mx-auto py-8 mt-4 px-4 bg-gray-100 scroll-mt-20">
      <h1 className="text-3xl font-bold text-center mb-3">DUYURULAR</h1>
      <div className="flex justify-center mb-8">
        <div className="w-16 h-1 bg-blue-500"></div>
      </div>
      <div className="bg-gray-100"> {/* Slider çevresine arka plan rengi ekledik */}
        <Slider {...settings}>
          {announcements.map((announcement) => (
            <div key={announcement.id} className="p-4">
              <img src={announcement.image} alt={`Duyuru ${announcement.id}`} className="w-full h-auto mb-4 rounded" />
              <p className="text-center text-gray-600 text-xl">{announcement.text}</p>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Announcement;
import React from 'react';

const About = () => {
  return (
    <div id="about" className="container mx-auto py-8 px-4  ">
      <h1 className="text-3xl font-bold text-center mb-3">HAKKIMIZDA</h1>
      <div className="flex justify-center mb-8">
        <div className="w-16 h-1 bg-blue-500"></div>
      </div>
      <p className="text-center text-gray-600 mb-12 text-xl">
        Eğitimde lider bir kurum olarak, yılların tecrübesini sunuyoruz.
      </p>
      <p className="text-center text-gray-600 mb-12">
        Fen Bilimleri, öğrencilere en iyi eğitimi sunmak için alanında uzman eğitmenlerle çalışmaktadır.
        Amacımız, öğrencilerimizin bilimsel düşünme becerilerini geliştirmek ve onları geleceğe en iyi şekilde hazırlamaktır.
      </p>
      <p className="text-center text-gray-600 mb-12">
        Eğitim programlarımız, güncel müfredat ve yenilikçi öğretim yöntemleri ile desteklenmektedir.
        Öğrencilerimizin başarıya ulaşmaları için gerekli tüm kaynakları sağlıyoruz.
      </p>
    </div>
  );
};

export default About;

import React, { useState, useEffect } from 'react';
import AboutImage1 from '../assets/images/profil1.jpg';
import AboutImage2 from '../assets/images/profil2.jpg';
import AboutImage3 from '../assets/images/profil3.jpg';
import Visimisi from '../components/Visimisi';

const images = [
  AboutImage1,
  AboutImage2,
  AboutImage3,
  // Tambahkan gambar lainnya jika diperlukan
];

const VisiMisiPage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImageIndex(prevIndex => (prevIndex + 1) % images.length);
    }, 3000); // Ganti gambar setiap 3 detik

    return () => clearInterval(intervalId); // Bersihkan interval saat komponen di-unmount
  }, []);

  return (
    <div className="py-16 bg-gray-50" id="visi-misi">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="order-2 md:order-1">
            <Visimisi />
          </div>
          <div className="order-1 md:order-2">
            <img
              src={images[currentImageIndex]}
              alt="About Image"
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisiMisiPage;

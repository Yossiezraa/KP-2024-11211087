import React from 'react';
import Prestasi from '../components/Prestasi';
import prestasiImage1 from '../assets/prestasi1.jpg';
import prestasiImage2 from '../assets/prestasi2.jpg';
import prestasiImage3 from '../assets/prestasi3.jpg';
import prestasiImage4 from '../assets/prestasi4.jpg';

import prestasiImage6 from '../assets/prestasi6.jpg';
import prestasiImage7 from '../assets/prestasi7.jpg';
import prestasiImage8 from '../assets/prestasi8.jpg';
import prestasiImage9 from '../assets/prestasi9.jpg';
import prestasiImage10 from '../assets/images/pmii.jpg';

const CapaianPrestasiPage = () => {
  return (
    <div className="pt-24 p-6 bg-gray-50" id="prestasi">
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Galeri Capaian Prestasi <br />Siswa Siswi SMP Negeri 4 Kota Bangun</h1>

      {/* Gallery Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto mt-8 text-center">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage1} alt="Prestasi 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Volly Putra Skanesko Cup 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMKN 1 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage2} alt="Prestasi 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 3 Volly Putra Skanesko Cup 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMKN 1 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage3} alt="Prestasi 1" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Volly Putri Skanesko Cup 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMKN 1 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage4} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Lomba Seni Tari Skanesko Expo 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMKN 1 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage6} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Lomba Menyanyi Solo Vokal Skanesko Expo 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Olivia Mariana Biri - Lagu Buah Bolok </p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage6} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 3 Lomba Menyanyi Solo Vokal Skanesko Expo 2 Tahun 2024</h2>
            <p className="text-xs text-gray-600">Ilona Vania Theola - Lagu Aku Menyanyi</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage7} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 3 Lomba Gobak Sodor Dies Natalis SMAN 2 Kota Bangun Ke-18</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMAN 2 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage8} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Lomba Volly Dies Natalis SMAN 2 Kota Bangun Ke-18</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMAN 2 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage9} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 1 Tingkat Sekolah Menengah Pertama Hari Pramuka Ke-62 Tahun 2023</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di SMAN 2 Kota Bangun</p>
          </div>
        </div>
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <img src={prestasiImage10} alt="Prestasi 2" className="w-full h-48 object-cover" />
          <div className="p-4">
            <h2 className="text-sm font-semibold text-blue-900 mb-2">Juara 3 Lomba PMI Kutai Kartanegara</h2>
            <p className="text-xs text-gray-600">Dilaksanakan di Tenggarong</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CapaianPrestasiPage;

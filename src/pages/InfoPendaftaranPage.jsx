import React from 'react';
import Brosur from '../components/Brosur';
import brosurPendaftaranImg from '../assets/brosur pendaftaran.png';

const InfoPendaftaranPage = () => {
  return (
    <div className="pt-24 p-6" id='informasi-pendaftaran'>
      <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">Penerimaan Peserta Didik Baru <br />Tahun Pembelajaran 2024/2025</h1>

      {/* Brosur Component */}
      <div className="flex justify-center">
        <Brosur imageSrc={brosurPendaftaranImg} altText="Brosur Pendaftaran" />
      </div>

      <div className="mt-6 max-w-3xl mx-auto">
        <h2 className="text-md font-semibold text-blue-900 mb-3">Jadwal Kegiatan</h2> {/* Ukuran font lebih kecil */}
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-300 rounded-lg shadow-md">
            <thead>
              <tr className="bg-blue-100">
                <th className="py-2 px-4 border-b border-r text-center text-xs">Kegiatan</th> {/* Ukuran font lebih kecil */}
                <th className="py-2 px-4 border-b text-center text-xs">Tanggal</th> {/* Ukuran font lebih kecil */}
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-2 px-4 border-b border-r text-center text-xs">Pendaftaran</td> {/* Ukuran font lebih kecil */}
                <td className="py-2 px-4 border-b text-center text-xs">20 Juni - 28 Juni 2024</td> {/* Ukuran font lebih kecil */}
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-r text-center text-xs">Pengumuman</td> {/* Ukuran font lebih kecil */}
                <td className="py-2 px-4 border-b text-center text-xs">30 Juni 2024</td> {/* Ukuran font lebih kecil */}
              </tr>
              <tr>
                <td className="py-2 px-4 border-b border-r text-center text-xs">Daftar Ulang</td> {/* Ukuran font lebih kecil */}
                <td className="py-2 px-4 border-b text-center text-xs">1 Juli - 2 Juli 2024</td> {/* Ukuran font lebih kecil */}
              </tr>
            </tbody>
          </table>
        </div>
        
        <h2 className="text-md font-semibold text-blue-900 mt-6 mb-3">Syarat Pendaftaran</h2> {/* Ukuran font lebih kecil */}
        <ul className="list-disc list-inside text-sm"> {/* Ukuran font lebih kecil */}
          <li>Mengisi formulir yang telah disediakan</li>
          <li>Asli dan Fotocopy Surat Keterangan Lulus (SKL) sebanyak 2 lembar</li>
          <li>Asli dan Fotocopy Akta Kelahiran sebanyak 2 lembar</li>
          <li>Asli dan Fotocopy Kartu Keluarga (KK) sebanyak 2 lembar</li>
          <li>Asli dan Fotocopy KTP kedua orangtua sebanyak 2 lembar</li>
          <li>Asli dan Fotocopy KIS/BPJS sebanyak 2 lembar jika ada</li>
          <li>MAP Biola Merah untuk Laki-laki</li>
          <li>MAP Biola Hijau untuk Perempuan</li>
          <li>Pas foto hitam putih ukuran 3x4</li>
        </ul>
      </div>
    </div>
  );
};

export default InfoPendaftaranPage;

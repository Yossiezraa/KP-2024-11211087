import React, { useState, useEffect } from "react";
import HeroImage1 from "../assets/images/profil awal.jpg";
import HeroImage23 from "../assets/images/first-image.jpg";
import HeroImage2 from "../assets/images/second-image.jpg";
import HeroImage3 from "../assets/images/third-image.jpg";
import HeroImage4 from "../assets/images/four-image.jpg";

import PramukaLogo from "../assets/images/pramuka-logo.png";
import PmrLogo from "../assets/images/pmr-logo.png";
import TariLogo from "../assets/images/tari-logo.png";
import FutsalLogo from "../assets/images/futsal-logo.png";
import VoliLogo from "../assets/images/voli-logo.png";
import QuranLogo from "../assets/images/quran-logo.jpg";

import Berita1 from "../assets/images/galang dana.jpg";
import Berita2 from "../assets/images/pmii.jpg";
import Berita3 from "../assets/images/pelepasan.jpg";
import Berita4 from "../assets/images/karnaval.jpg";
import Berita5 from "../assets/images/u17.jpg";
import Berita6 from "../assets/images/koordinasi.jpg";

const HomePage = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroImages = [HeroImage23, HeroImage1, HeroImage2, HeroImage3, HeroImage4];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % heroImages.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [heroImages.length]);

  return (
    <div className="homepage pb-10">
      <div className="container mx-auto px-4">
        {/* Hero Image and Text */}
        <div className="relative overflow-hidden mt-16">
          <img
            src={heroImages[currentImageIndex]}
            alt="Hero Image"
            className="w-full h-[500px] object-cover"
          />
          <div className="absolute inset-0 bg-gray-800 opacity-60" />
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-6">
            <div className="bg-opacity-60 p-8 rounded-lg shadow-lg">
              <h1 className="text-4xl font-bold text-white mb-4">
                Selamat Datang di <br />
                <span className="block">SMP Negeri 4 Kota Bangun</span>
              </h1>
              <a
                href="#informasi-pendaftaran"
                className="bg-yellow-500 text-gray-800 py-2 px-6 rounded-lg text-lg font-semibold hover:bg-yellow-400 transition-colors duration-300"
              >
                Informasi Pendaftaran
              </a>
            </div>
          </div>
        </div>

        {/* Ekstrakurikuler Section */}
        <div className="services pt-24">
          <h1 className="text-center lg:text-4xl text-2xl font-medium mb-4">
            Ekstrakurikuler
          </h1>
          <p className="text-center mb-8 text-sm">
            Berbagai kegiatan ekstrakurikuler yang dapat diikuti oleh siswa
            untuk mengembangkan bakat dan minat mereka.
          </p>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {[
                {
                  image: PramukaLogo,
                  title: "Pramuka",
                  description:
                    "Belajar disiplin dan kepemimpinan melalui kegiatan Pramuka.",
                },
                {
                  image: PmrLogo,
                  title: "PMR",
                  description:
                    "Meningkatkan keterampilan pertolongan pertama dan kepedulian sosial.",
                },
                {
                  image: TariLogo,
                  title: "Seni Tari dan Gambar",
                  description:
                    "Mengembangkan kreativitas melalui seni tari dan gambar.",
                },
                {
                  image: FutsalLogo,
                  title: "Futsal",
                  description:
                    "Menyalurkan bakat di bidang olahraga dan kerja sama tim.",
                },
                {
                  image: VoliLogo,
                  title: "Voli",
                  description:
                    "Bermain voli untuk meningkatkan kebugaran dan kerjasama tim.",
                },
                {
                  image: QuranLogo,
                  title: "Baca Tulis Al-Quran",
                  description:
                    "Memperdalam pengetahuan agama dengan membaca dan menulis Al-Quran.",
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className="box w-72 p-4 bg-white shadow-sm hover:shadow-md transition-shadow duration-300 rounded-lg"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[100px] object-contain p-2 rounded-t-lg"
                  />
                  <div className="p-2">
                    <h3 className="text-center text-sm font-semibold mt-1 mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs text-center">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Berita Section */}
        <div className="berita pt-24" id="berita">
          <h1 className="text-center lg:text-4xl text-2xl font-medium mb-4">
            Berita Terbaru
          </h1>
          <p className="text-center mb-8 text-sm">
            Temukan informasi terbaru dan aktivitas penting di SMP Negeri 4 Kota
            Bangun.
          </p>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                image: Berita1,
                title: "Solidaritas di Penggalangan Dana",
                description:
                  "Siswa dan guru bersatu mengumpulkan dana untuk membantu korban kebakaran di Kedang Ipil. Aksi ini menunjukkan solidaritas dan kepedulian warga sekolah.",
              },
              {
                image: Berita2,
                title: "Prestasi Gemilang di Lomba PMI",
                description:
                  "Tim PMI SMP Negeri 4 Kota Bangun berhasil meraih juara dalam kompetisi tingkat Kabupaten, membuktikan keunggulan di bidang kesehatan.",
              },
              {
                image: Berita3,
                title: "Pelepasan Siswa/Siswi: Kenangan Tak Terlupakan",
                description:
                  "Acara pelepasan siswa siswi tahun ajaran 2023/2024 berlangsung meriah dengan momen-momen yang akan selalu dikenang.",
              },
              {
                image: Berita4,
                title: "Karnaval Pembangunan dan Budaya Di Desa Kota Bangun 3",
                description:
                  "Dalam karnaval ini, warga desa dan peserta dari berbagai komunitas berkumpul untuk menampilkan berbagai atraksi budaya, parade, dan pameran seni.",
              },
              {
                image: Berita5,
                title: "PASKIBRAKA 2024 HUT RI KE-79",
                description:
                  "DIRGAHAYU KE-79, anggota PASKIBRAKA dari SMP Negeri 4 Kota Bangun menjalankan tugas mulia dalam mengibarkan bendera merah putih pada upacara kemerdekaan. ",
              },
              {
                image: Berita6,
                title: "Rapat Koordinasi Komite, Orang Tua di BPU Desa Kota Bangun 2 ",
                description:
                  "Rapat untuk membangun kerjasama yang lebih baik antara sekolah dan keluarga dalam mendukung perkembangan dan kesejahteraan siswa.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="box p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg"
              >
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[180px] object-cover rounded-t-lg"
                />
                <div className="p-3">
                  <h3 className="text-center text-base font-bold mt-2 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs text-center">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;

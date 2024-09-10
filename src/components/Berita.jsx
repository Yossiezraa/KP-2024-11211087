import Berita1 from "../assets/images/galang dana.jpg";
import Berita2 from "../assets/images/pmii.jpg";
import Berita3 from "../assets/images/pelepasan.jpg";
import Berita4 from "../assets/images/karnaval.jpg";
import Berita5 from "../assets/images/u17.jpg";
import Berita6 from "../assets/images/koordinasi.jpg";

const Berita = () => {
  const beritaData = [
    {
      image: Berita1,
      title: "Solidaritas di Penggalangan Dana",
      description: "Siswa dan guru bersatu mengumpulkan dana untuk membantu korban kebakaran di Kedang Ipil. Aksi ini menunjukkan solidaritas dan kepedulian warga sekolah.",
    },
    {
      image: Berita2,
      title: "Prestasi Gemilang di Lomba PMI",
      description: "Tim PMI SMP Negeri 4 Kota Bangun berhasil meraih juara dalam kompetisi tingkat Kabupaten, membuktikan keunggulan di bidang kesehatan.",
    },
    {
      image: Berita3,
      title: "Pelepasan Siswa/Siswi: Kenangan Tak Terlupakan",
      description: "Acara pelepasan siswa siswi tahun ajaran 2023/2024 berlangsung meriah dengan momen-momen yang akan selalu dikenang.",
    },
    {
      image: Berita4,
      title: "Karnaval Pembangunan dan Budaya Di Desa Kota Bangun 3",
      description: "Dalam karnaval ini, warga desa dan peserta dari berbagai komunitas berkumpul untuk menampilkan berbagai atraksi budaya, parade, dan pameran seni.",
    },
    {
      image: Berita5,
      title: "PASKIBRAKA 2024 HUT RI KE-79",
      description: "DIRGAHAYU KE-79, anggota PASKIBRAKA dari SMP Negeri 4 Kota Bangun menjalankan tugas mulia dalam mengibarkan bendera merah putih pada upacara kemerdekaan.",
    },
    {
      image: Berita6,
      title: "Rapat Koordinasi Komite, Orang Tua di BPU Desa Kota Bangun 2",
      description: "Rapat untuk membangun kerjasama yang lebih baik antara sekolah dan keluarga dalam mendukung perkembangan dan kesejahteraan siswa.",
    },
  ];

  return (
    <div className="berita pt-24">
      <h1 className="text-center lg:text-4xl text-2xl font-medium mb-4">
        Berita Terbaru
      </h1>
      <p className="text-center mb-8 text-sm">
        Temukan informasi terbaru dan aktivitas penting di SMP Negeri 4 Kota
        Bangun.
      </p>
      <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {beritaData.map((item, index) => (
          <div key={index} className="box p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 rounded-lg">
            <img src={item.image} alt={item.title} className="w-full h-[180px] object-cover rounded-t-lg" />
            <div className="p-3">
              <h3 className="text-center text-base font-bold mt-2 mb-1">{item.title}</h3>
              <p className="text-xs text-center">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Berita;

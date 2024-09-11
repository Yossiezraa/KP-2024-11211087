import React from "react";

const SejarahPage = () => {
  return (
    <div className="sejarah pt-24 bg-gray-50">
        <h1 className="text-2xl font-bold mb-4 text-center text-blue-900">
          Sejarah SMP Negeri 4 Kota Bangun
        </h1>
     

      {/* Main History Section */}
      <div className="max-w-4xl mx-auto p-6">
        <div className="bg-white shadow-md p-8 rounded-lg mb-8">
          <p className="text-center text-gray-700 mb-6">
            <span className="font-bold text-blue-900">
              SMP Negeri 4 Kota Bangun
            </span>{" "}
            diresmikan pada tanggal 28 November 1986. Pada awal berdirinya
            sekolah ini adalah dengan nama SMP Negeri Rimba Ayu. Namun, seiring
            dengan perkembangan daerah dan peningkatan status administrasi, pada
            tahun 1990, sekolah ini mengalami perubahan nama menjadi{" "}
            <span className="font-bold text-blue-900">SMP Negeri 5 Kota Bangun</span>.
          </p>

          <p className="text-center text-gray-700 mb-6">
            Hanya dua tahun setelah perubahan pertama, pada tahun 1992, sekolah
            ini kembali mengalami perubahan nama menjadi{" "}
            <span className="font-bold text-blue-900">SMP Negeri 4 Kota Bangun</span>.
            Pergantian nama ini mencerminkan penyesuaian dengan perkembangan
            demografis dan administratif wilayah tersebut.
          </p>

          <p className="text-center text-gray-700 mb-6">
            Nama <span className="font-bold text-blue-900">SMP Negeri 4 Kota Bangun</span>{" "}
            telah menjadi bagian dari identitas sekolah yang dikenal luas oleh
            masyarakat sekitar.
          </p>
        </div>
        {/* Principals Section */}
        <div className="bg-white shadow-md p-8 rounded-lg">
          <h2 className="text-center text-xl font-bold text-blue-900 mb-6">
            Daftar Kepala Sekolah
          </h2>
          <p className="text-center text-gray-700 mb-6">
            Hingga saat ini, SMP Negeri 4 Kota Bangun telah mengalami beberapa
            pergantian kepala sekolah. Berikut adalah nama-nama kepala sekolah
            yang pernah memimpin:
          </p>
          <ul className="list-disc list-inside text-sm text-left text-gray-700 space-y-2">
            {[
              "Kabul Aziz",
              "Sidik Joko Wuryanto",
              "Agus Setio Utama, S.Pd.",
              "M.Ali, S.Pd., MM.",
              "Karlani HS, S.Pd.",
              "Drs. Joko Wuryanto",
              "Suyanto, S.Pd., MM.",
              "Malaka, S.Pd.",
              "Hetty Wahyuni, S.Pd., M.Si.",
            ].map((name, index) => (
              <li key={index} className="flex items-center">
                <span className="inline-block w-6 h-6 mr-2 bg-blue-900 text-white text-center rounded-full">
                  {index + 1}
                </span>
                {name}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SejarahPage;

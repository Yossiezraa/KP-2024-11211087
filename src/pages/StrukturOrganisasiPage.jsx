import React from "react";
import strukturImage from "../assets/images/struktur.jpg";

const StrukturOrganisasiPage = () => {
  return (
    <div className="container mx-auto px-4 py-8"id="struktur-organisasi">
      <h1 className="text-2xl font-bold mb-4">Struktur Organisasi</h1>
      <img src={strukturImage} alt="Contoh" className="mt-4 max-w-full h-auto" />
    </div>
  );
};

export default StrukturOrganisasiPage;

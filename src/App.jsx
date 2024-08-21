import React, { useState } from "react";
import Navbar from "./components/Navbar";
import HomePage from "./pages/HomePage";
import InfoPendaftaranPage from "./pages/InfoPendaftaranPage";
import StrukturOrganisasiPage from "./pages/StrukturOrganisasiPage";
import VisiMisiPage from "./pages/VisiMisiPage";
import CapaianPrestasiPage from "./pages/CapaianPrestasiPage";
import Footer from "./components/Footer";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  const handleNavigation = (page) => {
    setCurrentPage(page);

    if (page === "berita") {
      // Scroll to berita section if on HomePage
      const beritaSection = document.getElementById("berita");
      if (beritaSection) {
        beritaSection.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <div>
      <Navbar onNavigate={handleNavigation} />
      <main>
        {currentPage === "home" && <HomePage />}
        {currentPage === "informasiPendaftaran" && <InfoPendaftaranPage />}
        {currentPage === "strukturOrganisasi" && <StrukturOrganisasiPage />}
        {currentPage === "visiMisi" && <VisiMisiPage />}
        {currentPage === "prestasi" && <CapaianPrestasiPage />}
      </main>
      <Footer />
    </div>
  );
}

export default App;

import { useEffect, useRef, useState } from "react";
import Logo from "../assets/logo smp4.png";

const Navbar = ({ onNavigate }) => {
  const [show, setShow] = useState(false);
  const [scroll, setScroll] = useState(false);
  const [submenu, setSubmenu] = useState(false);
  const dropdownRef = useRef(null);
  const submenuTimerRef = useRef(null);

  const handleClick = () => {
    setShow(!show);
  };

  const handleMouseEnter = () => {
    if (submenuTimerRef.current) {
      clearTimeout(submenuTimerRef.current);
    }
    setSubmenu(true);
  };

  const handleMouseLeave = () => {
    submenuTimerRef.current = setTimeout(() => {
      setSubmenu(false);
    }, 300);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 5) {
        setScroll(true);
        setSubmenu(false);
        setShow(false);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setSubmenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  let scrollActive = scroll ? "py-2 bg-blue-900 shadow-md" : "py-1.5 bg-blue-900";

  return (
    <div className={`navbar fixed top-0 left-0 w-full z-50 transition-all ${scrollActive}`}>
      <div className="container mx-auto px-3">
        <div className="navbar-box flex items-center justify-between">
          <div className="logo flex items-center gap-1">
            <img src={Logo} alt="Logo SMP4" className="h-16" />
            <h1 className="text-sm font-bold sm:text-base md:text-lg text-white">
              SMP NEGERI 4 KOTA BANGUN
            </h1>
          </div>
          <ul
            className={`flex lg:gap-6 md:static md:flex-row md:shadow-none md:bg-transparent md:w-auto md:h-full md:translate-y-0 md:text-white md:p-0 md:m-0 md:transition-none gap-2 fixed ${show ? "right-0 top-16" : "-right-full"} top-0 md:top-auto md:translate-y-0 flex-col px-3 py-2 rounded shadow-lg shadow-slate-300 bg-blue-900 font-medium text-white transition-all`}
          >
            <li className="flex items-center gap-1">
              <a
                href="#home"
                className="text-xs font-medium text-white hover:text-gray-200"
                onClick={() => onNavigate("home")}
              >
                Beranda
              </a>
            </li>
            <li
              className="relative flex items-center gap-1"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <button 
                className="text-white bg-blue-900 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-500 font-medium rounded text-xs px-3 py-1.5 text-center inline-flex items-center"
                type="button"
              >
                Tentang Kami
                <svg className="w-2 h-2 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                </svg>
              </button>
              <div 
                ref={dropdownRef}
                className={`absolute ${submenu ? "block" : "hidden"} bg-blue-900 divide-y divide-gray-800 rounded-lg shadow w-28 top-full mt-2`}
              >
                <ul className="py-1 text-xs text-white">
                  <li>
                    <a
                      href="#sejarah"
                      className="block px-3 py-1 hover:bg-blue-800"
                      onClick={() => onNavigate("sejarah")}
                    >
                      Sejarah
                    </a>
                  </li>
                  <li>
                    <a
                      href="#visi-misi"
                      className="block px-3 py-1 hover:bg-blue-800"
                      onClick={() => onNavigate("visiMisi")}
                    >
                      Visi Misi
                    </a>
                  </li>
                  <li>
                    <a
                      href="#struktur-organisasi"
                      className="block px-3 py-1 hover:bg-blue-800"
                      onClick={() => onNavigate("strukturOrganisasi")}
                    >
                      Struktur Organisasi
                    </a>
                  </li>
                </ul>
              </div>
            </li>
            <li className="flex items-center gap-1">
              <a
                href="#berita"
                className="text-xs font-medium text-white hover:text-gray-200"
                onClick={() => onNavigate("berita")}
              >
                Berita
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a
                href="#prestasi"
                className="text-xs font-medium text-white hover:text-gray-200"
                onClick={() => onNavigate("prestasi")}
              >
                Capaian Prestasi
              </a>
            </li>
            <li className="flex items-center gap-1">
              <a
                href="#informasi-pendaftaran"
                className="text-xs font-medium text-white hover:text-gray-200"
                onClick={() => onNavigate("informasiPendaftaran")}
              >
                Informasi Pendaftaran
              </a>
            </li>
          </ul>
          <div className="contact flex items-center gap-1">
            <a
              href="https://wa.me/6285246821446?text=Halo%20Saya%20tertarik%20untuk%20menghubungi%20SMP%20Negeri%204%20Kota%20Bangun"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white px-2 py-1 rounded-full text-blue-sky text-xs font-medium hover:bg-gray-100 transition-all"
            >
              Kontak
            </a>
            <i
              className="ri-menu-3-line text-xl md:hidden block"
              onClick={handleClick}
            ></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

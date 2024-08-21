import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <div className="footer bg-blue-900 text-gray-200 py-6 w-full" id='social'>
      <div className="container mx-auto px-4">
        <div className="top flex flex-wrap justify-between">
          <div className="item mx-2 mb-4 ml-10"> {/* Add ml-4 to shift content to the right */}
            <h2 className="text-base font-semibold mb-2">Hubungi Kami</h2>
            <section className="flex flex-col lg:flex-row lg:gap-6">
              <ul className="flex flex-col gap-1 text-sm">
                <li><span>Alamat</span></li>
                <li><span>Telepon</span></li>
                <li><span>Email</span></li>
              </ul>
              <ul className="flex flex-col gap-1 text-sm">
                <li><span>Jl. Pendidikan RT 04/02, Kota Bangun II, Kec. Kota Bangun Darat, Kabupaten Kutai Kartanegara, Kalimantan Timur</span></li>
                <li><span>08123455666</span></li>
                <li><span>smp4@gmail.com</span></li>
              </ul>
            </section>
          </div>
          <div className="item mx-2 mb-4">
            <h2 className="text-base font-semibold mb-2">Sosial Media</h2>
            <section className="flex gap-3">
              <a href="https://www.facebook.com/profile.php?id=100008479305725&locale=id_ID" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-500 text-sm">
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-blue-400 text-sm">
                <FontAwesomeIcon icon={faTwitter} size="lg" />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-200 hover:text-pink-500 text-sm">
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </a>
            </section>
          </div>
        </div>
        <div className="border-t my-6" />
        <div className="bottom flex flex-col md:flex-row justify-center items-center text-sm"> {/* Centering text */}
          <div className="flex-grow"></div>
          <div className="flex items-center gap-2">
            <span>© SMPN 4 KOTA BANGUN Ltd. 2024</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, MapPin, Github, Youtube, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link to="/" onClick={handleScrollToTop}>
              <img
                src="/images/numbers_logo_full_white.png"
                alt="NumbERS Logo"
                className="h-12 w-auto mb-4"
              />
            </Link>
            <p className="text-gray-400 mb-6 max-w-md">
              Promovendo a pesquisa científica e tecnológica de excelência,
              desenvolvendo soluções inovadoras para o futuro.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://github.com/nmbrslab"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.youtube.com/channel/UCLVNnBRspchis0sKevtqtJg"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-red-500 transition-colors"
              >
                <Youtube className="w-5 h-5" />
              </a>
              <a
                href="https://www.instagram.com/numbers_ifg/"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-pink-500 transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://web.facebook.com/numbersifg?_rdc=1&_rdr#"
                target="_blank" rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-500 transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </Link>
              </li>
              <li>
                <Link to="/institucional" className="text-gray-400 hover:text-white transition-colors">
                  Institucional
                </Link>
              </li>
              <li>
                <Link to="/projetos" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </Link>
              </li>
              <li>
                <Link to="/start" className="text-gray-400 hover:text-white transition-colors">
                  S.T.A.R.T.
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contato</h4>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-400 text-sm">contato@numbers.edu.br</span>
              </div>
              <div className="flex items-start">
                <MapPin className="w-4 h-4 mr-3 text-gray-400 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  Av. Universitária - Vale das Goiabeiras, Inhumas - GO, 75402-556
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-6 py-4 flex justify-center items-center">
          <p className="text-gray-400 text-sm translate-y-5">
            © 2025 NumbERS - Núcleo de Pesquisa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
import React from 'react';
import { Mail, Phone, MapPin, Github, Youtube, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <img 
              src="/images/numbers_logo_full_white.png" 
              alt="NumbERS Logo"
              className="h-12 w-auto mb-4"
            />
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
                <a href="/" className="text-gray-400 hover:text-white transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="/institucional" className="text-gray-400 hover:text-white transition-colors">
                  Institucional
                </a>
              </li>
              <li>
                <a href="/projetos" className="text-gray-400 hover:text-white transition-colors">
                  Projetos
                </a>
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
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3 text-gray-400" />
                <span className="text-gray-400 text-sm">(62) 3333-4444</span>
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

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">
            © 2025 NumbERS - Núcleo de Pesquisa. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
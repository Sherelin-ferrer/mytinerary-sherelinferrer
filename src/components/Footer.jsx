import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Contenido principal del footer */}
        <div className="flex flex-col md:flex-row justify-between">
          {/* Sección de información de la marca */}
          <div className="mb-6 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">MyTinerary</h2>
            <p className="mb-4">Your gateway to incredible travel experiences</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-blue-300">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-blue-300">
                <Instagram size={24} />
              </a>
            </div>
          </div>
          
          {/* Enlaces y secciones del footer */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
            {/* Sección de navegación */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Explore</h3>
              <ul className="space-y-2">
                <li><Link to="/" className="hover:text-blue-300">Home</Link></li>
                <li><Link to="/cities" className="hover:text-blue-300">Cities</Link></li>
                <li><Link to="/about" className="hover:text-blue-300">About</Link></li>
              </ul>
            </div>
            
            {/* Sección legal */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Legal</h3>
              <ul className="space-y-2">
                <li><Link to="/terms" className="hover:text-blue-300">Terms</Link></li>
                <li><Link to="/privacy" className="hover:text-blue-300">Privacy</Link></li>
              </ul>
            </div>
            
            {/* Sección de contacto */}
            <div>
              <h3 className="text-lg font-semibold mb-3">Connect</h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <Mail size={16} className="mr-2" />
                  <a href="mailto:info@mytinerary.com" className="hover:text-blue-300">info@mytinerary.com</a>
                </li>
                <li className="flex items-center">
                  <Phone size={16} className="mr-2" />
                  <a href="tel:+123456789" className="hover:text-blue-300">+1 (234) 567-89</a>
                </li>
                <li className="flex items-center">
                  <MapPin size={16} className="mr-2" />
                  <span>123 Travel Street, City</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        {/* Copyright */}
        <div className="border-t border-gray-700 mt-8 pt-6 text-center">
          <p>&copy; {new Date().getFullYear()} MyTinerary Sherelin Ferrer.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
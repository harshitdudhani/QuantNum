import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = ({ onContactClick }) => {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="footer" className="bg-gradient-to-r from-red-600 to-pink-600 text-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* QuantNum Info */}
          <div className="col-span-2">
            <h3 className="text-2xl font-bold mb-4">QuantNum</h3>
            <p className="text-pink-100 mb-4 max-w-md">
              Math club at IIIT Pune dedicated to advancing mathematical knowledge through innovation, collaboration and excellence.
            </p>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">📧</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">📱</span>
              </div>
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-sm">🔗</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-pink-100">
              <li>
                <button 
                  onClick={() => scrollToSection('hero')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  About
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('events')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Events
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('achievements')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Achievements
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('resources')} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Resources
                </button>
              </li>
              <li>
                <button 
                  onClick={onContactClick} 
                  className="hover:text-white transition-colors cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-3 text-pink-100">
              <div className="flex items-center space-x-2">
                <Phone className="w-4 h-4" />
                <span className="text-sm">+91 832 XXX XXXX</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="w-4 h-4" />
                <span className="text-sm">quantnum@iitgoa.ac.in</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">IIIT Pune, Farmagudi</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-pink-400/30 mt-12 pt-8 text-center text-pink-100">
          <p>&copy; 2024 QuantNum - IIIT Pune Math Club. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
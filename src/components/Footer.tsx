import React from 'react';
import { Instagram } from 'lucide-react';
import { useNavigate, useLocation } from 'react-router-dom';

const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const scrollToSection = (sectionId: string) => {
    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-burnout-black border-t border-burnout-gray-800">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-3xl font-montserrat font-black text-burnout-yellow mb-4">
              BURNOUT FITNESS STUDIO
            </h3>
            <p className="text-burnout-gray-300 font-source leading-relaxed mb-6 max-w-md">
              Transform your body, ignite your passion, and achieve the impossible. 
              Join thousands who have already started their fitness journey with us.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://facebook.com/burnoutfitness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
              <a 
                href="https://instagram.com/burnoutfitness" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-oswald font-semibold text-burnout-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-burnout-gray-300 font-source">
              <li><button onClick={() => scrollToSection('home')} className="hover:text-burnout-yellow transition-colors text-left">Home</button></li>
              <li><button onClick={() => scrollToSection('about')} className="hover:text-burnout-yellow transition-colors text-left">About Us</button></li>
              <li><button onClick={() => scrollToSection('services')} className="hover:text-burnout-yellow transition-colors text-left">Services</button></li>
              <li><button onClick={() => scrollToSection('pricing')} className="hover:text-burnout-yellow transition-colors text-left">Pricing</button></li>
              <li><button onClick={() => scrollToSection('branches')} className="hover:text-burnout-yellow transition-colors text-left">Our Branches</button></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-oswald font-semibold text-burnout-white mb-4">CONTACT</h4>
            <ul className="space-y-3 text-burnout-gray-300 font-source">
              <li>(555) BURNOUT</li>
              <li>info@burnoutfitness.com</li>
              <li>123 Fitness Boulevard<br />Muscle City, MC 12345</li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-burnout-gray-800 mt-12 pt-8 text-center">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-burnout-gray-400 font-source text-sm">
              © 2025 Burnout Fitness Studio. All rights reserved. Developed by Next Media Co
            </p>
            <div className="flex space-x-6 text-burnout-gray-400 font-source text-sm">
              <a href="/privacy-policy" className="hover:text-burnout-yellow transition-colors">Privacy Policy</a>
              <a href="/terms-of-service" className="hover:text-burnout-yellow transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

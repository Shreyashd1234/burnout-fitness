
import React from 'react';

const Footer = () => {
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
              <a href="#" className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all">
                📘
              </a>
              <a href="#" className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all">
                📸
              </a>
              <a href="#" className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all">
                🐦
              </a>
              <a href="#" className="w-10 h-10 bg-burnout-gray-800 rounded-lg flex items-center justify-center text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black transition-all">
                📺
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-oswald font-semibold text-burnout-white mb-4">QUICK LINKS</h4>
            <ul className="space-y-3 text-burnout-gray-300 font-source">
              <li><a href="#home" className="hover:text-burnout-yellow transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-burnout-yellow transition-colors">Services</a></li>
              <li><a href="#about" className="hover:text-burnout-yellow transition-colors">About Us</a></li>
              <li><a href="#pricing" className="hover:text-burnout-yellow transition-colors">Pricing</a></li>
              <li><a href="#branches" className="hover:text-burnout-yellow transition-colors">Our Branches</a></li>
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
              © 2024 Burnout Fitness Studio. All rights reserved.
            </p>
            <div className="flex space-x-6 text-burnout-gray-400 font-source text-sm">
              <a href="#" className="hover:text-burnout-yellow transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-burnout-yellow transition-colors">Terms of Service</a>
              <a href="#" className="hover:text-burnout-yellow transition-colors">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

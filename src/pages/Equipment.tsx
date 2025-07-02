import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import oneImg from '../assets/1.png';
import twoImg from '../assets/2.png';
import threeImg from '../assets/3.png';
import fourImg from '../assets/4.png';
import certificateImg from '../assets/certificate.png';
import equipmentsLogo from '../assets/equipments logo.png';

const Equipments = () => {
  const handleDownloadBrochure = () => {
    const link = document.createElement('a');
    link.href = '/src/assets/BURNOUT FITNESS EQUIPMENTS.pdf';
    link.download = 'BURNOUT FITNESS EQUIPMENTS.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-burnout-black text-burnout-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-24">
        <div className="max-w-7xl mx-auto px-4 py-16">
          {/* Brand Overview Section */}
          <div className="mb-16">
            <h1 className="text-4xl md:text-6xl font-montserrat font-black mb-8">
              OUR <span className="text-gradient">EQUIPMENTS</span>
            </h1>
            
            <div className="bg-burnout-gray-900 p-8 rounded-xl border border-burnout-gray-700">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h2 className="text-3xl font-oswald font-semibold text-burnout-yellow mb-6">BRAND OVERVIEW</h2>
                  <div className="space-y-4 text-burnout-gray-300">
                    <p className="text-xl">Company: Burnout Fitness Pvt. Ltd.</p>
                    <p>Experience: 10 years in the fitness industry</p>
                    <p className="text-burnout-yellow font-semibold">Tagline: Helping You Build Your Brand</p>
                  </div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow/20 to-yellow-600/20 flex items-center justify-center">
                    <img src={equipmentsLogo} alt="Equipments Logo" className="object-contain w-full h-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cardio Equipment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-oswald font-semibold text-burnout-yellow mb-6">CARDIO EQUIPMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Commercial Treadmills */}
              <div className="bg-burnout-gray-900 p-6 rounded-xl border border-burnout-gray-700">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img src={oneImg} alt="Commercial Treadmills" className="object-contain w-full h-full" />
                </div>
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Commercial Treadmills (BOTR Series)</h3>
                <ul className="space-y-2 text-burnout-gray-300">
                  <li>• Models: BOTR-10, 20, 40, 50, 60, 70, 80, 100</li>
                  <li>• Motor: 3HP to 8HP</li>
                  <li>• Speed: 0 - 20 Km/Hr</li>
                </ul>
              </div>

              {/* Cross Trainers */}
              <div className="bg-burnout-gray-900 p-6 rounded-xl border border-burnout-gray-700">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img src={twoImg} alt="Cross Trainers" className="object-contain w-full h-full" />
                </div>
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Cross Trainers (BO CT Series)</h3>
                <ul className="space-y-2 text-burnout-gray-300">
                  <li>• Models: BO CT-10, 20, 30</li>
                  <li>• Power: Self-generating</li>
                  <li>• Resistance Levels: 0-16 to 0-20 levels</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Strength Equipment Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-oswald font-semibold text-burnout-yellow mb-6">STRENGTH EQUIPMENT</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Free Weight Machines */}
              <div className="bg-burnout-gray-900 p-6 rounded-xl border border-burnout-gray-700">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img src={threeImg} alt="Free Weight Machines" className="object-contain w-full h-full" />
                </div>
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Free Weight Machines (Y900 Series)</h3>
                <ul className="space-y-2 text-burnout-gray-300">
                  <li>• Chest Press, Shoulder Press</li>
                  <li>• Low Row, Row Machine</li>
                  <li>• Triceps Press, Leg Press</li>
                  <li>• Biceps Curl, Leg Extension</li>
                  <li>• Weight Range: 125Kg to 264Kg</li>
                </ul>
              </div>

              {/* Series Machines */}
              <div className="bg-burnout-gray-900 p-6 rounded-xl border border-burnout-gray-700">
                <div className="relative h-48 mb-4 rounded-lg overflow-hidden flex items-center justify-center bg-white">
                  <img src={fourImg} alt="Series Machines" className="object-contain w-full h-full" />
                </div>
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">3000, 4000, 5000, 7000 Series</h3>
                <ul className="space-y-2 text-burnout-gray-300">
                  <li>• Dip/Chin Machine</li>
                  <li>• Leg Curl (Prone & Seated)</li>
                  <li>• Vertical Row, Lat Pull Down</li>
                  <li>• Abductor/Adductor</li>
                  <li>• Weight Range: 183Kg to 280Kg</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certification Section */}
          <div className="mb-16">
            <h2 className="text-3xl font-oswald font-semibold text-burnout-yellow mb-6">CERTIFICATIONS & AUTHORIZATIONS</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="bg-burnout-gray-900 p-8 rounded-xl border border-burnout-gray-700">
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-6">Current Certifications</h3>
                <ul className="space-y-4 text-burnout-gray-300">
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-burnout-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>ISO 9001:2015 Certified</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-burnout-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Safety Standards Compliance</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-burnout-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>Equipment Manufacturer Certifications</span>
                  </li>
                </ul>
              </div>
              <div className="flex items-center justify-center">
                <div className="bg-white p-2 rounded-xl">
                  <img src={certificateImg} alt="Certificate" className="object-contain rounded-lg max-w-2xl w-full h-72 aspect-[16/9]" />
                </div>
              </div>
            </div>
          </div>

          {/* Contact Information & Brochure Download */}
          <div className="bg-burnout-gray-900 p-8 rounded-xl border border-burnout-gray-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-3xl font-oswald font-semibold text-burnout-yellow mb-6">CONTACT INFORMATION</h2>
                <ul className="space-y-4 text-burnout-gray-300">
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-burnout-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                    <span>@burnoutfitnessgym</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <svg className="w-6 h-6 text-burnout-yellow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span>8260765803</span>
                  </li>
                </ul>
              </div>
              <div className="flex flex-col items-center justify-center space-y-6">
                <div className="text-center">
                  <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">Download Our Brochure</h3>
                  <p className="text-burnout-gray-300 mb-6">Get detailed information about our equipment and services</p>
                </div>
                <button
                  onClick={handleDownloadBrochure}
                  className="group relative bg-burnout-yellow text-burnout-black font-oswald font-semibold px-8 py-4 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-500 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative flex items-center space-x-3">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    <span>Download Brochure</span>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Equipments; 
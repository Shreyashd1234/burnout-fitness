import React, { useEffect, useRef, useState } from 'react';
import burnoutMap from '../assets/burnout-map.png';

const FranchiseSection = () => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: ''
  });

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.2 }
    );

    if (mapRef.current) observer.observe(mapRef.current);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create organized WhatsApp message for franchise inquiry
    const message = `Hello! I'm interested in franchise opportunities.

First Name: ${formData.firstName}
Last Name: ${formData.lastName}
Email: ${formData.email}
Phone: ${formData.phone}

Please provide me with detailed franchise information including investment requirements, territories available, and support provided.

Thank you!`;

    const phoneNumber = '918260765803';
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="franchise" className="section-padding bg-burnout-black relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-r from-burnout-yellow/10 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="section-reveal space-y-8">
            {/* Section Label */}
            <span className="inline-block bg-burnout-yellow text-burnout-black font-oswald font-extrabold px-8 py-3 rounded-full text-2xl shadow-lg tracking-widest uppercase mb-4 border-4 border-burnout-yellow/60">Franchise</span>
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white leading-tight">
              JOIN THE <span className="text-gradient">BURNOUT</span> FAMILY
            </h2>
            
            <p className="text-xl text-burnout-gray-300 font-oswald leading-relaxed">
              BRING THE BURNOUT EXPERIENCE TO YOUR COMMUNITY
            </p>
            
            <div className="space-y-4 text-burnout-gray-200 font-source text-lg leading-relaxed">
              <p>
                Become part of a rapidly growing fitness franchise that's transforming communities 
                across the nation. With our proven business model and comprehensive support system, 
                you'll have everything you need to succeed.
              </p>
              
              <p>
                We provide complete training, marketing support, equipment sourcing, and ongoing 
                operational guidance to ensure your Burnout Fitness Studio thrives from day one.
              </p>
            </div>

            {/* Franchise Benefits */}
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <div className="text-burnout-yellow font-oswald font-semibold">INVESTMENT</div>
                <div className="text-burnout-gray-300 font-source">₹30 Lakhs - ₹50 Lakhs</div>
              </div>
              <div className="space-y-2">
                <div className="text-burnout-yellow font-oswald font-semibold">TERRITORIES</div>
                <div className="text-burnout-gray-300 font-source">Anywhere in India</div>
              </div>
              <div className="col-span-2 flex flex-col space-y-2 mt-2">
                <div className="text-burnout-yellow font-oswald font-semibold">SUPPORT</div>
                <ul className="text-burnout-gray-300 font-source list-disc list-inside space-y-1">
                  <li>Imported Equipment</li>
                  <li>Software Support</li>
                  <li>Trainers Support</li>
                  <li>Full Guide (How to run Gym)</li>
                  <li>Interiors Award Support</li>
                </ul>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-burnout-gray-900 p-6 rounded-xl border border-burnout-gray-700">
              <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-4">
                Request Franchise Information
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    placeholder="First Name"
                    className="bg-burnout-black border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                    required
                  />
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    placeholder="Last Name"
                    className="bg-burnout-black border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                    required
                  />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  className="w-full bg-burnout-black border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                  required
                />
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="w-full bg-burnout-black border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                  required
                />
                <button type="submit" className="btn-primary w-full">
                  REQUEST INFORMATION
                </button>
              </form>
            </div>
          </div>

          {/* 3D Map with Pins */}
          <div ref={mapRef} className="section-reveal flex justify-center items-center">
            <img src={burnoutMap} alt="Burnout Franchise Map" className="w-full h-96 object-contain rounded-lg border-2 border-burnout-yellow" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;

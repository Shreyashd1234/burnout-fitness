
import React, { useEffect, useRef, useState } from 'react';

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

    const phoneNumber = '918431157922';
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
                <div className="text-burnout-gray-300 font-source">$150K - $300K</div>
              </div>
              <div className="space-y-2">
                <div className="text-burnout-yellow font-oswald font-semibold">ROI TIMELINE</div>
                <div className="text-burnout-gray-300 font-source">12-18 Months</div>
              </div>
              <div className="space-y-2">
                <div className="text-burnout-yellow font-oswald font-semibold">TERRITORIES</div>
                <div className="text-burnout-gray-300 font-source">50+ Available</div>
              </div>
              <div className="space-y-2">
                <div className="text-burnout-yellow font-oswald font-semibold">SUPPORT</div>
                <div className="text-burnout-gray-300 font-source">24/7 Available</div>
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
          <div ref={mapRef} className="section-reveal">
            <div className="placeholder-3d w-full h-96 relative">
              <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow/20 to-yellow-600/20 rounded-lg"></div>
              
              {/* Animated Map Pins */}
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-4 h-4 bg-burnout-yellow rounded-full animate-float"
                  style={{
                    left: `${20 + Math.random() * 60}%`,
                    top: `${20 + Math.random() * 60}%`,
                    animationDelay: `${i * 0.3}s`
                  }}
                >
                  <div className="w-2 h-2 bg-burnout-black rounded-full absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"></div>
                </div>
              ))}
              
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <div className="text-burnout-yellow text-sm font-oswald opacity-70">3D FRANCHISE MAP</div>
                <div className="text-burnout-yellow text-xs font-source opacity-50 mt-2">WITH LOCATION PINS</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FranchiseSection;

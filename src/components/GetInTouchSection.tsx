
import React, { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle } from 'lucide-react';

const GetInTouchSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleWhatsApp = () => {
    const message = `Hi! I'm interested in joining Burnout Fitness Studio. My name is ${formData.name || '[Name]'} and I'd like to know more about your services.`;
    const phoneNumber = '1234567890'; // Replace with actual WhatsApp number
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="get-in-touch" className="section-padding bg-burnout-black relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-burnout-black via-burnout-gray-900 to-burnout-black"></div>
      <div className="absolute inset-0 opacity-5">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD200' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0-40c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            CONTACT <span className="text-gradient">US</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-source max-w-2xl mx-auto">
            We're here to help you on your fitness journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="flex items-center space-x-4 p-6 bg-burnout-gray-900/50 rounded-xl border border-burnout-gray-800">
              <div className="w-12 h-12 bg-burnout-yellow/20 rounded-lg flex items-center justify-center">
                <Phone className="w-6 h-6 text-burnout-yellow" />
              </div>
              <div>
                <h3 className="font-oswald font-semibold text-burnout-white text-lg">CALL US</h3>
                <p className="text-burnout-gray-300 font-source">(555) BURNOUT</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-burnout-gray-900/50 rounded-xl border border-burnout-gray-800">
              <div className="w-12 h-12 bg-burnout-yellow/20 rounded-lg flex items-center justify-center">
                <Mail className="w-6 h-6 text-burnout-yellow" />
              </div>
              <div>
                <h3 className="font-oswald font-semibold text-burnout-white text-lg">EMAIL US</h3>
                <p className="text-burnout-gray-300 font-source">info@burnoutfitness.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-6 bg-burnout-gray-900/50 rounded-xl border border-burnout-gray-800">
              <div className="w-12 h-12 bg-burnout-yellow/20 rounded-lg flex items-center justify-center">
                <MapPin className="w-6 h-6 text-burnout-yellow" />
              </div>
              <div>
                <h3 className="font-oswald font-semibold text-burnout-white text-lg">VISIT US</h3>
                <p className="text-burnout-gray-300 font-source">
                  123 Fitness Boulevard<br />
                  Muscle City, MC 12345
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-burnout-gray-900/50 p-8 rounded-xl border border-burnout-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-burnout-white font-oswald font-medium mb-2">
                    NAME
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-burnout-black border border-burnout-gray-700 rounded-lg text-burnout-white font-source focus:border-burnout-yellow focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-burnout-white font-oswald font-medium mb-2">
                    EMAIL
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-burnout-black border border-burnout-gray-700 rounded-lg text-burnout-white font-source focus:border-burnout-yellow focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-burnout-white font-oswald font-medium mb-2">
                  PHONE
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-burnout-black border border-burnout-gray-700 rounded-lg text-burnout-white font-source focus:border-burnout-yellow focus:outline-none transition-colors"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-burnout-white font-oswald font-medium mb-2">
                  MESSAGE
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-burnout-black border border-burnout-gray-700 rounded-lg text-burnout-white font-source focus:border-burnout-yellow focus:outline-none transition-colors resize-none"
                  required
                ></textarea>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-burnout-yellow text-burnout-black font-oswald font-bold py-3 px-8 rounded-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  SEND MESSAGE
                </button>
                <button
                  type="button"
                  onClick={handleWhatsApp}
                  className="flex-1 bg-green-600 text-white font-oswald font-bold py-3 px-8 rounded-lg hover:bg-green-500 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WHATSAPP
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;

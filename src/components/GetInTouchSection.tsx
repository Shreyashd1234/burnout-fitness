
import React from 'react';

const GetInTouchSection = () => {
  return (
    <section className="section-padding bg-burnout-gray-900">
      <div className="max-w-4xl mx-auto text-center">
        <div className="section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-6">
            GET IN <span className="text-gradient">TOUCH</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald mb-8 max-w-2xl mx-auto">
            READY TO START YOUR FITNESS JOURNEY? WE'RE HERE TO HELP!
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-burnout-black border border-burnout-gray-700 rounded-xl p-6 hover:border-burnout-yellow transition-all">
              <div className="text-burnout-yellow text-2xl mb-4">📞</div>
              <h3 className="text-lg font-oswald font-semibold text-burnout-white mb-2">CALL US</h3>
              <p className="text-burnout-gray-300 font-source">(555) BURNOUT</p>
            </div>
            
            <div className="bg-burnout-black border border-burnout-gray-700 rounded-xl p-6 hover:border-burnout-yellow transition-all">
              <div className="text-burnout-yellow text-2xl mb-4">✉️</div>
              <h3 className="text-lg font-oswald font-semibold text-burnout-white mb-2">EMAIL US</h3>
              <p className="text-burnout-gray-300 font-source">info@burnoutfitness.com</p>
            </div>
            
            <div className="bg-burnout-black border border-burnout-gray-700 rounded-xl p-6 hover:border-burnout-yellow transition-all">
              <div className="text-burnout-yellow text-2xl mb-4">📍</div>
              <h3 className="text-lg font-oswald font-semibold text-burnout-white mb-2">VISIT US</h3>
              <p className="text-burnout-gray-300 font-source">123 Fitness Boulevard<br />Muscle City, MC 12345</p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-burnout-black border border-burnout-gray-700 rounded-xl p-8 text-left max-w-2xl mx-auto">
            <div className="flex items-center justify-center mb-6">
              <div className="text-burnout-yellow text-2xl mr-3">✈️</div>
              <h3 className="text-xl font-oswald font-semibold text-burnout-white">Send us a Message</h3>
            </div>
            
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <input
                    type="text"
                    placeholder="First Name"
                    className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                  />
                </div>
              </div>
              
              <div>
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                />
              </div>
              
              <div>
                <select className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white focus:border-burnout-yellow focus:outline-none">
                  <option value="">Select Service Interest</option>
                  <option value="gym">Gym</option>
                  <option value="zumba">Zumba</option>
                  <option value="yoga">Yoga</option>
                  <option value="dance">Dance</option>
                  <option value="aerobics">Aerobics</option>
                  <option value="boxing">Boxing</option>
                </select>
              </div>
              
              <div>
                <textarea
                  placeholder="Tell us about your fitness goals..."
                  rows={4}
                  className="w-full bg-burnout-gray-800 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none"
                ></textarea>
              </div>
              
              <div className="text-center">
                <button type="submit" className="btn-primary text-lg">
                  SEND MESSAGE
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

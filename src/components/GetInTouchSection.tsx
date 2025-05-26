
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
            Ready to start your fitness journey? Contact us today and let's burn out your limits together.
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
          
          <button 
            onClick={() => window.open('https://wa.me/918431157922', '_blank')}
            className="btn-primary text-lg"
          >
            CONTACT US ON WHATSAPP
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetInTouchSection;

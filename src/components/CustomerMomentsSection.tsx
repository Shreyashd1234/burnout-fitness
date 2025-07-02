import React, { useEffect, useRef } from 'react';
import moment1 from '../assets/1moment.png';
import moment2 from '../assets/2moment.png';
import moment3 from '../assets/3moment.png';
import moment4 from '../assets/4moment.png';
import moment5 from '../assets/5moment.png';
import moment6 from '../assets/6moment.png';

const CustomerMomentsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const moments = [
    { image: moment1 },
    { image: moment2 },
    { image: moment3 },
    { image: moment4 },
    { image: moment5 },
    { image: moment6 },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 150);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.moment-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm ready to start my fitness journey with Burnout Fitness Studio. Can you help me get started?");
    window.open(`https://wa.me/918260765803?text=${message}`, '_blank');
  };

  return (
    <section className="section-padding bg-burnout-black">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            MOMENTS WITH <span className="text-gradient">CUSTOMERS</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Capturing the energy, dedication, and transformation happening every day at Burnout Fitness
          </p>
        </div>

        {/* Moments Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {moments.map((moment, index) => (
            <div
              key={index}
              className="moment-card stagger-item group cursor-pointer"
            >
              {/* 3D Slanted Frame */}
              <div className="relative transform transition-all duration-300 hover:rotate-3d hover:scale-105 perspective-1000">
                <div className="bg-burnout-gray-800 p-4 rounded-lg border-2 border-burnout-yellow/30 hover:border-burnout-yellow transition-all duration-300 transform hover:rotateX-2 hover:rotateY-2">
                  {/* Image Container */}
                  <div className="aspect-square overflow-hidden rounded-lg bg-white flex items-center justify-center">
                    <img src={moment.image} alt={`Customer moment ${index + 1}`} className="object-cover w-full h-full" />
                  </div>

                  {/* 3D Frame Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow/5 to-transparent rounded-lg pointer-events-none"></div>
                </div>

                {/* Shadow Effect */}
                <div className="absolute inset-0 bg-burnout-black/20 rounded-lg transform translate-x-2 translate-y-2 -z-10 transition-all duration-300 group-hover:translate-x-4 group-hover:translate-y-4"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-burnout-gray-300 font-source text-lg mb-6">
            Ready to create your own transformation story?
          </p>
          <button 
            onClick={openWhatsApp}
            className="btn-primary text-lg"
          >
            START YOUR JOURNEY TODAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerMomentsSection;

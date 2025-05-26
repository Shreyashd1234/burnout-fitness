
import React, { useEffect, useRef } from 'react';

const ContactSection = () => {
  const planeRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            // Animate paper plane
            if (planeRef.current) {
              planeRef.current.style.transform = 'translateX(0) translateY(0) rotate(0deg)';
            }
          }
        });
      },
      { threshold: 0.2 }
    );

    if (formRef.current) observer.observe(formRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="section-padding bg-burnout-black relative overflow-hidden">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-burnout-black/80 to-burnout-gray-900/80"></div>
      
      {/* Gym Floor Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="w-full h-full bg-repeat" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFD200' fill-opacity='0.1'%3E%3Cpath d='M30 30c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20zm0-40c0-11.046 8.954-20 20-20s20 8.954 20 20-8.954 20-20 20-20-8.954-20-20z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Contact Info */}
          <div className="section-reveal space-y-8">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white leading-tight">
              CONTACT <span className="text-gradient">US</span>
            </h2>
            
            <p className="text-xl text-burnout-gray-300 font-oswald leading-relaxed">
              WE'RE HERE TO HELP YOU ON YOUR FITNESS JOURNEY
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-2xl">📞</span>
                </div>
                <div className="text-center">
                  <div className="text-burnout-yellow font-oswald font-semibold text-lg">CALL US</div>
                  <div className="text-burnout-gray-300 font-source">(555) BURNOUT</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-2xl">✉️</span>
                </div>
                <div className="text-center">
                  <div className="text-burnout-yellow font-oswald font-semibold text-lg">EMAIL US</div>
                  <div className="text-burnout-gray-300 font-source">info@burnoutfitness.com</div>
                </div>
              </div>
              
              <div className="flex flex-col items-center space-y-4">
                <div className="w-16 h-16 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-2xl">📍</span>
                </div>
                <div className="text-center">
                  <div className="text-burnout-yellow font-oswald font-semibold text-lg">VISIT US</div>
                  <div className="text-burnout-gray-300 font-source">
                    123 Fitness Boulevard<br />
                    Muscle City, MC 12345
                  </div>
                </div>
              </div>
            </div>

            {/* 3D Floating Paper Plane */}
            <div className="relative mt-12">
              <div
                ref={planeRef}
                className="placeholder-3d w-24 h-16 absolute left-1/2 transform -translate-x-1/2 animate-float"
                style={{
                  transform: 'translateX(-200px) translateY(-50px) rotate(-45deg)',
                  transition: 'transform 2s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow/30 to-yellow-600/30 rounded-lg"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                  <div className="text-burnout-yellow text-xs font-oswald opacity-70">✈️</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

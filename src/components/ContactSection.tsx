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
            {/* Contact Details */}
            <div className="mt-32 space-y-4 text-burnout-gray-200 font-source text-lg max-w-xl mx-auto bg-burnout-gray-900 rounded-xl p-8 border border-burnout-yellow/30 shadow-lg">
              <div><span className="font-bold text-burnout-yellow">Contact number:</span> 8260765803</div>
              <div><span className="font-bold text-burnout-yellow">Email:</span> burnoutfitnesspvtltd@gmail.com</div>
              <div>
                <span className="font-bold text-burnout-yellow">Address:</span> 2nd floor, AGM tower, Sai Baba temple road, Munnekolala, Bangalore, Karnataka
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

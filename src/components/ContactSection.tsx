
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Contact Info */}
          <div className="section-reveal space-y-8">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white leading-tight">
              GET IN <span className="text-gradient">TOUCH</span>
            </h2>
            
            <p className="text-xl text-burnout-gray-300 font-oswald leading-relaxed">
              READY TO START YOUR FITNESS JOURNEY? WE'RE HERE TO HELP!
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-xl">📞</span>
                </div>
                <div>
                  <div className="text-burnout-yellow font-oswald font-semibold">CALL US</div>
                  <div className="text-burnout-gray-300 font-source">(555) BURNOUT</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-xl">✉️</span>
                </div>
                <div>
                  <div className="text-burnout-yellow font-oswald font-semibold">EMAIL US</div>
                  <div className="text-burnout-gray-300 font-source">info@burnoutfitness.com</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-burnout-yellow rounded-lg flex items-center justify-center">
                  <span className="text-burnout-black text-xl">📍</span>
                </div>
                <div>
                  <div className="text-burnout-yellow font-oswald font-semibold">VISIT US</div>
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
                className="placeholder-3d w-24 h-16 absolute -right-8 animate-float"
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

          {/* Contact Form */}
          <div ref={formRef} className="section-reveal">
            <div className="bg-burnout-gray-900/50 backdrop-blur-sm p-8 rounded-xl border border-burnout-gray-700">
              <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-6">
                Send us a Message
              </h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="First Name"
                    className="bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none transition-colors"
                  />
                  <input
                    type="text"
                    placeholder="Last Name"
                    className="bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none transition-colors"
                  />
                </div>
                
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none transition-colors"
                />
                
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none transition-colors"
                />
                
                <select className="w-full bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white focus:border-burnout-yellow focus:outline-none transition-colors">
                  <option value="">Select Service Interest</option>
                  <option value="membership">General Membership</option>
                  <option value="personal">Personal Training</option>
                  <option value="group">Group Classes</option>
                  <option value="franchise">Franchise Opportunity</option>
                </select>
                
                <textarea
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full bg-burnout-black/50 border border-burnout-gray-600 rounded-lg px-4 py-3 text-burnout-white placeholder-burnout-gray-400 focus:border-burnout-yellow focus:outline-none transition-colors resize-none"
                ></textarea>
                
                <button type="submit" className="btn-primary w-full">
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

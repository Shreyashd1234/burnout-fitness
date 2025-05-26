
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const trainerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (trainerRef.current) observer.observe(trainerRef.current);
    if (textRef.current) observer.observe(textRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="section-padding bg-burnout-black">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div ref={textRef} className="section-reveal space-y-6">
            <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white leading-tight">
              ABOUT <span className="text-gradient">BURNOUT</span>
            </h2>
            
            <p className="text-xl text-burnout-gray-300 font-oswald leading-relaxed">
              WE BELIEVE FITNESS IS NOT JUST A ROUTINE – IT'S A LIFESTYLE TRANSFORMATION
            </p>
            
            <div className="space-y-4 text-burnout-gray-200 font-source text-lg leading-relaxed">
              <p>
                Founded in 2018, Burnout Fitness Studio has been dedicated to creating an environment 
                where fitness enthusiasts of all levels can push their limits and achieve extraordinary results.
              </p>
              
              <p>
                Our team of certified trainers brings over 50 years of combined experience, ensuring 
                you receive expert guidance on your fitness journey. We combine cutting-edge equipment 
                with proven training methodologies to deliver results that exceed expectations.
              </p>
              
              <p>
                From beginners taking their first steps to seasoned athletes pushing new boundaries, 
                we provide personalized attention and unwavering support to help you burnout your limits 
                and ignite your potential.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="text-3xl font-montserrat font-black text-burnout-yellow">500+</div>
                <div className="text-sm font-oswald text-burnout-gray-400">MEMBERS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-black text-burnout-yellow">15+</div>
                <div className="text-sm font-oswald text-burnout-gray-400">TRAINERS</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-montserrat font-black text-burnout-yellow">5</div>
                <div className="text-sm font-oswald text-burnout-gray-400">YEARS</div>
              </div>
            </div>
          </div>

          {/* Image Placeholder */}
          <div ref={trainerRef} className="section-reveal flex justify-center lg:justify-end">
            <div className="w-80 h-96 bg-white rounded-lg flex items-center justify-center border-2 border-burnout-yellow transform hover:scale-105 transition-transform duration-300">
              <span className="text-burnout-black text-sm font-oswald">TRAINER IMAGE</span>
            </div>
          </div>
        </div>

        {/* Promotional Video Section */}
        <div className="mt-20 section-reveal">
          <div className="text-center mb-8">
            <h3 className="text-3xl md:text-4xl font-montserrat font-black text-burnout-white mb-4">
              EXPERIENCE <span className="text-gradient">BURNOUT</span>
            </h3>
            <p className="text-lg text-burnout-gray-300 font-oswald">
              Watch our gym introduction video
            </p>
          </div>
          
          {/* Video Placeholder */}
          <div className="w-full h-64 md:h-96 bg-white rounded-lg flex items-center justify-center border-2 border-burnout-yellow">
            <span className="text-burnout-black text-lg font-oswald">PROMOTIONAL VIDEO</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

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
              WHO <span className="text-gradient">WE ARE</span>
            </h2>
            
            <p className="text-xl text-burnout-gray-300 font-oswald leading-relaxed">
              WE BELIEVE FITNESS IS NOT JUST A ROUTINE – IT'S A LIFESTYLE TRANSFORMATION
            </p>
            
            {/* Mission & Vision (now horizontal blocks) */}
            <div className="space-y-6">
              <div>
                <div className="text-burnout-yellow font-oswald font-semibold text-2xl mb-2">OUR MISSION</div>
                <p className="text-burnout-gray-200 font-source text-lg leading-relaxed">
                  To empower individuals through fitness, creating a community where everyone can achieve their health and wellness goals. We strive to provide accessible, high-quality fitness solutions that transform lives and build lasting healthy habits.
                </p>
              </div>
              <div>
                <div className="text-burnout-yellow font-oswald font-semibold text-2xl mb-2">OUR VISION</div>
                <p className="text-burnout-gray-200 font-source text-lg leading-relaxed">
                  To be the leading fitness destination in India, known for our innovative approach to wellness, exceptional training programs, and commitment to member success. We envision a future where fitness is accessible to all, creating healthier communities nationwide.
                </p>
              </div>
            </div>

            {/* About Story (moved below mission/vision) */}
            <div className="space-y-4 text-burnout-gray-200 font-source text-lg leading-relaxed pt-4">
              <p>
                Founded in 2018, Burnout Fitness Studio has been dedicated to creating an environment 
                where fitness enthusiasts of all levels can push their limits and achieve extraordinary results.
              </p>
            </div>

            {/* Statistics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 pt-12 text-center">
              <div className="flex flex-col items-center justify-center h-full bg-burnout-gray-900 rounded-xl p-6 shadow-md">
                <div className="text-4xl md:text-5xl font-montserrat font-extrabold text-burnout-yellow mb-1 leading-none">15+</div>
                <div className="text-lg md:text-xl font-oswald font-bold text-burnout-gray-200 tracking-wide leading-tight">BRANCHES</div>
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-burnout-gray-900 rounded-xl p-6 shadow-md">
                <span className="text-burnout-yellow text-2xl mb-1">🏋️‍♂️</span>
                <div className="text-lg md:text-xl font-oswald font-bold text-burnout-gray-200 tracking-wide leading-tight">Imported Equipments</div>
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-burnout-gray-900 rounded-xl p-6 shadow-md">
                <span className="text-burnout-yellow text-2xl mb-1">💪</span>
                <div className="text-lg md:text-xl font-oswald font-bold text-burnout-gray-200 tracking-wide leading-tight">Natural Transformation Only</div>
              </div>
              <div className="flex flex-col items-center justify-center h-full bg-burnout-gray-900 rounded-xl p-6 shadow-md">
                <span className="text-burnout-yellow text-2xl mb-1">🚚</span>
                <div className="text-lg md:text-xl font-oswald font-bold text-burnout-gray-200 tracking-wide leading-tight">Distribution of <span className="text-burnout-yellow">MBH</span> gym equipments in India</div>
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

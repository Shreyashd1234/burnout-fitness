import React, { useEffect, useRef } from 'react';
import gymImg from '../assets/gym.jpg';
import zumbaImg from '../assets/zumba.jpg';
import yogaImg from '../assets/yoga.jpg';
import danceImg from '../assets/dance.jpg';
import aerobicsImg from '../assets/aerobics.jpg';
import boxingImg from '../assets/boxing.jpg';
import pilatesImg from '../assets/pilates.jpg';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Gym',
      description: 'Complete strength training with state-of-the-art equipment',
      image: gymImg
    },
    {
      title: 'Zumba',
      description: 'High-energy dance fitness that makes working out fun',
      image: zumbaImg
    },
    {
      title: 'Yoga',
      description: 'Improve flexibility and find your inner balance',
      image: yogaImg
    },
    {
      title: 'Dance',
      description: 'Express yourself through movement and rhythm',
      image: danceImg
    },
    {
      title: 'Aerobics',
      description: 'Cardiovascular workouts to boost your endurance',
      image: aerobicsImg
    },
    {
      title: 'Boxing',
      description: 'Build strength, agility, and confidence through boxing',
      image: boxingImg
    },
    {
      title: 'Pilates',
      description: 'Enhance core strength, flexibility, and posture with expert-led Pilates sessions',
      image: pilatesImg
    }
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

    const cards = sectionRef.current?.querySelectorAll('.service-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="services" className="section-padding bg-burnout-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            OUR <span className="text-gradient">SERVICES</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Choose from our comprehensive range of fitness programs designed to help you achieve your goals
          </p>
        </div>

        {/* Services Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="service-card stagger-item card-3d bg-burnout-black border border-burnout-gray-700 rounded-xl p-6 hover:border-burnout-yellow transition-all duration-300 group"
            >
              {/* Service Image Placeholder */}
              <div className="w-full h-40 mb-6 rounded-xl flex items-center justify-center overflow-hidden border-2 border-burnout-yellow shadow-lg bg-gradient-to-br from-burnout-gray-900 via-burnout-gray-800 to-burnout-black">
                <img
                  src={service.image}
                  alt={service.title}
                  className="object-cover w-full h-full"
                />
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-oswald font-semibold text-burnout-white mb-3 group-hover:text-burnout-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-burnout-gray-300 font-source leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

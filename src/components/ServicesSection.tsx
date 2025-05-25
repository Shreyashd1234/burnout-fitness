
import React, { useEffect, useRef } from 'react';

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      title: 'Strength Training',
      description: 'Build muscle and increase power with our state-of-the-art equipment',
      icon3d: 'barbell'
    },
    {
      title: 'HIIT Workouts',
      description: 'High-intensity interval training for maximum fat burn',
      icon3d: 'kettlebell'
    },
    {
      title: 'Yoga & Flexibility',
      description: 'Improve flexibility and find your inner balance',
      icon3d: 'yoga-mat'
    },
    {
      title: 'Personal Coaching',
      description: 'One-on-one training tailored to your specific goals',
      icon3d: 'dumbbell'
    },
    {
      title: 'Group Classes',
      description: 'Motivating group sessions with expert instructors',
      icon3d: 'group-workout'
    },
    {
      title: 'Cardio Training',
      description: 'Boost your endurance with cutting-edge cardio equipment',
      icon3d: 'treadmill'
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
              {/* 3D Icon Placeholder */}
              <div className="placeholder-3d w-full h-40 mb-6 group-hover:animate-float">
                <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow/20 to-yellow-600/20 rounded-lg"></div>
              </div>

              {/* Service Content */}
              <h3 className="text-2xl font-oswald font-semibold text-burnout-white mb-3 group-hover:text-burnout-yellow transition-colors">
                {service.title}
              </h3>
              <p className="text-burnout-gray-300 font-source leading-relaxed">
                {service.description}
              </p>

              {/* Hover Effect */}
              <div className="mt-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <button className="text-burnout-yellow font-oswald font-semibold hover:text-yellow-400 transition-colors">
                  LEARN MORE →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

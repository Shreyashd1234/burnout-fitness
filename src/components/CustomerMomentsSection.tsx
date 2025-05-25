
import React, { useEffect, useRef } from 'react';

const CustomerMomentsSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const moments = [
    {
      image: 'photo-1526374965328-7f61d4dc18c5',
      title: 'Strength Training Session',
      description: 'Members pushing their limits'
    },
    {
      image: 'photo-1500673922987-e212871fec22',
      title: 'Group HIIT Class',
      description: 'High energy team workout'
    },
    {
      image: 'photo-1501854140801-50d01698950b',
      title: 'Personal Training',
      description: 'One-on-one coaching'
    },
    {
      image: 'photo-1465146344425-f00d5f5c8f07',
      title: 'Yoga & Flexibility',
      description: 'Finding inner balance'
    },
    {
      image: 'photo-1582562124811-c09040d0a901',
      title: 'Recovery Session',
      description: 'Post-workout relaxation'
    },
    {
      image: 'photo-1526374965328-7f61d4dc18c5',
      title: 'Team Challenge',
      description: 'Community fitness event'
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

    const cards = sectionRef.current?.querySelectorAll('.moment-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

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
                  <div className="aspect-square overflow-hidden rounded-lg bg-burnout-gray-700 mb-4">
                    <img
                      src={`https://images.unsplash.com/${moment.image}?w=400&h=400&fit=crop`}
                      alt={moment.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-lg font-oswald font-semibold text-burnout-yellow group-hover:text-yellow-400 transition-colors">
                      {moment.title}
                    </h3>
                    <p className="text-burnout-gray-300 font-source text-sm">
                      {moment.description}
                    </p>
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
          <button className="btn-primary text-lg">
            START YOUR JOURNEY TODAY
          </button>
        </div>
      </div>
    </section>
  );
};

export default CustomerMomentsSection;

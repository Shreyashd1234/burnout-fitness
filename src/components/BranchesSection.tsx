
import React, { useEffect, useRef } from 'react';

const BranchesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const branches = [
    {
      name: 'Downtown Central',
      address: '123 Main Street, Downtown',
      phone: '(555) 123-4567',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
    },
    {
      name: 'Westside Plaza',
      address: '456 West Avenue, Westside',
      phone: '(555) 234-5678',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
    },
    {
      name: 'North Hills',
      address: '789 North Road, Hills District',
      phone: '(555) 345-6789',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
    },
    {
      name: 'Eastgate Center',
      address: '321 East Boulevard, Eastgate',
      phone: '(555) 456-7890',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
    },
    {
      name: 'Southpark Mall',
      address: '654 South Park Drive, Southpark',
      phone: '(555) 567-8901',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
    },
    {
      name: 'Riverside District',
      address: '987 River Road, Riverside',
      phone: '(555) 678-9012',
      hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
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

    const cards = sectionRef.current?.querySelectorAll('.branch-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <section id="branches" className="section-padding bg-burnout-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            OUR <span className="text-gradient">BRANCHES</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Find a Burnout Fitness Studio near you and start your transformation today
          </p>
        </div>

        {/* Branches Grid */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {branches.map((branch, index) => (
            <div
              key={index}
              className="branch-card stagger-item card-3d bg-burnout-black border border-burnout-gray-700 rounded-xl p-6 hover:border-burnout-yellow transition-all duration-300 group"
            >
              {/* Branch Image Placeholder */}
              <div className="w-full h-48 mb-6 bg-white rounded-lg flex items-center justify-center">
                <span className="text-burnout-black text-sm font-oswald">BRANCH IMAGE</span>
              </div>

              {/* Branch Info */}
              <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-3 group-hover:text-yellow-400 transition-colors">
                {branch.name}
              </h3>
              
              <div className="space-y-3 text-burnout-gray-300 font-source">
                <div className="flex items-start space-x-3">
                  <span className="text-burnout-yellow text-sm">📍</span>
                  <span>{branch.address}</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <span className="text-burnout-yellow text-sm">📞</span>
                  <span>{branch.phone}</span>
                </div>
                
                <div className="flex items-start space-x-3">
                  <span className="text-burnout-yellow text-sm">🕒</span>
                  <span className="text-sm">{branch.hours}</span>
                </div>
              </div>

              {/* CTA Button */}
              <div className="mt-6">
                <button className="w-full bg-burnout-yellow text-burnout-black font-oswald font-semibold py-3 rounded-lg hover:bg-yellow-400 transition-colors">
                  GET LOCATION
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BranchesSection;

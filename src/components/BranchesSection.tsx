import React, { useEffect, useRef } from 'react';

const BranchesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  // ===============================================
  // HOW TO ADD A NEW BRANCH BOX:
  // ===============================================
  // 1. Copy the branch object template below
  // 2. Paste it into the branches array
  // 3. Update the following fields:
  //    - name: Your branch name (e.g., 'New Location')
  //    - address: Full address of the branch
  //    - phone: Contact phone number
  //    - hours: Operating hours
  // 
  // TEMPLATE TO COPY:
  // {
  //   name: 'Your Branch Name',
  //   address: 'Your Full Address Here',
  //   phone: '(555) XXX-XXXX',
  //   hours: 'Mon-Fri: 5AM-11PM, Sat-Sun: 6AM-10PM'
  // },
  // ===============================================

  const branches = [
    {
      name: 'Munnekolala',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'AECS Layout',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'BEML',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Marathahalli Bridge',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Nitrogen SGR Dental College Road',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Doddakannelli',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Kadugodi',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Pai Layout',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Electronic City',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
    },
    {
      name: 'Belgaum',
      address: 'Branch address here',
      phone: 'Phone number here',
      hours: 'Hours here'
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

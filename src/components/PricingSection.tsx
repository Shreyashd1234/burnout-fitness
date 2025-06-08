import React, { useEffect, useRef } from 'react';

const PricingSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  const pricingPlans = [
    {
      name: 'BASIC',
      price: 8000,
      period: 'month',
      features: [
        'Access to gym equipment',
        'Locker room access',
        'Basic fitness assessment',
        'Mobile app access'
      ],
      popular: false
    },
    {
      name: 'PRO',
      price: 10000,
      period: 'month',
      features: [
        'Everything in Basic',
        'Unlimited group classes',
        'Personal trainer consultation',
        'Nutrition guidance',
        'Guest passes (2/month)'
      ],
      popular: true
    },
    {
      name: 'ELITE',
      price: 12000,
      period: 'month',
      features: [
        'Everything in Pro',
        'Unlimited personal training',
        'Custom meal plans',
        'Priority class booking',
        'Spa & recovery services',
        'Guest passes (5/month)'
      ],
      popular: false
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = sectionRef.current?.querySelectorAll('.pricing-card');
    cards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = (planName: string) => {
    const message = encodeURIComponent(`Hi! I'm interested in the ${planName} membership plan. Can you provide more details?`);
    window.open(`https://wa.me/918431157922?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-burnout-gray-900">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            MEMBERSHIP <span className="text-gradient">PRICING</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Affordable, all-inclusive plans designed for the needs of a modern Indian gym-goer in a tier 2 city. Enjoy world-class equipment, group classes, personal training, and more—without breaking the bank.
          </p>
        </div>

        {/* Pricing Cards */}
        <div ref={sectionRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              className={`pricing-card stagger-item card-3d relative bg-burnout-black border-2 rounded-xl p-8 transition-all duration-300 hover:scale-105 ${
                plan.popular
                  ? 'border-burnout-yellow shadow-lg shadow-burnout-yellow/20'
                  : 'border-burnout-gray-700 hover:border-burnout-yellow'
              }`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-burnout-yellow text-burnout-black font-oswald font-semibold px-6 py-2 rounded-full text-sm">
                    MOST POPULAR
                  </span>
                </div>
              )}

              {/* Plan Details */}
              <div className="text-center mb-8">
                <h3 className="text-2xl font-oswald font-semibold text-burnout-yellow mb-2">
                  {plan.name}
                </h3>
                <div className="text-4xl font-montserrat font-black text-burnout-white mb-1">
                  ₹{plan.price}
                </div>
                <div className="text-burnout-gray-400 font-source">
                  per {plan.period}
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-burnout-gray-200 font-source">
                    <div className="w-2 h-2 bg-burnout-yellow rounded-full mr-3 flex-shrink-0"></div>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <button 
                onClick={() => openWhatsApp(plan.name)}
                className={`w-full py-4 rounded-lg font-oswald font-semibold transition-all duration-300 ${
                  plan.popular
                    ? 'bg-burnout-yellow text-burnout-black hover:bg-yellow-400 hover:scale-105'
                    : 'bg-transparent border-2 border-burnout-yellow text-burnout-yellow hover:bg-burnout-yellow hover:text-burnout-black'
                }`}
              >
                GET STARTED
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

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
    window.open(`https://wa.me/918260765803?text=${message}`, '_blank');
  };

  return (
    <section id="pricing" className="section-padding bg-burnout-gray-900 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="w-full h-full bg-gradient-to-br from-burnout-yellow/5 via-transparent to-burnout-yellow/10"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-10 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            MEMBERSHIP <span className="text-gradient">PRICING</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Unlock access to world-class fitness, luxury amenities, and expert coaching—crafted for those who demand the best. Experience transformative results in an environment designed for excellence, community, and your personal growth.
          </p>
        </div>

        {/* Registration Fee Notice */}
        <div className="text-center mb-8 section-reveal">
          <span className="inline-block bg-burnout-yellow text-burnout-black font-oswald font-semibold px-6 py-2 rounded-full text-lg shadow-md">
            One Time Registration: ₹300 per year
          </span>
        </div>

        {/* Tariff Plan Gym */}
        <div className="mb-16 section-reveal stagger-item">
          <div className="bg-burnout-black border border-burnout-gray-700 rounded-2xl shadow-lg p-8 md:p-12 relative hover:border-burnout-yellow hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 pricing-card">
            <h3 className="text-2xl font-oswald font-bold text-burnout-yellow mb-6 text-center flex items-center justify-center gap-2">
              TARIFF PLAN GYM
              <span className="bg-burnout-yellow text-burnout-black font-oswald font-semibold px-4 py-1 rounded-full text-xs ml-2 animate-pulse">MOST POPULAR</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-burnout-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-burnout-gray-800">
                    <th className="px-4 py-3 rounded-tl-xl text-burnout-yellow font-bold">Plan</th>
                    <th className="px-4 py-3 text-burnout-yellow font-bold">Price</th>
                    <th className="px-4 py-3 text-burnout-yellow font-bold">Offer Price</th>
                    <th className="px-4 py-3 rounded-tr-xl text-burnout-yellow font-bold">Couple Offer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Year</td><td>₹21,999</td><td className="font-bold text-burnout-yellow">₹9,799</td><td>₹16,999</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">6 Month</td><td>₹14,999</td><td>₹7,777</td><td>₹10,999</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">3 Month</td><td>₹9,999</td><td>₹4,888</td><td>₹7,999</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Month</td><td>₹3,999</td><td>₹1,999</td><td>₹3,699</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => openWhatsApp('Gym Membership')} className="btn-primary">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <span className="block w-32 h-1 bg-gradient-to-r from-burnout-yellow/70 via-burnout-yellow/30 to-burnout-yellow/70 rounded-full opacity-80"></span>
        </div>

        {/* Tariff Personal Training */}
        <div className="mb-16 section-reveal stagger-item">
          <div className="bg-burnout-black border border-burnout-gray-700 rounded-2xl shadow-lg p-8 md:p-12 hover:border-burnout-yellow hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 pricing-card">
            <h3 className="text-2xl font-oswald font-bold text-burnout-yellow mb-6 text-center">TARIFF PERSONAL TRAINING</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-burnout-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-burnout-gray-800">
                    <th className="px-4 py-3 rounded-tl-xl text-burnout-yellow font-bold">Duration/Sessions</th>
                    <th className="px-4 py-3 text-burnout-yellow font-bold">Price</th>
                    <th className="px-4 py-3 rounded-tr-xl text-burnout-yellow font-bold">Couple Offer</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">3 Month (70 Sessions)</td><td>₹29,999</td><td>₹49,999</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">2 Month (40 Sessions)</td><td>₹14,999</td><td>₹24,999</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">45 Days (20 Sessions)</td><td>₹6,999</td><td>₹11,999</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Month (12 Sessions)</td><td>₹5,999</td><td>₹9,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => openWhatsApp('Personal Training')} className="btn-primary">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <span className="block w-32 h-1 bg-gradient-to-r from-burnout-yellow/70 via-burnout-yellow/30 to-burnout-yellow/70 rounded-full opacity-80"></span>
        </div>

        {/* Tariff Plan Yoga */}
        <div className="mb-16 section-reveal stagger-item">
          <div className="bg-burnout-black border border-burnout-gray-700 rounded-2xl shadow-lg p-8 md:p-12 hover:border-burnout-yellow hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 pricing-card">
            <h3 className="text-2xl font-oswald font-bold text-burnout-yellow mb-6 text-center">TARIFF PLAN YOGA</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-burnout-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-burnout-gray-800">
                    <th className="px-4 py-3 rounded-tl-xl text-burnout-yellow font-bold">Plan</th>
                    <th className="px-4 py-3 rounded-tr-xl text-burnout-yellow font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Month</td><td>₹1,499</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">2 Month</td><td>₹2,699</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">3 Month</td><td>₹3,499</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">6 Month</td><td>₹4,999</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Year</td><td>₹6,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => openWhatsApp('Yoga Membership')} className="btn-primary">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="flex justify-center mb-16">
          <span className="block w-32 h-1 bg-gradient-to-r from-burnout-yellow/70 via-burnout-yellow/30 to-burnout-yellow/70 rounded-full opacity-80"></span>
        </div>

        {/* Tariff Plan Zumba */}
        <div className="mb-16 section-reveal stagger-item">
          <div className="bg-burnout-black border border-burnout-gray-700 rounded-2xl shadow-lg p-8 md:p-12 hover:border-burnout-yellow hover:shadow-2xl hover:scale-[1.03] transition-all duration-300 pricing-card">
            <h3 className="text-2xl font-oswald font-bold text-burnout-yellow mb-6 text-center">TARIFF PLAN ZUMBA</h3>
            <div className="overflow-x-auto">
              <table className="min-w-full text-burnout-white text-center border-separate border-spacing-y-2">
                <thead>
                  <tr className="bg-burnout-gray-800">
                    <th className="px-4 py-3 rounded-tl-xl text-burnout-yellow font-bold">Plan</th>
                    <th className="px-4 py-3 rounded-tr-xl text-burnout-yellow font-bold">Price</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Month</td><td>₹1,499</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">2 Month</td><td>₹2,699</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">3 Month</td><td>₹3,499</td>
                  </tr>
                  <tr className="bg-burnout-black hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">6 Month</td><td>₹4,999</td>
                  </tr>
                  <tr className="bg-burnout-gray-900 hover:bg-burnout-gray-800 transition-all">
                    <td className="font-semibold">1 Year</td><td>₹6,999</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="flex justify-center mt-6">
              <button onClick={() => openWhatsApp('Zumba Membership')} className="btn-primary">GET STARTED</button>
            </div>
          </div>
        </div>

        {/* Branch Info */}
        <div className="text-center mt-10 section-reveal">
          <span className="text-burnout-yellow font-oswald font-semibold text-lg">
            15+ Running Branches in India | Branches at Bengaluru, Belgaum, Kanpur, Odisha
          </span>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;

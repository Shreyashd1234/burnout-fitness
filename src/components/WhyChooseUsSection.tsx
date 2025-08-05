import React from 'react';

const features = [
  'Premium imported equipment for top-quality workouts',
  'Complimentary Zumba, Yoga, and Dance classes',
  'Free gym kit with every membership',
  'Access to 15+ branches across India — switch anytime, anywhere',
  'Membership pause option available for up to 60 days',
  'Exclusive Pilates Section',
  'Dedicated space for group classes like Zumba and Yoga',
  'Separate CrossFit training zone',
  'Spacious 8000 sq. ft. gym facility',
  'Free BMI check-up and personalized diet plan',
];

const CheckIcon = () => (
  <svg className="w-7 h-7 text-burnout-yellow flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const WhyChooseUsSection = () => (
  <section className="section-padding relative bg-burnout-black overflow-hidden">
    {/* Subtle background gradient */}
    <div className="absolute inset-0 pointer-events-none" style={{zIndex:0}}>
      <div className="w-full h-full bg-gradient-to-br from-burnout-yellow/5 via-transparent to-burnout-yellow/10"></div>
    </div>
    <div className="max-w-7xl mx-auto relative z-10">
      <div className="text-center mb-10 section-reveal">
        <h2 className="text-4xl md:text-5xl font-montserrat font-black text-burnout-yellow mb-2">
          WHY CHOOSE <span className="text-gradient">US</span>
        </h2>
        <div className="flex justify-center mb-4">
          <span className="block w-24 h-1 bg-burnout-yellow rounded-full opacity-70"></span>
        </div>
        <p className="text-xl text-burnout-gray-300 font-oswald max-w-2xl mx-auto">
          Discover what sets Burnout Fitness Studio apart from the rest
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 section-reveal">
        {features.map((feature, idx) => (
          <div
            key={idx}
            className="flex items-start space-x-4 bg-burnout-black border border-burnout-gray-700 rounded-2xl p-6 shadow-lg hover:shadow-2xl hover:scale-[1.03] hover:border-burnout-yellow transition-all duration-300 group"
          >
            <span className="mt-1"><CheckIcon /></span>
            <span className="text-burnout-gray-100 font-oswald text-lg md:text-xl font-semibold leading-relaxed group-hover:text-burnout-yellow transition-colors">
              {feature}
            </span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhyChooseUsSection; 
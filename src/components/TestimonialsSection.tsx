import React, { useState, useEffect, useRef } from 'react';
import review1 from '../assets/review1.jpg';
import review2 from '../assets/review2.jpg';
import review3 from '../assets/review3.jpg';
import review4 from '../assets/review4.jpg';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Satyaban Mahakhud',
      role: '',
      image: review1,
      quote: "It's been an excellent experience, especially considering how budget-friendly it is. The gym is clean and equipped with everything you need for a great workout...💪😊\nIf you're looking for an affordable gym, I highly recommend Burnout Fitness. You get great value for your money!"
    },
    {
      name: 'bhagyashree bhatkande',
      role: '',
      image: review2,
      quote: "This gym is a fantastic find - the equipment is top-notch, well-maintained, and offers a great variety for all fitness levels. The staff are incredibly friendly and knowledgeable, always ready to assist with form and provide personalized workout plans. The atmosphere is positive and supportive, making it a welcoming place for both beginners and experienced athletes. I especially appreciate the clean facilities, diverse class options, and the community feel - it's not just a gym, it's a place where you feel motivated to reach your fitness goals."
    },
    {
      name: 'Hemanth Kumar A',
      role: '',
      image: review3,
      quote: "Good gym nyc experience coaches motivate us to do workout."
    },
    {
      name: 'Arghya Chakraborty',
      role: '',
      image: review4,
      quote: "I've been training at Burnout Fitness Gym for a few months now, and I can confidently say it's been a game-changer for my fitness journey! The gym itself is well-equipped, clean, and has a great atmosphere."
    }
  ];

  useEffect(() => {
    if (!isPaused) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isPaused, testimonials.length]);

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

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  const openWhatsApp = () => {
    const message = encodeURIComponent("Hi! I'm interested in learning more about Burnout Fitness Studio membership options.");
    window.open(`https://wa.me/918260765803?text=${message}`, '_blank');
  };

  return (
    <section className="section-padding bg-burnout-gray-900 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div ref={sectionRef} className="text-center mb-16 section-reveal">
          <h2 className="text-4xl md:text-6xl font-montserrat font-black text-burnout-white mb-4">
            WHAT OUR <span className="text-gradient">CUSTOMERS SAY</span>
          </h2>
          <p className="text-xl text-burnout-gray-300 font-oswald max-w-3xl mx-auto">
            Real stories from real people who transformed their lives at Burnout Fitness
          </p>
        </div>

        {/* Testimonial Carousel */}
        <div
          className="relative bg-burnout-black rounded-2xl p-8 md:p-12 border border-burnout-gray-700"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          <div className="text-center">
            {/* Quote */}
            <div className="mb-8">
              <span className="text-6xl text-burnout-yellow font-serif leading-none">"</span>
              <p className="text-xl md:text-2xl text-burnout-gray-200 font-source leading-relaxed mx-auto max-w-4xl mt-4">
                {testimonials[currentTestimonial].quote}
              </p>
              <span className="text-6xl text-burnout-yellow font-serif leading-none">"</span>
            </div>

            {/* Customer Info */}
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 rounded-full bg-burnout-gray-700 overflow-hidden">
                <img
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="text-burnout-yellow font-oswald font-semibold text-lg">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-burnout-gray-400 font-source text-sm">
                  {testimonials[currentTestimonial].role}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Dots */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial
                    ? 'bg-burnout-yellow scale-125'
                    : 'bg-burnout-gray-600 hover:bg-burnout-gray-500'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

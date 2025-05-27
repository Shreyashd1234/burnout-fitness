
import React, { useState, useEffect, useRef } from 'react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      image: 'photo-1582562124811-c09040d0a901',
      quote: 'Burnout Fitness completely transformed my life. The trainers are incredible and the community is so supportive. I\'ve never felt stronger!'
    },
    {
      name: 'Mike Rodriguez',
      role: 'Software Engineer',
      image: 'photo-1500673922987-e212871fec22',
      quote: 'The HIIT classes at Burnout are intense but amazing. I\'ve lost 30 pounds and gained so much confidence. This place is addictive in the best way!'
    },
    {
      name: 'Emily Chen',
      role: 'Business Owner',
      image: 'photo-1526374965328-7f61d4dc18c5',
      quote: 'As a busy entrepreneur, I need workouts that are efficient and effective. Burnout delivers exactly that. The personal training is top-notch!'
    },
    {
      name: 'David Thompson',
      role: 'Teacher',
      image: 'photo-1501854140801-50d01698950b',
      quote: 'I was intimidated by gyms before, but Burnout made me feel welcome from day one. The progress I\'ve made here is beyond my wildest dreams!'
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
    window.open(`https://wa.me/15558876688?text=${message}`, '_blank');
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
                  src={`https://images.unsplash.com/${testimonials[currentTestimonial].image}?w=64&h=64&fit=crop&crop=face`}
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

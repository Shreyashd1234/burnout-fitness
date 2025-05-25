
import React, { useEffect, useRef } from 'react';

const HeroSection = () => {
  const dumbbellRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (dumbbellRef.current) {
        const rect = dumbbellRef.current.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 10;
        const y = (e.clientY - rect.top - rect.height / 2) / 10;
        
        dumbbellRef.current.style.transform = `translate(${x}px, ${y}px) rotateY(${x}deg) rotateX(${-y}deg)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with parallax effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-burnout-black via-burnout-gray-900 to-burnout-black"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-burnout-yellow rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          ></div>
        ))}
      </div>

      <div className="relative z-10 text-center max-w-6xl mx-auto px-4">
        {/* 3D Dumbbell Placeholder */}
        <div className="mb-12 flex justify-center">
          <div
            ref={dumbbellRef}
            className="placeholder-3d w-32 h-32 md:w-48 md:h-48 animate-rotate-3d transition-transform duration-100 ease-out"
            style={{ transformStyle: 'preserve-3d' }}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-burnout-yellow to-yellow-600 rounded-lg opacity-20 animate-glow"></div>
          </div>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-montserrat font-black mb-6 leading-tight">
          <span className="text-burnout-white">BURNOUT</span>
          <br />
          <span className="text-gradient glow-text">FITNESS STUDIO</span>
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl font-oswald text-burnout-gray-300 mb-8 max-w-3xl mx-auto">
          TRANSFORM YOUR BODY. IGNITE YOUR PASSION. ACHIEVE THE IMPOSSIBLE.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button className="btn-primary text-lg animate-glow">
            BOOK YOUR FREE TRIAL
          </button>
          <button className="btn-secondary text-lg">
            EXPLORE MEMBERSHIPS
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-burnout-yellow rounded-full flex justify-center">
            <div className="w-1 h-3 bg-burnout-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

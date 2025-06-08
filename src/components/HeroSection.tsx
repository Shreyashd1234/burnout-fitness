import React, { Suspense } from 'react';
import { Canvas, useLoader } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
// @ts-ignore
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader';

function DumbbellModel() {
  const obj = useLoader(OBJLoader, '/dumbbell.obj');
  return <primitive object={obj} scale={2} />;
}

const HeroSection = () => {
  const handleBookTrial = () => {
    window.open('https://wa.me/918431157922', '_blank');
  };

  const handleExploreMemberships = () => {
    document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' });
  };

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
        {/* 3D Dumbbell Model */}
        <div className="mb-12 flex justify-center">
          <div className="w-32 h-32 md:w-48 md:h-48">
            <Canvas camera={{ position: [0, 0, 5] }}>
              <ambientLight intensity={0.7} />
              <directionalLight position={[5, 5, 5]} />
              <Suspense fallback={null}>
                <DumbbellModel />
                <OrbitControls enableZoom={false} />
              </Suspense>
            </Canvas>
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
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <button onClick={handleBookTrial} className="btn-primary text-lg animate-glow">
            BOOK YOUR FREE TRIAL
          </button>
          <button onClick={handleExploreMemberships} className="btn-secondary text-lg">
            EXPLORE MEMBERSHIPS
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center items-center">
          <div className="w-6 h-10 border-2 border-burnout-yellow rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-burnout-yellow rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;


import React, { useEffect } from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import ServicesSection from '../components/ServicesSection';
import AboutSection from '../components/AboutSection';
import PricingSection from '../components/PricingSection';
import FranchiseSection from '../components/FranchiseSection';
import BranchesSection from '../components/BranchesSection';
import ContactSection from '../components/ContactSection';
import TestimonialsSection from '../components/TestimonialsSection';
import CustomerMomentsSection from '../components/CustomerMomentsSection';
import Footer from '../components/Footer';

const Index = () => {
  useEffect(() => {
    // Intersection Observer for scroll-triggered animations
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);

    // Observe all sections with reveal animations
    const revealElements = document.querySelectorAll('.section-reveal');
    revealElements.forEach(el => observer.observe(el));

    // Page load animation
    document.body.style.overflow = 'hidden';
    setTimeout(() => {
      document.body.style.overflow = 'auto';
    }, 1000);

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-burnout-black text-burnout-white overflow-x-hidden">
      {/* Navigation */}
      <Navbar />
      
      {/* Page Sections */}
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
      <FranchiseSection />
      <BranchesSection />
      <ContactSection />
      <TestimonialsSection />
      <CustomerMomentsSection />
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;

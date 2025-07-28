import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'services', label: 'Services' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'franchise', label: 'Get a Franchise' },
    { id: 'branches', label: 'Our Branches' },
    { id: 'contact', label: 'Contact Us' },
    { id: 'equipments', label: 'Our Equipments', isExternal: true, isSpecial: true }
  ];

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Only update active section on home page
      if (location.pathname === '/') {
        const sections = navLinks.map(link => document.getElementById(link.id));
        const scrollPosition = window.scrollY + 100;

        for (let i = sections.length - 1; i >= 0; i--) {
          const section = sections[i];
          if (section && section.offsetTop <= scrollPosition) {
            setActiveSection(navLinks[i].id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [location.pathname]);

  const scrollToSection = (sectionId: string, isExternal: boolean = false) => {
    if (isExternal) {
      navigate(`/${sectionId}`);
      return;
    }

    // If not on home page, navigate to home first
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation then scroll
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-burnout-black/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button 
                onClick={() => navigate('/')}
                className="focus:outline-none"
                style={{ padding: 0, background: 'none', border: 'none' }}
              >
                <img
                  src="/logo.jpg"
                  alt="Burnout Fitness Logo"
                  className="h-8 mt-1 w-auto object-contain"
                  style={{ display: 'block' }}
                />
              </button>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id, link.isExternal)}
                    className={`navbar-link text-sm font-oswald font-medium px-3 py-2 transition-colors duration-300 ${
                      link.isSpecial 
                        ? 'bg-burnout-yellow text-burnout-black hover:bg-yellow-400 rounded-lg'
                        : activeSection === link.id && location.pathname === '/'
                          ? 'text-burnout-yellow active'
                          : 'text-burnout-white hover:text-burnout-yellow'
                    }`}
                  >
                    {link.label.toUpperCase()}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button 
                onClick={toggleSidebar}
                className="text-burnout-yellow hover:text-yellow-400 transition-colors p-2 rounded-lg bg-burnout-black/50 hover:bg-burnout-black/70"
                aria-label="Open menu"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sidebar */}
      <Sidebar
        isOpen={isOpen}
        toggleSidebar={toggleSidebar}
        navLinks={navLinks}
        scrollToSection={scrollToSection}
        activeSection={activeSection}
      />
    </>
  );
};

export default Navbar;

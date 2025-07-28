import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

interface SidebarProps {
  isOpen: boolean;
  toggleSidebar: () => void;
  navLinks: { id: string; label: string; isExternal?: boolean; isSpecial?: boolean }[];
  scrollToSection: (sectionId: string, isExternal?: boolean) => void;
  activeSection: string;
}

const Sidebar: React.FC<SidebarProps> = ({
  isOpen,
  toggleSidebar,
  navLinks,
  scrollToSection,
  activeSection,
}) => {
  const location = useLocation();
  const navigate = useNavigate();

  // Prevent body scroll when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleSidebar}
      />

      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 right-0 w-[280px] z-50 bg-burnout-black transition-transform duration-300 ease-in-out transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } md:hidden`}
      >
        {/* Sidebar Header */}
        <div className="flex items-center justify-between h-20 px-6 bg-burnout-gray-900 border-b-2 border-burnout-yellow/50">
          {/* Logo */}
          <button
            onClick={() => {
              navigate('/');
              toggleSidebar();
            }}
            className="focus:outline-none"
            style={{ padding: 0, background: 'none', border: 'none' }}
          >
            <img
              src="/logo.jpg"
              alt="Burnout Fitness Logo"
              className="h-10 w-auto object-contain"
              style={{ display: 'block' }}
            />
          </button>

          {/* Close Button */}
          <button
            onClick={toggleSidebar}
            className="text-burnout-yellow hover:text-yellow-400 transition-colors p-3 rounded-full bg-burnout-black/50 hover:bg-burnout-black/70"
            aria-label="Close menu"
          >
            <svg
              className="h-7 w-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        {/* Sidebar Navigation Links */}
        <div className="px-4 pt-4 pb-3 space-y-1 overflow-y-auto h-[calc(100vh-5rem)]">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => {
                scrollToSection(link.id, link.isExternal);
                toggleSidebar();
              }}
              className={`w-full text-left px-3 py-2 rounded-md text-base font-oswald font-medium transition-colors duration-300 ${
                link.isSpecial
                  ? 'bg-burnout-yellow text-burnout-black hover:bg-yellow-400'
                  : activeSection === link.id && location.pathname === '/'
                  ? 'text-burnout-yellow bg-burnout-gray-900'
                  : 'text-burnout-white hover:bg-burnout-gray-900'
              }`}
            >
              {link.label.toUpperCase()}
            </button>
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar; 
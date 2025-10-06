import React, { useState, useEffect } from 'react';
import { NAV_LINKS } from '../constants';
import type { NavLink } from '../types';

const Header: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-surface/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-primary">
          Pocket Studio
        </a>
        <nav className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link: NavLink) => (
            <a key={link.name} href={link.href} className="text-text-secondary hover:text-primary transition-colors duration-300">
              {link.name}
            </a>
          ))}
        </nav>
        <a 
          href="#contact"
          className="hidden md:inline-block bg-primary text-white font-semibold px-6 py-2 rounded-md hover:bg-primary-dark transition-all duration-300 transform hover:scale-105"
        >
          Contact Us
        </a>
        {/* Mobile menu button could be added here */}
      </div>
    </header>
  );
};

export default Header;
import React, { useState } from 'react';
import { Shield, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '#home' },
    { name: 'Features', href: '#features' },
    { name: 'Articles', href: '#articles' },
    { name: 'Books', href: '#books' },
    { name: 'About', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav aria-label="Main navigation" className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-200 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="#home" className="flex items-center space-x-2 text-xl font-bold text-gray-900 hover:text-green-600 transition-colors duration-200">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">SG</span>
              </div>
              <span>Secure GenAI</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                aria-label={`Navigate to ${item.name} section`}
                className="text-gray-800 hover:text-green-500 font-medium transition-colors duration-200 mobile-focus focus-ring"
              >
                {item.name}
              </a>
            ))}
            <button 
              aria-label="Subscribe to Secure GenAI newsletter"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 btn-primary mobile-button"
            >
              Subscribe
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden mobile-nav">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="text-gray-800 hover:text-green-500 transition-colors duration-200 tap-target"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mobile-menu">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  aria-label={`Navigate to ${item.name} section`}
                  className="text-gray-700 hover:text-green-500 font-medium transition-colors duration-200 py-2 mobile-focus focus-ring"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <button 
                aria-label="Subscribe to Secure GenAI newsletter"
                className="bg-green-500 hover:bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-200 w-full btn-primary mobile-button"
              >
                Subscribe
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
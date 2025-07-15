import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-black/90 backdrop-blur-md border-b border-red-600/20' : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">💀</span>
            </div>
            <img src="/public/IMG_4764.jpg" alt="$FOOL Logo" className="w-8 h-8 rounded-full object-cover" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection('hero')} className="text-white hover:text-red-400 transition-colors">
              Home
            </button>
            <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors">
              About
            </button>
            <button onClick={() => scrollToSection('how-to-buy')} className="text-white hover:text-red-400 transition-colors">
              How to Buy
            </button>
            <button onClick={() => scrollToSection('tokenomics')} className="text-white hover:text-red-400 transition-colors">
              Tokenomics
            </button>
            <button onClick={() => scrollToSection('community')} className="text-white hover:text-red-400 transition-colors">
              Community
            </button>
            <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors">
              BUY $FOOL
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-white"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-red-600/20">
            <div className="flex flex-col space-y-4">
              <button onClick={() => scrollToSection('hero')} className="text-white hover:text-red-400 transition-colors text-left">
                Home
              </button>
              <button onClick={() => scrollToSection('about')} className="text-white hover:text-red-400 transition-colors text-left">
                About
              </button>
              <button onClick={() => scrollToSection('how-to-buy')} className="text-white hover:text-red-400 transition-colors text-left">
                How to Buy
              </button>
              <button onClick={() => scrollToSection('tokenomics')} className="text-white hover:text-red-400 transition-colors text-left">
                Tokenomics
              </button>
              <button onClick={() => scrollToSection('community')} className="text-white hover:text-red-400 transition-colors text-left">
                Community
              </button>
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg font-bold transition-colors text-left">
                BUY $FOOL
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logo from '../assets/logo.png';

const Navigation = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const isActive = (path) => location.pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full top-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-[#faf9f9]/95 backdrop-blur-md shadow-md dark:bg-slate-950/95' 
        : 'bg-[#faf9f9] dark:bg-slate-950'
    }`}>
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-4 md:px-8 py-4">
        <div className="flex items-center gap-2 md:gap-3 min-w-0">
          <img 
            alt="Aarovan.ai Logo" 
            className="h-8 w-auto flex-shrink-0" 
            data-alt="Official blue logo of Aarovan.ai" 
            src={logo}
          />
          <span className="text-lg md:text-2xl font-serif font-bold text-[#1D3E53] dark:text-slate-100 truncate">Aarovan.ai</span>
        </div>
        
        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <Link 
            className={`${isActive('/') ? 'text-[#1D3E53] dark:text-white font-bold border-b-2 border-[#1D3E53] dark:border-slate-200 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-[#1D3E53] transition-colors'}`}
            to="/"
          >
            Home
          </Link>
          <Link 
            className={`${isActive('/about') ? 'text-[#1D3E53] dark:text-white font-bold border-b-2 border-[#1D3E53] dark:border-slate-200 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-[#1D3E53] transition-colors'}`}
            to="/about"
          >
            About
          </Link>
          <Link 
            className={`${isActive('/features') ? 'text-[#1D3E53] dark:text-white font-bold border-b-2 border-[#1D3E53] dark:border-slate-200 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-[#1D3E53] transition-colors'}`}
            to="/features"
          >
            Features
          </Link>
          <Link 
            className={`${isActive('/team') ? 'text-[#1D3E53] dark:text-white font-bold border-b-2 border-[#1D3E53] dark:border-slate-200 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-[#1D3E53] transition-colors'}`}
            to="/team"
          >
            Team
          </Link>
          <Link 
            className={`${isActive('/contact') ? 'text-[#1D3E53] dark:text-white font-bold border-b-2 border-[#1D3E53] dark:border-slate-200 pb-1' : 'text-slate-600 dark:text-slate-400 hover:text-[#1D3E53] transition-colors'}`}
            to="/contact"
          >
            Contact
          </Link>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <button className="hidden lg:block text-sm uppercase tracking-widest text-[#1D3E53] font-semibold hover:opacity-80 transition-opacity">Request Demo</button>
          <button className="hidden sm:block gradient-primary text-on-primary px-4 md:px-6 py-2 md:py-2.5 rounded-lg text-xs md:text-sm uppercase tracking-widest font-bold hover:shadow-lg transition-all duration-300">Partner with Us</button>
          
          {/* Mobile Menu Button */}
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2"
            aria-label="Toggle menu"
          >
            <div className={`h-0.5 w-6 bg-[#1D3E53] dark:bg-slate-100 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-[#1D3E53] dark:bg-slate-100 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></div>
            <div className={`h-0.5 w-6 bg-[#1D3E53] dark:bg-slate-100 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-[#faf9f9] dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
          <div className="px-4 py-4 space-y-3">
            <Link 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded transition-colors ${isActive('/') ? 'bg-[#1D3E53] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Home
            </Link>
            <Link 
              to="/about"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded transition-colors ${isActive('/about') ? 'bg-[#1D3E53] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              About
            </Link>
            <Link 
              to="/features"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded transition-colors ${isActive('/features') ? 'bg-[#1D3E53] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Features
            </Link>
            <Link 
              to="/team"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded transition-colors ${isActive('/team') ? 'bg-[#1D3E53] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Team
            </Link>
            <Link 
              to="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={`block px-3 py-2 rounded transition-colors ${isActive('/contact') ? 'bg-[#1D3E53] text-white font-bold' : 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-slate-800'}`}
            >
              Contact
            </Link>
            <hr className="border-slate-200 dark:border-slate-700 my-2" />
            <button className="block w-full text-left px-3 py-2 text-sm uppercase tracking-widest text-[#1D3E53] dark:text-slate-400 font-semibold hover:bg-slate-100 dark:hover:bg-slate-800 rounded transition-colors">
              Request Demo
            </button>
            <button className="w-full gradient-primary text-white px-3 py-2 rounded-lg text-sm uppercase tracking-widest font-bold hover:shadow-lg transition-all duration-300">
              Partner with Us
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;

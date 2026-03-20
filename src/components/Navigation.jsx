import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

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
      <div className="max-w-7xl mx-auto flex justify-between items-center w-full px-8 py-4">
        <div className="flex items-center gap-3">
          <img 
            alt="Aarovan.ai Logo" 
            className="h-8 w-auto" 
            data-alt="Official blue logo of Aarovan.ai" 
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBDhuwGXvu0XmlEKpdQQs7DhXiE_Fz-QeJlI4d4_sRpPMQkPuz8fht0sf2awcTg6ESuBmeFoPD8qSZOFlKelZpPvs5lHz8k3jpVOngI8tlDmknoKSXXCKEReCiZDrg9GWg9IvZOWFsosy-fqbkHk-pP732mdfeHk3cujzfSIibtkGfiUMBHf3XInjpLAGdJ5GgInv5CojpX9udQBM3j_T9Cmcvm353Ny7GZfoy-Yv9DVjyVDahshC_LUvGf9gditP30gWPTFbmrvlA"
          />
          <span className="text-2xl font-serif font-bold text-[#1D3E53] dark:text-slate-100">Aarovan.ai</span>
        </div>
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
        <div className="flex items-center gap-4">
          <button className="hidden lg:block text-sm uppercase tracking-widest text-[#1D3E53] font-semibold hover:opacity-80 transition-opacity">Request Demo</button>
          <button className="gradient-primary text-on-primary px-6 py-2.5 rounded-lg text-sm uppercase tracking-widest font-bold hover:shadow-lg transition-all duration-300">Partner with Us</button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;

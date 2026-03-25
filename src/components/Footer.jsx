import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-[#efeeed] dark:bg-slate-900 full-width py-12 px-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
        <div className="col-span-1 md:col-span-1">
          <div className="flex items-center gap-2 mb-6">
            <img 
              alt="Aarovan.ai Logo" 
              className="h-6 w-auto" 
              data-alt="Aarovan.ai small version logo" 
              src={logo}
            />
            <span className="text-xl font-serif font-bold text-[#1D3E53] dark:text-slate-100">Aarovan.ai</span>
          </div>
          <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed">
            Pioneering AI-powered interview preparation for the next generation of global engineers.
          </p>
        </div>
        <div>
          <h4 className="font-serif font-bold text-[#1D3E53] dark:text-slate-200 mb-6 uppercase tracking-widest text-xs">Solutions</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">For Colleges</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">For Students</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">Mock Interviews</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">Skills Assessment</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-[#1D3E53] dark:text-slate-200 mb-6 uppercase tracking-widest text-xs">Company</h4>
          <ul className="space-y-4">
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">About Us</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">Privacy Policy</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">Terms of Service</a></li>
            <li><a className="text-slate-500 dark:text-slate-400 hover:text-[#1D3E53] dark:hover:text-white transition-opacity text-sm" href="#">Contact Us</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-serif font-bold text-[#1D3E53] dark:text-slate-200 mb-6 uppercase tracking-widest text-xs">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary dark:text-white shadow-sm hover:scale-105 transition-transform" href="#">
              <span className="material-symbols-outlined text-sm" data-icon="link">link</span>
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary dark:text-white shadow-sm hover:scale-105 transition-transform" href="#">
              <span className="material-symbols-outlined text-sm" data-icon="terminal">terminal</span>
            </a>
            <a className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-primary dark:text-white shadow-sm hover:scale-105 transition-transform" href="#">
              <span className="material-symbols-outlined text-sm" data-icon="mail">mail</span>
            </a>
          </div>
          <div className="mt-8">
            <div className="text-[10px] uppercase tracking-widest text-slate-400 font-bold mb-2">Platform Status</div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-green-500"></div>
              <span className="text-xs text-slate-500">All systems operational</span>
            </div>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-8 mt-16 pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-500 dark:text-slate-400 text-sm">© 2024 Aarovan.ai. Engineering Excellence.</p>
        <div className="flex gap-8">
          <a className="text-slate-400 hover:text-primary transition-colors text-xs" href="#">LinkedIn</a>
          <a className="text-slate-400 hover:text-primary transition-colors text-xs" href="#">GitHub</a>
          <a className="text-slate-400 hover:text-primary transition-colors text-xs" href="#">Contact Us</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Contact = () => {
  const { ref: heroTitleRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: heroDescRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.2 });
  const { ref: formRef } = useScrollAnimation('animate-fade-in-left');
  const { ref: contactRef } = useScrollAnimation('animate-fade-in-right');
  const { ref: quoteRef } = useScrollAnimation('animate-scale-in');
  const { ref: ctaRef } = useScrollAnimation('animate-fade-in-up');

  return (
    <div className="bg-background text-on-background font-body">
      <Navigation />
      
      <main className="max-w-7xl mx-auto px-8 py-16">
        {/* Hero Section */}
        <header className="mb-24 flex flex-col items-start gap-4">
          <span className="font-label text-primary-container uppercase tracking-[0.2em] text-sm">Collaboration</span>
          <h1 ref={heroTitleRef} className="font-headline text-6xl md:text-7xl font-extrabold text-primary leading-tight max-w-3xl opacity-0">Partner with Us</h1>
          <p ref={heroDescRef} className="font-body text-xl text-on-surface-variant max-w-xl leading-relaxed mt-4 opacity-0" style={{ animationDelay: '0.2s' }}>
            Join our mission to democratize elite interview preparation. We collaborate with forward-thinking institutions to bridge the gap between academic learning and career success.
          </p>
        </header>

        {/* Main Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form Block */}
          <div ref={formRef} className="lg:col-span-7 bg-surface-container-low rounded-xl p-10 flex flex-col gap-8 opacity-0">
            <h2 className="font-headline text-3xl font-bold text-primary">Send an Inquiry</h2>
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Full Name</label>
                <input 
                  className="bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-fixed-dim outline-none font-body" 
                  placeholder="John Doe" 
                  type="text"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Institution Email</label>
                <input 
                  className="bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-fixed-dim outline-none font-body" 
                  placeholder="john@university.edu" 
                  type="email"
                />
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Partnership Type</label>
                <select className="bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-fixed-dim outline-none font-body">
                  <option>University Placement Cell</option>
                  <option>Technical Bootcamp</option>
                  <option>Corporate Training</option>
                  <option>Other</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 md:col-span-2">
                <label className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Message</label>
                <textarea 
                  className="bg-surface-container-lowest border-none rounded-lg p-4 focus:ring-1 focus:ring-primary-fixed-dim outline-none font-body" 
                  placeholder="Tell us about your institution..." 
                  rows="5"
                ></textarea>
              </div>
              <div className="md:col-span-2">
                <button 
                  type="submit"
                  className="primary-gradient text-white px-10 py-4 rounded-lg font-label text-sm uppercase tracking-widest w-full md:w-auto shadow-xl hover:shadow-2xl transition-all"
                >
                  Submit Inquiry
                </button>
              </div>
            </form>
          </div>

          {/* Details & Glass Panel Column */}
          <div className="lg:col-span-5 flex flex-col gap-10">
            {/* Direct Contact */}
            <div ref={contactRef} className="bg-surface-container p-8 rounded-xl flex flex-col gap-6 opacity-0" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-headline text-2xl font-bold text-primary">Direct Contact</h3>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">mail</span>
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Email</p>
                    <p className="font-body text-lg font-semibold text-primary">aarovan.ai@gmail.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary-container flex items-center justify-center text-primary">
                    <span className="material-symbols-outlined">location_on</span>
                  </div>
                  <div>
                    <p className="font-label text-xs uppercase tracking-wider text-on-surface-variant">Headquarters</p>
                    <p className="font-body text-lg font-semibold text-primary">Innovation Hub, Bengaluru, IN</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Academic Excellence Quote */}
            <div ref={quoteRef} className="glass-panel p-10 rounded-xl relative overflow-hidden group opacity-0" style={{ animationDelay: '0.4s' }}>
              <span className="material-symbols-outlined text-8xl absolute -right-4 -bottom-4 text-primary/5 group-hover:scale-110 transition-transform duration-700">school</span>
              <p className="font-headline text-2xl italic text-primary leading-relaxed relative z-10">
                "The Digital Scholar represents the union of AI precision and pedagogical excellence."
              </p>
              <p className="font-body text-sm mt-6 text-on-surface-variant uppercase tracking-widest font-semibold">— Engineering Excellence Division</p>
            </div>
          </div>
        </div>

        {/* Progress Thread */}
        <div className="mt-32 w-full flex flex-col items-center gap-6">
          <div className="w-full h-[2px] bg-secondary-fixed-dim relative">
            <div className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-primary rounded-full shadow-[0_0_15px_rgba(1,40,60,0.5)]"></div>
          </div>
          <p className="font-label text-[10px] uppercase tracking-[0.4em] text-on-surface-variant">AI-Driven Professional Growth</p>
        </div>

        {/* CTA Section */}
        <section ref={ctaRef} className="mt-32 mb-16 bg-primary-container rounded-xl overflow-hidden relative opacity-0">
          <div className="absolute inset-0 opacity-10" style={{backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWuvgpgkSazT2Hdw34Wo0S_TPlSq4qcKEcT9Z4IaaAdSVpGsrIel-pGMKP7S1ULPXsAdwzqn-5JJTcEP2bBJ3ICJo1b2zSTUIC60DUQSoMiI_ONQjexNq5vmjNWkj5B0gkNe5nrSoFSgs1vwd8mWVU-Um3X_juutBoAAIIIuRAdKwUPvy0FebPuLUOupgctZrzgpSDS8FDXUbASEduWaW3htZnhoYuRgRKUsh9bN4IpQzPYj-eE6TnZam3S2logw4bnFfYOUTUWcQ')"}}></div>
          <div className="p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
            <div className="max-w-2xl text-center md:text-left">
              <h2 className="font-headline text-4xl md:text-5xl font-bold text-white leading-tight">Transform Placement Preparation at Your Institution</h2>
              <p className="text-on-primary-container mt-6 text-lg font-body">Equip your students with the elite tools they need to succeed in top-tier technical interviews.</p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-white text-primary px-10 py-4 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-surface-bright transition-colors">Request Demo</button>
              <button className="border border-white/20 text-white px-10 py-4 rounded-lg font-label text-sm uppercase tracking-widest hover:bg-white/10 transition-colors">Partner with Us</button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;

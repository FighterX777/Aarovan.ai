import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const About = () => {
  const { ref: heroTitleRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: heroDescRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.2 });
  const { ref: missionRef } = useScrollAnimation('animate-fade-in-left');
  const { ref: philosophyRef } = useScrollAnimation('animate-scale-in');
  const { ref: excellenceRef } = useScrollAnimation('animate-scale-in');
  const { ref: journeyRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: step1Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: step2Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: step3Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: teamImageRef } = useScrollAnimation('animate-scale-in');
  const { ref: teamTextRef } = useScrollAnimation('animate-fade-in-right');
  const { ref: ctaRef } = useScrollAnimation('animate-fade-in-up');

  return (
    <div className="bg-background text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section className="relative py-24 md:py-32 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto flex flex-col items-start gap-8 relative z-10">
            <span className="font-label uppercase tracking-[0.2em] text-secondary font-semibold text-xs mb-[-1.5rem]">The Engineering Vanguard</span>
            <h1 ref={heroTitleRef} className="font-headline text-5xl md:text-7xl font-extrabold text-primary max-w-4xl leading-tight opacity-0">
              About Aarovan.ai
            </h1>
            <p ref={heroDescRef} className="font-body text-xl text-on-surface-variant max-w-2xl leading-relaxed opacity-0" style={{ animationDelay: '0.2s' }}>
              Elevating the trajectory of engineering talent through AI-driven pedagogical precision and real-world simulation.
            </p>
          </div>
          <div className="absolute top-0 right-0 w-1/2 h-full bg-surface-container-low -z-0 translate-x-1/4 rounded-bl-[10rem]"></div>
        </section>

        {/* Mission Statement Section */}
        <section className="bg-surface-container py-24 px-8">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <div ref={missionRef} className="bg-surface-container-lowest editorial-shadow p-12 rounded-xl relative overflow-hidden ghost-border opacity-0">
                <span className="material-symbols-outlined text-primary text-5xl mb-6" data-icon="school">school</span>
                <h2 className="font-headline text-3xl font-bold text-primary mb-6">Bridging the Capability Gap</h2>
                <div className="space-y-6 text-on-surface-variant leading-relaxed text-lg">
                  <p>
                    Engineering education often ends where the professional world begins. At Aarovan.ai, we identify the specific friction points between academic learning and real-world employability.
                  </p>
                  <p>
                    Our platform isn't just a tool; it's a digital mentor. By leveraging sophisticated LLMs and proprietary interview data, we create an environment where students can fail safely, learn rapidly, and excel confidently.
                  </p>
                  <p className="font-headline italic text-primary-container text-2xl border-l-4 border-primary pl-6 py-2">
                    "Our mission is to ensure no brilliant mind is held back by a lack of access to elite interview coaching."
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-8">
              <div ref={philosophyRef} className="bg-surface-container-high p-8 rounded-lg ghost-border opacity-0" style={{ animationDelay: '0.2s' }}>
                <h3 className="font-label uppercase tracking-widest text-primary font-bold text-sm mb-4">Core Philosophy</h3>
                <p className="text-on-surface-variant leading-relaxed">We believe technical brilliance deserves a professional stage. Our platform focuses on behavioral nuances, structural communication, and deep technical articulation.</p>
              </div>
              <div ref={excellenceRef} className="bg-surface-container-high p-8 rounded-lg ghost-border opacity-0" style={{ animationDelay: '0.4s' }}>
                <h3 className="font-label uppercase tracking-widest text-primary font-bold text-sm mb-4">Engineering Excellence</h3>
                <p className="text-on-surface-variant leading-relaxed">Built by engineers, for engineers. Every algorithm in our feedback loop is calibrated against the hiring standards of top-tier technology firms.</p>
              </div>
            </div>
          </div>
        </section>

        {/* The Career Journey */}
        <section className="py-24 px-8 bg-surface">
          <div className="max-w-7xl mx-auto">
            <div ref={journeyRef} className="mb-16 opacity-0">
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">The Career Journey</h2>
              <p className="text-on-surface-variant max-w-xl">How we transform academic foundations into career-ready expertise.</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">
              <div className="hidden md:block absolute top-10 left-0 w-full h-[2px] bg-secondary-fixed-dim z-0 opacity-30"></div>
              
              {/* Step 1 */}
              <div ref={step1Ref} className="relative z-10 space-y-6 opacity-0" style={{ animationDelay: '0.1s' }}>
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center editorial-shadow ghost-border group">
                  <div className="w-4 h-4 rounded-full bg-primary-container group-hover:scale-150 transition-transform duration-500"></div>
                  <div className="absolute w-20 h-20 rounded-full border-2 border-primary-fixed-dim opacity-20 animate-ping"></div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">Contextual Diagnosis</h3>
                <p className="text-on-surface-variant">We assess your current standing against industry benchmarks, identifying high-impact areas for immediate growth.</p>
              </div>

              {/* Step 2 */}
              <div ref={step2Ref} className="relative z-10 space-y-6 opacity-0" style={{ animationDelay: '0.2s' }}>
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center editorial-shadow ghost-border">
                  <div className="w-4 h-4 rounded-full bg-primary-container"></div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">Iterative Simulation</h3>
                <p className="text-on-surface-variant">Engage in high-fidelity mock interviews that adapt to your performance in real-time using our proprietary AI engine.</p>
              </div>

              {/* Step 3 */}
              <div ref={step3Ref} className="relative z-10 space-y-6 opacity-0" style={{ animationDelay: '0.3s' }}>
                <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center editorial-shadow ghost-border">
                  <div className="w-4 h-4 rounded-full bg-primary-container"></div>
                </div>
                <h3 className="font-headline text-2xl font-bold text-primary">Expert Articulation</h3>
                <p className="text-on-surface-variant">Master the art of the technical narrative. Go beyond the code to explain the 'why' and 'how' like a seasoned lead engineer.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Team Teaser Section */}
        <section className="bg-surface-container-low py-24 px-8 overflow-hidden">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <div ref={teamImageRef} className="bg-surface-container-highest w-full aspect-square rounded-xl overflow-hidden editorial-shadow -rotate-2 relative opacity-0">
                <img 
                  alt="Team collaborating" 
                  className="w-full h-full object-cover mix-blend-multiply opacity-80" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvneHkPE7r1obGOagco7FxC6e3psBP326S7wiLuJMnen2T42M8VZNFglnP95axSWtrAzs5zwSrMoVib6ffQ4VA0ez0wgoENvnngJmo13YThdaohs2vzbd5yYkOOusi5p0oTNwz85pkUsVck9_HtqPF9ej5OBRAhYgJPqXvzJE6RIunEaQNJ0Q21cvUl0PgGWaC_vCUzgmmi0dRc0QNhTTr1FF8bX7vTAsdWFypeMxlFzBgqT2Ifua72znqH1awrd_u14s8OsUO5V4"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent"></div>
              </div>
              <div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-lg editorial-shadow max-w-xs ghost-border rotate-3 hidden md:block">
                <p className="font-headline italic text-primary font-bold">"Engineering is not just a job; it's the craft of building the future."</p>
              </div>
            </div>
            <div ref={teamTextRef} className="space-y-8 opacity-0" style={{ animationDelay: '0.2s' }}>
              <h2 className="font-headline text-4xl font-bold text-primary">Our Pedigree</h2>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                Aarovan.ai was born out of a collective of educators, AI researchers, and former hiring managers from Silicon Valley and Bangalore's top tech hubs. We've seen thousands of candidates fail not for lack of skill, but for lack of preparation.
              </p>
              <p className="text-on-surface-variant text-lg leading-relaxed">
                We are committed to democratizing technical interview coaching, making the secrets of the world's most elite engineering teams accessible to students everywhere.
              </p>
              <div className="pt-4">
                <button className="text-primary font-label uppercase tracking-widest font-bold border-b-2 border-primary-fixed-dim hover:border-primary transition-all pb-1">Meet the Minds behind Aarovan</button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-24 px-8 relative">
          <div ref={ctaRef} className="max-w-5xl mx-auto glass-panel p-12 md:p-20 rounded-[2rem] editorial-shadow text-center relative z-10 ghost-border opacity-0">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8">Ready to transition from student to scholar?</h2>
            <div className="flex flex-col md:flex-row justify-center gap-6">
              <button className="primary-gradient text-white px-10 py-4 rounded-lg font-label label-md uppercase tracking-[0.1em] font-bold editorial-shadow active:scale-95 transition-transform">Get Started Today</button>
              <button className="bg-transparent border border-outline/20 text-on-surface px-10 py-4 rounded-lg font-label label-md uppercase tracking-[0.1em] font-bold hover:bg-surface-container transition-colors">Contact Our Team</button>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center -z-0">
            <div className="w-96 h-96 bg-primary-fixed-dim/10 rounded-full blur-3xl"></div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;

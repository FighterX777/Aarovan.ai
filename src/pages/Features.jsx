import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Features = () => {
  const { ref: heroTitleRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: heroDescRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.2 });
  const { ref: feature1Ref } = useScrollAnimation('animate-fade-in-left');
  const { ref: feature2Ref } = useScrollAnimation('animate-scale-in');
  const { ref: feature3Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: feature4Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: feature5Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: edgeTextRef } = useScrollAnimation('animate-fade-in-left');
  const { ref: edgeVisualRef } = useScrollAnimation('animate-fade-in-right');

  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation />
      
      <main className="relative overflow-hidden">
        {/* Hero Section */}
        <section className="pt-24 pb-16 px-8 max-w-7xl mx-auto">
          <div className="max-w-3xl">
            <h1 ref={heroTitleRef} className="font-headline text-6xl md:text-7xl text-primary font-bold leading-tight mb-6 opacity-0">
              Platform Features
            </h1>
            <p ref={heroDescRef} className="font-body text-xl text-on-surface-variant leading-relaxed mb-12 opacity-0" style={{ animationDelay: '0.2s' }}>
              Bridging the gap between academic theory and industrial excellence through advanced AI-driven interview simulations and workforce preparation tools.
            </p>
          </div>
        </section>

        {/* Feature Bento Grid */}
        <section className="px-8 pb-32 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
            {/* Main Feature: AI Simulations */}
            <div ref={feature1Ref} className="md:col-span-8 bg-surface-container-low rounded-xl p-10 flex flex-col justify-between min-h-[400px] opacity-0">
              <div>
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-fixed">
                  <span className="material-symbols-outlined text-on-primary-fixed" data-icon="psychology">psychology</span>
                </div>
                <h3 className="font-headline text-3xl text-primary mb-4">AI-powered simulations</h3>
                <p className="font-body text-lg text-on-surface-variant max-w-xl">
                  Our proprietary LLM engines simulate hyper-realistic technical and behavioral interviews tailored to specific engineering domains. Experience pressure-tested scenarios that evolve based on student performance.
                </p>
              </div>
              <div className="mt-8 relative h-48 rounded-lg overflow-hidden bg-surface-container">
                <img 
                  className="w-full h-full object-cover mix-blend-multiply opacity-40" 
                  data-alt="Abstract visualization of neural networks and AI patterns" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCsSKCCAig4Pr4-kxJcuDNrPVsri6ktAvybyFustjlQwCDhxERWlDvDSRFPDuTYZpRpQ_T6efCNKfBQs_s8d3c97E6hxR2DR5Um1OwoCMftJFthZak0q0fdqp79t8vT8hYSpZl_0QKNwv-pe_QVtyBcwWspZqAAUggNrSAPCTuMkHCwF_KoOUsmBl0fsftAW9_iqmNFTLrZZpNpz3m86VD5-L2tP7WtvNcEJLYBMpE8CqSEU3-G2zzDxNVIAJapGNeCP-tmrDLZdgw"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="glass-panel p-6 rounded-lg text-primary font-bold flex items-center gap-3">
                    <span className="material-symbols-outlined" data-icon="terminal">terminal</span>
                    <span className="font-label tracking-widest uppercase text-xs">Simulating: Senior Systems Engineer</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Feature: Instant Feedback */}
            <div ref={feature2Ref} className="md:col-span-4 bg-primary-container text-on-primary-container rounded-xl p-10 flex flex-col justify-between opacity-0" style={{ animationDelay: '0.2s' }}>
              <div>
                <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-fixed-dim">
                  <span className="material-symbols-outlined text-primary" data-icon="bolt">bolt</span>
                </div>
                <h3 className="font-headline text-3xl mb-4">Instant feedback</h3>
                <p className="font-body opacity-90">
                  Eliminate the waiting period. Receive comprehensive, line-by-line analysis of code quality, architectural decisions, and soft-skill articulation within seconds of completion.
                </p>
              </div>
              <div className="mt-8 border-t border-white/10 pt-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-label uppercase tracking-tighter">AI Evaluation Status</span>
                  <span className="text-sm font-bold">100%</span>
                </div>
                <div className="w-full bg-white/10 h-1 rounded-full overflow-hidden">
                  <div className="bg-primary-fixed-dim h-full w-full shadow-[0_0_8px_rgba(170,203,228,0.5)]"></div>
                </div>
              </div>
            </div>

            {/* Feature: Student Tracking */}
            <div ref={feature3Ref} className="md:col-span-4 bg-surface-container-high rounded-xl p-10 flex flex-col opacity-0" style={{ animationDelay: '0.1s' }}>
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-tertiary-fixed">
                <span className="material-symbols-outlined text-on-tertiary-fixed" data-icon="monitoring">monitoring</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Student tracking</h3>
              <p className="font-body text-on-surface-variant mb-8">
                Visual dashboards for faculty and career offices to monitor cohort progress, identify skill gaps, and predict placement readiness using longitudinal data.
              </p>
              <div className="mt-auto space-y-3">
                <div className="h-4 w-3/4 bg-white/50 rounded animate-pulse"></div>
                <div className="h-4 w-full bg-white/50 rounded animate-pulse"></div>
                <div className="h-4 w-5/6 bg-white/50 rounded animate-pulse"></div>
              </div>
            </div>

            {/* Feature: Placement Preparation */}
            <div ref={feature4Ref} className="md:col-span-4 bg-white rounded-xl p-10 flex flex-col shadow-sm border border-outline-variant/10 opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary-fixed">
                <span className="material-symbols-outlined text-on-secondary-fixed" data-icon="work_history">work_history</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Placement preparation</h3>
              <p className="font-body text-on-surface-variant">
                Structured workflows modeled after top-tier tech recruitment cycles. From initial screening rounds to final architectural design challenges.
              </p>
            </div>

            {/* Feature: Scalable Deployment */}
            <div ref={feature5Ref} className="md:col-span-4 bg-surface-container-low rounded-xl p-10 flex flex-col opacity-0" style={{ animationDelay: '0.3s' }}>
              <div className="mb-6 inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary-fixed">
                <span className="material-symbols-outlined text-on-primary-fixed" data-icon="cloud_done">cloud_done</span>
              </div>
              <h3 className="font-headline text-2xl text-primary mb-4">Scalable deployment</h3>
              <p className="font-body text-on-surface-variant">
                Cloud-native infrastructure designed to support thousands of concurrent simulations without latency, perfect for university-wide "placement weeks."
              </p>
            </div>
          </div>
        </section>

        {/* Engineering Edge Section */}
        <section className="py-24 bg-surface-container relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div ref={edgeTextRef} className="opacity-0">
              <h2 className="font-headline text-4xl text-primary mb-8">The Engineering Edge</h2>
              <p className="font-body text-lg text-on-surface-variant mb-8 leading-relaxed">
                Our platform doesn't just record sessions; it parses technical nuance. Whether it's the time complexity of a student's solution or the confidence in their system design explanation, Aarovan provides the depth required for elite-tier placements.
              </p>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span className="font-label tracking-wide uppercase text-sm">Domain-Specific Interview Brackets</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span className="font-label tracking-wide uppercase text-sm">Automated Resume Matching</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary" data-icon="check_circle" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                  <span className="font-label tracking-wide uppercase text-sm">Peer Benchmarking Data</span>
                </div>
              </div>
            </div>
            <div ref={edgeVisualRef} className="relative opacity-0" style={{ animationDelay: '0.2s' }}>
              <div className="glass-panel p-8 rounded-xl relative z-10 border border-white/20">
                <div className="mb-4 flex items-center justify-between">
                  <span className="font-label text-xs uppercase tracking-widest text-primary">Active AI Analysis</span>
                  <span className="flex h-2 w-2 rounded-full bg-error animate-pulse"></span>
                </div>
                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2 text-sm font-body">
                      <span>Algorithmic Efficiency</span>
                      <span>Superior</span>
                    </div>
                    <div className="w-full bg-surface h-0.5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary w-4/5"></div>
                      <div className="absolute top-0 left-[80%] h-full w-4 bg-white/80 blur-sm"></div>
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-2 text-sm font-body">
                      <span>Technical Articulation</span>
                      <span>Strong</span>
                    </div>
                    <div className="w-full bg-surface h-0.5 relative overflow-hidden">
                      <div className="absolute inset-0 bg-primary w-2/3"></div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -top-10 -right-10 w-48 h-48 bg-primary-fixed rounded-full blur-3xl opacity-30"></div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Features;

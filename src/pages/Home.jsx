import { useRef, useEffect, useState } from 'react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useCountUp } from '../hooks/useCountUp';
import { INTERSECTION_OPTIONS } from '../utils/animationConfig';

const Home = () => {
  // Hero section animations
  const { ref: titleRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: descriptionRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.2 });
  const { ref: buttonsRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.3 });
  const { ref: heroImageRef } = useScrollAnimation('animate-scale-in', { threshold: 0.2 });

  // Stats section animations
  const { ref: stat1Ref, displayValue: stat1 } = useCountUp(98, 2000, INTERSECTION_OPTIONS);
  const { ref: stat2Ref, displayValue: stat2 } = useCountUp(15000, 2500, INTERSECTION_OPTIONS);
  const { ref: stat3Ref, displayValue: stat3 } = useCountUp(45, 2000, INTERSECTION_OPTIONS);
  const { ref: stat4Ref, displayValue: stat4 } = useCountUp(3.5, 2000, INTERSECTION_OPTIONS);

  // How It Works section animations
  const { ref: howitWorksRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: step1Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: step2Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: step3Ref } = useScrollAnimation('animate-slide-in-bottom');
  const { ref: step4Ref } = useScrollAnimation('animate-slide-in-bottom');
  // Bento Grid section animations
  const { ref: bento1Ref } = useScrollAnimation('animate-fade-in-left');
  const { ref: bento2Ref } = useScrollAnimation('animate-scale-in');
  const { ref: bento3Ref } = useScrollAnimation('animate-scale-in');
  const { ref: bento4Ref } = useScrollAnimation('animate-slide-in-bottom');

  // CTA section animations
  const { ref: ctaTitleRef } = useScrollAnimation('animate-fade-in-up');
  const { ref: ctaDescRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.3 });
  const { ref: ctaBtnRef } = useScrollAnimation('animate-fade-in-up', { threshold: 0.4 });

  return (
    <div className="bg-surface font-body text-on-surface">
      <Navigation />
      
      {/* Hero Section */}
      <header className="relative pt-32 md:pt-40 pb-20 overflow-hidden mt-16">
        <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <h1 
              ref={titleRef}
              className="font-headline text-5xl md:text-7xl font-bold text-primary leading-tight mb-6 opacity-0 animate-subtle-glow"
            >
              Improve Student Placement Outcomes with AI
            </h1>
            <p 
              ref={descriptionRef}
              className="font-body text-xl text-secondary max-w-2xl mb-10 leading-relaxed opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              Aarovan.ai helps colleges make students interview-ready through AI-powered mock interviews and structured feedback.
            </p>
            <div 
              ref={buttonsRef}
              className="flex flex-col sm:flex-row gap-4 opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <button className="gradient-primary text-on-primary px-8 py-4 rounded-lg font-label uppercase tracking-widest font-bold shadow-xl hover-glow transition-all">
                Partner with Us
              </button>
              <button className="bg-surface-container-highest text-primary px-8 py-4 rounded-lg font-label uppercase tracking-widest font-bold ghost-border hover:bg-surface-variant transition-colors">
                Request Demo
              </button>
            </div>
          </div>
          <div className="lg:col-span-5 relative">
            <div 
              ref={heroImageRef}
              className="relative z-10 rounded-xl overflow-hidden shadow-2xl rotate-3 transform transition-transform hover:rotate-0 duration-500 opacity-0"
            >
              <img 
                alt="Student Interviewing" 
                className="w-full h-auto animate-float animate-fade-in-up" 
                data-alt="Student practicing interview with AI interface" 
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAwii7oljSNOHffuxYFynOK7THIl2_0TfI76zsXE0mLAgYGT6wmdf4wg2ve5YcWoLmq--TkyoJtPsKz9yozPkn0XSV6h6OV46czHz0fMJFp_uBrfWRIFQCLXmsSgt5jc4hHIyRQhHdmSCc1R0nyMq99jdnAdgtS65JxYuYrUw_j4DaL3V3PWCSQ5KttyfZlPoPZIt5mUJSyT2A1Q8srJ-QSvPZar7thmLbr9LR5Wcy2aNxjzMnqeMfLqlyrIPCnNe1lWllxuWPMuoQ"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/20 transition-colors"></div>
            </div>
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container/30 rounded-full blur-3xl -z-0 morphing"></div>
          </div>
        </div>
      </header>

      {/* Stats Section */}
      <section className="bg-surface-container-low py-12 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30 gradient-mesh-primary"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div ref={stat1Ref} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">{stat1}%</div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary">Student Confidence</div>
            </div>
            <div ref={stat2Ref} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">{stat2 >= 1000 ? `${(stat2 / 1000).toFixed(1)}k` : stat2}+</div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary">Interviews Held</div>
            </div>
            <div ref={stat3Ref} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">{stat3}+</div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary">Partner Colleges</div>
            </div>
            <div ref={stat4Ref} className="text-center">
              <div className="text-3xl md:text-5xl font-bold text-primary mb-1">{stat4.toFixed(1)}x</div>
              <div className="text-sm font-label uppercase tracking-widest text-secondary">Placement Growth</div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-8">
          <div 
            ref={howitWorksRef}
            className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 opacity-0"
          >
            <div className="max-w-2xl">
              <h2 className="font-headline text-4xl font-bold text-primary mb-4">Engineering Career Readiness</h2>
              <p className="text-secondary text-lg font-body">Our structured approach ensures students bridge the gap between academic knowledge and corporate expectations.</p>
            </div>
            <div className="hidden md:block">
              <span className="text-primary font-serif italic text-xl">The Digital Scholar Method</span>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Step 1 */}
            <div 
              ref={step1Ref}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:hover-lift transition-all flex flex-col h-full border-t-4 border-primary opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="record_voice_over">record_voice_over</span>
                <span className="text-4xl font-headline font-bold text-surface-container-highest">01</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-4">Students take AI mock interviews</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">A seamless, realistic environment where students face technical and behavioral queries tailored to their roles.</p>
            </div>
            {/* Step 2 */}
            <div 
              ref={step2Ref}
              className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:hover-lift transition-all flex flex-col h-full opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="psychology">psychology</span>
                <span className="text-4xl font-headline font-bold text-surface-container-highest">02</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-4">System evaluates responses</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">Our proprietary AI analyzes content accuracy, communication clarity, and technical depth in real-time.</p>
            </div>
            {/* Step 3 */}
            <div 
              ref={step3Ref}
              className="bg-surface-container-lowest p-8 rounded-xl shadow-sm hover:hover-lift transition-all flex flex-col h-full border-t-4 border-primary opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="analytics">analytics</span>
                <span className="text-4xl font-headline font-bold text-surface-container-highest">03</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-4">Instant feedback is generated</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">Detailed, actionable reports providing students with specific points for improvement and learning resources.</p>
            </div>
            {/* Step 4 */}
            <div 
              ref={step4Ref}
              className="bg-surface-container-low p-8 rounded-xl shadow-sm hover:hover-lift transition-all flex flex-col h-full opacity-0"
              style={{ animationDelay: '0.4s' }}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="material-symbols-outlined text-4xl text-primary" data-icon="dashboard">dashboard</span>
                <span className="text-4xl font-headline font-bold text-surface-container-highest">04</span>
              </div>
              <h3 className="font-headline text-xl font-bold text-primary mb-4">Colleges track progress and readiness</h3>
              <p className="text-on-surface-variant text-sm leading-relaxed mt-auto">Admin dashboards offer granular insights into batch performance and student placement probability.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bento Grid Section: AI Intelligence */}
      <section className="py-24 bg-surface-container relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 gradient-mesh-secondary"></div>
        <div className="max-w-7xl mx-auto px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
            <div 
              ref={bento1Ref}
              className="md:col-span-8 bg-surface-container-lowest rounded-2xl p-10 flex flex-col justify-end relative overflow-hidden ghost-border opacity-0"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-10">
                <span className="material-symbols-outlined text-[300px]" data-icon="model_training">model_training</span>
              </div>
              <div className="relative z-10">
                <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold font-label uppercase tracking-widest mb-4 inline-block">Advanced AI</span>
                <h2 className="font-headline text-4xl font-bold text-primary mb-6">Unrivaled Interview Analytics</h2>
                <p className="text-secondary text-lg max-w-xl mb-8">Go beyond simple yes/no. Our AI captures nuances in tone, technical logic, and problem-solving patterns that human interviewers might miss.</p>
                <button className="text-primary font-bold border-b-2 border-primary pb-1 flex items-center gap-2 w-fit hover:glow transition-all">Explore Technology <span className="material-symbols-outlined text-sm" data-icon="arrow_forward">arrow_forward</span></button>
              </div>
            </div>
            <div 
              ref={bento2Ref}
              className="md:col-span-4 bg-primary rounded-2xl p-10 flex flex-col text-white relative overflow-hidden opacity-0"
              style={{ animationDelay: '0.1s' }}
            >
              <div className="mb-auto">
                <span className="material-symbols-outlined text-5xl opacity-50" data-icon="verified_user">verified_user</span>
              </div>
              <h3 className="font-headline text-2xl font-bold mb-4">Academic Integrity</h3>
              <p className="opacity-80 text-sm leading-relaxed mb-6">Designed with engineering deans to ensure pedagogical alignment and rigorous evaluation standards.</p>
              <div className="mt-4 flex -space-x-3">
                <div className="w-10 h-10 rounded-full bg-slate-300 border-2 border-primary" data-alt="University Logo 1"></div>
                <div className="w-10 h-10 rounded-full bg-slate-400 border-2 border-primary" data-alt="University Logo 2"></div>
                <div className="w-10 h-10 rounded-full bg-slate-500 border-2 border-primary" data-alt="University Logo 3"></div>
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white text-primary text-[10px] font-bold border-2 border-primary">+12</div>
              </div>
            </div>
            <div 
              ref={bento3Ref}
              className="md:col-span-4 bg-surface-container-highest rounded-2xl p-8 flex flex-col items-center justify-center text-center ghost-border opacity-0"
              style={{ animationDelay: '0.2s' }}
            >
              <h4 className="font-headline text-xl font-bold text-primary mb-2">24/7 Access</h4>
              <p className="text-secondary text-sm">Empower students to practice anytime, anywhere.</p>
            </div>
            <div 
              ref={bento4Ref}
              className="md:col-span-8 glass-card rounded-2xl p-8 flex items-center justify-between ghost-border opacity-0"
              style={{ animationDelay: '0.3s' }}
            >
              <div className="flex items-center gap-6">
                <div className="bg-white p-4 rounded-xl shadow-sm">
                  <span className="material-symbols-outlined text-primary text-3xl" data-icon="rocket_launch">rocket_launch</span>
                </div>
                <div>
                  <h4 className="font-headline text-xl font-bold text-primary">Accelerated Placements</h4>
                  <p className="text-secondary text-sm">Reduce the time-to-hire by presenting interview-ready candidates.</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-primary/30 text-5xl" data-icon="trending_up">trending_up</span>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-24 bg-surface text-center px-8 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20 gradient-blob" style={{ width: '400px', height: '400px', top: '10%', left: '5%' }}></div>
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 
            ref={ctaTitleRef}
            className="font-headline text-4xl md:text-5xl font-bold text-primary mb-8 opacity-0"
          >
            Ready to Elevate Your Institution?
          </h2>
          <p 
            ref={ctaDescRef}
            className="text-secondary text-xl mb-12 opacity-0"
            style={{ animationDelay: '0.2s' }}
          >
            Join the ranks of leading engineering colleges prioritizing student success through AI-led training.
          </p>
          <div 
            ref={ctaBtnRef}
            className="flex flex-wrap justify-center gap-6 opacity-0"
            style={{ animationDelay: '0.4s' }}
          >
            <button className="gradient-primary text-white px-10 py-4 rounded-lg font-label uppercase tracking-widest font-bold shadow-lg hover-glow transition-all">
              Partner with Us Today
            </button>
            <button className="bg-transparent border-2 border-primary text-primary px-10 py-4 rounded-lg font-label uppercase tracking-widest font-bold hover:bg-primary/5 transition-colors">
              Talk to an Expert
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;

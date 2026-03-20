import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

const Team = () => {
  return (
    <div className="bg-surface text-on-surface font-body selection:bg-primary-fixed selection:text-on-primary-fixed">
      <Navigation />
      
      <main className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-surface py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="max-w-3xl">
              <h1 className="font-headline text-[3.5rem] leading-[1.1] text-primary mb-8 font-extrabold tracking-tight">Meet the Team</h1>
              <p className="font-body text-xl text-on-surface-variant leading-relaxed">Built by a team combining expertise in AI, product, and education. We are dedicated to redefining how engineering excellence is nurtured and measured.</p>
            </div>
          </div>
        </section>

        {/* Team Grid Section */}
        <section className="bg-surface-container-low py-24 px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
              {/* Team Member 1: Siddharth Garg */}
              <div className="md:col-span-12 lg:col-span-8 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col md:flex-row">
                <div className="md:w-1/2 relative min-h-[400px]">
                  <img 
                    alt="Portrait of Siddharth Garg" 
                    className="absolute inset-0 w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCgKCvVXhO3KyWPlqZaF_GlIRxjPkDcGOWARg7NYYG23EMRE9ILvsiBpSai5pHhBOPfEc-UFIAonootgPfg2UhsRUKosN1PPjZeQ3JswItvMRWESlpOG4rRj8kfRslGb_64A3KoMztVqkC1qoV1qdnmMjs4xaaDorDsUVeJXi_xV0BuF11nPNvz-oBQveVa_QeJX8pFWHV19bikHUEtX4ltlGEx8kQNOOWAAZnYyB8BaArxFvnoo0t-FA9gyPP3p6n6hnL4wjp0LcI"
                  />
                  <div className="absolute bottom-6 left-6 glass-panel px-4 py-2 rounded-lg">
                    <span className="font-label text-xs uppercase tracking-widest text-primary font-bold">Founder & Vision</span>
                  </div>
                </div>
                <div className="md:w-1/2 p-10 flex flex-col justify-center">
                  <h2 className="font-headline text-4xl text-primary mb-2 font-bold">Siddharth Garg</h2>
                  <p className="font-body text-sm font-semibold text-secondary-fixed-variant mb-6 uppercase tracking-widest">Chief Executive Officer</p>
                  <div className="h-px w-12 bg-primary-fixed-dim mb-6 opacity-40"></div>
                  <p className="font-body text-on-surface-variant leading-relaxed mb-8">
                    With a deep background in scaling complex AI systems and architectural engineering, Siddharth leads the strategic direction of Aarovan.ai. His mission is to bridge the gap between academic theory and industrial application through intelligent simulation.
                  </p>
                  <div className="flex gap-4">
                    <span className="material-symbols-outlined text-primary-container" data-icon="share">share</span>
                    <span className="material-symbols-outlined text-primary-container" data-icon="work">work</span>
                  </div>
                </div>
              </div>

              {/* Asymmetric Highlight Box */}
              <div className="md:col-span-12 lg:col-span-4 bg-primary-container rounded-xl p-10 flex flex-col justify-end relative overflow-hidden">
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-primary opacity-20 rounded-full blur-3xl"></div>
                <span className="material-symbols-outlined text-secondary-fixed-dim text-5xl mb-6" data-icon="school">school</span>
                <h3 className="font-headline text-2xl text-white mb-4">The Digital Scholar Philosophy</h3>
                <p className="text-on-primary-container font-body leading-relaxed">
                  Our team is composed of multidisciplinary experts who believe that technical mastery requires both rigor and empathy.
                </p>
              </div>

              {/* Team Member 2: Rohan Garg */}
              <div className="md:col-span-6 lg:col-span-6 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col">
                <div className="h-80 relative">
                  <img 
                    alt="Portrait of Rohan Garg" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5jz06hs4IuRMXbaKuatF7jrkLX_mHL9tonq9THpF5r7ws1KoF1FBLuFHUNG-v3yJA0XQXLF5OdHHw7dVOuOD-I0G2YQZwO264ElXtqLcTztz9Q_TqpQt-inxXQlOAoTjXB4pszbYli4yEU-4xDMYkDDcwJc5583wYtadaxepVwKfdCgPwtJDLVvZ5Vn1isJDqDqeJDpLBD4IQxA4pKFbkVCZOKJGvZb6V3gB2G-UbM8eGd-YHCFWMgLE3gpHBhKnya8itoupc0dY"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-surface-container-highest/80 backdrop-blur-md p-3 rounded-full">
                      <span className="material-symbols-outlined text-primary" data-icon="code">code</span>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <h2 className="font-headline text-3xl text-primary mb-2 font-bold">Rohan Garg</h2>
                  <p className="font-body text-sm font-semibold text-on-surface-variant mb-6 uppercase tracking-widest">Head of Product AI</p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Rohan brings a clinical precision to product development. His focus is on the human-AI interaction layer, ensuring that our mock interview experiences provide high-fidelity feedback that actually transforms student outcomes.
                  </p>
                </div>
              </div>

              {/* Team Member 3: Avennya Goel */}
              <div className="md:col-span-6 lg:col-span-6 bg-surface-container-lowest rounded-xl overflow-hidden editorial-shadow flex flex-col">
                <div className="h-80 relative">
                  <img 
                    alt="Portrait of Avennya Goel" 
                    className="w-full h-full object-cover" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuATmWcMU6C7XCSzKLD2lckgD2xCZ-e5US1tY29C3nH5d0-YguWc016e-_S7VL397P0lrQ66Jnc6KvI-wKFwztpvcmjvtJaKlAJcb4nRBmU0CdZfDRQzA5zPUZtvKzagaxqJ2RfJ8PkiGtUz4TpdlXVxgka5L_7skNLRq2a3TdaH8zCVLiFcZN9_WA5SF39hRtn2ZwOEE6TNHPJRhZpLvmMjKxC2JbPHNojqpXnJ4QL4kN2SrLJOaLE-xWQCqtqz2rr8TmgNURTQfvw"
                  />
                  <div className="absolute top-6 right-6">
                    <div className="bg-tertiary-fixed-dim/80 backdrop-blur-md p-3 rounded-full">
                      <span className="material-symbols-outlined text-tertiary" data-icon="psychology">psychology</span>
                    </div>
                  </div>
                </div>
                <div className="p-10">
                  <h2 className="font-headline text-3xl text-primary mb-2 font-bold">Avennya Goel</h2>
                  <p className="font-body text-sm font-semibold text-on-surface-variant mb-6 uppercase tracking-widest">Director of Learning Science</p>
                  <p className="font-body text-on-surface-variant leading-relaxed">
                    Avennya oversees the pedagogical framework of Aarovan.ai. With a background in educational psychology and curriculum design, she ensures every technical challenge is mapped to professional core competencies.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Progress Thread */}
        <section className="bg-surface py-20 px-8 border-t border-outline-variant/10">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12">
            <div className="max-w-md">
              <h3 className="font-headline text-2xl text-primary mb-4">The Aarovan Standard</h3>
              <p className="font-body text-on-surface-variant">Our engineering team is currently developing 2px ultra-precision AI analysis tools for the next generation of interviews.</p>
            </div>
            <div className="flex-1 w-full max-w-xl">
              <div className="relative h-1 w-full bg-surface-container-highest rounded-full overflow-hidden">
                <div className="absolute top-0 left-0 h-full w-2/3 bg-secondary-fixed-dim shadow-[0_0_15px_rgba(171,203,225,0.8)]"></div>
              </div>
              <div className="flex justify-between mt-4">
                <span className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">Analysis Engine</span>
                <span className="font-label text-[10px] uppercase tracking-tighter text-on-surface-variant">68% Deployment</span>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Team;

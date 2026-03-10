import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, TrendingUp, Zap, Activity } from 'lucide-react';

interface NovraProps {
  onBack: () => void;
  onViewRiskArchitecture?: () => void;
  onContactClick?: () => void;
}

const Novra: React.FC<NovraProps> = ({ onBack, onViewRiskArchitecture, onContactClick }) => {
  const [isAtTop, setIsAtTop] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    let observer: IntersectionObserver | null = null;

    const setupObserver = () => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      }, observerOptions);

      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('reveal-visible');
        }
        observer?.observe(el);
      });
    };

    const timeoutId = setTimeout(setupObserver, 200);

    return () => {
      clearTimeout(timeoutId);
      if (observer) observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans pb-40">
      {/* Scroll Reveal Styles */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
      `}</style>

      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-8 flex justify-between items-center mix-blend-difference transition-all duration-700 ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
          Case Study / 03
        </div>
      </nav>

      <main className="pt-32 md:pt-48 pb-32">
        <div>
          {/* Header */}
          <header className="px-5 md:px-12 max-w-[1440px] mx-auto reveal flex flex-col items-center text-center">
            <div className="space-y-8 w-full">
              <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">Case Study 03</span>
              <h1 className="text-[clamp(48px,12vw,140px)] font-extrabold leading-[0.8] tracking-tighter uppercase">
                Novra
              </h1>
              <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight reveal delay-100">
                Reframing leverage risk through systemic mobile redesign.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-900 reveal delay-200">
                {['Mobile Product Design', 'Risk Systems', 'Behavioral Finance', 'Series B'].map(tag => (
                  <span key={tag} className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </header>

          {/* Transformative Quote */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-16 md:mt-24 reveal flex flex-col items-center text-center">
             <h2 className="text-xl md:text-3xl font-bold tracking-tight max-w-4xl italic leading-tight">
               "Reducing high-stakes user error in a volatile, leverage-driven trading environment."
             </h2>
          </section>

          {/* Hero Image */}
          <section className="mt-24 md:mt-48 reveal px-5 md:px-12 max-w-[1200px] mx-auto">
            <div className="w-full aspect-[16/9] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/16Vx_S3clow9_1B-raxogHsgbL-W86l00" 
                alt="Novra Mobile Portfolio" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Redesigning portfolio risk visibility for leveraged mobile traders.</p>
            </div>
          </section>

          {/* Business Snapshot & Role */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="space-y-12 reveal">
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Business Snapshot</h3>
                   <p className="text-2xl font-bold uppercase tracking-tighter">Company Context</p>
                </div>
                <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                  <p>Novra is a Series B crypto exchange with 900k monthly active users and 180k leveraged traders. Leverage adoption outpaced user risk literacy during rapid bull cycles.</p>
                  <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
                    <div>
                      <span className="block text-white font-bold text-3xl">900k</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Monthly Active Users</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">Series B</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Funding Stage</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">180k</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">LEVERAGED TRADERS</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-12 reveal delay-200">
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">My Role</h3>
                   <p className="text-2xl font-bold uppercase tracking-tighter">Lead Product Designer</p>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Focused on portfolio risk architecture, liquidation clarity, and scenario simulation. Aligning Risk Ops, Compliance, and Product teams.
                </p>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8 reveal">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Problem</h3>
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                 Users weren’t losing capital only due to market volatility. They were losing it due to unclear exposure. The interface emphasized PnL, not risk.
               </p>
               <ul className="space-y-4">
                  {['7.4% monthly liquidation rate', '31% margin-related support tickets', '9% risk simulation adoption', 'Panic exits during spikes'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
                      <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span> {item}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="reveal delay-200 flex flex-col items-center">
                 <div className="aspect-[3/4] w-full max-w-[400px] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1cLH3NcWk8MCRmPMN7AZSgWCofa1LQiht" 
                      alt="Legacy PnL-focused portfolio" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                    />
                 </div>
                 <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono italic">Legacy PnL-focused portfolio. Risk hidden behind position detail.</p>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">The Challenge</h3>
                <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-4xl leading-tight">
                  Restructuring how exposure is communicated inside mobile constraints.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
                <div className="space-y-4">
                  <span className="text-xs font-bold text-white uppercase">Product</span>
                  <p className="text-zinc-500 text-sm">Risk surfaced too late in the decision cycle.</p>
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-white uppercase">Business</span>
                  <p className="text-zinc-500 text-sm">Forced liquidations eroded long-term trust.</p>
                </div>
                <div className="space-y-4">
                  <span className="text-xs font-bold text-white uppercase">User</span>
                  <p className="text-zinc-500 text-sm">Leverage multipliers poorly understood under stress.</p>
                </div>
              </div>
            </div>
          </section>

          {/* Strategy */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 reveal">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Strategy</h3>
                <div className="h-[1px] flex-1 bg-zinc-900 mx-12 hidden md:block"></div>
                <h2 className="text-5xl md:text-8xl font-extrabold tracking-tighter uppercase leading-[0.85]">Core Pillars</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-12 reveal">
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">01 /</span>
                  <h4 className="text-xl font-bold uppercase">Risk-First Architecture</h4>
                  <p className="text-zinc-500 text-sm font-light">Shifted from asset list to exposure clarity system. Introduced liquidation proximity and stress simulation entry points.</p>
                </div>
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">02 /</span>
                  <h4 className="text-xl font-bold uppercase">Scenario Simulation</h4>
                  <p className="text-zinc-500 text-sm font-light">Forward-looking modeling for market drops and volatility spikes, displaying portfolio value shifts and liquidation probability.</p>
                </div>
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">03 /</span>
                  <h4 className="text-xl font-bold uppercase">Volatility Mode</h4>
                  <p className="text-zinc-500 text-sm font-light">Prioritizing risk metrics and non-essential module suppression during extreme market events.</p>
                </div>
              </div>

              {/* System Architecture */}
              <div className="reveal mt-24">
                 <div className="aspect-video bg-zinc-950 border border-zinc-900 flex items-center justify-center p-16 group">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full transition-opacity duration-1000">

                        {/* Portfolio Overview */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/10l4k3tYaYzrp72w_kuBSTYZyDfURdrOX" 
                            alt="Portfolio Overview" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Risk Modeling */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1SfRPNg6h-MYEUuHXq-R5Z6_3sHOGtPMM" 
                            alt="Risk Modeling" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Scenario Simulation */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1wxcPH3_SNJ1IoalQ55a0kP1F2GBi-o-F" 
                            alt="Scenario Simulation" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Volatility Adaptation */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1ibbTSr0p8xOxvbqyJGSZ6pRZOh76zWmQ" 
                            alt="Volatility Adaptation" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                    </div>
                    <div className="absolute flex flex-col items-center pointer-events-none">
                      <span className="text-[10px] uppercase tracking-[0.5em] text-white font-mono bg-black px-4 py-2">System Architecture Diagram</span>
                    </div>
                 </div>
                 <div className="mt-6">
                   <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Embedding forward-looking risk modeling inside mobile constraints.</p>
                 </div>
              </div>
            </div>
          </section>


          {/* Solution Images */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
              <div className="reveal">
                <div className="aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden group">
                  <img src="https://lh3.googleusercontent.com/d/1jb1nsA5YTVofVkze64UvySx1JLvMRtNq" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" referrerPolicy="no-referrer" />
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">New Portfolio View: Exposure clarity system and liquidation proximity bar.</p>
              </div>
              <div className="reveal delay-200">
                <div className="aspect-[3/4] bg-zinc-900 border border-zinc-800 overflow-hidden group">
                  <img src="https://lh3.googleusercontent.com/d/17sj1KWbAviJvs0npdQxfW3aMSnsTQkdj" className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000" referrerPolicy="no-referrer" />
                </div>
                <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Stress Simulation: Mobile scenario modeling interface.</p>
              </div>
            </div>
          </section>

          {/* View Risk Architecture Button */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-24 flex justify-center reveal">
            <button 
              onClick={onViewRiskArchitecture}
              className="px-10 py-4 border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500"
            >
              View Risk Architecture
            </button>
          </section>

          {/* Impact */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="space-y-24">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Impact</h3>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">Results.</h2>
                </div>
                <p className="max-w-md text-zinc-400 font-light leading-relaxed">
                  90-day window metrics showing behavioral shifts and improved revenue stability through risk-first design.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-zinc-900 pt-16">
                {[
                  { label: 'Simulation Adoption', value: '9% → 37%' },
                  { label: 'Liquidation Rate', value: '7.4% → 5.8%' },
                  { label: 'Forced Incidents', value: '-22%' },
                  { label: 'Support Tickets', value: '-28%' }
                ].map(stat => (
                  <div key={stat.label} className="space-y-2">
                    <span className="block text-4xl font-black tracking-tighter">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-12">
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Trust & Retention</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">30-day Retention</span>
                      <span className="text-white font-bold">46% → 52%</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">Diversification Index</span>
                      <span className="text-white font-bold">+18%</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">Volatility Engagement</span>
                      <span className="text-white font-bold">22% → 41%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Revenue Stability</h4>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    Reduced forced liquidations and panic-driven exits contributed to a <strong>6% increase in average lifetime value</strong> among leveraged traders over two quarters.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Key Learnings */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="bg-white text-black overflow-hidden border border-zinc-200">
               <div className="p-8 md:p-12 border-b border-zinc-200 bg-zinc-50/50">
                  <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Key Learnings & Takeaways</h3>
               </div>
               <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors duration-500 group">
                     <div className="space-y-6">
                        <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">RISK VISIBILITY FIRST</h4>
                        <p className="text-zinc-500 text-lg leading-relaxed font-light">Surfacing exposure before PnL changes behavior more than any feature addition.</p>
                     </div>
                  </div>
                  <div className="p-8 md:p-16 border-b border-zinc-200 md:border-b-0 hover:bg-zinc-50 transition-colors duration-500 group">
                     <div className="space-y-6">
                        <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">BEHAVIORAL DESIGN</h4>
                        <p className="text-zinc-500 text-lg leading-relaxed font-light">Reducing panic exits requires proactive information architecture, not reactive alerts.</p>
                     </div>
                  </div>
                  <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors duration-500 group">
                     <div className="space-y-6">
                        <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">TRUST THROUGH CLARITY</h4>
                        <p className="text-zinc-500 text-lg leading-relaxed font-light">Users who understand their risk stay longer and trade more responsibly.</p>
                     </div>
                  </div>
                  <div className="p-8 md:p-16 hover:bg-zinc-50 transition-colors duration-500 group">
                     <div className="space-y-6">
                        <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">SYSTEM COHERENCE</h4>
                        <p className="text-zinc-500 text-lg leading-relaxed font-light">Risk systems must span the entire product, not just a dedicated screen.</p>
                     </div>
                  </div>
               </div>
            </div>
          </section>

          {/* Project Conclusion CTA */}
          <section className="mt-60 py-60 bg-zinc-950 border-t border-zinc-900 reveal overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
               <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">End of Case Study</p>
                  <h2 className="text-8xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] italic text-white">
                     Novra.
                  </h2>
               </div>
               
               <div className="flex flex-col items-start md:items-end gap-8 pb-4">
                  <button 
                    onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                    className="group relative px-6 py-3 overflow-hidden border border-white/10"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover:text-black transition-colors duration-500 flex items-center gap-2">
                      <span className="group-hover:-translate-y-1 transition-transform">↑</span> Go up
                    </span>
                  </button>
                  <p className="text-zinc-500 max-w-xs md:text-right text-lg font-light leading-relaxed">
                     Interested in building high-stakes risk systems?
                  </p>
                  <button 
                    onClick={onContactClick}
                    className="group relative px-12 py-6 overflow-hidden border border-white/10"
                  >
                    <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                    <span className="relative text-[10px] uppercase tracking-[0.5em] font-bold text-white group-hover:text-black transition-colors duration-500">
                      Let's talk
                    </span>
                  </button>
               </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default Novra;

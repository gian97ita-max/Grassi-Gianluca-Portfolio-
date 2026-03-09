import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface StrategyProps {
  onBack: () => void;
}

const Strategy: React.FC<StrategyProps> = ({ onBack }) => {
  const [isAtTop, setIsAtTop] = React.useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 w-full z-50 px-6 md:px-12 py-8 flex justify-between items-center mix-blend-difference transition-all duration-700 ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
          Strategy Document / 01
        </div>
      </nav>

      <main className="pt-40 pb-32 px-6 md:px-12 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          {/* Header */}
          <header className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">Executive Summary / Operra</p>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] italic">
              Strategy <br/> Breakdown.
            </h1>
          </header>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
            
            {/* 1. Key Strategic Decisions */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">01 / Key Strategic Decisions</h2>
              </div>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Onboarding Optimization</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Reduced onboarding from 7 steps to 4 activation-driven milestones.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">KPI Prioritization</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Prioritized activation rate as the primary system KPI.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Product Consolidation</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Consolidated product into 3 core modules (Operations, Insights, Settings).</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">System Stabilization</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Delayed feature expansion to stabilize system coherence.</p>
                </div>
              </div>
            </section>

            {/* 2. Trade-offs */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">02 / Trade-offs</h2>
              </div>
              <div className="space-y-8">
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Reduced Customization</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Removed advanced customization during onboarding to minimize friction.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Centralized Governance</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Centralized component governance across modules, sacrificing local flexibility.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Velocity Slowdown</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Accepted temporary slowdown in feature velocity during system refactor.</p>
                </div>
              </div>
            </section>

            {/* 3. Impact Validation */}
            <section className="md:col-span-2 space-y-12 pt-12 border-t border-zinc-900">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">03 / Impact Validation</h2>
                </div>
                <div className="flex gap-8 text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
                  <span>90-day pre/post release comparison</span>
                  <span>No pricing/acquisition changes</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="space-y-2">
                  <span className="block text-4xl font-black tracking-tighter">42% → 64%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Activation</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black tracking-tighter">18% → 32%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Trial-to-Paid</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black tracking-tighter">+22%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Onboarding Comp.</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black tracking-tighter">+27%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Dev Velocity</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-4xl font-black tracking-tighter">+11%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">MRR Growth</span>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-zinc-400 text-lg font-light leading-relaxed italic border-l-2 border-zinc-800 pl-8">
                  "Activation uplift reduced time-to-value (9d → 5d), accelerating conversion and compounding revenue."
                </p>
              </div>
            </section>

            {/* 4. System Layers */}
            <section className="md:col-span-2 space-y-10 pt-12">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">04 / System Layers</h2>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 flex justify-between items-center group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Experience Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Unified interface and interaction patterns</span>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 p-6 flex justify-between items-center group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Workflow Logic Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Standardized automation and rule engines</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 flex justify-between items-center group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Metrics Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Real-time performance and activation tracking</span>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 flex justify-between items-center group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Modular Foundation</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Atomic design tokens and core infrastructure</span>
                </div>
              </div>
            </section>

          </div>

          {/* Footer CTA */}
          <footer className="pt-32 pb-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex flex-col items-center md:items-start gap-4">
                <button 
                  onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                  className="group relative px-6 py-3 overflow-hidden border border-white/10"
                >
                  <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                  <span className="relative text-[10px] uppercase tracking-[0.3em] font-bold text-zinc-400 group-hover:text-black transition-colors duration-500 flex items-center gap-2">
                    <span className="group-hover:-translate-y-1 transition-transform">↑</span> Go up
                  </span>
                </button>
                <h2 className="text-2xl font-bold tracking-tight uppercase italic text-zinc-500">End of Strategy Breakdown</h2>
             </div>
             <button 
               onClick={onBack}
               className="px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-zinc-200 hover:scale-105 hover:tracking-[0.6em] transition-all duration-500 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               back to operra
             </button>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default Strategy;

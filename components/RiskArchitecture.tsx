import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface RiskArchitectureProps {
  onBack: () => void;
}

const RiskArchitecture: React.FC<RiskArchitectureProps> = ({ onBack }) => {
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
      <nav className={`fixed top-0 left-0 w-full z-50 px-5 md:px-12 py-8 flex justify-between items-center mix-blend-difference transition-all duration-700 ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}>
        <button 
          onClick={onBack}
          className="group flex items-center gap-3 text-[10px] uppercase tracking-[0.4em] font-bold"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-1 transition-transform" />
          Back
        </button>
        <div className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-40">
          Strategy Document / 03
        </div>
      </nav>

      <main className="pt-40 pb-32 px-5 md:px-12 max-w-[1440px] mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-32"
        >
          {/* Header */}
          <header className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">Executive Summary / Novra</p>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] italic" style={{ fontSize: 'clamp(3rem, 10vw, 8vw)' }}>
              Risk Architecture <br/> Layer.
            </h1>
          </header>

          {/* Grid Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
            
            {/* 1. Structural Decisions */}
            <section className="space-y-10">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">01 / Structural Decisions</h2>
              </div>
              <div className="space-y-8">
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Exposure Visibility</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Elevated exposure visibility above portfolio performance.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Liquidation Proximity</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Repositioned liquidation proximity as a primary system metric.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Forward-Looking Simulation</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Integrated forward-looking simulation directly into the portfolio view.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Leverage Transparency</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Reduced leverage opacity by surfacing multiplier impact in real time.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Volatility Stabilization</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Introduced volatility-triggered UI prioritizing risk stabilization.</p>
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
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Reduced PnL Emphasis</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Reduced visual emphasis on short-term PnL.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Cognitive Load</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Accepted slightly higher cognitive load to improve informed decision-making.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Liquidation Priority</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Prioritized liquidation reduction over short-term trading intensity.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Delayed Expansion</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Delayed feature expansion to reinforce exposure clarity.</p>
                </div>
              </div>
            </section>

            {/* 3. Risk Validation Logic */}
            <section className="md:col-span-2 space-y-12 pt-12 border-t border-zinc-900">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">03 / Risk Validation Logic</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
                  <span>90-day post-release measurement window</span>
                  <span>No fee structure changes during evaluation</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">9% → 37%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Simulation Adoption</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">7.4% → 5.8%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Forced Liquidation</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">-31%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Support Tickets</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">44% → 51%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">30d Retention</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">+7%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Trader LTV (2Q)</span>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-zinc-400 text-lg font-light leading-relaxed italic border-l-2 border-zinc-800 pl-8">
                  "Elevated exposure clarity reduced panic-driven behavior, decreasing forced liquidations and improving long-term capital stability."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono mt-4 block pl-8">— Design Rationale</span>
              </div>
            </section>

            {/* 4. Risk System Layers */}
            <section className="md:col-span-2 space-y-10 pt-12">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">04 / Risk System Layers</h2>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Exposure Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Surfaces real-time liquidation proximity and concentration risk</span>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Simulation Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Models forward-looking volatility impact before execution</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Volatility Adaptation Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Reprioritizes risk metrics during extreme market events</span>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Behavioral Stabilization Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Reduces reactive trading patterns through structured visibility</span>
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
                <h2 className="text-2xl font-bold tracking-tight uppercase italic text-zinc-500">End of Risk Architecture</h2>
             </div>
             <button 
               onClick={onBack}
               className="px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-zinc-200 hover:scale-105 hover:tracking-[0.6em] transition-all duration-500 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               back to novra
             </button>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default RiskArchitecture;


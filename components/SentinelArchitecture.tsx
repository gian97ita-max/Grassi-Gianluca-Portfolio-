import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface SentinelArchitectureProps {
  onBack: () => void;
}

const SentinelArchitecture: React.FC<SentinelArchitectureProps> = ({ onBack }) => {
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
          Strategy Document / 04
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
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">Executive Summary / Sentinel</p>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] italic" style={{ fontSize: 'clamp(3rem, 10vw, 8vw)' }}>
              Operational <br/> Architecture.
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
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Decision Workflow</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Replaced tab-based navigation with structured decision workflow.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Signal Grouping</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Grouped fraud signals by predictive weight and operational relevance.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">SLA Visibility</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Elevated SLA and case aging visibility within the review flow.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Escalation Governance</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Standardized escalation triggers to reduce circular case transfers.</p>
                </div>
                <div className="group">
                  <h3 className="text-xl font-bold uppercase tracking-tight group-hover:text-zinc-400 transition-colors">Audit Integration</h3>
                  <p className="text-zinc-500 text-sm mt-2 font-light">Integrated audit logging directly into the decision panel.</p>
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
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Signal Density</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Reduced interface visual simplicity in favor of signal density.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Retraining Cost</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Accepted initial analyst retraining cost to improve long-term throughput.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Delayed Automation</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Delayed automation expansion to stabilize manual review architecture.</p>
                </div>
                <div className="border-l border-zinc-900 pl-6 py-1">
                  <h3 className="text-sm font-bold uppercase tracking-widest text-zinc-300">Decision Consistency</h3>
                  <p className="text-zinc-600 text-xs mt-1 font-light">Prioritized decision consistency over customization flexibility.</p>
                </div>
              </div>
            </section>

            {/* 3. Operational Validation */}
            <section className="md:col-span-2 space-y-12 pt-12 border-t border-zinc-900">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">03 / Operational Validation</h2>
                </div>
                <div className="flex flex-col md:flex-row gap-4 md:gap-8 text-[9px] uppercase tracking-widest text-zinc-600 font-mono">
                  <span>120-day post-release evaluation window</span>
                  <span>No staffing changes during measurement period</span>
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">7m 12s → 4m 46s</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Avg Handling Time</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">17% → 9.6%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Re-open rate</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">-57%</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Queue aging {'>'} 24h</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">$4.12 → $3.05</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Cost Per Flag</span>
                </div>
                <div className="space-y-2">
                  <span className="block text-3xl md:text-4xl font-black tracking-tighter">$2.8M</span>
                  <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Annualized savings</span>
                </div>
              </div>

              <div className="max-w-3xl">
                <p className="text-zinc-400 text-lg font-light leading-relaxed italic border-l-2 border-zinc-800 pl-8">
                  "Operational excellence is built on structured clarity, not data density."
                </p>
                <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono mt-4 block pl-8">— Design Principle</span>
              </div>
            </section>

            {/* 4. System Layers */}
            <section className="md:col-span-2 space-y-10 pt-12">
              <div className="flex items-center gap-4">
                <span className="w-8 h-[1px] bg-zinc-800"></span>
                <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">04 / System Layers</h2>
              </div>
              
              <div className="flex flex-col space-y-2">
                <div className="bg-zinc-900/50 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Decision Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Structured resolution column and action governance</span>
                </div>
                <div className="bg-zinc-900/40 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Signal Prioritization Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Weighted clustering and anomaly ranking</span>
                </div>
                <div className="bg-zinc-900/30 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Escalation Governance Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">Standardized triggers and audit trail control</span>
                </div>
                <div className="bg-zinc-900/20 border border-zinc-800 p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 group hover:bg-white hover:text-black transition-all duration-500 cursor-default">
                  <span className="text-xs font-bold uppercase tracking-widest">Operational Monitoring Layer</span>
                  <span className="text-[10px] uppercase tracking-widest opacity-60 font-mono">SLA risk, backlog visibility, throughput stability</span>
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
                <h2 className="text-2xl font-bold tracking-tight uppercase italic text-zinc-500">End of Operational Architecture</h2>
             </div>
             <button 
               onClick={onBack}
               className="px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-zinc-200 hover:scale-105 hover:tracking-[0.6em] transition-all duration-500 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               back to sentinel
             </button>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default SentinelArchitecture;

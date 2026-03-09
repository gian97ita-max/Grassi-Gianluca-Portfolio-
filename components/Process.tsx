import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

interface ProcessProps {
  onBack: () => void;
}

const Process: React.FC<ProcessProps> = ({ onBack }) => {
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
    <div className="min-h-screen bg-[#0D0D0D] text-white selection:bg-white selection:text-black">
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
          PROCESS DOCUMENT
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
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">Methodology</p>
            <h1 className="text-6xl md:text-[8vw] font-black tracking-tighter uppercase leading-[0.8] italic" style={{ fontSize: 'clamp(3rem, 10vw, 8vw)' }}>
              FROM PROBLEM <br/> TO PERFORMANCE.
            </h1>
          </header>

          {/* Introductory Paragraph */}
          <div className="max-w-4xl space-y-10">
            <div className="space-y-6">
              <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">THE FOUNDATION</h2>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Most design failures are not visual failures — they are behavioral ones. Understanding how people process information, make decisions under uncertainty, and respond to cognitive load is what separates interface design from experience design. I apply principles from behavioral psychology and cognitive science to every stage of the design process: reducing friction at activation points, leveraging loss aversion in retention systems, and structuring information hierarchies that guide decisions rather than overwhelm them. Design that converts is design that understands people first.
              </p>
            </div>
            <div className="w-full h-[1px] bg-zinc-900"></div>
          </div>

          {/* Grid Content & Quote Section */}
          <div className="space-y-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-24 gap-y-32">
              
              {/* 01 / REVENUE DIAGNOSIS */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">01 / REVENUE DIAGNOSIS</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    Before touching Figma, I analyze the business funnel. I identify where the product is losing value — onboarding drop-off, low trial-to-paid conversion, high churn. The design problem is always a revenue problem before it is a UI problem.
                  </p>
                </div>
              </section>

              {/* 02 / SIGNAL MAPPING */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">02 / SIGNAL MAPPING</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    I map user behavioral signals — where they stop, what they ignore, what they look for. I combine quantitative data (analytics, heatmaps) with qualitative insights (interviews, support tickets) to identify the gap between user intent and business outcome.
                  </p>
                </div>
              </section>

              {/* 03 / HYPOTHESIS DEFINITION */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">03 / HYPOTHESIS DEFINITION</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    I define a revenue hypothesis before starting to design. Example: 'If I reduce cognitive load in onboarding, time-to-value decreases and trial-to-paid conversion increases.' Every project has a measurable revenue hypothesis.
                  </p>
                </div>
              </section>

              {/* 04 / SYSTEM DESIGN */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">04 / SYSTEM DESIGN</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    I design systemic solutions, not visual patches. Every design decision is connected to a specific metric — activation rate, retention, MRR. I work in close alignment with PM, engineering, and data teams to ensure design decisions are technically feasible and measurable.
                  </p>
                </div>
              </section>

              {/* 05 / IMPACT VALIDATION */}
              <section className="space-y-10">
                <div className="flex items-center gap-4">
                  <span className="w-8 h-[1px] bg-zinc-800"></span>
                  <h2 className="text-[10px] uppercase tracking-[0.4em] text-zinc-500 font-bold">05 / IMPACT VALIDATION</h2>
                </div>
                <div className="space-y-8">
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    I measure results over controlled 90-120 day windows, isolating variables. Success is not 'the design looks good' — success is 'the design moved the right number.'
                  </p>
                </div>
              </section>

            </div>

            {/* Quote Section */}
            <section className="text-center space-y-8 pt-16">
              <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-5xl mx-auto leading-tight italic">
                "Design without a measurable outcome is just decoration."
              </p>
              <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono block">— Design Principle</span>
            </section>
          </div>

          {/* Footer CTA */}
          <footer className="pt-32 pb-12 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-8">
             <div className="flex flex-col items-center md:items-start gap-4">
                <h2 className="text-2xl font-bold tracking-tight uppercase italic text-zinc-500">END OF PROCESS DOCUMENT</h2>
             </div>
             <button 
               onClick={onBack}
               className="px-16 py-6 bg-white text-black text-[10px] uppercase tracking-[0.5em] font-bold hover:bg-zinc-200 hover:scale-105 hover:tracking-[0.6em] transition-all duration-500 shadow-[0_0_0_0_rgba(255,255,255,0)] hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]"
             >
               BACK TO PORTFOLIO
             </button>
          </footer>
        </motion.div>
      </main>
    </div>
  );
};

export default Process;

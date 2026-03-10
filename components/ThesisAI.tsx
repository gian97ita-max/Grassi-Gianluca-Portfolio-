import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Brain, Cpu, Database, Zap } from 'lucide-react';

interface ThesisAIProps {
  onBack: () => void;
  onViewStrategicArchitecture?: () => void;
  onContactClick?: () => void;
}

const ThesisAI: React.FC<ThesisAIProps> = ({ onBack, onViewStrategicArchitecture, onContactClick }) => {
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
          Case Study / 02
        </div>
      </nav>

      <main className="pt-32 md:pt-48 pb-32">
        <div>
          {/* Header */}
          <header className="px-5 md:px-12 max-w-[1440px] mx-auto reveal flex flex-col items-center text-center">
            <div className="space-y-8 w-full">
              <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">Case Study 02</span>
              <h1 className="text-6xl md:text-[140px] font-extrabold leading-[0.8] tracking-tighter uppercase" style={{ fontSize: 'clamp(3rem, 15vw, 140px)' }}>
                Thesis AI
              </h1>
              <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight reveal delay-100">
                Designing an AI-native decision engine for seed-stage startup founders.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-900 reveal delay-200">
                {['AI Systems', 'Decision Modeling', 'Human-in-the-loop', 'Seed Stage'].map(tag => (
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
               "Transforming fragmented startup signals into structured, explainable decisions to accelerate early-stage execution."
             </h2>
          </section>

          {/* Hero Image */}
          <section className="mt-24 md:mt-48 reveal px-5 md:px-12 max-w-[1200px] mx-auto">
            <div className="w-full aspect-[16/9] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/18Gm3rEUEYadT5DhajDABu9jqk-J9mewa" 
                alt="AI Decision Interface" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Designing a structured AI decision layer for early-stage companies.</p>
            </div>
          </section>

          {/* Business Snapshot & Role */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-12 reveal">
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Business Snapshot</h3>
                   <p className="text-2xl font-bold uppercase tracking-tighter">Company Context</p>
                </div>
                <div className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed">
                  <p>Thesis is a seed-stage AI platform built for startup founders navigating high-risk strategic decisions. Developed as an independent product concept to explore AI-native decision systems for early-stage founders.</p>
                  <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
                    <div>
                      <span className="block text-white font-bold text-3xl">3,200</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Active Founders</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">Pre-A</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Funding Stage</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">12 days</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">AVG. DECISION CYCLE</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-12 reveal delay-200">
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">My Role</h3>
                   <p className="text-2xl font-bold uppercase tracking-tighter">PRODUCT DESIGN LEAD — CONCEPT</p>
                </div>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Defining decision architecture, AI explainability layer, and human-in-the-loop interaction model for high-velocity experimentation.
                </p>
              </div>
            </div>
          </section>

          {/* Core Hypothesis / Value Prop */}
          <section className="mt-32 md:mt-64 bg-zinc-950 py-32 md:py-48 reveal">
            <div className="px-5 md:px-12 max-w-[1440px] mx-auto text-center space-y-8">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">The Mission</h3>
               <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-5xl mx-auto leading-tight italic">
                "Transforming fragmented startup signals into structured, explainable decisions to accelerate early-stage execution."
               </p>
            </div>
          </section>

          {/* Problem Space */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8 reveal">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Problem Space</h3>
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                 Seed-stage founders operate in signal chaos. Data is fragmented across Stripe, GA, Intercom, Notion, and Slack, leading to reactive roadmap changes.
               </p>
               <ul className="space-y-4">
                  {['12-day decision cycle', 'Reactive roadmap changes', 'Delayed feature kill decisions', 'High cognitive load'].map((item, i) => (
                    <li key={i} className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
                      <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span> {item}
                    </li>
                  ))}
               </ul>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="reveal delay-200 flex flex-col items-center">
                 <div className="aspect-video w-full bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/d/10MLwAu2ezoReUC3ANkhe6V9D3ZXrqySY" 
                      alt="Signal Chaos Visualization" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                    />
                 </div>
                 <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono italic">"The problem wasn’t access to data. It was lack of structured reasoning."</p>
              </div>
            </div>
          </section>

          {/* Decision Tension */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Decision Tension</h3>
                <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-4xl leading-tight">
                  Founders face asymmetric decisions where wrong choices compound burn rate.
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                {['Should we pivot feature X?', 'Double down on acquisition?', 'Hire now or extend runway?', 'Kill underperforming experiments?'].map(q => (
                  <div key={q} className="p-8 bg-zinc-950 border border-zinc-900 flex items-center justify-center text-center group hover:bg-white hover:text-black transition-all duration-500">
                    <p className="text-sm font-bold uppercase tracking-tight leading-snug">{q}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* AI System Architecture */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8 reveal">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">System Architecture</h3>
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                 Thesis was designed around six structured layers. Autonomy was deliberately limited to preserve trust and accuracy.
               </p>
               <div className="space-y-6 pt-4">
                {[
                  { title: 'Data Ingestion', desc: 'Aggregates financial and behavioral data.' },
                  { title: 'Signal Clustering', desc: 'Groups behavioral patterns.' },
                  { title: 'Pattern Detection', desc: 'Identifies emerging trends.' },
                  { title: 'Scenario Simulation', desc: 'Models 3 potential outcomes.' },
                  { title: 'Confidence Modeling', desc: 'Assigns probability scores.' },
                  { title: 'Human Approval', desc: 'Mandatory founder oversight.' }
                ].map((layer, idx) => (
                  <div key={layer.title} className="flex gap-4 group">
                    <span className="text-zinc-800 font-black text-xl font-mono">0{idx + 1}</span>
                    <div className="space-y-1">
                      <h4 className="font-bold uppercase text-[11px] tracking-widest group-hover:text-white transition-colors">{layer.title}</h4>
                      <p className="text-zinc-500 text-[10px] font-light leading-relaxed">{layer.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="reveal delay-200">
                 <div className="aspect-video w-full bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/d/12hTG5usthHNAkhEeEFZ7hbcfgbVTZTjW" 
                      alt="System Architecture Diagram" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                    />
                 </div>
                 <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Explainable AI decision modeling with mandatory human oversight.</p>
              </div>
            </div>
          </section>

          {/* Human-in-the-loop */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Human-in-the-loop</h3>
                <p className="text-3xl font-bold uppercase tracking-tighter">Transparency over speed</p>
                <p className="text-zinc-400 text-lg font-light leading-relaxed">
                  Full automation was rejected to avoid context blindness. We prioritized confidence calibration and decision override requirements.
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4">
                {['Confidence score transparency', 'Alternative scenario comparison', 'Risk exposure breakdown', 'Mandatory human approval'].map(item => (
                  <div key={item} className="p-6 bg-zinc-950 border border-zinc-900 flex justify-between items-center group hover:bg-zinc-900 transition-colors">
                    <span className="text-sm font-bold uppercase tracking-tight">{item}</span>
                    <span className="w-2 h-2 bg-zinc-800 rounded-full group-hover:bg-white transition-colors"></span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Trade-offs & Failure */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 space-y-24 reveal">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-24">
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Trade-offs</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  We intentionally slowed automation to preserve trust. Speed was sacrificed for explainability and control.
                </p>
                <div className="flex flex-wrap gap-3">
                  {['Speed vs Explainability', 'Automation vs Control', 'Cost vs Accuracy'].map(t => (
                    <span key={t} className="px-4 py-2 bg-zinc-950 border border-zinc-800 text-[10px] uppercase tracking-widest text-zinc-500">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
              <div className="space-y-8">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Failure Modes</h3>
                <p className="text-zinc-400 font-light leading-relaxed">
                  Designing failure transparency to prevent over-reliance on model output.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {['Signal misclassification', 'Confidence inflation', 'Data sparsity bias'].map(f => (
                    <div key={f} className="p-4 border border-zinc-900 text-[10px] uppercase tracking-widest text-zinc-600">
                      {f}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal">
              <div className="aspect-[21/9] w-full bg-zinc-950 border border-zinc-800 overflow-hidden relative group">
                <img 
                  src="https://lh3.googleusercontent.com/d/17y0x76-soAhJDwRyGmrrv9KvqZ0ZDUKa" 
                  alt="Guardrails UI" 
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono text-center">
                Designing failure transparency to prevent over-reliance on AI.
              </p>
            </div>
          </section>

          {/* Impact */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="space-y-16">
              <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8">
                <div className="space-y-4">
                  <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Impact</h3>
                  <h2 className="text-6xl md:text-8xl font-black tracking-tighter uppercase italic">Results.</h2>
                </div>
                <p className="max-w-md text-zinc-400 font-light leading-relaxed">
                  Impact driven by structured decision modeling, not autonomous automation. Measured across controlled 90-day pre/post release window.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-zinc-900 pt-16">
                {[
                  { label: 'Decision Cycle', value: '-34%' },
                  { label: 'Exp. Velocity', value: '+21%' },
                  { label: 'Kill Timing', value: '-28%' },
                  { label: 'Clarity Score', value: '+31%' },
                  { label: 'Retention', value: '+12%' }
                ].map(stat => (
                  <div key={stat.label} className="space-y-2">
                    <span className="block text-4xl md:text-5xl font-black tracking-tighter">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex justify-center pt-12">
                 <button 
                   onClick={onViewStrategicArchitecture}
                   className="px-10 py-4 border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500"
                 >
                   Strategic Decision Architecture
                 </button>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-24 space-y-12">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Learnings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: 'Decision Architecture', desc: 'Build the logic before the interface.' },
                  { title: 'Transparency First', desc: 'Autonomy must be earned through explainability.' },
                  { title: 'Confidence Calibration', desc: 'Models must know when they don\'t know.' },
                  { title: 'Guardrails over Growth', desc: 'Preventing bad decisions is as valuable as enabling good ones.' }
                ].map(learning => (
                  <div key={learning.title} className="space-y-2">
                    <h4 className="font-bold uppercase text-sm tracking-widest">{learning.title}</h4>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{learning.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-light italic text-zinc-400 pt-12 border-t border-zinc-900">
                "AI should reduce cognitive chaos — not create false certainty."
              </p>
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono mt-4">
                — Design Principle
              </p>
            </div>
          </section>

          {/* Project Conclusion CTA */}
          <section className="mt-60 py-60 bg-zinc-950 border-t border-zinc-900 reveal overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
               <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">End of Case Study</p>
                  <h2 className="text-8xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] italic text-white">
                     Thesis AI.
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
                     Interested in building AI-native decision engines?
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

export default ThesisAI;

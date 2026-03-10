import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft, Shield, TrendingUp, Zap, Activity, Users, Clock, AlertCircle, BarChart3 } from 'lucide-react';

interface SentinelProps {
  onBack: () => void;
  onViewOperationalArchitecture: () => void;
  onContactClick?: () => void;
}

const Sentinel: React.FC<SentinelProps> = ({ onBack, onViewOperationalArchitecture, onContactClick }) => {
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
          Case Study / 04
        </div>
      </nav>

      <main className="pt-32 md:pt-48 pb-32">
        <div>
          {/* Header */}
          <header className="px-5 md:px-12 max-w-[1440px] mx-auto reveal flex flex-col items-center text-center">
            <div className="space-y-8 w-full">
              <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">Case Study 04</span>
              <h1 className="text-[clamp(48px,12vw,140px)] font-extrabold leading-[0.8] tracking-tighter uppercase">
                Sentinel
              </h1>
              <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight reveal delay-100">
                Re-architecting a high-volume fraud operations system to reduce decision friction and operational cost.
              </p>
              <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-900 reveal delay-200">
                {['Enterprise SaaS', 'Internal Operations Platform', 'Workflow Architecture', 'Series C'].map(tag => (
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
               "Transforming a fragmented fraud review interface into a structured operational decision system."
             </h2>
          </section>

          {/* Hero Image */}
          <section className="mt-24 md:mt-48 reveal px-5 md:px-12 max-w-[1200px] mx-auto">
            <div className="w-full aspect-[16/9] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
              <img 
                src="https://lh3.googleusercontent.com/d/1slbMUthgoJQte65Z2QSXNu-dK08hLd__" 
                alt="Sentinel Fraud Review Interface" 
                className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
            </div>
            <div className="mt-6">
              <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Redesigning a large-scale fraud review workflow for operational efficiency.</p>
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
                  <p>Sentinel is a Series C payments infrastructure company processing 38M monthly transactions. Automated scoring identified risk, while 45 fraud analysts resolved edge cases across 3 global hubs.</p>
                  <div className="grid grid-cols-2 gap-8 pt-4">
                    <div>
                      <span className="block text-white font-bold text-3xl">38M</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Monthly Transactions</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">1.9M</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Flagged Transactions</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">45</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Fraud Analysts</span>
                    </div>
                    <div>
                      <span className="block text-white font-bold text-3xl">Series C</span>
                      <span className="text-[10px] uppercase tracking-widest font-mono">Funding Stage</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="space-y-12 reveal delay-200">
                <div className="space-y-4">
                   <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">My Role</h3>
                   <p className="text-2xl font-bold uppercase tracking-tighter">Lead Product Designer</p>
                </div>
                <div className="space-y-4 text-zinc-400 text-lg font-light leading-relaxed">
                  <p>Responsible for fraud analyst workflow redesign, decision system architecture, and signal prioritization model. Aligned Risk, Data Science, and Operations teams.</p>
                  <ul className="space-y-2 pt-4">
                    {['Fraud analyst workflow redesign', 'Decision system architecture', 'Signal prioritization model', 'Escalation governance structure'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-zinc-500 text-sm font-mono">
                        <span className="w-1 h-1 bg-zinc-800 rounded-full"></span> {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Problem */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 grid grid-cols-1 md:grid-cols-12 gap-16">
            <div className="md:col-span-4 space-y-8 reveal">
               <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Problem</h3>
               <p className="text-zinc-400 text-lg font-light leading-relaxed">
                 The system surfaced risk scores but did not structure decision-making. Analysts spent 61% of their time on non-value-add tasks like navigation and note duplication.
               </p>
               <div className="space-y-6 pt-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div className="p-4 border border-zinc-900">
                     <span className="block text-white font-bold text-xl">7m 12s</span>
                     <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Avg Handling Time</span>
                   </div>
                   <div className="p-4 border border-zinc-900">
                     <span className="block text-white font-bold text-xl">17%</span>
                     <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Re-opened Cases</span>
                   </div>
                   <div className="p-4 border border-zinc-900">
                     <span className="block text-white font-bold text-xl">41%</span>
                     <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Note Duplication</span>
                   </div>
                   <div className="p-4 border border-zinc-900">
                     <span className="block text-white font-bold text-xl">$4.12</span>
                     <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">Cost Per Flag</span>
                   </div>
                 </div>
               </div>
            </div>
            <div className="md:col-span-8 space-y-16">
              <div className="reveal delay-200 flex flex-col items-center">
                 <div className="aspect-[16/10] w-full bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                    <img 
                      src="https://lh3.googleusercontent.com/d/1H3SN-lmpEhiR-k0t_Ae56N5Ma8qkGoL6" 
                      alt="Legacy Fraud Review Interface" 
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                    />
                 </div>
                 <p className="mt-6 text-[10px] uppercase tracking-widest text-zinc-600 font-mono italic">Legacy interface with scattered signal panels and duplicated notes. No clear decision priority.</p>
              </div>
            </div>
          </section>

          {/* Challenge */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="space-y-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">The Challenge</h3>
                <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-4xl leading-tight">
                  Not a UI refresh, but restructuring the operational foundation.
                </p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 pt-8">
                {[
                  { title: 'Signal hierarchy', desc: 'No weighted ranking between high and low impact fraud signals.' },
                  { title: 'Case prioritization', desc: 'Analysts selected cases manually with no SLA visibility.' },
                  { title: 'Evidence grouping', desc: 'Risk signals scattered across multiple tabs and panels.' },
                  { title: 'Decision confidence', desc: 'No structured framework to guide approve, block, or escalate decisions.' },
                  { title: 'Escalation pathways', desc: 'Circular transfers between analysts with no clear ownership.' },
                  { title: 'Audit traceability', desc: 'Decision history incomplete and difficult to reconstruct.' }
                ].map((item, i) => (
                  <div key={i} className="space-y-4">
                    <span className="text-[10px] font-bold text-white uppercase tracking-widest">{item.title}</span>
                    <div className="h-0.5 w-full bg-zinc-900"></div>
                    <p className="text-zinc-500 text-[10px] font-light leading-relaxed uppercase">{item.desc}</p>
                  </div>
                ))}
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">01 /</span>
                  <h4 className="text-xl font-bold uppercase">Decision-First Architecture</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Replaced multi-tab navigation with a structured vertical decision column. Shifted from “data browsing” to guided resolution.</p>
                </div>
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">02 /</span>
                  <h4 className="text-xl font-bold uppercase">Signal Prioritization</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Ranked signals by predictive weight and operational relevance. Reduced cognitive overload by collapsing low-impact indicators.</p>
                </div>
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">03 /</span>
                  <h4 className="text-xl font-bold uppercase">Escalation Governance</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Redefined escalation into structured trigger thresholds and clear reason tagging. Reduced circular case transfers.</p>
                </div>
                <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
                  <span className="text-xs font-mono text-zinc-700">04 /</span>
                  <h4 className="text-xl font-bold uppercase">Operational Visibility</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">Integrated analyst workload distribution and SLA risk alerts. Enabled proactive backlog management.</p>
                </div>
              </div>

              {/* System Architecture */}
              <div className="reveal mt-24">
                 <div className="aspect-video bg-zinc-950 border border-zinc-900 flex items-center justify-center p-16 group">
                    <div className="grid grid-cols-2 grid-rows-2 gap-4 w-full h-full transition-opacity duration-1000">
                        {/* Decision Layer */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1RP7NNa6S2oNVs9IjvrUkRKE0Gwyb3cMU" 
                            alt="Decision Layer" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Signal Prioritization Layer */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1ESunj9rQU8vnbktnyLlgBa59RoLvMffH" 
                            alt="Signal Prioritization Layer" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Escalation Governance Layer */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1WiKc5Pj30OM1czA6XsnpMCOD6pbAvOf2" 
                            alt="Escalation Governance Layer" 
                            className="w-full h-full object-cover"
                            referrerPolicy="no-referrer"
                          />
                        </div>

                        {/* Operational Monitoring Layer */}
                        <div className="relative rounded border border-white/20 overflow-hidden bg-white/5 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                          <img 
                            src="https://lh3.googleusercontent.com/d/1EQMZJ3XqT8FTeVQP56eXeo1qhR2SDJD_" 
                            alt="Operational Monitoring Layer" 
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
                   <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Structuring fraud review as a guided operational workflow.</p>
                 </div>
              </div>
            </div>
          </section>

          {/* Solution Images */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
            <div className="reveal">
              <div className="aspect-video bg-zinc-900 border border-zinc-800 overflow-hidden group">
                <img 
                  src="https://lh3.googleusercontent.com/d/1_Q0rk4ibLj0DcJYtRb6f05n3QtFn45Yu" 
                  alt="Sentinel Operational Workflow"
                  className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="mt-6 space-y-2">
                <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Operational Workflow Design</p>
                <p className="text-zinc-500 text-xs font-light">Comprehensive view of the re-architected fraud review system, integrating signal prioritization and decision-first architecture.</p>
              </div>
            </div>
          </section>

          {/* Architecture CTA */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 reveal">
            <div className="bg-zinc-950 border border-zinc-900 p-12 md:p-24 flex flex-col md:flex-row justify-between items-center gap-12">
              <div className="space-y-4">
                <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">System Strategy</h3>
                <p className="text-2xl md:text-4xl font-bold tracking-tighter uppercase max-w-md">
                  Operational Architecture Layer.
                </p>
              </div>
              <button 
                onClick={onViewOperationalArchitecture}
                className="group relative px-12 py-6 overflow-hidden border border-white/10"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative text-[10px] uppercase tracking-[0.5em] font-bold text-white group-hover:text-black transition-colors duration-500">
                  View Operational Architecture
                </span>
              </button>
            </div>
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
                  120-day evaluation window showing significant operational savings and throughput optimization without increasing automation complexity.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 border-t border-zinc-900 pt-16">
                {[
                  { label: 'Avg Handling Time', value: '7m 12s → 4m 46s' },
                  { label: 'Re-opened Cases', value: '17% → 9.6%' },
                  { label: 'Queue Aging > 24h', value: '-57%' },
                  { label: 'Operational Cost', value: '$4.12 → $3.05' }
                ].map(stat => (
                  <div key={stat.label} className="space-y-2">
                    <span className="block text-4xl font-black tracking-tighter">{stat.value}</span>
                    <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono">{stat.label}</span>
                  </div>
                ))}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 pt-12">
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Capacity & Governance</h4>
                  <div className="space-y-4">
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">Cases per Analyst/Shift</span>
                      <span className="text-white font-bold">73 → 96</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">Required Overtime</span>
                      <span className="text-white font-bold">−38%</span>
                    </div>
                    <div className="flex justify-between border-b border-zinc-900 pb-2">
                      <span className="text-zinc-500 text-sm">Internal Audit Correction</span>
                      <span className="text-white font-bold">−41%</span>
                    </div>
                  </div>
                </div>
                <div className="space-y-8">
                  <h4 className="text-2xl font-bold uppercase tracking-tight">Operational Impact</h4>
                  <p className="text-zinc-400 text-lg font-light leading-relaxed">
                    By restructuring fraud review into a guided decision system, Sentinel reduced analyst friction and compressed operational cost, resulting in <strong>$2.8M annualized savings</strong>.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Learnings */}
          <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
            <div className="bg-zinc-950 border border-zinc-900 p-8 md:p-24 space-y-12">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Learnings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {[
                  { title: 'Decision Hierarchy', desc: 'Operational systems require decision hierarchy over feature density.' },
                  { title: 'Cognitive Fatigue', desc: 'Signal grouping reduces cognitive fatigue in high-volume environments.' },
                  { title: 'Governance as Design', desc: 'Escalation governance is a structural design problem, not a compliance layer.' },
                  { title: 'Workflow vs Automation', desc: 'Workflow architecture can outperform automation when scaling human review systems.' }
                ].map(learning => (
                  <div key={learning.title} className="space-y-2">
                    <h4 className="font-bold uppercase text-sm tracking-widest">{learning.title}</h4>
                    <p className="text-zinc-500 text-sm font-light leading-relaxed">{learning.desc}</p>
                  </div>
                ))}
              </div>
              <p className="text-xl md:text-2xl font-light italic text-zinc-400 pt-12 border-t border-zinc-900">
                "Operational excellence is built on structured clarity, not data density."
              </p>
              <span className="text-[9px] uppercase tracking-widest text-zinc-600 font-mono mt-4 block">— Design Principle</span>
            </div>
          </section>

          {/* Project Conclusion CTA */}
          <section className="mt-60 py-60 bg-zinc-950 border-t border-zinc-900 reveal overflow-hidden">
            <div className="max-w-[1440px] mx-auto px-5 md:px-12 flex flex-col md:flex-row justify-between items-end gap-12">
               <div className="space-y-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-zinc-600 font-mono">End of Case Study</p>
                  <h2 className="text-8xl md:text-[12vw] font-black tracking-tighter uppercase leading-[0.8] italic text-white">
                     Sentinel.
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
                     Interested in optimizing operational throughput?
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

export default Sentinel;

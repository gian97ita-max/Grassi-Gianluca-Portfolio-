import React, { useEffect, useRef, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X } from 'lucide-react';

import { MRRChart } from './MRRChart';

interface CaseStudyProps {
  onBack: () => void;
  onViewStrategy?: () => void;
  onContactClick?: () => void;
}

const CaseStudy: React.FC<CaseStudyProps> = ({ onBack, onViewStrategy, onContactClick }) => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [isAtTop, setIsAtTop] = useState(true);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    window.scrollTo(0, 0);

    const handleScroll = () => {
      setIsAtTop(window.scrollY < 50);
    };

    window.addEventListener('scroll', handleScroll);

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
    <div ref={scrollRef} className="min-h-screen bg-black text-white selection:bg-white selection:text-black font-sans pb-40">
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

      {/* Minimal Nav */}
       <nav className="fixed top-0 left-0 w-full z-50 p-5 md:p-12 flex justify-between items-center mix-blend-difference">
         <button 
           onClick={onBack}
           className={`text-[10px] uppercase tracking-[0.3em] font-mono flex items-center gap-2 hover:opacity-50 transition-all duration-500 ${isAtTop ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'}`}
         >
           <span className="text-lg">←</span> Back
         </button>
         <span className={`text-[10px] uppercase tracking-[0.3em] font-mono hidden md:block transition-all duration-500 ${isAtTop ? 'opacity-40 translate-y-0' : 'opacity-0 -translate-y-4'}`}>Case Study 01 / Operra</span>
       </nav>

      {/* Hero Section */}
      <header className="pt-32 md:pt-48 px-5 md:px-12 max-w-[1440px] mx-auto reveal flex flex-col items-center text-center">
        <div className="space-y-8 w-full">
          <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">Case Study 01</span>
          <h1 className="text-[clamp(48px,12vw,140px)] font-extrabold leading-[0.8] tracking-tighter uppercase">
            Operra
          </h1>
          <p className="text-xl md:text-3xl text-zinc-400 font-light max-w-3xl mx-auto leading-tight reveal delay-100">
            Shaping the foundation of a scalable workflow automation platform.
          </p>
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-4 pt-8 border-t border-zinc-900 reveal delay-200">
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Product Strategy</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">UX Systems</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Growth Optimization</span>
            <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Series A</span>
          </div>
        </div>
      </header>

      {/* Transformative Quote - Reduced margin-top for tighter visual connection */}
      <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-16 md:mt-24 reveal flex flex-col items-center text-center">
         <h2 className="text-xl md:text-3xl font-bold tracking-tight max-w-4xl italic leading-tight">
           Transforming a fragmented product into a KPI-aligned growth engine
         </h2>
      </section>

      {/* Image 01 — Hero Mockup - Reduced size and centered */}
      <section className="mt-24 md:mt-48 reveal px-5 md:px-12 max-w-[1200px] mx-auto">
        <div className="w-full aspect-[16/8] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
          <img 
            src="https://lh3.googleusercontent.com/d/1ZYW0dqtBYsK3-IHVBS_QTufYLucvckE1" 
            alt="Operra Dashboard" 
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
        </div>
        <div className="mt-6">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Redesigning Operra’s core interface around structured automation flows.</p>
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
              <p>Operra is a Series A B2B SaaS platform helping operations teams automate internal workflows.</p>
              <div className="flex flex-wrap gap-8 md:gap-12 pt-4">
                <div>
                  <span className="block text-white font-bold text-3xl">120k</span>
                  <span className="text-[10px] uppercase tracking-widest font-mono">Monthly Active Users</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-3xl">3</span>
                  <span className="text-[10px] uppercase tracking-widest font-mono">Core Modules</span>
                </div>
                <div>
                  <span className="block text-white font-bold text-3xl">$900k</span>
                  <span className="text-[10px] uppercase tracking-widest font-mono">MRR AT PROJECT START</span>
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
              Owning product system architecture, activation redesign, and KPI alignment across product and engineering teams.
            </p>
          </div>
        </div>
      </section>

      {/* Revenue Hypothesis */}
      <section className="mt-32 md:mt-64 bg-zinc-950 py-32 md:py-48 reveal">
        <div className="px-5 md:px-12 max-w-[1440px] mx-auto text-center space-y-8">
           <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Revenue Hypothesis</h3>
           <p className="text-3xl md:text-5xl font-bold tracking-tighter max-w-5xl mx-auto leading-tight italic">
            "Improving onboarding clarity and system consistency would increase activation rate, accelerate time-to-value, and improve trial-to-paid conversion — directly impacting MRR growth."
           </p>
        </div>
      </section>

      {/* Image 02 — Funnel Map */}
      <section className="px-5 md:px-12 max-w-[1000px] mx-auto mt-24 reveal">
        <div className="bg-zinc-950 border border-zinc-800 overflow-hidden relative group">
          <img 
            src="https://lh3.googleusercontent.com/d/11HZ5wekKfe0WyI_LTTUTGGDW1Osu5LwD" 
            alt="Funnel Map" 
            referrerPolicy="no-referrer"
            className="w-full h-auto block opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
        </div>
        <div className="mt-6 text-center">
          <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Mapping activation milestones to identify friction and drop-off points.</p>
        </div>
      </section>

      {/* Context & Challenge */}
      <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 grid grid-cols-1 md:grid-cols-12 gap-16">
        <div className="md:col-span-4 space-y-8 reveal">
           <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Context</h3>
           <p className="text-zinc-400 text-lg font-light leading-relaxed">
             Operra had grown feature-by-feature without a unified system. Navigation patterns were inconsistent, onboarding lacked structure, and key actions were buried inside complex workflows.
           </p>
           <ul className="space-y-4">
              {['Low activation rate', 'High onboarding drop-off', 'Slower feature adoption', 'Increasing dev complexity'].map((item, i) => (
                <li key={i} className="flex items-center gap-4 text-zinc-500 text-sm font-mono">
                  <span className="w-1.5 h-1.5 bg-zinc-800 rounded-full"></span> {item}
                </li>
              ))}
           </ul>
        </div>
        <div className="md:col-span-8 space-y-16">
          {/* Image 03 - Before State */}
          <div className="reveal delay-200 flex justify-center">
             <div className="aspect-[3/4] w-full max-w-[500px] bg-zinc-950 border border-zinc-900 overflow-hidden relative group">
                <img 
                  src="https://lh3.googleusercontent.com/d/1v32hV9MQzN9WnxihAi6d1Hw3bxzwnxim" 
                  alt="Legacy Onboarding Screen" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none"></div>
             </div>
          </div>
          
          <div className="space-y-12 reveal">
            <h3 className="text-4xl md:text-6xl font-bold tracking-tight uppercase">The Challenge</h3>
            <p className="text-zinc-400 text-2xl font-light italic">"The challenge wasn’t visual polish. It was restructuring the product foundation."</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pt-8">
              <div className="space-y-4">
                <span className="text-xs font-bold text-white uppercase">Product</span>
                <p className="text-zinc-500 text-sm">No clear value progression from sign-up to outcome.</p>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-white uppercase">Team</span>
                <p className="text-zinc-500 text-sm">No shared design system. UI decisions varied across modules.</p>
              </div>
              <div className="space-y-4">
                <span className="text-xs font-bold text-white uppercase">Business</span>
                <p className="text-zinc-500 text-sm">Trial users struggled to reach value before expiration.</p>
              </div>
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
              <h4 className="text-xl font-bold uppercase">Activation-First Architecture</h4>
              <p className="text-zinc-500 text-sm font-light">Mapped the journey from account creation to first successful automated workflow.</p>
            </div>
            <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
              <span className="text-xs font-mono text-zinc-700">02 /</span>
              <h4 className="text-xl font-bold uppercase">Scalable Design System</h4>
              <p className="text-zinc-500 text-sm font-light">Built a modular UI system aligned with engineering constraints and future scalability.</p>
            </div>
            <div className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors space-y-6">
              <span className="text-xs font-mono text-zinc-700">03 /</span>
              <h4 className="text-xl font-bold uppercase">KPI Alignment</h4>
              <p className="text-zinc-500 text-sm font-light">Defined activation rate, retention, and trial-to-paid conversion as guiding metrics.</p>
            </div>
          </div>

          {/* Image 04 — System Architecture */}
          <div className="reveal mt-24">
             <div className="aspect-video bg-zinc-900 border border-zinc-800 flex items-center justify-center p-16 group">
                <div className="grid grid-cols-3 grid-rows-2 gap-4 w-full h-full transition-opacity duration-1000">
                   {[...Array(6)].map((_, i) => {
                     const images = [
                       "https://lh3.googleusercontent.com/d/1y97pHL1tEu16XpGAxlyR0sU88vIBAsEp",
                       "https://lh3.googleusercontent.com/d/1h2_B4t4TmfQJYO3-f-_50N0cIpOAWt8m",
                       "https://lh3.googleusercontent.com/d/1y8ke2PDf26Zmk3Sjn1sAkaD4326nOB_V",
                       "https://lh3.googleusercontent.com/d/1MHzfP4ur-16W2fgqHlzdDXJAXP90uCGg",
                       "https://lh3.googleusercontent.com/d/1OoNZvnWezvz6VQ3KSIAPQhVex-L2VcdM",
                       "https://lh3.googleusercontent.com/d/1httPP25m8HRjzH5bQ0H0x2pyLEAto5-r"
                     ];
                     return (
                       <div key={i} className="relative rounded border border-white/20 overflow-hidden bg-white/10 transition-all duration-500 ease-in-out hover:scale-[1.5] hover:z-50 hover:shadow-2xl hover:border-white/40 cursor-zoom-in opacity-60 hover:opacity-100">
                         {images[i] ? (
                           <div className="absolute inset-0 bg-zinc-950 flex items-center justify-center">
                             <img 
                               src={images[i]} 
                               alt={`Architecture Part 0${i + 1}`} 
                               referrerPolicy="no-referrer"
                               className="w-full h-full object-cover"
                             />
                           </div>
                         ) : (
                           <div className="w-full h-full opacity-20"></div>
                         )}
                       </div>
                     );
                   })}
                </div>
                <div className="absolute flex flex-col items-center pointer-events-none">
                   <span className="text-[10px] uppercase tracking-[0.5em] text-white font-mono bg-black px-4 py-2">System Architecture Diagram</span>
                </div>
             </div>
             <div className="mt-6">
               <p className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Creating a modular system aligned with engineering constraints.</p>
             </div>
          </div>
        </div>
      </section>


      {/* Solution */}
      <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-8 reveal">
            <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Solution</h3>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Reframing Operra as a structured system — not a feature collection.</h2>
            <ul className="space-y-6 text-zinc-400 text-lg font-light leading-relaxed pt-8 border-t border-zinc-900">
               <li className="flex items-start gap-4"><span className="text-white font-mono text-xs">→</span> Simplified primary navigation</li>
               <li className="flex items-start gap-4"><span className="text-white font-mono text-xs">→</span> Introduced progressive onboarding steps</li>
               <li className="flex items-start gap-4"><span className="text-white font-mono text-xs">→</span> Reduced cognitive load in automation builder</li>
               <li className="flex items-start gap-4"><span className="text-white font-mono text-xs">→</span> Established hierarchy between modules</li>
               <li className="flex items-start gap-4"><span className="text-white font-mono text-xs">→</span> Embedded contextual guidance</li>
            </ul>
          </div>
          <div className="md:col-span-7 space-y-24">
            {/* Image 05 — New Onboarding Flow */}
            <div className="reveal">
              <div 
                onClick={() => setSelectedImage("https://lh3.googleusercontent.com/d/17_OQZqwlYjCm1OxFCRtvTxSwMI8u8Mgl")}
                className="aspect-[3/4] max-w-[500px] mx-auto bg-zinc-900 border border-zinc-800 flex items-center justify-center relative transition-all duration-500 ease-in-out hover:border-white/40 cursor-zoom-in group overflow-hidden"
              >
                <img 
                  src="https://lh3.googleusercontent.com/d/17_OQZqwlYjCm1OxFCRtvTxSwMI8u8Mgl" 
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-100 transition-opacity duration-1000" 
                />
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                   <span className="text-[10px] uppercase tracking-widest text-white/60 font-mono bg-black/30 px-4 py-2">Click to expand</span>
                </div>
              </div>
              <p className="mt-4 text-center text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Reducing onboarding from 7 to 4 structured steps.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Before / After */}
      <section className="mt-32 md:mt-64 border-y border-zinc-900">
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="p-10 md:p-24 space-y-12 border-b md:border-b-0 md:border-r border-zinc-900 reveal">
             <h3 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter opacity-20 italic">Before</h3>
             <ul className="space-y-6 text-zinc-500 font-light">
                <li className="flex items-center gap-4">7-step onboarding</li>
                <li className="flex items-center gap-4">42% completion rate</li>
                <li className="flex items-center gap-4">No guided workflow creation</li>
                <li className="flex items-center gap-4">Inconsistent interaction patterns</li>
             </ul>
          </div>
          <div className="p-10 md:p-24 space-y-12 reveal delay-200">
             <h3 className="text-5xl md:text-6xl font-extrabold uppercase tracking-tighter text-white italic">After</h3>
             <ul className="space-y-6 text-white font-bold">
                <li className="flex items-center gap-4"><span className="text-green-500">↑</span> 4-step guided onboarding</li>
                <li className="flex items-center gap-4"><span className="text-green-500">↑</span> 64% completion rate</li>
                <li className="flex items-center gap-4"><span className="text-green-500">↑</span> Structured first workflow creation</li>
                <li className="flex items-center gap-4"><span className="text-green-500">↑</span> Unified design language</li>
             </ul>
          </div>
        </div>
        {/* Image 07 — Side-by-Side */}
        <div className="p-5 md:p-12 reveal flex justify-center">
           <div className="border border-zinc-800 overflow-hidden group">
              <img 
                src="https://lh3.googleusercontent.com/d/1-tA0WUDos3T1UqUfPaCU2f3FHGVFV8aU" 
                alt="Visual UI Comparison" 
                referrerPolicy="no-referrer"
                className="w-full h-auto block opacity-60 group-hover:opacity-100 transition-opacity duration-1000"
              />
           </div>
        </div>
      </section>

      {/* Impact */}
      <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64">
        <div className="space-y-24">
          <div className="flex flex-col md:flex-row justify-between items-start gap-12">
            <div className="space-y-6 reveal">
              <h3 className="text-xs uppercase tracking-[0.3em] font-bold text-zinc-500">Impact</h3>
              <div className="grid grid-cols-2 md:grid-cols-2 gap-12">
                 <div>
                   <span className="block text-4xl md:text-8xl font-extrabold tracking-tighter">+18%</span>
                   <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Activation Rate</span>
                 </div>
                 <div>
                   <span className="block text-4xl md:text-8xl font-extrabold tracking-tighter">+22%</span>
                   <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Onboarding Comp.</span>
                 </div>
                 <div>
                   <span className="block text-4xl md:text-8xl font-extrabold tracking-tighter">+14%</span>
                   <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Trial-to-Paid</span>
                 </div>
                 <div>
                   <span className="block text-4xl md:text-8xl font-extrabold tracking-tighter">+27%</span>
                   <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Dev Velocity</span>
                 </div>
              </div>
              <div className="flex justify-center pt-12">
                 <button 
                   onClick={onViewStrategy}
                   className="px-10 py-4 border border-zinc-800 text-[10px] uppercase tracking-[0.3em] font-bold hover:bg-white hover:text-black transition-all duration-500"
                 >
                   view strategy
                 </button>
              </div>
            </div>
            <div className="space-y-8 max-w-xl reveal delay-300 pt-12">
              <h4 className="text-2xl font-bold uppercase tracking-tight">Revenue Impact</h4>
              <p className="text-zinc-400 text-lg font-light leading-relaxed">
                Improved activation and conversion translated into an estimated <strong>+11% MRR growth</strong> within two quarters of the release.
              </p>
              {/* Image 08 — KPI Dashboard */}
              <div className="aspect-video border border-zinc-800 overflow-hidden">
                 <MRRChart />
              </div>
              <p className="text-[9px] uppercase tracking-widest text-zinc-700 font-mono">Activation improvements correlated with +11% MRR growth over two quarters.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Learnings */}
      <section className="px-5 md:px-12 max-w-[1440px] mx-auto mt-32 md:mt-64 reveal">
        <div className="bg-white text-black overflow-hidden border border-zinc-200">
           <div className="p-8 md:p-12 border-b border-zinc-200 bg-zinc-50/50">
              <h3 className="text-[10px] uppercase tracking-[0.4em] font-bold opacity-50">Key Learnings & Takeaways</h3>
           </div>
           <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors duration-500 group">
                 <div className="space-y-6">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">Systems Thinking</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">Systems thinking scales faster than isolated redesigns. Building a foundation allows for exponential product evolution.</p>
                 </div>
              </div>
              <div className="p-8 md:p-16 border-b border-zinc-200 md:border-b-0 hover:bg-zinc-50 transition-colors duration-500 group">
                 <div className="space-y-6">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">Clarity over Features</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">Activation clarity drives retention more than feature expansion. Doing fewer things perfectly is the growth catalyst.</p>
                 </div>
              </div>
              <div className="p-8 md:p-16 border-b md:border-b-0 md:border-r border-zinc-200 hover:bg-zinc-50 transition-colors duration-500 group">
                 <div className="space-y-6">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">KPI Precedence</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">KPI alignment must precede interface execution. Design without metrics is just art; design with metrics is business strategy.</p>
                 </div>
              </div>
              <div className="p-8 md:p-16 hover:bg-zinc-50 transition-colors duration-500 group">
                 <div className="space-y-6">
                    <h4 className="text-3xl font-black uppercase tracking-tighter leading-none group-hover:translate-x-2 transition-transform duration-500">Velocity Drivers</h4>
                    <p className="text-zinc-500 text-lg leading-relaxed font-light">Design systems accelerate both team velocity and business growth by removing repetitive decision cycles.</p>
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
                  Operra.
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
                  Interested in building high-performance design systems?
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


      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-[100] bg-black/98 backdrop-blur-2xl overflow-y-auto cursor-zoom-out pt-20 pb-20 px-4 md:px-0"
          >
            <motion.button 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              className="fixed top-8 right-8 z-[110] text-white/40 hover:text-white transition-colors p-2 bg-black/50 rounded-full backdrop-blur-md"
              onClick={(e) => {
                e.stopPropagation();
                setSelectedImage(null);
              }}
            >
              <X size={32} strokeWidth={1} />
            </motion.button>
            
            <div className="flex flex-col items-center min-h-full w-full">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95, y: 40 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 40 }}
                transition={{ type: "spring", damping: 30, stiffness: 150 }}
                className="relative w-full max-w-6xl mx-auto shadow-[0_0_100px_rgba(0,0,0,0.5)]"
                onClick={(e) => e.stopPropagation()}
              >
                <img 
                  src={selectedImage} 
                  alt="Expanded view" 
                  referrerPolicy="no-referrer"
                  className="w-full h-auto block border border-white/5"
                />
              </motion.div>
              
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                className="mt-12 mb-12 text-[10px] uppercase tracking-[0.5em] font-mono text-white text-center"
              >
                End of detailed view — Click anywhere to close
              </motion.p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default CaseStudy;
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProjectGrid from './components/ProjectGrid';
import About from './components/About';
import Footer from './components/Footer';
import CaseStudy from './components/CaseStudy';
import Strategy from './components/Strategy';
import ThesisAI from './components/ThesisAI';
import StrategicDecisionArchitecture from './components/StrategicDecisionArchitecture';
import Novra from './components/Novra';
import RiskArchitecture from './components/RiskArchitecture';
import Sentinel from './components/Sentinel';
import SentinelArchitecture from './components/SentinelArchitecture';
import Process from './components/Process';
import Resume from './components/Resume';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('index');
  const [currentView, setCurrentView] = useState<'main' | 'case-study-1' | 'strategy' | 'thesis-ai' | 'strategic-decision-architecture' | 'novra' | 'risk-architecture' | 'sentinel' | 'sentinel-architecture' | 'process' | 'resume'>('main');

  useEffect(() => {
    // Check for view parameter in URL on mount
    const params = new URLSearchParams(window.location.search);
    const view = params.get('view');
    if (view === 'resume') {
      setCurrentView('resume');
    }
  }, []);

  const handleNavigate = (view: string) => {
    if (currentView !== 'main') {
      setCurrentView('main');
      // Wait for re-render to scroll
      setTimeout(() => {
        const targetId = getTargetId(view);
        const element = document.getElementById(targetId);
        if (element) {
          const offset = 80; // Approximate navbar height
          const bodyRect = document.body.getBoundingClientRect().top;
          const elementRect = element.getBoundingClientRect().top;
          const elementPosition = elementRect - bodyRect;
          const offsetPosition = elementPosition - offset;

          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 100);
      return;
    }

    const targetId = getTargetId(view);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  const getTargetId = (view: string) => {
    switch (view) {
      case 'index': return 'hero';
      case 'work': return 'work';
      case 'about': return 'about';
      case 'contact': return 'contact-info';
      default: return 'hero';
    }
  };

  const handleShowCaseStudy = (id: string) => {
    if (id === '1') {
      setCurrentView('case-study-1');
      window.scrollTo(0, 0);
    } else if (id === '2') {
      setCurrentView('thesis-ai');
      window.scrollTo(0, 0);
    } else if (id === '3') {
      setCurrentView('novra');
      window.scrollTo(0, 0);
    } else if (id === '4') {
      setCurrentView('sentinel');
      window.scrollTo(0, 0);
    }
  };

  const handleShowStrategy = () => {
    setCurrentView('strategy');
    window.scrollTo(0, 0);
  };

  const handleShowStrategicArchitecture = () => {
    setCurrentView('strategic-decision-architecture');
    window.scrollTo(0, 0);
  };

  const handleShowRiskArchitecture = () => {
    setCurrentView('risk-architecture');
    window.scrollTo(0, 0);
  };

  const handleShowProcess = () => {
    setCurrentView('process');
    window.scrollTo(0, 0);
  };

  const handleShowSentinelArchitecture = () => {
    setCurrentView('sentinel-architecture');
    window.scrollTo(0, 0);
  };

  const handleBackToHome = () => {
    setCurrentView('main');
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    if (currentView !== 'main') return;

    let observer: IntersectionObserver | null = null;
    let revealObserver: IntersectionObserver | null = null;
    let timeoutId: NodeJS.Timeout;

    const setupObservers = () => {
      // Scroll reveal observer (Keep this for animations)
      const revealObserverOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      revealObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('reveal-visible');
          }
        });
      }, revealObserverOptions);

      // Select all reveal elements and observe them
      const revealElements = document.querySelectorAll('.reveal');
      revealElements.forEach((el) => {
        // If it's already in view, add the class immediately
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight) {
          el.classList.add('reveal-visible');
        }
        revealObserver?.observe(el);
      });
    };

    // Use a slightly longer timeout to ensure React has finished rendering the DOM
    timeoutId = setTimeout(setupObservers, 200);

    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;
      
      // 1. Bottom of page check (Force Contact)
      if (windowHeight + scrollPosition >= fullHeight - 150) {
        setActiveSection('contact');
        return;
      }

      // 2. Top of page check (Force Index)
      if (scrollPosition < 100) {
        setActiveSection('index');
        return;
      }

      // 3. Section detection based on scroll position
      const sectionIds = ['hero', 'work', 'about', 'contact-info'];
      const offset = 250; // Trigger point offset from top

      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          const top = rect.top + scrollPosition;
          
          if (scrollPosition + offset >= top) {
            const id = sectionIds[i];
            if (id === 'hero') setActiveSection('index');
            else if (id === 'work') setActiveSection('work');
            else if (id === 'about') setActiveSection('about');
            else if (id === 'contact-info') setActiveSection('contact');
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      if (observer) observer.disconnect();
      if (revealObserver) revealObserver.disconnect();
      clearTimeout(timeoutId);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [currentView]);

  return (
    <div className="relative min-h-screen bg-black overflow-x-hidden selection:bg-white selection:text-black">
      {/* Global Reveal Styles */}
      <style>{`
        .reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s cubic-bezier(0.2, 1, 0.3, 1);
          will-change: transform, opacity;
        }
        .reveal-visible {
          opacity: 1;
          transform: translateY(0);
        }
        .delay-100 { transition-delay: 100ms; }
        .delay-200 { transition-delay: 200ms; }
        .delay-300 { transition-delay: 300ms; }
        .delay-400 { transition-delay: 400ms; }
        .delay-500 { transition-delay: 500ms; }
      `}</style>
      {currentView === 'main' ? (
        <div className="pt-[100px] md:pt-[80px]">
          <Navbar currentView={activeSection} onNavigate={handleNavigate} />
          
          <main className="transition-opacity duration-500">
            <Hero />
            <ProjectGrid onViewCaseStudy={handleShowCaseStudy} />
            <About onProcessClick={handleShowProcess} />
            
            <section id="contact-info" className="bg-black">
               <div className="max-w-[1440px] w-full mx-auto px-6 md:px-12 pt-24 pb-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-start">
                    
                    <div className="space-y-12 reveal">
                      <div className="space-y-4">
                        <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">Contact.</span>
                        <h2 className="text-4xl md:text-7xl font-extrabold leading-[1] tracking-tighter">
                          Performance by design. <br/> <span className="text-zinc-500 italic font-light">Measurable impact.</span>
                        </h2>
                      </div>

                      <div className="space-y-6">
                        <p className="text-zinc-400 font-light max-w-md leading-relaxed text-base">
                          If you're building a product that needs to perform — not just look good — let's talk.
                        </p>
                        
                        <div className="flex items-center gap-3 pt-4">
                          <div className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </div>
                          <span className="text-[10px] uppercase tracking-widest text-zinc-500 font-mono">Open to freelance and full-time roles</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col gap-16 md:pt-20 reveal delay-200">
                      <div className="group relative w-fit">
                        <span className="text-[10px] uppercase tracking-widest text-zinc-600 mb-6 block font-mono">Get in touch</span>
                        <a 
                          href="mailto:hello@grassigianluca.com" 
                          className="block group"
                        >
                          <span className="text-xl md:text-4xl font-extrabold tracking-tighter hover:text-zinc-400 transition-colors duration-500 border-b border-white group-hover:border-zinc-500 pb-1 break-all md:break-normal">
                            hello@grassigianluca.com
                          </span>
                        </a>
                      </div>

                      <div className="grid grid-cols-2 gap-12">
                        <div className="space-y-6">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600 block font-mono">Connect</span>
                          <ul className="space-y-3 text-sm">
                            <li><a href="https://www.linkedin.com/in/grassigianlucagg/" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-8">LinkedIn</a></li>
                            <li><a href="https://ais-dev-aw4nqxuspxom6v6iivtohs-112891356495.europe-west2.run.app?view=resume" target="_blank" rel="noopener noreferrer" className="text-zinc-400 hover:text-white transition-colors underline decoration-zinc-800 underline-offset-8">My resume</a></li>
                          </ul>
                        </div>
                        <div className="space-y-6">
                          <span className="text-[10px] uppercase tracking-widest text-zinc-600 block font-mono">Location</span>
                          <p className="text-sm font-light text-zinc-400 leading-relaxed">
                            Milan, IT <br/>
                            Global (Remote) <br/>
                            CEST / UTC+1
                          </p>
                        </div>
                      </div>
                    </div>

                  </div>
               </div>
            </section>
          </main>
          
          <Footer />
        </div>
      ) : currentView === 'case-study-1' ? (
        <div className="w-full">
          <CaseStudy onBack={handleBackToHome} onViewStrategy={handleShowStrategy} onContactClick={() => handleNavigate('contact')} />
        </div>
      ) : currentView === 'thesis-ai' ? (
        <div className="w-full">
          <ThesisAI onBack={handleBackToHome} onViewStrategicArchitecture={handleShowStrategicArchitecture} onContactClick={() => handleNavigate('contact')} />
        </div>
      ) : currentView === 'strategic-decision-architecture' ? (
        <div className="w-full">
          <StrategicDecisionArchitecture onBack={() => setCurrentView('thesis-ai')} />
        </div>
      ) : currentView === 'novra' ? (
        <div className="w-full">
          <Novra onBack={handleBackToHome} onViewRiskArchitecture={handleShowRiskArchitecture} onContactClick={() => handleNavigate('contact')} />
        </div>
      ) : currentView === 'risk-architecture' ? (
        <div className="w-full">
          <RiskArchitecture onBack={() => setCurrentView('novra')} />
        </div>
      ) : currentView === 'sentinel' ? (
        <div className="w-full">
          <Sentinel onBack={handleBackToHome} onViewOperationalArchitecture={handleShowSentinelArchitecture} onContactClick={() => handleNavigate('contact')} />
        </div>
      ) : currentView === 'sentinel-architecture' ? (
        <div className="w-full">
          <SentinelArchitecture onBack={() => setCurrentView('sentinel')} />
        </div>
      ) : currentView === 'process' ? (
        <div className="w-full">
          <Process onBack={handleBackToHome} />
        </div>
      ) : currentView === 'resume' ? (
        <div className="w-full">
          <Resume onBack={handleBackToHome} />
        </div>
      ) : (
        <div className="w-full">
          <Strategy onBack={() => setCurrentView('case-study-1')} />
        </div>
      )}

      {/* Grain texture - overlaying everything */}
      <div className="fixed inset-0 pointer-events-none z-[999] opacity-[0.03] mix-blend-overlay">
        <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          <filter id="noiseFilter">
            <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noiseFilter)" />
        </svg>
      </div>
    </div>
  );
};

export default App;
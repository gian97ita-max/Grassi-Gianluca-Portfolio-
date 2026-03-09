import React from 'react';

interface AboutProps {
  onProcessClick?: () => void;
}

const About: React.FC<AboutProps> = ({ onProcessClick }) => {
  return (
    <section id="about" className="py-24 md:py-48 bg-[#0D0D0D]">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-start">
          {/* Left Side: Text Content */}
          <div className="space-y-12">
            <div className="space-y-6 reveal">
              <span className="text-zinc-600 uppercase tracking-[0.4em] text-[10px] font-bold block">ABOUT ME</span>
              <h2 className="text-4xl md:text-7xl font-extrabold leading-[1] tracking-tighter text-white uppercase">
                Understanding business. <br />
                Designing performance.
              </h2>
            </div>
            
            <div className="space-y-8 text-zinc-400 text-lg font-light leading-relaxed">
              <p className="reveal delay-100">
                I'm a product designer who thinks like a business operator. My background in visual communication gave me a foundation in systems and craft — but what drives my work is a simple belief: design that doesn't move a metric isn't finished.
              </p>
              <p className="reveal delay-200">
                I specialize in activation, retention, and revenue architecture — translating complex product problems into decisions that compound over time. Whether it's restructuring an onboarding flow, building a risk visibility system, or designing an AI decision layer, I work at the intersection of user behavior and business performance.
              </p>
              <p className="reveal delay-300">
                Based in Milan, open to remote and relocation opportunities globally.
              </p>
            </div>
          </div>

          {/* Right Side: Core Pillars Cards */}
          <div className="space-y-12">
            <div className="grid grid-cols-1 gap-6">
              {[
                {
                  title: 'ACTIVATION & CONVERSION',
                  desc: 'Optimizing user journeys to accelerate value realization.',
                  delay: 'delay-100'
                },
                {
                  title: 'RETENTION & MONETIZATION',
                  desc: 'Designing systems that increase long-term engagement and revenue.',
                  delay: 'delay-200'
                },
                {
                  title: 'PRODUCT & BUSINESS ALIGNMENT',
                  desc: 'Ensuring every design decision supports measurable growth objectives.',
                  delay: 'delay-300'
                }
              ].map((pillar, idx) => (
                <div key={idx} className={`p-10 border border-[#333333] hover:border-zinc-700 transition-colors space-y-4 bg-black/20 reveal ${pillar.delay}`}>
                  <h4 className="text-sm font-bold uppercase tracking-widest text-white">{pillar.title}</h4>
                  <p className="text-zinc-500 text-sm font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="reveal delay-400">
              <button 
                onClick={onProcessClick}
                className="group relative px-12 py-6 overflow-hidden border border-white/10 w-full md:w-auto"
              >
                <div className="absolute inset-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out"></div>
                <span className="relative text-[10px] uppercase tracking-[0.5em] font-bold text-white group-hover:text-black transition-colors duration-500">
                  FROM PROBLEM TO PERFORMANCE
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
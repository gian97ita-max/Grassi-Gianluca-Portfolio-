import React from 'react';

const Hero: React.FC = () => {
  return (
    <section id="hero" className="relative h-screen w-full flex flex-col items-center justify-center bg-black px-5 md:px-6 overflow-hidden">
      {/* Decorative background element for depth */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-zinc-900/20 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="relative z-10 max-w-[1200px] w-full">
        <div className="flex flex-col items-start md:items-center text-left md:text-center space-y-6">
          
          {/* Refined Intro Label */}
          <div className="flex items-center gap-4 mb-4 reveal">
            <div className="w-[1px] h-4 bg-zinc-500"></div>
            <span className="text-[10px] uppercase tracking-[0.5em] text-zinc-500 font-medium font-mono">Hello, I'm</span>
          </div>

          <h1 className="text-[clamp(48px,15vw,120px)] md:text-[90px] lg:text-[120px] font-extrabold uppercase leading-[0.9] tracking-tighter mb-2 reveal delay-100">
            Gianluca <br className="md:hidden" /> Grassi
          </h1>
          
          <div className="space-y-8 max-w-4xl">
            <p className="text-zinc-500 text-[10px] md:text-sm uppercase tracking-[0.4em] font-light leading-relaxed reveal delay-200">
              Where product design meets revenue performance.
            </p>
            
            <div className="pt-8 border-t border-zinc-900 reveal delay-300">
              <p className="text-zinc-500 text-[10px] md:text-sm uppercase tracking-[0.4em] font-light leading-relaxed">
                Operating at the intersection of <br className="hidden md:block" />
                <span className="text-white font-semibold">product strategy</span>, 
                <span className="text-white font-semibold"> UX systems</span>, and 
                <span className="text-white font-semibold"> business performance</span>.
              </p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Refined Scroll Indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4 reveal delay-500">
        <span className="text-[9px] uppercase tracking-[0.5em] text-zinc-700 rotate-90 mb-8 font-mono">Scroll</span>
        <div className="w-[1px] h-16 bg-gradient-to-b from-zinc-800 to-transparent relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1/2 bg-white animate-[scrollLine_2s_infinite]"></div>
        </div>
      </div>

      <style>{`
        @keyframes scrollLine {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(200%); }
        }
      `}</style>
    </section>
  );
};

export default Hero;
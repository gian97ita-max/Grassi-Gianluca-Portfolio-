
import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ currentView, onNavigate }) => {
  const [time, setTime] = useState(new Date());
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour12: true, 
      hour: 'numeric', 
      minute: '2-digit',
      timeZone: 'Europe/Rome'
    });
  };

  const navLinkClass = (view: string) => 
    `transition-colors cursor-pointer ${currentView === view ? 'text-white' : 'text-zinc-500 hover:text-white'}`;

  const handleMobileNavigate = (view: string) => {
    onNavigate(view);
    setIsMenuOpen(false);
  };

  return (
    <>
      <nav className="fixed top-0 left-0 w-full z-[1000] bg-black border-b border-zinc-900 px-6 py-4 md:py-6">
        <div className="max-w-[1440px] mx-auto grid grid-cols-2 md:grid-cols-3 gap-y-4 md:gap-8 text-[11px] md:text-[13px] leading-tight items-center">
          
          {/* Column 1: Identity */}
          <div className="flex flex-col">
            <span className="font-bold text-white">Gianluca Grassi</span>
            <span className="text-zinc-500 font-normal">Revenue-Centered Product Designer</span>
          </div>

          {/* Column 2: Location (Hidden on mobile) */}
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-white">Location</span>
            <span className="text-zinc-500 font-normal">Milan, Italy ({formatTime(time)})</span>
          </div>

          {/* Column 3: Navigation (Desktop only) */}
          <div className="hidden md:flex flex-col">
            <span className="font-bold text-white">Navigation</span>
            <div className="flex gap-1">
              <button onClick={() => onNavigate('index')} className={navLinkClass('index')}>Index,</button>
              <button onClick={() => onNavigate('work')} className={navLinkClass('work')}>Work,</button>
              <button onClick={() => onNavigate('about')} className={navLinkClass('about')}>About me,</button>
              <button onClick={() => onNavigate('contact')} className={navLinkClass('contact')}>Contact</button>
            </div>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden justify-end">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white p-2"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-[999] bg-black transition-transform duration-500 ease-in-out transform ${isMenuOpen ? 'translate-y-0' : '-translate-y-full'} md:hidden flex flex-col justify-center px-6`}>
        <div className="space-y-8">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.5em] text-zinc-600 font-mono">Menu</p>
            <div className="flex flex-col gap-6">
              <button 
                onClick={() => handleMobileNavigate('index')} 
                className={`text-4xl font-black tracking-tighter uppercase italic text-left ${currentView === 'index' ? 'text-white' : 'text-zinc-800'}`}
              >
                Index
              </button>
              <button 
                onClick={() => handleMobileNavigate('work')} 
                className={`text-4xl font-black tracking-tighter uppercase italic text-left ${currentView === 'work' ? 'text-white' : 'text-zinc-800'}`}
              >
                Work
              </button>
              <button 
                onClick={() => handleMobileNavigate('about')} 
                className={`text-4xl font-black tracking-tighter uppercase italic text-left ${currentView === 'about' ? 'text-white' : 'text-zinc-800'}`}
              >
                About me
              </button>
              <button 
                onClick={() => handleMobileNavigate('contact')} 
                className={`text-4xl font-black tracking-tighter uppercase italic text-left ${currentView === 'contact' ? 'text-white' : 'text-zinc-800'}`}
              >
                Contact
              </button>
            </div>
          </div>

          <div className="pt-12 border-t border-zinc-900 space-y-4">
            <div className="flex flex-col">
              <span className="text-[10px] uppercase tracking-widest text-zinc-600 font-mono">Location</span>
              <span className="text-zinc-400 text-sm">Milan, Italy ({formatTime(time)})</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

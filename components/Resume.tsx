import React, { useEffect, useState, useRef } from 'react';
import { ArrowDown } from 'lucide-react';
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

interface ResumeProps {
  onBack?: () => void;
}

const Resume: React.FC<ResumeProps> = ({ onBack }) => {
  const [showDownload, setShowDownload] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "Resume | Gianluca Grassi";

    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowDownload(true);
      } else {
        setShowDownload(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      document.title = "Gianluca Grassi | Revenue-Centered Product Designer";
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleDownload = async () => {
    if (!resumeRef.current) return;
    
    setIsDownloading(true);
    try {
      const element = resumeRef.current;
      
      // Use a consistent width for the capture to avoid responsive shifts
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        backgroundColor: '#f5f2ed',
        logging: false,
        windowWidth: 1200, // Force a desktop-like width for consistent layout
        onclone: (clonedDoc) => {
          const clonedElement = clonedDoc.querySelector('[ref-resume-container]') as HTMLElement;
          if (clonedElement) {
            clonedElement.style.paddingBottom = '80px'; // Clean bottom margin
            clonedElement.style.paddingTop = '40px'; // Clean top margin
          }
        }
      });
      
      const imgWidth = canvas.width / 2;
      const imgHeight = canvas.height / 2;
      
      const pdf = new jsPDF({
        orientation: imgWidth > imgHeight ? 'landscape' : 'portrait',
        unit: 'px',
        format: [imgWidth, imgHeight]
      });
      
      const imgData = canvas.toDataURL('image/png', 1.0);
      pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight, undefined, 'FAST');
      pdf.save('Gianluca_Grassi_Resume.pdf');
    } catch (error) {
      console.error('Error generating PDF:', error);
    } finally {
      setIsDownloading(false);
    }
  };

  const SectionHeader = ({ children }: { children: React.ReactNode }) => (
    <h3 className="text-[10px] uppercase tracking-[0.4em] text-zinc-400 font-bold mb-8">{children}</h3>
  );

  const ProjectItem = ({ title, meta, bullets }: { title: string, meta: string, bullets: string[] }) => (
    <div className="mb-12">
      <h4 className="text-lg font-bold text-zinc-900 mb-1">{title}</h4>
      <p className="text-[11px] text-zinc-400 font-medium mb-4">{meta}</p>
      <ul className="space-y-3">
        {bullets.map((bullet, i) => (
          <li key={i} className="flex gap-3 text-[13px] leading-relaxed text-zinc-600">
            <span className="text-zinc-400">→</span>
            <span>{bullet}</span>
          </li>
        ))}
      </ul>
    </div>
  );

  const SidebarSection = ({ title, children }: { title: string, children: React.ReactNode }) => (
    <div className="mb-12">
      <SectionHeader>{title}</SectionHeader>
      {children}
    </div>
  );

  const SkillItem = ({ label, items }: { label: string, items: string }) => (
    <div className="mb-6">
      <h5 className="text-[13px] font-bold text-zinc-900 mb-1">{label}</h5>
      <p className="text-[13px] text-zinc-500 leading-relaxed">{items}</p>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f5f2ed] text-[#1a1a1a] selection:bg-black selection:text-white font-sans pb-32 relative">
      {/* Minimal Back Button */}
      {onBack && (
        <div className="max-w-[1000px] mx-auto px-6 pt-12 no-print">
          <button 
            onClick={onBack}
            className="text-[10px] uppercase tracking-[0.3em] font-mono text-zinc-400 hover:text-black transition-colors"
          >
            ← Back to site
          </button>
        </div>
      )}

      <div ref={resumeRef} ref-resume-container="" className="bg-[#f5f2ed]">
        <header className="max-w-[1000px] mx-auto px-5 md:px-6 pt-20 md:pt-32 text-center">
          <h1 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-4">
            Gianluca Grassi
          </h1>
          <p className="text-lg md:text-xl font-medium tracking-tight text-zinc-800 mb-12">
            Revenue-Centered Product Designer
          </p>
          
          <div className="flex flex-col md:flex-row justify-between items-center border-y border-zinc-200 py-6 text-[11px] uppercase tracking-widest text-zinc-500 font-medium gap-4">
            <span className="text-center md:text-left">Languages · Italian Native · English Upper-Intermediate</span>
            <a href="mailto:gianlucagrassi97@icloud.com" className="hover:text-black transition-colors">gianlucagrassi97@icloud.com</a>
          </div>
        </header>

        <main className="max-w-[1000px] mx-auto px-5 md:px-6 mt-20">
          {/* Bio Section */}
          <div className="mb-24">
            <SectionHeader>Bio</SectionHeader>
            <p className="text-lg md:text-xl text-zinc-700 leading-relaxed font-light max-w-4xl">
              Product designer with a focus on activation, retention, and revenue architecture. I start every project by finding the points at which a product loses business value and then set out to fix the problem by design. Currently based in Milan but open to remote work and relocation worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24">
            {/* Left Column: Projects */}
            <div className="md:col-span-7">
              <SectionHeader>Projects</SectionHeader>
              
              <ProjectItem 
                title="Lead Product Designer"
                meta="Independent Project · 2024 · Operra — Workflow Automation Platform"
                bullets={[
                  "Identified activation drop-off as the core revenue blocker and restructured the onboarding flow to reduce time-to-value.",
                  "Introduced a modular component architecture to align design decisions with engineering feasibility and business growth."
                ]}
              />

              <ProjectItem 
                title="Product Design Lead — Concept"
                meta="Independent Project · 2024 · Thesis AI — Decision Engine"
                bullets={[
                  "Designed an AI-native decision layer that transforms fragmented startup signals into structured, explainable recommendations.",
                  "Prioritized transparency over automation speed, introducing a human-in-the-loop approval system to build founder trust."
                ]}
              />

              <ProjectItem 
                title="Lead Product Designer"
                meta="Independent Project · 2024 · Novra — Crypto Exchange Risk System"
                bullets={[
                  "Reframed the product from a PnL-focused interface to an exposure-first system, surfacing liquidation risk before it became critical.",
                  "Introduced scenario simulation and a volatility mode to help leveraged traders make informed decisions under market stress."
                ]}
              />

              <ProjectItem 
                title="Lead Product Designer"
                meta="Independent Project · 2024 · Sentinel — Fraud Operations System"
                bullets={[
                  "Replaced a fragmented multi-tab review interface with a structured decision workflow, eliminating non-value-add analyst tasks.",
                  "Designed a signal prioritization model and escalation governance layer to reduce circular case transfers and operational cost."
                ]}
              />
            </div>

            {/* Right Column: Sidebar */}
            <div className="md:col-span-5">
              <SidebarSection title="Skills">
                <SkillItem label="Design" items="Figma, Prototyping, Design Systems, UX Research" />
                <SkillItem label="Visual" items="Adobe Photoshop, Illustrator, InDesign, After Effects" />
                <SkillItem label="Strategy" items="Revenue Architecture, Activation & Retention, ROI Frameworks" />
                <SkillItem label="Development" items="HTML / CSS, JavaScript fundamentals, AI-assisted coding" />
                <SidebarSection title="AI Tools">
                  <p className="text-[13px] text-zinc-500 leading-relaxed">Google AI Studio, Claude, Midjourney, Perplexity</p>
                </SidebarSection>
              </SidebarSection>

              <SidebarSection title="Education">
                <h5 className="text-[13px] font-bold text-zinc-900 mb-1">Graphic Arts & Visual Communication</h5>
                <p className="text-[13px] text-zinc-500">Istituto Rizzoli, Milan</p>
                <p className="text-[11px] text-zinc-400 mt-1">2015 — 2016</p>
              </SidebarSection>

              <SidebarSection title="Certifications">
                <h5 className="text-[13px] font-bold text-zinc-900 mb-1">Google UX Design Professional Certificate</h5>
                <p className="text-[13px] text-zinc-500">Google / Coursera · 7 Courses</p>
                <p className="text-[11px] text-zinc-400 mt-1">Dec 2025</p>
              </SidebarSection>

              <SidebarSection title="Portfolio">
                <p className="text-[13px] font-bold text-zinc-900">grassigianluca.com</p>
              </SidebarSection>

              <SidebarSection title="Availability">
                <h5 className="text-[13px] font-bold text-zinc-900 mb-1">Currently available</h5>
                <p className="text-[11px] text-zinc-400 uppercase tracking-widest">Remote · Relocation · Global · CEST / UTC+1</p>
              </SidebarSection>
            </div>
          </div>
        </main>
      </div>

      {/* Floating Download Button */}
      <div 
        className={`fixed bottom-12 left-1/2 -translate-x-1/2 transition-all duration-500 no-print z-50 ${
          showDownload ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <button 
          onClick={handleDownload}
          disabled={isDownloading}
          className="bg-black text-white px-8 py-4 rounded-full flex items-center gap-3 shadow-2xl hover:scale-105 transition-transform active:scale-95 group disabled:opacity-50 disabled:scale-100"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] font-bold">
            {isDownloading ? 'Generating...' : 'Download PDF'}
          </span>
          {!isDownloading && <ArrowDown size={16} className="group-hover:translate-y-1 transition-transform" />}
        </button>
      </div>
    </div>
  );
};

export default Resume;

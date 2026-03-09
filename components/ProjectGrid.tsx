import React from 'react';
import { PROJECTS } from '../constants';
import ProjectCard from './ProjectCard';

interface ProjectGridProps {
  onViewCaseStudy: (projectId: string) => void;
}

const ProjectGrid: React.FC<ProjectGridProps> = ({ onViewCaseStudy }) => {
  return (
    <section id="work" className="py-24 md:py-40 bg-black">
      <div className="max-w-[1440px] mx-auto px-5 md:px-12">
        {/* Work Header with Philosophy Quote */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-24 reveal">
          <div className="space-y-2">
            <h2 className="text-3xl md:text-5xl font-light uppercase tracking-tighter leading-[0.85]">
              Selected <br/> <span className="text-zinc-500 italic font-light normal-case">Works</span>
            </h2>
          </div>
          
          <div className="max-w-md md:border-l border-zinc-800 md:pl-8 py-1 reveal delay-100">
            <p className="text-zinc-300 text-sm md:text-base font-light leading-relaxed italic">
              "I believe the role of product design is not just to improve what exists, but to redefine how it performs."
            </p>
          </div>

          <div className="flex flex-col items-start md:items-end reveal delay-200">
            <p className="text-zinc-500 text-[9px] uppercase tracking-[0.4em] font-mono mb-1">Archive</p>
            <p className="text-zinc-300 text-xs font-mono">2022 &mdash; 2026</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-x-12 md:gap-y-12">
          {PROJECTS.map((project, index) => (
            <div key={project.id} className={`w-full reveal delay-${(index % 2) * 100 + 100}`}>
              <ProjectCard 
                project={project} 
                onViewCaseStudy={() => onViewCaseStudy(project.id)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectGrid;
import React from 'react';
import { Project } from '../types';

interface ProjectCardProps {
  project: Project;
  onViewCaseStudy?: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onViewCaseStudy }) => {
  return (
    <div 
      onClick={() => {
        if (onViewCaseStudy) onViewCaseStudy();
      }}
      className={`group relative w-full aspect-video overflow-hidden rounded-2xl bg-zinc-900 smooth-transition hover:scale-[1.02] ${onViewCaseStudy ? 'cursor-pointer' : 'cursor-default'}`}
    >
      <img
        src={project.image}
        alt={project.title}
        referrerPolicy="no-referrer"
        style={{ objectPosition: project.objectPosition || 'center' }}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-40 smooth-transition"
      />
      
      {/* Hover/Active State Overlay */}
      <div className="absolute inset-0 flex flex-col justify-end p-8 opacity-0 group-hover:opacity-100 smooth-transition translate-y-4 group-hover:translate-y-0 bg-gradient-to-t from-black/80 to-transparent">
        <p className="text-xs uppercase tracking-widest text-zinc-300 mb-2">{project.category}</p>
        <h3 className="text-2xl font-bold mb-1 text-white">{project.title}</h3>
        <p className="text-lg font-bold text-white mb-4">{project.roi}</p>
        <p className="text-sm text-zinc-200 font-light mb-6 max-w-xs">{project.description}</p>
      </div>

      {/* Persistent Title for Mobile/Default */}
      <div className="absolute inset-x-0 bottom-0 p-8 pt-24 bg-gradient-to-t from-black/100 via-black/60 to-transparent group-hover:opacity-0 smooth-transition">
        <h3 className="text-xl font-bold uppercase tracking-tight text-white">{project.title}</h3>
        <p className="text-xs text-zinc-300 font-mono font-medium">{project.roi}</p>
      </div>
    </div>
  );
};

export default ProjectCard;
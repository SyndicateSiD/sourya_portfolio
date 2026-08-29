import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Github,
  ExternalLink,
  CheckCircle2,
  Calendar,
  Target,
  Lightbulb,
  UserCheck,
} from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/75 backdrop-blur-md"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-3xl bg-[#12131A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-8 text-left"
        >
          {/* Header */}
          <div className="p-6 sm:p-8 border-b border-white/10 flex items-start justify-between gap-4 bg-[#090A0F]/70">
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-[#FF6B6B]/15 text-[#FF6B6B] border border-[#FF6B6B]/30">
                  {project.category}
                </span>
                <span className="flex items-center gap-1 text-xs font-mono text-zinc-400">
                  <Calendar className="w-3 h-3 text-zinc-400" />
                  {project.year}
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
                {project.title}
              </h3>
              <p className="text-sm text-zinc-400 mt-1 font-sans">{project.tagline}</p>
            </div>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-white hover:border-white/20 transition-colors cursor-pointer"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 sm:p-8 space-y-6 max-h-[70vh] overflow-y-auto">
            {/* Problem & Solution Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-wider mb-2 font-semibold">
                  <Target className="w-4 h-4" />
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.problem}
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#090A0F] border border-white/10">
                <div className="flex items-center gap-2 text-xs font-mono text-white uppercase tracking-wider mb-2 font-semibold">
                  <Lightbulb className="w-4 h-4 text-[#FF8A65]" />
                  <span>The Solution</span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </div>

            {/* My Contribution / Architecture */}
            <div className="p-5 rounded-2xl bg-[#090A0F] border border-[#FF6B6B]/30">
              <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-wider mb-2 font-semibold">
                <UserCheck className="w-4 h-4" />
                <span>Core Engineering Contribution</span>
              </div>
              <p className="text-sm text-zinc-200 leading-relaxed">
                {project.contribution}
              </p>
            </div>

            {/* Key Functionality & Features */}
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                Key Functionality
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {project.features.map((feature, idx) => (
                  <div
                    key={idx}
                    className="flex items-start gap-2.5 p-3.5 rounded-xl bg-[#090A0F] border border-white/10 text-sm text-zinc-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Technologies */}
            <div>
              <h4 className="text-xs font-mono uppercase text-zinc-400 tracking-wider mb-3">
                Technologies &amp; Tools
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Actions */}
          <div className="p-6 bg-[#090A0F]/80 border-t border-white/10 flex flex-wrap items-center justify-between gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-[#12131A] hover:bg-[#1E202E] text-white border border-white/10 hover:border-[#FF6B6B]/50 font-medium text-xs font-mono transition-all cursor-pointer shadow-sm"
            >
              <Github className="w-4 h-4 text-[#FF6B6B]" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 ml-1 text-zinc-400" />
            </a>

            <button
              onClick={onClose}
              className="px-5 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 text-white font-medium text-xs transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

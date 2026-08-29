import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  FolderGit2,
  Github,
  ArrowUpRight,
  Maximize2,
} from 'lucide-react';
import { PROJECTS } from '../data/portfolioData';
import { ProjectItem } from '../types';
import { ProjectModal } from './ProjectModal';

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeModalProject, setActiveModalProject] = useState<ProjectItem | null>(null);

  const categories = ['All', ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((p) => p.category === selectedCategory);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Engineering Implementations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Featured Projects
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl font-sans mt-2">
            Computer vision gesture controls, AI recommender systems, security verification utilities, and web engineering.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#12131A] rounded-2xl border border-white/10 self-start md:self-auto shadow-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF6B6B] text-white font-bold shadow-lg shadow-[#FF6B6B]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Project Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, idx) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: idx * 0.08 }}
            className="bg-[#12131A] hover:border-white/20 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between group relative cursor-pointer transition-all duration-300 shadow-xl hover:shadow-2xl"
            onClick={() => setActiveModalProject(project)}
          >
            <div>
              {/* Card Top Row */}
              <div className="flex items-center justify-between gap-2 mb-4 pb-3 border-b border-white/10">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#090A0F] text-[#FF6B6B] border border-[#FF6B6B]/30">
                  {project.category}
                </span>

                <div className="flex items-center gap-2">
                  <span className="text-xs font-mono text-zinc-400">{project.year}</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveModalProject(project);
                    }}
                    className="p-1 rounded text-zinc-400 hover:text-white"
                    title="Quick Preview"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Title & Tagline */}
              <h3 className="text-lg font-bold text-white group-hover:text-[#FF6B6B] transition-colors mb-2 tracking-tight flex items-center justify-between">
                <span>{project.title}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-[#FF6B6B] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all shrink-0 ml-1" />
              </h3>

              <p className="text-sm text-zinc-400 leading-relaxed mb-6 font-normal line-clamp-3">
                {project.tagline}
              </p>
            </div>

            <div>
              {/* Tech Badges */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {project.technologies.slice(0, 4).map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-0.5 rounded-lg bg-[#090A0F] border border-white/10 text-[10px] font-mono text-zinc-300"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 4 && (
                  <span className="px-1.5 py-0.5 rounded-lg bg-[#090A0F] text-[10px] font-mono text-zinc-500">
                    +{project.technologies.length - 4}
                  </span>
                )}
              </div>

              {/* Action Links */}
              <div className="pt-3 border-t border-white/10 flex items-center justify-between">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-1.5 text-xs font-mono text-zinc-400 hover:text-white transition-colors"
                >
                  <Github className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>GitHub Repo</span>
                </a>

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveModalProject(project);
                  }}
                  className="text-xs font-mono text-[#FF6B6B] font-medium hover:underline cursor-pointer"
                >
                  Breakdown →
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Project Details Modal */}
      <ProjectModal
        project={activeModalProject}
        onClose={() => setActiveModalProject(null)}
      />
    </section>
  );
};

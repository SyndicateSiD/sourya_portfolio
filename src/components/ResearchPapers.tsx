import React from 'react';
import { BookOpen, ArrowUpRight, Bookmark } from 'lucide-react';
import { RESEARCH_PAPERS } from '../data/portfolioData';

export const ResearchPapers: React.FC = () => {
  return (
    <section id="research" className="py-20 px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] font-semibold uppercase tracking-widest mb-2">
            <BookOpen className="w-3.5 h-3.5" />
            <span>Academic Publications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Research &amp; Publications
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          Peer-reviewed book chapters and literature contributions in Computer Vision and Deep Learning.
        </p>
      </div>

      {/* Simplified, Clean Paper Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {RESEARCH_PAPERS.map((paper) => (
          <div
            key={paper.id}
            className="bg-[#12131A] border border-white/10 rounded-2xl p-6 sm:p-7 shadow-xl hover:shadow-2xl hover:border-white/20 transition-all duration-200 flex flex-col justify-between"
          >
            <div>
              {/* Publisher & Year Badge */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium bg-[#090A0F] text-zinc-200 border border-white/10">
                  <Bookmark className="w-3 h-3 text-[#FF6B6B]" />
                  {paper.publisher} ({paper.publicationYear})
                </span>
                {paper.doi && (
                  <span className="text-[11px] font-mono text-zinc-400 truncate max-w-[140px]">
                    DOI: {paper.doi.substring(0, 16)}...
                  </span>
                )}
              </div>

              {/* Title */}
              <h3 className="text-lg sm:text-xl font-bold text-white mb-3 leading-snug tracking-tight">
                {paper.title}
              </h3>

              {/* Authors & Focus */}
              <p className="text-xs font-mono text-zinc-400 mb-3">
                By <strong className="text-zinc-200">{paper.authors.join(', ')}</strong> • <span className="text-[#FF8A65] font-semibold">{paper.focus}</span>
              </p>

              {/* Concise 1-2 Lines Summary */}
              <p className="text-sm text-zinc-300 leading-relaxed mb-5">
                {paper.summary}
              </p>

              {/* Technology Tags */}
              <div className="flex flex-wrap gap-1.5 mb-6">
                {paper.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-lg text-xs font-mono bg-[#090A0F] text-zinc-300 border border-white/10"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Direct Publisher Link Action */}
            <div className="pt-4 border-t border-white/10 flex items-center justify-between">
              <span className="text-xs font-mono text-zinc-400">
                Indexed &amp; Peer Reviewed
              </span>
              <a
                href={paper.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#FF6B6B] hover:bg-[#FF8A65] text-white text-xs font-semibold font-mono transition-colors shadow-lg shadow-[#FF6B6B]/20"
              >
                <span>Read Publication</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

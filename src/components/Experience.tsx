import React from 'react';
import { motion } from 'motion/react';
import {
  Briefcase,
  Calendar,
  MapPin,
  ExternalLink,
  CheckCircle2,
  Award,
} from 'lucide-react';
import { EXPERIENCES } from '../data/portfolioData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Career History</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Professional Experience
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          Spanning applied machine learning vision research at Blu Cucoon Digital and enterprise systems QA at Coforge.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative border-l-2 border-white/10 ml-3 sm:ml-6 space-y-10">
        {EXPERIENCES.map((exp, idx) => {
          return (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="relative pl-6 sm:pl-10"
            >
              {/* Node Icon */}
              <div
                className={`absolute -left-[17px] top-1.5 w-8 h-8 rounded-full flex items-center justify-center border transition-all ${
                  exp.isCurrent
                    ? 'bg-[#FF6B6B] text-white border-white/40 shadow-lg shadow-[#FF6B6B]/30'
                    : 'bg-[#12131A] text-zinc-400 border-white/10'
                }`}
              >
                <Briefcase className="w-3.5 h-3.5" />
              </div>

              {/* Card */}
              <div
                className={`rounded-3xl p-6 sm:p-8 transition-all bg-[#12131A] border border-white/10 shadow-xl hover:shadow-2xl ${
                  exp.isCurrent ? 'border-[#FF6B6B]/50 ring-1 ring-[#FF6B6B]/20' : ''
                }`}
              >
                {/* Header Row */}
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                  <div>
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                        {exp.role}
                      </h3>
                      <span className="text-zinc-400 font-normal">at</span>
                      {exp.companyUrl ? (
                        <a
                          href={exp.companyUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-lg sm:text-xl font-bold text-[#FF6B6B] hover:text-[#FF8A65] flex items-center gap-1 transition-colors"
                        >
                          <span>{exp.company}</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      ) : (
                        <span className="text-lg sm:text-xl font-bold text-[#FF6B6B]">
                          {exp.company}
                        </span>
                      )}

                      {exp.isCurrent && (
                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#34D399] mr-1.5 animate-pulse" />
                          Current Role
                        </span>
                      )}
                    </div>

                    {exp.projectContext && (
                      <p className="text-xs sm:text-sm font-mono text-zinc-400 font-medium">
                        {exp.projectContext}
                      </p>
                    )}
                  </div>

                  <div className="flex flex-wrap items-center gap-x-4 gap-y-1 font-mono text-xs text-zinc-400 shrink-0">
                    <span className="flex items-center gap-1 text-zinc-200 font-medium">
                      <Calendar className="w-3.5 h-3.5 text-[#FF6B6B]" />
                      <span>{exp.period}</span>
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{exp.location}</span>
                    </span>
                    {exp.certificateUrl && (
                      <a
                        href={exp.certificateUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#090A0F] border border-white/10 text-[#FF6B6B] hover:text-[#FF8A65] transition-colors text-[11px] font-medium"
                      >
                        <Award className="w-3 h-3" />
                        <span>Credential</span>
                        <ExternalLink className="w-2.5 h-2.5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {exp.description}
                </p>

                {/* Metrics */}
                {exp.metrics && exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-6 p-4 rounded-2xl bg-[#090A0F] border border-white/10">
                    {exp.metrics.map((m, mIdx) => (
                      <div key={mIdx} className="text-left">
                        <div className="text-[10px] font-mono text-zinc-400 uppercase tracking-tight">
                          {m.label}
                        </div>
                        <div className="text-base sm:text-lg font-mono font-bold text-[#FF6B6B]">
                          {m.value}
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Highlights */}
                <div className="space-y-2.5 mb-6">
                  {exp.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-zinc-200">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <span className="leading-relaxed">{highlight}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Chips */}
                <div className="flex flex-wrap items-center gap-1.5 pt-4 border-t border-white/10">
                  <span className="text-[11px] font-mono text-zinc-400 mr-2 uppercase">
                    Tech:
                  </span>
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-0.5 rounded-lg bg-[#090A0F] border border-white/10 text-[10px] font-mono text-zinc-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

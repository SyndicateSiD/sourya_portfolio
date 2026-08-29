import React from 'react';
import { motion } from 'motion/react';
import { GraduationCap, Calendar, MapPin, Award, CheckCircle2, BookOpen } from 'lucide-react';
import { EDUCATION } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Qualifications</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Education
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          Rigorous foundational degree in Computer Science and Systems Engineering from KIIT University.
        </p>
      </div>

      {/* Education Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        <div className="lg:col-span-8 space-y-6">
          {EDUCATION.map((edu, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className={`rounded-3xl p-6 sm:p-8 border bg-[#12131A] shadow-xl hover:shadow-2xl transition-all ${
                idx === 0
                  ? 'border-[#FF6B6B]/40 ring-1 ring-[#FF6B6B]/20'
                  : 'border-white/10'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-4 mb-4 border-b border-white/10">
                <div>
                  <h3 className="text-xl font-bold text-white tracking-tight">
                    {edu.institution}
                  </h3>
                  <p className="text-sm font-semibold text-[#FF6B6B] mt-0.5">{edu.degree}</p>
                </div>

                <div className="flex flex-wrap sm:flex-col sm:items-end gap-1.5 font-mono text-xs text-zinc-400 shrink-0">
                  <span className="flex items-center gap-1 text-zinc-200 font-medium">
                    <Calendar className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    <span>{edu.period}</span>
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-zinc-500" />
                    <span>{edu.location}</span>
                  </span>
                </div>
              </div>

              {/* Highlights */}
              {edu.highlights && edu.highlights.length > 0 && (
                <div className="space-y-2">
                  {edu.highlights.map((h, hIdx) => (
                    <div key={hIdx} className="flex items-start gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>

        {/* Coursework Side Panel */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35, delay: 0.15 }}
          className="lg:col-span-4 p-6 sm:p-7 rounded-3xl bg-[#12131A] border border-white/10 flex flex-col justify-between self-start shadow-xl"
        >
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-zinc-400 uppercase tracking-wider mb-4 font-semibold">
              <BookOpen className="w-4 h-4 text-[#FF6B6B]" />
              <span>Core Academic Coursework</span>
            </div>
            <div className="flex flex-wrap gap-1.5 mb-6">
              {[
                'Data Structures & Algorithms',
                'Deep Learning & Neural Nets',
                'Computer Vision',
                'Database Management Systems',
                'Operating Systems',
                'Object-Oriented Programming',
                'Software Engineering',
                'Computer Networks',
              ].map((course) => (
                <span
                  key={course}
                  className="px-3 py-1 rounded-xl bg-[#090A0F] border border-white/10 text-xs font-mono text-zinc-300"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-white/10 text-xs font-mono text-[#FF6B6B] font-semibold flex items-center gap-2">
            <Award className="w-4 h-4 text-[#FF6B6B] shrink-0" />
            <span>Graduated with First Class Honors</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

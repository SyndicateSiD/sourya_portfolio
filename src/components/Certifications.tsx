import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Award, ExternalLink, ShieldCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState<string>('All');

  const categories = ['All', 'Cloud', 'AI & Data', 'Salesforce', 'Core CS & PM'];

  const filteredCerts =
    selectedCat === 'All'
      ? CERTIFICATIONS
      : CERTIFICATIONS.filter((c) => c.category === selectedCat);

  return (
    <section id="certifications" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <Award className="w-3.5 h-3.5" />
            <span>Accreditations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Certifications &amp; Credentials
          </h2>
          <p className="text-zinc-400 text-sm max-w-2xl font-sans mt-2">
            Industry accreditations across Cloud computing, Artificial Intelligence, and Software Engineering.
          </p>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-[#12131A] rounded-2xl border border-white/10 self-start md:self-auto shadow-md">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                selectedCat === cat
                  ? 'bg-[#FF6B6B] text-white font-bold shadow-lg shadow-[#FF6B6B]/20'
                  : 'text-zinc-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Certifications Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {filteredCerts.map((cert, idx) => (
          <motion.div
            key={cert.id}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: idx * 0.04 }}
            className={`p-6 rounded-3xl border transition-all flex flex-col justify-between shadow-xl hover:shadow-2xl bg-[#12131A] ${
              cert.highlight
                ? 'border-[#FF6B6B]/40 ring-1 ring-[#FF6B6B]/20'
                : 'border-white/10'
            }`}
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-3">
                <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-medium bg-[#090A0F] border border-white/10 text-zinc-300">
                  {cert.category}
                </span>
                {cert.highlight && (
                  <span className="text-[10px] font-mono text-[#34D399] bg-[#34D399]/15 px-2 py-0.5 rounded-full border border-[#34D399]/30 flex items-center gap-1 font-semibold">
                    <ShieldCheck className="w-3 h-3 text-[#34D399]" />
                    <span>Verified</span>
                  </span>
                )}
              </div>

              <h3 className="text-sm sm:text-base font-bold text-white tracking-tight mb-2">
                {cert.name}
              </h3>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs font-mono text-zinc-400">
              <span className="truncate max-w-[180px]">{cert.issuer}</span>
              {cert.credentialUrl ? (
                <a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#FF6B6B] hover:text-[#FF8A65] font-semibold transition-colors font-mono text-[11px] group/link cursor-pointer"
                >
                  <span>Verify</span>
                  <ExternalLink className="w-3 h-3 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                </a>
              ) : (
                <Award className="w-4 h-4 text-zinc-600" />
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

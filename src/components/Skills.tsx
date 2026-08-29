import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain,
  Sparkles,
  Code2,
  ShieldCheck,
  Wrench,
  Info,
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/portfolioData';
import { SkillItem } from '../types';

export const Skills: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('all');
  const [selectedSkill, setSelectedSkill] = useState<SkillItem | null>(null);

  const getCategoryIcon = (iconName: string) => {
    switch (iconName) {
      case 'Brain':
        return Brain;
      case 'Sparkles':
        return Sparkles;
      case 'Code2':
        return Code2;
      case 'ShieldCheck':
        return ShieldCheck;
      case 'Wrench':
        return Wrench;
      default:
        return Code2;
    }
  };

  const filteredCategories =
    activeTab === 'all'
      ? SKILL_CATEGORIES
      : SKILL_CATEGORIES.filter((c) => c.id === activeTab);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies &amp; Stack</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Skills &amp; Applied Tooling
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          Spanning Computer Vision pipelines, Deep Learning architectures, Enterprise Test Automation, and Cloud ecosystems.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 overflow-x-auto">
        <button
          onClick={() => setActiveTab('all')}
          className={`px-4 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
            activeTab === 'all'
              ? 'bg-[#FF6B6B] text-white font-bold shadow-lg shadow-[#FF6B6B]/20'
              : 'bg-[#12131A] text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
          }`}
        >
          All Categories ({SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0)})
        </button>

        {SKILL_CATEGORIES.map((cat) => {
          const Icon = getCategoryIcon(cat.iconName);
          const isActive = activeTab === cat.id;
          return (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-mono transition-all cursor-pointer ${
                isActive
                  ? 'bg-[#FF6B6B] text-white font-bold shadow-lg shadow-[#FF6B6B]/20'
                  : 'bg-[#12131A] text-zinc-400 border border-white/10 hover:text-white hover:border-white/20'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{cat.name}</span>
              <span className="opacity-75 text-[10px]">({cat.skills.length})</span>
            </button>
          );
        })}
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((cat) => {
          const Icon = getCategoryIcon(cat.iconName);
          return (
            <motion.div
              key={cat.id}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-[#12131A] border border-white/10 rounded-3xl p-6 flex flex-col justify-between shadow-xl hover:shadow-2xl transition-shadow"
            >
              <div>
                <div className="flex items-center gap-3 pb-3 mb-4 border-b border-white/10">
                  <div className="p-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-[#FF6B6B]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base tracking-tight">
                      {cat.name}
                    </h3>
                    <p className="text-[11px] text-zinc-400 font-mono">{cat.description}</p>
                  </div>
                </div>

                {/* Skill Badges */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => {
                    const isSelected = selectedSkill?.name === skill.name;
                    return (
                      <div key={skill.name} className="relative group">
                        <button
                          onClick={() =>
                            setSelectedSkill(isSelected ? null : skill)
                          }
                          className={`px-3 py-1.5 rounded-xl text-xs font-mono transition-all text-left flex items-center gap-1.5 cursor-pointer ${
                            isSelected
                              ? 'bg-[#FF6B6B] text-white font-bold border-[#FF6B6B]'
                              : skill.isHighlight
                              ? 'bg-[#FF8A65]/15 text-[#FF8A65] border border-[#FF8A65]/30 hover:border-[#FF6B6B] hover:bg-[#FF8A65]/25 font-medium'
                              : 'bg-[#090A0F] text-zinc-300 border border-white/10 hover:border-white/20 hover:text-white'
                          }`}
                        >
                          <span>{skill.name}</span>
                          {skill.isHighlight && (
                            <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B6B]" />
                          )}
                        </button>

                        {/* Desktop Hover Tooltip */}
                        <div className="hidden lg:group-hover:block absolute z-30 bottom-full left-0 mb-2 w-64 p-3.5 rounded-xl bg-[#1E202E] border border-white/20 shadow-2xl text-left pointer-events-none">
                          <div className="flex items-center justify-between mb-1 pb-1 border-b border-white/10">
                            <span className="font-mono font-bold text-xs text-white">
                              {skill.name}
                            </span>
                            <span className="text-[10px] font-mono text-[#FF6B6B]">
                              {skill.category}
                            </span>
                          </div>
                          <p className="text-[11px] text-zinc-300 leading-normal">
                            {skill.context}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="mt-4 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-500">
                <span>{cat.skills.length} competencies</span>
                <span>Click for context</span>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Selected Skill Detail Callout */}
      <AnimatePresence>
        {selectedSkill && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            className="mt-6 p-4 sm:p-5 rounded-2xl bg-[#12131A] border border-[#FF6B6B]/40 shadow-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          >
            <div className="flex items-start gap-3">
              <div className="p-2 rounded-xl bg-[#FF6B6B]/15 text-[#FF6B6B] border border-[#FF6B6B]/30 shrink-0 mt-0.5">
                <Info className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="text-sm font-mono font-bold text-white">
                    {selectedSkill.name}
                  </h4>
                  <span className="text-xs font-mono px-2 py-0.5 rounded-full bg-[#090A0F] border border-white/10 text-[#FF6B6B]">
                    {selectedSkill.category}
                  </span>
                </div>
                <p className="text-sm text-zinc-300 leading-relaxed">
                  {selectedSkill.context}
                </p>
              </div>
            </div>

            <button
              onClick={() => setSelectedSkill(null)}
              className="text-xs font-mono text-zinc-400 hover:text-white px-3 py-1.5 rounded-xl bg-[#090A0F] border border-white/10 self-end sm:self-center cursor-pointer"
            >
              Dismiss
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

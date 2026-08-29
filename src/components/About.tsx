import React from 'react';
import { motion } from 'motion/react';
import {
  Brain,
  Eye,
  ShieldCheck,
  Sparkles,
  BookOpen,
} from 'lucide-react';

export const About: React.FC = () => {
  const pillars = [
    {
      title: 'Computer Vision & Spatial AI',
      subtitle: 'YOLO Detection & MediaPipe Tracking',
      description:
        'Designing real-time vision pipelines including YOLOv8 object detection for agricultural health diagnostics and 21-point MediaPipe hand landmark tracking for contactless spatial interfaces.',
      icon: Eye,
      color: 'text-[#FF6B6B]',
      bg: 'bg-[#FF6B6B]/15',
      border: 'border-[#FF6B6B]/30',
      tech: ['YOLOv8', 'OpenCV', 'MediaPipe', 'LabelImg', 'Spatial Convolutions'],
    },
    {
      title: 'Machine Learning & Deep Learning',
      subtitle: 'Neural Architectures & Statistical Modeling',
      description:
        'Constructing predictive neural architectures including LSTM networks for multi-step time-series forecasting, Multiple Linear Regression for agricultural yield estimation, and statistical feature engineering.',
      icon: Brain,
      color: 'text-[#818CF8]',
      bg: 'bg-[#818CF8]/15',
      border: 'border-[#818CF8]/30',
      tech: ['LSTM RNNs', 'Multiple Linear Regression', 'Time-Series', 'PyTorch', 'Pandas & NumPy'],
    },
    {
      title: 'Academic Research & Publications',
      subtitle: 'Peer-Reviewed Book Chapters (2024)',
      description:
        'Author of published peer-reviewed research in Taylor & Francis (Sign Language Gesture Recognition via Vision CNNs) and Springer Nature (Financial Market Time-Series Prediction with LSTM cells).',
      icon: BookOpen,
      color: 'text-[#34D399]',
      bg: 'bg-[#34D399]/15',
      border: 'border-[#34D399]/30',
      tech: ['Taylor & Francis CRC Press', 'Springer Nature', 'Academic Methodology', 'BibTeX Citations'],
    },
    {
      title: 'Enterprise Quality & Systems Assurance',
      subtitle: 'Coforge QA, Automation & Reliability',
      description:
        'Rigorous testing for critical airline cargo management systems at Coforge, implementing Selenium WebDriver automation, 100% Postman API coverage, and rapid JIRA defect triage (<48h SLA).',
      icon: ShieldCheck,
      color: 'text-[#FF8A65]',
      bg: 'bg-[#FF8A65]/15',
      border: 'border-[#FF8A65]/30',
      tech: ['Selenium WebDriver', 'Postman REST APIs', 'JIRA Defect Tracking', 'Agile / Scrum'],
    },
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Profile &amp; Technical Foundations</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Background &amp; Engineering Pillars
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          B.Tech in Computer Science &amp; Systems Engineering from KIIT. Bridging deep learning research with production-grade engineering.
        </p>
      </div>

      {/* 4 Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {pillars.map((pillar, idx) => {
          const Icon = pillar.icon;
          return (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: idx * 0.08 }}
              className="bg-[#12131A] hover:border-white/20 border border-white/10 rounded-3xl p-6 sm:p-7 flex flex-col justify-between transition-all duration-300 shadow-xl hover:shadow-2xl"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className={`p-3 rounded-2xl ${pillar.bg} ${pillar.border} border`}>
                    <Icon className={`w-5 h-5 ${pillar.color}`} />
                  </div>
                  <div>
                    <h3 className="text-base sm:lg font-bold text-white tracking-tight">
                      {pillar.title}
                    </h3>
                    <p className="text-xs font-mono text-zinc-400">{pillar.subtitle}</p>
                  </div>
                </div>

                <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                  {pillar.description}
                </p>
              </div>

              {/* Tech Chips */}
              <div className="flex flex-wrap gap-1.5 pt-4 border-t border-white/10">
                {pillar.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2.5 py-1 rounded-lg bg-[#090A0F] border border-white/10 text-[11px] font-mono text-zinc-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Quote / Summary Banner */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-8 p-5 rounded-2xl bg-[#12131A] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-lg"
      >
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B] shrink-0" />
          <p className="text-xs sm:text-sm font-mono text-zinc-200">
            <span className="text-[#FF6B6B] font-semibold">Core Philosophy:</span> Applied Machine Learning thrives when combined with deep statistical rigor, empirical research publications, and production engineering excellence.
          </p>
        </div>

        <div className="flex items-center gap-3 text-xs font-mono text-zinc-400 shrink-0">
          <span className="text-white font-semibold">KIIT Alum</span>
          <span>•</span>
          <span>Coforge</span>
        </div>
      </motion.div>
    </section>
  );
};

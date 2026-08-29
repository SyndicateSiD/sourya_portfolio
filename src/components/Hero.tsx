import React, { useState } from 'react';
import { motion } from 'motion/react';
import {
  ArrowDown,
  FileText,
  Github,
  Linkedin,
  Mail,
  Brain,
  ShieldCheck,
  CheckCircle2,
  Terminal,
  Activity,
  Sparkles,
  Eye,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface HeroProps {
  onOpenResume: () => void;
  onOpenTerminal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenResume, onOpenTerminal }) => {
  const [telemetryTab, setTelemetryTab] = useState<'qa' | 'ds'>('ds');

  const qaMetrics = [
    { title: 'Cargo Management Reliability', metric: '99.9%', status: 'Production SLA', tag: 'COSYS+ / Cathay' },
    { title: 'API Endpoint Validation Coverage', metric: '100%', status: 'Postman Verified', tag: '15+ Releases' },
    { title: 'Selenium Automated Regression Suite', metric: '40%', status: 'Manual Saved', tag: '2-Day Sprint Gain' },
    { title: 'JIRA Production Defect Resolution SLA', metric: '150+', status: '< 48h Resolution', tag: 'Resolved' },
  ];

  const dsMetrics = [
    { title: 'YOLOv8 Plant Disease Recognition', metric: '94.2% mAP', status: 'Blu Cucoon Digital', tag: 'PyTorch' },
    { title: 'MediaPipe 21-Point Hand Spatial Tracker', metric: '30+ FPS', status: 'Taylor & Francis Paper', tag: 'OpenCV' },
    { title: 'LSTM Deep Time-Series Stock Predictor', metric: '0.0412 RMSE', status: 'Springer Nature Paper', tag: 'LSTM' },
    { title: 'Soil NPK Crop Yield Regression Estimator', metric: 'R² = 0.887', status: 'Multiple Linear Reg', tag: 'Pandas' },
  ];

  const handleScrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[92vh] flex items-center justify-center pt-32 pb-24 md:pt-36 md:pb-28 overflow-hidden bg-[#090A0F]"
    >
      {/* Ambient Aesthetic Glowing Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-gradient-to-tr from-[#FF6B6B]/15 via-[#818CF8]/10 to-[#34D399]/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute -bottom-10 right-10 w-80 h-80 bg-[#FF8A65]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 xl:gap-16 items-center">
          {/* Left Column: Core Positioning & Headline */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            {/* Top Eyebrow Tag */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-4 font-semibold"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Systems Assurance &amp; AI Engineering</span>
            </motion.div>

            {/* Name */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.08 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white my-6 sm:my-8"
            >
              {PERSONAL_INFO.name}
            </motion.h1>

            {/* Status Pill - Positioned cleanly below the Name */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.15 }}
              className="inline-flex flex-wrap items-center gap-2.5 px-4 py-2 rounded-full bg-[#12131A] border border-white/10 text-xs font-mono mb-6 shadow-lg backdrop-blur-md text-zinc-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#34D399] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#34D399]"></span>
              </span>
              <span className="font-semibold text-white">QA Engineer at {PERSONAL_INFO.currentCompany}</span>
              <span className="text-zinc-600 hidden sm:inline">•</span>
              <span className="text-[#FF8A65] font-mono text-[11px]">Cargo Management System (COSYS+)</span>
            </motion.div>

            {/* Highlighted Multi-Disciplinary Headline Chips */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.22 }}
              className="flex flex-wrap items-center gap-2.5 mb-8"
            >
              <span className="px-3.5 py-1.5 rounded-xl bg-[#FF6B6B]/15 border border-[#FF6B6B]/30 text-[#FF6B6B] font-mono font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                <Eye className="w-3.5 h-3.5 text-[#FF6B6B]" />
                <span>Computer Vision &amp; AI</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#818CF8]/15 border border-[#818CF8]/30 text-[#A5B4FC] font-mono font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5 text-[#818CF8]" />
                <span>Data Science &amp; ML</span>
              </span>
              <span className="px-3.5 py-1.5 rounded-xl bg-[#34D399]/15 border border-[#34D399]/30 text-[#6EE7B7] font-mono font-semibold text-xs sm:text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-[#34D399]" />
                <span>QA &amp; Test Automation</span>
              </span>
            </motion.div>

            {/* Bio Narrative */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.28 }}
              className="text-base sm:text-lg text-zinc-300 leading-relaxed max-w-2xl mb-10 font-normal"
            >
              Quality Assurance Engineer at <strong className="text-white font-semibold">Coforge</strong> ensuring enterprise platform reliability for airport cargo systems across automated regression pipelines, 100% API validation, and defect lifecycle governance — backed by an engineering background in <strong className="text-[#FF8A65] font-semibold">Data Science, ML &amp; Computer Vision</strong> from <strong className="text-[#A5B4FC] font-semibold">KIIT</strong>.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.32 }}
              className="flex flex-wrap items-center gap-3.5 sm:gap-4 mb-10 w-full sm:w-auto"
            >
              <button
                id="hero-vision-btn"
                onClick={() => handleScrollToSection('datascience')}
                className="w-full sm:w-auto px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#FF6B6B] to-[#FF8A65] hover:opacity-95 text-white font-bold text-sm transition-all duration-200 shadow-lg shadow-[#FF6B6B]/25 flex items-center justify-center gap-2 cursor-pointer group"
              >
                <Eye className="w-4 h-4 text-white" />
                <span>Explore Vision &amp; ML Lab</span>
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </button>

              <button
                id="hero-experience-btn"
                onClick={() => handleScrollToSection('experience')}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#12131A] hover:bg-[#1E202E] text-zinc-200 border border-white/10 hover:border-white/20 font-semibold text-xs sm:text-sm font-mono transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <ShieldCheck className="w-4 h-4 text-[#34D399]" />
                <span>QA &amp; Systems Experience</span>
              </button>

              <button
                id="hero-resume-btn"
                onClick={onOpenResume}
                className="w-full sm:w-auto px-5 py-3.5 rounded-xl bg-[#12131A] hover:bg-[#1E202E] text-zinc-300 hover:text-white border border-white/10 hover:border-white/20 font-medium text-xs sm:text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer shadow-sm"
              >
                <FileText className="w-4 h-4 text-[#FF8A65]" />
                <span>Resume (PDF)</span>
              </button>
            </motion.div>

            {/* Social & Contact Dock */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.4, delay: 0.4 }}
              className="flex items-center gap-3.5 pt-6 border-t border-white/10 w-full max-w-lg"
            >
              <span className="text-xs font-mono text-zinc-500 uppercase tracking-wider">Connect</span>

              <a
                href={PERSONAL_INFO.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/40 transition-all hover:scale-105 cursor-pointer shadow-sm"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
              >
                <Linkedin className="w-4 h-4" />
              </a>

              <a
                href={PERSONAL_INFO.social.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-white hover:border-white/30 transition-all hover:scale-105 cursor-pointer shadow-sm"
                aria-label="GitHub Profile"
                title="GitHub Profile"
              >
                <Github className="w-4 h-4" />
              </a>

              <a
                href={`mailto:${PERSONAL_INFO.email}`}
                className="p-2.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/40 transition-all hover:scale-105 cursor-pointer shadow-sm"
                aria-label="Email Souryadipta"
                title="Email Souryadipta"
              >
                <Mail className="w-4 h-4" />
              </a>

              <button
                onClick={onOpenTerminal}
                className="p-2.5 rounded-xl bg-[#12131A] border border-white/10 text-zinc-400 hover:text-[#FF6B6B] hover:border-[#FF6B6B]/40 transition-all hover:scale-105 cursor-pointer flex items-center gap-1.5 font-mono text-xs shadow-sm"
                title="Open Interactive Terminal CLI"
              >
                <Terminal className="w-4 h-4 text-[#FF6B6B]" />
                <span className="hidden sm:inline text-zinc-300">CLI</span>
              </button>

              <span className="text-xs font-mono text-zinc-400 truncate ml-auto hidden sm:inline">
                {PERSONAL_INFO.email}
              </span>
            </motion.div>
          </div>

          {/* Right Column: Interactive Vision & QA Telemetry Dock */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="lg:col-span-5"
          >
            <div className="bg-[#12131A] border border-white/10 rounded-3xl p-6 sm:p-7 shadow-2xl backdrop-blur-xl relative overflow-hidden text-left">
              {/* Subtle top glow */}
              <div className="absolute top-0 right-0 w-48 h-48 bg-[#FF6B6B]/10 rounded-full blur-2xl pointer-events-none" />

              {/* Window Header with Tabs */}
              <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-2">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FF6B6B]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#FDBA74]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#34D399]" />
                  </div>
                  <span className="text-xs font-mono text-zinc-400 ml-2">systems-telemetry.ai</span>
                </div>

                {/* Tab Switcher */}
                <div className="flex items-center p-1 rounded-xl bg-[#090A0F] border border-white/10 text-[10px] font-mono">
                  <button
                    onClick={() => setTelemetryTab('ds')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      telemetryTab === 'ds'
                        ? 'bg-[#FF6B6B] text-white font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <Eye className="w-3 h-3" />
                    <span>Vision &amp; ML</span>
                  </button>
                  <button
                    onClick={() => setTelemetryTab('qa')}
                    className={`px-3 py-1 rounded-lg transition-all cursor-pointer flex items-center gap-1 ${
                      telemetryTab === 'qa'
                        ? 'bg-[#FF6B6B] text-white font-bold shadow-sm'
                        : 'text-zinc-400 hover:text-white'
                    }`}
                  >
                    <ShieldCheck className="w-3 h-3" />
                    <span>QA Platform</span>
                  </button>
                </div>
              </div>

              {/* High-Level Metric Tiles */}
              {telemetryTab === 'ds' ? (
                <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">CV Precision</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#FF6B6B]">94.2%</div>
                    <div className="text-[9px] text-zinc-500">YOLOv8 Vision</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Research</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#FF8A65]">2 Papers</div>
                    <div className="text-[9px] text-zinc-500">Taylor &amp; Springer</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Real-Time</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#34D399]">30+ FPS</div>
                    <div className="text-[9px] text-zinc-500">MediaPipe HUD</div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-3 gap-3 mb-6 relative z-10">
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Reliability</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#FF6B6B]">99.9%</div>
                    <div className="text-[9px] text-zinc-500">Cargo Platform</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">API Coverage</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#FF8A65]">100%</div>
                    <div className="text-[9px] text-zinc-500">Postman Verified</div>
                  </div>
                  <div className="p-3.5 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-left">
                    <div className="text-[10px] font-mono text-zinc-400 uppercase">Efficiency</div>
                    <div className="text-base sm:text-lg font-mono font-bold text-[#34D399]">+40%</div>
                    <div className="text-[9px] text-zinc-500">Auto Saved</div>
                  </div>
                </div>
              )}

              {/* Status Header */}
              <div className="mb-5 relative z-10">
                <div className="flex justify-between text-xs font-mono text-zinc-400 mb-2">
                  <span className="flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    <span>
                      {telemetryTab === 'qa'
                        ? 'Enterprise Test Suite Health'
                        : 'Computer Vision & Deep Learning Pipelines'}
                    </span>
                  </span>
                  <span className="text-[#34D399] font-semibold">Active (100%)</span>
                </div>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden border border-white/5">
                  <div
                    className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#FF8A65] to-[#34D399] transition-all duration-300 rounded-full w-full"
                  />
                </div>
              </div>

              {/* Metrics / Diagnostics List */}
              <div className="space-y-2.5 font-mono text-xs relative z-10">
                {(telemetryTab === 'ds' ? dsMetrics : qaMetrics).map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between p-3 rounded-2xl bg-[#090A0F]/80 border border-white/10 text-white"
                  >
                    <div className="flex items-center gap-2.5 min-w-0 pr-2">
                      <CheckCircle2 className="w-4 h-4 text-[#34D399] shrink-0" />
                      <div className="truncate">
                        <span className="font-medium text-zinc-200">{item.title}</span>
                        <span className="text-[10px] text-zinc-500 block sm:inline sm:ml-2">
                          [{item.status}]
                        </span>
                      </div>
                    </div>

                    <span className="text-[11px] font-mono text-[#FF8A65] font-bold shrink-0">
                      {item.metric}
                    </span>
                  </div>
                ))}
              </div>

              {/* Footer Badge */}
              <div className="mt-5 pt-3.5 border-t border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-400 relative z-10">
                <span className="flex items-center gap-1.5 text-zinc-400">
                  <Sparkles className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  <span>YOLOv8 • OpenCV • PyTorch • Selenium • Postman</span>
                </span>
                <span className="text-[#34D399] font-medium">Production Tested</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

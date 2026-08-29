import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Brain, Sparkles, Cpu, ArrowRight } from 'lucide-react';

interface LoadingScreenProps {
  onComplete: () => void;
}

export const LoadingScreen: React.FC<LoadingScreenProps> = ({ onComplete }) => {
  const [progress, setProgress] = useState(0);
  const [statusIndex, setStatusIndex] = useState(0);

  const statuses = [
    'Initializing Neural Tensors & Models...',
    'Loading Computer Vision (YOLOv8 & MediaPipe)...',
    'Calibrating Time-Series Forecasting Engines...',
    'Structuring Research Publications & Works...',
    'Ready.',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            onComplete();
          }, 350);
          return 100;
        }
        const next = prev + Math.floor(Math.random() * 15) + 8;
        return next > 100 ? 100 : next;
      });
    }, 120);

    return () => clearInterval(interval);
  }, [onComplete]);

  useEffect(() => {
    if (progress < 25) setStatusIndex(0);
    else if (progress < 50) setStatusIndex(1);
    else if (progress < 75) setStatusIndex(2);
    else if (progress < 95) setStatusIndex(3);
    else setStatusIndex(4);
  }, [progress]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-0 z-[999] bg-[#FFFDF8] flex flex-col items-center justify-between p-6 sm:p-12 text-[#292524] select-none overflow-hidden"
    >
      {/* Subtle Background Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#FF8A65]/10 via-[#86EFAC]/15 to-[#C4B5FD]/10 rounded-full blur-3xl pointer-events-none" />

      {/* Top Bar Header */}
      <div className="w-full max-w-5xl flex items-center justify-between z-10">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-white border border-[#E7E5E4] flex items-center justify-center font-mono font-bold text-xs text-[#FF6B6B] shadow-sm">
            SD
          </div>
          <div>
            <p className="text-xs font-mono font-semibold text-[#292524]">SOURYADIPTA DAS</p>
            <p className="text-[10px] font-mono text-[#78716C]">QA ANALYST • ML &amp; DATA SCIENCE</p>
          </div>
        </div>

        <button
          onClick={onComplete}
          className="group flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-stone-50 border border-[#E7E5E4] text-xs font-mono text-[#78716C] hover:text-[#292524] transition-all cursor-pointer shadow-sm"
        >
          <span>Skip Intro</span>
          <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>

      {/* Centerpiece Monogram & Title */}
      <div className="flex flex-col items-center text-center max-w-lg z-10 my-auto">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="relative mb-6"
        >
          <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-white border border-[#E7E5E4] flex items-center justify-center shadow-xl shadow-stone-200/60 relative group">
            <Brain className="w-10 h-10 sm:w-12 sm:h-12 text-[#FF6B6B]" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#86EFAC] animate-ping opacity-75" />
            <span className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-[#86EFAC]" />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-2xl sm:text-3xl font-semibold tracking-tight text-[#292524] font-sans"
        >
          Souryadipta Das
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-xs sm:text-sm text-[#78716C] font-mono mt-1.5"
        >
          QA Analyst • Software Testing • Data Science &amp; ML
        </motion.p>

        {/* Progress Bar */}
        <div className="w-64 sm:w-80 mt-8">
          <div className="flex items-center justify-between text-[11px] font-mono text-[#78716C] mb-2">
            <span className="flex items-center gap-1.5 text-[#292524]">
              <Sparkles className="w-3 h-3 text-[#FF6B6B] animate-spin" style={{ animationDuration: '3s' }} />
              {statuses[statusIndex]}
            </span>
            <span className="text-[#292524] font-bold">{progress}%</span>
          </div>

          <div className="w-full h-1.5 bg-stone-200 rounded-full overflow-hidden border border-[#E7E5E4]">
            <motion.div
              className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#FF8A65] to-[#86EFAC] rounded-full"
              style={{ width: `${progress}%` }}
              transition={{ ease: 'easeOut', duration: 0.2 }}
            />
          </div>
        </div>
      </div>

      {/* Bottom Ticker */}
      <div className="w-full max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-2 text-[11px] font-mono text-[#78716C] border-t border-[#E7E5E4] pt-4 z-10">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-[#292524] font-medium">
            <span className="w-1.5 h-1.5 rounded-full bg-[#86EFAC]" />
            KIIT (8.81 CGPA)
          </span>
          <span>•</span>
          <span>Coforge QA</span>
          <span>•</span>
          <span>Taylor &amp; Francis / Springer Published</span>
        </div>

        <div className="text-[#78716C]">
          Press <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#E7E5E4] text-[10px] text-[#292524]">`</kbd> or <kbd className="px-1.5 py-0.5 rounded bg-white border border-[#E7E5E4] text-[10px] text-[#292524]">Esc</kbd> for CLI
        </div>
      </div>
    </motion.div>
  );
};

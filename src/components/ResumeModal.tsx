import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  X,
  Download,
  ExternalLink,
  FileText,
} from 'lucide-react';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({ isOpen, onClose }) => {
  const [pdfLoadError, setPdfLoadError] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const pdfUrl = '/Souryadipta_Das_Resume.pdf';

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm"
        />

        {/* Modal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-5xl bg-[#12131A] border border-white/10 rounded-3xl shadow-2xl overflow-hidden z-10 my-4 text-left flex flex-col h-[90vh]"
        >
          {/* Action Bar */}
          <div className="p-4 bg-[#090A0F] border-b border-white/10 flex flex-wrap items-center justify-between gap-3 shrink-0">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-[#FF6B6B]/15 border border-[#FF6B6B]/30 flex items-center justify-center text-[#FF6B6B]">
                <FileText className="w-4 h-4" />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <span className="text-xs sm:text-sm font-bold text-white">
                    Souryadipta dasresume.pdf
                  </span>
                  <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[10px] font-mono bg-[#34D399]/15 text-[#34D399] border border-[#34D399]/30 font-semibold">
                    Official Resume
                  </span>
                </div>
                <p className="text-[11px] font-mono text-zinc-400 hidden sm:block">
                  Machine Learning • Computer Vision • KIIT University • Coforge
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <a
                href={pdfUrl}
                download="Souryadipta_Das_Resume.pdf"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#FF6B6B] hover:bg-[#FF8A65] text-white font-bold text-xs font-mono transition-all shadow-lg shadow-[#FF6B6B]/20 cursor-pointer"
                title="Download PDF File"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download PDF</span>
              </a>

              <a
                href={pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl bg-[#12131A] hover:bg-white/10 text-zinc-300 font-mono text-xs transition-colors border border-white/10 cursor-pointer shadow-md"
                title="Open PDF in a new tab"
              >
                <ExternalLink className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">New Tab</span>
              </a>

              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-[#12131A] text-zinc-400 hover:text-white hover:bg-white/10 border border-white/10 transition-colors ml-1 cursor-pointer"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* PDF Viewer Body */}
          <div className="flex-1 bg-[#090A0F] relative overflow-hidden flex flex-col">
            <iframe
              src={`${pdfUrl}#view=FitH`}
              title="Souryadipta_Das_Resume.pdf"
              className="w-full h-full border-0 bg-[#090A0F]"
              onError={() => setPdfLoadError(true)}
            />

            {/* Fallback */}
            {pdfLoadError && (
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center bg-[#12131A]">
                <FileText className="w-12 h-12 text-[#FF6B6B] mb-3" />
                <h3 className="text-lg font-bold text-white mb-1">Resume PDF Document</h3>
                <p className="text-xs text-zinc-400 max-w-md mb-4 font-mono">
                  Your browser may restrict inline PDF preview. You can open or download the PDF directly.
                </p>
                <div className="flex items-center gap-3">
                  <a
                    href={pdfUrl}
                    download="Souryadipta dasresume.pdf"
                    className="px-4 py-2 rounded-xl bg-[#FF6B6B] text-white font-bold text-xs flex items-center gap-2 cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    <span>Download PDF</span>
                  </a>
                  <a
                    href={pdfUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl bg-[#090A0F] text-zinc-300 font-mono text-xs flex items-center gap-2 border border-white/10 cursor-pointer"
                  >
                    <ExternalLink className="w-4 h-4" />
                    <span>Open in New Tab</span>
                  </a>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

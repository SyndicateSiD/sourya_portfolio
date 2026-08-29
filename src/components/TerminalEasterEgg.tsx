import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Terminal as TerminalIcon, X, CornerDownLeft } from 'lucide-react';
import { PERSONAL_INFO, PROJECTS, RESEARCH_PAPERS } from '../data/portfolioData';

interface TerminalEasterEggProps {
  isOpen: boolean;
  onClose: () => void;
}

interface CommandHistoryItem {
  command: string;
  output: React.ReactNode;
}

export const TerminalEasterEgg: React.FC<TerminalEasterEggProps> = ({ isOpen, onClose }) => {
  const [inputVal, setInputVal] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      command: 'whoami',
      output: (
        <div className="text-[#292524]">
          <p className="font-bold text-[#292524] text-sm">{PERSONAL_INFO.name}</p>
          <p className="text-[#FF6B6B]">{PERSONAL_INFO.headline}</p>
        </div>
      ),
    },
    {
      command: 'education',
      output: (
        <div className="text-[#78716C]">
          <p>
            <span className="text-[#292524] font-semibold">B.Tech Computer Science &amp; Systems Engineering</span>
          </p>
          <p className="text-[#78716C] text-xs mt-0.5">
            Kalinga Institute of Industrial Technology (KIIT) • <span className="text-[#FF6B6B] font-bold">8.81 CGPA</span>
          </p>
        </div>
      ),
    },
    {
      command: 'status',
      output: <div className="text-[#292524] font-medium">● Open for Machine Learning, Computer Vision &amp; Data Science opportunities.</div>,
    },
  ]);

  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 150);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim().toLowerCase();
    if (!cmd) return;

    let output: React.ReactNode = null;

    switch (cmd) {
      case 'help':
        output = (
          <div className="text-[#78716C] space-y-1 text-xs">
            <p className="text-[#FF6B6B] font-bold">Available Commands:</p>
            <p><span className="text-[#292524] font-mono font-semibold">whoami</span> - Display background &amp; title</p>
            <p><span className="text-[#292524] font-mono font-semibold">papers</span> - List peer-reviewed research publications</p>
            <p><span className="text-[#292524] font-mono font-semibold">ml-eval</span> - Run interactive neural model benchmarks</p>
            <p><span className="text-[#292524] font-mono font-semibold">skills</span> - Summary of machine learning &amp; testing stack</p>
            <p><span className="text-[#292524] font-mono font-semibold">projects</span> - List projects &amp; repositories</p>
            <p><span className="text-[#292524] font-mono font-semibold">resume</span> - Download official resume PDF</p>
            <p><span className="text-[#292524] font-mono font-semibold">contact</span> - Display email and LinkedIn</p>
            <p><span className="text-[#292524] font-mono font-semibold">clear</span> - Clear terminal window</p>
            <p><span className="text-[#292524] font-mono font-semibold">exit</span> - Close CLI</p>
          </div>
        );
        break;

      case 'papers':
      case 'research':
        output = (
          <div className="text-[#78716C] text-xs space-y-2">
            <p className="text-[#FF6B6B] font-bold">Peer-Reviewed Publications (2024):</p>
            {RESEARCH_PAPERS.map((paper, pIdx) => (
              <div key={pIdx} className="p-2 rounded-lg bg-white border border-[#E7E5E4]">
                <div className="text-[#292524] font-semibold">{paper.title}</div>
                <div className="text-[#78716C] text-[11px]">{paper.publisher} ({paper.publicationYear})</div>
                <div className="text-[#FF6B6B] text-[10px]">DOI: {paper.doi}</div>
              </div>
            ))}
          </div>
        );
        break;

      case 'ml-eval':
        output = (
          <div className="text-xs space-y-1 font-mono">
            <p className="text-[#78716C]">&gt; Evaluating deep learning and vision pipelines...</p>
            <p className="text-[#292524]">✔ YOLOv8 Plant Blight Detector (mAP@0.5) ......... [94.2% Precision - 26ms]</p>
            <p className="text-[#292524]">✔ MediaPipe 21-Landmark Hand Vector Tracker ...... [32 FPS Realtime - 18ms]</p>
            <p className="text-[#292524]">✔ Time-Series LSTM Stock Forecaster .............. [0.0412 RMSE - 45ms]</p>
            <p className="text-[#292524]">✔ Soil NPK Crop Yield Multiple Regression ....... [R² = 0.887 - 8ms]</p>
            <p className="text-[#FF6B6B] font-bold mt-1">Status: All Neural Benchmarks Optimal</p>
          </div>
        );
        break;

      case 'resume':
      case 'pdf':
        output = (
          <div className="text-xs text-[#78716C] space-y-1 font-mono">
            <p className="text-[#292524] font-bold">✔ Standard Resume PDF: Souryadipta dasresume.pdf</p>
            <div className="flex items-center gap-3 mt-1">
              <a
                href="/Souryadipta%20dasresume.pdf"
                download="Souryadipta dasresume.pdf"
                className="text-[#FF6B6B] hover:underline inline-flex items-center gap-1 cursor-pointer font-semibold"
              >
                [ Download PDF ]
              </a>
              <a
                href="/Souryadipta%20dasresume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#78716C] hover:text-[#292524] inline-flex items-center gap-1 cursor-pointer"
              >
                [ Open in New Tab ]
              </a>
            </div>
          </div>
        );
        break;

      case 'whoami':
        output = (
          <div className="text-[#292524]">
            <p className="font-bold text-[#292524]">{PERSONAL_INFO.name}</p>
            <p className="text-[#FF6B6B]">{PERSONAL_INFO.headline}</p>
            <p className="text-[#78716C] text-xs mt-1">{PERSONAL_INFO.bio}</p>
          </div>
        );
        break;

      case 'skills':
        output = (
          <div className="text-[#78716C] text-xs space-y-1">
            <p><span className="text-[#FF6B6B] font-semibold">Machine Learning:</span> LSTM, Multiple Regression, Neural Networks, PyTorch, TensorFlow, Scikit-Learn</p>
            <p><span className="text-[#292524] font-semibold">Computer Vision:</span> YOLOv8, OpenCV, MediaPipe, Object Detection, Spatial Convolutions</p>
            <p><span className="text-[#FF8A65] font-semibold">Quality &amp; Automation:</span> Selenium WebDriver, Postman API Testing, JIRA, TestNG, Agile</p>
            <p><span className="text-[#78716C] font-semibold">Languages:</span> Python, Java, SQL, C/C++, TypeScript</p>
          </div>
        );
        break;

      case 'projects':
        output = (
          <div className="text-[#78716C] text-xs space-y-1.5">
            {PROJECTS.map((p) => (
              <div key={p.id} className="flex items-center justify-between">
                <span className="text-[#292524] font-medium">{p.title}</span>
                <span className="text-[#FF6B6B] text-[11px]">{p.technologies.slice(0, 3).join(', ')}</span>
              </div>
            ))}
          </div>
        );
        break;

      case 'contact':
        output = (
          <div className="text-xs text-[#78716C] space-y-1">
            <p>Email: <span className="text-[#FF6B6B]">{PERSONAL_INFO.email}</span></p>
            <p>Phone: <span className="text-[#292524] font-semibold">+91 {PERSONAL_INFO.phone}</span></p>
            <p>LinkedIn: <span className="text-[#292524]">{PERSONAL_INFO.social.linkedin}</span></p>
            <p>GitHub: <span className="text-[#292524]">{PERSONAL_INFO.social.github}</span></p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInputVal('');
        return;

      case 'exit':
      case 'quit':
        onClose();
        setInputVal('');
        return;

      default:
        output = (
          <div className="text-[#FF6B6B] text-xs">
            command not found: {cmd}. Type <span className="text-[#292524] font-bold">help</span> for commands.
          </div>
        );
    }

    setHistory((prev) => [...prev, { command: inputVal, output }]);
    setInputVal('');
  };

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#292524]/40 backdrop-blur-xs"
        />

        {/* Terminal Window */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full max-w-2xl bg-white border border-[#E7E5E4] rounded-3xl shadow-2xl overflow-hidden z-10 flex flex-col font-mono text-xs text-left"
        >
          {/* Title bar */}
          <div className="bg-[#FFFDF8] px-5 py-3.5 border-b border-[#E7E5E4] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="flex gap-1.5">
                <button
                  onClick={onClose}
                  className="w-3 h-3 rounded-full bg-[#FF6B6B] hover:opacity-80"
                  aria-label="Close"
                />
                <span className="w-3 h-3 rounded-full bg-[#FDBA74]" />
                <span className="w-3 h-3 rounded-full bg-[#86EFAC]" />
              </div>
              <span className="text-[#78716C] text-xs ml-2 font-mono flex items-center gap-1.5 font-medium">
                <TerminalIcon className="w-3.5 h-3.5 text-[#FF6B6B]" />
                souryadipta@ml-core:~
              </span>
            </div>

            <div className="flex items-center gap-2 text-[#78716C] text-[10px]">
              <span>type 'help'</span>
              <button onClick={onClose} className="p-1 hover:text-[#292524] cursor-pointer">
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Console Area */}
          <div
            className="p-5 overflow-y-auto max-h-[55vh] space-y-4 text-xs bg-[#FFFDF8]"
            onClick={() => inputRef.current?.focus()}
          >
            <div className="text-[#78716C] text-[11px] pb-2 border-b border-[#E7E5E4]">
              Souryadipta Das Interactive ML CLI [Version 2.0.0]
              <br />
              Live browser runtime. Type <span className="text-[#FF6B6B] font-bold">help</span> to list commands.
            </div>

            {history.map((item, idx) => (
              <div key={idx} className="space-y-1">
                <div className="flex items-center gap-2 text-[#FF6B6B] font-semibold">
                  <span className="text-[#78716C]">$</span>
                  <span>{item.command}</span>
                </div>
                <div className="pl-4 text-[#292524]">{item.output}</div>
              </div>
            ))}

            <div ref={bottomRef} />
          </div>

          {/* Input Prompt */}
          <form
            onSubmit={handleCommand}
            className="p-3.5 bg-white border-t border-[#E7E5E4] flex items-center gap-2"
          >
            <span className="text-[#FF6B6B] font-bold">$</span>
            <input
              ref={inputRef}
              type="text"
              value={inputVal}
              onChange={(e) => setInputVal(e.target.value)}
              placeholder="type 'help', 'papers', 'ml-eval', or 'resume'..."
              className="flex-1 bg-transparent text-[#292524] font-mono text-xs focus:outline-none placeholder:text-[#78716C]"
            />
            <button
              type="submit"
              className="p-1.5 rounded-lg bg-[#FFFDF8] text-[#78716C] hover:text-[#FF6B6B] border border-[#E7E5E4] cursor-pointer"
              aria-label="Send command"
            >
              <CornerDownLeft className="w-3.5 h-3.5" />
            </button>
          </form>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

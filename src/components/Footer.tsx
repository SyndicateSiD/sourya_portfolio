import React from 'react';
import { ArrowUp, Github, Linkedin, Mail, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

interface FooterProps {
  onOpenTerminal: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenTerminal }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#090A0F] border-t border-white/10 py-12 text-zinc-400 font-mono text-xs">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-white/10">
          {/* Left info */}
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-8 h-8 rounded-xl bg-[#12131A] border border-white/10 flex items-center justify-center font-bold text-[#FF6B6B]">
              SD
            </div>
            <div>
              <span className="font-bold text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
              <p className="text-zinc-400 text-[11px]">
                {PERSONAL_INFO.headline}
              </p>
            </div>
          </div>

          {/* Center Socials */}
          <div className="flex items-center gap-4">
            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-white transition-colors cursor-pointer"
              aria-label="GitHub"
            >
              <Github className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="text-zinc-400 hover:text-[#FF6B6B] transition-colors cursor-pointer"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="text-zinc-400 hover:text-[#FF6B6B] transition-colors cursor-pointer"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={onOpenTerminal}
              className="text-zinc-400 hover:text-[#FF6B6B] transition-colors flex items-center gap-1 cursor-pointer"
              title="Open Terminal"
            >
              <Terminal className="w-4 h-4" />
            </button>
          </div>

          {/* Right Back to Top */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#12131A] border border-white/10 text-zinc-300 hover:text-white hover:border-white/20 transition-colors cursor-pointer font-medium"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF6B6B]" />
          </button>
        </div>

        {/* Bottom Line */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] text-zinc-400 text-center sm:text-left">
          <div>
            © {new Date().getFullYear()} {PERSONAL_INFO.name}. Designed &amp; built for research and engineering portfolio.
          </div>

          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span className="text-zinc-300 font-medium">Machine Learning • Computer Vision • Systems QA</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

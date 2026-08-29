import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Mail,
  Linkedin,
  Github,
  Copy,
  Check,
  Phone,
  MapPin,
  ArrowUpRight,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2500);
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto relative overflow-hidden">
      <div className="relative z-10 text-center">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex flex-col items-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#12131A] border border-white/10 text-xs font-mono text-[#FF6B6B] mb-6 font-semibold shadow-md">
            <span className="w-2 h-2 rounded-full bg-[#34D399]" />
            <span>OPEN FOR OPPORTUNITIES</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight mb-4 max-w-2xl">
            Let's connect &amp; build.
          </h2>

          <p className="text-zinc-400 text-sm sm:text-base max-w-xl leading-relaxed mb-10 font-sans">
            Open to discussing Machine Learning engineering, Computer Vision development, Data Science research, and Software Systems Assurance roles.
          </p>

          {/* Primary Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 mb-12 w-full max-w-md">
            <a
              href={`mailto:${PERSONAL_INFO.email}`}
              className="flex-1 sm:flex-initial px-7 py-3.5 rounded-xl bg-[#FF6B6B] hover:bg-[#FF8A65] text-white font-bold text-sm transition-all shadow-lg shadow-[#FF6B6B]/25 flex items-center justify-center gap-2 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Email Souryadipta</span>
            </a>

            <a
              href={PERSONAL_INFO.social.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-[#12131A] hover:bg-[#1E202E] text-white border border-white/10 hover:border-[#FF6B6B]/50 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Linkedin className="w-4 h-4 text-[#FF6B6B]" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>

            <a
              href={PERSONAL_INFO.social.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial px-6 py-3.5 rounded-xl bg-[#12131A] hover:bg-[#1E202E] text-white border border-white/10 hover:border-white/20 font-semibold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              <Github className="w-4 h-4 text-zinc-300" />
              <span>GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400" />
            </a>
          </div>

          {/* Quick Contact Details Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 w-full max-w-3xl">
            {/* Email Card with Copy */}
            <div className="bg-[#12131A] p-5 rounded-3xl border border-white/10 flex flex-col items-center justify-between gap-3 text-center shadow-xl">
              <div className="p-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-[#FF6B6B]">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 block uppercase font-semibold">Email</span>
                <span className="text-xs font-mono font-medium text-white break-all">
                  {PERSONAL_INFO.email}
                </span>
              </div>
              <button
                onClick={handleCopyEmail}
                className="w-full py-1.5 px-3 rounded-xl bg-[#090A0F] hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-white transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-medium"
              >
                {copiedEmail ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    <span className="text-white font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Email</span>
                  </>
                )}
              </button>
            </div>

            {/* Phone Card with Copy */}
            <div className="bg-[#12131A] p-5 rounded-3xl border border-white/10 flex flex-col items-center justify-between gap-3 text-center shadow-xl">
              <div className="p-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-[#FF8A65]">
                <Phone className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 block uppercase font-semibold">Phone</span>
                <span className="text-xs font-mono font-medium text-white">
                  +91 {PERSONAL_INFO.phone}
                </span>
              </div>
              <button
                onClick={handleCopyPhone}
                className="w-full py-1.5 px-3 rounded-xl bg-[#090A0F] hover:bg-white/10 border border-white/10 text-xs font-mono text-zinc-300 hover:text-[#FF8A65] transition-colors flex items-center justify-center gap-1.5 cursor-pointer font-medium"
              >
                {copiedPhone ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-[#34D399]" />
                    <span className="text-white font-bold">Copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5 text-zinc-400" />
                    <span>Copy Phone</span>
                  </>
                )}
              </button>
            </div>

            {/* Location Card */}
            <div className="bg-[#12131A] p-5 rounded-3xl border border-white/10 flex flex-col items-center justify-between gap-3 text-center shadow-xl">
              <div className="p-2.5 rounded-xl bg-[#090A0F] border border-white/10 text-[#FF6B6B]">
                <MapPin className="w-4 h-4" />
              </div>
              <div>
                <span className="text-[10px] font-mono text-zinc-400 block uppercase font-semibold">Location</span>
                <span className="text-xs font-mono font-medium text-white">
                  {PERSONAL_INFO.location}
                </span>
              </div>
              <div className="w-full py-1.5 px-3 rounded-xl bg-[#090A0F] border border-white/10 text-[11px] font-mono text-zinc-400 flex items-center justify-center font-medium">
                Open to Relocation &amp; Remote
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Floating Toast Notification */}
      <AnimatePresence>
        {(copiedEmail || copiedPhone) && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            className="fixed bottom-6 right-6 z-50 px-4 py-2.5 rounded-xl bg-[#12131A] border border-[#FF6B6B]/40 shadow-2xl text-xs font-mono text-white flex items-center gap-2"
          >
            <Check className="w-4 h-4 text-[#34D399]" />
            <span>{copiedEmail ? 'Email copied to clipboard' : 'Phone copied to clipboard'}</span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

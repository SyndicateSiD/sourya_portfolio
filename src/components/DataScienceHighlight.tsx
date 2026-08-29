import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Database,
  Brain,
  Eye,
} from 'lucide-react';

interface CardData {
  id: string;
  number: string;
  title: string;
  icon: typeof Database;
  color: string;
  activeBorder: string;
  activeBg: string;
  tagColor: string;
  skills: string[];
  description: string;
}

const CARDS: CardData[] = [
  {
    id: 'data-science',
    number: '01',
    title: 'Data Science & Analytics',
    icon: Database,
    color: 'text-[#FF6B6B]',
    activeBorder: 'border-[#FF6B6B]/60',
    activeBg: 'bg-[#FF6B6B]/10',
    tagColor: 'bg-[#FF6B6B]/20 text-[#FF6B6B] border-[#FF6B6B]/30',
    skills: ['Python', 'Pandas', 'NumPy', 'Data Analysis', 'Statistical Inference'],
    description:
      'Working with structured & unstructured data to uncover patterns, generate quantitative insights and build analytical pipelines.',
  },
  {
    id: 'machine-learning',
    number: '02',
    title: 'Deep Learning & ML',
    icon: Brain,
    color: 'text-[#818CF8]',
    activeBorder: 'border-[#818CF8]/60',
    activeBg: 'bg-[#818CF8]/10',
    tagColor: 'bg-[#818CF8]/20 text-[#A5B4FC] border-[#818CF8]/30',
    skills: ['LSTM', 'Regression', 'Forecasting', 'PyTorch', 'Scikit-Learn'],
    description:
      'Predictive modeling, deep sequential time-series forecasting (Springer Nature paper), and multi-variable regression estimators.',
  },
  {
    id: 'computer-vision',
    number: '03',
    title: 'Computer Vision',
    icon: Eye,
    color: 'text-[#34D399]',
    activeBorder: 'border-[#34D399]/60',
    activeBg: 'bg-[#34D399]/10',
    tagColor: 'bg-[#34D399]/20 text-[#6EE7B7] border-[#34D399]/30',
    skills: ['YOLOv8', 'MediaPipe', 'OpenCV', 'Real-Time Spatial Tracking'],
    description:
      'Object recognition, gesture tracking (Taylor & Francis paper), agricultural plant health detection, and camera-based interaction.',
  },
];

export const DataScienceHighlight: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Subtle interactive node & flowing data line animation
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    // Node graph definition
    interface Node {
      x: number;
      y: number;
      baseX: number;
      baseY: number;
      vx: number;
      vy: number;
      radius: number;
    }

    const nodeCount = 22;
    const nodes: Node[] = [];

    for (let i = 0; i < nodeCount; i++) {
      const x = Math.random() * width;
      const y = Math.random() * height;
      nodes.push({
        x,
        y,
        baseX: x,
        baseY: y,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        radius: Math.random() * 1.5 + 1.2,
      });
    }

    let time = 0;

    const render = () => {
      time += 0.015;
      ctx.clearRect(0, 0, width, height);

      // Subtle flowing mathematical curve
      ctx.beginPath();
      ctx.lineWidth = 1.2;
      ctx.strokeStyle = hoveredCard === 'data-science'
        ? 'rgba(255, 107, 107, 0.35)'
        : hoveredCard === 'machine-learning'
        ? 'rgba(129, 140, 248, 0.35)'
        : hoveredCard === 'computer-vision'
        ? 'rgba(52, 211, 153, 0.35)'
        : 'rgba(255, 255, 255, 0.08)';

      for (let x = 0; x < width; x += 10) {
        const y =
          height * 0.5 +
          Math.sin(x * 0.008 + time) * 16 +
          Math.cos(x * 0.015 - time * 0.8) * 10;
        if (x === 0) {
          ctx.moveTo(x, y);
        } else {
          ctx.lineTo(x, y);
        }
      }
      ctx.stroke();

      // Node attraction / gentle motion
      nodes.forEach((node, i) => {
        node.x += node.vx;
        node.y += node.vy;

        if (node.x < 0 || node.x > width) node.vx *= -1;
        if (node.y < 0 || node.y > height) node.vy *= -1;

        if (hoveredCard) {
          const targetX = width * 0.5 + (i % 3 - 1) * (width * 0.3);
          const targetY = height * 0.5;
          node.x += (targetX - node.x) * 0.004;
          node.y += (targetY - node.y) * 0.004;
        }

        // Draw node
        ctx.beginPath();
        ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
        ctx.fillStyle = hoveredCard === 'data-science'
          ? 'rgba(255, 107, 107, 0.6)'
          : hoveredCard === 'machine-learning'
          ? 'rgba(129, 140, 248, 0.6)'
          : hoveredCard === 'computer-vision'
          ? 'rgba(52, 211, 153, 0.6)'
          : 'rgba(255, 255, 255, 0.2)';
        ctx.fill();

        // Connect nearby nodes
        for (let j = i + 1; j < nodes.length; j++) {
          const other = nodes[j];
          const dx = node.x - other.x;
          const dy = node.y - other.y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 110) {
            ctx.beginPath();
            ctx.moveTo(node.x, node.y);
            ctx.lineTo(other.x, other.y);
            const alpha = (1 - dist / 110) * (hoveredCard ? 0.3 : 0.08);
            ctx.strokeStyle = hoveredCard === 'data-science'
              ? `rgba(255, 107, 107, ${alpha})`
              : hoveredCard === 'machine-learning'
              ? `rgba(129, 140, 248, ${alpha})`
              : hoveredCard === 'computer-vision'
              ? `rgba(52, 211, 153, ${alpha})`
              : `rgba(255, 255, 255, ${alpha})`;
            ctx.lineWidth = 0.6;
            ctx.stroke();
          }
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [hoveredCard]);

  const handleScrollToDataScience = () => {
    const el = document.getElementById('datascience') || document.getElementById('experience');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="beyond-qa"
      aria-label="Beyond QA - Data Science & Intelligent Systems"
      className="relative z-20 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto -mt-4 mb-8"
    >
      {/* Capability Strip Container */}
      <div className="relative rounded-3xl bg-[#12131A] border border-white/10 p-6 sm:p-8 backdrop-blur-xl shadow-2xl overflow-hidden text-left transition-all duration-300">
        {/* Animated Visual Canvas in background */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full pointer-events-none opacity-80"
        />

        {/* Section Header */}
        <div className="relative z-10 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-6 border-b border-white/10 pb-5">
          <div>
            <div className="flex items-center gap-2 mb-1.5">
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-widest uppercase bg-[#090A0F] text-[#FF6B6B] border border-[#FF6B6B]/30 shadow-sm">
                BEYOND QA
              </span>
              <span className="text-[11px] font-mono text-zinc-400 hidden sm:inline">
                Secondary Technical Specialization
              </span>
            </div>

            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white tracking-tight">
              Data Science, Computer Vision &amp; AI
            </h2>
          </div>

          <p className="text-xs sm:text-sm text-zinc-400 max-w-xl font-normal leading-relaxed">
            My engineering foundation extends deeply into computer vision, machine learning, and statistical analytics — from object recognition and spatial gesture tracking to deep neural forecasting.
          </p>
        </div>

        {/* Three Interactive Cards Grid */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4 mb-5">
          {CARDS.map((card) => {
            const isHovered = hoveredCard === card.id;
            const Icon = card.icon;

            return (
              <motion.div
                key={card.id}
                onMouseEnter={() => setHoveredCard(card.id)}
                onMouseLeave={() => setHoveredCard(null)}
                className={`relative rounded-2xl p-4 sm:p-5 transition-all duration-300 flex flex-col justify-between cursor-pointer border ${
                  isHovered
                    ? `${card.activeBorder} ${card.activeBg} shadow-lg`
                    : 'border-white/10 bg-[#090A0F]/80 hover:border-white/20'
                }`}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <div>
                  {/* Top Bar: Number & Icon */}
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono font-bold text-zinc-500 tracking-wider">
                      {card.number}
                    </span>
                    <div
                      className={`p-2 rounded-xl border transition-colors ${
                        isHovered
                          ? `${card.activeBorder} ${card.activeBg} ${card.color}`
                          : 'border-white/10 bg-[#12131A] text-zinc-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3
                    className="text-base font-bold tracking-tight mb-3 text-white transition-colors"
                  >
                    {card.title}
                  </h3>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-3">
                    {card.skills.map((skill) => (
                      <span
                        key={skill}
                        className={`px-2 py-0.5 rounded-lg text-[11px] font-mono font-medium transition-all duration-200 border ${
                          isHovered
                            ? card.tagColor
                            : 'bg-[#12131A] text-zinc-300 border-white/10'
                        }`}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Description */}
                <div className="pt-3 border-t border-white/10 min-h-[44px] flex items-center">
                  <p
                    className={`text-xs leading-relaxed transition-colors duration-200 ${
                      isHovered ? 'text-zinc-200 font-medium' : 'text-zinc-400'
                    }`}
                  >
                    {card.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer Action: Explore Data Science Work */}
        <div className="relative z-10 flex flex-wrap items-center justify-between pt-3 border-t border-white/10 gap-3">
          <div className="flex items-center gap-2 text-xs font-mono text-zinc-400">
            <span className="w-1.5 h-1.5 rounded-full bg-[#34D399]" />
            <span>Backed by published research in Taylor &amp; Francis and Springer Nature</span>
          </div>

          <button
            onClick={handleScrollToDataScience}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold font-mono text-[#FF6B6B] hover:text-[#FF8A65] transition-colors group cursor-pointer"
          >
            <span>Explore Vision &amp; ML Lab</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};

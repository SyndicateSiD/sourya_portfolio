import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  Brain,
  Eye,
  TrendingUp,
  Sliders,
  Scan,
  Activity,
} from 'lucide-react';

export const DataScienceSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'cv' | 'lstm' | 'regression'>('cv');

  // CV Demo State
  const [selectedSample, setSelectedSample] = useState<'leaf-blight' | 'hand-gesture' | 'tomato-rust'>('leaf-blight');

  // LSTM Demo State
  const [lookbackWindow, setLookbackWindow] = useState<number>(60);

  // Regression Demo State
  const [nitrogen, setNitrogen] = useState<number>(65);
  const [phosphorus, setPhosphorus] = useState<number>(45);
  const [potassium, setPotassium] = useState<number>(50);

  // Calculate simulated yield score
  const predictedYield = Math.min(
    100,
    Math.max(10, Math.round(0.42 * nitrogen + 0.35 * phosphorus + 0.28 * potassium + 12))
  );

  const cvSamples = {
    'leaf-blight': {
      title: 'Maize Northern Leaf Blight',
      model: 'YOLOv8 Custom Trained',
      detections: [
        { label: 'Blight Lesion #1', conf: 0.94, bbox: { top: '25%', left: '20%', width: '35%', height: '28%' }, status: 'Pathogenic' },
        { label: 'Chlorosis Margin', conf: 0.89, bbox: { top: '58%', left: '42%', width: '40%', height: '30%' }, status: 'Moderate' },
      ],
      dataset: 'Blu Cucoon Agricultural Vision Corpus',
      fps: '38.4 FPS (CUDA)',
      annotationTool: 'Makesense.ai / LabelImg',
    },
    'hand-gesture': {
      title: 'MediaPipe 21-Point Hand Tracking',
      model: 'Spatial CNN + 3D Coordinates',
      detections: [
        { label: 'Index Fingertip (P8)', conf: 0.98, bbox: { top: '15%', left: '48%', width: '14%', height: '14%' }, status: 'Tracked' },
        { label: 'Thumb Tip (P4)', conf: 0.96, bbox: { top: '35%', left: '22%', width: '14%', height: '14%' }, status: 'Tracked' },
        { label: 'Palm Center (P0)', conf: 0.99, bbox: { top: '55%', left: '40%', width: '22%', height: '22%' }, status: 'Origin' },
      ],
      dataset: 'Real-time 21-Landmark Vector',
      fps: '42.1 FPS',
      annotationTool: 'MediaPipe Hands Engine',
    },
    'tomato-rust': {
      title: 'Tomato Early Blight Foliage',
      model: 'YOLOX Nano Architecture',
      detections: [
        { label: 'Concentric Ring Lesion', conf: 0.92, bbox: { top: '30%', left: '30%', width: '45%', height: '40%' }, status: 'High Severity' },
      ],
      dataset: 'PlantVillage & Field Annotated',
      fps: '45.0 FPS',
      annotationTool: 'LabelImg Polygon',
    },
  };

  const currentCv = cvSamples[selectedSample];

  return (
    <section id="datascience" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4 border-b border-white/10 pb-6">
        <div>
          <div className="flex items-center gap-2 text-xs font-mono text-[#FF6B6B] uppercase tracking-widest mb-2 font-semibold">
            <Brain className="w-3.5 h-3.5" />
            <span>Interactive Machine Learning Lab</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">
            Applied ML &amp; Computer Vision
          </h2>
        </div>
        <p className="text-sm text-zinc-400 max-w-md font-sans">
          Explore interactive simulations of object detection, neural time-series forecasting, and soil regression models.
        </p>
      </div>

      {/* Interactive Tabs Navigation */}
      <div className="flex flex-wrap gap-2 mb-8 p-1.5 rounded-2xl bg-[#12131A] border border-white/10 w-fit shadow-md">
        <button
          onClick={() => setActiveTab('cv')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'cv'
              ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20 font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Eye className="w-4 h-4 text-current" />
          <span>Computer Vision &amp; YOLO</span>
        </button>

        <button
          onClick={() => setActiveTab('lstm')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'lstm'
              ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20 font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <TrendingUp className="w-4 h-4 text-current" />
          <span>Time-Series LSTM Engine</span>
        </button>

        <button
          onClick={() => setActiveTab('regression')}
          className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all cursor-pointer ${
            activeTab === 'regression'
              ? 'bg-[#FF6B6B] text-white shadow-lg shadow-[#FF6B6B]/20 font-bold'
              : 'text-zinc-400 hover:text-white'
          }`}
        >
          <Sliders className="w-4 h-4 text-current" />
          <span>Soil NPK Regression</span>
        </button>
      </div>

      {/* Main Interactive Studio Panel */}
      <div className="bg-[#12131A] border border-white/10 rounded-3xl p-6 sm:p-8 shadow-2xl">
        <AnimatePresence mode="wait">
          {/* TAB 1: COMPUTER VISION STUDIO */}
          {activeTab === 'cv' && (
            <motion.div
              key="cv"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
            >
              {/* Left Column: Vision Viewport */}
              <div className="lg:col-span-7 flex flex-col space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Scan className="w-3.5 h-3.5 text-[#FF6B6B] animate-pulse" />
                    Inference Canvas • Live Simulation
                  </span>
                  <span className="text-xs font-mono text-[#34D399] bg-[#34D399]/15 px-2 py-0.5 rounded border border-[#34D399]/30 font-semibold">
                    {currentCv.fps}
                  </span>
                </div>

                {/* Simulated Camera / Vision Frame */}
                <div className="relative aspect-video w-full rounded-2xl bg-[#090A0F] border border-white/10 overflow-hidden flex items-center justify-center p-4">
                  {/* Subtle Grid Overlay */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:24px_24px]" />

                  {/* Visual Representation Graphic */}
                  <div className="relative z-10 flex flex-col items-center text-center p-6 space-y-2">
                    <div className="w-16 h-16 rounded-full bg-[#12131A] border border-white/10 flex items-center justify-center text-[#FF6B6B] shadow-inner">
                      <Eye className="w-8 h-8" />
                    </div>
                    <p className="text-sm font-bold text-white font-mono">{currentCv.title}</p>
                    <p className="text-xs text-zinc-400 font-mono">Input: RGB Tensor [1, 3, 640, 640]</p>
                  </div>

                  {/* Simulated Bounding Boxes */}
                  {currentCv.detections.map((det, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0.9, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className="absolute border-2 border-[#FF6B6B] bg-[#FF6B6B]/15 rounded-lg pointer-events-none shadow-lg shadow-[#FF6B6B]/20"
                      style={{
                        top: det.bbox.top,
                        left: det.bbox.left,
                        width: det.bbox.width,
                        height: det.bbox.height,
                      }}
                    >
                      <div className="absolute -top-6 left-0 bg-[#FF6B6B] text-white font-mono font-bold text-[10px] px-1.5 py-0.5 rounded shadow-sm whitespace-nowrap flex items-center gap-1">
                        <span>{det.label}</span>
                        <span className="opacity-90">{(det.conf * 100).toFixed(1)}%</span>
                      </div>
                      <div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#FF6B6B] animate-ping" />
                    </motion.div>
                  ))}
                </div>

                {/* Sample Selector */}
                <div className="flex flex-wrap gap-2 pt-2">
                  <span className="text-xs font-mono text-zinc-400 self-center mr-1">Select Scenario:</span>
                  {(['leaf-blight', 'hand-gesture', 'tomato-rust'] as const).map((key) => (
                    <button
                      key={key}
                      onClick={() => setSelectedSample(key)}
                      className={`px-3 py-1.5 rounded-lg text-xs font-mono transition-all cursor-pointer ${
                        selectedSample === key
                          ? 'bg-[#FF6B6B] text-white font-bold shadow-md'
                          : 'bg-[#090A0F] text-zinc-400 hover:text-white border border-white/10'
                      }`}
                    >
                      {cvSamples[key].title.split(' ')[0]} {cvSamples[key].title.split(' ')[1]}
                    </button>
                  ))}
                </div>
              </div>

              {/* Right Column: Model Diagnostics & Architecture */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                      Active Model Pipeline
                    </span>
                    <h4 className="text-base font-bold text-white">{currentCv.model}</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      Dataset: <strong className="text-white">{currentCv.dataset}</strong>
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      Annotation: <strong className="text-white">{currentCv.annotationTool}</strong>
                    </p>
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono text-zinc-400 block font-semibold">Extracted Target Detections:</span>
                    {currentCv.detections.map((det, i) => (
                      <div
                        key={i}
                        className="p-3 rounded-lg bg-[#090A0F] border border-white/10 flex items-center justify-between text-xs font-mono"
                      >
                        <div className="flex items-center gap-2">
                          <span className="w-2 h-2 rounded-full bg-[#34D399]" />
                          <span className="text-white font-medium">{det.label}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="text-zinc-400">{(det.conf * 100).toFixed(1)}%</span>
                          <span className="px-1.5 py-0.5 rounded bg-white/10 text-[10px] text-zinc-200">
                            {det.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-zinc-400">
                  <strong className="text-[#FF6B6B] block mb-1">Internship Application at Blu Cucoon Digital:</strong>
                  Trained deep neural networks across hundreds of agricultural disease samples, achieving high mAP@0.5 bounding box accuracy.
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 2: TIME-SERIES LSTM SIMULATOR */}
          {activeTab === 'lstm' && (
            <motion.div
              key="lstm"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
            >
              {/* Left Column: Forecast Visual Graph */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5">
                    <Activity className="w-3.5 h-3.5 text-[#FF6B6B]" />
                    Sequential Multi-Step Forecasting • LSTM Model
                  </span>
                  <span className="text-xs font-mono text-[#34D399] bg-[#34D399]/15 px-2 py-0.5 rounded border border-[#34D399]/30 font-semibold">
                    RMSE: 0.0412
                  </span>
                </div>

                {/* SVG Chart Rendering */}
                <div className="relative aspect-video w-full rounded-2xl bg-[#090A0F] border border-white/10 p-4 flex flex-col justify-between overflow-hidden">
                  <div className="flex items-center justify-between text-[11px] font-mono text-zinc-400 z-10">
                    <span className="flex items-center gap-2">
                      <span className="w-3 h-0.5 bg-zinc-500 inline-block" /> Ground Truth (Actual)
                    </span>
                    <span className="flex items-center gap-2 text-[#FF6B6B] font-semibold">
                      <span className="w-3 h-0.5 bg-[#FF6B6B] inline-block" /> LSTM Predicted Trajectory
                    </span>
                  </div>

                  {/* SVG Curves */}
                  <svg className="w-full h-40 overflow-visible" viewBox="0 0 400 120">
                    <line x1="0" y1="30" x2="400" y2="30" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                    <line x1="0" y1="60" x2="400" y2="60" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />
                    <line x1="0" y1="90" x2="400" y2="90" stroke="rgba(255,255,255,0.08)" strokeDasharray="3 3" />

                    <path
                      d="M 10 80 Q 40 40, 80 65 T 150 45 T 220 75 T 280 40 T 340 55 T 390 30"
                      fill="none"
                      stroke="#52525B"
                      strokeWidth="2"
                    />

                    <motion.path
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1.2, ease: 'easeInOut' }}
                      d="M 10 82 Q 40 42, 80 63 T 150 47 T 220 73 T 280 42 T 340 52 T 390 28"
                      fill="none"
                      stroke="#FF6B6B"
                      strokeWidth="2.5"
                    />
                  </svg>

                  <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 z-10 border-t border-white/10 pt-2">
                    <span>T - {lookbackWindow} Days</span>
                    <span>T - {Math.round(lookbackWindow / 2)} Days</span>
                    <span className="text-[#FF6B6B] font-semibold">T + 30 Days (Forecast)</span>
                  </div>
                </div>

                {/* Horizon Controls */}
                <div className="flex items-center gap-4">
                  <span className="text-xs font-mono text-zinc-400">Lookback Sequence:</span>
                  <div className="flex gap-2">
                    {[30, 60, 90].map((days) => (
                      <button
                        key={days}
                        onClick={() => setLookbackWindow(days)}
                        className={`px-3 py-1 rounded-lg text-xs font-mono transition-colors cursor-pointer ${
                          lookbackWindow === days
                            ? 'bg-[#FF6B6B] text-white font-bold shadow-md'
                            : 'bg-[#090A0F] text-zinc-400 hover:text-white border border-white/10'
                        }`}
                      >
                        {days} Days
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Mathematical & Architecture Details */}
              <div className="lg:col-span-5 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 space-y-2">
                    <span className="text-[11px] font-mono text-zinc-400 uppercase tracking-wider block font-semibold">
                      Recurrent Cell Architecture
                    </span>
                    <h4 className="text-base font-bold text-white">Stacked LSTM (2 Layers, 128 Units)</h4>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      Gates: Input (<strong className="text-[#FF6B6B]">i_t</strong>), Forget (<strong className="text-[#FF6B6B]">f_t</strong>), Output (<strong className="text-[#FF6B6B]">o_t</strong>)
                    </p>
                    <p className="text-xs text-zinc-300 leading-relaxed font-mono">
                      Loss: MSE with Adam Optimizer (<strong className="text-zinc-200">lr = 0.001</strong>)
                    </p>
                  </div>

                  <div className="p-3.5 rounded-xl bg-[#090A0F] border border-white/10 text-xs font-mono space-y-1 text-zinc-400">
                    <p className="text-zinc-400">Springer Published Research:</p>
                    <p className="font-bold text-white">
                      "Stock Market Prediction Analysis using LSTM" (2024)
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-zinc-400">
                  <strong className="text-[#FF6B6B] block mb-1">Key Theoretical Insight:</strong>
                  Mitigates vanishing gradient vectors across extended historical sequences through regulated cell-state memory conduits.
                </div>
              </div>
            </motion.div>
          )}

          {/* TAB 3: SOIL NPK REGRESSION PREDICTOR */}
          {activeTab === 'regression' && (
            <motion.div
              key="regression"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 text-left"
            >
              {/* Left Column: Interactive Nutrient Sliders */}
              <div className="lg:col-span-7 space-y-6">
                <span className="text-xs font-mono text-zinc-400 flex items-center gap-1.5 font-semibold">
                  <Sliders className="w-3.5 h-3.5 text-[#FF6B6B]" />
                  Multiple Linear Regression • Soil Fertility &amp; Yield Index
                </span>

                <div className="space-y-4 bg-[#090A0F] p-5 rounded-2xl border border-white/10">
                  {/* Nitrogen Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-200">Nitrogen Ratio (N):</span>
                      <span className="text-[#FF6B6B] font-bold">{nitrogen} mg/kg</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="140"
                      value={nitrogen}
                      onChange={(e) => setNitrogen(Number(e.target.value))}
                      className="w-full accent-[#FF6B6B] bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Phosphorus Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-200">Phosphorus Ratio (P):</span>
                      <span className="text-[#FF6B6B] font-bold">{phosphorus} mg/kg</span>
                    </div>
                    <input
                      type="range"
                      min="5"
                      max="90"
                      value={phosphorus}
                      onChange={(e) => setPhosphorus(Number(e.target.value))}
                      className="w-full accent-[#FF6B6B] bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>

                  {/* Potassium Slider */}
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-zinc-200">Potassium Ratio (K):</span>
                      <span className="text-[#FF6B6B] font-bold">{potassium} mg/kg</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="120"
                      value={potassium}
                      onChange={(e) => setPotassium(Number(e.target.value))}
                      className="w-full accent-[#FF6B6B] bg-zinc-800 h-1.5 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>

                <div className="p-3 bg-[#090A0F] rounded-xl font-mono text-[11px] text-zinc-400 border border-white/10">
                  <span className="text-zinc-400 font-semibold">Regression Equation:</span>{' '}
                  <span className="text-white font-bold">
                    Yield = 0.42(N) + 0.35(P) + 0.28(K) + 12.0
                  </span>
                </div>
              </div>

              {/* Right Column: Output Yield Score Display */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-4">
                <div className="p-6 rounded-2xl bg-[#090A0F] border border-white/10 text-center space-y-3">
                  <span className="text-xs font-mono text-zinc-400 uppercase tracking-wider font-semibold">
                    Predicted Agricultural Yield Score
                  </span>

                  <div className="text-5xl font-bold font-mono text-[#FF6B6B] tracking-tight">
                    {predictedYield}
                    <span className="text-xl text-zinc-500 font-normal"> / 100</span>
                  </div>

                  <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden border border-white/10">
                    <motion.div
                      className="h-full bg-gradient-to-r from-[#FF6B6B] via-[#818CF8] to-[#34D399] rounded-full"
                      style={{ width: `${predictedYield}%` }}
                    />
                  </div>

                  <p className="text-xs text-zinc-400 font-mono">
                    {predictedYield > 75
                      ? 'Optimal fertility baseline for high-yield cereal crops.'
                      : predictedYield > 45
                      ? 'Moderate yield potential; supplemental fertilization suggested.'
                      : 'Nutrient deficit detected; soil conditioning required.'}
                  </p>
                </div>

                <div className="p-4 rounded-xl bg-[#090A0F] border border-white/10 text-xs text-zinc-400">
                  <strong className="text-[#FF6B6B] block mb-1">Applied Industry Research:</strong>
                  Built at Blu Cucoon Digital to correlate soil testing metrics with crop viability models.
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

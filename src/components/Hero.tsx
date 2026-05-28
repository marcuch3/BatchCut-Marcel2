import { useState } from "react";
import { ArrowRight, Play, Sparkles, Cpu, Layers, TrendingUp } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeroProps {
  onBookCallClick: () => void;
  onSeeWorkClick: () => void;
}

export default function Hero({ onBookCallClick, onSeeWorkClick }: HeroProps) {
  const { language, t } = useLanguage();

  // Niche variations for interactive personalization
  const Niches = [
    {
      id: "streamers",
      label: t.niche1Label,
      metric: t.niche1Metric,
      accent: "from-sui to-blue-400",
      description: t.niche1Desc,
    },
    {
      id: "experts",
      label: t.niche2Label,
      metric: t.niche2Metric,
      accent: "from-blue-500 to-indigo-400",
      description: t.niche2Desc,
    },
    {
      id: "saas-web3-med",
      label: t.niche3Label,
      metric: t.niche3Metric,
      accent: "from-cyan-400 to-sui",
      description: t.niche3Desc,
    }
  ];

  const [activeNicheId, setActiveNicheId] = useState("streamers");
  const activeNiche = Niches.find(n => n.id === activeNicheId) || Niches[0];

  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 px-6 flex flex-col items-center justify-center overflow-hidden bg-space-black"
    >
      {/* 3D Radiant Background Mesh Effect */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Radar-like technical grid */}
        <div className="absolute inset-x-0 top-0 h-[600px] bg-[radial-gradient(circle_at_center,rgba(56,152,236,0.08)_0%,transparent_70%)] opacity-80" />
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-tr from-sui/10 via-[#1E429F]/5 to-transparent blur-[120px] rounded-full"
          style={{ transform: "translate3d(-50%, -50%, 0) rotate(15deg)" }}
        />
        
        {/* Technological wireframe grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_at_center,black_40%,transparent_100%)] opacity-30" />
      </div>

      {/* Floating Status Badge */}
      <div 
        id="hero-status-badge"
        className="z-10 mb-6 flex items-center gap-2 px-4 py-1.5 rounded-full bg-space-gray/90 border border-sui/20 text-xs font-mono text-gray-300 backdrop-blur-md hover:border-sui/50 transition-colors animate-fade-in"
      >
        <span className="flex h-2.5 w-2.5 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sui opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sui"></span>
        </span>
        <span className="text-gray-400">{language === 'pl' ? "Status:" : "Available:"}</span> 
        <span className="text-sui font-medium">
          {language === 'pl' ? "2 wolne miejsca na Q2 2026" : "2 Active Spots for Q2 2026"}
        </span>
      </div>

      {/* Primary Hero Text Container */}
      <div className="relative z-10 max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Eyebrow text matching screenshot reference */}
        <span 
          id="hero-eyebrow" 
          className="text-xs md:text-sm font-semibold tracking-[0.25em] text-sui uppercase font-display mb-4"
        >
          {t.heroEyebrow}
        </span>

        {/* Main Headline with high-contrast editorial font for the word 'automated' */}
        <h1 
          id="hero-headline" 
          className="text-4xl sm:text-5xl md:text-[5.5rem] md:leading-[1.1] font-bold tracking-tight text-white font-display mb-6 max-w-5xl"
        >
          {t.heroHeadlineMain1}<span className="font-editorial italic text-sui font-light lowercase tracking-normal drop-shadow-[0_0_20px_rgba(56,152,236,0.6)] px-1 relative">{t.heroHeadlineAutomated}</span>{t.heroHeadlineMain2}
        </h1>

        {/* Subheadline matching request with Space Grotesk font */}
        <p 
          id="hero-subheadline" 
          className="text-base sm:text-sm md:text-sm text-gray-400 font-display max-w-2xl leading-relaxed mb-10 opacity-80"
        >
          {t.heroSubheadline}
        </p>

        {/* Action Buttons redesigned styled to match the uploaded screenshot */}
        <div id="hero-cta-container" className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full mb-16">
          <button
            id="hero-primary-cta"
            onClick={onBookCallClick}
            className="w-full sm:w-auto px-8 py-4 bg-sui hover:bg-sui/90 text-black font-display font-bold rounded-none transition-all duration-300 shadow-[0_4px_25px_rgba(56,152,236,0.35)] hover:shadow-sui/50 flex items-center justify-center gap-2.5 text-xs tracking-widest uppercase cursor-pointer transform hover:-translate-y-0.5"
          >
            <span>{t.heroCtaCall}</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          
          <button
            id="hero-secondary-cta"
            onClick={onSeeWorkClick}
            className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/10 hover:border-white/30 text-white font-display font-semibold rounded-none transition-all duration-300 hover:bg-white/5 flex items-center justify-center gap-2 text-xs tracking-widest uppercase cursor-pointer"
          >
            <span className="text-[9px] text-sui font-sans">▶</span>
            <span>{t.heroCtaWork}</span>
          </button>
        </div>

        {/* Interactive Industry Toggles */}
        <div id="hero-industry-segment" className="w-full max-w-2xl bg-space-gray/80 border border-space-border/80 backdrop-blur-md rounded-2xl p-6 mb-12">
          <p className="text-xs font-mono uppercase text-gray-500 tracking-wider mb-4">
            {t.nichesHeader}
          </p>
          <div className="grid grid-cols-3 gap-2 p-1 bg-black/50 rounded-xl mb-4 border border-space-border/40">
            {Niches.map((niche) => (
              <button
                key={niche.id}
                onClick={() => setActiveNicheId(niche.id)}
                className={`py-2 px-1 md:px-3 rounded-lg text-[10px] md:text-xs font-display font-medium transition-all cursor-pointer truncate ${
                  activeNicheId === niche.id
                    ? "bg-space-card text-white border border-space-border shadow-md"
                    : "text-gray-400 hover:text-white"
                }`}
              >
                {niche.label}
              </button>
            ))}
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 text-left transition-all duration-500 px-2 animate-fade-in">
            <div className="flex-1">
              <span className={`text-xs md:text-sm font-mono uppercase font-bold text-transparent bg-clip-text bg-gradient-to-r ${activeNiche.accent} mb-1 block`}>
                {language === 'pl' ? "Dla kogo?" : "Who is this for?"}
              </span>
              <p className="text-gray-300 text-sm">{activeNiche.description}</p>
            </div>
            <div className="bg-space-card/80 border border-space-border rounded-xl p-3 md:p-4 text-center md:text-right min-w-[140px] flex flex-col justify-center">
              <span className="text-[10px] text-gray-500 uppercase font-mono tracking-wider block">
                {language === 'pl' ? "Docelowy Silnik" : "TARGET FILTER UNIT"}
              </span>
              <span className="text-sm font-bold text-sui font-display block mt-0.5">
                {activeNiche.metric}
              </span>
            </div>
          </div>
        </div>

        {/* Decorative vertical rails inspired by screen reference */}
        <div className="absolute left-6 top-[45%] -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-gray-700/60 select-none pointer-events-none">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
            {t.heroRailLeft}
          </span>
        </div>

        <div className="absolute right-6 top-[45%] -translate-y-1/2 hidden xl:flex flex-col items-center gap-4 text-gray-700/60 select-none pointer-events-none">
          <span className="text-[9px] font-mono tracking-[0.25em] uppercase whitespace-nowrap [writing-mode:vertical-lr] rotate-180">
            {t.heroRailRight}
          </span>
        </div>

        {/* Quick System Statistics exactly matching screenshot with 3 distinct minimalist columns */}
        <div id="hero-stats" className="grid grid-cols-3 gap-8 w-full max-w-4xl border-t border-space-border/50 pt-16 mt-8">
          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-[2.75rem] font-bold font-display text-white tracking-tight">15M+</p>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500 mt-2 block text-center font-bold">
              {t.statViews}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center border-l border-r border-space-border/20 px-4">
            <p className="text-3xl md:text-[2.75rem] font-bold font-display text-white tracking-tight">18</p>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500 mt-2 block text-center font-bold">
              {t.statBrands}
            </span>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="text-3xl md:text-[2.75rem] font-bold font-display text-white tracking-tight">4.6×</p>
            <span className="text-[9px] md:text-[10px] font-mono uppercase tracking-[0.22em] text-gray-500 mt-2 block text-center font-bold">
              {t.statRoas}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}


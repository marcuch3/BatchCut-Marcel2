import { useState, useEffect } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Sparkles, Play, Pause, RefreshCw, Layers, CheckCircle, Smartphone, Flame, FileText, Wand2 } from "lucide-react";

export default function InteractiveStudio() {
  const { language } = useLanguage();
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(15);
  
  // Custom interactive variables
  const [selectedHook, setSelectedHook] = useState("contra");
  const [selectedTheme, setSelectedTheme] = useState("cyberpunk");
  const [selectedSubtitle, setSelectedSubtitle] = useState("sui");

  // Hook datasets
  const Hooks = {
    contra: {
      text: language === "pl" 
        ? "💥 Przestań tworzyć content jak w 2024, jeśli chcesz skalować..." 
        : "💥 Stop creating content like 2024 if you want to scale...",
      kpi: language === "pl" ? "+94% Retencji w 3 sek." : "+94% Retention First 3s",
      meta: language === "pl" 
        ? "Hook oparty na kontra-narracji. Buduje dysonans poznawczy." 
        : "Contra-momentum hook. Distributes cognitive dissonance.",
      title: language === "pl" ? "Kontra-Narracja" : "Contra-Momentum",
    },
    data: {
      text: language === "pl" 
        ? "💀 97% właścicieli agencji popełnia ten fatalny błąd..." 
        : "💀 97% of Agency Owners make this fatal channel mistake...",
      kpi: language === "pl" ? "+88% Retencji w 3 sek." : "+88% Retention First 3s",
      meta: language === "pl" 
        ? "Analityczny hook autorytetu. Uruchamia mechanizm FOMO." 
        : "Analytical authority hook. Installs fear-of-missing-out.",
      title: language === "pl" ? "Analityczny Szok" : "Analytical Shock",
    },
    system: {
      text: language === "pl" 
        ? "⚡ Zautomatyzowaliśmy 30 rolek premium w zaledwie 3 godziny..." 
        : "⚡ We automated 30 premium short-videos in just 3 hours...",
      kpi: language === "pl" ? "+98% Retencji w 3 sek." : "+98% Retention First 3s",
      meta: language === "pl" 
        ? "Hook oparty na dowodzie (Case-Study). Wzbudza czystą ciekawość." 
        : "Case-study evidence hook. Induces pure curiosity.",
      title: language === "pl" ? "Dowód & System" : "Evidence Blueprint",
    }
  };

  // Theme datasets  
  const Themes = {
    cyberpunk: {
      name: "Sui Cyberpunk",
      desc: language === "pl" ? "Elektryczna, niebieska atmosfera" : "Electric blue atmosphere",
      overlay: "bg-radial from-sui/10 via-transparent to-black/80",
      vibe: "#3898EC",
    },
    executive: {
      name: language === "pl" ? "Monominimalizm" : "Monominimalist",
      desc: language === "pl" ? "Luksusowy sznyt korporacyjny" : "Rich corporate luxury",
      overlay: "bg-radial from-neutral-800/20 via-transparent to-black/90",
      vibe: "#9CA3AF",
    },
    vandal: {
      name: "Vandal Edit",
      desc: language === "pl" ? "Dynamiczny styl streetwearowy" : "Streetwear punch cues",
      overlay: "bg-radial from-[#9333EA]/15 via-transparent to-black/85",
      vibe: "#C084FC",
    }
  };

  // Subtitle styling datasets
  const Subtitles = {
    sui: {
      name: "Sui Kinetic Gloss",
      desc: language === "pl" ? "System świecących konturów" : "Glow outline system",
      textStyle: "text-sui uppercase tracking-tighter text-shadow-[0_0_12px_rgba(56,152,236,0.6)] font-bold",
    },
    hormozi: {
      name: language === "pl" ? "Impact Retencyjny" : "Retention Impact",
      desc: language === "pl" ? "Agresywne podkreślenia" : "In-your-face highlight",
      textStyle: "text-[#FBBF24] font-black uppercase italic tracking-wide font-display",
    },
    luxury: {
      name: language === "pl" ? "Cichy Luksus" : "Silent Luxury",
      desc: language === "pl" ? "Czysty minimalizm" : "Clean lowercases",
      textStyle: "text-white lowercase tracking-widest font-light italic font-sans",
    }
  };

  // Safe side effect to simulate play progress loop
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying) {
      interval = setInterval(() => {
        setProgress((prev) => (prev >= 100 ? 0 : prev + 1));
      }, 80);
    }
    return () => clearInterval(interval);
  }, [isPlaying]);

  const activeHook = Hooks[selectedHook as keyof typeof Hooks] || Hooks.contra;
  const activeTheme = Themes[selectedTheme as keyof typeof Themes] || Themes.cyberpunk;
  const activeSub = Subtitles[selectedSubtitle as keyof typeof Subtitles] || Subtitles.sui;

  return (
    <section id="studio" className="py-24 border-t border-space-border/60 bg-gradient-to-b from-space-black via-space-gray to-space-black relative">
      <div className="absolute left-10 top-1/4 w-[300px] h-[300px] bg-sui/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block">
            {language === "pl" ? "INTERAKTYWNY SILNIK" : "INTERACTIVE ENGINE"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            {language === "pl" ? "Zobacz maszynę postprodukcyjną " : "See the post-production "} 
            <span className="text-gradient-blue font-display">
              {language === "pl" ? "w akcji." : "machine in action."}
            </span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed">
            {language === "pl" 
              ? "Przetestuj nasze wyspecjalizowane komponenty postprodukcyjne poniżej. Zmieniaj formaty hooków, presety kolorystyczne i style napisów, aby zobaczyć, jak natychmiast maksymalizujemy retencję." 
              : "Toggle our specialized post-production components below. Test different hook formats, color presets, and subtitling styles to see how we maximize retention instantly."}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Controls UI Panel (Left Column) */}
          <div className="lg:col-span-6 space-y-8">
            {/* Widget 1: Select Hook */}
            <div id="control-hook" className="bg-space-card/80 border border-space-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <FileText className="w-5 h-5 text-sui" />
                <h3 className="text-base font-bold font-display text-white">
                  {language === "pl" ? "1. Wybierz Strukturę Hooka" : "1. Select Attention Hook Structure"}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedHook("contra")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedHook === "contra"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Hooks.contra.title}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Hooks.contra.kpi}</span>
                </button>
                
                <button
                  onClick={() => setSelectedHook("data")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedHook === "data"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Hooks.data.title}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Hooks.data.kpi}</span>
                </button>

                <button
                  onClick={() => setSelectedHook("system")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedHook === "system"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Hooks.system.title}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Hooks.system.kpi}</span>
                </button>
              </div>
              <p className="text-xs italic text-gray-500 mt-3 font-mono">
                {activeHook.meta}
              </p>
            </div>

            {/* Widget 2: Select B-Roll/Grade Preset */}
            <div id="control-theme" className="bg-space-card/80 border border-space-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Wand2 className="w-5 h-5 text-sui" />
                <h3 className="text-base font-bold font-display text-white">
                  {language === "pl" ? "2. Preset Kolorystyczny & Grading" : "2. Color Preset & Ambient Grading"}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedTheme("cyberpunk")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedTheme === "cyberpunk"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Themes.cyberpunk.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Themes.cyberpunk.desc}</span>
                </button>

                <button
                  onClick={() => setSelectedTheme("executive")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedTheme === "executive"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Themes.executive.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Themes.executive.desc}</span>
                </button>

                <button
                  onClick={() => setSelectedTheme("vandal")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedTheme === "vandal"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Themes.vandal.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Themes.vandal.desc}</span>
                </button>
              </div>
            </div>

            {/* Widget 3: Subtitle Overlay System */}
            <div id="control-subtitle" className="bg-space-card/80 border border-space-border rounded-2xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Layers className="w-5 h-5 text-sui" />
                <h3 className="text-base font-bold font-display text-white">
                  {language === "pl" ? "3. Wybierz Styl Kinetycznych Napisów" : "3. Choose Kinetic Titles Overlay"}
                </h3>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <button
                  onClick={() => setSelectedSubtitle("sui")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedSubtitle === "sui"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Subtitles.sui.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Subtitles.sui.desc}</span>
                </button>

                <button
                  onClick={() => setSelectedSubtitle("hormozi")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedSubtitle === "hormozi"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Subtitles.hormozi.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Subtitles.hormozi.desc}</span>
                </button>

                <button
                  onClick={() => setSelectedSubtitle("luxury")}
                  className={`py-3 px-4 rounded-xl border text-left cursor-pointer transition-all ${
                    selectedSubtitle === "luxury"
                      ? "bg-sui/10 border-sui text-white"
                      : "bg-space-black/40 border-space-border/50 text-gray-400 hover:text-white"
                  }`}
                >
                  <span className="text-xs font-bold block mb-1">{Subtitles.luxury.name}</span>
                  <span className="text-[10px] text-gray-500 block line-clamp-1">{Subtitles.luxury.desc}</span>
                </button>
              </div>
            </div>
          </div>

          {/* Luxury Video Simulation Block (Right Column) */}
          <div className="lg:col-span-6 flex justify-center">
            
            <div className="relative w-full max-w-[340px] aspect-[9/16] rounded-[36px] bg-[#0E0E0E] p-3 border-[6px] border-[#222] shadow-2xl overflow-hidden self-center group">
              {/* Dynamic Overlay background */}
              <div className={`absolute inset-0 z-0 transition-all duration-700 ${activeTheme.overlay}`} />
              
              {/* Camera viewfinder grids */}
              <div className="absolute inset-0 z-10 pointer-events-none p-4 flex flex-col justify-between">
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
                  <span>REC [4K 60FPS]</span>
                  <span className="text-red-500 flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-pulse"></span>
                    LIVE
                  </span>
                </div>
                <div className="w-full h-[1px] bg-white/5" />
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500">
                  <span>ISO 400</span>
                  <span>LUT_01_SUI</span>
                </div>
              </div>

              {/* Speaker Video Silhouette simulation */}
              <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70">
                <svg className="w-full h-full text-[#1C1C1C]" viewBox="0 0 100 100" fill="none">
                  {/* Glowing background circles customized to Selected Theme vibe */}
                  <circle cx="50" cy="50" r="28" fill={activeTheme.vibe} opacity="0.08" className="animate-pulse" />
                  <path d="M50 35C54.4183 35 58 31.4183 58 27C58 22.5817 54.4183 19 50 19C45.5817 19 42 22.5817 42 27C42 31.4183 45.5817 35 50 35Z" fill="#333" />
                  <path d="M50 39C36.7452 39 26 48.7452 26 61C26 64.3137 28.6863 67 32 67H68C71.3137 67 74 64.3137 74 61C74 48.7452 63.2548 39 50 39Z" fill="#292929" />
                  {/* Dynamic audio ripples */}
                  {isPlaying && (
                    <>
                      <line x1="15" y1="75" x2="15" y2="85" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                      <line x1="25" y1="72" x2="25" y2="88" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" />
                      <line x1="35" y1="68" x2="35" y2="92" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                      <line x1="45" y1="74" x2="45" y2="86" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" />
                      <line x1="55" y1="70" x2="55" y2="90" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                      <line x1="65" y1="73" x2="65" y2="87" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" />
                      <line x1="75" y1="75" x2="75" y2="85" stroke={activeTheme.vibe} strokeWidth="2" strokeLinecap="round" className="animate-pulse" />
                    </>
                  )}
                </svg>
              </div>

              {/* Dynamic Kinetic Subtitle Display Container */}
              <div className="absolute inset-x-4 bottom-24 z-20 text-center select-none pointer-events-none p-3 rounded-xl bg-black/40 backdrop-blur-xs border border-white/5 transition-all">
                <span className="text-[10px] font-mono block text-gray-500 mb-2 uppercase tracking-widest">
                  {language === "pl" ? "// AUTO NAPISY //" : "// AUTO SUBTITLE //"}
                </span>
                <p className={`text-base leading-snug transition-all duration-300 ${activeSub.textStyle}`}>
                  {activeHook.text}
                </p>
              </div>

              {/* Video Player Controls UI */}
              <div className="absolute bottom-4 inset-x-4 z-20 flex flex-col gap-3">
                {/* Simulated Seek Bar */}
                <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-sui transition-all duration-100 ease-out"
                    style={{ width: `${progress}%` }}
                  />
                </div>

                <div className="flex items-center justify-between">
                  {/* Play & Reset toggles */}
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center cursor-pointer hover:bg-sui transition-colors text-xs"
                      aria-label={isPlaying ? "Pause System Simulation" : "Play System Simulation"}
                    >
                      {isPlaying ? <Pause className="w-3.5 h-3.5 fill-black" /> : <Play className="w-3.5 h-3.5 fill-black ml-0.5" />}
                    </button>
                    
                    <button
                      onClick={() => setProgress(0)}
                      className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/15 text-white flex items-center justify-center cursor-pointer transition-colors"
                      aria-label="Restart Video"
                    >
                      <RefreshCw className="w-3.5 h-3.5" />
                    </button>
                  </div>

                  {/* Diagnostic details */}
                  <div className="flex items-center gap-1.5 bg-black/70 border border-white/10 px-2.5 py-1 rounded-full font-mono text-[9px]">
                    <Smartphone className="w-3 h-3 text-sui" />
                    <span className="text-white font-mono">{activeHook.kpi}</span>
                  </div>
                </div>
              </div>

              {/* Top notch detail for executive touch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-5 bg-[#222] rounded-full z-30 flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-black border border-white/5" />
                <div className="w-10 h-1.5 bg-[#444] rounded-full ml-4" />
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

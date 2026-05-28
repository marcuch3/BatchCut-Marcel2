import { useState } from "react";
import { TrendingUp, ArrowUpRight, Play, Eye, Sparkles, CheckCircle, BarChart3, Users } from "lucide-react";
import { WorkItem } from "../types";

export default function CaseStudies() {
  const works: WorkItem[] = [
    {
      id: "fintech-ceo",
      title: "FinTech CEO Personal Brand Launch",
      category: "FINTECH & SEED SAAS",
      metrics: "3.2M views in 30 days",
      growthFactor: "14.2x audience multiple",
      duration: "30 Days Active",
      views: "3,240,000",
      aspectRatio: "portrait",
      tags: ["Kinetic Overlay", "Founder Storytelling", "High-Ticket Funnel"],
    },
    {
      id: "agency-founder",
      title: "Outbound Agency Scale Strategy",
      category: "B2B SERVICES & AGENCIES",
      metrics: "$240K recurring pipeline",
      growthFactor: "28 booked meetings/mo",
      duration: "60 Days Active",
      views: "1,850,000",
      aspectRatio: "portrait",
      tags: ["Client Case Study", "Corporate Minimalist", "Warm Lead Magnets"],
    },
    {
      id: "vc-fund",
      title: "Web3 Venture Studio Syndication",
      category: "VENTURE CAPITAL & CRYPTO",
      metrics: "6.8M organic impressions",
      growthFactor: "+14,200 newsletter subs",
      duration: "45 Days Active",
      views: "6,810,000",
      aspectRatio: "portrait",
      tags: ["Deep Dives", "3D Motion Grids", "Community Synergies"],
    }
  ];

  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [selectedCase, setSelectedCase] = useState<string>("fintech-ceo");

  const activeCase = works.find(w => w.id === selectedCase) || works[0];

  // Visual custom chart pathways for organic growth curves
  const getGrowthChartPath = (id: string) => {
    switch (id) {
      case "fintech-ceo":
        // Exponential trajectory curves
        return "M 0 160 Q 50 150, 100 130 T 200 80 T 300 10";
      case "agency-founder":
        // Consistent linear scale curve
        return "M 0 160 Q 60 140, 120 110 T 240 60 T 300 25";
      case "vc-fund":
        // Huge breakout hockey-stick curve
        return "M 0 160 Q 40 155, 100 145 T 200 100 T 300 5";
      default:
        return "M 0 160 Q 100 140, 200 80 T 300 10";
    }
  };

  return (
    <section id="works" className="py-24 bg-space-black relative border-t border-space-border/60">
      <div className="absolute right-10 bottom-10 w-[400px] h-[400px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <span className="text-xs font-mono tracking-widest text-sui uppercase font-bold bg-sui/10 px-3 py-1 rounded-full">
              VIRAL CASE DIARIES
            </span>
            <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
              Case studies that <span className="text-gradient-blue font-display">convert viewers.</span>
            </h2>
          </div>
          <p className="text-gray-400 font-sans max-w-sm text-sm leading-relaxed">
            Every view is strategically optimized. We don't just build impressions; we build high-ticket sales pipelines and organic authority.
          </p>
        </div>

        {/* Master layout for Case Studies */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Case Studies Navigation List Selector (Left Columns) */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {works.map((work) => {
              const isActive = work.id === selectedCase;
              return (
                <button
                  key={work.id}
                  onClick={() => setSelectedCase(work.id)}
                  onMouseEnter={() => setHoveredId(work.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`group relative text-left p-6 rounded-2xl border transition-all cursor-pointer ${
                    isActive
                      ? "bg-space-gray border-sui/50 sui-glow-sm"
                      : "bg-transparent border-space-border/50 hover:border-gray-700"
                  }`}
                >
                  <span className="text-[10px] font-mono tracking-wider text-sui font-bold block mb-2">
                    {work.category}
                  </span>
                  
                  <h3 className="text-base font-bold font-display text-white group-hover:text-sui transition-colors mb-4">
                    {work.title}
                  </h3>
                  
                  <div className="flex items-center justify-between text-xs font-mono text-gray-500">
                    <span className="flex items-center gap-1">
                      <Eye className="w-3.5 h-3.5 text-gray-500" />
                      {work.duration}
                    </span>
                    <span className="text-white font-bold">{work.metrics.split(" in ")[0]}</span>
                  </div>

                  {/* Absolute subtle right indicator */}
                  <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-sui" />
                  </div>
                </button>
              );
            })}
          </div>

          {/* Deep Analytics Showcase Viewer (Right Columns) */}
          <div className="lg:col-span-8 bg-space-gray border border-space-border rounded-3xl p-8 relative overflow-hidden">
            {/* Ambient subtle backdrop mesh */}
            <div className="absolute inset-0 bg-radial from-sui/5 via-transparent to-transparent pointer-events-none" />

            <div className="relative z-10">
              {/* Top Meta info panel */}
              <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-space-border pb-6 mb-8 gap-4">
                <div>
                  <span className="text-xs font-mono text-sui uppercase font-bold px-2.5 py-1 bg-sui/15 rounded-md">
                    {activeCase.category}
                  </span>
                  <h3 className="text-xl md:text-2xl font-bold font-display text-white mt-3">
                    {activeCase.title}
                  </h3>
                </div>
                
                {/* Secondary highlight KPIs */}
                <div className="flex items-center gap-2 bg-space-card/85 border border-space-border px-4 py-2 rounded-xl">
                  <TrendingUp className="w-4 h-4 text-sui" />
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono block">GROWTH FACTOR</span>
                    <span className="text-xs text-white font-bold font-mono">{activeCase.growthFactor}</span>
                  </div>
                </div>
              </div>

              {/* Graphic Data chart simulator */}
              <div className="bg-space-card/60 border border-space-border rounded-2xl p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <BarChart3 className="w-4 h-4 text-sui" />
                    <span className="text-xs font-mono text-gray-400">AUDIENCE IMPRESSIONS VELOCITY</span>
                  </div>
                  <span className="text-[10px] font-mono text-gray-500">REAL-TIME TRAFFIC PATTERNS</span>
                </div>

                <div className="relative h-44 w-full flex items-end">
                  {/* Grid Lines */}
                  <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
                    <div className="w-full h-[1px] bg-white/5" />
                    <div className="w-full h-[1px] bg-white/5" />
                    <div className="w-full h-[1px] bg-white/5" />
                    <div className="w-full h-[1px] bg-white/5" />
                  </div>

                  {/* Line Chart path rendering */}
                  <svg className="w-full h-full overflow-visible z-10" viewBox="0 0 300 160" preserveAspectRatio="none">
                    <defs>
                      <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#3898EC" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="#3898EC" stopOpacity="0.0" />
                      </linearGradient>
                    </defs>
                    {/* Fill Area */}
                    <path
                      d={`${getGrowthChartPath(activeCase.id)} L 300 160 L 0 160 Z`}
                      fill="url(#chartGradient)"
                      className="transition-all duration-700 ease-in-out"
                    />
                    {/* Glowing Stroke Line */}
                    <path
                      d={getGrowthChartPath(activeCase.id)}
                      fill="none"
                      stroke="#3898EC"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      className="transition-all duration-700 ease-in-out"
                    />
                  </svg>
                  
                  {/* Absolute glowing coordinates markers */}
                  <div className="absolute right-2 top-2 bg-sui/25 border border-sui px-2 py-0.5 rounded text-[10px] font-mono text-sui font-bold animate-pulse">
                    VIRAL BREAKOUT
                  </div>
                </div>

                <div className="flex justify-between items-center mt-3 text-[10px] font-mono text-gray-500">
                  <span>Day 1: Base Topic Mapping</span>
                  <span>Day 15: Optimization Loop</span>
                  <span>Day 30: Scale Peak</span>
                </div>
              </div>

              {/* Specific Framework takeaways */}
              <div className="space-y-4">
                <h4 className="text-xs font-mono uppercase text-gray-400 tracking-wider">
                  Post-Production Framework Highlights
                </h4>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {activeCase.tags.map((tag, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 bg-space-black/40 border border-space-border/60 p-3.5 rounded-xl text-xs text-gray-300 font-sans"
                    >
                      <CheckCircle className="w-4 h-4 text-sui shrink-0" />
                      <span>{tag}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

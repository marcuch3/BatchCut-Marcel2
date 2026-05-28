import { Video, Cpu, Sparkles, Award, Zap, Linkedin, Instagram, Youtube, HardDrive } from "lucide-react";

export default function BentoGrid() {
  return (
    <section id="bento" className="py-24 border-t border-space-border/60 bg-gradient-to-b from-space-black via-space-gray to-space-black relative">
      <div className="absolute right-10 top-1/4 w-[300px] h-[300px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block">
            DIRECTOR INTEL
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            Designed for <span className="text-gradient-blue font-display">discerning founders.</span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed">
            We don't do low-effort templates or spam tactics. Every system, frame, and syllable is engineered to match the luxury tech standards of premier brands.
          </p>
        </div>

        {/* Bento Grid Layout - Balanced combination of cols/rows and heights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[250px] md:auto-rows-[220px]">
          
          {/* Card 1: Cinema Gear Class (Span 2 Cols, Span 2 Rows on md) */}
          <div className="md:col-span-2 md:row-span-2 bg-space-card/85 border border-space-border hover:border-sui/30 transition-all rounded-3xl p-8 relative overflow-hidden group flex flex-col justify-between">
            {/* Background design representation */}
            <div className="absolute top-0 right-0 w-80 h-80 bg-[radial-gradient(ellipse_at_top_right,rgba(56,152,236,0.12),transparent)] pointer-events-none group-hover:scale-110 transition-transform duration-500" />
            
            <div className="flex justify-between items-start z-10">
              <div className="p-3 bg-sui/10 rounded-2xl border border-sui/20 text-sui">
                <Video className="w-6 h-6" />
              </div>
              <span className="text-[10px] font-mono text-gray-400 tracking-wider">PRODUCTION // SPECS_01</span>
            </div>

            <div className="z-10 mt-12">
              <span className="text-[10px] font-mono tracking-wider text-sui font-bold block mb-1 uppercase">10-Bit Cinematic Inbound</span>
              <h3 className="text-xl md:text-2xl font-bold font-display text-white mb-3">
                Hollywood gear in your pocket
              </h3>
              <p className="text-gray-400 font-sans text-sm max-w-lg leading-relaxed">
                We design and ship a tailored recording kit consisting of elite noise-isolating microphones and ultra-flat studio lighting grids. Your videos will command immediate visual authority on busy social feeds.
              </p>
            </div>
          </div>

          {/* Card 2: Strategic Focus (Span 1 Col, Span 1 Row) */}
          <div className="bg-space-card/85 border border-space-border hover:border-sui/30 transition-all rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-sui/10 rounded-xl border border-sui/20 text-sui">
                <Sparkles className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-gray-500">PHILOSOPHY</span>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold font-display text-white mb-1">
                Executive Authority
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                No high-pitched screamers, no bait-and-switch hooks. We establish clean, respectable high-ticket thought leadership.
              </p>
            </div>
          </div>

          {/* Card 3: SLA Pipeline Speed (Span 1 Col, Span 1 Row) */}
          <div className="bg-space-card/85 border border-space-border hover:border-sui/30 transition-all rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-sui/10 rounded-xl border border-sui/20 text-sui">
                <Zap className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-gray-500">SPEED SLA</span>
            </div>

            <div className="mt-6">
              <h3 className="text-base font-bold font-display text-white mb-1">
                48-Hour Guarantee
              </h3>
              <p className="text-xs text-gray-400 font-sans leading-relaxed">
                Our post-production scripts are fully automated. Get your premium cut variations in less than 2 business days.
              </p>
            </div>
          </div>

          {/* Card 4: Scale Platform Support (Span 1 Col, Span 1 Row on md) */}
          <div className="bg-space-card/85 border border-space-border hover:border-sui/30 transition-all rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
            <div className="flex justify-between items-start">
              <div className="p-3 bg-sui/10 rounded-xl border border-sui/20 text-sui">
                <HardDrive className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-gray-500">OMNIPRESENCE</span>
            </div>

            <div className="mt-4">
              <h3 className="text-sm font-bold font-display text-white mb-2">Cross-Platform Syndication</h3>
              <div className="flex gap-2.5">
                <div className="p-2 bg-black/40 border border-space-border rounded-lg text-gray-400 group-hover:text-sui transition-colors">
                  <Linkedin className="w-4 h-4" />
                </div>
                <div className="p-2 bg-black/40 border border-space-border rounded-lg text-gray-400 group-hover:text-sui transition-colors">
                  <Instagram className="w-4 h-4" />
                </div>
                <div className="p-2 bg-black/40 border border-space-border rounded-lg text-gray-400 group-hover:text-sui transition-colors">
                  <Youtube className="w-4 h-4" />
                </div>
              </div>
            </div>
          </div>

          {/* Card 5: Automation Machinery (Span 2 Cols, Span 1 Row on md) */}
          <div className="md:col-span-2 bg-space-card/85 border border-space-border hover:border-sui/30 transition-all rounded-3xl p-6 relative overflow-hidden group flex flex-col justify-between">
            <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(circle_at_top_right,rgba(56,152,236,0.08),transparent)] pointer-events-none" />
            
            <div className="flex justify-between items-start">
              <div className="p-2 bg-sui/10 rounded-xl border border-sui/20 text-sui">
                <Cpu className="w-5 h-5" />
              </div>
              <span className="text-[9px] font-mono text-gray-500">AUTOMATION // INFRA</span>
            </div>

            <div className="mt-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
              <div>
                <h3 className="text-base font-bold font-display text-white mb-1">
                  Proprietary Auto-Edit Pipeline
                </h3>
                <p className="text-xs text-gray-400 font-sans max-w-md">
                  We use custom video compiler scripts to ingest raw audio waveforms and composite responsive glow subtitles, cutting turnaround times by 75%.
                </p>
              </div>
              
              <div className="font-mono text-[10px] text-sui bg-sui/10 border border-sui/30 rounded py-1 px-2 shrink-0">
                AUTO_GRADE_ACTIVE // OK
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

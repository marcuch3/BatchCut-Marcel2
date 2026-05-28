import { useEffect, useRef } from "react";
import { Sparkles, Cpu, Trophy, TrendingUp, Zap, Target } from "lucide-react";

export default function Marquee() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Safely retrieve the global GSAP loaded from CDN
    const gsap = (window as any).gsap;

    if (!gsap) {
      console.warn("GSAP CDN not detected in time. Falling back to retry check.");
      // Small timeout retry in case script finishes loading slightly late
      const timer = setTimeout(() => {
        const recheckGsap = (window as any).gsap;
        if (recheckGsap) {
          initializeMarquee(recheckGsap);
        }
      }, 500);
      return () => clearTimeout(timer);
    }

    const { cleanup } = initializeMarquee(gsap);
    return cleanup;
  }, []);

  const initializeMarquee = (gsap: any) => {
    const carousels = document.querySelectorAll("[data-carousel]");
    const activeTimelines: any[] = [];

    carousels.forEach((carouselHTML) => {
      const carousel = carouselHTML as HTMLElement;
      const track = carousel.querySelector("[data-carousel-track]") as HTMLElement;
      const item = carousel.querySelector("[data-carousel-item]") as HTMLElement;

      if (!track || !item) return;

      const speedSec = parseFloat(carousel.getAttribute("data-carousel-speed") || "15");
      const duplicateCount = parseInt(carousel.getAttribute("data-carousel-duplicate") || "2", 10);

      // Create DocumentFragment to append clones
      const fragment = document.createDocumentFragment();
      for (let i = 0; i < duplicateCount + 1; i++) {
        const clone = item.cloneNode(true) as HTMLElement;
        fragment.appendChild(clone);
      }
      track.appendChild(fragment);

      // Create GSAP Timeline for seamless loop
      const tl = gsap.timeline({ repeat: -1 });
      tl.to(track, {
        xPercent: -50,
        duration: speedSec,
        ease: "none", // Linear animation is crucial for marquees
      });

      activeTimelines.push(tl);
    });

    return {
      cleanup: () => {
        activeTimelines.forEach((tl) => tl.kill());
      },
    };
  };

  const partners = [
    { name: "THE CRYPTO KLEIN", metric: "+10M VIEWS SOURCED", icon: <Cpu className="w-4 h-4 text-[#FF5100]" />, accent: "from-[#FF5100] to-[#FF8000]" },
    { name: "MAXDATA CORE", metric: "3.2M+ ACTIVE VISUALS", icon: <TrendingUp className="w-4 h-4 text-[#3898EC]" />, accent: "from-sui to-[#83C5FF]" },
    { name: "VANCE VENTURES", metric: "$4.2M HIGH-TICKET PIPELINE", icon: <Trophy className="w-4 h-4 text-[#FF5100]" />, accent: "from-[#FF5100] to-[#E64A19]" },
    { name: "SAASIFY OUTBOUND", metric: "12X CONVERSION RATIO", icon: <Zap className="w-4 h-4 text-[#3898EC]" />, accent: "from-sui to-blue-400" },
    { name: "AURA STUDIO", metric: "34M IMPRESSIONS SOURCED", icon: <Target className="w-4 h-4 text-[#FF5100]" />, accent: "from-[#FF8000] to-[#FF5100]" },
    { name: "SOLANA LABS FOUNDER", metric: "AUDIT ACTIVE", icon: <Sparkles className="w-4 h-4 text-[#3898EC]" />, accent: "from-sui to-[#FF5100]" }
  ];

  return (
    <section id="trusted-ticker" className="py-12 bg-black border-t border-b border-space-border/60 relative overflow-hidden">
      {/* Background neon contrast highlights */}
      <div className="absolute inset-x-0 top-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5100]/40 to-transparent" />
      <div className="absolute left-1/4 top-1/2 -translate-y-1/2 w-80 h-12 bg-[#FF5100]/5 blur-lg rounded-full pointer-events-none" />
      <div className="absolute right-1/4 top-1/2 -translate-y-1/2 w-80 h-12 bg-sui/5 blur-lg rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 mb-4">
        <p className="text-[10px] font-mono tracking-[0.2em] text-[#FF5100] uppercase font-bold text-center">
          ⚡ CONTINUOUS TRUSTED MARQUEE // LIVE SCALE STATISTICS
        </p>
      </div>

      {/* Infinite Scrolling Container */}
      <div
        ref={marqueeRef}
        data-carousel
        data-carousel-speed="36"
        data-carousel-duplicate="2"
        className="w-full overflow-hidden py-4 select-none relative"
      >
        {/* Track containing flex items */}
        <div
          data-carousel-track
          className="flex whitespace-nowrap will-change-transform"
          style={{ width: "max-content", display: "flex", flexDirection: "row", flexWrap: "nowrap" }}
        >
          {/* Main Item Wrapper containing logos */}
          <div
            data-carousel-item
            className="flex items-center gap-10 px-5 shrink-0"
          >
            {partners.map((partner, idx) => (
              <div
                key={idx}
                className="flex items-center gap-4 bg-space-card/85 border border-space-border/80 hover:border-[#FF5100]/30 rounded-2xl py-3 px-6 transition-all duration-300 shadow-md group shrink-0"
              >
                {/* Glowing icon wrapper */}
                <div className="bg-black/50 p-2 rounded-lg border border-space-border flex items-center justify-center transition-colors group-hover:border-[#FF5100]/30">
                  {partner.icon}
                </div>

                <div className="text-left">
                  <span className="text-xs font-bold font-display text-white tracking-widest block uppercase">
                    {partner.name}
                  </span>
                  
                  <div className="flex items-center gap-1.5 mt-0.5">
                    <span className="relative flex h-1.5 w-1.5">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF5100] opacity-75" />
                      <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-[#FF5100]" />
                    </span>
                    <span className={`text-[10px] font-mono font-extrabold tracking-wider bg-clip-text text-transparent bg-gradient-to-r ${partner.accent}`}>
                      {partner.metric}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

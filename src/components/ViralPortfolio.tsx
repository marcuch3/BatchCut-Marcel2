import { useState, useRef, useEffect } from "react";
import { Play, VolumeX, Sparkles, MessageSquare, Quote, Star, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { TestimonialItem } from "../types";
import { useLanguage } from "../context/LanguageContext";

// Highly modular Video Card to isolate playback state & prevent full-grid re-renders
interface VideoCardProps {
  id: string;
  title: string;
  metrics: string;
  category: string;
  posterUrl: string;
  videoUrl: string;
}

function VideoCard({ id, title, metrics, category, posterUrl, videoUrl }: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    if (videoRef.current) {
      if (isHovered) {
        // Safe play call to avoid browser policy restrictions
        videoRef.current.src = videoUrl;
        videoRef.current.load();
        const playPromise = videoRef.current.play();
        if (playPromise !== undefined) {
          playPromise.catch((error) => {
            console.warn("Autoplay was prevented by browser security rules:", error);
          });
        }
      } else {
        videoRef.current.pause();
        videoRef.current.src = "";
      }
    }
  }, [isHovered, videoUrl]);

  return (
    <div
      id={`portfolio-video-${id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative aspect-[9/16] w-full rounded-[24px] bg-space-card border border-space-border hover:border-sui/60 overflow-hidden group transition-all duration-500 cursor-pointer hover:shadow-[0_0_30px_rgba(56,152,236,0.25)] hover:-translate-y-1 block"
    >
      {/* Absolute Header Indicator */}
      <div className="absolute top-4 inset-x-4 z-20 flex justify-between items-center pointer-events-none">
        <span className="text-[9px] font-mono tracking-widest text-[#FFF]/60 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/5 uppercase">
          {category}
        </span>
        <div className="flex items-center gap-1 bg-sui/90 text-black font-mono font-bold text-[9px] py-1 px-2.5 rounded-full uppercase tracking-wider">
          <Sparkles className="w-3 h-3 fill-black/10" />
          <span>{metrics}</span>
        </div>
      </div>

      {/* Native video tag with poster and preload="none" */}
      <video
        ref={videoRef}
        poster={posterUrl}
        preload="none"
        loop
        muted
        playsInline
        referrerPolicy="no-referrer"
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
      />

      {/* Glossy Overlay Mask */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-90 z-10 pointer-events-none" />

      {/* Visual Dynamic Play overlay on idle state */}
      {!isHovered && (
        <div className="absolute inset-0 z-10 flex items-center justify-center pointer-events-none">
          <div className="w-14 h-14 rounded-full bg-sui/15 border border-sui/40 backdrop-blur-md flex items-center justify-center text-sui group-hover:scale-110 group-hover:bg-sui group-hover:text-black transition-all duration-300 shadow-md">
            <Play className="w-6 h-6 fill-current ml-0.5" />
          </div>
        </div>
      )}

      {/* Audio Muted HUD helper on hover state */}
      {isHovered && (
        <div className="absolute right-4 bottom-22 z-20 bg-black/75 px-1.5 py-1 rounded-md text-[9px] font-mono text-gray-400 flex items-center gap-1 border border-white/5 pointer-events-none">
          <VolumeX className="w-3 h-3 text-sui" />
          <span>MUTED</span>
        </div>
      )}

      {/* Bottom Information Text */}
      <div className="absolute bottom-4 inset-x-4 z-20 pointer-events-none">
        <h4 className="font-display font-medium text-white text-sm leading-tight group-hover:text-sui transition-colors">
          {title}
        </h4>
        <div className="flex items-center gap-1 mt-2 text-[10px] font-mono text-gray-500">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span>Hover to preview full retention cut</span>
        </div>
      </div>
    </div>
  );
}

export default function ViralPortfolio() {
  const { language } = useLanguage();

  const videos = [
    {
      id: "reel-editing",
      title: language === "pl" ? "Dynamiczny montaż z wysoką retencją" : "Viral Hook High-Retention Cut",
      category: "ORGANIC REELS",
      metrics: "350K+ VIEWS",
      serviceLabel: "REEL EDITING",
      posterUrl: "https://res.cloudinary.com/dese0tzci/image/upload/v1779907867/3_hxhdbm.png",
      videoUrl: "https://res.cloudinary.com/dese0tzci/video/upload/marek_15sec_1_mfd1bo.mp4",
    },
    {
      id: "vip-content-day",
      title: language === "pl" ? "Dzień zdjęciowy VIP i sesja kreatywna" : "Interactive Creator Deep Work Day",
      category: "VIP BRANDING",
      metrics: "10M+ VIEWS",
      serviceLabel: "VIP CONTENT DAY",
      posterUrl: "https://res.cloudinary.com/dese0tzci/image/upload/v1779907867/2_ubuva6.png",
      videoUrl: "https://res.cloudinary.com/dese0tzci/video/upload/klein_15sec_1_hmfusx.mp4",
    },
    {
      id: "tech-explainer",
      title: language === "pl" ? "Prezentacja produktu i animacje SaaS" : "PropGate.io Ecosystem Dynamic Explainer",
      category: "WEB3 & SAAS",
      metrics: "HIGH RETENTION",
      serviceLabel: "TECH EXPLAINER (SaaS/Web3)",
      posterUrl: "https://res.cloudinary.com/dese0tzci/image/upload/v1779907867/1_azobms.png",
      videoUrl: "https://res.cloudinary.com/dese0tzci/video/upload/propgate_15sec_dndj8k.mp4",
    }
  ];

  const testimonials: TestimonialItem[] = [
    {
      id: "julian",
      name: "Julian",
      role: language === "pl" ? "Współzałożyciel, Maxdata.app" : "Co-Founder, Maxdata.app",
      company: "Maxdata.app",
      avatar: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779908253/julian_ncrwd8.jpg",
      quote: language === "pl"
        ? "Marcel to ktoś więcej niż tylko montażysta; to strateg, który naprawdę rozumie niszę krypto. Nie tylko tnie klipy, ale projektuje haczyki o wysokiej retencji, które generują realne zaangażowanie. Niezależnie od tego, czy chodzi o skomplikowane poradniki tradingowe, czy newsy o dużym impakcie, wie, jak ująć treść, by zamienić widzów w leady. Powierzam mu mój główny kanał, ponieważ za każdym razem dostarcza doskonałość."
        : "Marcel is more than just an editor; he's a strategist who truly understands the crypto niche. He doesn't just cut clips, but designs high-retention hooks that drive real engagement. Whether it's complex trading tutorials or high-impact news, he knows how to frame the content to convert viewers into leads. I trust him with my main channel because he delivers excellence every single time.",
      stats: "Maxdata.app"
    },
    {
      id: "thecryptoklein",
      name: "TheCryptoKlein",
      role: language === "pl" ? "Influencer i Twórca Krypto" : "Crypto Influencer & Creator",
      company: "Crypto Creator",
      avatar: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779908277/IMG_8246_hmxp0t.jpg",
      quote: language === "pl"
        ? "Praca z Marcelem całkowicie zmieniła moją grę contentową. Działa jak prawdziwy strateg treści: stale wspólnie burzujemy mózgi, a jego spostrzeżenia rynkowe są niesamowite. Dzięki jego systemowi wygenerowaliśmy ponad 10 milionów wyświetleń i zbudowaliśmy lojalną społeczność. Jeśli chcesz przeskalować markę osobistą w Web3, to jest właściwy człowiek."
        : "Working with Marcel completely shifted my content game. He acts as a true content strategist: we constantly brainstorm ideas together, and his market insights are insane. Thanks to his framework, we generated over 10 Million views and built a highly loyal audience. If you want to scale your personal brand in Web3, he's the guy.",
      stats: "10M+ Views"
    },
    {
      id: "propgate",
      name: "PropGate.io",
      role: language === "pl" ? "Ekosystem SaaS Prop-Trading" : "SaaS Prop-Trading Ecosystem",
      company: "PropGate.io",
      avatar: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779908262/propgate-signet_p1jxto.png",
      quote: language === "pl"
        ? "Nasze oprogramowanie łączy firmy prop-tradingowe z użytkownikami, co oznacza, że mechanika naszego produktu bywa trudna do wyjaśnienia. Marcel stworzył serię luksusowych animacji i explainer reels, dzięki którym nasza platforma stała się niezwykle prosta do zrozumienia. Jego motion design i tempo pomogły naszym użytkownikom łatwo pojąć, jak przechodzić wyzwania finansowe."
        : "Our software connects prop firms and users, meaning our product mechanics can be tough to explain. Marcel created a series of high-end explainer reels that made our platform incredibly easy to understand. His motion design and pacing helped our users easily grasp how to pass funding challenges.",
      stats: "PropGate.io"
    }
  ];

  return (
    <section id="viral-portfolio" className="py-24 border-t border-space-border/60 bg-space-black relative">
      <div className="absolute left-1/2 bottom-1/4 -translate-x-1/2 w-[700px] h-[300px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block font-bold">
            VIRAL PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            Short-form assets that <span className="text-gradient-blue font-display">scale and convert.</span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed">
            Every file, hook, and subtitle is engineered for ultimate visual premium performance. Hover over any vertical frame below to see our dynamic production flow in realtime.
          </p>
        </div>

        {/* 9:16 Responsive vertical videos grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24 max-w-5xl mx-auto">
          {videos.map((vid) => (
            <div key={vid.id} className="flex flex-col items-center">
              <VideoCard
                id={vid.id}
                title={vid.title}
                metrics={vid.metrics}
                category={vid.category}
                posterUrl={vid.posterUrl}
                videoUrl={vid.videoUrl}
              />
              <span className="mt-4 text-xs font-bold tracking-widest text-sui uppercase font-display select-none">
                {vid.serviceLabel}
              </span>
            </div>
          ))}
        </div>

        {/* Client Testimonials Subsection */}
        <div className="border-t border-space-border/40 pt-20">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-4">
            <div>
              <span className="text-xs font-mono tracking-widest text-sui uppercase font-bold">
                CLIENT CONVERSIONS
              </span>
              <h3 className="text-2xl md:text-4xl font-display font-bold text-white mt-3">
                Endorsements from premium builders.
              </h3>
            </div>
            <p className="text-gray-400 font-sans text-sm max-w-md">
              High-growth SaaS founders, fund administrators, and agency heads rely on our pipeline framework. Here is what they say.
            </p>
          </div>

          {/* Testimonial Cards Layout (Premium glassmorphic with dynamic details) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.id}
                id={`testimonial-card-${t.id}`}
                className="bg-space-card/80 backdrop-blur-md border border-sui/15 hover:border-sui/40 rounded-2xl p-6 transition-all duration-300 flex flex-col justify-between group relative"
              >
                {/* Subtle Glow aura on hover */}
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,rgba(56,152,236,0.03),transparent_70%)] pointer-events-none" />

                <div>
                  {/* Decorative Stars row */}
                  <div className="flex items-center gap-1 mb-6 text-sui/70">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>

                  {/* Body testimonial text (clean, readable sans-serif font) */}
                  <p className="text-gray-300 font-sans text-sm leading-relaxed italic mb-8 relative">
                    <Quote className="absolute -top-3 -left-2 w-8 h-8 text-sui/5 pointer-events-none" />
                    "{t.quote}"
                  </p>
                </div>

                {/* User Info Header Block */}
                <div className="border-t border-space-border/50 pt-4 flex items-center justify-between gap-3 mt-auto">
                  <div className="flex items-center gap-3">
                    <img
                      src={t.avatar}
                      alt={t.name}
                      referrerPolicy="no-referrer"
                      className="w-10 h-10 rounded-full border border-space-border object-cover"
                    />
                    
                    <div>
                      <h4 className="font-display font-bold text-sm text-white group-hover:text-sui transition-colors">
                        {t.name}
                      </h4>
                      <p className="text-xs font-display text-sui font-medium">
                        {t.role}
                      </p>
                    </div>
                  </div>

                  {/* High Quality visual indicator */}
                  <span className="text-[9px] font-mono text-gray-500 max-w-[100px] text-right leading-tight">
                    {t.stats}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}

import React from "react";
import { Film, Zap, Box, Check, ArrowRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface ServiceCardProps {
  title: string;
  badge: string;
  icon: React.ReactNode;
  description: string;
  bullets: string[];
  ctaText: string;
  isPrimary: boolean;
  onCtaClick: () => void;
}

function ServiceCard({
  title,
  badge,
  icon,
  description,
  bullets,
  ctaText,
  isPrimary,
  onCtaClick,
}: ServiceCardProps) {
  return (
    <div
      onClick={onCtaClick}
      className={`group relative rounded-3xl p-8 md:p-10 bg-space-card/45 backdrop-blur-xl border transition-all duration-500 cursor-pointer flex flex-col justify-between h-full hover:-translate-y-2 select-none ${
        isPrimary
          ? "border-sui/40 hover:border-sui shadow-[0_4px_30px_rgba(56,152,236,0.1)] hover:shadow-[0_0_45px_rgba(56,152,236,0.25)]"
          : "border-space-border/80 hover:border-sui/50 hover:shadow-[0_0_40px_rgba(56,152,236,0.15)]"
      }`}
    >
      {/* Glow highlight on hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,152,236,0.03),transparent_70%)] pointer-events-none rounded-3xl" />

      <div>
        {/* Card Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="bg-space-black/80 border border-space-border/40 p-3.5 rounded-2xl text-sui transition-transform duration-500 group-hover:scale-110">
            {icon}
          </div>
          <span className={`text-[10px] font-mono tracking-[0.2em] uppercase font-bold px-3 py-1 rounded-full ${
            isPrimary 
              ? "bg-sui/15 text-sui border border-sui/35" 
              : "bg-space-gray text-gray-400 border border-space-border"
          }`}>
            {badge}
          </span>
        </div>

        {/* Title - Space Grotesk designated heading */}
        <h3 className="text-2xl font-bold font-display text-white mb-4 tracking-tight group-hover:text-sui transition-colors">
          {title}
        </h3>

        {/* Description - Inter based font-sans */}
        <p className="text-gray-400 font-sans text-xs md:text-sm leading-relaxed mb-8">
          {description}
        </p>

        {/* Divider */}
        <div className="h-[1px] bg-space-border/50 my-6" />

        {/* Bullet Points */}
        <ul className="space-y-4 mb-8">
          {bullets.map((bullet, idx) => (
            <li key={idx} className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-green-500/10 border border-green-500/30 flex items-center justify-center shrink-0 mt-0.5">
                <Check className="w-3 h-3 text-green-400 font-extrabold" />
              </div>
              <span className="text-xs md:text-sm font-sans text-gray-300 font-medium">
                {bullet}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Dynamic CTAs */}
      <div className="mt-4">
        {isPrimary ? (
          <button className="w-full py-4 px-6 bg-sui text-black font-display font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer transform group-hover:bg-white group-hover:shadow-[0_0_20px_rgba(56,152,236,0.4)]">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        ) : (
          <button className="w-full py-4 px-6 bg-transparent border-2 border-sui/40 hover:border-sui text-sui font-display font-bold text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer hover:bg-sui/5">
            <span>{ctaText}</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        )}
      </div>
    </div>
  );
}

interface ChooseGrowthEngineProps {
  onSelectOption: () => void;
}

export default function ChooseGrowthEngine({ onSelectOption }: ChooseGrowthEngineProps) {
  const { language, t } = useLanguage();

  return (
    <section id="machine" className="py-24 border-t border-space-border/60 bg-space-black relative overflow-hidden">
      {/* Background neon elements */}
      <div className="absolute top-1/4 left-1/4 w-[450px] h-[450px] bg-sui/5 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-[#FF5100]/5 blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-20">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block font-bold">
            {t.servicesHeaderTag}
          </span>
          {/* Section title matches "Premium Growth & Creative Engines" requested */}
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            {t.servicesHeaderTitle}<span className="text-gradient-blue font-display">{t.servicesHeaderSub}</span>
          </h2>
          <p className="text-gray-400 font-display mt-4 text-sm md:text-base leading-relaxed opacity-80 max-w-lg mx-auto">
            {language === 'pl'
              ? "Wybierz strategiczny system produkcji dopasowany do Twoich bieżących planów wzrostu marki."
              : "Pick the strategic production flow crafted specifically for your current scale objectives. Let us automate your reach entirely."
            }
          </p>
        </div>

        {/* Responsive responsive 3-column grid (1 column on mobile, 3 on desktop) of dark, premium glassmorphic cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
          
          {/* Card 1: The Content Farm */}
          <ServiceCard
            title={t.card1Title}
            badge={t.card1Badge}
            icon={<Film className="w-6 h-6" />}
            description={t.card1Desc}
            bullets={[
              t.card1Bullet1,
              t.card1Bullet2,
              t.card1Bullet3,
              t.card1Bullet4
            ]}
            ctaText={t.card1Cta}
            isPrimary={false}
            onCtaClick={onSelectOption}
          />

          {/* Card 2: The VIP Content Day */}
          <ServiceCard
            title={t.card2Title}
            badge={t.card2Badge}
            icon={<Zap className="w-6 h-6" />}
            description={t.card2Desc}
            bullets={[
              t.card2Bullet1,
              t.card2Bullet2,
              t.card2Bullet3,
              t.card2Bullet4
            ]}
            ctaText={t.card2Cta}
            isPrimary={true}
            onCtaClick={onSelectOption}
          />

          {/* Card 3: Tech Explainer Reels */}
          <ServiceCard
            title={t.card3Title}
            badge={t.card3Badge}
            icon={<Box className="w-6 h-6" />}
            description={t.card3Desc}
            bullets={[
              t.card3Bullet1,
              t.card3Bullet2,
              t.card3Bullet3,
              t.card3Bullet4
            ]}
            ctaText={t.card3Cta}
            isPrimary={false}
            onCtaClick={onSelectOption}
          />

        </div>

      </div>
    </section>
  );
}


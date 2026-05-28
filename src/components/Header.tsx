import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X, Sparkles } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

interface HeaderProps {
  onContactClick: () => void;
}

export default function Header({ onContactClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: t.navMachine, href: "#machine" },
    { label: t.navStudio, href: "#studio" },
    { label: t.navWorks, href: "#works" },
    { label: t.navRoi, href: "#roi" },
    { label: t.navBento, href: "#bento" },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled
          ? "bg-space-black/80 backdrop-blur-md border-space-border py-4"
          : "bg-transparent border-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo Text */}
        <a id="nav-logo" href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded bg-gradient-to-tr from-sui to-sui-dark flex items-center justify-center text-black font-semibold tracking-tighter text-sm">
            MB
          </div>
          <span className="font-display font-bold tracking-widest text-lg text-white group-hover:text-sui transition-colors">
            MARCEL BYTNAR
          </span>
          <span className="w-1.5 h-1.5 rounded-full bg-sui animate-pulse"></span>
        </a>

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden md:flex items-center gap-8">
          {menuItems.map((item) => (
            <a
              key={item.label}
              id={`nav-item-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
              href={item.href}
              className="text-sm text-gray-400 hover:text-white transition-colors relative group font-sans font-medium hover:scale-105"
            >
              {item.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-sui transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}
        </nav>

        {/* CTA & Language Selector */}
        <div id="nav-cta-container" className="hidden md:flex items-center gap-4">
          {/* Gorgeous glow language switcher */}
          <div className="flex items-center gap-1 bg-black/60 border border-white/10 rounded-full p-1 text-[10px] font-mono shadow-[inset_0_1px_2px_rgba(0,0,0,0.4)]">
            <button 
              onClick={() => setLanguage('en')} 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold uppercase tracking-wider ${language === 'en' ? 'bg-sui text-black shadow-md font-extrabold' : 'text-gray-400 hover:text-white'}`}
            >
              EN
            </button>
            <button 
              onClick={() => setLanguage('pl')} 
              className={`px-3 py-1 rounded-full transition-all cursor-pointer font-bold uppercase tracking-wider ${language === 'pl' ? 'bg-sui text-black shadow-md font-extrabold' : 'text-gray-400 hover:text-white'}`}
            >
              PL
            </button>
          </div>

          <button
            id="nav-cta-btn"
            onClick={onContactClick}
            className="flex items-center gap-1.5 bg-transparent hover:bg-sui/10 text-white font-display border border-sui/30 hover:border-sui text-sm px-5 py-2 rounded-full transition-all duration-300 group cursor-pointer"
          >
            <span>{t.navCta}</span>
            <ArrowUpRight className="w-4 h-4 text-sui group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden flex items-center gap-3">
          {/* Quick toggle on mobile right next to drawer trigger */}
          <button 
            onClick={() => setLanguage(language === 'en' ? 'pl' : 'en')}
            className="text-[10px] font-mono tracking-widest font-bold border border-sui/30 bg-black/40 text-sui px-2 py-1 rounded uppercase cursor-pointer"
          >
            {language === 'en' ? 'PL' : 'EN'}
          </button>
          
          <button
            id="mobile-nav-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="text-white hover:text-sui transition-colors cursor-pointer"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Backdrop */}
      {isOpen && (
        <div
          id="mobile-nav-drawer"
          className="fixed inset-0 top-[60px] bg-space-black/95 backdrop-blur-lg z-40 flex flex-col p-8 md:hidden border-b border-space-border animate-fade-in"
        >
          <nav className="flex flex-col gap-6">
            {menuItems.map((item) => (
              <a
                key={item.label}
                id={`mobile-nav-${item.label.toLowerCase().replace(/\s+/g, "-")}`}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="text-xl font-display font-medium text-gray-300 hover:text-sui transition-colors border-b border-space-border/50 pb-4"
              >
                {item.label}
              </a>
            ))}
          </nav>
          
          {/* Mobile language selector feedback */}
          <div className="mt-6 flex flex-col gap-2 border-t border-space-border/45 pt-6">
            <span className="text-[10px] font-mono uppercase text-gray-500 tracking-wider">Select Language / Wybierz Język</span>
            <div className="flex items-center gap-2 bg-black/60 border border-white/10 rounded-xl p-1 text-xs font-mono max-w-full">
              <button 
                onClick={() => {
                  setLanguage('en');
                  setIsOpen(false);
                }} 
                className={`flex-1 py-2.5 rounded-lg transition-all text-center font-bold tracking-wider cursor-pointer ${language === 'en' ? 'bg-sui text-black font-extrabold' : 'text-gray-400'}`}
              >
                ENGLISH (EN)
              </button>
              <button 
                onClick={() => {
                  setLanguage('pl');
                  setIsOpen(false);
                }} 
                className={`flex-1 py-2.5 rounded-lg transition-all text-center font-bold tracking-wider cursor-pointer ${language === 'pl' ? 'bg-sui text-black font-extrabold' : 'text-gray-400'}`}
              >
                POLSKI (PL)
              </button>
            </div>
          </div>
          
          <button
            id="mobile-nav-cta-btn"
            onClick={() => {
              setIsOpen(false);
              onContactClick();
            }}
            className="mt-8 w-full flex items-center justify-center gap-2 bg-sui hover:bg-sui-dark text-space-black font-display font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-sui/20"
          >
            <span>{t.navCta}</span>
            <Sparkles className="w-5 h-5" />
          </button>
        </div>
      )}
    </header>
  );
}


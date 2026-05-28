import React, { createContext, useContext, useState, useEffect } from "react";

type Language = "en" | "pl";

interface TranslationDictionary {
  // Navigation
  navMachine: string;
  navStudio: string;
  navWorks: string;
  navRoi: string;
  navBento: string;
  navCta: string;

  // Hero Section
  heroEyebrow: string;
  heroHeadlineMain1: string;
  heroHeadlineAutomated: string;
  heroHeadlineMain2: string;
  heroSubheadline: string;
  heroCtaCall: string;
  heroCtaWork: string;
  heroRailLeft: string;
  heroRailRight: string;
  
  // Hero Stats
  statViews: string;
  statBrands: string;
  statRoas: string;

  // Niches
  nichesHeader: string;
  niche1Label: string;
  niche1Metric: string;
  niche1Desc: string;
  niche2Label: string;
  niche2Metric: string;
  niche2Desc: string;
  niche3Label: string;
  niche3Metric: string;
  niche3Desc: string;

  // Choose Growth Engine (Services)
  servicesHeaderTag: string;
  servicesHeaderTitle: string;
  servicesHeaderSub: string;

  card1Title: string;
  card1Badge: string;
  card1Desc: string;
  card1Bullet1: string;
  card1Bullet2: string;
  card1Bullet3: string;
  card1Bullet4: string;
  card1Cta: string;

  card2Title: string;
  card2Badge: string;
  card2Desc: string;
  card2Bullet1: string;
  card2Bullet2: string;
  card2Bullet3: string;
  card2Bullet4: string;
  card2Cta: string;

  card3Title: string;
  card3Badge: string;
  card3Desc: string;
  card3Bullet1: string;
  card3Bullet2: string;
  card3Bullet3: string;
  card3Bullet4: string;
  card3Cta: string;

  // ROI Calculator
  roiCalculatorTag: string;
  roiCalculatorTitleHighlight: string;
  roiCalculatorTitleText: string;
  roiCalculatorSub: string;
  roiFunnelAnchors: string;
  roiSliderImpressions: string;
  roiSliderOfferPrice: string;
  roiSliderCloseRate: string;
  roiDiagnosticAdSpend: string;
  roiCalculatedPipeline: string;
  roiProjectedRevenue: string;
  roiBasedOnDealsPost: string;
  roiAdEquivalentTitle: string;
  roiAdEquivalentSub: string;
  roiAdEquivalentClicks: string;
  roiAdEquivalentClicksSub: string;
  roiAdEquivalentValue: string;
  roiAdEquivalentValueSub: string;
  roiAdEquivalentMultiplierTitle: string;
  roiAdEquivalentMultiplierSub: string;
  roiMarcelGuarantee: string;
  roiGuarantee1: string;
  roiGuarantee2: string;
  roiGuarantee3: string;
}

const translations: Record<Language, TranslationDictionary> = {
  en: {
    navMachine: "The Machine",
    navStudio: "Interactive Studio",
    navWorks: "Our Works",
    navRoi: "ROI Estimator",
    navBento: "Core Values",
    navCta: "Let's Talk",

    heroEyebrow: "—— CREATIVE DIRECTOR & CONTENT STRATEGIST ——",
    heroHeadlineMain1: "I build ",
    heroHeadlineAutomated: "automated",
    heroHeadlineMain2: " content machines that scale your brand.",
    heroSubheadline: "From strategy and filming to automated editing. You get ready-to-post viral content that converts viewers into high-ticket clients.",
    heroCtaCall: "Book a Discovery Call",
    heroCtaWork: "See My Work",
    heroRailLeft: "INDEX — 001 / CONTENT OPERATING SYSTEM",
    heroRailRight: "STATUS — AVAILABLE Q1 2026",

    statViews: "Views Generated",
    statBrands: "Brands Scaled",
    statRoas: "Avg. ROAS",

    nichesHeader: "Custom systems built specifically for high-ticket industries",
    niche1Label: "Streamers & Podcasters",
    niche1Metric: "THE CONTENT FARM",
    niche1Desc: "Streamers, long-form content creators & podcasters. We transform your raw footage or live streams into highly optimized viral retention machines.",
    niche2Label: "Experts & Coaches",
    niche2Metric: "THE VIP CONTENT DAY",
    niche2Desc: "Experts and high-ticket coaches. No time to script or film? We blueprint, direct, and film you during one single structured session.",
    niche3Label: "SaaS, Web3 & Medical",
    niche3Metric: "TECH EXPLAINER REELS",
    niche3Desc: "SaaS owners, Web3 projects, and medical companies. We simplify complex clinical concepts, features, or protocols into visually stunning animations.",

    servicesHeaderTag: "SYSTEM ENGINE SELECTOR",
    servicesHeaderTitle: "Premium Growth & ",
    servicesHeaderSub: "Creative Engines.",
    card1Title: "The Content Farm",
    card1Badge: "Streamers & Long-Form",
    card1Desc: "For Streamers & Long-Form Creators. We turn your existing content into a viral machine. Curation, high-retention editing, and daily posting across 3 platforms.",
    card1Bullet1: "AI-Driven Curation",
    card1Bullet2: "Premium High-Retention Editing",
    card1Bullet3: "Daily Posting (IG, TT, YT)",
    card1Bullet4: "Zero extra work for you.",
    card1Cta: "Scale Existing Content",

    card2Title: "The VIP Content Day",
    card2Badge: "Experts & Coaches",
    card2Desc: "For Experts & High-Ticket Coaches. No time to film? We fly to you. In just 4 hours, we produce a full month of premium, authority-building content. Strategy, directing, and editing.",
    card2Bullet1: "Custom Content Strategy",
    card2Bullet2: "1-on-1 In-Person Directing",
    card2Bullet3: "Viral Editing & Formatting",
    card2Bullet4: "Full Social Media Management",
    card2Cta: "Book a Content Day",

    card3Title: "Tech Explainer Reels",
    card3Badge: "SaaS & Web3 Projects",
    card3Desc: "For SaaS & Web3 Projects. Stop confusing your users. We transform complex whitepapers and technical features into viral, visually stunning short-form animations (TikTok/Reels/X) that educate and convert.",
    card3Bullet1: "Complex Tech Made Simple",
    card3Bullet2: "Premium 2D/3D Animation Style",
    card3Bullet3: "Viral Hooks & Cinematic Audio",
    card3Bullet4: "Perfect for X (Twitter) & IG Reels",
    card3Cta: "Animate My Product",

    roiCalculatorTag: "PIPELINE CALCULATOR",
    roiCalculatorTitleHighlight: "growth multiplier.",
    roiCalculatorTitleText: "Estimate your high-ticket ",
    roiCalculatorSub: "Adjust the sliders below based on your target audience size, service offer pricing, and team close rate. Observe how organic system automation converts attention directly into net revenue.",
    roiFunnelAnchors: "Conversion Funnel Anchors",
    roiSliderImpressions: "Monthly Video Impressions",
    roiSliderOfferPrice: "High-Ticket Client Offer Price",
    roiSliderCloseRate: "Sales Close Rate",
    roiDiagnosticAdSpend: "Paid ads require constant capital infusions. Organic system distribution builds a compound-growth asset that persists long after Marcel's scripts deploy.",
    roiCalculatedPipeline: "// CALCULATED MONTHLY SYSTEM PIPELINE",
    roiProjectedRevenue: "Projected Organic MRR Sourced",
    roiBasedOnDealsPost: "Based on {closedDeals} closed deals from {discoveryCallsBooked} booked discovery calls",
    roiAdEquivalentTitle: "Bio Click-Throughs",
    roiAdEquivalentSub: "At standard 1.2% CTR",
    roiAdEquivalentClicks: "Clicks Generated",
    roiAdEquivalentClicksSub: "From organically directed bio links",
    roiAdEquivalentValue: "Equivalent Paid CPC Value",
    roiAdEquivalentValueSub: "Free organic ad-spend equity",
    roiAdEquivalentMultiplierTitle: "Yield Multiplier Potential",
    roiAdEquivalentMultiplierSub: "Let's audit your current channels",
    roiMarcelGuarantee: "Marcel's Content Guarantee",
    roiGuarantee1: "Full asset transfer (you own 100% of video materials)",
    roiGuarantee2: "Turnkey scripting and topic development backlog",
    roiGuarantee3: "Automated editing with guaranteed 48h turn-arounds",
  },
  pl: {
    navMachine: "Silnik Contentu",
    navStudio: "Interaktywne Studio",
    navWorks: "Portfel Prac",
    navRoi: "Kalkulator ROI",
    navBento: "Fundamenty",
    navCta: "Skontaktuj Się",

    heroEyebrow: "—— DYREKTOR KREATYWNY & STRATEG CONTENTU ——",
    heroHeadlineMain1: "Buduję ",
    heroHeadlineAutomated: "automatyczne",
    heroHeadlineMain2: " maszyny contentu, które skalują Twoją markę.",
    heroSubheadline: "Od strategii i nagrań po automatyczny montaż. Otrzymujesz gotowe do publikacji, wiralowe treści, które zmieniają widzów w klientów premium.",
    heroCtaCall: "Zarezerwuj Konsultację",
    heroCtaWork: "Zobacz Moje Prace",
    heroRailLeft: "INDEKS — 001 / SYSTEM OPERACYJNY CONTENTU",
    heroRailRight: "STATUS — DOSTĘPNE Q1 2026",

    statViews: "Generowane Wyświetlenia",
    statBrands: "Przeskalowane Marki",
    statRoas: "Średni ROAS",

    nichesHeader: "Indywidualne systemy stworzone z myślą o branżach premium",
    niche1Label: "Streamerzy & Podcasterzy",
    niche1Metric: "THE CONTENT FARM",
    niche1Desc: "Dla streamerów, twórców długich form i podcasterów. Zamieniamy surowe nagrania lub transmisje na żywo w wysoce zoptymalizowane wirusowe maszyny.",
    niche2Label: "Eksperci & Trenerzy",
    niche2Metric: "THE VIP CONTENT DAY",
    niche2Desc: "Dla ekspertów i trenerów usług wysokomarżowych. Brak czasu na scenariusze i nagrania? Przygotowujemy plan, reżyserujemy i nagrywamy Cię podczas jednej sesji.",
    niche3Label: "SaaS, Web3 & Medycyna",
    niche3Metric: "TECH EXPLAINER REELS",
    niche3Desc: "Dla właścicieli SaaS, projektów Web3 oraz placówek medycznych. Tłumaczymy skomplikowane pojęcia kliniczne czy technologiczne na dynamiczne animacje.",

    servicesHeaderTag: "WYBÓR SILNIKA WZROSTU",
    servicesHeaderTitle: "Skalowanie Premium & ",
    servicesHeaderSub: "Silniki Kreatywne.",
    card1Title: "The Content Farm",
    card1Badge: "Streaming & Długie Formy",
    card1Desc: "Dla Streamerów i Twórców Długich Form. Zamieniamy Twój istniejący content w wiralową maszynę. Selekcja, montaż o wysokiej retencji i codzienne posty na 3 platformach.",
    card1Bullet1: "Selekcja Wspierana przez AI",
    card1Bullet2: "Profesjonalny Montaż z Wysoką Retencją",
    card1Bullet3: "Codzienne Publikacje (IG, TikTok, YT Shorts)",
    card1Bullet4: "Zero dodatkowej pracy z Twojej strony.",
    card1Cta: "Skaluj Istniejący Content",

    card2Title: "The VIP Content Day",
    card2Badge: "Eksperci & Trenerzy",
    card2Desc: "Dla Ekspertów i Trenerów Premium. Brak czasu na nagrania? Przylatujemy do Ciebie. W zaledwie 4 godziny produkujemy pełny miesiąc luksusowego contentu autorytetu.",
    card2Bullet1: "Dedykowana Strategia & Scenariusze",
    card2Bullet2: "Reżyseria i Profesjonalne Nagranie 1-na-1",
    card2Bullet3: "Wiralowy Montaż i Formatowanie",
    card2Bullet4: "Pełne Zarządzanie Social Media",
    card2Cta: "Zarezerwuj Content Day",

    card3Title: "Tech Explainer Reels",
    card3Badge: "SaaS & Projekty Web3",
    card3Desc: "Dla Branży SaaS i Web3. Przestań konfundować swoich odbiorców. Przekształcamy skomplikowane dokumenty i funkcje techniczne w zachwycające animacje zwiększające sprzedaż.",
    card3Bullet1: "Skomplikowane Technologie Podane Prosto",
    card3Bullet2: "Luksusowy Styl Animacji 2D/3D",
    card3Bullet3: "Wiralowe Haczyki i Kinowe Audio",
    card3Bullet4: "Idealne na X (Twitter) & IG Reels",
    card3Cta: "Animuj Mój Produkt",

    roiCalculatorTag: "KALKULATOR LEJKA",
    roiCalculatorTitleHighlight: "mnożnik wzrostu.",
    roiCalculatorTitleText: "Oszacuj swój wysokomarżowy ",
    roiCalculatorSub: "Dostosuj suwaki poniżej na podstawie wielkości grupy docelowej, ceny oferty i skuteczności sprzedaży Twojego zespołu. Zobacz, jak organiczna automatyzacja przekłada się na realny przychód.",
    roiFunnelAnchors: "Parametry Konwersji Lejka",
    roiSliderImpressions: "Miesięczne Wyświetlenia Wideo",
    roiSliderOfferPrice: "Cena Oferty Klienta (Wysoka Marża)",
    roiSliderCloseRate: "Skuteczność Zamknięcia Sprzedaży",
    roiDiagnosticAdSpend: "Płatne reklamy wymagają ciągłego kapitału. Organiczna dystrybucja buduje trwały kapitał marki, który procentuje długo po wdrożeniu naszych scenariuszy.",
    roiCalculatedPipeline: "// WYLICZONY MIESIĘCZNY RUROCIĄG SPRZEDAŻY",
    roiProjectedRevenue: "Przewidywany Przyrost OrganicMRR",
    roiBasedOnDealsPost: "Na podstawie {closedDeals} zamkniętych transakcji z {discoveryCallsBooked} zarezerwowanych rozmów",
    roiAdEquivalentTitle: "Przejścia z Bio",
    roiAdEquivalentSub: "Przy standardowym CTR 1.2%",
    roiAdEquivalentClicks: "Generowane Kliknięcia",
    roiAdEquivalentClicksSub: "Z organicznie kierowanych linków",
    roiAdEquivalentValue: "Równowartość Reklamowa (CPC)",
    roiAdEquivalentValueSub: "Bezpłatny organiczny ekwiwalent reklam",
    roiAdEquivalentMultiplierTitle: "Potencjał Wielokrotności Przychodu",
    roiAdEquivalentMultiplierSub: "Zróbmy audyt Twoich obecnych kanałów",
    roiMarcelGuarantee: "Gwarancja Contentowa Marcela",
    roiGuarantee1: "Pełne przekazanie praw (posiadasz 100% materiałów wideo)",
    roiGuarantee2: "Kompletne pisanie scenariuszy i opracowanie bazy tematów",
    roiGuarantee3: "Zautomatyzowany montaż z gwarancją dostarczenia do 48h",
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: TranslationDictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>(() => {
    // Check local storage or default to en
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("app_lang") as Language;
      if (saved === "en" || saved === "pl") return saved;
    }
    return "en";
  });

  useEffect(() => {
    localStorage.setItem("app_lang", language);
  }, [language]);

  const value: LanguageContextType = {
    language,
    setLanguage,
    t: translations[language],
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};

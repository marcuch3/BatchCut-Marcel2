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
    navWorks: "Portfolio",
    navRoi: "Kalkulator",
    navBento: "Fundamenty",
    navCta: "Kontakt",

    heroEyebrow: "—— DYREKTOR KREATYWNY & STRATEG CONTENTU ——",
    heroHeadlineMain1: "Tworzymy ",
    heroHeadlineAutomated: "ekosystemy",
    heroHeadlineMain2: "contentowe, które skalują Twoją markę.",
    heroSubheadline: "Od strategii i nagrań, po kompleksowy montaż. Automatyzujemy cały proces, dostarczając Ci gotowe treści, które konwertują widzów w klientów",
    heroCtaCall: "Zarezerwuj Konsultację",
    heroCtaWork: "Portfolio",
    heroRailLeft: "INDEKS — 001 / SYSTEM OPERACYJNY CONTENTU",
    heroRailRight: "STATUS — DOSTĘPNE Q1 2026",

    statViews: "Wyświetlenia",
    statBrands: "Zadowoleni Klienci",
    statRoas: "Średni wzrost",

    nichesHeader: "Indywidualne systemy stworzone z myślą o branżach premium",
    niche1Label: "Streamerzy & Podcasterzy",
    niche1Metric: "Farma Contentu",
    niche1Desc: "Dla streamerów, edukatorów i podcasterów. Przekształcamy Twoje wielogodzinne nagrania w serię precyzyjnie zmontowanych, krótkich form. Pracujemy na Twoich surowych materiałach, by stworzyć content, który sam napędza nowe leady.",
    niche2Label: "Eksperci & Twórcy High-Ticket",
    niche2Metric: "VIP Content Day",
    niche2Desc: "Dla ekspertów i twórców usług premium. Oszczędź dziesiątki godzin na wymyślaniu rolek. Przygotowujemy strategię, reżyserujemy i nagrywamy Twój content na cały miesiąc podczas jednej, kilkugodzinnej sesji. Otrzymujesz gotowy do publikacji materiał, bez tracenia czasu na techniczne detale.",
    niche3Label: "SaaS, Web3 & Medycyna",
    niche3Metric: "TECH EXPLAINER REELS",
    niche3Desc: "Dla twórców SaaS, Web3 oraz placówek medycznych. Zawiły żargon zabija Twoją sprzedaż? Tworzymy dynamiczne materiały wideo i animacje, które w prosty sposób wyjaśniają to, co skomplikowane.",

    servicesHeaderTag: "MODELE WSPÓŁPRACY",
    servicesHeaderTitle: "Systemy contentowe, które ",
    servicesHeaderSub: "napędzają sprzedaż.",
    card1Title: "Farma Contentu",
    card1Badge: "Podcasty & Długie Formy",
    card1Desc: "Dla streamerów, podcasterów i twórców. Wykorzystaj w pełni potencjał swoich długich materiałów. Zamieniamy wielogodzinne nagrania w dziesiątki krótkich form, które bez przerwy pracują na Twoje zasięgi.",
    card1Bullet1: "Wybór najbardziej angażujących momentów",
    card1Bullet2: "Dynamiczny montaż utrzymujący uwagę",
    card1Bullet3: "Codzienne publikacje (IG, TikTok, YT Shorts)",
    card1Bullet4: "W 100% bezobsługowy proces dla Ciebie",
    card1Cta: "Skaluj Mój Content",

    card2Title: "VIP Content Day",
    card2Badge: "Eksperci & Founderzy",
    card2Desc: "Dla Ekspertów i Founderów. Nie masz czasu ani siły na regularne nagrania? Przyjeżdżamy do Ciebie, nagrywamy materiał na cały miesiąc i zdejmujemy z Ciebie cały techniczny ciężar.",
    card2Bullet1: "Dedykowana strategia i scenariusze",
    card2Bullet2: "Reżyseria i nagranie u Ciebie w biurze",
    card2Bullet3: "Montaż i optymalizacja pod algorytmy",
    card2Bullet4: "Pełne zarządzanie kalendarzem publikacji",
    card2Cta: "Zarezerwuj Vip Content Day",

    card3Title: "Technologiczne Filmy Edukacyjne",
    card3Badge: "SaaS, Projekty Web3 & Placówki Medyczne",
    card3Desc: "Dla branży SaaS, Web3 i Tech. Zawiły żargon zabija konwersję? Przekładamy skomplikowaną technologię na dynamiczne animacje, które Twoi klienci zrozumieją w kilka sekund.",
    card3Bullet1: "Tłumaczenie skomplikowanych funkcji na korzyści",
    card3Bullet2: "Profesjonalne animacje 2D/3D",
    card3Bullet3: "Angażujący storytelling i klarowne wyjaśnienia",
    card3Bullet4: "Formaty skrojone pod LinkedIn, X i IG Reels",
    card3Cta: "Zaprezentuj Swój SaaS",

    roiCalculatorTag: "KALKULATOR ROI",
    roiCalculatorTitleHighlight: "potencjał wzrostu.",
    roiCalculatorTitleText: "Oszacuj swój ",
    roiCalculatorSub: "Sprawdź, jak organiczny zasięg przekłada się na realne zyski. Dostosuj parametry swojego lejka poniżej i zobacz przewidywany miesięczny przychód.",
    roiFunnelAnchors: "Parametry Twojego Lejka",
    roiSliderImpressions: "Miesięczne Wyświetlenia Wideo",
    roiSliderOfferPrice: "Wartość Klienta (Cena Twojego Pakietu)",
    roiSliderCloseRate: "Skuteczność Zamykania Sprzedaży",
    roiDiagnosticAdSpend: "Płatne reklamy pożerają budżet i przestają działać w sekundę po odpięciu karty. Content organiczny buduje trwały autorytet, który dowozi Ci ciepłe leady długo po publikacji.",
    
    roiCalculatedPipeline: "// PROGNOZOWANY MIESIĘCZNY LEJEK SPRZEDAŻY",
    roiProjectedRevenue: "Przewidywany Nowy Przychód",
    roiBasedOnDealsPost: "Przy założeniu {closedDeals} zamkniętych transakcji z {discoveryCallsBooked} pozyskanych rozmów.",
    
    roiAdEquivalentTitle: "Przejścia z profilu na stronę",
    roiAdEquivalentSub: "Przy ostrożnym CTR na poziomie 1.2%",
    roiAdEquivalentClicks: "Wygenerowany Ruch",
    roiAdEquivalentClicksSub: "Darmowe kliknięcia z linku w Bio",
    roiAdEquivalentValue: "Zaoszczędzony Budżet",
    roiAdEquivalentValueSub: "Tyle musiałbyś wydać na płatne reklamy",
    roiAdEquivalentMultiplierTitle: "Potencjał Skalowania",
    roiAdEquivalentMultiplierSub: "Zróbmy audyt Twoich obecnych kanałów",
    
    roiMarcelGuarantee: "Gwarancja Agencji BatchCut",
    roiGuarantee1: "Pełne prawa majątkowe do wszystkich materiałów wideo",
    roiGuarantee2: "Kompleksowy research i przygotowanie bazy tematów",
    roiGuarantee3: "Zautomatyzowany obieg pracy z gwarancją dostarczenia do 48h",
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

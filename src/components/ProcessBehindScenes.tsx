import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Map, Camera, Scissors, ClipboardCheck, Sparkles, X, ZoomIn, ArrowRight } from "lucide-react";

export default function ProcessBehindScenes() {
  const { language } = useLanguage();
  const [selectedPhoto, setSelectedPhoto] = useState<any | null>(null);

  const steps = [
    {
     
      id: 1,
      title: language === "pl" ? "Strategia & Research" : "Data-Driven Strategy",
      description: language === "pl" 
        ? "Tworzymy formaty oparte na danych, nie na domysłach." 
        : "We design formats based on hard data, not guesswork.",
      detail: language === "pl"
        ? "Przeprowadzamy głęboki research Twojej grupy docelowej i dekonstruujemy najlepiej performujące wideo w Twojej niszy. Wyciągamy dokładnie to, co działa na rynku, aby napisać i nagrać viralowe formaty, które zmieniają wyświetlenia w klientów."
        : "We conduct deep audience research and reverse-engineer the highest-performing videos in your niche. We extract exactly what works to script and shoot viral formats engineered to convert viewers into buyers.",
      icon: <Map className="w-7 h-7 text-[#FF5100]" />,
      glowColor: "rgba(255, 81, 0, 0.4)",
      badge: "PHASE 01"
    
    },
    {
      id: 2,
      title: language === "pl" ? "Dzień Zdjęciowy" : "Production Day",
      description: language === "pl" ? "Przejmujemy reżyserię i nagrywanie (Ty tylko przychodzisz i mówisz)." : "We direct and film you (You just show up and talk).",
      detail: language === "pl"
        ? "Zero stresu i wkuwania scenariuszy na pamięć. Prowadzimy Cię krok po kroku przez nasze scenariusze podczas VIP Content Day."
        : "No script-memorization stress. We guide you step-by-step through our simple, structured session.",
      icon: <Camera className="w-7 h-7 text-[#3898EC]" />,
      glowColor: "rgba(56, 152, 236, 0.4)",
      badge: "PHASE 02"
    },
    {
      id: 3,
      title: language === "pl" ? "Automatyczna Postprodukcja" : "Automated Post-Production",
      description: language === "pl" ? "Zaawansowany montaż i hooki nie do pominięcia." : "Cutting-edge editing and unskippable hooks.",
      detail: language === "pl"
        ? "Nasz autorski workflow postprodukcyjny dba o color grading, dynamiczne napisy, audio i efekty dźwiękowe, aby maksymalizować retencję w pierwszych 3 sekundach."
        : "Our custom video synthesis workflows handle color grading, kinetic title overlays, audio and sound effects to maximize retention in the first 3 critical seconds.",
      icon: <Scissors className="w-7 h-7 text-[#FF5100]" />,
      glowColor: "rgba(255, 81, 0, 0.4)",
      badge: "PHASE 03"
    },
    {
      id: 4,
      title: language === "pl" ? "Gotowe do Publikacji" : "Ready to Post",
      description: language === "pl" ? "Otrzymujesz pełen pakiet materiałów." : "You receive a full package of viral assets.",
      detail: language === "pl"
        ? "Kompletny zestaw dopracowanych w każdym detalu materiałów trafia bezpośrednio do Ciebie, gotowy do publikacji na LinkedIn, YouTubie, Instagramie i TikToku."
        : "A full batch of high-ticket converting assets is delivered straight to your queue, optimized for LinkedIn, YouTube, Instagram and TikTok.",
      icon: <ClipboardCheck className="w-7 h-7 text-[#3898EC]" />,
      glowColor: "rgba(56, 152, 236, 0.4)",
      badge: "PHASE 04"
    }
  ];

  const btsPhotos = [
    {
      id: "klein-1",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779966989/1_ql0gkz.png",
      title: language === "pl" ? "Vip Content Day z TheCryptoKlein #1" : "VIP content session & workflow with TheCryptoKlein #1",
      badge: "VIP SESSION #01"
    },
    {
      id: "klein-2",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779966989/2_jqrkxe.png",
      title: language === "pl" ? "Vip Content Day z TheCryptoKleine #2" : "VIP content session & workflow with TheCryptoKlein #2",
      badge: "VIP SESSION #02"
    },
    {
      id: "me-and-julian",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779966989/3_conwbk.png",
      title: language === "pl" ? "Networking i wymiana wiedzy z Julianem (Maxdata)" : "Networking with Julian (Maxdata)",
      badge: "COLLABORATION // 03"
    },
    {
      id: "weex-event",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779966989/4_c84kmb.png",
      title: language === "pl" ? "Networking na evencie Weex Exchange" : "Networking during Weex Exchange Event",
      badge: "WEEX EXCHANGE EVENT"
    },
    {
      id: "marcel-work",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779967978/8_nsux0n.png",
      title: language === "pl" ? "Montaż, porządkowanie i postowanie klipów" : "Editing, planning and posting clips",
      badge: "POST-PRODUCTION LAB"
    },
    {
      id: "timeline-map",
      src: "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779968393/httpswww.batchcut.xyz_1_mlmnru.png",
      title: language === "pl" ? "Tworzenie perfekcyjnych animacji" : "Crafting the perfect animations",
      badge: "Crafting Animations"
    }
  ];

  return (
    <section id="bts-process" className="py-24 border-t border-space-border/60 bg-space-black relative">
      {/* Background aesthetics */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-[#FF5100]/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute left-12 bottom-12 w-[300px] h-[300px] bg-sui/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        
        {/* Section Title */}
        <div className="mb-16">
          <span className="text-xs font-mono tracking-widest text-[#FF5100] uppercase bg-[#FF5100]/10 px-3 py-1 rounded-full inline-block font-bold">
            {language === "pl" ? "METODOLOGIA PRACY" : "DIRECTOR WORKFLOW"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            {language === "pl" ? "Proces i " : "The Process & "}
            <span className="text-gradient-blue font-display font-semibold">
              {language === "pl" ? "Kulisy Pracy." : "Behind the Scenes."}
            </span>
          </h2>
        </div>

        {/* Column split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: The Process timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-display text-white">
                {language === "pl" ? "Jak przejmujemy Twój proces twórczy." : "How we dominate your niche."}
              </h3>
              <p className="text-gray-400 font-sans text-sm mt-2 leading-relaxed">
                {language === "pl"
                  ? "Nasz przemyślany system zdejmuje z ciebie stres związany z planowaniem i produkcją video. Zapomnij o stoiskach filmowych i wkuwaniu tekstu. Przeprowadzimy Cię przez wszystko od A do Z."
                  : "Our framework removes takes planning and filming stress off your shoulders. No filming gear to master, no writing fatigue, no stress. We systemize everything."}
              </p>
            </div>

            {/* Vertical timeline stack */}
            <div className="relative border-l border-space-border/60 pl-10 ml-8 space-y-10">
              {steps.map((step) => (
                <div key={step.id} className="relative group">
                  {/* Glowing Timeline Node with centered, bigger icon */}
                  <div 
                    className="absolute -left-[68px] top-2 w-14 h-14 rounded-full bg-space-gray border border-space-border flex items-center justify-center transition-all duration-300 group-hover:border-sui/60 z-10"
                    style={{ boxShadow: `0 0 15px ${step.glowColor}` }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Description Card */}
                  <div className="bg-space-card/45 border border-space-border/40 hover:border-space-border/80 p-5 rounded-2xl transition-all">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[10px] font-mono tracking-wider text-[#FF5100] font-bold">
                        {step.badge}
                      </span>
                      <span className="text-[10px] font-mono text-gray-500">SYSTEM STABLE</span>
                    </div>

                    <h4 className="text-base font-bold font-display text-white mb-1 group-hover:text-sui transition-colors">
                      {step.title}
                    </h4>
                    
                    <p className="text-xs text-gray-300 font-mono font-medium mb-2">
                      {step.description}
                    </p>

                    <p className="text-xs text-gray-400 font-sans leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Clean grid of pictures */}
          <div className="lg:col-span-6 space-y-6">
            <div className="flex md:items-center justify-between">
              <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block">
                {language === "pl" ? "// KULISY PRODUKCJI //" : "// BTS GALLERY & PRODUCTION WORK //"}
              </span>
            </div>

            {/* Grid layout */}
            <div className="grid grid-cols-2 gap-4">
              {btsPhotos.map((photo) => (
                <div 
                  key={photo.id} 
                  onClick={() => setSelectedPhoto(photo)}
                  className="relative rounded-2xl overflow-hidden aspect-square bg-space-gray border border-space-border/80 group shadow-lg cursor-pointer hover:border-sui/40 transition-all duration-300"
                >
                  <img
                    src={photo.src}
                    alt={photo.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-75 contrast-[1.05] transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-95"
                  />
                  
                  {/* Absolute Zoom indicator */}
                  <div className="absolute top-2.5 right-2.5 opacity-0 group-hover:opacity-100 transition-opacity bg-black/70 backdrop-blur-md p-1.5 rounded-lg border border-white/5 pointer-events-none z-20">
                    <ZoomIn className="w-3.5 h-3.5 text-sui" />
                  </div>

                  {/* Gradient to darken the lower part for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent opacity-85 group-hover:opacity-90 transition-opacity" />
                  
                  <div className="absolute bottom-3 left-3 right-3 text-left z-10 pointer-events-none">
                    <span className="text-[8px] font-mono tracking-widest text-sui uppercase font-bold block mb-0.5">
                      {photo.badge}
                    </span>
                    <p className="text-[10px] md:text-[11px] leading-tight font-display font-medium text-white group-hover:text-sui transition-colors line-clamp-2">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>

      {/* Lightbox pop up */}
      {selectedPhoto && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-10">
            <span className="font-mono text-xs tracking-widest text-[#FF5100] uppercase font-bold">
              {selectedPhoto.badge}
            </span>
            <button
              onClick={() => setSelectedPhoto(null)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          <div className="relative w-full max-w-4xl aspect-square sm:aspect-[4/3] flex items-center justify-center">
            <img
              src={selectedPhoto.src}
              alt={selectedPhoto.title}
              className="max-w-full max-h-[80vh] object-contain rounded-xl border border-white/10"
              referrerPolicy="no-referrer"
            />
          </div>

          <p className="mt-6 text-sm text-gray-300 font-display font-medium text-center max-w-md">
            {selectedPhoto.title}
          </p>
        </div>
      )}
    </section>
  );
}

import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Eye, TrendingUp, Sparkles, CheckCircle2, ChevronLeft, ChevronRight, Maximize2, X } from "lucide-react";

export default function CaseStudies() {
  const { language } = useLanguage();
  const [activeImageIndex, setActiveImageIndex] = useState<number>(0);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const images = [
    "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779954765/1_l1gyey.jpg",
    "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779954765/2_gwstp1.jpg",
    "https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779954765/3_migvff.jpg"
  ];

  const handleNext = () => {
    setActiveImageIndex((prev) => (prev + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="works" className="py-24 bg-space-black relative border-t border-space-border/60">
      {/* Ambient background glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block font-semibold">
            {language === "pl" ? "STUDIUM PRZYPADKU" : "CLIENT CASE STUDY"}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            {language === "pl" ? "Dowód na " : "Proven "}
            <span className="text-gradient-blue font-display">
              {language === "pl" ? "skuteczność." : "results."}
            </span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed max-w-lg mx-auto opacity-80">
            {language === "pl" 
              ? "Zobacz, jak kompleksowe poprowadzenie procesu twórczego zamieniło Kleina w dominujący głos w branży."
              : "See how taking over the entire creative process transformed Klein into an industry-dominating voice."}
          </p>
        </div>

        {/* Brand Showcase Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Side: Client profile & results (Col span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start">
            
            {/* TheCryptoKlein Avatar Wrapper with a thick custom blue border & glow */}
            <div className="relative group w-full max-w-[340px] aspect-square rounded-3xl overflow-hidden border-2 border-sui/40 shadow-[0_0_25px_rgba(56,152,236,0.15)] bg-space-gray">
              <img
                src="https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779908277/IMG_8246_hmxp0t.jpg"
                alt="TheCryptoKlein"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              
              {/* Overlay with subtle visual elements */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
              <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">
                <div>
                  <h4 className="font-display font-bold text-lg text-white">TheCryptoKlein</h4>
                  <p className="text-xs font-sans text-sui">
                    {language === "pl" ? "Inwestor i Twórca Crypto" : "Investor & Web3 Creator"}
                  </p>
                </div>
                <div className="px-2.5 py-1 rounded bg-sui/10 border border-sui/20 text-[10px] font-mono text-sui uppercase font-semibold">
                  {language === "pl" ? "CASE STUDY" : "CASE STUDY"}
                </div>
              </div>
            </div>

            {/* Huge bold headline results */}
            <div className="mt-8 text-center lg:text-left">
              <p className="text-xs font-mono tracking-widest text-sui uppercase font-bold mb-2">
                {language === "pl" ? "WYNIKI" : "RESULTS"}
              </p>
              <h3 className="text-2xl md:text-3.5xl font-bold font-display text-white leading-tight tracking-tight uppercase">
                {language === "pl" ? (
                  <>
                    10M+ WYŚWIETLEŃ &amp; <br />
                    <span className="text-gradient-blue font-display">10,000 NOWYCH OBSERWUJĄCYCH</span> <br />
                    W 5 MIESIĘCY
                  </>
                ) : (
                  <>
                    10M+ Views &amp; <br />
                    <span className="text-gradient-blue font-display">10,000 New Followers</span> <br />
                    in 5 months
                  </>
                )}
              </h3>
              
              {/* Extra micro narrative bullet points to enrich visual spacing */}
              <div className="mt-6 space-y-4 max-w-sm mx-auto lg:mx-0">
                {language === "pl" ? (
                  <>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">Hybrydowy system działań:</span>
                        Zastosowaliśmy potężne combo. Stworzyliśmy treści na kilka miesięcy podczas kilku sesji VIP Content Day, a następnie zwielokrotniliśmy zasięgi, wdrażając stały strumień materiałów w modelu Farmy Contentu.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">100% odzyskanego czasu:</span>
                        Przejęliśmy całkowicie strategię, reżyserię i zautomatyzowany montaż, pozwalając Kleinowi skupić się wyłącznie na prowadzeniu livestreamów.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">Dominacja bez płatnych reklam:</span>
                        Wygenerowaliśmy miliony organicznych wyświetleń o wysokiej retencji, całkowicie eliminując potrzebę przepalania budżetu na płatne kampanie.
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">Hybrid System:</span>
                        We deployed a powerful combo. We captured months of content during VIP Content Day sessions, then multiplied reach by deploying a steady stream of assets via Content Repurposing.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">100% Time Reclaimed:</span>
                        We completely took over the strategy, direction, and automated editing, allowing Klein to focus solely on running his livestreams.
                      </div>
                    </div>
                    <div className="flex items-start gap-2.5 text-xs text-gray-400 leading-relaxed text-left">
                      <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                      <div>
                        <span className="font-bold text-white block mb-0.5">Ad-Free Domination:</span>
                        We generated millions of high-retention organic views, completely eliminating the need to burn budget on paid campaigns.
                      </div>
                    </div>
                  </>
                )}
              </div>
            </div>

          </div>

          {/* Right Side: Results screenshots layout (Col span 7) */}
          <div className="lg:col-span-7 w-full flex flex-col gap-6">
            
            {/* Interactive Main Screenshot Card */}
            <div className="relative bg-space-gray border border-space-border/80 rounded-3xl overflow-hidden p-6 hover:border-sui/40 transition-colors duration-300">
              
              {/* Header inside the result card */}
              <div className="flex justify-between items-center mb-4 pb-4 border-b border-space-border/60">
                <div className="flex items-center gap-2">
                  <Eye className="w-4 h-4 text-sui" />
                  <span className="text-xs font-mono text-gray-400 uppercase tracking-wider">
                    {language === "pl" ? "ZDJĘCIE REZULTATU" : "IMPACT EVIDENCE"} — {activeImageIndex + 1}/3
                  </span>
                </div>
                
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="flex items-center gap-1.5 text-[11px] font-mono text-sui bg-sui/10 hover:bg-sui/20 px-2.5 py-1 rounded-full transition-colors font-medium border border-sui/20"
                >
                  <Maximize2 className="w-3 h-3" />
                  {language === "pl" ? "POWIĘKSZ" : "ZOOM"}
                </button>
              </div>

              {/* Main Image Viewport */}
              <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] rounded-2xl overflow-hidden bg-black/40 border border-space-border flex items-center justify-center group/img">
                <img
                  src={images[activeImageIndex]}
                  alt={`Proof of impact screenshot ${activeImageIndex + 1}`}
                  className="max-w-full max-h-full object-contain duration-500 group-hover/img:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />

                {/* Left/Right control arrows inside the main frame */}
                <button
                  onClick={handlePrev}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 transition-colors duration-200"
                  aria-label="Previous proof"
                >
                  <ChevronLeft className="w-5 h-5 text-gray-300" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-black/60 hover:bg-black/90 text-white flex items-center justify-center border border-white/10 transition-colors duration-200"
                  aria-label="Next proof"
                >
                  <ChevronRight className="w-5 h-5 text-gray-300" />
                </button>
              </div>

              {/* Takeaway label underneath */}
              <div className="mt-4 flex items-center gap-2 text-xs text-gray-400 font-sans">
                <TrendingUp className="w-4 h-4 text-sui shrink-0" />
                <span>
                  {activeImageIndex === 0 && (language === "pl" ? "Dowód 1: Dynamiczny przyrost wyświetleń o wysokiej retencji." : "Proof 1: Dynamic growth of high-retention organic views.")}
                  {activeImageIndex === 1 && (language === "pl" ? "Dowód 2: Konsekwentny, skumulowany napływ nowych obserwujących." : "Proof 2: Consistent, compound influx of new followers.")}
                  {activeImageIndex === 2 && (language === "pl" ? "Dowód 3: Rekordowe wskaźniki zaangażowania i interakcji z klipami." : "Proof 3: Record-breaking engagement rates and clip interactions.")}
                </span>
              </div>

            </div>

            {/* Gallery Thumbnails row */}
            <div className="grid grid-cols-3 gap-4">
              {images.map((img, index) => {
                const isActive = index === activeImageIndex;
                return (
                  <button
                    key={index}
                    onClick={() => setActiveImageIndex(index)}
                    className={`relative aspect-video rounded-xl overflow-hidden bg-space-gray border transition-all duration-300 ${
                      isActive 
                        ? "border-sui ring-2 ring-sui/35 scale-[0.98] shadow-lg shadow-sui/5" 
                        : "border-space-border/60 opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`Thumbnail Proof ${index + 1}`}
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-black/20 hover:bg-transparent transition-colors duration-200" />
                    <div className="absolute top-1.5 left-1.5 border border-white/20 bg-black/50 text-[9px] font-mono text-white/90 px-1.5 py-0.5 rounded">
                      #0{index + 1}
                    </div>
                  </button>
                );
              })}
            </div>

          </div>

        </div>
      </div>

      {/* Elegant Lightbox Modal for screenshots */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black/95 z-50 flex flex-col items-center justify-center p-4">
          
          {/* Close & Navigation Indicators */}
          <div className="absolute top-6 left-6 right-6 flex justify-between items-center text-white z-10">
            <span className="font-mono text-sm tracking-widest text-gray-400">
              {language === "pl" ? "PRODUKCYJNY DOWÓD SKALOWANIA" : "PRODUCTION SCALE PROOF"} — {activeImageIndex + 1}/3
            </span>
            <button
              onClick={() => setIsModalOpen(false)}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors"
              aria-label="Close view"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Large Image Frame */}
          <div className="relative w-full max-w-5xl aspect-[16/10] sm:aspect-[16/9] flex items-center justify-center">
            <img
              src={images[activeImageIndex]}
              alt={`Proof in high resolution ${activeImageIndex + 1}`}
              className="max-w-full max-h-[80vh] object-contain rounded-lg border border-white/10"
              referrerPolicy="no-referrer"
            />

            {/* Darkbox Navigation Controls */}
            <button
              onClick={handlePrev}
              className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Previous"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/10 hover:bg-white/25 text-white flex items-center justify-center transition-colors duration-200"
              aria-label="Next"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>

          {/* Modal caption */}
          <p className="mt-6 text-sm text-gray-400 font-sans max-w-md text-center">
            {activeImageIndex === 0 && (language === "pl" ? "Dowód 1: Dynamiczny przyrost wyświetleń o wysokiej retencji." : "Proof 1: Dynamic growth of high-retention organic views.")}
            {activeImageIndex === 1 && (language === "pl" ? "Dowód 2: Konsekwentny, skumulowany napływ nowych obserwujących." : "Proof 2: Consistent, compound influx of new followers.")}
            {activeImageIndex === 2 && (language === "pl" ? "Dowód 3: Rekordowe wskaźniki zaangażowania i interakcji z klipami." : "Proof 3: Record-breaking engagement rates and clip interactions.")}
          </p>
        </div>
      )}
    </section>
  );
}

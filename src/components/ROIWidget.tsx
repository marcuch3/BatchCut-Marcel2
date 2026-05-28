import { useState } from "react";
import { Coins, HelpCircle, ArrowRight, CheckCircle2, Calculator, Sparkles, AlertCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function ROIWidget() {
  const { language, t } = useLanguage();

  // Input states
  const [targetImpressions, setTargetImpressions] = useState(250000); // 30k to 2M
  const [offerValue, setOfferValue] = useState(2500); // Realistic default is $2,500
  const [closeRate, setCloseRate] = useState(10); // Realistic default is 10%

  // Intermediary conversion rates (Industry standards under Marcel's premium video frameworks)
  const clickThroughRate = 0.012; // 1.2% click on bio/cta links
  const bookingRate = 0.025;      // 2.5% book a discovery call
  const paidCpcValue = 1.65;       // Standard equivalent B2B CPC in USD

  // Calculate outputs
  const estimatedClicks = Math.floor(targetImpressions * clickThroughRate);
  const discoveryCallsBooked = Math.round(estimatedClicks * bookingRate);
  const closedDeals = Math.round(discoveryCallsBooked * (closeRate / 100));
  const projectedRevenue = closedDeals * offerValue;

  // Paid Traffic equivalent cost calculations
  const adSpendEquivalent = Math.floor(estimatedClicks * paidCpcValue);

  return (
    <section id="roi" className="py-24 border-t border-space-border/60 bg-space-black relative">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block font-semibold">
            {t.roiHeaderTag}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            {t.roiHeaderTitle1}<span className="text-gradient-blue font-display">{t.roiHeaderTitle2}</span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed max-w-lg mx-auto opacity-80">
            {t.roiHeaderDesc}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Inputs Panel (Left Column) */}
          <div className="lg:col-span-6 bg-space-gray border border-space-border rounded-3xl p-8 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-8">
                <Calculator className="w-5 h-5 text-sui" />
                <h3 className="text-lg font-bold font-display text-white">{t.roiFunnelAnchors}</h3>
              </div>

              {/* Slider 1: Impressions Target */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="impressions-slider" className="text-sm font-sans text-gray-300 font-medium">{t.roiVideoImpressions}</label>
                  <span className="text-sm font-mono text-sui font-bold bg-sui/10 px-2 py-0.5 rounded">
                    {targetImpressions.toLocaleString()}
                  </span>
                </div>
                <input
                  id="impressions-slider"
                  type="range"
                  min="30000"
                  max="2000000"
                  step="10000"
                  value={targetImpressions}
                  onChange={(e) => setTargetImpressions(Number(e.target.value))}
                  className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-sui"
                  aria-label="Monthly Video Impressions"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
                  <span>30K views</span>
                  <span>1M views</span>
                  <span>2M views</span>
                </div>
              </div>

              {/* Slider 2: Offer Value */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="offer-slider" className="text-sm font-sans text-gray-300 font-medium">{t.roiOfferPrice}</label>
                  <span className="text-sm font-mono text-sui font-bold bg-sui/10 px-2 py-0.5 rounded">
                    ${offerValue.toLocaleString()} USD
                  </span>
                </div>
                <input
                  id="offer-slider"
                  type="range"
                  min="100"
                  max="10000"
                  step="100"
                  value={offerValue}
                  onChange={(e) => setOfferValue(Number(e.target.value))}
                  className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-sui"
                  aria-label="High-Ticket Client Offer Price"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
                  <span>$100</span>
                  <span>$5,000</span>
                  <span>$10,000 Offer</span>
                </div>
              </div>

              {/* Slider 3: Sales Call Close Rate */}
              <div className="mb-6">
                <div className="flex justify-between items-center mb-3">
                  <label htmlFor="close-rate-slider" className="text-sm font-sans text-gray-300 font-medium">{t.roiCloseRate}</label>
                  <span className="text-sm font-mono text-sui font-bold bg-sui/10 px-2 py-0.5 rounded">
                    {closeRate}%
                  </span>
                </div>
                <input
                  id="close-rate-slider"
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={closeRate}
                  onChange={(e) => setCloseRate(Number(e.target.value))}
                  className="w-full h-1.5 bg-black/40 rounded-lg appearance-none cursor-pointer accent-sui"
                  aria-label="Sales Close Rate"
                />
                <div className="flex justify-between text-[10px] font-mono text-gray-500 mt-2">
                  <span>1% (Foundational)</span>
                  <span>10% (Optimized)</span>
                  <span>20% (Peak Team)</span>
                </div>
              </div>
            </div>

            {/* Diagnostic warning of traditional models */}
            <div className="bg-black/40 border border-space-border rounded-xl p-4 flex gap-3 items-start mt-6 text-xs text-gray-400">
              <AlertCircle className="w-5 h-5 text-sui shrink-0 mt-0.5" />
              <p className="leading-relaxed">
                {language === 'pl'
                  ? "Płatne reklamy wymagają stałego budżetu. Organiczna dystrybucja treści tworzy aktywo o skumulowanym wzroście, które trwa długo po wdrożeniu."
                  : "Paid ads require constant capital infusions. Organic system distribution builds an compound-growth asset that persists long after Marcel's scripts deploy."
                }
              </p>
            </div>
          </div>

          {/* Outputs Panel (Right Column) */}
          <div className="lg:col-span-6 bg-gradient-to-br from-space-gray to-space-black border border-sui/30 rounded-3xl p-8 flex flex-col justify-between relative overflow-hidden sui-glow-sm">
            {/* Ambient visual badge */}
            <div className="absolute top-0 right-0 w-44 h-44 bg-[radial-gradient(ellipse_at_top_right,rgba(56,152,236,0.15),transparent)] pointer-events-none" />

            <div>
              <span className="text-xs font-mono text-sui uppercase tracking-wider block mb-2">{t.roiCalculatedPipeline}</span>
              
              {/* Massive Output Revenue display */}
              <div className="mb-8 border-b border-space-border pb-6">
                <span className="text-[11px] font-mono text-gray-500 uppercase tracking-widest block">{t.roiProjectedRevenue}</span>
                <p className="text-4xl md:text-5xl lg:text-6xl font-bold font-display text-white mt-2 leading-none">
                  ${projectedRevenue.toLocaleString()}
                </p>
                <span className="text-xs font-mono text-sui block mt-2">
                  {language === 'pl'
                    ? `Oparte na ${closedDeals} sfinalizowanych umowach z ${discoveryCallsBooked} zarezerwowanych konsultacji`
                    : `Based on ${closedDeals} closed deals from ${discoveryCallsBooked} booked discovery calls`
                  }
                </span>
              </div>

              {/* Ad Savings equivalent comparison */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-black/40 p-4 rounded-xl border border-space-border/50">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">{t.roiBioClicks}</span>
                  <span className="text-lg font-bold text-white font-mono block mt-1">{estimatedClicks.toLocaleString()}</span>
                  <span className="text-[10px] text-gray-500">{language === 'pl' ? "Przy standardowym 1.2% CTR" : "At standard 1.2% CTR"}</span>
                </div>

                <div className="bg-black/40 p-4 rounded-xl border border-space-border/50">
                  <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider block">{t.roiAdValue}</span>
                  <span className="text-lg font-bold text-sui font-mono block mt-1">${adSpendEquivalent.toLocaleString()}</span>
                  <span className="text-[10px] text-gray-500">{language === 'pl' ? "Oszczędność budżetu reklamowego" : "Free organic ad-spend equity"}</span>
                </div>
              </div>

              {/* Benefits Highlights Checkbox */}
              <div className="space-y-3">
                <p className="text-xs font-mono uppercase text-gray-400 tracking-wider mb-2">{t.roiGuarantee}</p>
                
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-sui" />
                  <span>{language === 'pl' ? "Pełny transfer praw autorskich (posiadasz 100% materiałów)" : "Full asset transfer (you own 100% of video materials)"}</span>
                </div>
                
                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-sui" />
                  <span>{language === 'pl' ? "Pakiet gotowych scenariuszy i tematów contentowych" : "Turnkey scripting and topic development backlog"}</span>
                </div>

                <div className="flex items-center gap-2.5 text-xs text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-sui" />
                  <span>{language === 'pl' ? "Zautomatyzowany montaż z gwarancją dostawy w 48h" : "Automated editing with guaranteed 48h turn-arounds"}</span>
                </div>
              </div>
            </div>

            {/* Custom Interactive action anchor */}
            <div className="mt-8 pt-6 border-t border-space-border/60">
              <div className="flex justify-between items-center">
                <div className="font-sans">
                  <p className="text-xs text-gray-400">{language === 'pl' ? "Potencjał Wielokrotności" : "Yield Multiplier Potential"}</p>
                  <p className="text-sm font-bold text-white font-display">{t.roiCallAction}</p>
                </div>
                
                <a
                  href="#contact"
                  className="w-12 h-12 rounded-full bg-sui hover:bg-sui-dark text-black hover:text-white flex items-center justify-center transition-colors group"
                  aria-label="Request Bespoke Content Audit"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

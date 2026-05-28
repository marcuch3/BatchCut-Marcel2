import React, { useState } from "react";
import { Send, MessageCircle, ArrowUp, Instagram, Linkedin, Youtube, Calendar, Check } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function CTAAndFooter() {
  const { language } = useLanguage();

  // State for the native interactive scheduler
  const [selectedDateIdx, setSelectedDateIdx] = useState(0);
  const [selectedTimeSlot, setSelectedTimeSlot] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  const dates = [
    { dayNameEn: "THU", dayNamePl: "CZW", dayNumber: "28", monthEn: "May", monthPl: "Maja", fullDayEn: "Thursday, May 28", fullDayPl: "Czwartek, 28 Maja" },
    { dayNameEn: "FRI", dayNamePl: "PIĄ", dayNumber: "29", monthEn: "May", monthPl: "Maja", fullDayEn: "Friday, May 29", fullDayPl: "Piątek, 29 Maja" },
    { dayNameEn: "MON", dayNamePl: "PON", dayNumber: "01", monthEn: "Jun", monthPl: "Czerwca", fullDayEn: "Monday, June 1", fullDayPl: "Poniedziałek, 1 Czerwca" },
    { dayNameEn: "TUE", dayNamePl: "WT", dayNumber: "02", monthEn: "Jun", monthPl: "Czerwca", fullDayEn: "Tuesday, June 2", fullDayPl: "Wtorek, 2 Czerwca" },
    { dayNameEn: "WED", dayNamePl: "ŚR", dayNumber: "03", monthEn: "Jun", monthPl: "Czerwca", fullDayEn: "Wednesday, June 3", fullDayPl: "Środa, 3 Czerwca" },
  ];

  const timeSlots = [
    "09:30 AM (EST)",
    "11:00 AM (EST)",
    "01:30 PM (EST)",
    "03:00 PM (EST)",
    "04:30 PM (EST)",
  ];

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleProceedBooking = () => {
    if (!selectedTimeSlot) {
      // Auto-select first slot if none chosen to look seamless
      setSelectedTimeSlot(timeSlots[0]);
    }
    setIsSuccess(true);
    // Open Calendly in new tab to finish the concrete booking flow
    setTimeout(() => {
      window.open("https://calendly.com/marcelbytnar/30min", "_blank");
    }, 1200);
  };

  const selectedDateObj = dates[selectedDateIdx];

  return (
    <section id="contact-audit" className="relative bg-space-black overflow-hidden py-24 border-t border-space-border/60">
      
      {/* Soft branding glow background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(56,152,236,0.04),transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#3898EC]/25 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Main 1:1 responsive grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Context, 25% Smaller Photo, alternative buttons */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-xs font-mono tracking-widest text-[#FF5100] uppercase bg-[#FF5100]/10 px-3 py-1 rounded-full inline-block font-bold">
                {language === "pl" ? "UMÓW SIĘ NA ROZMOWĘ" : "BOOK A SESSION"}
              </span>
              
              <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight leading-tight">
                {language === "pl" ? "Zarezerwuj bezpłatną " : "Book a free "}
                <span className="text-gradient-blue font-semibold">
                  {language === "pl" ? "konsultację." : "consultation."}
                </span>
              </h2>

              <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed">
                {language === "pl"
                  ? "Zobaczmy, jak możemy przeskalować Twój projekt. Wybierz dogodny termin w kalendarzu lub napisz do mnie bezpośrednio."
                  : "Let's see how we can scale your project. Choose a convenient time in the calendar or message me directly."}
              </p>
            </div>

            {/* Profile Image with brand's blue neon glow - 25% smaller (max-w-[280px] lg:max-w-[320px]) */}
            <div className="relative group max-w-[280px] lg:max-w-[320px]">
              <div className="absolute -inset-1 bg-sui/30 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-205" />
              <div className="relative rounded-2xl overflow-hidden border border-sui/35 bg-black shadow-[0_0_25px_rgba(56,152,236,0.20)]">
                <img
                  src="https://res.cloudinary.com/dese0tzci/image/upload/q_auto/f_auto/v1779970724/httpswww.batchcut.xyz_2_y46avr.png"
                  alt="Marcel Bytnar Profile"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover grayscale hover:grayscale-0 transition-all duration-750"
                />
              </div>
            </div>

            {/* Alternative Direct Contact Buttons */}
            <div className="space-y-3">
              <span className="text-xs font-mono uppercase text-gray-500 tracking-wider block">
                {language === "pl" ? "// ALTERNATYWNY KONTAKT BEZPOŚREDNI //" : "// QUICK ALTERNATIVE CONTACT //"}
              </span>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Telegram button */}
                <a
                  href="https://t.me/marcuch3"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-space-gray border border-space-border/80 hover:border-sui/50 rounded-xl group transition-all duration-300 hover:shadow-[0_0_15px_rgba(56,152,236,0.15)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#0088cc]/10 border border-[#0088cc]/30 flex items-center justify-center text-[#0088cc]">
                      <Send className="w-5 h-5" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-gray-400 block tracking-wider font-semibold uppercase">TELEGRAM</span>
                      <span className="text-xs font-sans font-bold text-white group-hover:text-sui transition-colors">@marcuch3</span>
                    </div>
                  </div>
                  <Send className="w-4 h-4 text-gray-400 group-hover:text-sui group-hover:translate-x-0.5 transition-all" />
                </a>

                {/* WhatsApp button - Hidden Phone Number */}
                <a
                  href="https://wa.me/48530800283"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-4 bg-space-gray border border-space-border/80 hover:border-[#25D366]/50 rounded-xl group transition-all duration-300 hover:shadow-[0_0_15px_rgba(37,211,102,0.15)]"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-[#25D366]/10 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                      <MessageCircle className="w-5 h-5 fill-current" />
                    </div>
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-gray-400 block tracking-wider font-semibold uppercase">WHATSAPP</span>
                      <span className="text-xs font-sans font-bold text-white group-hover:text-[#25D366] transition-colors">
                        {language === "pl" ? "Napisz na WhatsApp" : "Chat on WhatsApp"}
                      </span>
                    </div>
                  </div>
                  <MessageCircle className="w-4 h-4 text-gray-400 group-hover:text-[#25D366] group-hover:translate-x-0.5 transition-all" />
                </a>

              </div>
            </div>

          </div>

          {/* Right Column: High-Fidelity Interactive Native Scheduler Booking Engine */}
          <div className="lg:col-span-6 w-full bg-[#0C0C0F] border border-space-border/80 rounded-3xl overflow-hidden shadow-2xl relative">
            
            {/* Minimal aesthetic design top bar */}
            <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5100] via-[#3898EC] to-[#FF5100] z-10" />

            <div className="p-4.5 bg-black/45 border-b border-space-border/40 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#FF5100] animate-pulse"></span>
                <span className="text-[9px] font-mono text-gray-400 tracking-wider font-bold">BUILT-IN CALENDLY SELECTOR</span>
              </div>
              <span className="text-[9px] font-mono text-gray-500 uppercase">SYSTEM ACTIVE</span>
            </div>

            {isSuccess ? (
              /* Success Redirection State */
              <div className="p-10 text-center min-h-[500px] flex flex-col items-center justify-center space-y-6">
                <div className="w-16 h-16 rounded-full bg-sui/10 border border-sui flex items-center justify-center text-sui animate-bounce">
                  <Check className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl font-bold font-display text-white">
                    {language === "pl" ? "Przekierowywanie do Kalendarza..." : "Redirecting to Calendly..."}
                  </h3>
                  <p className="text-xs text-gray-400 mt-2 font-mono max-w-sm mx-auto">
                    {language === "pl" 
                      ? `Zabezpieczam Twój termin: ${selectedDateObj.dayNamePl} ${selectedDateObj.dayNumber} o godzinie ${selectedTimeSlot || "09:30 AM"}.`
                      : `Securing your select: ${selectedDateObj.dayNameEn} ${selectedDateObj.dayNumber} at ${selectedTimeSlot || "09:30 AM"}.`}
                  </p>
                </div>
                <div className="w-24 h-1 bg-space-border/80 rounded-full overflow-hidden">
                  <div className="h-full bg-sui animate-infinite-loading w-1/2 rounded-full" />
                </div>
              </div>
            ) : (
              /* Calendar Core UI Step-by-Step Selection UI */
              <div className="p-6 md:p-8 space-y-8">
                
                {/* Step 1: Date cards */}
                <div className="space-y-3">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">
                    {language === "pl" ? "KROK 01 // WYBIERZ DATĘ" : "STEP 01 // SELECT A DATE"}
                  </span>
                  <h3 className="text-lg md:text-xl font-bold font-display text-white">
                    {language === "pl" ? "Wybierz datę spotkania:" : "Select Preferred Date:"}
                  </h3>

                  {/* Horizontal Scrollable/Wrap Grid of Date Cards */}
                  <div className="grid grid-cols-5 gap-2 pt-2">
                    {dates.map((date, idx) => {
                      const isSelected = selectedDateIdx === idx;
                      return (
                        <button
                          key={idx}
                          onClick={() => {
                            setSelectedDateIdx(idx);
                            setSelectedTimeSlot(null); // Reset timing for flawless flow
                          }}
                          className={`flex flex-col items-center justify-center p-3 rounded-xl border text-center transition-all duration-300 relative group cursor-pointer ${
                            isSelected
                              ? "bg-space-gray border-[#FF5100]/90 text-white shadow-[0_0_15px_rgba(255,81,0,0.20)]"
                              : "bg-[#0F0F12]/60 border-space-border/50 text-gray-400 hover:border-space-border hover:text-white"
                          }`}
                        >
                          <span className="text-[10px] font-mono tracking-wider font-semibold block mb-1">
                            {language === "pl" ? date.dayNamePl : date.dayNameEn}
                          </span>
                          <span className="text-lg md:text-2xl font-display font-extrabold block">
                            {date.dayNumber}
                          </span>
                          {isSelected && (
                            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-1 bg-[#FF5100] rounded-t-sm" />
                          )}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 2: Available slots */}
                <div className="space-y-4 pt-4 border-t border-space-border/40">
                  <span className="text-[10px] font-mono tracking-widest text-gray-500 uppercase block">
                    {language === "pl" ? "KROK 02 // DOSTĘPNE GODZINY" : "STEP 02 // AVAILABLE SLOTS"}
                  </span>
                  <h3 className="text-base md:text-lg font-bold font-display text-white">
                    {language === "pl" ? "Wolne godziny dla " : "Time sessions for "}
                    <span className="text-sui font-sans font-medium">
                      {language === "pl" ? selectedDateObj.fullDayPl : selectedDateObj.fullDayEn}
                    </span>
                    :
                  </h3>

                  {/* Dynamic Time Slot Cards Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-lg">
                    {timeSlots.map((slot) => {
                      const isSelected = selectedTimeSlot === slot;
                      return (
                        <button
                          key={slot}
                          onClick={() => setSelectedTimeSlot(slot)}
                          className={`px-4 py-3 rounded-xl text-left border font-mono text-xs md:text-sm tracking-wide transition-all duration-200 cursor-pointer flex items-center justify-between ${
                            isSelected
                              ? "bg-sui/10 border-sui text-sui font-bold shadow-[0_0_12px_rgba(56,152,236,0.15)]"
                              : "bg-[#0b0b0d] border-space-border/60 text-gray-300 hover:border-space-border/90 hover:text-white"
                          }`}
                        >
                          <span>{slot}</span>
                          {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-sui" />}
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Step 3: Action button exactly matching screenshot design */}
                <div className="pt-6">
                  <button
                    onClick={handleProceedBooking}
                    className="w-full py-4.5 bg-[#5C2E16] hover:bg-[#783C1D] text-white font-mono text-sm tracking-widest font-extrabold uppercase rounded-xl transition-all shadow-[0_4px_25px_rgba(120,60,29,0.3)] hover:shadow-[0_4px_30px_rgba(120,60,29,0.5)] border border-[#7C3F1E]/60 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    <span>
                      {language === "pl" ? "PRZEJDŹ DO POTWIERDZENIA SZCZEGÓŁÓW" : "PROCEED TO CONFIRM DETAILS"}
                    </span>
                    <span className="group-hover:translate-x-0.5 transition-transform">→</span>
                  </button>
                  <p className="text-[10px] text-gray-500 text-center mt-3 font-sans">
                    {language === "pl" 
                      ? "*Po kliknięciu nastąpi natychmiastowe zabezpieczenie wolnego slotu 1:1 w systemie Calendly."
                      : "*Clicking safely forwards you directly to seal the slot inside the official Calendly workspace."}
                  </p>
                </div>

              </div>
            )}

          </div>

        </div>

        {/* Minimalist Footer */}
        <div className="border-t border-space-border/40 mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded bg-gradient-to-tr from-sui to-sui-dark flex items-center justify-center text-black font-extrabold text-xs font-display">
              MB
            </div>
            <span className="font-display font-semibold text-xs tracking-widest text-white uppercase">MARCEL BYTNAR</span>
          </div>

          {/* Copyright description */}
          <p className="text-[11px] font-mono text-gray-600 text-center md:text-left">
            © 2026 Marcel Bytnar. All rights reserved.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-space-card/80 border border-white/5 text-gray-400 hover:text-sui hover:border-sui/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Instagram Profile"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-space-card/80 border border-white/5 text-gray-400 hover:text-sui hover:border-sui/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-9 h-9 rounded-xl bg-space-card/80 border border-white/5 text-gray-400 hover:text-sui hover:border-sui/40 flex items-center justify-center transition-all cursor-pointer"
              aria-label="YouTube Channel"
            >
              <Youtube className="w-4 h-4" />
            </a>
            
            <button
              onClick={handleScrollTop}
              className="ml-4 w-9 h-9 rounded-xl bg-space-gray/50 border border-space-border/60 text-gray-500 hover:text-white hover:border-white/20 flex items-center justify-center transition-all cursor-pointer"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        <div className="mt-6 text-center text-[9px] font-mono text-gray-800">
          SYSTEM_STATE: DISCOVERY // ACTIVE PIPELINE BROADCAST SECURED // ENVELOPE: UTC2026
        </div>

      </div>
    </section>
  );
}


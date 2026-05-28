import React, { useState } from "react";
import { Calendar, Clock, Check, User, Mail, Link as LinkIcon, Sparkles, Send, ArrowRight, ArrowUp, Instagram, Linkedin, Youtube, MessageSquare } from "lucide-react";

export default function CTAAndFooter() {
  // Calendar scheduling interactive mockup state
  const [selectedDate, setSelectedDate] = useState<string>("Thursday, May 28");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [bookingStep, setBookingStep] = useState<"date" | "form" | "success">("date");
  const [clientName, setClientName] = useState("");
  const [clientEmail, setClientEmail] = useState("");
  const [clientPlatform, setClientPlatform] = useState("");

  const dates = [
    { label: "THU", num: "28", full: "Thursday, May 28", available: true },
    { label: "FRI", num: "29", full: "Friday, May 29", available: true },
    { label: "MON", num: "01", full: "Monday, June 1", available: true },
    { label: "TUE", num: "02", full: "Tuesday, June 2", available: true },
    { label: "WED", num: "03", full: "Wednesday, June 3", available: false }
  ];

  const timeslots = [
    "09:30 AM (EST)",
    "11:00 AM (EST)",
    "01:30 PM (EST)",
    "03:00 PM (EST)",
    "04:30 PM (EST)"
  ];

  const handleBookingConfirm = (e: React.FormEvent) => {
    e.preventDefault();
    if (clientName && clientEmail) {
      setBookingStep("success");
    }
  };

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <section id="contact-audit" className="relative bg-black select-none overflow-hidden py-24 border-t border-space-border/60">
      
      {/* Visual background style: Very dark radial gradient background featuring a soft neon orange glow in the center */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,81,0,0.14),transparent_65%)] pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[#FF5100]/35 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-[10px] font-mono tracking-[0.2em] text-[#FF5100] uppercase font-extrabold bg-[#FF5100]/10 px-4 py-1.5 rounded-full inline-block">
            ⚡ EXCLUSIVE INTRODUCTORY DISCOVERY AUDIT
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-6 tracking-tight">
            Ready to take over <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF5100] via-[#FF8000] to-white">your industry?</span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm md:text-base leading-relaxed">
            Let's build your content machine. Pick a time that works for you.
          </p>
        </div>

        {/* Calendar Booking Mockup System */}
        <div className="max-w-4xl mx-auto bg-space-card/85 backdrop-blur-xl border border-white/5 shadow-2xl rounded-3xl overflow-hidden mb-16 relative">
          
          {/* Subtle decoration elements */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-[#FF5100] via-sui to-[#FF5100]/40" />

          <div className="grid grid-cols-1 md:grid-cols-12">
            
            {/* Left Column Calendar Details */}
            <div className="md:col-span-5 p-8 border-r border-space-border/40 bg-black/40 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80"
                    alt="Marcel Bytnar Photo"
                    referrerPolicy="no-referrer"
                    className="w-12 h-12 rounded-full border-2 border-[#FF5100] object-cover"
                  />
                  <div>
                    <span className="text-xs font-mono text-[#FF5100] font-bold block uppercase tracking-wider">CREATIVE DIRECTOR</span>
                    <h3 className="font-display font-medium text-white text-base">Marcel Bytnar</h3>
                  </div>
                </div>

                <div className="space-y-4">
                  <h4 className="text-lg font-bold font-display text-white">
                    30-Min Discovery Strategy Audit
                  </h4>
                  <p className="text-xs text-gray-400 leading-relaxed font-sans">
                    A deep structural audit of your brand's distribution model. We will analyze your core conversion pillars, isolate retaining retention rates, and draw a concrete roadmap to scale 10M+ views.
                  </p>
                </div>
              </div>

              {/* Specs parameters HUD */}
              <div className="space-y-3 pt-6 border-t border-space-border/50 mt-8">
                <div className="flex items-center gap-2.5 text-xs text-gray-300 font-mono">
                  <Clock className="w-4 h-4 text-[#FF5100]" />
                  <span>30 Minutes duration</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-gray-300 font-mono">
                  <Calendar className="w-4 h-4 text-sui" />
                  <span>Screen Share (Google Meet)</span>
                </div>
              </div>
            </div>

            {/* Right Column Interactive Booking Panels */}
            <div className="md:col-span-7 p-8 flex flex-col justify-center min-h-[400px]">
              
              {/* STEP 1: DATE & TIME SELECTOR */}
              {bookingStep === "date" && (
                <div className="space-y-6">
                  <div>
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block mb-1">STEP 01 // SELECT A DATE</span>
                    <h4 className="text-sm font-bold font-display text-white">Select Preferred Date:</h4>
                    
                    {/* Horizontal Date picker */}
                    <div className="grid grid-cols-5 gap-2.5 mt-3">
                      {dates.map((date) => (
                        <button
                          key={date.num}
                          disabled={!date.available}
                          onClick={() => {
                            setSelectedDate(date.full);
                            setSelectedTime(""); // Reset selected time when switching date
                          }}
                          className={`flex flex-col items-center justify-center p-2.5 rounded-xl border transition-all cursor-pointer ${
                            !date.available
                              ? "opacity-35 cursor-not-allowed border-transparent bg-transparent"
                              : selectedDate === date.full
                              ? "bg-gradient-to-b from-[#FF5100]/25 to-[#FF8000]/10 border-[#FF5100] text-white"
                              : "border-space-border/60 hover:border-white/20 text-gray-400 hover:text-white"
                          }`}
                        >
                          <span className="text-[9px] font-mono tracking-wider">{date.label}</span>
                          <span className="text-base font-bold mt-1 font-display">{date.num}</span>
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Timeslots Selector */}
                  <div className="space-y-3">
                    <span className="text-[10px] font-mono tracking-wider text-gray-500 uppercase block mb-1">STEP 02 // AVAILABLE SLOTS</span>
                    <h4 className="text-sm font-bold font-display text-white">
                      Time sessions for <span className="text-sui font-sans">{selectedDate}</span>:
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                      {timeslots.map((slot) => (
                        <button
                          key={slot}
                          onClick={() => setSelectedTime(slot)}
                          className={`py-2 px-3 text-xs font-mono font-medium rounded-xl border text-left transition-all cursor-pointer ${
                            selectedTime === slot
                              ? "bg-sui text-black border-sui font-bold shadow-[0_0_15px_rgba(56,152,236,0.3)]"
                              : "border-space-border/60 hover:border-[#FF5100]/40 text-gray-300 bg-space-black/50 hover:text-white"
                          }`}
                        >
                          {slot}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Proceed CTA CTA */}
                  <button
                    disabled={!selectedTime}
                    onClick={() => setBookingStep("form")}
                    className="w-full mt-4 py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF5100] to-[#FF8000] text-white hover:opacity-90 disabled:opacity-40 disabled:cursor-not-allowed font-bold font-display text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Proceed to Confirm Details</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              )}

              {/* STEP 2: DETAILS DESCRIPTION FORM */}
              {bookingStep === "form" && (
                <form onSubmit={handleBookingConfirm} className="space-y-5">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono tracking-wider text-[#FF5100] font-bold">STEP 02 // DETAILS</span>
                      <button
                        onClick={() => setBookingStep("date")}
                        className="text-[10px] font-mono text-gray-400 hover:text-white underline cursor-pointer"
                      >
                        ← Back to times
                      </button>
                    </div>
                    <div className="bg-[#FF5100]/5 border border-[#FF5100]/25 rounded-xl p-3 text-xs text-orange-200 flex items-center gap-2 leading-relaxed">
                      <Sparkles className="w-4 h-4 text-[#FF5100] shrink-0" />
                      <span>Booking for <strong className="text-white">{selectedDate}</strong> at <strong className="text-white">{selectedTime}</strong></span>
                    </div>
                  </div>

                  <div className="space-y-4">
                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-1.5 uppercase">YOUR FULL NAME *</label>
                      <div className="relative">
                        <User className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          required
                          value={clientName}
                          onChange={(e) => setClientName(e.target.value)}
                          placeholder="Arthur Pendelton"
                          className="w-full bg-black/50 border border-space-border/80 focus:border-[#FF5100] tracking-wide rounded-xl py-2.5 pl-10 pr-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF5100]/30 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-1.5 uppercase">EMAIL ADDRESS *</label>
                      <div className="relative">
                        <Mail className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="email"
                          required
                          value={clientEmail}
                          onChange={(e) => setClientEmail(e.target.value)}
                          placeholder="arthur@coregate.io"
                          className="w-full bg-black/50 border border-space-border/80 focus:border-[#FF5100] tracking-wide rounded-xl py-2.5 pl-10 pr-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF5100]/30 transition-all font-sans"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="text-xs font-mono text-gray-400 block mb-1.5 uppercase">PLATFORM URL OR CURRENT PRODUCT ROADMAP (OPTIONAL)</label>
                      <div className="relative">
                        <LinkIcon className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-500" />
                        <input
                          type="text"
                          value={clientPlatform}
                          onChange={(e) => setClientPlatform(e.target.value)}
                          placeholder="https://www.coregate.io"
                          className="w-full bg-black/50 border border-space-border/80 focus:border-[#FF5100] tracking-wide rounded-xl py-2.5 pl-10 pr-3 text-xs text-white placeholder-gray-600 focus:outline-none focus:ring-1 focus:ring-[#FF5100]/30 transition-all font-sans"
                        />
                      </div>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 px-6 rounded-xl bg-gradient-to-r from-[#FF5100] through-[#FF8000] to-sui text-white font-bold font-display text-xs tracking-widest uppercase flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg hover:brightness-110 active:scale-[0.99]"
                  >
                    <span>LOCK IN MY SCHEDULE</span>
                    <Send className="w-4 h-4 text-white" />
                  </button>
                </form>
              )}

              {/* STEP 3: SUCCESS RESULT EMBED */}
              {bookingStep === "success" && (
                <div className="text-center py-6 space-y-5 animate-fade-in">
                  <div className="w-16 h-16 rounded-full bg-green-500/15 border border-green-500/40 text-green-400 flex items-center justify-center mx-auto shadow-[0_0_20px_rgba(34,197,94,0.2)]">
                    <Check className="w-8 h-8 font-bold" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest text-green-400 uppercase font-bold text-center block">// BOOKING SECURED //</span>
                    <h4 className="text-xl font-bold font-display text-white">
                      Meeting Locked IN!
                    </h4>
                    <p className="text-gray-300 text-xs font-sans max-w-sm mx-auto leading-relaxed">
                      Confirmed with Creative Director <strong className="text-white">Marcel Bytnar</strong> on <strong className="text-sui">{selectedDate}</strong> at <strong className="text-sui">{selectedTime}</strong>. 
                    </p>
                  </div>

                  <div className="bg-space-card border border-white/5 rounded-2xl p-4 max-w-md mx-auto text-left space-y-1.5">
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>ATTENDEE :</span>
                      <span className="text-white font-bold">{clientName}</span>
                    </div>
                    <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                      <span>RECEIPT EMAIL :</span>
                      <span className="text-white">{clientEmail}</span>
                    </div>
                    {clientPlatform && (
                      <div className="flex justify-between items-center text-[10px] font-mono text-gray-500">
                        <span>TARGET DOMAIN :</span>
                        <span className="text-sui break-all max-w-[200px] text-right">{clientPlatform}</span>
                      </div>
                    )}
                  </div>

                  <p className="text-[10px] font-mono text-gray-500">
                    A personalized calendar invitations link & preparatory worksheet was dispatched to your inbox.
                  </p>

                  <button
                    onClick={() => {
                      setBookingStep("date");
                      setClientName("");
                      setClientEmail("");
                      setClientPlatform("");
                    }}
                    className="text-xs font-mono border border-space-border px-4 py-2 rounded-xl text-gray-400 hover:text-white hover:border-white/20 transition-all cursor-pointer inline-block"
                  >
                    Schedule Another Session
                  </button>
                </div>
              )}

            </div>
          </div>
        </div>

        {/* Alternative Contact Block (WhatsApp) */}
        <div className="text-center max-w-lg mx-auto py-8">
          <p className="text-xs font-mono text-gray-400 mb-4 tracking-wider uppercase">
            Need a quick answer?
          </p>
          <a
            href="https://wa.me/31600000000" // Styled to match WhatsApp custom color scheme beautifully
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#20ba56] text-black font-extrabold text-sm font-display py-4 px-8 rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.25)] hover:shadow-[0_10px_40px_rgba(37,211,102,0.35)] transition-all transform hover:-translate-y-0.5 active:translate-y-0 font-bold tracking-wide uppercase"
          >
            <MessageSquare className="w-5 h-5 fill-current" />
            <span>Message me on WhatsApp</span>
          </a>
        </div>

        {/* Minimalist Footer */}
        <div className="border-t border-space-border/40 mt-24 pt-12 flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Info */}
          <div className="flex items-center gap-3">
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#FF5100] to-[#FF8000] flex items-center justify-center text-white font-extrabold text-xs font-display">
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
              className="w-9 h-9 rounded-xl bg-space-card/80 border border-white/5 text-gray-400 hover:text-[#FF5100] hover:border-[#FF5100]/40 flex items-center justify-center transition-all cursor-pointer"
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
              className="w-9 h-9 rounded-xl bg-space-card/80 border border-white/5 text-gray-400 hover:text-[#FF5100] hover:border-[#FF5100]/40 flex items-center justify-center transition-all cursor-pointer"
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

import { useState, FormEvent } from "react";
import { Send, Sparkles, CheckCircle2, ArrowRight, User, Globe, Mail, MessageSquare, Clock, PhoneCall } from "lucide-react";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    handle: "",
    offerRank: "5k",
    focus: "automation",
    message: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email) {
      alert("Please fill in your Name and Email Address.");
      return;
    }
    
    // Simulate premium visual loading pipeline
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setFormSubmitted(true);
    }, 1800);
  };

  const agendas = [
    { id: "automation", label: "Automated Pipe Infrastructure", text: "Establish dynamic editing pipelines to lower video overhead by 80%." },
    { id: "scripting", label: "Visual Hook Content Development", text: "Learn how we engineer retention hooks to convert viewers into clients." },
    { id: "scaling", label: "Omnipresent Multi-Platform Scaling", text: "Map channels across LinkedIn, Reels, Shorts & TikTok dynamically." }
  ];

  return (
    <section id="contact" className="py-24 border-t border-space-border/60 bg-space-black relative">
      <div className="absolute left-10 bottom-10 w-[300px] h-[300px] bg-sui/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-mono tracking-widest text-sui uppercase bg-sui/10 px-3 py-1 rounded-full inline-block font-bold">
            THE GATEWAY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            Initiate your bespoke <span className="text-gradient-blue font-display">content audit.</span>
          </h2>
          <p className="text-gray-400 font-sans mt-4 text-sm leading-relaxed">
            Fill in your channels below. We manually review your videos and map a customized 30-day viral strategy prior to our Discovery Call.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-space-gray border border-space-border rounded-3xl p-8 md:p-12 relative overflow-hidden">
          
          {!formSubmitted ? (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Row 1: Name and Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="input-name" className="text-xs font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                    <User className="w-3.5 h-3.5 text-sui" /> 
                    Full name
                  </label>
                  <input
                    id="input-name"
                    type="text"
                    required
                    placeholder="e.g. Liam Vance"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-black/40 border border-space-border/80 focus:border-sui text-white rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="input-email" className="text-xs font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                    <Mail className="w-3.5 h-3.5 text-sui" /> 
                    Business Email
                  </label>
                  <input
                    id="input-email"
                    type="email"
                    required
                    placeholder="e.g. vance@agency.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-black/40 border border-space-border/80 focus:border-sui text-white rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-colors"
                  />
                </div>
              </div>

              {/* Row 2: Website handle and Offer ranks */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="input-handle" className="text-xs font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                    <Globe className="w-3.5 h-3.5 text-sui" /> 
                    Social handle or business url
                  </label>
                  <input
                    id="input-handle"
                    type="text"
                    placeholder="e.g. @liamgrowth / agency.com"
                    value={formData.handle}
                    onChange={(e) => setFormData({ ...formData, handle: e.target.value })}
                    className="w-full bg-black/40 border border-space-border/80 focus:border-sui text-white rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-colors"
                  />
                </div>

                <div className="space-y-2">
                  <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block">Average High-ticket Price</span>
                  <div className="grid grid-cols-3 gap-2">
                    {["3k", "5k", "10k+"].map((tier) => (
                      <button
                        key={tier}
                        type="button"
                        onClick={() => setFormData({ ...formData, offerRank: tier })}
                        className={`py-3 px-2 rounded-xl border text-xs font-mono transition-all cursor-pointer ${
                          formData.offerRank === tier
                            ? "bg-sui/15 border-sui text-sui font-bold"
                            : "bg-black/40 border-space-border/50 text-gray-400 hover:text-white"
                        }`}
                      >
                        {tier === "10k+" ? "$10K+ Tier" : `$${tier}`}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Agenda agenda items */}
              <div className="space-y-3">
                <span className="text-xs font-mono uppercase text-gray-400 tracking-wider block">Select Audit Focus Priority</span>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {agendas.map((item) => (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => setFormData({ ...formData, focus: item.id })}
                      className={`p-5 rounded-2xl border text-left cursor-pointer transition-all ${
                        formData.focus === item.id
                          ? "bg-sui/10 border-sui"
                          : "bg-black/30 border-space-border/60 text-gray-400 hover:border-gray-700 hover:text-white"
                      }`}
                    >
                      <span className={`text-xs font-bold block mb-1 ${formData.focus === item.id ? "text-sui" : "text-white"}`}>
                        {item.label}
                      </span>
                      <span className="text-[10px] text-gray-500 block leading-relaxed">{item.text}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label htmlFor="input-message" className="text-xs font-mono uppercase text-gray-400 tracking-wider flex items-center gap-1.5">
                  <MessageSquare className="w-3.5 h-3.5 text-sui" /> 
                  Additional Growth Bottlenecks / Notes
                </label>
                <textarea
                  id="input-message"
                  rows={4}
                  placeholder="Tell us what prevents you from making consistent high-ticket content..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full bg-black/40 border border-space-border/80 focus:border-sui text-white rounded-xl py-3.5 px-4 font-sans text-sm outline-none transition-colors resize-none"
                />
              </div>

              {/* Action Submit */}
              <div className="pt-4 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-space-border/60">
                <div className="flex items-center gap-2.5 text-xs text-gray-500">
                  <Clock className="w-4 h-4 text-sui" />
                  <span>Manual channels audit completes on average within 12 hours.</span>
                </div>
                
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full md:w-auto px-8 py-4 bg-sui hover:bg-sui/90 text-black font-display font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-sui/20 flex items-center justify-center gap-2 group cursor-pointer"
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 rounded-full border-2 border-black border-t-transparent animate-spin"></span>
                      <span>Compiling Pipeline...</span>
                    </>
                  ) : (
                    <>
                      <span>Lock in Discovery Call</span>
                      <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          ) : (
            // Breathtaking success visualization
            <div id="booking-success-box" className="text-center py-12 flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-sui/15 border border-sui text-sui flex items-center justify-center mb-6 animate-pulse">
                <PhoneCall className="w-8 h-8" />
              </div>
              
              <span className="text-xs font-mono text-sui tracking-widest uppercase mb-2">SYSTEM TRANSMISSION_SECURED</span>
              <h3 className="text-2xl md:text-3xl font-bold font-display text-white mb-4">
                Thank you, {formData.name}!
              </h3>
              
              <p className="text-gray-400 font-sans max-w-md mx-auto text-sm leading-relaxed mb-8">
                We received your handle {formData.handle || "and site"}. Marcel is currently compiling your manual content audit. A customized calendar invitation link has been dispatched to <span className="text-white font-semibold">{formData.email}</span>.
              </p>

              <div className="bg-space-black/60 border border-space-border/80 rounded-2xl p-6 text-left max-w-md w-full mb-8">
                <span className="text-[10px] font-mono text-gray-500 block mb-2 uppercase tracking-widest">PREPARATORY ASSIGNMENT</span>
                <div className="space-y-3">
                  <div className="flex gap-2.5 items-start text-xs text-gray-300 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                    <span>Check your email toolbox for our script preparation brief.</span>
                  </div>
                  <div className="flex gap-2.5 items-start text-xs text-gray-300 leading-normal">
                    <CheckCircle2 className="w-4 h-4 text-sui shrink-0 mt-0.5" />
                    <span>Bring 2 or 3 competitor videos you want our automated post-production pipeline to model.</span>
                  </div>
                </div>
              </div>

              <button
                onClick={() => setFormSubmitted(false)}
                className="text-xs font-mono text-gray-500 hover:text-sui transition-colors uppercase tracking-widest"
              >
                &lt; Return to Onboarding form
              </button>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}

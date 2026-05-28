import { useState } from "react";
import { Sparkles, Compass, Video, Cpu, Send, ClipboardCheck, ArrowRight, Laptop, Film, User, Calendar, Clock, Check, LogIn, Award } from "lucide-react";

export default function ProcessBehindScenes() {
  const steps = [
    {
      id: 1,
      title: "Content Strategy",
      description: "We map out topics that actually convert.",
      detail: "Using custom demographic backlogs, we extract high-converting attention triggers specifically calibrated to attract qualified buyer personas in SaaS, VC, or Agency sectors.",
      icon: <Compass className="w-5 h-5 text-[#FF5100]" />,
      glowColor: "rgba(255, 81, 0, 0.4)",
      badge: "PHASE 01"
    },
    {
      id: 2,
      title: "Production Day",
      description: "I direct and film you (You just show up and talk).",
      detail: "No script-memorization stress. We guide you step-by-step through our interactive digital teleprompters during a simple, structured 3-hour monthly remote session.",
      icon: <Video className="w-5 h-5 text-[#3898EC]" />,
      glowColor: "rgba(56, 152, 236, 0.4)",
      badge: "PHASE 02"
    },
    {
      id: 3,
      title: "Automated Post-Production",
      description: "Cutting-edge editing, dynamic hooks, and AI optimization.",
      detail: "Our custom video synthesis workflows handle color grading, kinetic title overlays, audio compression, and SFX cues to maximize retention in the first 3 critical seconds.",
      icon: <Cpu className="w-5 h-5 text-[#FF5100]" />,
      glowColor: "rgba(255, 81, 0, 0.4)",
      badge: "PHASE 03"
    },
    {
      id: 4,
      title: "Ready to Post",
      description: "You receive a full month of viral assets.",
      detail: "A pristine batch of 30 hand-crafted, high-ticket converting assets is delivered straight to your queue, optimized for LinkedIn, Shorts, Reels, and TikTok.",
      icon: <ClipboardCheck className="w-5 h-5 text-[#3898EC]" />,
      glowColor: "rgba(56, 152, 236, 0.4)",
      badge: "PHASE 04"
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
            DIRECTOR METHODOLOGY
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-display text-white mt-4 tracking-tight">
            The Process & <span className="text-gradient-blue font-display">Behind the Scenes.</span>
          </h2>
        </div>

        {/* Binary split layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Block: The Process timeline */}
          <div className="lg:col-span-6 space-y-6">
            <div className="mb-8">
              <h3 className="text-2xl font-bold font-display text-white">
                How we dominate your niche.
              </h3>
              <p className="text-gray-400 font-sans text-sm mt-2 leading-relaxed">
                Our collaborative framework removes 99% of production friction. No filming gear to master, no writing fatigue. We systemize everything.
              </p>
            </div>

            {/* Vertical timeline stack */}
            <div className="relative border-l border-space-border/60 pl-6 ml-4 space-y-8">
              {steps.map((step) => (
                <div key={step.id} className="relative group">
                  {/* Glowing Timeline Node */}
                  <div 
                    className="absolute -left-[45px] top-1.5 w-9 h-9 rounded-full bg-space-gray border border-space-border flex items-center justify-center transition-all duration-300 group-hover:border-sui/60"
                    style={{ boxShadow: `0 0 15px ${step.glowColor}` }}
                  >
                    {step.icon}
                  </div>

                  {/* Step Description Card */}
                  <div className="bg-space-card/40 border border-space-border/40 hover:border-space-border p-5 rounded-2xl transition-all">
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

                    <p className="text-xs text-gray-500 font-sans leading-relaxed">
                      {step.detail}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Block: Moody/Elegant Behind the Scenes photos */}
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono uppercase tracking-wider text-gray-500 block mb-2">// BTS WORKSPACE_LOG //</span>
            
            {/* Masonry image gallery collage with fine high-contrast filters */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              
              {/* Photo 1: Directing / Filmmaking setup */}
              <div className="relative rounded-3xl overflow-hidden aspect-[4/5] bg-space-gray border border-space-border group shadow-lg">
                <img
                  src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=600&auto=format&fit=crop&q=80"
                  alt="Marcel directing client"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover grayscale brightness-75 contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                  <span className="text-[9px] font-mono tracking-widest text-sui uppercase font-bold block mb-1">SET LOG // 10</span>
                  <p className="text-xs font-display font-medium text-white">Directing Remote Creator Sessions</p>
                </div>
              </div>

              {/* Stacked Right: Editor Suite & Workflow Action */}
              <div className="flex flex-col gap-6">
                
                {/* Photo 2: Working at editing laptop */}
                <div className="relative rounded-3xl overflow-hidden aspect-square bg-space-gray border border-space-border group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=600&auto=format&fit=crop&q=80"
                    alt="Work at workstation laptop"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                    <span className="text-[9px] font-mono tracking-widest text-[#FF5100] uppercase font-bold block mb-1">SUITE // 02</span>
                    <p className="text-xs font-display font-medium text-white">Compiling Post-Production Scripts</p>
                  </div>
                </div>

                {/* Photo 3: Cinema set monitor details */}
                <div className="relative rounded-3xl overflow-hidden flex-1 min-h-[160px] bg-space-gray border border-space-border group shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600&auto=format&fit=crop&q=80"
                    alt="Aesthetic cinema monitor camera setup"
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover grayscale brightness-50 contrast-125 transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0 group-hover:brightness-75"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-transparent pointer-events-none" />
                  <div className="absolute bottom-4 left-4 right-4 text-left z-10">
                    <span className="text-[9px] font-mono tracking-widest text-sui uppercase font-bold block mb-1">MONITOR // 03</span>
                    <p className="text-xs font-display font-medium text-white">Cinematic LUT Grading & Frame Isolation</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

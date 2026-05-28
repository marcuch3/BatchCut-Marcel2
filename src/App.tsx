/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import Marquee from "./components/Marquee";
import ChooseGrowthEngine from "./components/ChooseGrowthEngine";
import InteractiveStudio from "./components/InteractiveStudio";
import ViralPortfolio from "./components/ViralPortfolio";
import CaseStudies from "./components/CaseStudies";
import ROIWidget from "./components/ROIWidget";
import ProcessBehindScenes from "./components/ProcessBehindScenes";
import ContactForm from "./components/ContactForm";
import CTAAndFooter from "./components/CTAAndFooter";

export default function App() {
  // Navigation trigger handles
  const scrollToContact = () => {
    const contactSection = document.getElementById("contact-audit");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToWorks = () => {
    const worksSection = document.getElementById("works");
    if (worksSection) {
      worksSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="bg-space-black min-h-screen text-gray-200 selection:bg-sui selection:text-black">
      {/* Background visual atmosphere element */}
      <div className="fixed inset-0 bg-transparent -z-10 bg-[radial-gradient(ellipse_at_top,rgba(56,152,236,0.03),transparent_60%)] pointer-events-none" />

      {/* Sleek fixed header navbar */}
      <Header onContactClick={scrollToContact} />

      {/* Center Hero Section with personal branding & KPIs */}
      <Hero onBookCallClick={scrollToContact} onSeeWorkClick={scrollToWorks} />

      {/* Continuous Trusted Marquee infinite scrolling carousel */}
      <Marquee />

      {/* Structured Automation Workflow Steps / Choose Your Growth Engine */}
      <ChooseGrowthEngine onSelectOption={scrollToContact} />

      {/* Hands-on Interactive Post-Production Suite */}
      <InteractiveStudio />

      {/* Vertical Video grid and circular user testimonials */}
      <ViralPortfolio />

      {/* High-Fidelity Organic Case Studies with custom vector charts */}
      <CaseStudies />

      {/* High-Ticket Content conversion scale calculator */}
      <ROIWidget />

      {/* Detailed step-by-step methodology timeline & action bts photos */}
      <ProcessBehindScenes />

      {/* Dedicated Lead Onboarding manual audit form */}
      <ContactForm />

      {/* Premium CTA & Interactive Calendly booking block with minimalist footer */}
      <CTAAndFooter />
    </div>
  );
}

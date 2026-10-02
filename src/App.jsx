import React from "react";
import Navbar from "./components/Navbar";
import HomeSection from "./components/HomeSection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillSection from "./components/SkillSection";
import ContactSection from "./components/ContactSection";

export default function App() {
  return (
    <div className="relative min-h-screen bg-[#0b0f19] text-slate-100 selection:bg-sky-500 selection:text-white">
      {/* Background Ambient Glow Elements */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-sky-500/10 rounded-full blur-[128px]"></div>
        <div className="absolute top-1/3 -right-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-[140px]"></div>
        <div className="absolute bottom-10 left-1/4 w-96 h-96 bg-teal-500/10 rounded-full blur-[130px]"></div>
      </div>

      {/* Floating Navbar */}
      <Navbar />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <HomeSection />
        <AboutSection />
        <ExperienceSection />
        <SkillSection />
        <ContactSection />
      </main>

      {/* Footer */}
      <footer className="relative z-10 border-t border-slate-800/80 py-6 text-center text-xs text-slate-500">
        <p>© {new Date().getFullYear()} Yogesh Maske. Crafted with React, Vite & Tailwind CSS.</p>
      </footer>
    </div>
  );
}
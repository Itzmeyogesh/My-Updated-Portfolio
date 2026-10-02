import React, { useState, useEffect } from "react";
// Only standard icons imported from lucide-react:
import { Download, Mail, ChevronDown, CheckCircle2 } from "lucide-react";

// Clean brand SVG helpers (since lucide-react does not bundle brand logos)
const LinkedinIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const GithubIcon = ({ size = 22, className = "" }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
    />
  </svg>
);

const roles = [
  "Senior QA Automation Engineer",
  "SDET & Framework Architect",
  "UI, API & Database Testing Specialist",
  "CI/CD Pipeline & Quality Enforcer",
];

export default function HomeSection() {
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const fullText = roles[currentRoleIndex];
    const typingSpeed = isDeleting ? 40 : 80;

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length + 1));
        if (currentText === fullText) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setCurrentText(fullText.substring(0, currentText.length - 1));
        if (currentText === "") {
          setIsDeleting(false);
          setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [currentText, isDeleting, currentRoleIndex]);

  return (
    <section id="home" className="min-h-screen relative flex items-center justify-center pt-24 pb-16 px-4">
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center">
        {/* Profile Avatar with Glowing Ring */}
        <div className="relative mb-6 group">
          <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-sky-400 via-indigo-500 to-purple-600 opacity-75 blur-md group-hover:opacity-100 transition duration-500 animate-pulse-slow"></div>
          <img
            src="/Profile.jpeg"
            alt="Yogesh Maske"
            className="relative w-36 h-36 sm:w-44 sm:h-44 rounded-full object-cover border-4 border-slate-900 shadow-2xl"
          />
          <div className="absolute bottom-1 right-2 bg-emerald-500 text-slate-950 p-1.5 rounded-full border-2 border-slate-900" title="Available for opportunities">
            <CheckCircle2 size={16} className="text-white" />
          </div>
        </div>

        {/* Name & Headline */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight mb-3">
          Hi, I'm <span className="bg-gradient-to-r from-sky-400 via-teal-300 to-indigo-400 bg-clip-text text-transparent">YOGESH MASKE</span>
        </h1>

        {/* Typewriter Role */}
        <div className="h-10 mb-4 flex items-center justify-center">
          <span className="text-xl sm:text-2xl font-mono font-semibold text-sky-400">
            {currentText}
            <span className="border-r-2 border-sky-400 animate-ping ml-1"></span>
          </span>
        </div>

        {/* Location & Contact Meta */}
        <p className="text-sm font-medium text-slate-400 mb-5">
          📍 Wakad, Pune 411057 • 📞 +91 9518568806 • ✉️ maskeyogeish@gmail.com
        </p>

        {/* Career Objective */}
        <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed mb-8">
          Results-driven QA Automation Engineer with <strong className="text-white">5+ years of experience</strong> scaling enterprise Hybrid Automation Frameworks across UI, API, and DB layers (Playwright, Selenium, Rest Assured). Dedicated to delivering zero-defect software through robust CI/CD testing pipelines and high-velocity automation.
        </p>

        {/* Social Links with Verified URLs */}
        <div className="flex items-center gap-4 mb-8">
          <a
            href="https://www.linkedin.com/in/yogeshmaske95"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-sky-500/20 text-slate-300 hover:text-sky-400 transition-all border border-slate-700/60"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon size={22} />
          </a>
          <a
            href="https://github.com/Itzmeym"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 rounded-full glass hover:bg-sky-500/20 text-slate-300 hover:text-sky-400 transition-all border border-slate-700/60"
            aria-label="GitHub Profile"
          >
            <GithubIcon size={22} />
          </a>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white font-semibold shadow-lg shadow-sky-500/25 transition-transform hover:-translate-y-0.5"
          >
            <Mail size={18} /> Contact Me
          </a>
          <a
            href="#contact"
            className="flex items-center gap-2 px-6 py-3 rounded-xl glass hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold transition-transform hover:-translate-y-0.5"
          >
            <Download size={18} /> Download CV
          </a>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#about"
        className="absolute bottom-6 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-all animate-bounce"
        aria-label="Scroll to About section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
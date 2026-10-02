import React from "react";
import { GraduationCap, Award, Target, Code2, Database, ShieldCheck, ChevronDown } from "lucide-react";

export default function AboutSection() {
  const highlights = [
    { icon: Target, title: "Automation First", desc: "Crafting zero-flakiness test suites across UI, API, and DB layers." },
    { icon: ShieldCheck, title: "Zero Defect Focus", desc: "SonarQube quality gates, DRY/SOLID standards, and regression coverage." },
    { icon: Code2, title: "Modern Tooling", desc: "Expertise in Playwright, Selenium, Rest Assured, Jenkins, and AI tools." },
    { icon: Database, title: "Data Integrity", desc: "Extensive backend SQL verification, ETL mapping, and migration checks." },
  ];

  return (
    <section id="about" className="min-h-screen relative py-20 px-4 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Award size={14} /> Profile Overview
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">About Me</h2>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto">Blending QA Automation expertise with business analysis to ensure enterprise system reliability.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Detailed Narrative */}
          <div className="lg:col-span-7 space-y-5">
            <div className="glass-card p-6 sm:p-8 rounded-2xl">
              <h3 className="text-xl font-bold text-sky-400 mb-3">Professional Biography</h3>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base mb-4">
                I am a QA Automation Engineer based in Wakad, Pune, with <strong>over 5 years of hands-on experience</strong> in test automation architecture, agile delivery, and business requirements modeling.
              </p>
              <p className="text-slate-300 leading-relaxed text-sm sm:text-base">
                Having previously served as a Business Analyst, I bring a unique dual perspective: bridging user acceptance criteria and edge-case behavior with robust, maintainable code architectures (Page Object Model, Driver Factory, BDD Cucumber).
              </p>
            </div>

            {/* Highlights Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {highlights.map((h, i) => {
                const Icon = h.icon;
                return (
                  <div key={i} className="glass-card p-4 rounded-xl flex gap-3.5 items-start">
                    <div className="p-2.5 rounded-lg bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Icon size={20} />
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-white">{h.title}</h4>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">{h.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Education & Key Details */}
          <div className="lg:col-span-5 space-y-6">
            <div className="glass-card p-6 sm:p-7 rounded-2xl relative overflow-hidden">
              <div className="flex items-center gap-3 mb-4">
                <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 border border-indigo-500/20">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Education</h3>
                  <span className="text-xs text-slate-400">Formal Academic Background</span>
                </div>
              </div>

              <div className="border-l-2 border-indigo-500/30 pl-4 ml-2">
                <h4 className="font-semibold text-base text-slate-100">Bachelor of Computer Applications (BCA)</h4>
                <p className="text-sm text-sky-400 font-medium">Tulsi College of CS & IT</p>
                <p className="text-xs text-slate-400 mt-1">Graduated: May 2013</p>
                <p className="text-xs text-slate-300 mt-2 leading-relaxed">
                  Solid foundation in Computer Science, Database Management Systems (DBMS), Software Engineering principles, and Object-Oriented Programming.
                </p>
              </div>
            </div>

            {/* Key Value Proposition Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-4 rounded-xl text-center">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">5+ Yrs</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Industry Experience</p>
              </div>
              <div className="glass-card p-4 rounded-xl text-center">
                <p className="text-3xl font-extrabold bg-gradient-to-r from-sky-400 to-indigo-400 bg-clip-text text-transparent">~40%</p>
                <p className="text-xs text-slate-400 mt-1 font-medium">Execution Time Saved</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#experience"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-all animate-bounce"
        aria-label="Scroll to Experience section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
import React from "react";
import { Briefcase, Calendar, MapPin, ChevronDown } from "lucide-react";

const experiences = [
  {
    role: "Automation Test Engineer",
    company: "Emtech Solutions Private Limited",
    period: "Feb 2021 – Present",
    location: "Pune, India",
    points: [
      "Architected scalable Hybrid Automation Frameworks (UI + API + DB) using Selenium WebDriver, Playwright, Rest Assured, and Cucumber BDD following SOLID principles and POM.",
      "Engineered a thread-safe Driver Factory via ThreadLocal WebDriver, enabling parallel scenario execution with TestNG and Maven Surefire to reduce execution time by ~40%.",
      "Automated RESTful APIs using Rest Assured with POJO modeling, Jackson for JSON serialization/deserialization, and Hamcrest/JsonPath assertions.",
      "Developed Playwright (JavaScript) suites utilizing custom fixtures, storage states, and network interception for dynamic dropdowns, alerts, multi-window flows, and iframes.",
      "Configured automated CI/CD continuous testing pipelines in Jenkins with Git triggers and Maven profiles for scheduled nightly regression runs and smoke checks.",
      "Integrated Extent Reports and Log4j with custom TestNG listeners to capture automated failure screenshots, logs, and stack traces.",
      "Executed backend verification and database migration checks using complex SQL queries, joins, and stored procedures across Oracle and MySQL.",
      "Leveraged AI-assisted development tools including Playwright Codegen, Cursor AI, and GitHub Copilot to optimize code delivery.",
      "Enforced SonarQube quality gates to eliminate code smells and static-code debt, collaborating in Agile/Scrum ceremonies in JIRA."
    ]
  },
  {
    role: "Business Analyst",
    company: "Atidiv Ltd",
    period: "Sep 2019 – Jan 2021",
    location: "Pune, India",
    points: [
      "Gathered, analyzed, and translated complex functional business requirements into detailed user stories, Process Flow Diagrams, Use Cases, and RTM.",
      "Spearheaded User Acceptance Testing (UAT) coordination, translating client business rules into test scenarios to ensure system compliance.",
      "Executed SQL queries and data mapping sheets to perform data validation, reconcile discrepancies, and ensure reporting pipeline accuracy.",
      "Collaborated closely with cross-functional development, QA, and client stakeholders to resolve technical bottlenecks and clarify edge-case requirements.",
      "Facilitated Agile ceremonies including backlog refinement, sprint planning, and retrospectives to streamline delivery."
    ]
  }
];

export default function ExperienceSection() {
  return (
    <section id="experience" className="min-h-screen relative py-20 px-4 flex flex-col justify-center">
      <div className="max-w-5xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Briefcase size={14} /> Career Milestones
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">Work Experience</h2>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto">Track record of building automation frameworks and quality assurance pipelines.</p>
        </div>

        {/* Timeline Container */}
        <div className="relative border-l-2 border-sky-500/30 ml-4 sm:ml-8 pl-6 sm:pl-10 space-y-12">
          {experiences.map((exp, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Dot */}
              <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-5 h-5 rounded-full bg-slate-900 border-4 border-sky-400 group-hover:border-indigo-400 group-hover:scale-125 transition-all duration-300 shadow-md shadow-sky-500/50"></div>

              {/* Card */}
              <div className="glass-card p-6 sm:p-8 rounded-2xl">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
                  <div>
                    <h3 className="text-xl sm:text-2xl font-bold text-white group-hover:text-sky-300 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-base font-semibold text-indigo-400">{exp.company}</p>
                  </div>
                  <div className="flex flex-wrap items-center gap-3 text-xs sm:text-sm text-slate-400 font-medium">
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      <Calendar size={14} className="text-sky-400" /> {exp.period}
                    </span>
                    <span className="flex items-center gap-1 bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                      <MapPin size={14} className="text-sky-400" /> {exp.location}
                    </span>
                  </div>
                </div>

                {/* Points */}
                <ul className="mt-4 space-y-2.5">
                  {exp.points.map((pt, i) => (
                    <li key={i} className="text-slate-300 text-sm sm:text-base leading-relaxed flex items-start gap-2.5">
                      <span className="text-sky-400 font-bold mt-1 text-xs">▸</span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#skills"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-all animate-bounce"
        aria-label="Scroll to Skills section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
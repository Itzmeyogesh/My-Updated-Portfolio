import React from "react";
import { Award, Terminal, Code, Cpu, GitBranch, BarChart3, Wrench, ChevronDown } from "lucide-react";

const skillCategories = [
  {
    category: "Automation & Testing",
    icon: Terminal,
    skills: ["Selenium WebDriver", "Playwright", "Rest Assured", "Karate", "SoapUI", "Postman", "UI & API Testing"],
  },
  {
    category: "Languages & Databases",
    icon: Code,
    skills: ["Java", "JavaScript", "SQL", "Oracle DB", "MySQL", "Hamcrest / JsonPath"],
  },
  {
    category: "Frameworks & Architecture",
    icon: Cpu,
    skills: ["TestNG", "Cucumber BDD", "Hybrid Framework", "Data-Driven Framework", "Page Object Model (POM)", "SOLID & DRY Principles"],
  },
  {
    category: "CI/CD & DevOps",
    icon: GitBranch,
    skills: ["Jenkins", "Maven", "Git", "GitHub", "GitHub Actions", "Parallel Execution"],
  },
  {
    category: "Reporting & Quality Gates",
    icon: BarChart3,
    skills: ["SonarQube", "Extent Reports", "Allure Reports", "Log4j", "Static Code Debt Resolution"],
  },
  {
    category: "Methodologies & AI Tools",
    icon: Wrench,
    skills: ["Agile (Scrum)", "JIRA", "RTM", "Playwright Codegen", "Cursor AI", "GitHub Copilot"],
  },
];

export default function SkillsSection() {
  return (
    <section id="skills" className="min-h-screen relative py-20 px-4 flex flex-col justify-center">
      <div className="max-w-6xl mx-auto w-full">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider text-sky-400 bg-sky-500/10 border border-sky-500/20 mb-3">
            <Award size={14} /> Technical Arsenal
          </div>
          <h2 className="text-3xl sm:text-5xl font-bold">Skills & Technologies</h2>
          <p className="text-slate-400 mt-2 max-w-xl mx-auto">Enterprise tools and architectural methodologies mastered across 5+ years.</p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((cat, idx) => {
            const Icon = cat.icon;
            return (
              <div key={idx} className="glass-card p-6 rounded-2xl flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2.5 rounded-xl bg-sky-500/10 text-sky-400 border border-sky-500/20">
                      <Icon size={22} />
                    </div>
                    <h3 className="font-bold text-lg text-white">{cat.category}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2 mt-4">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-3 py-1 rounded-lg text-xs sm:text-sm font-medium bg-slate-800/80 text-slate-200 border border-slate-700 hover:border-sky-400/50 hover:text-sky-300 transition-colors cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Down Arrow Indicator */}
      <a
        href="#contact"
        className="absolute bottom-4 left-1/2 -translate-x-1/2 text-slate-400 hover:text-sky-400 transition-all animate-bounce"
        aria-label="Scroll to Contact section"
      >
        <ChevronDown size={28} />
      </a>
    </section>
  );
}
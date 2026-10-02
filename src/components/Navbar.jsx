import React, { useState, useEffect } from "react";
import { Home, User, Briefcase, Award, Mail } from "lucide-react";

const navItems = [
  { id: "home", label: "Home", icon: Home },
  { id: "about", label: "About", icon: User },
  { id: "experience", label: "Experience", icon: Briefcase },
  { id: "skills", label: "Skills", icon: Award },
  { id: "contact", label: "Contact", icon: Mail },
];

export default function Navbar() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      navItems.forEach((item) => {
        const el = document.getElementById(item.id);
        if (el) {
          const top = el.offsetTop - 120;
          const height = el.offsetHeight;
          if (scrollY >= top && scrollY < top + height) {
            setActive(item.id);
          }
        }
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed top-5 left-1/2 -translate-x-1/2 z-50">
      <nav className="glass px-4 py-2.5 rounded-full flex items-center gap-2 sm:gap-3 shadow-2xl border border-sky-500/20 shadow-sky-500/10">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = active === item.id;
          return (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`group relative flex items-center justify-center p-2.5 rounded-full transition-all duration-300 ${
                isActive
                  ? "bg-gradient-to-r from-sky-500 to-indigo-600 text-white shadow-lg shadow-sky-500/30 scale-110"
                  : "text-slate-400 hover:text-white hover:bg-slate-800/60"
              }`}
              title={item.label}
            >
              <Icon size={19} />
              <span className="absolute -bottom-8 px-2 py-0.5 rounded text-[11px] font-medium bg-slate-900 border border-slate-700 text-sky-300 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
                {item.label}
              </span>
            </a>
          );
        })}
      </nav>
    </header>
  );
}
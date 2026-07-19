import { useState, useEffect } from "react";
import { BarChart3 } from "lucide-react";
import { Button } from "./ui/button";
import type { ProfileMode } from "../types/profile";
import Dataanalyst from '../assets/dataanalyst.jpg'
interface HeroSectionProps {
  profile: ProfileMode;
  onChangeProfile: (profile: ProfileMode) => void;
}

const HeroSection = ({ profile, onChangeProfile }: HeroSectionProps) => {
  const [currentCode, setCurrentCode] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

const profileContent = {
  developer: {
    label: "</> Developer",
    title: "I'm Mina, a Full Stack Developer",
    description:
      "She creates modern web applications using technologies like React, Node.js, and Laravel.",
    techs: ["React", "Node.js", "Laravel", "JavaScript", "PHP"],
    secondaryText: 'git commit -m "Ready to code"',
    terminalLabel: "terminal",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop",
    imageAlt: "Mina - Full Stack Developer",
    status: "OPPORTUNITIES",
    snippets: [
      "const developer = 'Mina';",
      "function createAwesome() {",
      "  return 'Amazing Apps';",
      "}"
    ],
    floating: ["{ }", "HTML", "CSS"]
  },

  "data-analyst": {
    label: "Data Analyst",
    title: "I'm Mina, a Data Analyst",
    description:
      "I turn raw data into actionable insights through SQL, dashboards, reporting, and business-focused storytelling.",
    techs: ["SQL", "Python", "Power BI", "Excel", "Tableau"],
    secondaryText: "dashboard refresh --live",
    terminalLabel: "analytics",
    image: Dataanalyst,
    imageAlt: "Mina - Data Analyst",
    status: "INSIGHTS",
    snippets: [
      "SELECT * FROM insights WHERE status = 'ready';",
      "dashboard.update('monthly_kpis');",
      "print('Business impact ready')"
    ],
    floating: ["{ KPI }", "SQL", "Dashboards"]
  }
};

  const activeContent = profileContent[profile];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentCode((prev) => (prev + 1) % activeContent.snippets.length);
        setIsTyping(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, [activeContent.snippets.length]);

  return (
    <section id="home" className={`min-h-screen flex items-center pt-20 relative overflow-hidden ${profile === "data-analyst" ? "bg-[radial-gradient(circle_at_top_left,_#ddebff_0%,_#f8fbff_45%,_#edf5ff_100%)]" : "bg-white"}`}>
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 left-10 text-[#b3bbd1] font-mono text-sm">
          {profile === "data-analyst" ? "SELECT insights" : `<div className="developer">`}
        </div>
        <div className="absolute top-40 right-20 text-[#b3bbd1] font-mono text-sm">
          {profile === "data-analyst" ? "Power BI report" : `function() { return 'creative'; }`}
        </div>
        <div className="absolute bottom-40 left-20 text-[#b3bbd1] font-mono text-sm">
          {profile === "data-analyst" ? "GROUP BY region" : `</div>`}
        </div>
      </div>

      <div className="absolute top-24 right-20 h-56 w-56 rounded-full blur-3xl opacity-40 bg-[#7fb8e8]" />
      <div className="absolute bottom-12 left-0 h-40 w-40 rounded-full blur-3xl opacity-20 bg-[#214a72]" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className={`p-4 rounded-2xl font-mono text-sm shadow-2xl border ${profile === "data-analyst" ? "bg-slate-900 text-emerald-300 border-[#7fb8e8]/40" : "bg-[#1a1a1a] text-green-400 border-[#b3bbd1]/20"}`}>
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 ml-2">{activeContent.terminalLabel}</span>
              </div>
              <div>
                <span className="text-blue-400">$</span> whoami
              </div>
              <div className={`transition-all duration-300 ${isTyping ? 'opacity-50' : 'opacity-100'}`}>
                {activeContent.snippets[currentCode]}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <button
                  type="button"
                  onClick={() => onChangeProfile("developer")}
                  className={`px-3 py-1 rounded-full text-sm font-semibold transition-all ${profile === "developer" ? "bg-[#b3bbd1] text-white shadow" : "bg-white text-[#b3bbd1] border border-[#b3bbd1]"}`}
                >
                  &lt;/&gt; Developer
                </button>
                <button
                  type="button"
                  onClick={() => onChangeProfile("data-analyst")}
                  className={`flex items-center gap-2 px-3 py-1 rounded-full text-sm font-semibold transition-all ${profile === "data-analyst" ? "bg-[#4f8fc5] text-white shadow" : "bg-white text-[#4f8fc5] border border-[#4f8fc5]"}`}
                >
                  <BarChart3 size={14} />
                  Data Analyst
                </button>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-[#b3bbd1]">Online</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#343434]">
                I'm <span className="text-[#b3bbd1] relative">
                  Mina
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#b3bbd1] rounded-full animate-ping opacity-20" />
                </span>, a <span className="text-[#343434]">{profile === "developer" ? "Full Stack Developer" : "Data Analyst"}</span>
              </h1>

              <p className="text-[#b3bbd1] text-lg">
                {activeContent.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              {activeContent.techs.map((tech) => (
                <div
                  key={tech}
                  className={`border px-3 py-1 rounded-full text-sm transition-colors ${profile === "data-analyst" ? "bg-[#e9f5ff] border-[#7fb8e8] text-[#23475f] hover:bg-[#d8ecff]" : "bg-[#b3bbd1]/10 border-[#b3bbd1]/30 text-[#343434] hover:bg-[#b3bbd1]/20"}`}
                >
                  {tech}
                </div>
              ))}
            </div>

            <Button className={`relative overflow-hidden group ${profile === "data-analyst" ? "bg-[#4f8fc5] hover:bg-[#3f79b1] text-white" : "bg-[#b3bbd1] hover:bg-[#b3bbd1]/90 text-[#343434]"}`}>
              <span className="relative z-10">Contact me!!</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <div className={`absolute -top-6 left-6 text-white px-2 py-1 rounded text-xs font-mono rotate-12 shadow-lg ${profile === "data-analyst" ? "bg-[#4f8fc5]" : "bg-[#b3bbd1]"}`}>{activeContent.floating[0]}</div>
              <div className={`absolute top-12 -left-4 text-white px-2 py-1 rounded text-xs font-mono -rotate-12 shadow-lg ${profile === "data-analyst" ? "bg-[#1f4d6c]" : "bg-[#343434]"}`}>{activeContent.floating[1]}</div>
              <div className={`absolute top-32 -right-6 text-white px-2 py-1 rounded text-xs font-mono rotate-45 shadow-lg ${profile === "data-analyst" ? "bg-[#89c0f0]" : "bg-[#b3bbd1]"}`}>{activeContent.floating[2]}</div>

              <img
                src={activeContent.image}
                alt={activeContent.imageAlt}
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />

              <div className={`absolute bottom-4 left-4 border px-4 py-2 rounded shadow-lg ${profile === "data-analyst" ? "bg-white border-[#89c0f0]" : "bg-white border-[#b3bbd1]"}`}>
                <div className="flex items-center gap-2">
                  <div className={`w-2 h-2 rounded-full animate-pulse ${profile === "data-analyst" ? "bg-[#4f8fc5]" : "bg-[#b3bbd1]"}`} />
                  <span className="text-sm text-[#343434]">Available for new</span>
                  <span className="text-sm font-bold text-[#343434]">{activeContent.status}</span>
                </div>
              </div>

              <div className={`absolute -bottom-4 right-4 text-white px-3 py-1 rounded text-xs font-mono shadow-lg ${profile === "data-analyst" ? "bg-[#1f4d6c]" : "bg-[#343434]"}`}>
                <span className="text-green-400">✓</span> {activeContent.secondaryText}
              </div>
            </div>

            <div className={`absolute -top-4 -right-4 w-16 h-16 border-2 rotate-45 animate-spin-slow ${profile === "data-analyst" ? "border-[#4f8fc5]" : "border-[#b3bbd1]"}`} />
            <div className="absolute top-1/2 -right-8 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className={`w-1 h-1 rounded-full animate-pulse ${profile === "data-analyst" ? "bg-[#4f8fc5]" : "bg-[#b3bbd1]"}`}
                      style={{ animationDelay: `${(i + j) * 0.1}s` }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className={`absolute -bottom-8 right-1/4 w-24 h-24 border-2 ${profile === "data-analyst" ? "border-[#4f8fc5]" : "border-[#b3bbd1]"}`} />

            <div className={`absolute top-1/4 -left-8 font-mono text-xs opacity-30 transform -rotate-90 ${profile === "data-analyst" ? "text-[#4f8fc5]" : "text-[#b3bbd1]"}`}>
              {profile === "data-analyst" ? "MINA ANALYTICS" : "01001101 01101001 01101110 01100001"}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

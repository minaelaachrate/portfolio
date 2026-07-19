import { Button } from "./ui/button";
import profileImage from '../assets/photo-1531297484001-80022131f5a1.png';
import type { ProfileMode } from "../types/profile";

interface AboutSectionProps {
  profile: ProfileMode;
}

const AboutSection = ({ profile }: AboutSectionProps) => {
  const content = profile === "developer"
    ? {
        title: "Hello, I'm Mina!",
        paragraphs: [
          "I'm a full stack developer based in Agadir. I create modern and responsive web applications using technologies like React, Laravel, MongoDB, or MySQL.",
          "I've worked on several projects including an orphanage management system, a rental platform, and a job search website for students."
        ],
        accent: "text-primary",
        button: "Contact me -&gt;",
        imageAlt: "Mina - About me"
      }
    : {
        title: "Hello, I'm Mina!",
        paragraphs: [
          "I'm a data analyst focused on turning business questions into clear and valuable insights through analytics, SQL, dashboards, and KPI reporting.",
          "I enjoy building readable dashboards, identifying trends, and helping teams make faster, smarter decisions with visual reporting."
        ],
        accent: "text-[#4f8fc5]",
        button: "Let's discuss data -&gt;",
        imageAlt: "Mina - Data Analyst"
      };

  return (
    <section id="about-me" className={`py-20 ${profile === "data-analyst" ? "bg-[linear-gradient(135deg,_#eff7ff_0%,_#f9fbff_45%,_#e5f1ff_100%)]" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">
            <span className={content.accent}>#</span>about-me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className={`space-y-6 rounded-3xl p-8 shadow-xl ${profile === "data-analyst" ? "bg-white/90 border border-[#c9def7]" : ""}`}>
            <p className="text-portfolio-muted leading-relaxed">
              {content.title}
            </p>
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph} className="text-portfolio-muted leading-relaxed">
                {paragraph}
              </p>
            ))}

            <Button
              variant="outline"
              className={`mt-6 ${profile === "data-analyst" ? "border-[#4f8fc5] text-[#4f8fc5] hover:bg-[#eaf4ff]" : ""}`}
            >
              {content.button}
            </Button>
          </div>

          <div className="relative">
            <div className={`relative z-10 max-w-sm mx-auto rounded-3xl p-3 ${profile === "data-analyst" ? "bg-[linear-gradient(135deg,_#e6f2ff_0%,_#fefefe_100%)] shadow-2xl border border-[#c7def9]" : ""}`}>
              <img 
                src={profileImage}
                alt={content.imageAlt}
                className="w-full h-auto object-cover rounded-2xl"
              />
            </div>

            <div className={`absolute -top-4 -left-4 w-16 h-16 border ${profile === "data-analyst" ? "border-[#4f8fc5]" : "border-portfolio-border"}`}></div>
            <div className="absolute top-1/4 -right-8 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className={`w-1 h-1 rounded-full ${profile === "data-analyst" ? "bg-[#4f8fc5]" : "bg-portfolio-muted"}`}></div>
                  ))}
                </div>
              ))}
            </div>
            <div className={`absolute -bottom-8 right-1/4 w-24 h-24 border rotate-45 ${profile === "data-analyst" ? "border-[#4f8fc5]" : "border-portfolio-border"}`}></div>
            <div className="absolute bottom-1/4 -left-8 space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className={`w-1 h-1 rounded-full ${profile === "data-analyst" ? "bg-[#4f8fc5]" : "bg-portfolio-muted"}`}></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
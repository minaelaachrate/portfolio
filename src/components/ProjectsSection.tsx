import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";
import type { ProfileMode } from "../types/profile";

interface ProjectsSectionProps {
  profile: ProfileMode;
}

const ProjectsSection = ({ profile }: ProjectsSectionProps) => {
  const developerProjects = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      technologies: ["HTML", "SCSS", "Python", "Flask"],
      category: "complete-apps"
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      technologies: ["React", "Express", "Discord.js", "Node.js"],
      category: "complete-apps"
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      technologies: ["CSS", "Express", "Node.js"],
      category: "complete-apps"
    },
    {
      id: 4,
      title: "Bot boilerplate",
      description: "Start creating scalable discord.js bot with typescript in seconds",
      technologies: ["Discord.js", "TS", "JS"],
      category: "small-projects"
    },
    {
      id: 5,
      title: "My blog",
      description: "Front-end of my future blog website written in vue",
      technologies: ["VUE", "CSS", "JS"],
      category: "small-projects"
    },
    {
      id: 6,
      title: "Chess pro",
      description: "Figma landing page about service for viewing chess tournaments",
      technologies: ["Figma"],
      category: "small-projects"
    }
  ];

  const dataProjects = [
    {
      id: 1,
      title: "Revenue Dashboard",
      description: "Monthly sales and growth tracker for business monitoring.",
      technologies: ["Power BI", "SQL", "Excel"],
      category: "dashboards"
    },
    {
      id: 2,
      title: "Customer Churn Report",
      description: "Predictive analysis of retention opportunities and risk segments.",
      technologies: ["Python", "Pandas", "Tableau"],
      category: "dashboards"
    },
    {
      id: 3,
      title: "Operational Insights",
      description: "Production metrics dashboard with anomalies and performance alerts.",
      technologies: ["SQL", "Power BI", "DAX"],
      category: "dashboards"
    },
    {
      id: 4,
      title: "Campaign Performance",
      description: "A/B testing summary and KPI visualization for marketing teams.",
      technologies: ["Excel", "Power BI", "Looker"],
      category: "mini-projects"
    },
    {
      id: 5,
      title: "Lead Scoring Model",
      description: "Ranking the most promising leads using a practical scorecard.",
      technologies: ["Python", "SQL", "Jupyter"],
      category: "mini-projects"
    },
    {
      id: 6,
      title: "Executive Summary",
      description: "Automated weekly reporting for portfolio-level decision making.",
      technologies: ["Power BI", "Excel"],
      category: "mini-projects"
    }
  ];

  const projects = profile === "developer" ? developerProjects : dataProjects;
  const firstGroupLabel = profile === "developer" ? "complete-apps" : "dashboards";
  const secondGroupLabel = profile === "developer" ? "small-projects" : "mini-projects";
  const firstGroupTitle = profile === "developer" ? "complete-apps" : "dashboards";
  const secondGroupTitle = profile === "developer" ? "small-projects" : "mini-projects";

  return (
    <section id="works" className={`py-20 ${profile === "data-analyst" ? "bg-[linear-gradient(135deg,_#f8fbff_0%,_#eff7ff_55%,_#e8f1ff_100%)]" : "bg-white"}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">
            <span className={profile === "data-analyst" ? "text-[#4f8fc5]" : "text-primary"}>#</span>{profile === "developer" ? "projects" : "case-studies"}
          </h2>
          <Button variant="link" className={profile === "data-analyst" ? "text-[#4f8fc5] hover:text-[#2e648f]" : "text-foreground hover:text-primary"}>
            View all ~~&gt;
          </Button>
        </div>

        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8">
            <span className="text-primary">#</span>{firstGroupTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((project) => project.category === firstGroupLabel).map((project) => (
              <div key={project.id} className={`border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 ${profile === "data-analyst" ? "border-[#9ccbf1] bg-white/90 backdrop-blur-sm" : "border-portfolio-border bg-card"}`}>
                <div className={`aspect-video p-4 flex items-center justify-center ${profile === "data-analyst" ? "bg-[linear-gradient(135deg,_#0f2740_0%,_#1f4d6c_50%,_#4f8fc5_100%)]" : "bg-muted"}`}>
                  <div className={profile === "data-analyst" ? "text-white font-semibold" : "text-portfolio-muted"}>Project Preview</div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-portfolio-muted text-sm">{project.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className={profile === "data-analyst" ? "bg-[#4f8fc5] hover:bg-[#3f79b1] text-white" : "bg-primary hover:bg-primary/90 text-black"}>
                      Live <ExternalLink size={14} className="ml-1" />
                    </Button>
                    <Button size="sm" variant="outline" className={profile === "data-analyst" ? "border-[#4f8fc5] text-[#2e648f] hover:bg-[#eaf4ff]" : ""}>
                      Cached &gt;=
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold mb-8">
            <span className="text-primary">#</span>{secondGroupTitle}
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter((project) => project.category === secondGroupLabel).map((project) => (
              <div key={project.id} className={`border rounded-2xl overflow-hidden shadow-lg transition-all duration-300 hover:-translate-y-1 ${profile === "data-analyst" ? "border-[#9ccbf1] bg-white/90 backdrop-blur-sm" : "border-portfolio-border bg-card"}`}>
                <div className={`aspect-video p-4 flex items-center justify-center ${profile === "data-analyst" ? "bg-[linear-gradient(135deg,_#17304d_0%,_#27557e_100%)]" : "bg-muted"}`}>
                  <div className={profile === "data-analyst" ? "text-white font-semibold" : "text-portfolio-muted"}>Project Preview</div>
                </div>
                <div className="p-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div>
                    <h4 className="font-bold text-foreground mb-2">{project.title}</h4>
                    <p className="text-portfolio-muted text-sm">{project.description}</p>
                  </div>
                  <div className="flex gap-4">
                    <Button size="sm" className={profile === "data-analyst" ? "bg-[#4f8fc5] hover:bg-[#3f79b1] text-white" : "bg-primary hover:bg-primary/90 text-black"}>
                      Live <ExternalLink size={14} className="ml-1" />
                    </Button>
                    <Button size="sm" variant="outline" className={profile === "data-analyst" ? "border-[#4f8fc5] text-[#2e648f] hover:bg-[#eaf4ff]" : ""}>
                      GitHub <ExternalLink size={14} className="ml-1" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
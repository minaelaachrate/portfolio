import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: "ChertNodes",
      description: "Minecraft servers hosting",
      technologies: ["HTML", "SCSS", "Python", "Flask"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "complete-apps"
    },
    {
      id: 2,
      title: "ProtectX",
      description: "Discord anti-crash bot",
      technologies: ["React", "Express", "Discord.js", "Node.js"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "complete-apps"
    },
    {
      id: 3,
      title: "Kahoot Answers Viewer",
      description: "Get answers to your kahoot quiz",
      technologies: ["CSS", "Express", "Node.js"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "complete-apps"
    },
    {
      id: 4,
      title: "Bot boilerplate",
      description: "Start creating scalable discord.js bot with typescript in seconds",
      technologies: ["Discord.js", "TS", "JS"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "small-projects"
    },
    {
      id: 5,
      title: "My blog",
      description: "Front-end of my future blog website written in vue",
      technologies: ["VUE", "CSS", "JS"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "small-projects"
    },
    {
      id: 6,
      title: "Chess pro",
      description: "Figma landing page about service for viewing chess tournaments",
      technologies: ["Figma"],
      image: "/lovable-uploads/ed1dd2ea-0bbe-43cd-99ff-fd0a85fde6a7.png",
      liveUrl: "#",
      cacheUrl: "#",
      category: "small-projects"
    }
  ];

  return (
    <section id="works" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section header */}
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-2xl font-bold">
            <span className="text-primary">#</span>projects
          </h2>
          <Button variant="link" className="text-foreground hover:text-primary">
            View all ~~&gt;
          </Button>
        </div>

        {/* Complete apps */}
        <div className="mb-16">
          <h3 className="text-xl font-bold mb-8">
            <span className="text-primary">#</span>complete-apps
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === "complete-apps").map((project) => (
              <div key={project.id} className="border border-portfolio-border bg-card rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted p-4 flex items-center justify-center">
                  <div className="text-portfolio-muted">Project Preview</div>
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
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-black">
                      Live <ExternalLink size={14} className="ml-1" />
                    </Button>
                    <Button size="sm" variant="outline">
                      Cached &gt;=
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Small projects */}
        <div>
          <h3 className="text-xl font-bold mb-8">
            <span className="text-primary">#</span>small-projects
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.filter(p => p.category === "small-projects").map((project) => (
              <div key={project.id} className="border border-portfolio-border bg-card rounded-lg overflow-hidden">
                <div className="aspect-video bg-muted p-4 flex items-center justify-center">
                  <div className="text-portfolio-muted">Project Preview</div>
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
                    <Button size="sm" className="bg-primary hover:bg-primary/90 text-black">
                      Live <ExternalLink size={14} className="ml-1" />
                    </Button>
                    {project.id !== 6 && (
                      <Button size="sm" variant="outline">
                        GitHub <ExternalLink size={14} className="ml-1" />
                      </Button>
                    )}
                    {project.id === 6 && (
                      <Button size="sm" variant="outline">
                        Figma <ExternalLink size={14} className="ml-1" />
                      </Button>
                    )}
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
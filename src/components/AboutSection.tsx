import { Button } from "./ui/button";
import profileImage from '../assets/photo-1531297484001-80022131f5a1.png'; // Replace with your image

const AboutSection = () => {
  const funFacts = [
    "I love winter more than summer",
    "I'm passionate about tech and useful projects",
    "I participated in a hackathon in Agadir",
    "I prefer quiet and natural places",
    "I'm originally from Essaouira",
    "I'm still in training",
    "I love fixing what's broken"
  ];

  return (
    <section id="about-me" className="py-20">
      <div className="container mx-auto px-6">
        {/* Section title */}
        <div className="flex items-center mb-12">
          <h2 className="text-2xl font-bold">
            <span className="text-primary">#</span>about-me
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left side */}
          <div className="space-y-6">
            <p className="text-portfolio-muted leading-relaxed">
              Hello, I'm Mina!
            </p>
            <p className="text-portfolio-muted leading-relaxed">
              I'm a full stack developer based in Agadir. 
              I create modern and responsive web applications using technologies like React, Laravel, MongoDB, or MySQL.
            </p>
            <p className="text-portfolio-muted leading-relaxed">
              I've worked on several projects including an orphanage management system, a rental platform, and a job search website for students.
            </p>

            <Button variant="outline" className="mt-6">
              Contact me -&gt;
            </Button>
          </div>

          {/* Right side - image */}
          <div className="relative">
            <div className="relative z-10 max-w-sm mx-auto">
              <img 
                src={profileImage}
                alt="Mina - About me"
                className="w-full h-auto object-cover rounded-lg"
              />
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-16 h-16 border border-portfolio-border"></div>
            <div className="absolute top-1/4 -right-8 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div key={j} className="w-1 h-1 bg-portfolio-muted rounded-full"></div>
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-8 right-1/4 w-24 h-24 border border-portfolio-border rotate-45"></div>
            <div className="absolute bottom-1/4 -left-8 space-y-1">
              {Array.from({ length: 3 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 4 }).map((_, j) => (
                    <div key={j} className="w-1 h-1 bg-portfolio-muted rounded-full"></div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fun facts */}
        {/* <div className="mt-20">
          <h3 className="text-xl font-bold mb-8">
            <span className="text-primary">#</span>my-fun-facts
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {funFacts.map((fact, index) => (
              <div key={index} className="border border-portfolio-border p-4 bg-card">
                <p className="text-portfolio-muted">{fact}</p>
              </div>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default AboutSection;
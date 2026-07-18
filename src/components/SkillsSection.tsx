import React from 'react';

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Languages",
      skills: ["TypeScript", "JavaScript", "Python", "PHP"],
      color: "from-blue-500 to-blue-600"
    },
    {
      title: "Databases", 
      skills: ["MySQL", "MongoDB", "Mongoose"],
      color: "from-green-500 to-green-600"
    },
    {
      title: "Frameworks",
      skills: ["React", "Laravel", "Express.js", "Bootstrap", "Tailwind", "Node.js", "Redux Toolkit"],
      color: "from-purple-500 to-purple-600"
    },
    {
      title: "Tools",
      skills: ["VSCode", "Figma", "GitHub", "GitLab", "Postman", "phpMyAdmin", "Vite"],
      color: "from-orange-500 to-orange-600"
    },
    {
      title: "Other",
      skills: ["HTML", "CSS"],
      color: "from-pink-500 to-pink-600"
    },
    {
      title: "Deployment",
      skills: ["Git", "Vercel", "Netlify"],
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 blur-xl"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 rounded-full bg-gradient-to-r from-pink-400 to-orange-400 blur-xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-5xl font-bold mb-4">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">#</span>
            <span className="text-gray-800">skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12 items-start">
          {/* Left side - Enhanced decorative pattern */}
          <div className="relative lg:col-span-1">
            <div className="grid grid-cols-4 gap-3 w-full max-w-xs mx-auto">
              {/* Animated grid pattern */}
              {Array.from({ length: 16 }).map((_, index) => (
                <div 
                  key={index}
                  className={`aspect-square border-2 rounded-lg transition-all duration-500 hover:scale-110 ${
                    [0, 2, 3, 4, 5, 7, 9, 10, 12, 14, 15].includes(index) 
                      ? 'border-[#b3bbd1] bg-gradient-to-br from-white to-slate-50 shadow-sm hover:shadow-md' 
                      : 'border-transparent'
                  }`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                ></div>
              ))}
            </div>

            {/* Enhanced dots pattern */}
            <div className="absolute top-16 -right-8 space-y-2 opacity-60">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="flex gap-2">
                  {Array.from({ length: 6 }).map((_, j) => (
                    <div 
                      key={j} 
                      className="w-2 h-2 bg-[#b3bbd1] rounded-full animate-pulse"
                      style={{
                        animationDelay: `${(i + j) * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              ))}
            </div>

            {/* Additional decorative elements */}
            <div className="absolute -bottom-8 -left-4 w-32 h-20 border-2 border-[#b3bbd1] rounded-lg bg-gradient-to-br from-white to-slate-50 opacity-70"></div>
          </div>

          {/* Right side - Enhanced skills grid */}
          <div className="lg:col-span-2 grid md:grid-cols-2 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={category.title} 
                className="group relative bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 overflow-hidden"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {/* Category header with gradient */}
                <div className="flex items-center mb-4">
                  <div className={`w-1 h-8 bg-gradient-to-b ${category.color} rounded-full mr-3`}></div>
                  <h3 className="font-bold text-gray-800 text-lg">{category.title}</h3>
                </div>

                {/* Skills list */}
                <div className="space-y-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill} 
                      className="flex items-center group-hover:translate-x-1 transition-transform duration-200"
                      style={{
                        animationDelay: `${skillIndex * 0.05}s`
                      }}
                    >
                      <div className="w-2 h-2 bg-[#b3bbd1] rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700 font-medium text-sm hover:text-gray-900 transition-colors">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Hover effect overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-xl`}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom decorative line */}
        <div className="mt-20 flex justify-center">
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-[#b3bbd1] to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
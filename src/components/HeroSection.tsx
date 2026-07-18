import { useState, useEffect } from "react";
import { Button } from "./ui/button";

const HeroSection = () => {
  const [currentCode, setCurrentCode] = useState(0);
  const [isTyping, setIsTyping] = useState(false);

  const codeSnippets = [
    "const developer = 'Mina';",
    "function createAwesome() {",
    "  return 'Amazing Apps';",
    "}"
  ];

  // Code animation logic
  useEffect(() => {
    const interval = setInterval(() => {
      setIsTyping(true);
      setTimeout(() => {
        setCurrentCode((prev) => (prev + 1) % codeSnippets.length);
        setIsTyping(false);
      }, 500);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="min-h-screen flex items-center pt-20 bg-white relative overflow-hidden">
      
      {/* Background floating code */}
      <div className="absolute inset-0 opacity-25 pointer-events-none">
        <div className="absolute top-20 left-10 text-[#b3bbd1] font-mono text-sm">
          {`<div className="developer">`}
        </div>
        <div className="absolute top-40 right-20 text-[#b3bbd1] font-mono text-sm">
          {`function() { return 'creative'; }`}
        </div>
        <div className="absolute bottom-40 left-20 text-[#b3bbd1] font-mono text-sm">
          {`</div>`}
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* -------------------- LEFT CONTENT -------------------- */}
          <div className="space-y-8">
            
            {/* Terminal-like Animated Code Block */}
            <div className="bg-[#1a1a1a] text-green-400 p-4 rounded-lg font-mono text-sm border border-[#b3bbd1]/20 shadow-lg">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 rounded-full" />
                <div className="w-3 h-3 bg-yellow-500 rounded-full" />
                <div className="w-3 h-3 bg-green-500 rounded-full" />
                <span className="text-gray-400 ml-2">terminal</span>
              </div>
              <div>
                <span className="text-blue-400">$</span> whoami
              </div>
              <div className={`transition-all duration-300 ${isTyping ? 'opacity-50' : 'opacity-100'}`}>
                {codeSnippets[currentCode]}
                <span className="animate-pulse">|</span>
              </div>
            </div>

            {/* Title, Name, Role */}
            <div className="space-y-4">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-[#b3bbd1] text-white px-3 py-1 rounded-full text-sm font-semibold">
                  &lt;/&gt; Developer
                </div>
                <div className="flex items-center gap-1">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm text-[#b3bbd1]">Online</span>
                </div>
              </div>

              <h1 className="text-4xl lg:text-5xl font-bold text-[#343434]">
                I'm <span className="text-[#b3bbd1] relative">
                  Mina
                  <div className="absolute -top-2 -right-2 w-4 h-4 bg-[#b3bbd1] rounded-full animate-ping opacity-20" />
                </span>, a <span className="text-[#343434]">Full Stack Developer</span>
              </h1>

              <p className="text-[#b3bbd1] text-lg">
                She creates modern web applications using technologies like React, Node.js, and Laravel
              </p>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2">
              {['React', 'Node.js', 'Laravel', 'JavaScript', 'PHP'].map((tech) => (
                <div
                  key={tech}
                  className="bg-[#b3bbd1]/10 border border-[#b3bbd1]/30 px-3 py-1 rounded-full text-sm text-[#343434] hover:bg-[#b3bbd1]/20 transition-colors"
                >
                  {tech}
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <Button className="bg-[#b3bbd1] hover:bg-[#b3bbd1]/90 text-[#343434] relative overflow-hidden group">
              <span className="relative z-10">Contact me!!</span>
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Button>
          </div>

          {/* -------------------- RIGHT CONTENT -------------------- */}
          <div className="relative">
            <div className="relative z-10">
              {/* Floating tags */}
              <div className="absolute -top-6 left-6 bg-[#b3bbd1] text-white px-2 py-1 rounded text-xs font-mono rotate-12 shadow-lg">{`{ }`}</div>
              <div className="absolute top-12 -left-4 bg-[#343434] text-white px-2 py-1 rounded text-xs font-mono -rotate-12 shadow-lg">HTML</div>
              <div className="absolute top-32 -right-6 bg-[#b3bbd1] text-white px-2 py-1 rounded text-xs font-mono rotate-45 shadow-lg">CSS</div>

              {/* Profile image */}
              <img
                src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=400&fit=crop"
                alt="Mina - Full Stack Developer"
                className="w-80 h-80 object-cover rounded-lg shadow-lg"
              />

              {/* Status */}
              <div className="absolute bottom-4 left-4 bg-white border border-[#b3bbd1] px-4 py-2 rounded shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-[#b3bbd1] rounded-full animate-pulse" />
                  <span className="text-sm text-[#343434]">Available for new</span>
                  <span className="text-sm font-bold text-[#343434]">OPPORTUNITIES</span>
                </div>
              </div>

              {/* Git badge */}
              <div className="absolute -bottom-4 right-4 bg-[#343434] text-white px-3 py-1 rounded text-xs font-mono shadow-lg">
                <span className="text-green-400">✓</span> git commit -m "Ready to code"
              </div>
            </div>

            {/* Extra decoration */}
            <div className="absolute -top-4 -right-4 w-16 h-16 border-2 border-[#b3bbd1] rotate-45 animate-spin-slow" />
            <div className="absolute top-1/2 -right-8 space-y-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="flex gap-1">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <div
                      key={j}
                      className="w-1 h-1 bg-[#b3bbd1] rounded-full animate-pulse"
                      style={{ animationDelay: `${(i + j) * 0.1}s` }}
                    />
                  ))}
                </div>
              ))}
            </div>
            <div className="absolute -bottom-8 right-1/4 w-24 h-24 border-2 border-[#b3bbd1]" />

            {/* Binary decoration */}
            <div className="absolute top-1/4 -left-8 text-[#b3bbd1] font-mono text-xs opacity-30 transform -rotate-90">
              01001101 01101001 01101110 01100001
            </div>
          </div>
        </div>

        {/* -------------------- QUOTE SECTION -------------------- */}
        {/* <div className="mt-24 max-w-2xl">
          <blockquote className="border border-[#b3bbd1] p-6 relative bg-white shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-2xl text-[#b3bbd1] absolute -top-2 -left-2 bg-white font-mono">"</div>
            <p className="text-[#343434] text-lg italic">
              With great power comes great electricity bill
            </p>
            <div className="text-2xl text-[#b3bbd1] absolute -bottom-2 -right-2 bg-white font-mono">"</div>
            <cite className="block text-right mt-4 text-[#b3bbd1]">- Dr. Who</cite>
            <div className="absolute top-2 right-4 text-[#b3bbd1] font-mono text-xs opacity-50">
              // TODO: Pay electricity bill
            </div>
          </blockquote>
        </div> */}
      </div>

      {/* Custom animation style */}
   
    </section>
  );
};

export default HeroSection;

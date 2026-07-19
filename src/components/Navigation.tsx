import { useState, useEffect } from 'react';
import { Github, Linkedin, MessageCircle } from 'lucide-react';

const Navigation = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: '#home' },
    { id: 'works', label: '#works' },
    { id: 'about-me', label: '#about-me' },
    { id: 'contacts', label: '#contacts' },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Left sidebar with social icons */}
      <div className="fixed left-6 top-[27.5%] transform -translate-y-1/2 z-50 flex flex-col items-center gap-4">
        <div className="w-px h-32 bg-[#b3bbd1]"></div>
        <a
          href="https://github.com/minaelaachrate"
          className="text-[#b3bbd1] hover:text-[#4a5c78] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={20} />
        </a>
        <a
          href="www.linkedin.com/in/mina-el-aachrate-0a59b5293"
          className="text-[#b3bbd1] hover:text-[#4a5c78] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={20} />
        </a>
        <a
          href="https://discord.com"
          className="text-[#b3bbd1] hover:text-[#4a5c78] transition-colors"
          target="_blank"
          rel="noopener noreferrer"
        >
          <MessageCircle size={20} />
        </a>
      </div>

      {/* Top navigation */}
      <nav className="fixed top-0 left-0 right-0 z-40 bg-white/90 backdrop-blur-sm border-b border-[#d1d5db]">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <div className="text-[#4a5c78] font-bold">
            <span className="text-[#b3bbd1]">@</span>Mina
          </div>
          <div className="flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`text-sm font-medium transition-colors ${
                  activeSection === item.id
                    ? 'text-[#4a5c78]'
                    : 'text-[#b3bbd1] hover:text-[#4a5c78]'
                }`}
              >
                {item.label}
              </button>
            ))}
            {/* <div className="text-sm">
              <select className="bg-transparent text-[#b3bbd1] hover:text-[#4a5c78] focus:outline-none">
                <option value="EN">EN</option>
                <option value="FR">FR</option>
              </select>
            </div> */}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
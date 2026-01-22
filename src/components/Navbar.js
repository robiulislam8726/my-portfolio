import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const navItems = ['About', 'Skills', 'Projects','Work', 'Contact'];
  const [activeSection, setActiveSection] = useState('');
  const [isOpen, setIsOpen] = useState(false); 

  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map(item =>
        document.getElementById(item.toLowerCase())
      );
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].toLowerCase());
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 w-full z-50 px-8 lg:px-16 py-3 backdrop-blur-md bg-purple-950/80 border-b border-purple-400/20 text-white">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="flex flex-col cursor-pointer">
          <div className="text-xl font-bold">
            <span className="bg-gradient-to-r from-purple-400 via-primary to-purple-600 bg-clip-text text-transparent">
              ROBIUL ISLAM
            </span>
          </div>
          <div className="text-[10px] text-gray-400 tracking-wider">
            FULL STACK DEVELOPER
          </div>
        </div>

        {/* Desktop menu */}
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className={`font-medium transition-all duration-300 ${
                activeSection === item.toLowerCase()
                  ? 'text-purple-300'
                  : 'text-gray-300 hover:text-purple-200'
              }`}
            >
              {item}
            </a>
          ))}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2 rounded-full hover:bg-white/10 transition-colors"
          onClick={() => setIsOpen(!isOpen)}   
        >
          <span className="material-icons-outlined text-white text-2xl">
            X
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (   
        <div className="md:hidden mt-4 flex flex-col space-y-4">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}   
              className="text-gray-300 hover:text-purple-200"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;

import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";
import profilePic from "../assets/profile.jpg"; 
import CVMe from "../assets/cv.pdf";
import workDetailsMe from "../assets/work.pdf"

function Home({ theme }) {
 const [showWelcome, setShowWelcome] = useState(false);
  const skills = [
    {
      name: "React",
      level: "Intermediate",
      description: "2+ years of experience building Modern Web application for FrontEnd Using React. Also I Have Strong knowledge of React Route , Hookes",
    },
    {
      name: "JavaScript",
      level: "Intermediate",
      description: "Strong understanding of ES6+ syntax and modern practices.",
      gradient: "from-yellow-400 to-orange-500",
    },
    {
      name: "Node.js",
      level: "Begniers",
      description: "Experience creating APIs and connecting databases.",
      gradient: "from-green-400 to-emerald-500",
    },
    {
      name: "MySQL",
      level: "Intermediate",
      description: "Good knowledge of database schema and SQL joins.",
      gradient: "from-sky-400 to-blue-500",
    },
  ];
  const certifications = [
    "IT Passport",
    "Japanese Language Proficiency Test (JLPT) N2",
  ];
 useEffect(() => {
    // Show welcome message on first visit
    const visited = localStorage.getItem("visited");
    if (!visited) {
      setShowWelcome(true);
      localStorage.setItem("visited", "true"); // mark as visited
    }
  }, []);

    const closeWelcome = () => setShowWelcome(false);
  // Theme classes
  const themeClasses = {
    blue: {
      bg: "bg-bgLight",
      text: "text-primary",
      cardBg: "bg-white",
      cardText: "text-gray-700",
      cardHover: "hover:bg-blue-50",
    },
    dark: {
      bg: "bg-gray-900",
      text: "text-white",
      cardBg: "bg-gray-800",
      cardText: "text-white",
      cardHover: "hover:bg-gray-700",
    },
    light: {
      bg: "bg-white",
      text: "text-primary",
      cardBg: "bg-white",
      cardText: "text-gray-700",
      cardHover: "hover:bg-blue-50",
    },
  };

  const currentTheme = themeClasses[theme] || themeClasses.blue;

  return (
    <div className={`${currentTheme.bg} ${currentTheme.text} transition-colors duration-500`}>
{showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full text-center shadow-lg animate-fadeIn">
            <h2 className="text-2xl font-bold mb-4 text-blue-600">
              Welcome to My Portfolio!
            </h2>
            <p className="mb-4 text-gray-700">
              I am a Full Stack Web Developer. Explore my projects and skills.
            </p>
            <button
              onClick={closeWelcome}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              Close
            </button>
          </div>
        </div>
      )}
      {/* ===== Hero Section ===== */}
      <section className="min-h-screen flex items-center px-4 md:px-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">

          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className={`text-4xl md:text-5xl font-bold ${currentTheme.text}`}>
              Hello! Robiul Here <br />
              I am a Full Stack Web Developer
            </h1>
            <p className={`text-lg md:text-xl ${currentTheme.text}`}>
              I build responsive web applications using HTML, Tailwind CSS, JavaScript, TypeScript, React, Node.js, MySQL, and other modern technologies.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href={CVMe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                履歴書
              </a>
              <a
                href={workDetailsMe}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                職務経歴書
              </a>
            </div>
          </div>

          {/* Right Side: Image */}
          <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-8 md:mb-0">
            <img
              src={profilePic}
              alt="Profile"
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover 
             border-4 border-white shadow-[0_0_60px_15px_rgba(0,150,255,0.7)]"
            />
          </div>

        </div>
      </section>

      {/* ===== Body Section: Skills + Certifications ===== */}
      <section className="max-w-5xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl font-bold text-blue-600 mb-4">About Me</h2>
        <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
          I'm <span className="font-semibold text-blue-600">Robiul Islam</span>, a passionate
          <span className="text-blue-500"> Full Stack Web Developer</span> with over 2 years
          of hands-on experience building dynamic and user-friendly web applications.
          I specialize in React, Node.js, MySQL, and Tailwind CSS. I enjoy turning complex
          problems into elegant, efficient solutions and continuously improving my skills
          through learning and real-world projects.
        </p>
      </section>
    
        {/* Left Side: Skills */}
      <section className="max-w-7xl mx-auto px-4 py-16 md:flex md:space-x-12">
        {/*UPDATED: Skills section re-designed */}
        <div className="md:w-2/3 mb-8 md:mb-0">
          <h2 className={`text-3xl font-bold mb-8 ${currentTheme.text}`}>My Skills</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">
            {skills.map((skill, idx) => (
              // ADDED: motion.div for hover animation + gradient border
              <motion.div
                key={idx}
                whileHover={{ scale: 1.05 }}
                className={`relative bg-gradient-to-r ${skill.gradient} p-[1px] rounded-xl shadow-lg`}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl p-6 hover:bg-opacity-90 transition-all duration-300 group">
                  <h2 className="text-2xl font-semibold text-gray-800 dark:text-white group-hover:text-gray-900">
                    {skill.name}
                  </h2>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{skill.level}</p>
                  {/*  ADDED: Hover overlay with short description */}
                  <div className="absolute inset-0 bg-black bg-opacity-80 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-center text-white px-4">
                    <p className="text-sm">{skill.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        {/* Right Side: Certifications */}
         <div className="md:w-1/3">
          <h2 className={`text-3xl font-bold mb-8 ${currentTheme.text}`}>Certifications</h2>
          <ul className="space-y-2">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className={`${currentTheme.cardBg} ${currentTheme.cardText} ${currentTheme.cardHover} shadow-md rounded px-4 py-2 transition`}
              >
                {cert}
              </li>
            ))}
          </ul>
        </div>

      </section>
    </div>
  );
}

export default Home;

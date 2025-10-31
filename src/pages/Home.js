import React, {useState, useEffect} from "react";
import profilePic from "../assets/profile.jpg"; 

function Home({ theme }) {
 const [showWelcome, setShowWelcome] = useState(false);
  const skills = ["React", "JavaScript", "Node.js", "MySQL"];
  const certifications = [
    "AWS Certified Developer",
    "React Professional Certificate",
    "JavaScript Advanced Certificate",
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
              Hello! <br />
              I am a Full Stack Web Developer
            </h1>
            <p className={`text-lg md:text-xl ${currentTheme.text}`}>
              I build responsive web applications using HTML, Tailwind CSS, JavaScript, TypeScript, React, Node.js, MySQL, and other modern technologies.
            </p>

            <div className="flex justify-center md:justify-start space-x-4 mt-4">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                履歴書
              </a>
              <a
                href="/work-history.pdf"
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
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg border-4 border-white"
            />
          </div>

        </div>
      </section>

      {/* ===== Body Section: Skills + Certifications ===== */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:flex md:space-x-12">

        {/* Left Side: Skills */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className={`text-3xl font-bold mb-4 ${currentTheme.text}`}>My Skills</h2>
          <ul className="space-y-2">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className={`${currentTheme.cardBg} ${currentTheme.cardText} ${currentTheme.cardHover} shadow-md rounded px-4 py-2 transition`}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Certifications */}
        <div className="md:w-1/2">
          <h2 className={`text-3xl font-bold mb-4 ${currentTheme.text}`}>Certifications</h2>
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

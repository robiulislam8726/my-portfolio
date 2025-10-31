// src/pages/Home.jsx
import React from "react";
import profilePic from "../assets/profile.jpg"; // replace with your picture path

function Home() {
  const skills = ["React", "JavaScript", "Node.js", "MySQL"];
  const certifications = [
    "AWS Certified Developer",
    "React Professional Certificate",
    "JavaScript Advanced Certificate",
  ];

  return (
    <div className="bg-gray-50">

      {/* ===== Hero Section ===== */}
      <section className="min-h-screen flex items-center px-4 md:px-12">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center">
          
          {/* Left Side: Text */}
          <div className="w-full md:w-1/2 text-center md:text-left space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-blue-600">
              Welcome! <br />
              I am a Full Stack Web Developer
            </h1>
            <p className="text-gray-700 text-lg md:text-xl">
              I build responsive web applications using React, Tailwind CSS, Node.js, and modern technologies.
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
              className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover shadow-lg"
            />
          </div>

        </div>
      </section>

      {/* ===== Body Section: Skills + Certifications ===== */}
      <section className="max-w-7xl mx-auto px-4 py-12 md:flex md:space-x-12">
        
        {/* Left Side: Skills */}
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">My Skills</h2>
          <ul className="space-y-2">
            {skills.map((skill, idx) => (
              <li
                key={idx}
                className="bg-white shadow-md rounded px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Right Side: Certifications */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-bold text-blue-600 mb-4">Certifications</h2>
          <ul className="space-y-2">
            {certifications.map((cert, idx) => (
              <li
                key={idx}
                className="bg-white shadow-md rounded px-4 py-2 text-gray-700 hover:bg-blue-50 transition"
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

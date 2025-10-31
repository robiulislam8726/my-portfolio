// src/pages/Projects.jsx
import React from "react";

function Projects() {
  const projects = [
    { title: "Portfolio Website", description: "React + Tailwind CSS portfolio site.", link: "#" },
    { title: "E-commerce App", description: "React, Redux, Node.js app.", link: "#" },
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, idx) => (
          <div key={idx} className="bg-white p-6 rounded shadow hover:shadow-lg transition">
            <h3 className="font-semibold text-xl mb-2">{proj.title}</h3>
            <p className="text-gray-600 mb-4">{proj.description}</p>
            <a href={proj.link} className="text-blue-600 hover:underline">View Project</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

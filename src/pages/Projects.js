import { motion } from "framer-motion";
import { Star } from "lucide-react";
import projectsData from "../data/projectData";

function Projects() {
  //  const projects = [
  //   {
  //     title: "Portfolio Website",
  //     description: "A modern React + Tailwind CSS personal portfolio site.",
  //     tech: ["React", "Tailwind CSS", "Framer Motion"],
  //     image: project1,
  //     link: "#",
  //     rating: 5,
  //   },
  //   {
  //     title: "E-commerce App",
  //     description: "A full-stack e-commerce app built with TailwindCSS, MUI, React, and Node.js.",
  //     tech: ["React", "Redux", "Node.js", "MySQL"],
  //     image: "https://source.unsplash.com/600x400/?ecommerce,app",
  //     link: "#",
  //     rating: 4,
  //   },
  //   {
  //     title: "Task Management Tool",
  //     description: "A task management app to track productivity and deadlines.",
  //     tech: ["React", "Firebase", "MUI"],
  //     image: "https://source.unsplash.com/600x400/?task,productivity",
  //     link: "#",
  //     rating: 4,
  //   },
  // ];

  return (
    <section id="projects" className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-blue-600 mb-10"> 💻 Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projectsData.map((proj, idx) => (
          // 🆕 Added motion.div for animation + hover effect
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.1 }}
            whileHover={{
              scale: 1.07,
              transition: { duration: 0.2 },
            }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
          >
            {/* 🆕 Added project image */}
            <img
              src={proj.image}
              alt={proj.title}
              className="w-full h-48 object-cover hover:opacity-90 transition"
            />

            <div className="p-5">
              <h3 className="font-semibold text-2xl mb-2 text-gray-800 dark:text-white">
                {proj.title}
              </h3>

              <p className="text-gray-600 dark:text-gray-300 mb-3">
                {proj.description}
              </p>

              {/*  Added technology tags */}
              <div className="flex flex-wrap gap-2 mb-3">
                {proj.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm bg-blue-100 text-blue-700 px-2 py-1 rounded-md dark:bg-blue-900 dark:text-blue-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/*  Added rating stars */}
              <div className="flex items-center mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={20}
                    className={`${
                      i < proj.rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                  />
                ))}
              </div>

              {/*  Styled “View Project” button */}
              <a
                href={proj.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition"
              >
                Visit Project
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

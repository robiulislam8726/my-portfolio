import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

function Work() {
  return (
    <section id="work" className="max-w-6xl mx-auto px-6 py-16">
      {/* Section Title */}
      <h2 className="text-4xl font-bold mb-12 text-center">
        <span className="bg-gradient-to-r from-purple-400 via-primary to-purple-600 bg-clip-text text-transparent">
          Work Experience
        </span>
      </h2>

      {/* Timeline / Cards */}
      <div className="space-y-8">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02 }}
            transition={{ duration: 0.4 }}
            className="relative bg-purple-950/60 backdrop-blur-md
              border border-purple-400/20 rounded-2xl p-6
              shadow-lg hover:shadow-purple-500/20
              transition-all"
          >
            {/* Company */}
            <h3 className="text-2xl font-semibold text-purple-300 mb-1">
              {exp.company}
            </h3>

            {/* Position & Duration */}
            <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center text-sm text-gray-300 mb-3">
              <span>
                <span className="text-purple-400 font-medium">Role:</span>{" "}
                {exp.position}
              </span>
              <span className="mt-1 sm:mt-0 text-gray-400">
                {exp.duration}
              </span>
            </div>

            {/* Tech Stack */}
            <p className="text-sm text-gray-400 mb-4">
              <span className="text-purple-400 font-medium">Tech:</span>{" "}
              {exp.tech.join(", ")}
            </p>

            {/* Details */}
            <ul className="list-disc list-inside space-y-1 text-gray-200">
              {exp.details.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Work;

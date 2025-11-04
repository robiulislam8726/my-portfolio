import React from "react";
import { motion } from "framer-motion";
import { experienceData } from "../data/experienceData";

function WorkHistory() {

  return (
  <section className="max-w-6xl mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-blue-600 mb-10 text-center">
        💼 Work Experience
      </h2>

      <div className="space-y-6">
        {experienceData.map((exp, idx) => (
          <motion.div
            key={idx}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.15 }}
            className="bg-white dark:bg-gray-800 p-6 rounded-2xl shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition"
          >
            <h3 className="text-2xl font-semibold text-blue-600 mb-2">
              {exp.company}
            </h3>

            <div className="text-black dark:text-gray-300 mb-1">
              <span className="font-bold">役割・役職 :</span> {exp.position}
            </div>

            <div className="text-black dark:text-gray-300 mb-1">
              <span className="font-bold">職務要約 :</span> {exp.duration}
            </div>

            <p className="text-sm text-gray-700 dark:text-gray-400 mb-3">
              <span className="font-semibold">Tech:</span> {exp.tech.join(", ")}
            </p>

            <ul className="list-disc list-inside text-gray-800 dark:text-gray-300 space-y-1">
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

export default WorkHistory;

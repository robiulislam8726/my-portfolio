import React from "react";
import { motion } from "framer-motion";

function Education() {
  const education = [
    {
      name: "Uttara 大学",
      subject: "コンピュータサイエンス学士",
      time: "2017/01 - 2020/12",
      country: "バングラデシュ",
      link: "https://www.uttara.ac.bd/",
    },
    {
      name: "専門学校",
      subject: "Computer Engineering",
      time: "2011/12 - 2015/12",
      country: "バングラデシュ",
      link: "https://chandpur.polytech.gov.bd/",
    },
    {
      name: "ベーシック日本語学校",
      subject: "日本語",
      time: "2021/03 - 2021/12",
      country: "バングラデシュ",
       link: "https://basicjls.com/",
      
    },
    {
      name: "神戸日語日本語学校",
      subject: "日本語",
      time: "2022/04 - 2024/03",
      country: "日本",
      link: "https://kobe-nichigo.jp/",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">
       <h2 className="text-4xl font-bold text-center text-blue-600 mb-10">
        🎓 Education
      </h2>
      {/* <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white shadow-md rounded p-4 md:flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
            <span className="text-gray-500">{edu.year}</span>
          </div>
        ))}
      </div> */}
      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2">
        {education.map((edu, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.08,
              transition: { duration: 0.15 },
             }}
            className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6 hover:shadow-2xl 
                       transition-all duration-300 border border-gray-200 dark:border-gray-700
                       hover:bg-blue-50 dark:hover:bg-gray-700 hover:text-blue-600"
          >
            <h3 className="text-2xl font-semibold text-gray-800 dark:text-white mb-2 group-hover:text-blue-600">
              {edu.name}
            </h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 mb-1">
              <span className="font-semibold">Subject:</span> {edu.subject}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-1">
              <span className="font-semibold">Time:</span> {edu.time}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-3">
              <span className="font-semibold">Country:</span> {edu.country}
            </p>

            <a
              href={edu.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-blue-600 dark:text-blue-400 font-semibold hover:underline hover:text-blue-700 dark:hover:text-blue-300 transition"
            >
              🌐 for MoreInfo.
            </a>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Education;

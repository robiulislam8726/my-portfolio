// src/pages/Education.jsx
import React from "react";

function Education() {
  const education = [
    { school: "University A", degree: "B.Sc in Computer Science", year: "2017-2021" },
    { school: "High School B", degree: "High School Diploma", year: "2015-2017" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Education</h2>
      <div className="space-y-4">
        {education.map((edu, idx) => (
          <div key={idx} className="bg-white shadow-md rounded p-4 md:flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{edu.degree}</h3>
              <p className="text-gray-600">{edu.school}</p>
            </div>
            <span className="text-gray-500">{edu.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Education;

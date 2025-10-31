// src/pages/WorkHistory.jsx
import React from "react";

function WorkHistory() {
  const work = [
    { company: "Company A", role: "Frontend Developer", year: "2022-2023" },
    { company: "Company B", role: "React Developer", year: "2021-2022" },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-bold text-blue-600 mb-6">Work History</h2>
      <div className="space-y-4">
        {work.map((job, idx) => (
          <div key={idx} className="bg-white shadow-md rounded p-4 md:flex justify-between items-center">
            <div>
              <h3 className="font-semibold text-lg">{job.role}</h3>
              <p className="text-gray-600">{job.company}</p>
            </div>
            <span className="text-gray-500">{job.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WorkHistory;

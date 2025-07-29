import React from 'react';
const Experience = () => {
  const experiences = [
    { year: "2023 - Present", role: "Lead Visual Artist", company: "IM Vision Studio" },
    { year: "2021 - 2023", role: "Freelance Cinematographer", company: "Various Projects" },
    { year: "2019 - 2021", role: "Photography Intern", company: "Creative Lens Nepal" },
  ];

  return (
    <section id="experience" className="px-6 py-20 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-10 text-center">Experience</h2>
        <div className="space-y-6">
          {experiences.map((exp, i) => (
            <div key={i} className="p-6 border-l-4 border-blue-500 bg-gray-50 shadow-sm">
              <h3 className="text-xl font-semibold">{exp.role}</h3>
              <p className="text-gray-600">{exp.company}</p>
              <span className="text-sm text-gray-500">{exp.year}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;

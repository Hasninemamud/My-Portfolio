import React from "react";

const skills = [
  "React",
  "JavaScript",
  "HTML",
  "CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "Tailwind CSS",
  "TypeScript",
];

const Skills = () => {
  return (
    <section id="skills" className="py-16 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-4xl font-bold text-center text-teal-800 mb-8">
          My Skills
        </h2>
        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-teal-500 to-teal-600 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-md hover:from-teal-600 hover:to-teal-700 transition duration-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

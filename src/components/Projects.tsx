import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const projects = [
  {
    id: 1,
    title: "E-commerce Website",
    description: "A full-stack e-commerce platform built with React and Node.js",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Node.js", "MongoDB", "Express"],
    github: "https://github.com/yourusername/ecommerce",
    live: "https://your-ecommerce-site.com",
  },
  {
    id: 2,
    title: "Weather App",
    description: "A weather application using React and a third-party API",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "OpenWeather API", "Tailwind CSS"],
    github: "https://github.com/yourusername/weather-app",
    live: "https://your-weather-app.com",
  },
  {
    id: 3,
    title: "Task Manager",
    description: "A task management application with user authentication",
    image: "/placeholder.svg?height=200&width=300",
    technologies: ["React", "Firebase", "Material-UI"],
    github: "https://github.com/yourusername/task-manager",
    live: "https://your-task-manager.com",
  },
];

const ProjectCard = ({ project }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
      whileHover={{ y: -5 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <img
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6">
        <h3 className="text-2xl font-semibold mb-2 text-teal-800">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.description}</p>
        <div className="mb-4">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="inline-block bg-teal-100 text-teal-800 rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2"
            >
              {tech}
            </span>
          ))}
        </div>
        <motion.div
          className="flex justify-between"
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-teal-700 hover:text-teal-500 transition-colors duration-300"
          >
            <FaGithub className="mr-2" />
            GitHub
          </a>
          <a
            href={project.live}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-teal-700 hover:text-teal-500 transition-colors duration-300"
          >
            <FaExternalLinkAlt className="mr-2" />
            Live Demo
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-teal-50 to-white">
      <div className="container mx-auto px-6 lg:px-20">
        <motion.h2
          className="text-4xl md:text-5xl font-bold mb-12 text-center text-teal-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          My Projects
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

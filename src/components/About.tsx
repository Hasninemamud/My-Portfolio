import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="py-20 bg-gradient-to-b from-teal-100 to-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl md:text-5xl font-bold mb-8 text-center text-teal-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About Me
        </motion.h2>
        <div className="max-w-4xl mx-auto">
          <motion.div 
            className="bg-white shadow-xl rounded-lg overflow-hidden md:flex"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="md:w-1/3 bg-gradient-to-b from-teal-500 to-teal-700 p-8 flex items-center justify-center">
              <img 
                src="/placeholder.svg?height=300&width=300" 
                alt="Profile" 
                className="w-48 h-48 rounded-full border-4 border-white shadow-lg"
              />
            </div>
            <div className="md:w-2/3 p-8">
              <h3 className="text-2xl font-semibold text-teal-800 mb-4">Hi, I'm John Doe</h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                I'm a passionate web developer with over 5 years of experience in React, Node.js, and modern web technologies. 
                My journey in web development started with a curiosity for creating interactive user experiences, and it has 
                since grown into a fulfilling career.
              </p>
              <p className="text-gray-700 leading-relaxed mb-6">
                I specialize in building responsive, accessible, and performant web applications that solve real-world problems. 
                My approach combines clean code practices with creative problem-solving to deliver high-quality solutions.
              </p>
              {isVisible && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <a 
                    href="#contact" 
                    className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white py-2 px-6 rounded-full font-semibold shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                  <a 
                    href="#contact" 
                    className="inline-block bg-gradient-to-r from-teal-500 to-teal-600 text-white ml-2 py-2 px-6 rounded-full font-semibold shadow-lg hover:from-teal-600 hover:to-teal-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
                  >
                    Get in Touch
                  </a>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

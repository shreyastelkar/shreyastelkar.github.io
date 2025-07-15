"use client";
import React from "react";
import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Smart Bell System",
      description:
        "A 5-member team project creating a smart doorbell system integrated with Raspberry Pi3 and a Flutter mobile app. Features hands-free sensor detection, push notifications, live streaming, and one-way communication.",
      technologies: ["Raspberry Pi3", "Flutter", "IoT", "Mobile App"],
      image: "/anime.png",
      demo: "https://smartbell-372ba.web.app",
      github: "https://github.com/SHREYASTELKAR/Smart-Bell",
      video:
        "https://www.youtube.com/embed/aaxKlj55qT4?si=r3JcpMqYKfOFly95&amp;controls=0",
    },
    {
      title: "Geometry Dash on FPGA",
      description:
        "Platform game on FPGA BASYS3 board featuring coin-collecting and pitfall-avoiding mechanics with charged jumping. Designed with state machines, sequential logic, and VGA display.",
      technologies: ["FPGA", "VHDL", "VGA", "Game Development"],
      image: "/game.png",
      github:
        "https://github.com/SHREYASTELKAR/Similar-to-Geometry-Dash-Platform-Game",
    },
    {
      title: "Traveling Salesman Problem",
      description:
        "Implementation of the shortest Hamiltonian path algorithm in C using graph and path methods. Demonstrates advanced algorithmic problem-solving skills.",
      technologies: ["C", "Algorithms", "Graph Theory", "Optimization"],
      image: "/dfs.png",
      github: "https://github.com/SHREYASTELKAR/",
    },
  ];

  return (
    <section id="projects" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
          Featured Projects
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          A showcase of my technical expertise across embedded systems, mobile
          development, and algorithmic problem-solving.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass-effect rounded-xl p-6 h-full card-hover">
              {/* Project Image */}
              <div className="relative mb-6 overflow-hidden rounded-lg">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="space-y-4">
                <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>

                <p className="text-slate-300 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 text-xs rounded-full border border-slate-700"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3 pt-4">
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white text-sm font-medium rounded-lg transition-all duration-300 text-center"
                    >
                      Live Demo
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-slate-800 hover:bg-slate-700 text-slate-300 text-sm font-medium rounded-lg transition-all duration-300 text-center border border-slate-700"
                  >
                    View Code
                  </a>
                </div>

                {/* Video Demo if available */}
                {project.video && (
                  <div className="mt-4">
                    <iframe
                      className="w-full h-32 rounded-lg"
                      src={project.video}
                      title={`${project.title} Demo`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Call to Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        viewport={{ once: true }}
        className="text-center mt-16"
      >
        <a
          href="https://github.com/SHREYASTELKAR"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
          </svg>
          View All Projects on GitHub
        </a>
      </motion.div>
    </section>
  );
};

export default Projects;

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Experience = () => {
  const experiences = [
    {
      title: "Programming Instructor",
      company: "Learn2Code",
      duration: "Dec 2023 - Jan 2024",
      description:
        "Part-time role teaching K-12 students JavaScript, Python, and Scratch programming. Developed curriculum and provided hands-on coding instruction to help students build foundational programming skills.",
      image: "/learn2code.jpeg",
      skills: [
        "JavaScript",
        "Python",
        "Scratch",
        "Teaching",
        "Curriculum Development",
      ],
    },
  ];

  return (
    <section id="experience" className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
          Experience
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          My professional journey in software development and education.
        </p>
      </motion.div>

      <div className="max-w-4xl mx-auto">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 mb-8 card-hover"
          >
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
              {/* Company Image */}
              <div className="lg:col-span-1">
                <div className="relative">
                  <Image
                    src={exp.image}
                    alt={exp.company}
                    width={300}
                    height={300}
                    className="rounded-lg object-cover w-full h-64 lg:h-48"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                </div>
              </div>

              {/* Experience Details */}
              <div className="lg:col-span-2 space-y-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-blue-400 font-semibold text-lg mb-1">
                    {exp.company}
                  </p>
                  <p className="text-slate-400 text-sm">{exp.duration}</p>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  {exp.description}
                </p>

                {/* Skills */}
                <div className="flex flex-wrap gap-2">
                  {exp.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
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
        className="text-center mt-12"
      >
        <p className="text-slate-400 text-lg mb-6">
          Looking for new opportunities to grow and contribute to innovative
          projects.
        </p>
        <a
          href="https://www.linkedin.com/in/shreyas-t-852ab9132/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
        >
          <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
          </svg>
          Connect on LinkedIn
        </a>
      </motion.div>
    </section>
  );
};

export default Experience;

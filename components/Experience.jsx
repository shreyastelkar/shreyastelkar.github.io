import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [currentExperience, setCurrentExperience] = useState(null);

  const openModal = (experience, index) => {
    setCurrentExperience(experience);
    setCurrentImageIndex(index);
    setSelectedImage(experience.images[index]);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentExperience(null);
  };

  const nextImage = () => {
    if (!currentExperience) return;
    const nextIndex = (currentImageIndex + 1) % currentExperience.images.length;
    setCurrentImageIndex(nextIndex);
    setSelectedImage(currentExperience.images[nextIndex]);
  };

  const prevImage = () => {
    if (!currentExperience) return;
    const prevIndex =
      currentImageIndex === 0
        ? currentExperience.images.length - 1
        : currentImageIndex - 1;
    setCurrentImageIndex(prevIndex);
    setSelectedImage(currentExperience.images[prevIndex]);
  };

  const experiences = [
    {
      title: "Software Engineer",
      company: "BawsHuman",
      duration: "Dec 2023 - Present",
      description:
        "Designed and developed BawsHuman, an all-in-one fitness app using React Native, Expo, and Django, enabling athletes to track workouts, upload photos, sync Apple Watch data, and engage in social and coaching features. Led to onboarding of 6 elite trainers and 1000+ beta signups. Engineered geolocation-based workout tracking and live route visualization to enhance athlete experience similar to Strava. Integrated Apple HealthKit to unify user workout data and streamline Apple Watch syncing. Built forum and real-time chat features using Python Django (REST API) and responsive TypeScript frontend, increasing user engagement by 35%.",
      image: "/bawshuman_logo.png",
      images: [
        "/bawshuman_13.png",
        "/bawshuman_4.jpeg",
        "/bawshuman_5.png",
        "/bawshuman_9.png",
        "/bawshuman_10.png",
        "/bawshuman_11.png",
        "/bawshuman_12.png",
        "/bawshuman_3.PNG",
      ],
      skills: [
        "React Native",
        "Expo",
        "Django",
        "TypeScript",
        "Apple HealthKit",
        "Geolocation",
        "Python",
        "REST API",
      ],
      links: [
        {
          name: "GitHub",
          url: "https://github.com/BawsHuman",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          ),
        },
        {
          name: "App Store",
          url: "https://apps.apple.com/us/app/bawshuman/id6499568476",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
            </svg>
          ),
        },
        {
          name: "Website",
          url: "https://bawshuman.com/",
          icon: (
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
            </svg>
          ),
        },
      ],
    },
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

      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="glass-effect rounded-xl p-8 mb-8 card-hover"
          >
            <div className="space-y-6">
              {/* Header with Company Image and Title */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
                {/* Company Image */}
                <div className="lg:col-span-1">
                  <div className="relative">
                    <Image
                      src={exp.image}
                      alt={exp.company}
                      width={300}
                      height={300}
                      className="rounded-lg object-contain w-full h-64 lg:h-48 bg-white/10"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-lg"></div>
                  </div>
                </div>

                {/* Experience Title and Details */}
                <div className="lg:col-span-2">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-blue-400 font-semibold text-lg mb-1">
                      {exp.company}
                    </p>
                    <p className="text-slate-400 text-sm">{exp.duration}</p>
                  </div>
                </div>
              </div>

              {/* Full-width Description and Details */}
              <div className="space-y-4">
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

                {/* Links */}
                {exp.links && (
                  <div className="flex items-center space-x-3 pt-2">
                    <span className="text-slate-300 font-medium text-sm">
                      Links:
                    </span>
                    {exp.links.map((link, linkIndex) => (
                      <a
                        key={linkIndex}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 bg-slate-800/50 hover:bg-slate-700/50 text-slate-300 hover:text-white rounded border border-slate-700 hover:border-slate-600 transition-all duration-300"
                        title={link.name}
                      >
                        {link.icon}
                      </a>
                    ))}
                  </div>
                )}
              </div>

              {/* App Screenshots Gallery */}
              {exp.images && (
                <div className="border-t border-slate-700 pt-6">
                  <h4 className="text-lg font-semibold text-white mb-4">
                    App Screenshots
                  </h4>
                  <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {exp.images.map((image, imageIndex) => (
                      <motion.div
                        key={imageIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.4, delay: imageIndex * 0.05 }}
                        viewport={{ once: true }}
                        whileHover={{ scale: 1.05 }}
                        className="relative group cursor-pointer"
                        onClick={() => openModal(exp, imageIndex)}
                      >
                        <div className="relative overflow-hidden rounded-lg bg-slate-800/50 border border-slate-700">
                          <Image
                            src={image}
                            alt={`${exp.company} screenshot ${imageIndex + 1}`}
                            width={200}
                            height={400}
                            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-110"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                              <svg
                                className="w-5 h-5 text-white"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth={2}
                                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
                                />
                              </svg>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              )}
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

      {/* Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl max-h-[90vh] w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>

              {/* Navigation Buttons */}
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white rounded-full p-3 transition-colors duration-200"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>

              {/* Image */}
              <div className="relative">
                <Image
                  src={selectedImage}
                  alt={`${currentExperience?.company} screenshot ${
                    currentImageIndex + 1
                  }`}
                  width={800}
                  height={1600}
                  className="w-full h-auto max-h-[90vh] object-contain rounded-lg"
                />
              </div>

              {/* Image Counter */}
              <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-black/50 text-white px-4 py-2 rounded-full text-sm">
                {currentImageIndex + 1} / {currentExperience?.images?.length}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Experience;

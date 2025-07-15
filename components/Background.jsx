"use client";
import React, { useTransition, useState } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { motion } from "framer-motion";

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Core Competencies
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
              <span className="text-slate-300">
                Data Structures and Algorithms
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <span className="text-slate-300">Computer Networks</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-slate-300">Embedded Systems</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-yellow-500 rounded-full"></div>
              <span className="text-slate-300">Computer Architecture</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              <span className="text-slate-300">Compiler Design</span>
            </div>
            <div className="flex items-center space-x-2">
              <div className="w-2 h-2 bg-indigo-500 rounded-full"></div>
              <span className="text-slate-300">Functional Programming</span>
            </div>
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Programming Languages
          </h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Python",
              "C/C++",
              "Verilog",
              "HTML/CSS/JavaScript",
              "RISCV Assembly",
              "MIPS Assembly",
              "Haskell",
            ].map((lang, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-slate-800/50 text-slate-300 text-sm rounded-full border border-slate-700"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Education",
    id: "education",
    content: (
      <div className="space-y-6">
        <div className="flex items-center space-x-4">
          <div className="relative">
            <Image
              src="/baskin.png"
              width={80}
              height={80}
              className="rounded-lg"
            />
          </div>
          <div>
            <h3 className="text-xl font-semibold text-white">
              University of California Santa Cruz
            </h3>
            <p className="text-blue-400 font-medium">
              Bachelors of Science in Computer Engineering
            </p>
            <p className="text-slate-400 text-sm">
              Concentration in Systems Programming
            </p>
          </div>
        </div>

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Graduation Date:</span>
            <span className="text-white font-medium">December 2023</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-slate-300">Academic Achievement:</span>
            <span className="text-green-400 font-medium">
              Dean's Honors List: Fall 2023
            </span>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-2">
            Key Coursework
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
            <span>• Computer Architecture</span>
            <span>• Data Structures & Algorithms</span>
            <span>• Computer Networks</span>
            <span>• Embedded Systems Design</span>
            <span>• Compiler Design</span>
            <span>• Functional Programming</span>
          </div>
        </div>
      </div>
    ),
  },

  {
    title: "Interests",
    id: "interests",
    content: (
      <div className="space-y-6">
        <div>
          <h3 className="text-xl font-semibold text-white mb-4">
            Professional Interests
          </h3>
          <div className="space-y-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-medium">
                  Automotive Embedded Design
                </h4>
                <p className="text-slate-400 text-sm">
                  Developing embedded systems for automotive applications and
                  IoT devices
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-purple-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-medium">Cybersecurity</h4>
                <p className="text-slate-400 text-sm">
                  Computer Security, Data Center Security, and Network Security
                </p>
              </div>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <div>
                <h4 className="text-white font-medium">
                  Full-Stack Development
                </h4>
                <p className="text-slate-400 text-sm">
                  Building complete web applications and software solutions
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-slate-800/30 rounded-lg p-4">
          <h4 className="text-lg font-semibold text-white mb-2">
            Current Focus
          </h4>
          <p className="text-slate-300 text-sm">
            Actively seeking opportunities to apply my technical skills in
            innovative projects, particularly in embedded systems,
            cybersecurity, and full-stack development.
          </p>
        </div>
      </div>
    ),
  },
];

const Background = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section id="background">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
          Background
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          My educational foundation and technical expertise that drives my
          passion for innovation.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl shadow-2xl">
              <Image
                src="/group.jpg"
                width={500}
                height={400}
                className="rounded-xl object-cover w-full"
                alt="Team collaboration at UCSC"
              />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="space-y-8"
        >
          <div>
            <h3 className="text-3xl font-bold text-white mb-4">
              Professional Overview
            </h3>
            <p className="text-slate-300 text-lg leading-relaxed">
              As a recent Baskin Engineering graduate from UCSC, I've developed
              strong collaborative skills through team environments and built
              meaningful connections with fellow students. My education has
              exposed me to diverse hardware and software technologies, which
              I've further enhanced through independent projects and hands-on
              experience.
            </p>
          </div>

          <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("interests")}
                active={tab === "interests"}
              >
                Interests
              </TabButton>
            </div>

            <motion.div
              key={tab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="glass-effect rounded-xl p-6 min-h-[300px]"
            >
              {TabData.find((t) => t.id === tab).content}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Background;

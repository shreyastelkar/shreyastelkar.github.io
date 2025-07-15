"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import Obfuscate from "react-obfuscate";

const HeroSection = () => {
  return (
    <section className="flex items-center">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="col-span-7 space-y-8"
        >
          {/* Name and Title */}
          <div className="space-y-4">
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold">
              <span className="gradient-text">Shreyas</span>
              <br />
              <span className="text-slate-200">Telkar</span>
            </h1>

            <div className="flex items-center space-x-4">
              <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
              <h2 className="text-2xl sm:text-3xl font-semibold text-slate-300">
                Software Engineer
              </h2>
            </div>
          </div>

          {/* Description */}
          <div className="space-y-6">
            <p className="text-slate-300 text-lg sm:text-xl leading-relaxed max-w-2xl">
              Innovative Computer Engineer and Software Developer crafting
              modern solutions for real-world challenges. From embedded systems
              to mobile applications, I bring diverse technical expertise to
              create impactful software solutions.
            </p>

            <div className="flex flex-wrap gap-4 text-sm text-slate-400">
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">
                Full-Stack Development
              </span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">
                Embedded Systems
              </span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">
                Mobile Development
              </span>
              <span className="px-3 py-1 bg-slate-800/50 rounded-full border border-slate-700">
                Compiler Design
              </span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Obfuscate className="inline-block" email="shretel@gmail.com">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get In Touch
              </motion.button>
            </Obfuscate>

            <Link href="/resume" passHref>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent hover:bg-slate-800 text-slate-300 font-semibold rounded-lg border-2 border-slate-600 hover:border-slate-500 transition-all duration-300"
              >
                View Resume
              </motion.button>
            </Link>
          </div>
        </motion.div>

        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="col-span-5 flex justify-center lg:justify-end"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 p-2 rounded-2xl shadow-2xl">
              <Image
                src="/profile_pic.jpeg"
                alt="Shreyas Telkar - Software Engineer"
                className="rounded-xl object-cover"
                width={450}
                height={450}
                priority
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

import React from "react";
import { motion } from "framer-motion";

const Demos = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
        Interactive Demos
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl mx-auto">
        I enjoy teaching myself and learning new technologies. Here are some
        interactive demos I&apos;ve built using React and modern web
        technologies.
      </p>
    </motion.div>
  );
};

export default Demos;

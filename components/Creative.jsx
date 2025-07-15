import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const Creative = () => {
  const creativeItems = [
    {
      title: "Research & Blog",
      description:
        "Stay updated with my latest research findings and technical insights.",
      image: "/poster.png",
      link: "/",
      type: "internal",
    },
    {
      title: "Creative Expression",
      description:
        "I play guitar in my free time. Check out my musical journey.",
      image: "/band.png",
      link: "https://www.youtube.com/channel/UCtJYknU_IdiXkffu1Ii2K8A",
      type: "external",
    },
  ];

  return (
    <section className="py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <h2 className="text-4xl lg:text-6xl font-bold gradient-text mb-4">
          Beyond Code
        </h2>
        <p className="text-slate-400 text-lg max-w-2xl mx-auto">
          Exploring creativity through research, writing, and music.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {creativeItems.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="group"
          >
            <div className="glass-effect rounded-xl p-6 h-full card-hover">
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-slate-300 leading-relaxed">
                  {item.description}
                </p>

                <div className="relative overflow-hidden rounded-lg">
                  {item.type === "internal" ? (
                    <Link href={item.link} passHref>
                      <div className="relative group">
                        <Image
                          src={item.image}
                          width={500}
                          height={500}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={item.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </Link>
                  ) : (
                    <a
                      href={item.link}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="relative group">
                        <Image
                          src={item.image}
                          width={400}
                          height={400}
                          className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                          alt={item.title}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      </div>
                    </a>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 text-sm">
                    {item.type === "internal"
                      ? "View Updates"
                      : "Watch on YouTube"}
                  </span>
                  <div className="w-8 h-8 bg-slate-800/50 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                    <svg
                      className="w-4 h-4 text-slate-300 group-hover:text-white"
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
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Creative;

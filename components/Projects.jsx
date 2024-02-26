"use client";
import React from 'react'
import Scroll from './Scroll';
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";

const Projects = () => {
  return (
    <section id='projects'>
    <div >
        <div className='text-center mt-12 mb-4 font-semibold text-6xl underline text-white'>
          <motion.div initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}> 
            <TypeAnimation
              sequence={[
                'Projects', 1500, 
                'Project', 50,   
                'Projec', 50,
                'Proje', 50,
                'Proj', 50,
                'Pro', 50,
                'Pr', 50,
                'P', 50,
                '', 500,        
                'P', 50,         
                'Pr', 50,
                'Pro', 50,
                'Proj', 50,
                'Proje', 50,
                'Projec', 50,
                'Project', 50,
                'Projects', 1500,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </motion.div>
        </div>


        <div>
            <Scroll/>
        </div>


    </div>
    </section>
  )
}

export default Projects
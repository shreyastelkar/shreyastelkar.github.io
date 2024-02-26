'use client'
import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section>
        <div className='grid grid-cols-1 lg:grid-cols-12'>
           {/* <motion.div
                initial={{ opacity: 0}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.5 }}
                className='col-span-7 place-self-center text-center sm:text-left'
            >                 */}
                <h1 className= "mb-5 text-4xl sm:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-yellow-600"> 
                    Shreyas <span className='hover:text-[#ca9d7d] hover:bg-[#2e1d12]'>Telkar</span>
                </h1>

                <h2 className='sm:text-3xl lg:text-3xl underline font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500'> 
                    About 
                </h2>

                <p className='text-white text-base sm:text-lg mb-6 lg:text-xl'>
                    An innovative Computer Engineer and Software Developer that provides modern solutions to issues
                    we face in our daily lives. From working on an mobile app integrated embedded systems project to
                    constructing a compiler for C, I posses a variety of skill sets applicable to many tech industries.
                    Feel free to reach out to me!
                </p>
            
                <div>
                    <Link href="/#contact">
                    <button className='px-6 py-3 w-full rounded-full mr-4 bg-[#c73d3d] hover:bg-slate-200 text-white'> 
                        Contact Me! 
                    </button>
                    </Link>
                </div>
            
                <div>
                    <button className='px-6 py-3 w-full rounded-full mr-4 bg-transparent hover:bg-slate-800 text-white border border-white mt-3'> 
                        Resume 
                    </button>
                </div>
            
            {/* </motion.div> */}

            {/* <motion.div initial={{ opacity: 0.2}}
                animate={{ opacity: 1}}
                transition={{ duration: 0.2 }}
                className='col-span-5 place-self-center mt-4 lg:mt-10'> */}
                <div className= 'bg-[#c77438] w-[420px] h-[420px] lg:w-[420px] lg:h-[420px] relative bg-cover'>
                    <Image 
                    src='/profile_pic.jpeg'
                    alt='profile_img'
                    className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2'
                    style={{borderRadius: '15px'}} 
                    width={400}
                    height={400}
                    />
                </div>

            {/* </motion.div> */}
        </div>
    </section>
  )
}

export default HeroSection
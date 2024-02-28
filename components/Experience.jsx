import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <section id='experience'>
        <div className = 'text-center mt-4 mb-8 text-6xl underline text-white'>
            Experience
        </div>

        <ul className='ml-24 list-disc pl-2 bg-black w-1/4 rounded'>
          <li> <h2 className='text-2xl text-[#d84a4afb] mt-2 ml-8 font-bold'> Programming Instructor Part-Time</h2> </li>
          
          <ul className='list-disc pl-2 text-white font-semibold ml-4'>
            <Image
            src="/learn2code.jpeg"
            width={400}
            height={400}
            />
            <br/>
              <li> Taught K-12 Javacript, Python, and Scratch programming</li>
              <li> Dec 2023 - Jan 2024 </li>
          </ul> 
        </ul>
      <br/>
    </section>
  )
}

export default Experience
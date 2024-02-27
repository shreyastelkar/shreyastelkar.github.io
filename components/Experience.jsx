import React from 'react'
import Image from 'next/image'

const Experience = () => {
  return (
    <section id='experience'>
        <div className = 'text-center mt-4 mb-8 font-semibold text-6xl underline text-white'>
            Experience
        </div>

        <ul>
          <li> <h2> Programming Instructor Part-Time</h2> </li>
          <ul>
          <Image
          src="/learn2code.jpeg"
          width={300}
          height={300}
          />
          <br/>
            <li> Taught K-12 Javacript, Python, and Scratch programming</li>
            <li> Dec 2023 - Jan 2024 </li>
          </ul> 
        </ul>
    </section>
  )
}

export default Experience
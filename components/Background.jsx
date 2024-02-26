"use client";
import React, { useTransition, useState} from 'react'
import Image from 'next/image'
import TabButton from './TabButton';

const TabData = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <div> 
        <ul className='list-disc pl-2'>
          <li> Data Structures and Algorithms</li>
          <li> Computer Networks </li>
          <li> Embedded Systems</li>
          <li> Computer Architecture and Assembly</li>
          <li> Compiler Design and Functional Programming</li>
        </ul>

        <br/>
        Languages:<br/>
        
        <p>
          Python, C/C++, Verilog, HTML/CSS/Javascript, RISCV and MIPS Assembly, Haskell 
        </p>

      </div>

      
    )
  },

  {
    title: "Education",
    id: "education",
    content: (
      <div>
        <Image
        src="/baskin.png"
        width={100}
        height={100}
        />
        <br/>
        <p> University of California Santa Cruz<br/>
          Conentration in Systems Programming<br/>
          Bachelors of Science<br/>
          Dec. 2023 <br/>
          <br/>
          Dean&apos;s Honors List: Fall 2023
        </p>
      </div>
    )
  },

  {
    title: "Interests",
    id: "interests",
    content: (
      <ul className='list-disc pl-2'>
        <li>Automotive Embedded Design</li>
        <li>Computer Security, Data Center Security, Network Security</li>
        <li>FullStack Development</li>
      </ul>
    )
  }
]

const Background = () => {

  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => (
    startTransition(() => {
      setTab(id);
    } 

    )
  );
  return (
    <section id='background' className='text-white'>
      <div className='text-3xl font-bold mt-20 lg:mb-0 px-4'>
          Background
      </div>

      <div className='md:grid md:grid-cols-2 gap-6 items-center py-8 px-4 xl:gap-8 sm:py-8'>  
        <Image src="/group.jpg"
        width = {450}
        height = {400}
        />

        <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
          <h2 className='text-2xl font-bold text-white mb-4'> 
            Overview
          </h2>
          <p className='text-base lg:text-lg'>
            As a recent Baskin Engineering graduate from UCSC, I have gained a lot of experience working in team
            environments and creating connections with other students. I have been exposed to a variety of hardware
            software technologies through both my education and working on independent projects. 
          </p>

          <div className='flex flex-row mt-8'>
            <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>Skills</TabButton>
            <TabButton selectTab={() => handleTabChange("education")} active={tab === "education"}>Education</TabButton>
            <TabButton selectTab={() => handleTabChange("interests")} active={tab === "interests"}>Interests</TabButton>

          </div>

          <div className='mt-8'>{TabData.find((t) => t.id === tab).content}</div>
        </div>
      </div>
      
    </section>
  )
}

export default Background
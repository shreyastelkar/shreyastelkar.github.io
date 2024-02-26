import React from 'react'
import Link from 'next/link'
import NavLink from './NavLink'

const navlinks = [
    {
        title: "Background",
        path: "#background",
    },

    {
        title: "Projects",
        path: "#projects",
    },

    {
        title: "Experience",
        path: "#experience",
    }
]


const Navigation = () => {
  return (
    <nav className='fixed top-0 right-0 left-0 z-10 bg-[#0b3814] bg-opacity-70'>
        <div className="flex flex-wrap items-center justify-between mx-auto px-4">
            
            <Link href={"/"} className="text-5xl font-semibold text-[#154018]">
                <div className='bg-[#c77438] rounded-full w-[90px] h-[50px] hover:opacity-70'> 
                S.T. 
                </div>
            </Link>
            
            <div className='menu md:block md:w-auto' id="navbar">
                <ul className='flex p-4 md:p-0 md:flex-row md:space-x-6 mt-0'>
                    {
                    navlinks.map((link, index) => (
                        <li key={index}>
                            <NavLink href={link.path} title={link.title}/>
                        </li>
                    ) )
                    }
                </ul>


            </div>


        </div>
    </nav>
  )
}

export default Navigation
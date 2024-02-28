import React from 'react'
import Image from 'next/image'

const Footer = () => {
  return (
    <footer className='footer border border-t-[#0b0b0b]'>
      <h3 className='text-right mr-8 mt-2 text-[#aea5a5] font-semibold'> Feel Free to Connect, I am looking for opportunities.</h3>
      <a href='https://www.linkedin.com/in/shreyas-t-852ab9132/'>
        <Image
          className='ml-auto mr-12 mb-4 mt-2'
          src="/linkedin.png"
          width={50}
          height={50}
          />
      </a>
    </footer>
  )
}

export default Footer
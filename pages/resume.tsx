import React from 'react'

const Resume = () => {
  return (
    <div>
        <h1 className = 'text-center mt-4 mb-8 font-semibold text-6xl underline text-black'>Resume</h1>
        <p className='text-black mb-2 text-center'> Cannot download at this time </p> 
        <iframe
        src="/resume.pdf"
        width="100%"
        height="1000px"
        style={{ border: 'none' }}
        />
    </div>
  )
}

export default Resume
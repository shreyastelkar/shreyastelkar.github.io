import React from 'react'

const Resume = () => {
  return (
    <div>
        <h1 className = 'text-center mt-12 mb-4 font-semibold text-6xl underline text-white'>Resume</h1>
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
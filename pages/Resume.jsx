import React from 'react'

const Resume = () => {
  return (
    <div id='resume'>
        Resume
        <iframe
        src="/resume.pdf"
        width="100%"
        height="600px"
        style={{ border: 'none' }}
        />
    </div>
  )
}

export default Resume
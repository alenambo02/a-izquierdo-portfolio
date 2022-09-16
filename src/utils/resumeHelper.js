import React from 'react'
import RSM from '../assets/resume.pdf'


const ResumeHelper = () => {
  return (
    <div className="headerBtns">
        <a href={RSM} download className='btn'>Download Resume</a>
        <a href="#contact" className='btn btn-primary'>Contact Me</a>
    </div>
  )
}

export default ResumeHelper
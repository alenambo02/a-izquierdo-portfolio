import React from 'react';
import './about.css';



const About = () => {
    return (
        <section id="about">
            <h5>Get to know</h5>
            <h2>About Me</h2>

            <div className='container about__container'>

                {/* <div className='about_me'>
                    Filler
                </div>

                <div className='about__content'>

                </div> */}
                <p className='about__content'> I'm a Full Stack Web Developer based in Stockton, CA with a background in psychology. I was always interested in pursuing a career in software development but underestimated my abilities. I decided to make a career change and push myself to my full potential and recently completed a full-stack coding bootcamp program at UC Berkeley.  I currently specialize in building full-stack web applications using the MERN stack. I am fluent in a variety of libraries one being JQuery and I am capable of implementing new technologies into websites efficiently and effectively. I've created web applications from scratch, generated dynamic content, and implemented user-authentication schemas by utilizing different databases like MongoDB and MySQL. I am currently striving to be part of a team that implements pair programming to help me learn and empower me through cross-collaborative efforts. I am excited about the potential to grow within a company and in the future use my experience to help other web developers grow in this ever-changing landscape of code. </p>
                <a href='#contact' className='btn btn-primary'>Contact Me</a>
                    
                

            </div>
        </section>
    )
}


export default About
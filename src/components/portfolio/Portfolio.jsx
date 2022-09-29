import React from 'react';
import './portfolio.css';
import CAFE from '../../assets/debugcafe.png'
import COOKBOOK from '../../assets/cookbook.png'
import SCHEDULER from '../../assets/scheduler.png'
import SOCIALMEDIA from '../../assets/backend.png'
import NOTETAKER from '../../assets/notetaker.png'
import TEXTEDITOR from '../../assets/texteditor.png'

const data = [
    {
        id:1,
        image: CAFE,
        title: 'Debug Cafe',
        github: 'https://github.com/alenambo02/debug-cafe',
        demo: 'https://the-debug-cafe.herokuapp.com/'
    },
    {
        id:2,
        image: COOKBOOK,
        title: 'Recipe Generator',
        github: 'https://github.com/alenambo02/dynamic-cookbook',
        demo: 'https://alenambo02.github.io/dynamic-cookbook/'
    },
    {
        id:3,
        image: SCHEDULER,
        title: 'School Scheduler',
        github: 'https://github.com/alenambo02/school-scheduler',
        demo: 'https://alenambo02.github.io/school-scheduler/'
    },
    {
        id:4,
        image: SOCIALMEDIA,
        title: 'Backend for a Social Media Platform',
        github: 'https://github.com/alenambo02/chrip-chirp',
        demo: 'https://github.com/alenambo02/chrip-chirp'
    },
    {
        id:5,
        image: NOTETAKER,
        title: 'School Scheduler',
        github: 'https://github.com/alenambo02/school-scheduler',
        demo: 'https://alenambo02.github.io/school-scheduler/'
    },
    {
        id:6,
        image: TEXTEDITOR,
        title: 'Offline & Browser Text Editor',
        github: 'https://github.com/alenambo02/text-editor',
        demo: 'https://evening-cliffs-79205.herokuapp.com/'
    }
    
]


const Portfolio = () => {
    return (
        <section id="portfolio">
         <h5>My Recent Work</h5>
         <h2>Portfolio</h2> 


         <div className='container portfolio__container'> 
           {
            data.map(({id, image, title, github, demo}) => {
                return (
                    <article className='portfolio__item' key={id}>
                    <div className='portfolio__item-image'>
                        <img src={image} alt='projectPhoto'/>
                    </div> 
                    <h3>{title}</h3>
                    <div className='portfolio__item-cta'>
                        <a href={github} className='btn' target='#'>Github</a>
                        <a href={demo} className='btn btn-primary' target='#'>Live Demo</a>
                    </div>
                    </article>
                )
            })
           }
         </div>  
        </section>
    )
}


export default Portfolio
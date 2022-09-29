import React from 'react'
import './skills.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';

const Skills = () => {
  return (
    <section id="skills">
      <h5>Gain insight on my</h5>
      <h2>Skills</h2>

      <div className='container skills__container'>
        <div className='technical__skills'>
          <h3>Technical Skills</h3>
          <div className='skills__content'>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>JavaScript</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>HTML5</h4>
              </article>

              <article className='skills__details'> 
                  <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                  <h4>React & React Hooks</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Object-oriented Programming</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Express.js</h4>
              </article>

              <article className='skills__details'> 
                  <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                  <h4>Node.js</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Mongoose ODM & Mongo DB</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Sequelize ORM & MySQL</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Third Party API Server Side API REST API </h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Github & Heroku & Developer Tools</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Bootstrap & Bulma</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Fetch & AJAX</h4>
              </article>
          </div>
        </div>

        <div className='soft__skills'>
          <h3>Soft Skills</h3>
          <div className='skills__content'>
              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Problem-solving</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Attention to Detail</h4>
              </article>

              <article className='skills__details'> 
                  <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                  <h4>Interpersonal Communication</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>High Emotional Intelligence</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Time Management</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Patience</h4>
              </article>

              <article className='skills__details'> 
                  <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                  <h4>Dependable</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Critical Thinking</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Bilinigual</h4>
              </article>

              <article className='skills__details'> 
                <FontAwesomeIcon icon={faCheckCircle} className='skills__details-icon'/>
                <h4>Server Side API</h4>
              </article>
          </div>
        </div>

      </div>

    </section>
)
}

export default Skills
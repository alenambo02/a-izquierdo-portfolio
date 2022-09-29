import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import React from 'react';
import './contact.css';



const Contact = () => {
    return (
        <section id="contact">
         <h5>Feel free to</h5>
         <h2>Contact Me</h2> 

         <div className='contianer contact__container'>
            <div className='contact__options'>
                <article className='contact__choice'> 
                <FontAwesomeIcon icon={faEnvelopeCircleCheck}/>
                <h4>Email</h4>
                <h5>izqale02@gmail.com</h5>
                <a href='mailto:izqale02@gmail.com' target='#'>Send a message</a>
                </article>

                <article className='contact__choice'> 
                <FontAwesomeIcon icon={faLinkedin}/>
                <h4>LinkedIn</h4>
                <h5>https://www.linkedin.com/in/alenizquierdo/</h5>
                <a href='https://www.linkedin.com/in/alenizquierdo/' target='#'>Send a message</a>
                </article>
            </div>
            <form>

            </form>


         </div>
        </section>
    )
}


export default Contact
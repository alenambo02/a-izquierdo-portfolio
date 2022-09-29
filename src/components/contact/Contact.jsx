import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelopeCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
// import { useRef } from 'react';
// import emailjs from '@emailjs/browser';
import React from 'react';
import './contact.css';

const Contact = () => {
    // const form = useRef();
    // const sendEmail = (e) => {
    //     e.preventDefault();

    //     emailjs.sendForm('service_b1nsis8', 'template_qajqcmc', form.current, 'n-Oyi4a_Tl8Jwf9v4')
    //     .then((result) => {
    //         console.log(result.text);
    //     }, (error) => {
    //         console.log(error.text);
    //     });
    // }
    return (
        <section id="contact">
         <h5>Feel free to</h5>
         <h2>Contact Me</h2> 

         <div className='container contact__container'>
            <div className='contact__options'>
                <article className='contact__choice'> 
                <FontAwesomeIcon icon={faEnvelopeCircleCheck} size= '2x' className='contact__choice-icon'/>
                <h4>Email</h4>
                <h5>izqale02@gmail.com</h5>
                <a href='mailto:izqale02@gmail.com' target='#'>Send a message</a>
                </article>

                <article className='contact__choice'> 
                <FontAwesomeIcon icon={faLinkedin} size= '2x' className='contact__choice-icon'/>
                <h4>LinkedIn</h4>
                <h5>alenizquierdo</h5>
                <a href='https://www.linkedin.com/in/alenizquierdo/' target='#'>Send a message</a>
                </article>
            </div>
            <form >
                <input type='text' name='name' placeholder='Enter full name' required/>
                <input type='email' name='email' placeholder='Enter email' required/>
                <textarea type='message' name='message' placeholder='Leave a message' required></textarea>
                <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>


         </div>
        </section>
    )
}


export default Contact
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

// import { fa } from '@fortawesome/free-brands-svg-icons';

function Footer () {
    return (
    <footer className="w-100 mt-auto bg-dark p-4">
      <div className="container text-center mb-4">
        <h4>
          Made with{' '}
          <span
            className="emoji"
            role="img"
            aria-label="heart"
            aria-hidden="false"
          >
            ❤️

          </span>{' '}
          by Alejandra Izquierdo.
        </h4>
      </div>

      <div className="container text-center mb-4 ">
        <a className= "mr-4" href="https://gmail.google.com/inbox/">
        <FontAwesomeIcon icon={faEnvelope} size= '2x' />
        </a>

        <a href="https://github.com/alenambo02?tab=repositories">
        <FontAwesomeIcon icon={faGithub} size= '2x' />
        </a>

        <a href="https://www.linkedin.com/in/alejandra-n-izquierdo-b8488516b/">
        <FontAwesomeIcon icon={faLinkedin} size= '2x' />
        </a>
        
      </div>
    </footer>
    )
}

export default Footer;

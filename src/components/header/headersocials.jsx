import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const HeaderSocials = () => {
return (
    <div className='header__socials'>
    <a href="https://github.com/alenambo02?tab=repositories">
    <FontAwesomeIcon icon={faGithub} size= '2x' />
    </a>

    <a href="https://www.linkedin.com/in/alejandra-izquierdo-b8488516b/">
    <FontAwesomeIcon icon={faLinkedin} size= '2x' />
    </a>
    </div>
)
}

export default HeaderSocials;
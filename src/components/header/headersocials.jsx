import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';



const HeaderSocials = () => {
return (
    <div className='header__socials'>
    <a href="https://github.com/alenambo02?tab=repositories">
    <FontAwesomeIcon icon={faGithub}/>
    </a>

    <a href="https://www.linkedin.com/in/alenizquierdo/">
    <FontAwesomeIcon icon={faLinkedin}/>
    </a>
    </div>
)
}

export default HeaderSocials;
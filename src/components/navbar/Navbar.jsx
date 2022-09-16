import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';



const Navbar = () => {
    return (
        <nav>
            <a href='#header'>
                <FontAwesomeIcon icon={faHouse}/>
            </a>
            <a href='#about'>
                <FontAwesomeIcon icon={faUser}/>
            </a>
            <a href='#skills'> 
                <FontAwesomeIcon icon={faLightbulb}/>
            </a>
            <a href='#portfolio'>
                <FontAwesomeIcon icon={faDiagramProject}/>
            </a>
            <a href='#contact'>
                <FontAwesomeIcon icon={faAddressBook}/>
            </a>
        </nav>
    )
}


export default Navbar
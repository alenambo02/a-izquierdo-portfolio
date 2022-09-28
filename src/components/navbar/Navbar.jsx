import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import { faDiagramProject } from '@fortawesome/free-solid-svg-icons';
import { faAddressBook } from '@fortawesome/free-solid-svg-icons';
import {useState} from 'react'


const Navbar = () => {
    const [currentNav, setCurrentNav] = useState('#')
    return (
        <nav>
            <a href='#header' onClick={() => setCurrentNav('#header')} className={currentNav === '#header' ? 'active' : ''}>
                <FontAwesomeIcon icon={faHouse}/>
            </a>
            <a href='#about' onClick={() => setCurrentNav('#about')} className={currentNav === '#about' ? 'active' : ''}>
                <FontAwesomeIcon icon={faUser}/>
            </a>
            <a href='#skills' onClick={() => setCurrentNav('#skills')} className={currentNav === '#skills' ? 'active' : ''}> 
                <FontAwesomeIcon icon={faLightbulb}/>
            </a>
            <a href='#portfolio' onClick={() => setCurrentNav('#portfolio')} className={currentNav === '#portfolio' ? 'active' : ''}>
                <FontAwesomeIcon icon={faDiagramProject}/>
            </a>
            <a href='#contact' onClick={() => setCurrentNav('#contact')} className={currentNav === '#contact' ? 'active' : ''}>
                <FontAwesomeIcon icon={faAddressBook}/>
            </a>
        </nav>
    )
}


export default Navbar
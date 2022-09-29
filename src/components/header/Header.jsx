import React from 'react';
import './header.css';
import Me from '../../assets/smallerpic.png'
import ResumeHelper from '../../utils/resumeHelper';
import HeaderSocials from './headersocials';


const Header = () => {
    return (
    <header id='header'>
        <div className='container header__container'>
        <h5>Hi I'm</h5>
        <h1>Alejandra Izquierdo</h1>
        <h5 className='textlight'>Full-Stack Developer</h5>
        <ResumeHelper/>
        <HeaderSocials/>

        <div className='box'>
            <div className='profilePic'>
                <img src={Me} alt='profilepicture'/>
            </div>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
        </div>     
    </header>
    )
}


export default Header
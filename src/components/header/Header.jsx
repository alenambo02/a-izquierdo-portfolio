import React from 'react';
import './header.css';
import Me from '../../assets/profilepic.png'
import ResumeHelper from '../../utils/resumeHelper';



const Header = () => {
    return (
    <div className="container header__Cont">
        <h5>Hi I'm</h5>
        <h1>Alejandra Izquierdo</h1>
        <h5 className="textlight">Junior Full-Stack Developer</h5>
        <ResumeHelper/>

        <div className="profilePic">
            <img src={Me} alt="profilepicture"/>
        </div>

        <a href='#contact' className='scroll_down'>Scroll Down</a>
    
    </div>
    )
}


export default Header
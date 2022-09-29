// import components created for application based on order
import React from "react";
import Navbar from './components/navbar/Navbar'
import Header from './components/header/Header'

import About from './components/about/About'
import Skills from './components/skills/Skills'
import Portfolio from './components/portfolio/Portfolio'
import Contact from './components/contact/Contact'
import Footer from './components/footer/Footer'


function App () {
      return (
        <>
          
          <Navbar />
          <Header />
          <About />
          <Skills />
          <Portfolio />
          <Contact />
          <Footer />
        </>
      );
    }

export default App;


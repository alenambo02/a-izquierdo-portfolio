// import components created for application based on order
import React from "react";
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'


function App () {
      return (
        <>
          <Header />
          <Navbar />
          <About />
          <Portfolio />
          <Footer />
        </>
      );
    }

export default App;


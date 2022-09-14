// import logo from './logo.svg';
import React, { Component } from "react";
import './App.css';
import Header from './components/header/Header'
import Navbar from './components/navbar/Navbar'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'


class App extends Component {
    render() {
      return (
        <div  className="pending">
        <Header />
        <Navbar />
        <About />
        <Portfolio />
        <Footer />

        </div>
      );
    }
  }

export default App;


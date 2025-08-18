import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import instagram from "../src/img/instagram2.png";
import internet from "../src/img/internet.png"
import html from "../src/img/html.png"
import css from "../src/img/css.webp"
import js from "../src/img/js.svg"
import tailwind from "../src/img/tailwind2.svg"
import bootstrap from "../src/img/bootstrap.png"


import Contact from './components/Contact';
import Projects from './components/Projects';
import AboutMe from './components/AboutMe';
import TimeLine from './components/TimeLine';



const App = () => {
  return (
    <div>
      <Header />

      

      <AboutMe />


      <Projects />



      <TimeLine />




      <Contact />






      <Footer />
    </div>
  )
}

export default App
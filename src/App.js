import React, { useEffect } from 'react'
import Header from './Component/Head/Header'
import "./App.css"
// import "bootstrap/dist/css/bootstrap.min.css";
// import NavigationBar from 'Component/Head/NavigationBar'
import Hero from './Component/Hero/Hero'
import Skills from './Component/Skills/Skills'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Contact from 'Component/Contact/Contact'
import Footer from 'Component/Footer'

const App = () => {
  
  return (
    <>
      {/* <NavigationBar /> */}
      <Header />
      <Hero />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
    )
}

export default App
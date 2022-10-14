import React, { useEffect } from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import Skills from './Component/Skills/Skills'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Contact from 'Component/Contact/Contact'
import Footer from 'Component/Footer'
import "./App.css"

const App = () => {
  
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
      <Footer />
    </>
    )
}

export default App
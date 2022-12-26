import React from 'react'
import Header from './Component/Head/Header'
import "./App.css"
import Hero from './Component/Hero/Hero'
import Skills from './Component/Skills/Skills'
import Portfolio from './Component/Portfolio/Portfolio'
import Resume from './Component/Resume/Resume'
import Contact from 'Component/Contact/Contact'
import Footer from 'Component/Footer'

const App = () => {
  
  return (
    <>
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
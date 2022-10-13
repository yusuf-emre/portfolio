import React, { useEffect } from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import Skills from './Component/Skills/Skills'
import Portfolio from './Component/Portfolio/Portfolio'
import "./App.css"
import Resume from './Component/Resume/Resume'
import Contact from 'Component/Contact/Contact'

const App = () => {
  
  useEffect(() => {
    document.title = "Yusuf Emre Velioglu"
  }, [])
  
  return (
    <>
      <Header />
      <Home />
      <Skills />
      <Portfolio />
      <Resume />
      <Contact />
    </>
    )
}

export default App
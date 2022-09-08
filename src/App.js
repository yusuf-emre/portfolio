import React, { useEffect } from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import Skills from './Component/Skills/Skills'
import "./App.css"

const App = () => {
  
  useEffect(() => {
    document.title = "Yusuf Emre Velioglu"
  }, [])
  
  return (
    <>
      <Header />
      <Home />
      <Skills />
    </>
    )
}

export default App
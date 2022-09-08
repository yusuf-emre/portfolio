import React, { useEffect } from 'react'
import Header from './Component/Head/Header'
import Home from './Component/Hero/Home'
import "./App.css"

const App = () => {
  
  useEffect(() => {
    document.title = "Yusuf Emre Velioglu"
  }, [])
  
  return (
    <>
      <Header />
      <Home />
    </>
    )
}

export default App
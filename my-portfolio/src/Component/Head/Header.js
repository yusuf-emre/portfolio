import React from 'react'
import "./Header.css"

const Header = () => {

  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 70);
  })

  return (
    <>
      <header className='header'>
        <div className='container d_flex'>
          <ul className='hero uppercase'>
            <img className='hero-photo' src="hero.png" alt="hero" />
            <span className='hero-name'>Yusuf Emre Velioglu</span>
          </ul>
          
          <div className='navlink'>
            <ul className='link f_flex uppercase'>
              <li><a href="#home">home</a></li>
              <li><a href="#resume">resume</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#contact">contact</a></li>
              <li className='icon-links'>
                <a href="https://www.linkedin.com/in/yusuf-emre-velioglu/">
                  <img className='icon-link' src="linkedin.gif" alt="linkedin" />
                </a>
                <span> </span>
                <a href="https://github.com/yusuf-emre">
                  <img className='icon-link' src="github.gif" alt="github" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>
    </>
  )
}

export default Header
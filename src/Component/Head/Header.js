import React from 'react'
import "./Header.css"

const Header = () => {

  window.addEventListener("scroll", function() {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  })

  return (
    <>
      <header className='header' id='header'>
        <div className='container d_flex'>
          <a href="#home">
            <ul className='person uppercase'>
              <img className='person-photo' src="person.png" alt="person" />
              <span className='person-name'>Yusuf Emre Velioglu</span>
            </ul>
          </a>
          
          <div className='navlink'>
            <ul className='link f_flex uppercase'>
              <li><a href="#home">home</a></li>
              <li><a href="#skills">skills</a></li>
              <li><a href="#portfolio">portfolio</a></li>
              <li><a href="#resume">resume</a></li>
              <li><a href="#contact">contact</a></li>
              <li className='icon-links'>
                <a href="https://www.linkedin.com/in/yusuf-emre-velioglu/" target="_blank" rel="noreferrer">
                  <img className='icon-link' src="linkedin.gif" alt="linkedin" />
                </a>
                <span> </span>
                <a href="https://github.com/yusuf-emre" target="_blank" rel="noreferrer">
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
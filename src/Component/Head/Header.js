import React from 'react'
import "./Header.css"
import { navigationLinks } from "./navigationLinks";

const Header = () => {

  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    header.classList.toggle("active", window.scrollY > 0);
  })

  const links = () => {
    return navigationLinks.map((e, index) => (
      <li>
        <a href={e.ref}>{e.name}</a>
      </li>
    ));
  }

  return (
    <>
      <section className='header' id='header'>
        <div className='container d_flex'>
          <a href="#home" className='personLink'>
            <ul className='person uppercase'>
              <img className='person-photo' src="person.png" alt="person" />
              <span className='person-name'>Yusuf Emre Velioglu</span>
            </ul>
          </a>

          <input id="menu-toggle" type="checkbox" />
          <label className='menu-button-container' htmlFor="menu-toggle">
            <div className='menu-button'></div>
          </label>
          
          <ul className='menu'>
            {links()}
            <li>
              <a href="https://www.linkedin.com/in/yusuf-emre-velioglu/" className='iconLink' target="_blank" rel="noreferrer">
                <img src="linkedin.gif" alt="linkedin" />
              </a>
              <span> </span>
              <a href="https://github.com/yusuf-emre" className='iconLink' target="_blank" rel="noreferrer">
                <img src="github.gif" alt="github" />
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  )
}

export default Header
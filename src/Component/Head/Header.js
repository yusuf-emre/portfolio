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
      <a href={e.ref}>{e.name}</a>
    ));
  }

  const handleMobileNav = () => {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  return (
    <>
      <header className='header' id='header'>
        <div className='container d_flex'>
          <a href="#home" className='personLink'>
            <ul className='person uppercase'>
              <img className='person-photo' src="person.png" alt="person" />
              <span className='person-name'>Yusuf Emre Velioglu</span>
            </ul>
          </a>

          <div id="myLinks" className='navlink'>
              {links()}
                <a href="https://www.linkedin.com/in/yusuf-emre-velioglu/" className='iconLink' target="_blank" rel="noreferrer">
                  <img src="linkedin.gif" alt="linkedin" />
                </a>
                <span> </span>
                <a href="https://github.com/yusuf-emre" className='iconLink' target="_blank" rel="noreferrer">
                  <img src="github.gif" alt="github" />
                </a>
          </div>
          <a href="javascript:void(0);" className="icon" onClick={handleMobileNav}>
            <i className="fa fa-bars"></i>
          </a>
        </div>
      </header>
    </>
  )
}

export default Header
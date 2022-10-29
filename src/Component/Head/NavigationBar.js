// import React from "react";
// import "./NavigationBar.css"
// import Navbar from "react-bootstrap/Navbar";
// import Nav from "react-bootstrap/Nav";
// import { navigationLinks } from "./navigationLinks";

// function createLinks() {
//   return navigationLinks.map((e, index) => (
//     <Nav.Link key={index} href={e.ref}>
//       {e.name}
//     </Nav.Link>
//   ));
// }

// function NavigationBar() {
//   return (
//     <div id="home">
//       <Navbar
//         className="navigation__container"
//         style={{
//           zIndex: "1",
//           position: "fixed",
//           top: "0",
//           width: "100%",
//         }}
//         collapseOnSelect
//         expand="lg"
//       >
//         <img
//           className="navbar-userIcon"
//           src="person.png"
//           height="50px"
//           width="50px"
//           alt="User foto"
//         />
//         <Navbar.Brand style={{ marginLeft: "1rem" }} href="#home">
//           Yusuf Emre Velioglu
//         </Navbar.Brand>
//         <Navbar.Toggle aria-controls="basic-navbar-nav"/>
//         <Navbar.Collapse
//           style={{
//             justifyContent: "flex-end",
//             marginLeft: "1rem",
//             borderColor: "none",
//           }}
//         >
//           <Nav className="nav nav-pills me-3">
//             {createLinks()}
//             <div className='icon-links'>
//                 <a href="https://www.linkedin.com/in/yusuf-emre-velioglu/" target="_blank" rel="noreferrer">
//                   <img className='icon-link' src="linkedin.gif" alt="linkedin" />
//                 </a>
//                 <a href="https://github.com/yusuf-emre" target="_blank" rel="noreferrer">
//                   <img className='icon-link' src="github.gif" alt="github" />
//                 </a>
//             </div>
//           </Nav>
//         </Navbar.Collapse>
//       </Navbar>
//     </div>
//   );
// }

// export default NavigationBar;
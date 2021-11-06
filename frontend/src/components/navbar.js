import React from "react";

import logo from '../image/icon-left-font-monochrome-black.svg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Nav() {
  return (
    <nav className="navbar">
      <img src={logo}
           alt='logo-entreprise'></img>
    </nav>
  );
}

export default Nav;

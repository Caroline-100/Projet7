import React from "react";
import { Link } from "react-router-dom";

import logo from '../image/icon-left-font-monochrome-black.svg'; // Tell webpack this JS file uses this image

console.log(logo); // /logo.84287d09.png

function Nav() {
  return (
    <>
      <nav className="navbar">
        <img src={logo}
          alt='logo-entreprise'></img>
        <div className='links'>
          <Link to='/SignUp'>Register
          </Link>
          <Link to='/Login'>Login
          </Link>
        </div>
      </nav>

    </>
  );
}

export default Nav;

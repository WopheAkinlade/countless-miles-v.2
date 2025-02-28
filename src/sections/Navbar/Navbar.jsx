import React from "react";

import "./Navbar.css"
import logo from "../../assets/countlessmiles.svg"
import Button from "../../components/Button";

const Navbar = () => {
  return (
    <nav>
      <img src={logo} alt="Logo" />
      <span className="nav-links">
        <a href="#.">About Us</a>
        <a href="#.">Contact</a>
        <a href="#.">Blog</a>
      </span>
      <Button label={"GET EARLY ACCESS"} transparent={true}/>
    </nav>
  );
};

export default Navbar;

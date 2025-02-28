import React from "react";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="navbar">
      <img src="" alt="Logo" />
      <span>
        <p className="nav-links">About Us</p>
        <p className="nav-links">Contact</p>
        <p className="nav-links">Blog</p>
      </span>
      <Button label={"Get Early Access"} />
    </div>
  );
};

export default Navbar;

import React from "react";

const Home = () => {
  return (
    <>
      <nav>
        <img src="../assets/countlessmiles.svg" alt="Logo" className="logo" />
        <ul>
          <a href="#about">
            <li className="nav-link">About Us</li>
          </a>
          <a href="#blog">
            <li className="nav-link">Blog</li>
          </a>
          <a href="#contact">
            <li className="nav-link">Contact Us</li>
          </a>
        </ul>
        <button className="nav-button">GET EARLY ACCESS</button>
      </nav>

      <div className="hero-textbox">
        <h1 className="hero-title">
          If You Love Travel Travel Freedom is Here
        </h1>
        <div className="barrier" />
        <h3 className="hero-text">
          Experience Travel As A Service With Our End-to-End Trip Planning
          Platform.
        </h3>
        <button className="hero-btn">GET EARLY ACCESS</button>
      </div>
    </>
  );
};

export default Home;

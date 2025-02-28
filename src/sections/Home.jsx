import React from "react";
import Navbar from "./Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar />
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

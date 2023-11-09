import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <div>This is the home component</div>
      <Link to="about">Click to view our about page</Link> <br />
      <Link to="contact">Click to view our contact page</Link>
    </>
  );
};

export default Home;

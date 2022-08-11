import React from "react";
import { Navbar } from "react-bootstrap";
import "../Styles/Navbar.css";

function Nav() {
  return (
    <Navbar sticky="top" className="navbar">
      <div className="links">
        <a href="/Home">Home</a>
        <a href="/Older Shows">Older Shows</a>
        <a href="/Newer Shows">Newer Shows</a>
        <a href="/Genre">Genre</a>
      </div>
    </Navbar>
  );
}

export default Nav;

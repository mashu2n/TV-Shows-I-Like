import React from "react";
import "../Styles/Navbar.css";

function Navbar() {
  return (
    <div className="navbar">
      <div className="links">
        <a href="/Home">Home</a>
        <a href="/Older Shows">Older Shows</a>
        <a href="/Newer Shows">Newer Shows</a>
        <a href="/Genre">Genre</a>
      </div>
    </div>
  );
}

export default Navbar;

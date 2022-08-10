import React from "react";

import "../Styles/Header.css";

const Header = (props) => {
  return (
    <React.Fragment>
      <header className="jumbotron">
        <h1>TV Shows I Like</h1>
        <p>
          Here is a view into the type of shows I'm into. These will be updated
          monthly.
        </p>
      </header>
    </React.Fragment>
  );
};

export default Header;

import React from "react";

import "./App.scss";

import Nav from "./Components/UI/Nav";
import Header from "./Components/Layout/Header";
import Cards from "./Components/UI/Cards";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <Cards />
      </main>
    </div>
  );
}

export default App;

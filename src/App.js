import React from "react";

import "./App.scss";

import Nav from "./Components/UI/Nav";
import Header from "./Components/Layout/Header";
import Cards from "./Components/UI/Cards";
import SubmitButton from "./Components/UI/SubmitButton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <Cards />
        <SubmitButton />
      </main>
    </div>
  );
}

export default App;

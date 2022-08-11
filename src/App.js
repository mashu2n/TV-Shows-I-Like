import React from "react";

import "./App.scss";

import Nav from "./Components/UI/Nav";
import Header from "./Components/Layout/Header";
import Cards from "./Components/UI/Cards";
import CommentButton from "./Components/UI/CommentButton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <Cards />
        <CommentButton />
      </main>
    </div>
  );
}

export default App;

import React from "react";

import "./App.scss";

import Nav from "./Components/UI/Nav";
import Header from "./Components/Layout/Header";
import OlderShows from "./Components/Layout/OlderShows";
import CommentButton from "./Components/Layout/CommentButton";

function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <main>
        <OlderShows />
        <CommentButton />
      </main>
    </div>
  );
}

export default App;

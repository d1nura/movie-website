import React from "react";
import "./App.scss";
import HeroComponent from "./components/HeroContent";
import MovieSet from "./components/MovieSet";

function App() {
  return (
    <div className="App">
      <div id="heroComp">
        <HeroComponent />
      </div>
      <MovieSet />
    </div>
  );
}

export default App;

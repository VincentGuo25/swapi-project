import React from "react";

import MovieList from "./components/MovieList";
import LogoImage from "./assets/images/logoStarWars.png";
import "./App.css";

function App() {
  return (
    <div className="App">
      <img src={LogoImage} className="Logo" alt="" />
      <MovieList />
    </div>
  );
}

export default App;

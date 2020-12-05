import React, { Component } from "react";

import MovieList from "./containers/MovieList/MovieList";
import Logo from "./components/Logo/Logo";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Logo />
        <MovieList />
      </div>
    );
  }
}

export default App;

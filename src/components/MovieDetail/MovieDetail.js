import React, { Component } from "react";
import axios from "axios";

import "./MovieDetail.css";

class MovieDetail extends Component {
  state = {
    showMovieDetail: false,
    lists: [],
  };

  movieListClicked = () => {
    this.setState({ showMovieDetail: !this.state.showMovieDetail });
  };

  getCharactersDetails() {
    const charss = this.props.characters;
    // for (let q = 0; q <= charss.length; q++) {
    // for (let i = 0; i <= charss.length; i++) {
    //   axios.get(charss[i]).then((response) => {
    //     console.log(response.data.name);
    //   });
    // }

    charss.map((data) => {
      axios.get(data).then((response) => {
        console.log(response.data.name);
      });
    });

    // }
    // const charss = this.props.characters[i];
    // for (let i = 0; i <= charss.length; i++) {
    //   axios.get("https://swapi.dev/api/people/" + i).then((response) => {
    //     console.log(charss);
    //   });
    // }

    // console.log(charss);
  }

  render() {
    return (
      <div className="MovieDetail" onClick={this.movieListClicked}>
        {!this.state.showMovieDetail ? (
          <h2>{this.props.title}</h2>
        ) : (
          <h3>
            Title : {this.props.title} <br />
            Episode : {this.props.episode} <br />
            {this.props.opening} <br />
            Director : {this.props.director} <br />
            Producer : {this.props.producer} <br />
            Date : {this.props.date} <br />
            Characters : {this.getCharactersDetails()}
          </h3>
        )}
      </div>
    );
  }
}

export default MovieDetail;

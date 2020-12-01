import React, { Component } from "react";
import axios from "axios";

import "./MovieDetail.css";

class MovieDetail extends Component {
  state = {
    showMovieDetail: false,
    charName: [],
    loading: true,
  };

  movieListClicked = () => {
    this.setState({ showMovieDetail: !this.state.showMovieDetail });
  };

  componentDidMount() {
    this.getCharactersDetails();
  }

  getCharactersDetails() {
    const charsAPILink = this.props.characters;

    charsAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        this.state.charName.push(
          <li key={response.data.name}>{response.data.name}</li>
        );
      });
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <div className="MovieDetail" onClick={this.movieListClicked}>
        {!this.state.showMovieDetail ? (
          <h2>{this.props.title}</h2>
        ) : (
          <div>
            {this.state.loading ? (
              <h3>Data is Loading...</h3>
            ) : (
              <h3>
                Title : {this.props.title} <br />
                Episode : {this.props.episode} <br />
                {this.props.opening} <br />
                Director : {this.props.director} <br />
                Producer : {this.props.producer} <br />
                Date : {this.props.date} <br />
                Characters : {this.state.charName} <br />
              </h3>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetail;

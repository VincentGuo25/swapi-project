import React, { Component } from "react";
import axios from "axios";

import "./MovieDetail.css";

class MovieDetail extends Component {
  state = {
    showMovieDetail: false,
    charName: [],
  };

  movieListClicked = () => {
    this.setState({ showMovieDetail: !this.state.showMovieDetail });
  };

  componentDidMount() {
    this.getCharactersDetails();
  }

  getCharactersDetails() {
    const charsAPILink = this.props.characters;
    // for (let q = 0; q <= charss.length; q++) {
    // for (let i = 0; i <= charsAPILink.length; i++) {
    //   axios.get(charsAPILink[i]).then((response) => {
    //     console.log(response.data.name);
    //     this.setState({ charName: response.data.name });
    //   });
    // }

    // const data = charss;

    // const pp = charss.map((data) => {
    //   axios.get(data).then((response) => {
    //     data = response.data.name;
    //     console.log(data);
    //     return data;
    //   });
    // });

    charsAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        console.log(response.data.name);
        this.setState({ charName: response.data.name });
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
          <div>
            <h3>
              Title : {this.props.title} <br />
              Episode : {this.props.episode} <br />
              {this.props.opening} <br />
              Director : {this.props.director} <br />
              Producer : {this.props.producer} <br />
              Date : {this.props.date} <br />
              Characters :<li>{this.state.charName}</li>
            </h3>

            {/* <ul>{this.props.characters.map((data) => {
                axios.get(data).then((response) => {
                  console.log(response.data.name);
                  const cc = response.data.name;
                  return <h2>gg</h2>
                });
                // return gg;
              })}
              </ul> */}
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetail;

import React, { Component } from "react";
import axios from "axios";


class MovieDetail extends Component {
  state = {
    showMovieDetail: false,
    charData: []
  };

  movieListClicked = () => {
    this.setState({ showMovieDetail: !this.state.showMovieDetail });
  };

 componentDidMount() {
   this.getCharactersDetails()
}

  getCharactersDetails = () => {
    const charsAPILink = this.props.characters;
    const temp = []
    
    charsAPILink.map((data) => {
      temp.push(axios.get(data))
    });
    
  promise.all(temp)
   .then(res => res)
    .then(responses => 
         return promise.all(responses.map(r => r.json())
          .then(data => {
             this.setState({charData: data})
          })
   
  };

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
              Characters : {charData.map(item => {
                 return (<span> { item.name } </span>)
              }}
            </h3>
          </div>
        )}
      </div>
    );
  }
}

export default MovieDetail;
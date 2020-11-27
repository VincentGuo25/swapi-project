import React, { Component } from "react";
import axios from "axios";

import List from "../../components/List/List";
import "./Movie.css";

class Movie extends Component {
  state = {
    lists: [],
    clickedListId: null,
  };

  componentDidMount() {
    axios.get("https://swapi.dev/api/films/").then((response) => {
      this.setState({ lists: response.data.results });
      console.log(response.data.results);
    });
  }

  listClicked = (list) => {
    console.log(list.title);
    <h1>{list.episode_id}</h1>;
  };

  render() {
    const lists = this.state.lists.map((list) => {
      return (
        <div>
          <List
            key={list.episode_id}
            title={list.title}
            episode={list.episode_id}
            opening={list.opening_crawl}
            director={list.director}
            producer={list.producer}
            date={list.release_date}
            clicked={() => this.listClicked(list)}
          />
        </div>
      );
    });

    return (
      <div>
        <div className="Movie">{lists}</div>
      </div>
    );
  }
}

export default Movie;

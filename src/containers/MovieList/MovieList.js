import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieDetail from "../../components/MovieDetail/MovieDetail";

export default function MovieList() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((response) => {
      setMovieDetails(response.data.results);
    });
  }, []);

  const movieLists = movieDetails.map((movieDetail) => {
    const getCharactersDetails = () => {
      const charss = movieDetail.characters.map((data) => {
        axios.get(data).then((response) => {
          console.log(response.data.name);
          const cc = response.data.name;
          return cc;
        });
      });

      return charss;
    };

    return (
      <div key={movieDetail.episode_id}>
        <MovieDetail
          title={movieDetail.title}
          episode={movieDetail.episode_id}
          opening={movieDetail.opening_crawl}
          director={movieDetail.director}
          producer={movieDetail.producer}
          date={movieDetail.release_date}
          characters={getCharactersDetails()}
        />
      </div>
    );
  });

  return (
    <div>
      <div>{movieLists}</div>
    </div>
  );
}

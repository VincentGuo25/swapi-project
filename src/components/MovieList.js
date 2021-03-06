import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieDetail from "./MovieDetail/MovieDetail";

function MovieList() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    fetchDataAPI();
  }, []);

  const fetchDataAPI = async () => {
    await axios.get("https://swapi.dev/api/films/").then((response) => {
      setMovieDetails(response.data.results);
    });
  };

  const showMovieLists = movieDetails.map((movieDetail) => {
    return (
      <div key={movieDetail.episode_id}>
        <MovieDetail
          title={movieDetail.title}
          episode={movieDetail.episode_id}
          opening={movieDetail.opening_crawl}
          director={movieDetail.director}
          producer={movieDetail.producer}
          date={movieDetail.release_date}
          characters={movieDetail.characters}
          planets={movieDetail.planets}
          starships={movieDetail.starships}
          vehicles={movieDetail.vehicles}
          species={movieDetail.species}
        />
      </div>
    );
  });

  return showMovieLists;
}

export default MovieList;

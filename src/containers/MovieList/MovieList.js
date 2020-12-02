import React, { useEffect, useState } from "react";
import axios from "axios";

import MovieDetail from "../../components/MovieDetail/MovieDetail";

function MovieList() {
  const [movieDetails, setMovieDetails] = useState([]);

  useEffect(() => {
    axios.get("https://swapi.dev/api/films/").then((response) => {
      setMovieDetails(response.data.results);
    });
  }, []);

  const movieLists = movieDetails.map((movieDetail) => {
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

export default MovieList;

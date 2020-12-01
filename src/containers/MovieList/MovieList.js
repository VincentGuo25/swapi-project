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
    // const getCharactersDetails = () => {
    //   movieDetail.characters.map((data) => {
    //     // axios.get(data).then((response) => {
    //     //   const cc = response.data.name;
    //     //   console.log(cc);
    //     //   return cc;
    //     // });
    //     axios.get(data).then((response) => {
    //       const cc = response.data.name;
    //       // console.log(lis);
    //       // return <h4>{cc}</h4>;
    //       // lis = cc;
    //       // console.log(lis);
    //       return cc;
    //     });
    //   });

    // return <h4>gg{lis}</h4>;

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

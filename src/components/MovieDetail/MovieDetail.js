import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MovieDetail.css";

function MovieDetail(props) {
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [charAPILink] = useState(props.characters);
  const [charName] = useState([]);

  useEffect(() => {
    charAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        charName.push(<li key={response.data.name}>{response.data.name}</li>);
      });
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    });
  }, []);

  const movieListClicked = () => {
    setShowMovieDetail(!showMovieDetail);
  };

  return (
    <div className="MovieDetail" onClick={() => movieListClicked()}>
      {!showMovieDetail ? (
        <h2>{props.title}</h2>
      ) : (
        <div>
          {loading ? (
            <h3>Data is Loading... Please Wait</h3>
          ) : (
            <h3>
              Title : {props.title} <br />
              Episode : {props.episode} <br />
              {props.opening} <br />
              Director : {props.director} <br />
              Producer : {props.producer} <br />
              Date : {props.date} <br />
              Characters : {charName} <br />
            </h3>
          )}
        </div>
      )}
    </div>
  );
}

export default MovieDetail;

import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MovieDetail.css";

function MovieDetail(props) {
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [charAPI] = useState(props.characters);
  const [planetAPI] = useState(props.planets);
  const [starshipAPI] = useState(props.starships);
  const [vehiclesAPI] = useState(props.vehicles);
  const [speciesAPI] = useState(props.species);
  const [charName] = useState([]);
  const [planetName] = useState([]);
  const [starshipName] = useState([]);
  const [vehiclesName] = useState([]);
  const [speciesName] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    fetchAllData();
  }, []);

  const fetchAllData = () => {
    fetchData(charAPI, charName);
    fetchData(planetAPI, planetName);
    fetchData(starshipAPI, starshipName);
    fetchData(vehiclesAPI, vehiclesName);
    fetchData(speciesAPI, speciesName);
  };

  const fetchData = (API, nameList) => {
    API.map(async (data) => {
      await axios.get(data).then((response) => {
        nameList.push(<li key={response.data.name}>{response.data.name}</li>);
      });
    });
  };

  const movieListClicked = () => {
    setShowMovieDetail(!showMovieDetail);
  };

  return (
    <React.Fragment>
      <div className="MovieDetail" onClick={() => movieListClicked()}>
        {!showMovieDetail ? (
          <h1>{props.title}</h1>
        ) : (
          <div>
            {loading ? (
              <h1>Data is Loading... Please Wait</h1>
            ) : (
              <div>
                <h3>
                  Title : {props.title} <br />
                  Episode : {props.episode} <br />
                  {props.opening} <br />
                  Director : {props.director} <br />
                  Producer : {props.producer} <br />
                  Date : {props.date} <br />
                  <table>
                    <thead>
                      <tr>
                        <td>Characters : {charName}</td>
                        <td>Planets : {planetName}</td>
                        <td>Starships : {starshipName}</td>
                        <td>Vehicles : {vehiclesName}</td>
                        <td>Species : {speciesName}</td>
                      </tr>
                    </thead>
                  </table>
                </h3>
              </div>
            )}
          </div>
        )}
      </div>
      <br />
    </React.Fragment>
  );
}

export default MovieDetail;

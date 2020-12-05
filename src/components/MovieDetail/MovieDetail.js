import React, { useState, useEffect } from "react";
import axios from "axios";

import "./MovieDetail.css";

function MovieDetail(props) {
  const [showMovieDetail, setShowMovieDetail] = useState(false);
  const [loading, setLoading] = useState(true);
  const [charAPILink] = useState(props.characters);
  const [planetAPILink] = useState(props.planets);
  const [starshipAPILink] = useState(props.starships);
  const [vehiclesAPILink] = useState(props.vehicles);
  const [speciesAPILink] = useState(props.species);
  const [charName] = useState([]);
  const [planetName] = useState([]);
  const [starshipName] = useState([]);
  const [vehiclesName] = useState([]);
  const [speciesName] = useState([]);

  useEffect(() => {
    fetchCharData();
    fetchPlanetData();
    fetchStarshipData();
    fetchVehiclesData();
    fetchSpeciesData();
  }, []);

  const fetchCharData = () => {
    charAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        charName.push(<li key={response.data.name}>{response.data.name}</li>);
      });
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    });
  };

  const fetchPlanetData = () => {
    planetAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        planetName.push(<li key={response.data.name}>{response.data.name}</li>);
      });
    });
  };

  const fetchStarshipData = () => {
    starshipAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        starshipName.push(
          <li key={response.data.name}>{response.data.name}</li>
        );
      });
    });
  };

  const fetchVehiclesData = () => {
    vehiclesAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        vehiclesName.push(
          <li key={response.data.name}>{response.data.name}</li>
        );
      });
    });
  };

  const fetchSpeciesData = () => {
    speciesAPILink.map(async (data) => {
      await axios.get(data).then((response) => {
        speciesName.push(
          <li key={response.data.name}>{response.data.name}</li>
        );
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

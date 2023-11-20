import React from "react";
import "./Load.css";
import { useNavigate } from "react-router-dom";
const Load = (props) => {
  const usenavigate = useNavigate();
  const balik = () => {
    usenavigate("/");
  };
  const { area, capital, population, region, name, flags } = props.country;
  return (
    <>
      <div className="container">
        <div className="load">
          <img src={flags.png}></img>
          <h2>Country name: {name.common}</h2>
          <p>Region: {region}</p>
          <p>population: {population}</p>
          <p>Capital: {capital}</p>
          <p>Area: {area}</p>
        </div>
        <div>
        <button onClick={balik}>back</button>
      </div>
      </div>
    </>
  );
};

export default Load;

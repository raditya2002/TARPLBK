import React from "react";
import "./Detailcountries.css";
import { useNavigate } from "react-router-dom";

const Detailcountries = (props) => {
  const usenavigate = useNavigate();
  const goBack = () => {
    usenavigate("/Countries");
  };

  const { area, capital, population, region, name, flags } = props.detailCountry || {};

  // Extract the flag URL from the flags object
  const flagUrl = flags ? flags.png : null;

  return (
    <div className="container">
      <div className="load">
        {flagUrl && <img src={flagUrl} alt={`${name?.common} flag`} />}
        <h2>Country name: {name?.common}</h2>
        <p>Region: {region}</p>
        <p>Population: {population}</p>
        <p>Capital: {capital}</p>
        <p>Area: {area}</p>
      </div>
      <div>
        <button onClick={goBack}>Back</button>
      </div>
    </div>
  );
};

export default Detailcountries;

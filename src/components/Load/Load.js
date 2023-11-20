import React from "react";
import "./Load.css";
import { useNavigate } from "react-router-dom";

const Load = (props) => {
  const usenavigate = useNavigate();
  
  const goToDetail = () => {
    usenavigate(`/countries/${props.country.cca3}`);
  };

  const { name, flags } = props.country;

  return (
    <div className="container">
      <div className="load">
        <img src={flags.png} alt={`${name.common} flag`} />
        <h2>Country name: {name.common}</h2>
      </div>
      <div>
        <button onClick={goToDetail}>Detail</button>
      </div>
    </div>
  );
};

export default Load;

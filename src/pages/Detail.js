import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CountriesContext, CountriesProvider } from '../services/api';
import "../styles/detail.css";

function CountriesDetail() {
  const { cca2 } = useParams();
  const { countries } = useContext(CountriesContext);
  const [loading, setLoading] = useState(true);
  const [filteredData, setFilteredData] = useState([]);
  
  useEffect(() => {
    const filtered = countries.filter((item) => item.cca2 == cca2);
    filtered.map((item) => {
      setFilteredData(item);
      setLoading(false)
    });
  }, [countries, cca2]);

 

  useEffect(() => {
    console.log(filteredData);
  }, [filteredData]);

  if(loading){
    return(
        <div className="loading-container">
          <h2>Loading...</h2>
        </div>
    )
  }

  return (
    <div className="detail-card">
      <img className="flag" src={filteredData.flags.svg} alt={`${filteredData.name.common} Flag`} />

      <div className="detail-info">
      <div className="detail-title">
      <div className="title">{filteredData.name.common}</div>
        <div className="title">Region: {filteredData.region}</div>
      </div>
        {/* Additional details */}
        <div>Official Name: {filteredData.name.official}</div>
        <div>Continent: {filteredData.continents}</div>
        <div>Capital: {filteredData.capital}</div>
        <div>Population: {filteredData.population}</div>
        <div>Area: {filteredData.area} square kilometers</div>
        <div>Subregion: {filteredData.subregion}</div>
        <div>Flag: {filteredData.flag}</div>
        <div>Timezones: {filteredData.timezones && filteredData.timezones.join(', ')}</div>
        {/* Add other details you want to display */}
      </div>
    </div>
  );
}

function CountryDetail() {
  return (
    <>
      <div className="container-detail">
        <CountriesProvider>
          <CountriesDetail />
        </CountriesProvider>
      </div>
    </>
  );
}
export default CountryDetail;
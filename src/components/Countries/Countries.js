import React, { useEffect, useState } from "react";
import Load from "../Load/Load";
import Detailcountries from "../DetailCountries/Detailcountries";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const [detailcountry, setDetailcountry] = useState(null);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleCountryClick = (country) => {
    setSelectedCountry(country);

    fetch(`https://restcountries.com/v3.1/alpha/${country.cca3}`)
      .then((res) => res.json())
      .then((data) => setDetailcountry(data))
      .catch((error) => {
        console.error("Error fetching detailed country data:", error.message);
      });
  };

  return (
    <div className="country">
      {countries.map((country) => (
        <Load country={country} key={country.cca3} onClick={() => handleCountryClick(country)}></Load>
      ))}

      {selectedCountry && detailcountry && <Detailcountries country={selectedCountry} detailCountry={detailcountry}></Detailcountries>}
    </div>
  );
};

export default Countries;

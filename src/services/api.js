import React, { createContext, useEffect, useState } from 'react';
import axios from 'axios';

const CountriesContext = React.createContext();

const CountriesProvider = ({ children }) => {
  const [countries, setCountries] = useState([]);

  const getCountries = async () => {
    const response = await axios.get('https://restcountries.com/v3.1/all');
    setCountries(response.data);
  };

  useEffect(() => {
    getCountries();
  }, []);

  return (
    <CountriesContext.Provider value={{ countries }}>
      {children}
    </CountriesContext.Provider>
  );
};

export {CountriesContext, CountriesProvider}
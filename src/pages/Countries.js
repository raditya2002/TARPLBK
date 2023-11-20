import React, { useContext, useEffect } from "react";
import { CountriesContext, CountriesProvider } from '../services/api';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/home.css';

const Country = () => {
  const { countries } = useContext(CountriesContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (!countries.length) {
      navigate('/');
    }
  }, [countries.length, navigate]);

  return (
    <>
      {countries.map((c, i) => {
        return (
          <div className="wrapper" key={i}>
            <div className="flag">
              <NavLink to={`/detail/${c.cca2}`}>
                <img src={c.flags.png} alt={c.name.common} />
              </NavLink>
            </div>
            <div className="details">
            <NavLink
                to={`/detail/${c.cca2}`}
                activeStyle={{ textDecoration: 'none' }}
                style={{ color: 'black', textDecoration: 'none' }}
  >
                <h3 className="headerDesc">{c.name.common}</h3>
                <p>{c.region}</p>
              </NavLink>
            </div>
          </div>
        );
      })}
    </>
  );
};

function Countries() {
  return (
    <>
      <div className="container-view">
        <CountriesProvider>
          <Country />
        </CountriesProvider>
      </div>
    </>
  );
}

export default Countries;
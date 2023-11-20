import React, { useEffect, useState } from 'react';
import Load from '../Load/Load';
import './Countries.css';

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(() =>{
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    },[])
    return (
    <div className='country'>
        {
            countries.map(country => <Load country={country} key={country.cca3}></Load>)
        }
    </div>
    );
};

export default Countries;
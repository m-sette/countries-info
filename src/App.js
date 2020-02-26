import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [country, setCountry] = useState();
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get(`https://restcountries.eu/rest/v2/name/${country}`).then(res => {
      console.log("promise fulfilled", res.data);
      setCountries(res.data);
    });
  }, [country]);

  const rows = () => {
    if (countries.length > 10) {
      return <p>Too many matches..</p>;
    }
    if (countries.length === 1) {
      return countries.map((c, i) => {
        return (
          <div key={i}>
            <h1>{c.name}</h1>
            <p>Capital {c.capital}</p>
            <p>Population {c.population}</p>
            <br />
            <h2>Languages</h2>
            <ul>
              {c.languages.map(l => (
                <li>{l.name}</li>
              ))}
            </ul>

            <img src={c.flag} alt={c.name + " Flag"} height="100" width="100" />
          </div>
        );
      });
    }

    if (countries.length < 10) {
      return countries.map((c, i) => <p key={i}>{c.name}</p>);
    }
  };

  const handleCountryChange = event => {
    setCountry(event.target.value);
  };

  return (
    <div>
      <form>
        <label>Find countries: </label>
        <input onChange={handleCountryChange}></input>
      </form>
      {rows()}
    </div>
  );
};

export default App;

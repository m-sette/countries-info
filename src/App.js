import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

import Country from "./components/Country";

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
        return <Country key={i} c={c} />;
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

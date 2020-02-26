import React from "react";

const Country = ({ c, i }) => {
  return (
    <div>
      <h1>{c.name}</h1>
      <p>Capital {c.capital}</p>
      <p>Population {c.population}</p>
      <br />
      <h2>Languages</h2>
      <ul>
        {c.languages.map((l, i) => (
          <li key={i}>{l.name}</li>
        ))}
      </ul>

      <img src={c.flag} alt={c.name + " Flag"} height="100" width="100" />
    </div>
  );
};

export default Country;

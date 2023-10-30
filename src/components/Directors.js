import React from "react";
import { directors } from "../data";

function Directors() {
  return <div>
    <h1>Directors Page</h1>
    {directors.map(({name, movies}) => (
      <div key={name}>
        <span>{name}</span>
        <ul>
          {movies.map((movie) => (
            <li key={movie}>{movie}</li>
          ))}
        </ul>
      </div>
    ))}
  </div>;
}

export default Directors;

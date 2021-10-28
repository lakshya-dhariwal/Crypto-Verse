import React from "react";
import { Link } from "react-router-dom";

function Cryptocard({ rank, id, name }) {
  return (
    <div className="container border">
      <h1>
        <h3>{name} </h3>
        <h4>Rank : {rank}</h4>

        <br />
        <Link to={`/coin/${id}`}>More</Link>
      </h1>
    </div>
  );
}

export default Cryptocard;

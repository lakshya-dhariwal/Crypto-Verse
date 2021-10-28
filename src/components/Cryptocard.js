import React from "react";
import { Link } from "react-router-dom";

function Cryptocard({ ticker, image, price, id, name }) {
  return (
    <div className="container border">
      <h1>
        <h3>
          {name} <span>{/* <img src={require(image)} alt={name} /> */}</span>
        </h3>
        <h4>${ticker}</h4>
        <h4></h4>

        <br />
        <Link
          to={`/coin/${ticker}/${ticker.toLowerCase()}/${name.toLowerCase()}`}
        >
          More
        </Link>
      </h1>
    </div>
  );
}

export default Cryptocard;

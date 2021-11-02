import React from "react";
import { Link } from "react-router-dom";

function Cryptocard({ ticker, id, name }) {
  return (
    <div className="crypto-card ">
      <div className="container border ">
        <Link
          style={{ textDecoration: "none" }}
          to={`/coin/${ticker}/${ticker.toLowerCase()}/${name.toLowerCase()}`}
        >
          <h1>
            <h3>{name} </h3>
            <h4>${ticker}</h4>
          </h1>
        </Link>
      </div>
    </div>
  );
}

export default Cryptocard;

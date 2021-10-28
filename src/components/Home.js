import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cryptocard from "./Cryptocard";
function Home() {
  const [allCoins, setAllCoins] = useState([]);
  //allCoins
  try {
    const dataFetch = async () => {
      const res = await fetch("https://api.coinpaprika.com/v1/coins");
      const data = await res.json();
      setAllCoins(data);
    };
    dataFetch();
  } catch (e) {
    console.log(e);
  }

  return (
    <div>
      <h1>Home</h1>
      {allCoins.map((coin) => {
        return (
          <Cryptocard
            rank={coin.rank}
            key={coin.id}
            id={coin.id}
            name={coin.name}
          />
        );
      })}
    </div>
  );
}

export default Home;

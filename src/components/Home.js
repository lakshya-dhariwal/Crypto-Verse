import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Cryptocard from "./Cryptocard";
function Home() {
  const [allCoins, setAllCoins] = useState([]);
  //allCoins
  useEffect(() => {
    try {
      const dataFetch = async () => {
        const res = await fetch(
          "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc"
        );
        const data = await res.json();
        setAllCoins(data.Data);
      };
      dataFetch();
    } catch (e) {
      console.log(e);
    }
  }, []);

  console.log(allCoins);
  return (
    <div>
      <h1>Home</h1>
      {allCoins.map((coin) => {
        return (
          <Cryptocard
            key={coin.CoinInfo.id}
            id={coin.CoinInfo.id}
            ticker={coin.CoinInfo.Name}
            name={coin.CoinInfo.FullName}
          />
        );
      })}
    </div>
  );
}

export default Home;

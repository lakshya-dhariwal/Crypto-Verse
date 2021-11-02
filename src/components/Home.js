import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

import Cryptocard from "./Cryptocard";
function Home() {
  const [allCoins, setAllCoins] = useState([]);
  // const [search, setSearch] = useState(null);
  // const [result, setResult] = useState([]);

  // const searchHandler = (e) => {
  //   e.preventDefault();
  //   setSearch(e.target.value.toUpperCase());
  //   console.log("search", search);

  //   const dataFetchResult = async () => {
  //     const res = await fetch(
  //       "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc"
  //     );
  //     const data = await res.json();

  //     const newList = data.Data.filter((d) => {
  //       return d.CoinInfo.Name == search;
  //     });
  //     setResult(newList);
  //   };
  //   dataFetchResult();
  //   console.log("result", result);
  // };
  const dataFetch = async () => {
    const res = await fetch(
      "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=100&tsym=USD&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc"
    );
    const data = await res.json();
    setAllCoins(data.Data);
    // if (search === "" || search === null) {
    //   setAllCoins(data.Data);
    // } else {
    //   const newList = data.Data.filter((d) => {
    //     return d.CoinInfo.Name === search;
    //   });
    //   setAllCoins(newList);
    // }
  };

  useEffect(() => {
    try {
      dataFetch();
    } catch (e) {
      console.log(e);
    }
  }, []);

  return (
    <div className="home">
      <h1>Cryptocurrencies</h1>
      {/* 
      <input
        style={({ width: "30rem" }, { textTransform: "uppercase" })}
        onInput={searchHandler}
        className="form-control me-2"
        type="search"
        placeholder="Search Coin Ticker"
        aria-label="Search"
      /> */}
      {/* <p>
        {result.map((coin) => {
          <Cryptocard
            className="crypto-card"
            key={coin.CoinInfo.id}
            id={coin.CoinInfo.id}
            ticker={coin.CoinInfo.Name}
            name={coin.CoinInfo.FullName}
          />;
        })}
      </p> */}
      <br />
      <h3>All Coins</h3>
      <div className="coin-grid">
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
    </div>
  );
}

export default Home;

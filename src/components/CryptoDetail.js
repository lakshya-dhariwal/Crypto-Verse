import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cryptochart from "./Cryptochart";

function CryptoDetail() {
  let { id } = useParams();

  const [coin, setCoin] = useState([]);
  const key = "WPJDLMCJMMZNBSCM";

  const [coinData, setCoinData] = useState([]);
  const [coinTimes, setCoinTimes] = useState([]);
  const [coinPrices, setCoinPrices] = useState([]);
  const [loading, setLoading] = useState(false);
  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  useEffect(() => {
    setLoading(true);
    try {
      const dataFetch = async () => {
        const res = await fetch(`https://api.coinpaprika.com/v1/coins/${id}`);
        const data = await res.json();
        setCoin(data);
        checkStatus(res);
      };
      dataFetch();
      const dataFetchForChart = async () => {
        const response = await fetch(
          "https://min-api.cryptocompare.com/data/v2/histominute?fsym=BTC&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146"
        );
        const json = await response.json();
        const data = json.Data.Data;
        const times = data.map((obj) => obj.time);
        const prices = data.map((obj) => obj.high);
        setCoinData(data);
        setCoinTimes(times);
        setCoinPrices(prices);
        checkStatus(response);
      };
      dataFetchForChart();
      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, []);
  if (loading) {
    return (
      <p>
        Data is loading.....
        <br />
        You known how it is
      </p>
    );
  }
  return (
    <div>
      <h1>{coin.name}</h1>
      <h2>
        ${coin.symbol} Rank {coin.rank}
      </h2>
      <p>{coin.description}</p>
      <h2>{coin.proof_type}</h2>
      <h3>Hashing Algo : {coin.hash_algorithm}</h3>

      <Cryptochart
        coinData={coinData}
        coinTimes={coinTimes}
        coinPrices={coinPrices}
      />
    </div>
  );
}

export default CryptoDetail;

// avgVolume: 21067765351
// change: 83.53662
// changesPercentage: 2.065703
// dayHigh: 4170.207
// dayLow: 4072.0632
// earningsAnnouncement: null
// eps: null
// exchange: "CRYPTO"
// marketCap: 487333265408
// name: "Ethereum USD"
// open: 4082.5496
// pe: null
// previousClose: 4082.5496
// price: 4127.514
// priceAvg50: 3456.249
// priceAvg200: 2858.5483
// sharesOutstanding: 118069440
// symbol: "ETHUSD"
// timestamp: 1635163527
// volume: 15920041984
// yearHigh: 4366.0884
// yearLow: 371.31274

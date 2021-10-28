import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Cryptochart from "./Cryptochart";

function CryptoDetail() {
  let { id, ticker, nameurl } = useParams();

  const [coin, setCoin] = useState({ symbol: "BTC" });
  const key = "WPJDLMCJMMZNBSCM";
  const [chartType, setChartType] = useState("day");

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
  const unixToTime = (unixTimeStamp) => {
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    let date = new Date(unixTimeStamp * 1000);
    // Hours part from the timestamp
    let hours = date.getHours();
    // Minutes part from the timestamp
    let minutes = "0" + date.getMinutes();
    // Seconds part from the timestamp
    let seconds = "0" + date.getSeconds();

    // Will display time in 10:30:23 format
    let formattedTime =
      hours + ":" + minutes.substr(-2) + ":" + seconds.substr(-2);
    let ddmmyy = date.toLocaleDateString("en-UK");
    return ddmmyy + " " + formattedTime;
  };
  const dataFetchForChart = async () => {
    const response = await fetch(
      `https://min-api.cryptocompare.com/data/v2/histo${chartType}?fsym=${id}&tsym=USD&limit=119&api_key=0646cc7b8a4d4b54926c74e0b20253b57fd4ee406df79b3d57d5439874960146`
    );
    const json = await response.json();
    const data = json.Data.Data;
    const times = data.map((obj) => unixToTime(obj.time));
    const prices = data.map((obj) => obj.high);
    setCoinData(data);
    setCoinTimes(times);
    setCoinPrices(prices);
    checkStatus(response);
  };
  const radioChange = (e) => {
    setChartType(e.target.value);
    dataFetchForChart();
  };

  useEffect(() => {
    setLoading(true);
    try {
      const dataFetch = async () => {
        const res = await fetch(
          `https://api.coinpaprika.com/v1/coins/${ticker}-${nameurl}`
        );
        const data = await res.json();
        setCoin(data);
        checkStatus(res);
      };
      dataFetch();

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
      <h2>${coin.symbol}</h2>
      <h2> Rank {coin.rank}</h2>
      <p>{coin.description}</p>
      <h2>{coin.proof_type}</h2>
      <h3>Hashing Algo : {coin.hash_algorithm}</h3>
      <div onChange={radioChange}>
        <input type="radio" value="day" name="chartType" /> Daily
        <input type="radio" value="hour" name="chartType" /> Hourly
        <input type="radio" value="minute" name="chartType" /> Minute
      </div>
      <Cryptochart
        coinData={coinData}
        coinTimes={coinTimes}
        coinPrices={coinPrices}
      />
    </div>
  );
}

export default CryptoDetail;

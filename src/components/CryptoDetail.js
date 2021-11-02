import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCallback } from "react";
import Cryptochart from "./Cryptochart";

function CryptoDetail() {
  let { id, ticker, nameurl } = useParams();

  const [coin, setCoin] = useState({ symbol: "LOADING" });

  // const [chartType, setChartType] = useState("day");

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
  const dataFetchForChart = useCallback(() => {
    const a = async () => {
      const response = await fetch(
        `https://min-api.cryptocompare.com/data/v2/histoday?fsym=${id}&tsym=USD&limit=119&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc`
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
    a();
  }, [id]);
  // const radioChange = (e) => {
  //   setChartType(e.target.value);
  //   dataFetchForChart();
  // };

  useEffect(() => {
    setLoading(true);
    try {
      const dataFetch = async () => {
        let n;
        n = await nameurl.replace(/%20/g, " ");
        const res = await fetch(
          `https://api.coinpaprika.com/v1/coins/${ticker}-${n}`
        );

        const data = await res.json();
        setCoin(data);
        checkStatus(res);
        dataFetchForChart();
      };
      dataFetch();

      setLoading(false);
    } catch (e) {
      console.log(e);
    }
  }, [dataFetchForChart, nameurl, ticker]);

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
    <div className="detail-page ">
      <div className="detail card">
        <h1>{coin.name}</h1>
        <h2>${coin.symbol}</h2>
        <h2> Rank {coin.rank}</h2>
        <p>{coin.description}</p>
        <h2>{coin.proof_type}</h2>
        <h3>Hashing Algo : {coin.hash_algorithm}</h3>
      </div>
      <div className="chart-panel card">
        {/* <form onChange={radioChange}>
            <input type="radio" id="day" name="chartType" value="day" /> {" "}
          <label for="day">Day</label>
            <input type="radio" id="hour" name="chartType" value="hour" /> {" "}
          <label for="hour">Hourly</label>
            <input type="radio" id="minute" name="chartType" value="Minute" /> {" "}
          <label for="minute">Minute</label>
        </form> */}

        <Cryptochart
          coinData={coinData}
          coinTimes={coinTimes}
          coinPrices={coinPrices}
        />
      </div>
    </div>
  );
}

export default CryptoDetail;

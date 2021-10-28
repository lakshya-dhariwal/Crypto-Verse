import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cryptochart from "./Cryptochart";

function CryptoDetail() {
  let { id } = useParams();

  const [coin, setCoin] = useState([]);
  const [coinHist, setCoinHist] = useState([]);
  const key = "WPJDLMCJMMZNBSCM";

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    try {
      const dataFetch = async () => {
        const res = await fetch(`https://api.coinpaprika.com/v1/coins/${id}`);
        const data = await res.json();
        setCoin(data);
      };
      dataFetch();
      const dataFetchForChart = async () => {
        const res = await fetch(
          `https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_WEEKLY&symbol=BTC&market=USD&apikey=${key}`
        );
        const data = await res.json();

        setCoinHist(data["Time Series (Digital Currency Weekly)"]);
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

      <Cryptochart coinHist={coinHist} />
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

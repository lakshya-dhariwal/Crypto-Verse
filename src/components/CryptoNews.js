import React, { useEffect, useState } from "react";
import NewsCard from "./NewsCard";
function Cryptonews() {
  const [news, setNews] = useState([]);

  function checkStatus(response) {
    if (response.ok) {
      return Promise.resolve(response);
    } else {
      return Promise.reject(new Error(response.statusText));
    }
  }
  useEffect(() => {
    try {
      const dataFetch = async () => {
        const response = await fetch(
          `    https://min-api.cryptocompare.com/data/v2/news/?lang=EN&api_key=e142b3392bca0be49cbbf828827d35fb69a9313f5b2ad7d9ad21d1d0093498dc`
        );
        const json = await response.json();
        const data = json.Data;
        setNews(data);
        checkStatus(response);
      };
      dataFetch();
    } catch (e) {
      console.log(e);
    }
  }, []);
  console.log(news);
  return (
    <>
      <div className="news">
        <h1> CryptoNews</h1>
        {news.map((e) => {
          return <NewsCard newsItem={e} />;
        })}
      </div>
    </>
  );
}

export default Cryptonews;

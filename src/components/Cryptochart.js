import React, { useEffect, useState } from "react";
import Chart from "./Chart.js";
function Cryptochart({ coinHist }) {
  const [data, setData] = useState([]);
  console.log(coinHist);
  
  useEffect(() => {
    try {
      for (var key in coinHist) {
        if (coinHist.hasOwnProperty(key)) {
          console.log(coinHist[key]);
        }
      }
    } catch (e) {
      console.log(e);
    }
  }, []);
  return (
    <div>
      <div></div>
    </div>
  );
}

export default Cryptochart;

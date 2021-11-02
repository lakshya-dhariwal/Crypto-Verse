import React from "react";
import LineChart from "./LineChart.js";
function Cryptochart({ coinData, coinTimes, coinPrices }) {
  return (
    <div>
      <div>
        <LineChart times={coinTimes} prices={coinPrices} />
      </div>
    </div>
  );
}

export default Cryptochart;

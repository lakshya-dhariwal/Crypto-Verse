import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
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

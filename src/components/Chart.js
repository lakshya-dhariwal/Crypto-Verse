import React, { useEffect, useState } from "react";

function Chart({ data }) {
  const [dataArr, setDataArr] = useState([]);
  const [time, setTime] = useState([]);
  const [low, setLow] = useState([]);
  const [high, setHigh] = useState([]);
  //   const currentData = {...}
  console.log(data);
  useEffect(() => {
    setDataArr(data.Data);
    setTimeout(() => {
      console.log(dataArr.Data);
    }, 5000);
  }, []);
  return <div></div>;
}

export default Chart;

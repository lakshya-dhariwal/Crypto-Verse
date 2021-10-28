import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({ times, prices }) {
  const data = {
    labels: times,
    datasets: [
      {
        label: "Price",
        data: prices,
        fill: true,
        backgroundColor: "rgb(228,210,249)",
        borderColor: "rgba(144,9,183, 0.7)",
      },
    ],
  };

  const options = {
    title: {
      display: false,
      text: "Heckin Chart!",
      fontSize: 35,
    },

    legend: {
      display: false,
    },

    layout: {
      padding: {
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    scales: {
      y: {
        beginAtZero: false,
      },
    },
    responsive: true,
    elements: {
      point: {
        radius: 1,
        hoverRadius: 5,
        hitRadius: 6,
      },
    },
    tooltips: {
      callbacks: {
        //This removes the tooltip title
        title: function () {},
      },
      //this removes legend color
      displayColors: false,
      yPadding: 10,
      xPadding: 10,
      position: "nearest",
      caretSize: 10,
      backgroundColor: "rgba(255,255,255,.9)",
      bodyFontSize: 15,
      bodyFontColor: "#303030",
    },
  };

  return (
    <>
      <div className="header">
        <h1 className="title">Price Chart</h1>
        <Line data={data} options={options} />
      </div>
    </>
  );
}

export default LineChart;

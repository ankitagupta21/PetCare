import React, { useState, useEffect } from "react";

import "./HealthChart.css";
import Chart from "react-apexcharts";

import { TbHeartBolt } from "react-icons/tb";
import { RiPulseLine } from "react-icons/ri";
import { TbTemperature } from "react-icons/tb";
import { AiOutlineFire } from "react-icons/ai";

const HealthChart = () => {
  const [timeframe, setTimeframe] = useState("monthly");
  const [titleIndex, setTitleIndex] = useState(0);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeout(() => {
        fetch("/healthData.json")
          .then((response) => response.json())
          .then((data) => {
            setData(data);
          })
          .catch((error) => console.log(error));
      }, 2000);
    };
    fetchData();
  }, []);

  const handleTimeframeChange = (e) => {
    setTimeframe(e.target.value);
  };

  const handleTitleChange = (index) => {
    setTitleIndex(index);
  };

  if (!data.length) {
    return <div>Loading...</div>;
  }

  const options = {
    chart: {
      id: "area-chart",
      toolbar: {
        show: false,
      },
    },
    xaxis: {
      categories: Object.keys(data[titleIndex][timeframe]),
      labels: {
        style: {
          fontSize: "1vw",
          fontWeight: 500,
          color: "rgba(11, 28, 51, 0.7)",
        },
      },
    },
    series: [
      {
        name: data[titleIndex].title,
        data: Object.values(data[titleIndex][timeframe]),
      },
    ],
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "straight",
      width: 2,
      colors: ["rgb(55, 136, 229)"],
    },
    fill: {
      type: "gradient",
      colors: ["rgb(55, 136, 229)"],
    },
  };

  return (
    <div className="HealthChart">
      <div className="Chart-header">
        <p>HEALTH MONITORING</p>
        <div className="dropdown">
          <select value={timeframe} onChange={handleTimeframeChange}>
            <option value="monthly">Monthly</option>
            <option value="yearly">Yearly</option>
          </select>
        </div>
      </div>

      <div className="Options">
        {data.map((item, index) => (
          <div
            className={index === titleIndex ? "Option active" : "Option"}
            key={index}
            onClick={() => handleTitleChange(index)}
          >
            {index === 0 ? (
              <TbHeartBolt />
            ) : index === 1 ? (
              <RiPulseLine />
            ) : index === 2 ? (
              <TbTemperature />
            ) : (
              <AiOutlineFire />
            )}
            <p>{item.title}</p>
          </div>
        ))}
      </div>
      <Chart
        options={options}
        series={options.series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default HealthChart;

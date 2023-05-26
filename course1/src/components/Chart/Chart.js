import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  // const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  // const totalMaximum = dataPointValues.reduce((acc, value) => acc + value, 0);

  // Method Chain
  const totalMaximum = dataPoints
    .map((dataPoint) => dataPoint.value)
    .reduce((acc, value) => acc + value, 0);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
};

export default Chart;

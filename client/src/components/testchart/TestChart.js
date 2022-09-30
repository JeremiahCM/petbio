import React from "react";
import "./styles.css";

import { Line } from 'react-chartjs-2';

export default function TestChart() {
  return (
    <div className="chart">
      <Line
  datasetIdKey='id'
  data={{
    labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
    datasets: [
      {
        data: [1,1,1],
      },
    ],
  }}
/>
    </div>
  );
  
}

import React from "react";
import "./petWeight.css";

import { Line } from "react-chartjs-2";

export default function PetWeight() {
  return (
    <div className="chart">
      <Line
        datasetIdKey="id"
        data={{
          labels: [
            "Jan",
            "Feb",
            "Mar",
            "Apr",
            "May",
            "Jun",
            "Jul",
            "Aug",
            "Sep",
            "Oct",
            "Nov",
            "Dec",
          ],
          datasets: [
            {
              borderColor: "#031e45",
              data: [
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
                Math.floor(Math.random() * 10) + 1,
              ],
            },
          ],
        }}
      />
    </div>
  );
}

import React from "react";
import "./AddTracker.css";

import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
export default function TrackerChart() {
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
              label: "Weight",
              borderColor: "#031e45",
              data: [
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
                Math.floor(Math.random() * (9 - 21 + 1) + 21),
              ],
            },
          ],
        }}
      />
      <Link to="/addtracker">
        <button
          className="formTypo btn css-922m9p-MuiButtonBase-root-MuiButton-root"
          sx={{
            mt: 2,
            marginBottom: "5%",
            backgroundColor: "#031e45",
            ":hover": {
              bgcolor: "#47bfaf",
              color: "white",
            },
          }}
          variant="contained"
          type="submit"
        >
          Return
        </button>
      </Link>
    </div>
  );
}

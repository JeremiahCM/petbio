import React from "react";
import "./petWeight.css";
import { Line } from "react-chartjs-2";
import { Link } from "react-router-dom";
var RandomNumber = [...Array(12)].map(
  (e) => ~~(Math.random() * (9 - 21 + 1) + 21)
);
export default function WeightChart() {
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
                RandomNumber[0],
                RandomNumber[1],
                RandomNumber[2],
                RandomNumber[3],
                RandomNumber[4],
                RandomNumber[5],
                RandomNumber[6],
                RandomNumber[7],
                RandomNumber[8],
                RandomNumber[9],
                RandomNumber[10],
                RandomNumber[11],
              ],
            },
          ],
        }}
      />
      <Link to="/weightform">
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

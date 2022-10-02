import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

import Event from "./Event";

function createData(
  Time,
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
) {
  return {
    Time,
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday,
  };
}

export default function DisplayTable({ calendarEvents }) {
  let rows = [];
  rows.push(
    createData("12AM", "---", "---", "---", "---", "---", "---", "---")
  );
  for (let i = 1; i < 12; i++) {
    rows.push(
      createData(
        i.toString() + "AM",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---"
      )
    );
  }
  rows.push(
    createData("12PM", "---", "---", "---", "---", "---", "---", "---")
  );
  for (let i = 1; i < 12; i++) {
    rows.push(
      createData(
        i.toString() + "PM",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---",
        "---"
      )
    );
  }
  calendarEvents.forEach(function (item) {
    let dateArray = item[3].$d.toString().split(" ");
    // eslint-disable-next-line array-callback-return
    rows.map(function (row) {
      if (dateArray[4].split(":")[0] > 12) {
        if (
          row.Time.includes(
            (parseInt(dateArray[4].split(":")[0]) - 12).toString() + "PM"
          )
        ) {
          if (dateArray[0] === "Mon") {
            row.Monday = <Event item={item} />;
          } else if (dateArray[0] === "Tue") {
            row.Tuesday = <Event item={item} />;
          } else if (dateArray[0] === "Wed") {
            row.Wednesday = <Event item={item} />;
          } else if (dateArray[0] === "Thu") {
            row.Thursday = <Event item={item} />;
          } else if (dateArray[0] === "Fri") {
            row.Friday = <Event item={item} />;
          } else if (dateArray[0] === "Sat") {
            row.Saturday = <Event item={item} />;
          } else if (dateArray[0] === "Sun") {
            row.Sunday = <Event item={item} />;
          }
        }
      } else {
        if (
          row.Time.includes(
            parseInt(dateArray[4].split(":")[0]).toString() + "AM"
          )
        ) {
          if (dateArray[0] === "Mon") {
            row.Monday = <Event item={item} />;
          } else if (dateArray[0] === "Tue") {
            row.Tuesday = <Event item={item} />;
          } else if (dateArray[0] === "Wed") {
            row.Wednesday = <Event item={item} />;
          } else if (dateArray[0] === "Thu") {
            row.Thursday = <Event item={item} />;
          } else if (dateArray[0] === "Fri") {
            row.Friday = <Event item={item} />;
          } else if (dateArray[0] === "Sat") {
            row.Saturday = <Event item={item} />;
          } else if (dateArray[0] === "Sun") {
            row.Sunday = <Event item={item} />;
          }
        }
      }
    });
  });

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 1000 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Time</TableCell>
            <TableCell align="right">Monday</TableCell>
            <TableCell align="right">Tuesday</TableCell>
            <TableCell align="right">Wednesday</TableCell>
            <TableCell align="right">Thursday</TableCell>
            <TableCell align="right">Friday</TableCell>
            <TableCell align="right">Saturday</TableCell>
            <TableCell align="right">Sunday</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.Time}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.Time}
              </TableCell>
              <TableCell align="right">{row.Monday}</TableCell>
              <TableCell align="right">{row.Tuesday}</TableCell>
              <TableCell align="right">{row.Wednesday}</TableCell>
              <TableCell align="right">{row.Thursday}</TableCell>
              <TableCell align="right">{row.Friday}</TableCell>
              <TableCell align="right">{row.Saturday}</TableCell>
              <TableCell align="right">{row.Sunday}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

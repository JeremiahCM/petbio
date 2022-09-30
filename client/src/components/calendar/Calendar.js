import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import "./Calendar.css";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import DisplayTable from "./DisplayTable";
import Paper from "@mui/material/Paper";

function Calendar() {
  const [calendarEvents, setCalendarEvent] = React.useState([]);

  const handleAddEvent = (props) => {
    setCalendarEvent((calendarEvents) => [...calendarEvents, props]);
  };

  const handleDeleteEvent = (props) => {
    const index = calendarEvents.indexOf(props);
    if (index > -1) {
      setCalendarEvent((calendarEvents) =>
        calendarEvents.filter((img, i) => i != index)
      );
    }
  };

  return (
    <Paper className="FeedingTracker">
      <Typography
        className="formHeader"
        sx={{ mt: 2, marginTop: "2.5%", color: "#47bfaf" }}
      >
        Feeding Tracker
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
          }}
        >
          <ButtonGroup
            variant="outlined"
            aria-label="outlined button group"
            sx={{ mt: 2, marginTop: "2.5%", color: "#47bfaf" }}
          >
            <AddEvent addCalendarEvent={handleAddEvent} />
            <RemoveEvent
              calendarEvents={calendarEvents}
              removeCalendarEvent={handleDeleteEvent}
            />
          </ButtonGroup>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            "& > *": {
              m: 1,
            },
            height: "70vh",
          }}
        >
          <DisplayTable
            calendarEvents={calendarEvents}
            className="CalendarTable"
          />
        </Box>
      </Grid>
    </Paper>
  );
}

export default Calendar;

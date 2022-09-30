import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import Typography from "@mui/material/Typography";

import "./Calendar.css";
import AddEvent from "./AddEvent";
import RemoveEvent from "./RemoveEvent";
import DisplayTable from "./DisplayTable";

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
    <Box className="Calendar">
      <Typography variant="h1">
        Calendar Tracker
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
              variant="contained"
              aria-label="outlined primary button group"
            >
              <AddEvent addCalendarEvent={handleAddEvent} />
              <RemoveEvent
                calendarEvents={calendarEvents}
                removeCalendarEvent={handleDeleteEvent}
              />
            </ButtonGroup>
          </Box>
          <DisplayTable calendarEvents={calendarEvents} />
        </Grid>
      </Typography>
    </Box>
  );
}

export default Calendar;

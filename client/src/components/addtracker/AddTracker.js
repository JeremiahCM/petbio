import React from "react";
import "./AddTracker.css";
import { Grid, TextField, Typography } from "@mui/material";
import { Link, BrowserRouter as Router } from "react-router-dom";
import Paper from "@mui/material/Paper";
export default function AddTracker() {
  const tfStyle = {
    "& .MuiOutlinedInput-root": {
      color: "#031e45",
      fontFamily: "Montserrat",
      "&.Mui-focused fieldset": {
        borderColor: "#031e45",
      },
      "&:hover fieldset": {
        borderColor: "#031e45",
      },
    },
    minWidth: "320px",
  };
  return (
    <Paper className="bio-form" component="form">
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography className="formHeader" sx={{ mt: 2, marginTop: "5%", color: "#47bfaf" }}>
          Enter Tracker Name
        </Typography>
        <TextField
          sx={tfStyle}
          margin="normal"
          type="string"
          label="Name"
          name="name"
          autoFocus
        />
        <Link to="/trackerchart">
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
            Generate
          </button>
        </Link>
      </Grid>
    </Paper>
  );
}

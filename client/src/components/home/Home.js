import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import { Button, Grid } from "@mui/material";
import homeLogo from "../../images/PetBioLogo.png";
import Typography from "@mui/material/Typography";
import "./home.css";

function Home({ toggleDrawer }) {
  return (
    <Box sx={{ flexGrow: 1 }} className="gradient">
      <Grid>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          fullWidth
          sx={{
            height: "100vh",
            width: "100vw",
            bottom: "0",
            boxShadow: "0",
            bgcolor: "none",
          }}
        >
          <img src={homeLogo} alt="" className="homeLogo" />
          <Typography
            className="typH"
            sx={{ marginBottom: "1%", fontSize: "43px", color: "White" }}
          >
            What we do?
          </Typography>
          <Typography
            className="typB"
            sx={{ marginBottom: "1%", fontSize: "24px", color: "White" }}
          >
            PetBio provides everything you need, in one place, to log and track
            your pets health and other useful information which can be used as a
            tool to help aid in your understanding of your pets needs
          </Typography>
          <Button
            type="submit"
            width="50%"
            variant="contained"
            onClick={toggleDrawer("right", true)}
            sx={{
              mt: 3,
              mb: 2,
              backgroundColor: "#47bfaf",
              ":hover": {
                bgcolor: "#031e45",
                color: "white",
              },
              fontSize: "32px",
            }}
          >
            Explore
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
}

export default Home;

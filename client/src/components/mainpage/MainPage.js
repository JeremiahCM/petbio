import React from "react";
import { Helmet } from "react-helmet";
import Box from "@mui/material/Box";
import { Grid } from "@mui/material";
import NavBar from "../navbar/navbar";
import "./MainPage.css";
import BackgroundImage from "../backgrounds/Background";
import BackgroundImage2 from "../backgrounds/Background-2";

function MainPage({ children, toggleDrawer, state }) {
  return (
    <Box className="App">
      <Helmet>
        <title>Home | PetBio</title>
      </Helmet>
      <BackgroundImage />
      <BackgroundImage2 />
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <NavBar toggleDrawer={toggleDrawer} state={state} className="Navbar" />
      </Grid>
      <Grid
        className="content"
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{ bgcolor: "white", height: "100vh", color: "black" }}
      >
        <Box sx={{ zIndex: 1 }}>{children}</Box>
      </Grid>
    </Box>
  );
}

export default MainPage;

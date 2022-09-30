import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import NavBar from '../navbar/NavBar'
import {Helmet} from 'react-helmet';
import Paper from "@mui/material/Paper";



function Home() {
  return (
    <Box className="App">
      <Helmet>
        <title>Home |  PetBio</title>
        </Helmet>
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
        </Grid>
        <Grid className="content"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{bgcolor: "white", height: "100vh",color: "black"}}>
        </Grid>
    </Box>
  );
}

export default Home;

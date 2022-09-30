import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import NavBar from '../navbar/NavBar'
import  './MainPage.css';
import {Helmet} from 'react-helmet';
import Paper from "@mui/material/Paper";
import TestChart from "../testchart/TestChart";


function MainPage({ children }) {
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
          <NavBar className="Navbar"/>
        </Grid>
        <Grid className="content"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
<<<<<<< HEAD
          sx={{bgcolor: "white", height: "100vh",color: "black"}}>

            {children}
=======

          sx={{bgcolor: "white", height: "100vh",color: "black"}}
        >
          {children}
>>>>>>> 47d49439aaaceb77dd694d986fb969c0e34734c3

        </Grid>
    </Box>
  );
}

export default MainPage;

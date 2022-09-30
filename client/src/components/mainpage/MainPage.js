import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import Navbar from '../navbar/Navbar'
import  './MainPage.css';

const tfStyle = {
    "& .MuiOutlinedInput-root": {
        color: "#47bfaf",
        fontFamily: 'Montserrat',
      "&.Mui-focused fieldset": {
        borderColor: "#47bfaf"
      },
      '&:hover fieldset': {
        borderColor: '#47bfaf',
      },
    }
  } 

function MainPage() {
  return (
    <Box className="App">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
          <Navbar className="Navbar"/>
        </Grid>
        <Grid className="content"
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{bgcolor: "white", height: "100vh"}}>
        </Grid>
    </Box>
  );
}

export default MainPage;

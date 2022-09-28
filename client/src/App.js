import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import MainLogo from './components/logo/logo';
import Sidebar from './components/sidebar/sidebar'
import './App.css'

function App() {
  return (
    <Box className="App" style={{backgroundColor: '#031e45'}}>
      <MainLogo/>
      <Sidebar/>
      <Typography variant="h1">
        PetBio
      </Typography>
    </Box>
  );
}

export default App;

import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box, Typography } from '@mui/material';
import Landing from './components/landing/Landing'

import PetForm from './components/PetForm';
import PetView from './components/PetView';

function App() {

  return (
    <Box className="App">
        <Typography variant="h1">
          PetBio
        </Typography>
        <Box className="form" sx={{backgroundColor: "grey"}}>
          <PetForm>
          </PetForm>
        </Box>
        <Routes>
          <Route exact path="/" element={<PetView />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/petform" element={<PetForm />} />
        </Routes>
    </Box>
  );
}

export default App;
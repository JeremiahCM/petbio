import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Landing from './components/landing/Landing'

import PetForm from './components/petForm/PetForm';
import PetView from './components/petView/PetView';

function App() {

  return (
    <Box className="App">
        <Routes>
          <Route exact path="/" element={<PetView />} />
          <Route exact path="/landing" element={<Landing />} />
          <Route exact path="/petform" element={<PetForm />} />
        </Routes>
    </Box>
  );
}

export default App;
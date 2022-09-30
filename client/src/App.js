import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Landing from './components/landing/Landing'
import MainPage from './components/mainpage/MainPage'
import PetForm from "./components/petForm/PetForm";
import PetView from "./components/petView/PetView";

function App() {
  const [isSignedIn, setSignIn] = React.useState(false)
  
  if (isSignedIn === false) {
    return (
          <Landing signedIn={setSignIn}/>
    );
  }
  return (
    <MainPage>
      <Routes>
        <Route exact path="/petform" element={<PetForm/>}/>
        <Route exact path="/petview" element={<PetView/>}/>
      </Routes>
    </MainPage>
  );

  
}

export default App;
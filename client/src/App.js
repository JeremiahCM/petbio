import React from "react";
import { Route, Routes } from "react-router-dom";
import { Box } from '@mui/material';
import Landing from './components/landing/Landing'
import MainPage from './components/mainpage/MainPage'

function App() {
  const [isSignedIn, setSignIn] = React.useState(false)
  
  if (isSignedIn === false) {
    return (
          <Landing signedIn={setSignIn}/>
    );
  }
  return (
    <MainPage />
  );
}

export default App;
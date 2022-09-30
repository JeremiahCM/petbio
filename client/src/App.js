import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import MainPage from "./components/mainpage/MainPage";
import AccountPage from "./components/accountpage/AccountPage";
import PetForm from "./components/petForm/PetForm";
import PetView from "./components/petView/PetView";

function App() {
  const [isSignedIn, setSignIn] = React.useState(false);

  if (isSignedIn === false) {
    return <Landing signedIn={setSignIn} />;
  }
  return (
    <MainPage>
      <Routes>
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/add-a-pet" element={<PetForm />} />
        <Route exact path="/view-pet" element={<PetView />} />
      </Routes>
    </MainPage>
  );
}

export default App;

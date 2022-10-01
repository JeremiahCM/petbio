import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/landing/Landing";
import MainPage from "./components/mainpage/MainPage";
import AccountPage from "./components/accountpage/AccountPage";

import PetForm from "./components/petForm/PetForm";
import PetView from "./components/petView/PetView";
import PetFeeding from "./components/petFeeding/PetFeeding";
import WeightChart from "./components/petWeight/WeightChart";
import WeightForm from "./components/petWeight/WeightForm";
import Home from './components/home/Home'
import { Navigate } from "react-router-dom";
import AddTracker from "./components/addtracker/AddTracker";
import TrackerChart from "./components/addtracker/TrackerChart";
function App() {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    console.log(anchor)
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const [isSignedIn, setSignIn] = React.useState(false);

  if (isSignedIn === false) {
    return <Landing signedIn={setSignIn} />;
  }
  return (
    <MainPage toggleDrawer={toggleDrawer} state={state}>
      <Routes>
          <Route
              path="*"
              element={<Navigate to="/home" replace />}
          />
        <Route exact path="/account" element={<AccountPage />} />
        <Route exact path="/add-a-pet" element={<PetForm />} />
        <Route path="/view-pet/:id" element={<PetView />} />
        <Route exact path="/petfeeding" element={<PetFeeding />} />
        <Route exact path="/weightform" element={<WeightForm />} />
        <Route exact path="/weightchart" element={<WeightChart />} />
        <Route exact path="/addtracker" element={<AddTracker />} />
        <Route exact path="/trackerchart" element={<TrackerChart />} />
        <Route exact path="/home" element={<Home toggleDrawer={toggleDrawer}/>} />
      </Routes>
    </MainPage>

  );
}

export default App;

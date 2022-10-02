import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import NavDrawer from "../drawer/NavDrawer";
import MainLogo from "../logo/logo";
import "./NavBar.css";

export default function Navbar({ toggleDrawer, state }) {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white" }} className="NavbarToolbar">
      <AppBar
        position="static"
        sx={{ flexGrow: 1, bgcolor: "white", boxShadow: "none" }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <MainLogo />
          <NavDrawer toggleDrawer={toggleDrawer} state={state}></NavDrawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

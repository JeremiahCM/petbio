import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import NavDrawer from '../drawer/NavDrawer'
import MainLogo from '../logo/Logo'
import './Navbar.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1, bgcolor: "white"}} className="NavbarToolbar">
      <AppBar position="static" sx={{ flexGrow: 1, bgcolor: "#47bfaf", boxShadow: "none"}}>
        <Toolbar sx={{justifyContent: "space-between"}}>
        <MainLogo/>
          <NavDrawer></NavDrawer>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
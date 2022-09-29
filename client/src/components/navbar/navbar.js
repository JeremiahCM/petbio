import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import MainLogo from '../logo/logo'
import './navbar.css'

export default function Navbar() {
  return (
    <Box sx={{ flexGrow: 1 }} className="NavbarToolbar">
      <AppBar position="static">
        <Toolbar>
        <MainLogo/>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}></Typography>
        <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
        >
            <MenuIcon />
        </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
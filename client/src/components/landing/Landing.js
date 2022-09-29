import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import  './landing.css';
import { Grid, Paper} from "@mui/material";
import logo from './assets/PetBioLogo.png'
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const style = {
    "& .MuiOutlinedInput-root": {
        color: "#47bfaf",
        fontFamily: 'Montserrat',
      "&.Mui-focused fieldset": {
        borderColor: "#47bfaf"
      }
    }
  } 

function Landing() {
  return (
    <Box className="landing">
      <Typography variant="h1">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center">
            <img className="logo" src={logo} alt={"PetBio"} sx={{
                width: "50%"
            }}></img>
            <Paper  sx={{
                backgroundColor: "white",
                width: "25%",
                height: "25%",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
            }}>
            <Typography component="h1" variant="h5" className="heading" sx= {{color: "#47bfaf", fontSize: "42px"}}>
                Sign in
            </Typography>
            <Grid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center">
            <TextField sx={style}
              margin="normal"
              required
              width="50%"
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField sx={style}
              margin="normal"
              required
              width="50%"
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              width="50%"
              variant="contained"
              sx={{ mt: 3, mb: 2, marginBotton: "5%",backgroundColor: "#47bfaf"}}
            >
              Sign In
            </Button>
            </Grid>
            </Paper>
        </Grid>
      </Typography>
    </Box>
  );
}

export default Landing;

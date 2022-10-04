import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import "./landing.css";
import { Grid, Paper } from "@mui/material";
import logo from "./assets/PetBioLogo.png";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material";

const LandingPaper = styled(Paper)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "75vw",
    height: "60vh",
  },
  [theme.breakpoints.down("md")]: {
    width: "85vw",
    height: "70vh",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
    height: "80vh",
  },
}));
const PaperGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "75vw",
    height: "60vh",
  },
  [theme.breakpoints.down("md")]: {
    width: "85vw",
    height: "70vh",
  },
  [theme.breakpoints.down("sm")]: {
    width: "95vw",
    height: "80vh",
  },
}));
const PaperHeading = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    fontSize: "54px",
  },
  [theme.breakpoints.down("md")]: {
    fontSize: "64px",
  },
  [theme.breakpoints.down("sm")]: {
    fontSize: "74px",
  },
}));
const PaperInput = styled(TextField)(({ theme }) => ({
  [theme.breakpoints.down("lg")]: {
    width: "60%",
  },
  [theme.breakpoints.down("md")]: {
    width: "70%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "80%",
  },
}));
const LogoGrid = styled(Grid)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    logo: {
      width: "100%",
    },
  },
  [theme.breakpoints.down("sm")]: {
    logo: {
      width: "100%",
    },
  },
}));
const tfStyle = {
  width: "50%",
  "& .MuiOutlinedInput-root": {
    color: "#47bfaf",
    fontFamily: "Montserrat",
    "&.Mui-focused fieldset": {
      borderColor: "#47bfaf",
    },
    "&:hover fieldset": {
      borderColor: "#47bfaf",
    },
  },
};
function Landing({ signedIn }) {
  return (
    <Box className="landing">
      <Typography variant="h1">
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
        >
          <LogoGrid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{ background: "none", boxShadow: "none" }}
          >
            <img className="logo" src={logo} alt={"PetBio"}></img>
          </LogoGrid>
          <LandingPaper
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor: "white",
              width: "45vw",
              height: "50vh",
              alignItems: "center",
              justifyContent: "center",
              textAlign: "center",
            }}
          >
            <PaperGrid
              container
              spacing={0}
              direction="column"
              alignItems="center"
              justifyContent="center"
            >
              <PaperHeading
                component="h1"
                variant="h5"
                className="heading"
                sx={{
                  color: "#47bfaf",
                  fontSize: "42px",
                  marginTop: "7%",
                }}
              >
                Sign in
              </PaperHeading>
              <PaperInput
                sx={tfStyle}
                margin="normal"
                required
                width="50%"
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <PaperInput
                sx={tfStyle}
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
                sx={{ color: "#47bfaf", fontWeight: "750" }}
                control={<Checkbox value="remember" />}
                label="Remember me"
              />
              <Button
                type="submit"
                width="50%"
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  backgroundColor: "#47bfaf",
                  ":hover": {
                    bgcolor: "#031e45",
                    color: "white",
                  },
                }}
                onClick={() => signedIn(true)}
              >
                Sign In
              </Button>
            </PaperGrid>
          </LandingPaper>
        </Grid>
      </Typography>
    </Box>
  );
}

export default Landing;

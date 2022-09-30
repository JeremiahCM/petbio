import React from "react";
//import { Route, Routes } from "react-router-dom";
import Box from '@mui/material/Box';
import { Grid} from "@mui/material";
import Paper from "@mui/material/Paper";
import { styled } from '@mui/material/styles';
import homeLogo from "../../images/PetBioLogo.png";
import Typography from '@mui/material/Typography';
import './home.css'
function Home() {
return (
<Box sx={{ flexGrow: 1}} className="gradient">
      <Grid>
        <Grid fullWidth sx={{height:"100vh",width:"100vw",bottom: "0", boxShadow: "0", bgcolor: "none"}}>
            <img src={homeLogo} alt="" className="homeLogo"/>
            <Typography>
                What we do?
            </Typography>
            <Typography>
                PetBio provides everything you need, in one place, to log and track your pets health and other useful information which can be used as a tool to help aid in your understanding of your pets needs
            </Typography>
        </Grid>
      </Grid>
</Box>
  );
}

export default Home;

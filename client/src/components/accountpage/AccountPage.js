import { Grid, Typography, Paper, TextField } from "@mui/material";
import "./accountpage.css";
import { Helmet } from "react-helmet";
import { useEffect, useState} from 'react';

const tfStyle = {
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

function AccountPage() {

  return (
    <Paper variant="elevation" elevation={16} sx={{ p: 8 }}>
      <Helmet>
        <title>Account | PetBio</title>
      </Helmet>
      <Typography
        component="h1"
        variant="h5"
        className="heading"
        sx={{ color: "#47bfaf", fontSize: "42px", marginTop: "5%" }}
      >
        Account
      </Typography>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography component="h1" variant="h5">
          Email
        </Typography>
        <TextField
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
      </Grid>
    </Paper>
  );
}

export default AccountPage;

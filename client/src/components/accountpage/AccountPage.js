import { Button, Grid, Typography, Paper, TextField } from "@mui/material";
import "./accountpage.css";
import { Helmet } from "react-helmet";
import { Link } from "react";
import MainPage from "../mainpage/MainPage";

import Home from "../home/Home";

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

        <TextField
          sx={tfStyle}
          margin="normal"
          required
          width="50%"
          id="password"
          label="Password"
          name="password"
          autoComplete="password"
          autoFocus
        />

        <TextField
          sx={tfStyle}
          margin="normal"
          required
          width="50%"
          id="password"
          label="Confirm Password"
          name="password"
          autoComplete="password"
          autoFocus
        />
      </Grid>
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
      >
        Save
      </Button>

      

   
    </Paper>
  );
}

export default AccountPage;

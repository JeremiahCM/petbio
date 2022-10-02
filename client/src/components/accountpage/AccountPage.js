import { Button, Grid, Typography, Paper, TextField } from "@mui/material";
import "./accountpage.css";
import { Helmet } from "react-helmet";
import { useState } from "react";

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
  const [accountData, setAccountData] = useState({
    email: "",
    password: "",
  });

  const [confirmPassword, setConfirmPassword] = useState("");

  const updateConfirmPassword = (e) => {
    setConfirmPassword(e.target.value);
  };

  /**
   * OnChange handler for form inputs.
   * @param {*} e
   */
  const updateAccountData = (e) => {
    if (e.target.className === "password") {
      // TODO: Password encryption

      setAccountData({ ...accountData, [e.target.className]: e.target.value });
    }

    setAccountData({ ...accountData, [e.target.name]: e.target.value });
  };

  async function handleSubmit(e) {
    e.preventDefault();

    const newAccount = { ...accountData };

    if (newAccount.password !== confirmPassword) {
      window.alert("Passwords do not match. Please confirm your password.");
      return;
    }

    await fetch("http://localhost:5000/accounts/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newAccount),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setAccountData({
      email: "",
      password: "",
    });
    setConfirmPassword("");
  }

  return (
    <Paper
      variant="elevation"
      elevation={16}
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 8 }}
    >
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
          value={accountData.email}
          onChange={updateAccountData}
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
          type="password"
          value={accountData.password}
          onChange={updateAccountData}
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
          name="confirm-password"
          type="password"
          value={confirmPassword}
          onChange={updateConfirmPassword}
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

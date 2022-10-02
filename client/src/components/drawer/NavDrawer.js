import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavDrawer.css";
import { Link } from "react-router-dom";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";

import { useEffect, useState } from "react";
import Landing from "../landing/Landing";

export default function NavDrawer({ toggleDrawer, state }) {
  const [dogNames, setDogNames] = useState(null);

  useEffect(() => {
    const fetchDogIDs = async () => {
      const response = await fetch("http://localhost:5000/pets/view-all");
      const json = await response.json();

      if (response.ok) {
        setDogNames(json);
      }
    };

    fetchDogIDs();
  }, []);

  const list = (anchor) => (
    <Box
      className="drawerBox"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{
        width: anchor === "top" || anchor === "bottom" ? "auto" : 225,
        /*bgcolor: "#031e45",*/
        color: "#47bfaf",
        fontWeight: "750",
        backgroundColor: "transparent",
        right: "0",
        marginTop: "7rem",
        textDecoration: "none",
      }}
    >
      <List
        sx={{
          bgcolor: "transparent",
          fontSize: "1.5rem",
          textDecoration: "none",
        }}
      >
        <Link sx={{ fontSize: "1.5rem" }} to="/home">
          <ListItem key="account" sx={{ fontSize: "1.5rem" }}>
            Home
          </ListItem>
        </Link>

        <Link sx={{ fontSize: "1.5rem" }} to="/account">
          <ListItem key="account" sx={{ fontSize: "1.5rem" }}>
            Account
          </ListItem>
        </Link>
        <Link sx={{ fontSize: "1.5rem" }} onClick={<Landing></Landing>}>
          <ListItem
            key="logout"
            sx={{ fontSize: "1.5rem", textDecoration: "none" }}
          >
            Logout
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem key="select-pet" sx={{ fontSize: "1.5rem", width: "100%" }}>
          <FormControl fullWidth>
            <InputLabel
              id="select-pet"
              className="petSelect"
              sx={{ fontSize: "1.5rem" }}
            >
              Select Pet
            </InputLabel>
            <Select
              id="select-pet"
              sx={{ fontSize: "1.5rem", textDecoration: "none" }}
              disableTypography
              primary="Select Pet"
              className="petSelect"
              label="Select Pet"
              labelId="select-pet"
            >
              <Link sx={{ fontSize: "1.5rem" }} to="/add-a-pet">
                <MenuItem key="add-new-pet">Add a new Pet</MenuItem>
              </Link>
              {dogNames &&
                dogNames.map((dogName) => (
                  <Link
                    sx={{ fontSize: "1.5rem" }}
                    to={`/view-pet/${dogName.id}`}
                  >
                    <MenuItem key={dogName.id}>{dogName.name}</MenuItem>
                  </Link>
                ))}
            </Select>
          </FormControl>
        </ListItem>
      </List>
      <List>
        <Link sx={{ fontSize: "1.5rem" }} to="/petfeeding">
          <ListItem
            key="feeding-tracker"
            sx={{ fontSize: "1.5rem", textDecoration: "none" }}
          >
            Feeding Tracker
          </ListItem>
        </Link>
        <Link sx={{ fontSize: "1.5rem" }} to="/weightform">
          <ListItem
            key="weight-tracker"
            sx={{ fontSize: "1.5rem", textDecoration: "none" }}
          >
            Weight Tracker
          </ListItem>
        </Link>
        <ListItem
          key="weight-tracker"
          sx={{ fontSize: "1.5rem", textDecoration: "none" }}
        >
          <Link sx={{ fontSize: "1.5rem" }} to="/addtracker">
            Add Tracker
          </Link>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className="burger">
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <MenuIcon
            sx={{ color: "#47bfaf", height: "10vh", width: "10vh" }}
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
          >
            {anchor}
          </MenuIcon>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            sx={{
              elevation: 0,
              bgcolor: "transparent",
              top: "4rem",
              boxShadow: 0,
              margin: 0,
              fontweight: 500,
              lineheight: "1.5",
              fontSize: "1.2rem",
              display: "block",
            }}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}

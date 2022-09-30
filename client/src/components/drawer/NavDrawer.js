import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import "./NavDrawer.css";
import { Link, BrowserRouter as Router } from "react-router-dom";
import { Select, MenuItem, InputLabel, FormControl } from "@mui/material";


import { useEffect, useState } from "react";
import Landing from "../landing/Landing";



export default function NavDrawer() {
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
  const selStyle = {
    "& $notchedOutline": {
      borderColor: "#47bfaf"
    },
    "&:hover $notchedOutline": {
      borderColor: "#47bfaf"
    },
    "&$focused $notchedOutline": {
      borderColor: "#47bfaf"
    }
  };
  const [dogNames, setDogNames] = useState(null);
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

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
          <ListItem key="account" sx={{ fontSize: "1.5rem" }} button>
            Home
          </ListItem>
        </Link>

        <Link sx={{ fontSize: "1.5rem" }} to="/account">
          <ListItem key="account" sx={{ fontSize: "1.5rem" }} button>
            Account
          </ListItem>
        </Link>
        <Link sx={{ fontSize: "1.5rem" }} onClick={<Landing></Landing>}>
          <ListItem key="logout" sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
            Logout
          </ListItem>
        </Link>
      </List>
      <List>
        <ListItem key="select-pet" sx={{ fontSize: "1.5rem",width: "100%" }} button>
        <FormControl fullWidth>
          <InputLabel id="select-pet" className="petSelect" sx={{ fontSize: "1.5rem"}}>Select Pet</InputLabel>
          <Select
            id="select-pet"
            sx={{ fontSize: "1.5rem", textDecoration: "none"}}
            disableTypography
            primary="Select Pet"
            className="petSelect"
            label="Select Pet"
            labelId="select-pet"
          >
            <MenuItem key="add-new-pet">
              <Link sx={{ fontSize: "1.5rem" }} to="/add-a-pet">
                Add a new Pet
              </Link>
            </MenuItem>
            {dogNames &&
              dogNames.map((dogName) => (
                  <Link
                    sx={{ fontSize: "1.5rem" }}
                    to={`/view-pet/${dogName.id}`}
                  >
                    <MenuItem key={dogName.id}>
                      {dogName.name}
                    </MenuItem>
                  </Link>
              ))}
          </Select>
          </FormControl>
        </ListItem>
      </List>
      <List>
        <Link sx={{ fontSize: "1.5rem" }} to="/petfeeding">
          <ListItem key="feeding-tracker" sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
            Feeding Tracker
          </ListItem>
        </Link>
        <Link sx={{ fontSize: "1.5rem" }} to="/weightform">
          <ListItem key="weight-tracker" sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
            Weight Tracker
          </ListItem>
        </Link>
        <ListItem key="add-a-tracker" sx={{ fontSize: "1.5rem", textDecoration: "none" }} button>
          <ListItemText
            sx={{ fontSize: "1.5rem" }}
            disableTypography
            primary="Add a Tracker"
          />
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

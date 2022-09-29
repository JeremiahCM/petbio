import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import MenuIcon from '@mui/icons-material/Menu';
import './NavDrawer.css'

export default function NavDrawer() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box className="drawerBox"
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 225, 
      /*bgcolor: "#031e45",*/
      color: "#47bfaf",
      fontWeight: "750",
      backgroundColor: "transparent",
      right: "0",
      marginTop: "7rem"}}
    >
      <List sx={{bgcolor: "transparent",fontSize: "1.2rem" }}>
        <ListItem sx={{fontSize: "1.2rem" }} button  >
          <ListItemText sx={{fontSize: "1.2rem" }} disableTypography  primary="Logout"/>
        </ListItem>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText 
            sx={{fontSize: "1.2rem" }}
            disableTypography
            primary="Account"
          />
        </ListItem>
        </List>
        <List>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText
            sx={{fontSize: "1.2rem" }}
            disableTypography
            primary="Switch Pet"
          />
        </ListItem>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText
            sx={{fontSize: "1.2rem" }}
            disableTypography
            primary="View Pet"
          />

        </ListItem>
        </List>
        <List>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText
            sx={{fontSize: "1.2rem" }}
            disableTypography 
            primary="Feeding Tracker"
          />
        </ListItem>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText
            sx={{fontSize: "1.2rem" }}
            disableTypography
            primary="Weight Tracker"
          />
        </ListItem>
        <ListItem sx={{fontSize: "1.2rem" }} button>
          <ListItemText
            sx={{fontSize: "1.2rem" }}
            disableTypography
            primary="Add a Tracker"
          />
        </ListItem>
        <ListItem sx={{fontSize: "1.2rem" }} button>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <div className='burger'>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
            <MenuIcon sx={{color: "#47bfaf", height: "10vh", width: "10vh"}}
            onClick={toggleDrawer(anchor, true)}
            fontSize="large"
            >{anchor}</MenuIcon>
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

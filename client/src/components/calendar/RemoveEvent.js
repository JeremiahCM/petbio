import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";

export default function RemoveEvent({ calendarEvents, removeCalendarEvent }) {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleRemoveEvent = (props) => {
    removeCalendarEvent(props);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Remove Reminder</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Delete Unwanted Reminders</DialogTitle>
        <DialogContent>
          <List>
            {calendarEvents.map((value) => (
              <ListItem
                secondaryAction={
                  <IconButton
                    edge="end"
                    aria-label="delete"
                    onClick={() => handleRemoveEvent(value)}
                  >
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText>{value[0]}</ListItemText>
              </ListItem>
            ))}
          </List>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import dayjs from "dayjs";
import Stack from "@mui/material/Stack";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DateTimePicker } from "@mui/x-date-pickers/DateTimePicker";

export default function AddEvent({ addCalendarEvent }) {
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState(dayjs("2014-08-18T21:11:54"));
  const [title, setTitle] = React.useState("Feeding Time");
  const [notes, setNotes] = React.useState("The required food...");
  let frequency = "One Off";

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleConfirm = (props) => {
    setOpen(false);
    addCalendarEvent(props);
  };

  const handleChangeValue = (newValue) => {
    setValue(newValue);
  };

  const handleChangeTitle = (newValue) => {
    setTitle(newValue.target.value);
  };

  const handleChangeNotes = (newValue) => {
    setNotes(newValue.target.value);
  };

  return (
    <div>
      <Button onClick={handleClickOpen}>Add Reminder</Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>New Reminder</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Title"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChangeTitle}
          />
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Notes"
            type="email"
            fullWidth
            variant="standard"
            onChange={handleChangeNotes}
          />
          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">
              Frequency
            </FormLabel>
            <RadioGroup
              row
              aria-labelledby="demo-row-radio-buttons-group-label"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                value="One Off"
                control={<Radio />}
                label="One Off"
              />
              <FormControlLabel
                value="Weekly"
                control={<Radio />}
                label="Weekly"
              />
              <FormControlLabel
                value="Daily"
                control={<Radio />}
                label="Daily"
              />
            </RadioGroup>
          </FormControl>
          <DialogContentText>Time of Day</DialogContentText>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Stack spacing={3}>
              <DateTimePicker
                label=""
                value={value}
                onChange={handleChangeValue}
                renderInput={(params) => <TextField {...params} />}
              />
            </Stack>
          </LocalizationProvider>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button
            onClick={() => handleConfirm([title, notes, frequency, value])}
          >
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

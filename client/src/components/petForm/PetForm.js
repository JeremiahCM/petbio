import "./PetForm.css";
import dayjs from "dayjs";
import { useEffect, useState } from "react";
import {
  Button,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { useParams, useNavigate } from "react-router";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { Helmet } from "react-helmet";

/**
 * This component gives the user a form they can fill out to add their information for a new pet to the database.
 * When the user submits the form, the information gets sent to the database and saved.
 * @returns
 */
const PetForm = (props) => {
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
    minWidth: "320px",
  };

  const [petData, setPetData] = useState({
    name: "",
    species: "",
    breed: "",
    gender: "",
    birthdate: dayjs(),
    age: 0,
    description: "",
  });

  const params = useParams();
  const navigate = useNavigate();

  /**
   * OnChange handler for form inputs.
   * Calculates age when a new birthdate is selected
   * @param {*} e
   */
  const updatePetData = (e) => {
    if (e.target.className === "birthdate") {
      setPetData({ ...petData, [e.target.className]: e.target.value });
      setPetData({ ...petData, age: calculateAge(e.target.value) });
    }

    setPetData({ ...petData, [e.target.name]: e.target.value });
  };

  const calculateAge = (birthdate) => {
    const currentDate = dayjs();
    const ageHumanYears = currentDate.diff(birthdate, "years");

    return ageHumanYears;
  };

  useEffect(() => {
    async function fetchData() {

      const id = params.id.toString();

      const response = await fetch(
        `http://localhost:5000/pets/view/${params.id.toString()}`
      );

      if (!response.ok) {
        const message = `An error has occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }

      const pet = await response.json();
      if (!pet) {
        window.alert(`Pet with name ${id} not found`);
        navigate("/");
        return;
      }

      setPetData(pet);
    }

    const formAction = props.action;

    if (formAction === "edit") {
      fetchData();
    }
    
    if (formAction === "add") {
      setPetData({
        name: "",
        species: "",
        breed: "",
        gender: "",
        birthdate: dayjs(),
        age: 0,
        description: "",
      });
    }

    return;
  }, [props.action, params.id, navigate])

  /**
   * Send data to database to save when user clicks the submit button on form
   * @param {*} e
   */
  async function handleSubmit(e) {
    e.preventDefault();

    const newPetData = { ...petData };

    await fetch("http://localhost:5000/pets/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPetData),
    }).catch((error) => {
      window.alert(error);
      return;
    });

    setPetData({
      name: "",
      species: "",
      breed: "",
      gender: "",
      birthdate: dayjs(),
      age: 0,
      description: "",
    });
  }

  return (
    <Paper
      className="bio-form"
      variant="elevation"
      elevation={8}
      component="form"
      onSubmit={handleSubmit}
      sx={{ p: 2, mt: 22, pl: 10, pr: 10 }}
    >
      <Helmet>
        <title>Add a Pet | PetBio</title>
      </Helmet>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        justifyContent="center"
      >
        <Typography
          component="h1"
          variant="h5"
          className="heading"
          sx={{ color: "#47bfaf", fontSize: "42px", marginTop: "5%" }}
        >
          {(petData.id) ? "Edit Pet" : "Add a Pet"}
        </Typography>
        <TextField
          sx={tfStyle}
          margin="normal"
          type="string"
          label="Name"
          name="name"
          value={petData.name}
          onChange={updatePetData}
          autoFocus
          autoComplete="off"
        />
        <TextField
          sx={tfStyle}
          margin="normal"
          type="string"
          label="Species"
          name="species"
          value={petData.species}
          onChange={updatePetData}
          autoComplete="off"
        />
        <TextField
          sx={tfStyle}
          margin="normal"
          type="string"
          label="Breed"
          name="breed"
          value={petData.breed}
          onChange={updatePetData}
          autoComplete="off"
        />
        <FormControl margin="normal">
          <InputLabel id="gender-select">Gender</InputLabel>
          <Select
            sx={tfStyle}
            label="Gender"
            name="gender"
            id="gender-select"
            value={petData.gender}
            onChange={updatePetData}
          >
            <MenuItem value="Male">Male</MenuItem>
            <MenuItem value="Female">Female</MenuItem>
          </Select>
        </FormControl>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Birth Date"
            className="birthdate"
            value={petData.birthdate}
            onChange={(newDate) => {
              setPetData({
                ...petData,
                birthdate: newDate,
                age: calculateAge(newDate),
              });
            }}
            renderInput={(params) => (
              <TextField sx={tfStyle} margin="normal" {...params} />
            )}
          />
        </LocalizationProvider>
        <Typography>Description</Typography>
        <TextareaAutosize
          margin="normal"
          label="Description"
          name="description"
          value={petData.description}
          onChange={updatePetData}
          minRows={8}
          maxRows={8}
          style={{ width: 320 }}
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
        >
          {(petData.id) ? "Edit details of Pet" : "Add new Pet"}
        </Button>
      </Grid>
    </Paper>
  );
};

export default PetForm;

import './PetForm.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextareaAutosize, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PetForm = () => {
    const tfStyle = {
        "& .MuiOutlinedInput-root": {
            color: "#47bfaf",
            fontFamily: 'Montserrat',
          "&.Mui-focused fieldset": {
            borderColor: "#47bfaf"
          },
          '&:hover fieldset': {
            borderColor: '#47bfaf',
          },
        },
        "minWidth": "320px"
    }     

    const [petData, setPetData] = useState({
        name: "",
        species: "",
        breed: "",
        gender: "",
        birthdate: dayjs(),
        age: 0,
        description: "",
    });
    
    const updatePetData = (e) => {
        if (e.target.className === "birthdate") {
            setPetData({ ...petData, [e.target.className]: e.target.value});
            
            setPetData({ ...petData, age: calculateAge(e.target.value)});
        }

        setPetData({ ...petData, [e.target.name]: e.target.value});
    }
    
    const calculateAge = (birthdate) => {
        const currentDate = dayjs();
        const ageHumanYears = currentDate.diff(birthdate, 'years');

        return ageHumanYears;
    }

    async function handleSubmit(e) {
        e.preventDefault();

        const newPet = { ...petData };

        await fetch("http://localhost:5000/pets/add", {
            method: "POST",
            headers: {
            "Content-Type": "application/json",
            },
            body: JSON.stringify(newPet),
        })
        .catch(error => {
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
        <Box className="bio-form" component="form" onSubmit={handleSubmit}>
            <Grid
                container
                spacing={0}                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
                direction="column"
                alignItems="center"
                justifyContent="center"
            >
                <Typography>Pet Bio Form</Typography>
                <TextField
                    sx={tfStyle}
                    margin="normal"
                    type="string"
                    label="Name"
                    name="name"
                    value={petData.name}
                    onChange={updatePetData}
                    autoFocus
                />
                <TextField
                    sx={tfStyle}
                    margin="normal"
                    type="string"
                    label="Species"
                    name="species"
                    value={petData.species}
                    onChange={updatePetData}
                />
                <TextField
                    sx={tfStyle}
                    margin="normal"
                    type="string"
                    label="Breed"
                    name="breed"
                    value={petData.breed}
                    onChange={updatePetData}
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
                            setPetData({ ...petData, birthdate: newDate, age: calculateAge(newDate)});
                        }}
                        renderInput={(params) => <TextField sx={tfStyle} margin="normal" {...params} />}
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
                    sx={{ mt: 2 }}
                    variant="contained"
                    type="submit"
                >Add new Pet</Button>
            </Grid>
        </Box>
    )
}

export default PetForm;
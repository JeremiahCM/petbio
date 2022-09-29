import '../styles/bio.css';
import dayjs from 'dayjs';
import { useState } from 'react';
import { Box, Button, FormControl, Grid, InputLabel, MenuItem, Select, TextField, Typography } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

const PetForm = () => {
    const [petData, setPetData] = useState({
        id: "",
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
            id: "",
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
                    margin="normal"
                    type="string"
                    label="Name"
                    name="name"
                    value={petData.name}
                    onChange={updatePetData}
                    autoFocus
                />
                <TextField
                    margin="normal"
                    type="string"
                    label="Species"
                    name="species"
                    value={petData.species}
                    onChange={updatePetData}
                />
                <TextField
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
                        sx={{ minWidth: "120px" }}
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
                        renderInput={(params) => <TextField margin="normal" {...params} />}
                    />
                </LocalizationProvider>
                <Typography>Age: {petData.age}</Typography>
                <TextField
                    margin="normal"
                    label="Description"
                    name="description"
                    value={petData.description}
                    onChange={updatePetData}
                />
                <Button variant="contained" type="submit">Add new Pet</Button>
            </Grid>
        </Box>
    )
}

export default PetForm;
import './PetView.css';
import dayjs from 'dayjs';
import { useEffect, useState } from 'react';
import { Box, Grid, TableContainer, Table, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { useParams, useNavigate } from "react-router"
import React from 'react';
import Helmet from 'react-helmet';

const PetView = () => {
    /*const [petData, setPetData] = useState({
        id: "45",
        name: "Pluto",
        species: "Dog",
        gender: "Male",
        birthdate: dayjs
        age: 8
    })*/

    const [petData, setPetData] = useState({
        id: "",
        name: "",
        species: "",
        breed: "",
        gender: "",
        birthdate: dayjs(),
        age: 0,
        description: "",
    })
    const params = useParams();
    const navigate = useNavigate();

    var drawerId;

    const getDogName = (id) => {
        drawerId = id;
    }

    let petDataKeyValues = Object.entries(petData).map(([key, value]) => ({key,value}));

    useEffect(() => {
        async function fetchData() {
            const name = params.name;
            const response = await fetch(`http://localhost:5000/pets/view/${params.name.toString()}`)

            if (!response.ok) {
                const message = `An error has occurred: ${response.statusText}`;
                window.alert(message);
                return;
            }
        
            console.log(response);

            const pet = await response.json();
            if (!pet) {
                window.alert(`Pet with name ${name} not found`);
                navigate("/");
                return;
            }

            console.log("here");
            console.log(pet);
        
            setPetData(pet);
        }

        fetchData();

        return;
    }, [params.name, navigate]);

    return (
        <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center">
            <Typography variant="h3">{petData.name}{petData.name.charAt(petData.name.length - 1) === 's' ? '\'' : "'s"} Biography</Typography>
            <Box className="pet-view">
                <Helmet>
                    <title>View Pet | PetBio</title>
                </Helmet>
                <TableContainer>
                    <Table sx={{ minWidth: 500 }} aria-label="simple-table">
                    <TableBody>
                        {petDataKeyValues.map((row) => {
                            if (row.key !== "id" && row.key !== "birthdate") {
                                return (
                                    <TableRow
                                        key={row.key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.key}</TableCell>
                                        <TableCell>{row.value}</TableCell>
                                    </TableRow>
                                )
                            }
                            return null;
                        })}
                    </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Grid>
    )
}

export default PetView;
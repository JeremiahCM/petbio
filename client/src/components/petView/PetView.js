import './PetView.css';
import { useEffect, useState } from 'react';
import {
    Box,
    Grid,
    TableContainer,
    Table,
    TableBody,
    TableRow,
    TableCell,
    Typography
} from '@mui/material';
import { useParams, useNavigate } from "react-router"
import React from 'react';
import Helmet from 'react-helmet';

/**
 * This component is used for rendering the pet's details into a table for the user to view.
 * Retrieves the data from our database based on the ID passed through the route links that loads this component.
 * @returns Grid container with pet view header and content table.
 */
const PetView = () => {
    const [petData, setPetData] = useState({
        id: "",
        name: "",
        species: "",
        breed: "",
        gender: "",
        birthdate: "",
        age: 0,
        description: "",
    })
    const params = useParams();
    const navigate = useNavigate();

    /**
     * Converting Pet Data to an array of Key and Value pairs usable for table mapping.
     */
    let petDataKeyValues = Object.entries(petData).map(([key, value]) => ({key,value}));

    const trimDate = (petDataKeyValues) => {
        let dateOfBirth = petDataKeyValues.find(data => data.key === "birthdate").value;
        let index = petDataKeyValues.findIndex(data => data.key === "birthdate");

        dateOfBirth = dateOfBirth.slice(0, dateOfBirth.indexOf('T'));
        petDataKeyValues[index].value = dateOfBirth;
    }

    trimDate(petDataKeyValues);

    /**
     * Retrieve data when user chooses or switches pet to view.
     */
    useEffect(() => {
        async function fetchData() {
            const id = params.id.toString();

            const response = await fetch(`http://localhost:5000/pets/view/${params.id.toString()}`)

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
                            if (row.key !== "_id" && row.key !== "id") {
                                return (
                                    <TableRow
                                        key={row.key}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                                    >
                                        <TableCell>{row.key.charAt(0).toUpperCase() + row.key.slice(1)}:</TableCell>
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
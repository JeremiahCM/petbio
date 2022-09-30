import './PetView.css';
import { useState } from 'react';
import { Box, Grid, TableContainer, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import React from 'react';
import Helmet from 'react-helmet';

const PetView = () => {
    const [petData, setPetData] = useState([{ id: "12", name: "Max", breed: "Dog"}, { id: "13", name: "Oscar", breed: "Dog"}])

    console.log(petData);

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Box className="pet-view">
                <Helmet>
                    <title>View Pet | PetBio</title>
                </Helmet>
                <TableContainer>
                    <TableBody>
                        {petData?.map((value) => (
                            <TableRow
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>
                                    <TableRow>{value.name}</TableRow>
                                </TableCell>
                                
                                
                                <TableCell>{value.breed}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </TableContainer>
            </Box>
        </Grid>
    )
}

export default PetView;
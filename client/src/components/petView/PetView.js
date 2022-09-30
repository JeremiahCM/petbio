import './PetView.css';
import { useState } from 'react';
import { Box, Grid, TableContainer, TableBody, TableRow, TableCell, Typography } from '@mui/material';
import { rootShouldForwardProp } from '@mui/material/styles/styled';
import React from 'react';

const PetView = () => {
    const [petData, setPetData] = useState('')

    return (
        <Grid container spacing={2} direction="column" alignItems="center" justifyContent="center">
            <Box className="pet-view">
                <Typography>Here is text</Typography>
            </Box>
        </Grid>
    )
}

export default PetView;
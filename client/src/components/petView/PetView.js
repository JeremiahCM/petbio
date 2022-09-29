import './PetView.css';
import { Box, Grid, Typography } from '@mui/material';

const PetView = () => {
    return (
        <Grid container spacing={2}>
            <Box className="bio-view">
                <Typography variant="h1">
                    PetBio
                </Typography>
            </Box>
        </Grid>
    )
}

export default PetView;
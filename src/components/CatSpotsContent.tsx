import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { Location } from './Map';

const catSpots: Location[] = [
    {
        name: "Maçka Democracy Park (most cats)",
        description: "Famous cat park with many friendly cats. Perfect for cat watching and relaxation.",
        coordinates: [41.0439, 28.9917]
    },
    {
        name: "Pierre Loti Hill (third place)",
        description: "Historic hilltop with panoramic views and many resident cats.",
        coordinates: [41.0547, 28.9394]
    },
    {
        name: "Fenerbahçe Park (second most cats)",
        description: "Beautiful seaside park with a large cat population. Cats here are well-cared for by locals and enjoy the sea breeze.",
        coordinates: [40.9697, 29.0360]
    },
    {
        name: "Sultanahmet Square (fourth place)",
        description: "Historic area with many friendly cats around Hagia Sophia.",
        coordinates: [41.0054, 28.9768]
    }
];

const CatSpotsContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Cat Spots in Istanbul 🐱
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Map locations={catSpots} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    Istanbul is famous for its cats, and here are some of the best spots to meet our feline friends!
                </Typography>

                <Grid container spacing={3}>
                    {catSpots.map((spot, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <LocationCard location={spot} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default CatSpotsContent; 
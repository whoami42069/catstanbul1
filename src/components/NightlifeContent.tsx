import React from 'react';
import { Grid, Card, Typography, Box, Chip } from '@mui/material';
import { Nightlife, Warning } from '@mui/icons-material';

const nightlifeSpots = [
    {
        name: "Klein",
        type: "Club",
        description: "Popular nightclub with electronic music",
        instagram: "klein.harbiye",
        requirements: "Reservation required, Dress code",
        bestDays: ["Friday", "Saturday"]
    },
    {
        name: "JJ Irish Pub",
        type: "Pub",
        description: "Authentic Irish pub experience",
        instagram: "jj_irishpub_tr",
        requirements: "No special requirements",
        bestDays: ["All week"]
    },
    // Add more from the guide...
];

const NightlifeContent = () => {
    return (
        <Grid container spacing={3}>
            {nightlifeSpots.map((spot, index) => (
                <Grid item xs={12} md={6} key={index}>
                    <Card className="nightlife-card">
                        <Typography variant="h6">{spot.name}</Typography>
                        <Chip
                            icon={<Nightlife />}
                            label={spot.type}
                            size="small"
                            sx={{ mb: 1 }}
                        />
                        <Typography variant="body2">{spot.description}</Typography>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="caption">
                                Instagram: @{spot.instagram}
                            </Typography>
                        </Box>
                        <Box sx={{ mt: 1 }}>
                            <Typography variant="caption">
                                Best Days: {spot.bestDays.join(", ")}
                            </Typography>
                        </Box>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default NightlifeContent; 
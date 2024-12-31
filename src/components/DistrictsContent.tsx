import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { District } from '../types/common';
import { Warning } from '@mui/icons-material';

interface DistrictsContentProps {
    districts: District[];
}

const DistrictsContent: React.FC<DistrictsContentProps> = ({ districts }) => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Istanbul Districts Guide 🏘️
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Map locations={districts} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Box sx={{
                    p: 2,
                    bgcolor: 'rgba(255,0,0,0.1)',
                    borderRadius: 2,
                    border: '1px solid #ff0000'
                }}>
                    <Typography variant="h6" color="error" sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Warning /> Important Safety Warning
                    </Typography>
                    <Typography color="error.dark">
                        The districts marked with ⚠️ are considered dangerous areas. For your safety, please avoid visiting these neighborhoods, especially after dark.
                    </Typography>
                </Box>
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    Each district in Istanbul has its own unique character and charm. Here's your guide to the city's neighborhoods, including important safety information.
                </Typography>

                <Grid container spacing={3}>
                    {districts.map((district, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <LocationCard
                                location={district}
                                extraInfo={
                                    <Box sx={{ mt: 1 }}>
                                        <Typography
                                            variant="body2"
                                            color={district.isRedZone ? "error" : "text.secondary"}
                                            sx={district.isRedZone ? {
                                                bgcolor: 'rgba(255,0,0,0.1)',
                                                p: 1,
                                                borderRadius: 1,
                                                display: 'flex',
                                                alignItems: 'center',
                                                gap: 0.5
                                            } : {}}
                                        >
                                            {district.isRedZone ? (
                                                <>
                                                    <Warning fontSize="small" />
                                                    DANGEROUS AREA - DO NOT VISIT
                                                </>
                                            ) : (
                                                <>
                                                    🏛️ Notable Landmark: {district.landmark}
                                                    <br />
                                                    💰 Price Range: {district.priceRange}
                                                </>
                                            )}
                                        </Typography>
                                    </Box>
                                }
                            />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default DistrictsContent; 
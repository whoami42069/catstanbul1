import React from 'react';
import { Card, CardContent, Typography, Box, Button } from '@mui/material';
import { LocationOn } from '@mui/icons-material';
import type { Location } from './Map';
import { useLocation } from '../context/LocationContext';

interface LocationCardProps {
    location: Location;
    extraInfo?: React.ReactNode;
}

const LocationCard: React.FC<LocationCardProps> = ({ location, extraInfo }) => {
    const { setSelectedLocation } = useLocation();

    return (
        <Card>
            <CardContent>
                <Typography variant="h6" gutterBottom>
                    {location.name}
                </Typography>
                <Box sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    justifyContent: 'space-between',
                    alignItems: { xs: 'stretch', sm: 'flex-start' },
                    gap: 2
                }}>
                    <Box sx={{ flex: 1 }}>
                        <Typography>
                            {location.description}
                        </Typography>
                        {extraInfo && (
                            <Box sx={{ mt: 1 }}>
                                {extraInfo}
                            </Box>
                        )}
                    </Box>
                    <Button
                        variant="contained"
                        startIcon={<LocationOn />}
                        onClick={() => setSelectedLocation(location)}
                        sx={{
                            backgroundColor: '#66FFB2',
                            color: '#000',
                            whiteSpace: 'nowrap',
                            minWidth: { xs: '100%', sm: 'fit-content' },
                            mt: { xs: 1, sm: 0 },
                            '&:hover': {
                                backgroundColor: '#4CD594'
                            }
                        }}
                    >
                        Show on Map
                    </Button>
                </Box>
            </CardContent>
        </Card>
    );
};

export default LocationCard; 
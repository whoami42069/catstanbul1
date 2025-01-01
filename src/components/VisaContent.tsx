import React from 'react';
import { Typography, Box, Paper } from '@mui/material';

const VisaContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Visa Information 🛂
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#66FFB2' }}>
                    Coming Soon
                </Typography>
                <Typography paragraph>
                    This section will be updated soon with detailed information about visa requirements and application processes.
                </Typography>
            </Paper>
        </Box>
    );
};

export default VisaContent; 
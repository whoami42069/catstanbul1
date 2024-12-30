import React from 'react';
import { Box, CircularProgress, Typography } from '@mui/material';

const LoadingState = ({ message = 'Loading...' }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '200px',
            }}
        >
            <CircularProgress color="primary" />
            <Typography sx={{ mt: 2 }}>{message}</Typography>
        </Box>
    );
};

export default LoadingState; 
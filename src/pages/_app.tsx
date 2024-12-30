import React from 'react';
import type { AppProps } from 'next/app';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from '../styles/theme';
import { LocationProvider } from '../context/LocationContext';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <LocationProvider>
                <Component {...pageProps} />
            </LocationProvider>
        </ThemeProvider>
    );
}

export default MyApp; 
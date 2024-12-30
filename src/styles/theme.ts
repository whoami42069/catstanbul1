import { createTheme } from '@mui/material/styles';

export const theme = createTheme({
    palette: {
        mode: 'dark',
        primary: {
            main: '#FFD700',
        },
        secondary: {
            main: '#FF6B6B',
        },
        background: {
            default: '#1a1b1f',
            paper: 'rgba(255,255,255,0.05)',
        },
    },
    components: {
        MuiCard: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(10px)',
                    backgroundColor: 'rgba(255,255,255,0.05)',
                    borderRadius: '12px',
                    border: '1px solid rgba(255,255,255,0.1)',
                    transition: 'all 0.3s ease',
                    '&:hover': {
                        transform: 'translateY(-5px)',
                        borderColor: '#FFD700',
                    },
                },
            },
        },
        MuiChip: {
            styleOverrides: {
                root: {
                    borderRadius: '8px',
                },
            },
        },
    },
    typography: {
        fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontSize: '2.5rem',
            fontWeight: 700,
        },
        h4: {
            fontSize: '1.75rem',
            fontWeight: 600,
        },
    },
}); 
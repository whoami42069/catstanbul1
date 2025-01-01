import React from 'react';
import { Typography, Box, Paper, Grid, Chip, Link } from '@mui/material';
import {
    DirectionsSubway,
    DirectionsBus,
    LocalTaxi,
    DirectionsBoat,
    CreditCard,
    Warning,
    Info,
    Flight,
    Phone,
    Apps
} from '@mui/icons-material';

const TransportationContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Getting Around Istanbul 🚇
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom>
                    Public Transportation Network 🚇
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <Typography paragraph>
                        Istanbul boasts an extensive public transportation network with three main systems:
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6} md={4}>
                            <Link
                                href="https://www.metro.istanbul/en/"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: 'none' }}
                            >
                                <Chip
                                    icon={<DirectionsSubway />}
                                    label="Metro Lines"
                                    sx={{ width: '100%' }}
                                    clickable
                                />
                            </Link>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Box sx={{ position: 'relative' }}>
                                <Link
                                    href="https://iett.istanbul/icerik/metrobus-hatlari"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ textDecoration: 'none' }}
                                >
                                    <Chip
                                        icon={<DirectionsBus />}
                                        label="Metrobüs"
                                        sx={{ width: '100%' }}
                                        clickable
                                    />
                                </Link>
                                <Typography variant="caption" color="error" sx={{ display: 'block', mt: 0.5, textAlign: 'center' }}>
                                    ⚠️ Avoid if new to Istanbul
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sm={6} md={4}>
                            <Link
                                href="https://sehirhatlari.istanbul/en/timetables/domestic-trips/istanbul-ici-hatlar/kadikoy-besiktas-165"
                                target="_blank"
                                rel="noopener noreferrer"
                                sx={{ textDecoration: 'none' }}
                            >
                                <Chip
                                    icon={<DirectionsBoat />}
                                    label="Ferries"
                                    sx={{ width: '100%' }}
                                    clickable
                                />
                            </Link>
                        </Grid>
                    </Grid>
                    <Typography paragraph sx={{ mt: 2 }}>
                        This network covers almost every part of the city. Use Google Maps to plan your routes -
                        it shows all available public transport options and the best routes to your destination.
                    </Typography>
                </Box>

                <Typography variant="h6" gutterBottom>
                    Istanbul Card (Istanbulkart) 💳
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <Box sx={{ p: 2, border: '1px solid rgba(102,255,178,0.3)', borderRadius: 2, mb: 2 }}>
                        <Typography paragraph sx={{ mb: 2 }}>
                            The Istanbulkart is your key to all public transportation in Istanbul:
                        </Typography>
                        <Typography component="div" sx={{ display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                            <Chip size="small" label="Metro" />
                            <Chip size="small" label="Buses" />
                            <Chip size="small" label="Ferries" />
                            <Chip size="small" label="Trams" />
                        </Typography>
                    </Box>
                    <Box sx={{ mt: 2 }}>
                        <Typography variant="subtitle1" gutterBottom sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                            <Apps /> Two Ways to Get Your Card:
                        </Typography>
                        <ol>
                            <li>
                                <Typography paragraph>
                                    <strong>Physical Card:</strong>
                                    <ul>
                                        <li>Available at major metro stations and some convenience stores</li>
                                        <li>Costs around 3-4 dollars</li>
                                        <li>Can be topped up with cash or credit card</li>
                                        <li>No ID needed</li>
                                    </ul>
                                </Typography>
                            </li>
                            <li>
                                <Typography>
                                    <strong>Digital Card:</strong> Download the official Istanbulkart app:
                                    <Link
                                        href="https://apps.apple.com/tr/app/i-stanbulkart-dijital-hesab%C4%B1m/id1352307391?l=tr"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        sx={{ display: 'block', mt: 1, color: '#66FFB2' }}
                                    >
                                        📱 Download Istanbulkart App
                                    </Link>
                                </Typography>
                            </li>
                        </ol>
                        <Typography variant="subtitle2" color="warning.main" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 1 }}>
                            <Info /> Pro Tip: Skip tourist passes - they're overpriced. Regular Istanbulkart is the best value!
                        </Typography>
                    </Box>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Taxis and Ride-Hailing 🚕
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <Typography paragraph>
                        While Istanbul has many taxis, some drivers might overcharge tourists. For a safe and fair ride,
                        always use these reliable apps:
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
                        <Link
                            href="https://apps.apple.com/tr/app/uber-request-a-ride/id368677368"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#66FFB2', textDecoration: 'none' }}
                        >
                            📱 Download Uber App
                        </Link>
                        <Link
                            href="https://apps.apple.com/tr/app/bitaksi-your-taxi/id589500723"
                            target="_blank"
                            rel="noopener noreferrer"
                            sx={{ color: '#66FFB2', textDecoration: 'none' }}
                        >
                            📱 Download BiTaksi App
                        </Link>
                    </Box>
                    <Typography variant="subtitle2" color="error" sx={{ display: 'flex', alignItems: 'center', gap: 1, mt: 2 }}>
                        <Warning /> Important: Uber in Istanbul works with regular taxis - there are no private cars
                    </Typography>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Airport Transportation ✈️
                </Typography>
                <Box>
                    <Typography paragraph>
                        Istanbul has two airports, both located far from the city center:
                    </Typography>
                    <ul>
                        <li>Istanbul Airport (European side)</li>
                        <li>Sabiha Gökçen Airport (Asian side)</li>
                    </ul>

                    <Typography variant="subtitle1" gutterBottom sx={{ mt: 2 }}>
                        Transportation Options:
                    </Typography>
                    <Grid container spacing={3}>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 2, border: '1px solid rgba(102,255,178,0.3)', borderRadius: 2 }}>
                                <Typography variant="subtitle1" gutterBottom sx={{ color: '#66FFB2' }}>
                                    <LocalTaxi /> Taxi
                                </Typography>
                                <Typography>
                                    • Cost: $100-150 to city center
                                </Typography>
                                <Typography>
                                    • Most convenient but expensive
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 2, border: '1px solid rgba(102,255,178,0.3)', borderRadius: 2 }}>
                                <Typography variant="subtitle1" gutterBottom sx={{ color: '#66FFB2' }}>
                                    <DirectionsSubway /> Metro
                                </Typography>
                                <Typography>
                                    • Most affordable option
                                </Typography>
                                <Typography>
                                    • Available from both airports
                                </Typography>
                                <Typography>
                                    • Use Istanbulkart
                                </Typography>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <Box sx={{ p: 2, border: '1px solid rgba(102,255,178,0.3)', borderRadius: 2 }}>
                                <Typography variant="subtitle1" gutterBottom sx={{ color: '#66FFB2' }}>
                                    <DirectionsBus /> Havaist Bus
                                </Typography>
                                <Typography>
                                    • Comfortable and affordable
                                </Typography>
                                <Typography>
                                    • Regular schedules
                                </Typography>
                                <Link
                                    href="https://hava.ist/sefer-saatleri.php?lang=en"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: '#66FFB2', display: 'block', mt: 1 }}
                                >
                                    Check Timetable →
                                </Link>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>

                <Typography variant="h6" gutterBottom sx={{ mt: 4 }}>
                    Bosphorus Ferries ⛴️
                </Typography>
                <Box>
                    <Typography paragraph>
                        Ferries are not just transportation - they're a great way to see the city:
                    </Typography>
                    <ul>
                        <li>Regular commuter ferries accept Istanbulkart</li>
                        <li>Tourist cruises available from Eminönü or Kabataş</li>
                        <li>Great way to travel between European and Asian sides</li>
                        <li>Enjoy amazing views of the city while crossing</li>
                    </ul>
                    <Typography variant="subtitle2" sx={{ color: '#66FFB2', display: 'flex', alignItems: 'center', gap: 1 }}>
                        <Info /> Pro Tip: Take the ferry during sunset for breathtaking views!
                    </Typography>
                </Box>
            </Paper>
        </Box>
    );
};

export default TransportationContent;
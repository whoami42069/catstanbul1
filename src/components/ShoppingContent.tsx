import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { Location } from './Map';

const shoppingSpots: Location[] = [
    {
        name: "İstiklal Avenue",
        description: "A 1.4-kilometer pedestrian street with a mix of global brands, local shops, and historic passages. Famous for its historic architecture, street performers, and vibrant atmosphere.",
        coordinates: [41.0335, 28.9777]
    },
    {
        name: "Grand Bazaar",
        description: "One of the world's oldest and largest covered markets with over 4,000 shops. Great for traditional items, but be prepared to bargain. Prices can be higher for tourists.",
        coordinates: [41.0108, 28.9680]
    },
    {
        name: "Nişantaşı City's",
        description: "Located in the heart of Nişantaşı luxury district, this mall offers high-quality shopping options. Perfect starting point to explore the surrounding luxury boutiques and designer stores.",
        coordinates: [41.0510758, 28.9926715]
    },
    {
        name: "Zorlu Center",
        description: "Modern luxury shopping mall featuring premium brands, fine dining restaurants, and a performing arts center. Known for its Apple Store and high-end boutiques. Direct connection from Gayrettepe metro station.",
        coordinates: [41.0667, 29.0178]
    },
    {
        name: "Kanyon Shopping Mall",
        description: "The highest quality mall among Özdilek, Metrocity, and Kanyon trio. Architecturally stunning open-air mall with luxury and mainstream brands. Direct connection from Levent metro station.",
        coordinates: [41.0785266, 29.0109726]
    },
    {
        name: "Özdilek Park",
        description: "Modern shopping mall connected to Levent metro station, offering a mix of local and international brands. Part of the Levent shopping district trio.",
        coordinates: [41.0775236, 29.0115683]
    },
    {
        name: "Metrocity",
        description: "Shopping complex with direct access from Levent metro station. Features a variety of stores, restaurants, and entertainment options.",
        coordinates: [41.0762408, 29.0134689]
    },
    {
        name: "Bağdat Avenue",
        description: "A 14-kilometer shopping street on the Asian side, lined with both international and local brands. Known for its cafes, restaurants, and fashion stores.",
        coordinates: [40.9625, 29.0750]
    },
    {
        name: "Spice Bazaar",
        description: "Historic market for spices, Turkish delight, tea, and traditional goods. Better prices than the Grand Bazaar and more authentic atmosphere.",
        coordinates: [41.0165001, 28.9705194]
    },
    {
        name: "Galataport",
        description: "New waterfront development combining shopping, dining, and culture. Features luxury brands and local designers with Bosphorus views.",
        coordinates: [41.0252, 28.9831]
    },
    {
        name: "Akasya Mall",
        description: "Major shopping center on the Asian side with a wide range of brands, entertainment options, and restaurants.",
        coordinates: [41.0016, 29.0557]
    },
    {
        name: "Emaar Square Mall",
        description: "Luxury shopping destination featuring high-end brands, an underwater zoo, and premium entertainment facilities.",
        coordinates: [41.0047, 29.0946]
    }
];

const ShoppingContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Shopping in Istanbul 🛍️
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Map locations={shoppingSpots} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#66FFB2' }}>
                    Shopping Tips 💡
                </Typography>
                <Box sx={{ mb: 3 }}>
                    <Typography paragraph>
                        • Bargaining is expected in bazaars and small shops, but not in malls or branded stores
                    </Typography>
                    <Typography paragraph>
                        • Keep your VPN on for Apple Pay and some international payment systems
                    </Typography>
                    <Typography paragraph>
                        • Most shops accept credit cards, but carry some cash for small vendors
                    </Typography>
                    <Typography paragraph>
                        • All shopping malls in Istanbul operate from 10:00 AM to 10:00 PM daily
                    </Typography>
                    <Typography paragraph>
                        • The Grand Bazaar is closed on Sundays
                    </Typography>
                    <Typography paragraph>
                        • Many major shopping malls have direct metro connections - especially convenient in the Levent area
                    </Typography>
                </Box>
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    From traditional bazaars to modern malls, Istanbul offers diverse shopping experiences. Here are the best shopping destinations in the city:
                </Typography>

                <Grid container spacing={3}>
                    {shoppingSpots.map((spot, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <LocationCard location={spot} />
                        </Grid>
                    ))}
                </Grid>
            </Paper>
        </Box>
    );
};

export default ShoppingContent; 
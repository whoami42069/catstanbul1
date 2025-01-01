import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { Location } from './Map';

interface NightlifeSpot extends Location {
    type: string;
    priceRange: string;
    bestDays: string[];
    instagram?: string;
    specialNote?: string;
}

const nightlifeSpots: NightlifeSpot[] = [
    {
        name: "Klein",
        coordinates: [41.0456327, 28.9859058],
        description: "Popular nightclub with electronic music and vibrant atmosphere",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        instagram: "klein.harbiye",
        specialNote: "Reservation required, Dress code enforced"
    },
    {
        name: "Altın Saatler",
        coordinates: [41.0456327, 28.9859058],
        description: "Same location as Klein (side entrance). After 3 AM, music transitions to Turkish songs",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        specialNote: "Late night spot, Turkish music after 3 AM"
    },
    {
        name: "Scatola",
        coordinates: [41.060345, 29.0366181],
        description: "Upscale nightclub with modern ambiance and sea view",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Thursday", "Friday", "Saturday"],
        instagram: "scatolaistanbul"
    },
    {
        name: "Wu Bomonti",
        coordinates: [41.0571607, 28.9797429],
        description: "Trendy nightclub in the Bomonti area",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        instagram: "wubomonti"
    },
    {
        name: "Alexandra Cocktail Bar",
        coordinates: [41.0672132, 29.0437305],
        description: "Sophisticated cocktail bar with elegant atmosphere and sea view",
        type: "Cocktail Bar",
        priceRange: "$$$",
        bestDays: ["Wednesday", "Thursday", "Friday", "Saturday"],
        instagram: "alexandracocktailbar"
    },
    {
        name: "Arnavutköy Any Cafe & Bar",
        coordinates: [41.0674125, 29.0431043],
        description: "Cozy bar in the historic Arnavutköy district",
        type: "Bar",
        priceRange: "$$",
        bestDays: ["All week"],
        instagram: "anycafebar"
    },
    {
        name: "Otuzyedi Arnavutköy",
        coordinates: [41.0676408, 29.0441695],
        description: "Trendy bar",
        type: "Bar",
        priceRange: "$$$",
        bestDays: ["Thursday", "Friday", "Saturday"],
        instagram: "otuzyediarnavutkoy"
    },
    {
        name: "Efendi",
        coordinates: [41.0513762, 28.9957712],
        description: "Popular nightclub with mixed music and old-school elegant atmosphere(switches to Turkish after midnight)",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        specialNote: "Music becomes Turkish after midnight"
    },
    {
        name: "Şahika",
        coordinates: [41.0348107, 28.9776194],
        description: "LGBT-friendly club with energetic atmosphere",
        type: "LGBT Club",
        priceRange: "$$",
        bestDays: ["Friday", "Saturday"],
        specialNote: "LGBT club, entrance from the right door"
    },
    {
        name: "MiniMuzikhol",
        coordinates: [41.0324805, 28.9845679],
        description: "Intimate venue with live music and performances",
        type: "Music Venue",
        priceRange: "$$",
        bestDays: ["Thursday", "Friday", "Saturday"],
        instagram: "minimuzikhol"
    },
    {
        name: "Gizli Bahçe",
        coordinates: [41.0349203, 28.977859],
        description: "Hidden garden bar with unique atmosphere",
        type: "Bar",
        priceRange: "$$",
        bestDays: ["All week"],
        instagram: "gizlibahceistanbul"
    },
    {
        name: "Gizli Kalsın",
        coordinates: [41.1098429, 29.0584426],
        description: "Secret bar with intimate setting, owner turned his garage into a bar",
        type: "Bar",
        priceRange: "$$$",
        bestDays: ["Thursday", "Friday", "Saturday"],
        instagram: "gizlikalsin"
    },
    {
        name: "Jungle 8",
        coordinates: [41.075168, 29.01545],
        description: "Rooftop club with panoramic views",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        instagram: "jungle8istanbul"
    },
    {
        name: "Ulus 29",
        coordinates: [41.0645581, 29.0320198],
        description: "Upscale venue with city views and fine dining",
        type: "Restaurant & Club",
        priceRange: "$$$",
        bestDays: ["Thursday", "Friday", "Saturday"],
        instagram: "ulus29",
        specialNote: "Fine dining and nightclub experience"
    },
    {
        name: "Kastel",
        coordinates: [41.034677, 28.976735],
        description: "Historic venue with modern nightlife",
        type: "Nightclub",
        priceRange: "$$$",
        bestDays: ["Friday", "Saturday"],
        instagram: "kastel.istanbul"
    }
];

const NightlifeContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Istanbul Nightlife Guide 🌙
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3, bgcolor: 'rgba(102,255,178,0.1)', border: '1px solid rgba(102,255,178,0.3)' }}>
                <Typography variant="h6" gutterBottom sx={{ color: '#66FFB2' }}>
                    ⚠️ Important Entry Requirements
                </Typography>
                <Typography paragraph>
                    Most clubs have strict entry policies. Please note:
                </Typography>
                <ul style={{ marginTop: 0 }}>
                    <li>
                        <Typography>Contact clubs via Instagram for dress code requirements and reservations before visiting</Typography>
                    </li>
                    <li>
                        <Typography>Many clubs have specific group composition requirements:</Typography>
                        <ul>
                            <li>Preferred: 1 male + 1 female or 2 females</li>
                            <li>Groups: Maximum 3 males per 2 females</li>
                            <li>Male-only groups (2+ males): Must be on guest list (contact via Instagram)</li>
                        </ul>
                    </li>
                    <li>
                        <Typography>Getting on the guest list significantly improves entry chances</Typography>
                    </li>
                </ul>
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3, mb: 3 }}>
                <Map locations={nightlifeSpots} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    Istanbul's nightlife scene is as diverse as the city itself. From rooftop bars with Bosphorus views to underground clubs,
                    here are the best spots to experience the city after dark.
                </Typography>

                <Grid container spacing={3}>
                    {nightlifeSpots.map((spot, index) => (
                        <Grid item xs={12} md={6} key={index}>
                            <LocationCard
                                location={spot}
                                extraInfo={
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant="body2" color="text.secondary">
                                            🎭 Type: {spot.type}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            💰 Price Range: {spot.priceRange}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary">
                                            📅 Best Days: {spot.bestDays.join(", ")}
                                        </Typography>
                                        {spot.instagram && (
                                            <Typography variant="body2" color="text.secondary">
                                                📱 Instagram: @{spot.instagram}
                                            </Typography>
                                        )}
                                        {spot.specialNote && (
                                            <Typography variant="body2" color="text.secondary" sx={{
                                                mt: 1,
                                                p: 1,
                                                bgcolor: 'rgba(102,255,178,0.1)',
                                                borderRadius: 1
                                            }}>
                                                ℹ️ {spot.specialNote}
                                            </Typography>
                                        )}
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

export default NightlifeContent; 
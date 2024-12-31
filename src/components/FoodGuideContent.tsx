import React from 'react';
import { Typography, Box, Paper, Grid } from '@mui/material';
import Map from './Map';
import LocationCard from './LocationCard';
import type { Location } from './Map';

interface FoodSpot extends Location {
    cuisine: string;
    priceRange: string;
    specialty: string;
    contact?: string;
}

const foodSpots: Location[] = [
    {
        name: "Karaköy Güllüoğlu",
        coordinates: [41.024886, 28.9809764],
        description: "Best baklava in Istanbul - A historic institution famous for traditional Turkish desserts",
        cuisine: "Turkish Desserts",
        specialty: "Baklava",
        priceRange: "$$",
        contact: "(0212) 249 96 80"
    },
    {
        name: "Alaf 2tek",
        coordinates: [41.0602622, 29.0365668],
        description: "A fusion of Anatolian and modern cuisine",
        cuisine: "Modern Turkish",
        specialty: "Lamb and Jerusalem artichoke",
        priceRange: "$$",
        contact: "0530 979 47 95"
    },
    {
        name: "ATLAS mühürdar 78",
        coordinates: [40.988487, 29.023012],
        description: "Elegant atmosphere with traditional flavors",
        cuisine: "Turkish",
        specialty: "Beef tripe",
        priceRange: "$$",
        contact: "0549 347 10 78"
    },
    {
        name: "Depo Burger",
        coordinates: [41.0510636, 28.9926146],
        description: "Modern burger joint in City's AVM",
        cuisine: "American",
        specialty: "Depo burger and hot dogs",
        priceRange: "$",
        contact: "(0212) 373 29 60"
    },
    {
        name: "Fiko Ocakbaşı",
        coordinates: [41.1214452, 29.0698389],
        description: "Traditional Turkish grill house",
        cuisine: "Turkish Grill",
        specialty: "Mixed grill",
        priceRange: "$$",
        contact: "0532 162 70 01"
    },
    {
        name: "Sur Balık Arnavutköy",
        coordinates: [41.0671964, 29.0436777],
        description: "Seafood restaurant with Bosphorus views",
        cuisine: "Seafood",
        specialty: "Seasonal seafood dishes",
        priceRange: "$$$",
        contact: "(0212) 257 27 40"
    },
    {
        name: "Baran Et Mangal",
        coordinates: [41.0174737, 28.9548024],
        description: "Traditional Turkish grill house",
        cuisine: "Turkish Grill",
        specialty: "Zırh kebab and ribs",
        priceRange: "$ - $$",
        contact: "(0212) 532 66 51"
    },
    {
        name: "Siirt İsmet Büryan Kebap",
        coordinates: [41.0177478, 28.9553557],
        description: "Famous for traditional Siirt cuisine",
        cuisine: "Turkish",
        specialty: "Büryan kebab and perde pilavı",
        priceRange: "$$",
        contact: "(0212) 533 73 73"
    },
    {
        name: "Adana Ocakbaşı",
        coordinates: [41.0519436, 28.9854664],
        description: "Authentic Adana cuisine",
        cuisine: "Turkish Grill",
        specialty: "Uykuluk and adana kebab",
        priceRange: "$$",
        contact: "(0212) 247 01 43"
    },
    {
        name: "Kaizen Ramen Bar",
        coordinates: [41.0442158, 29.0002285],
        description: "Modern Japanese ramen restaurant",
        cuisine: "Japanese",
        specialty: "Beef ramen",
        priceRange: "$$",
        contact: "(0212) 259 20 93"
    },
    {
        name: "Cipriani Istanbul",
        coordinates: [41.0475331, 28.9943335],
        description: "Upscale Italian dining",
        cuisine: "Italian",
        specialty: "Pizza",
        priceRange: "$$$",
        contact: "(0212) 296 99 50"
    },
    {
        name: "Sakhalin Istanbul",
        coordinates: [41.0673901, 29.0177008],
        description: "High-end Japanese cuisine",
        cuisine: "Japanese",
        specialty: "Sashimi",
        priceRange: "$$$",
        contact: "0530 811 88 88"
    },
    {
        name: "Paper Moon",
        coordinates: [41.0761867, 29.0271802],
        description: "Upscale Italian restaurant",
        cuisine: "Italian",
        specialty: "Calzone",
        priceRange: "$$$",
        contact: "(0212) 282 16 16"
    },
    {
        name: "Little Buddha",
        coordinates: [41.0772844, 29.02673],
        description: "Asian fusion cuisine",
        cuisine: "Asian Fusion",
        specialty: "55 varieties of sushi",
        priceRange: "$$",
        contact: "0542 785 10 32"
    },
    {
        name: "Otooto Sushi",
        coordinates: [41.0504581, 28.9889538],
        description: "Premium sushi restaurant",
        cuisine: "Japanese",
        specialty: "Sushi",
        priceRange: "$$$",
        contact: "0530 222 56 06"
    },
    {
        name: "Madera İstanbul",
        coordinates: [41.0484295, 28.9896779],
        description: "Upscale sushi restaurant with dress code",
        cuisine: "Japanese",
        specialty: "Sushi",
        priceRange: "$$$",
        contact: "0536 778 89 20"
    },
    {
        name: "Mahir Lokantası",
        coordinates: [41.0529279, 28.9871923],
        description: "Traditional Turkish restaurant",
        cuisine: "Turkish",
        specialty: "Lahmacun and içli köfte",
        priceRange: "$$",
        contact: "(0212) 234 93 94"
    },
    {
        name: "Tatbak",
        coordinates: [41.05206, 28.9922],
        description: "Classic Turkish restaurant",
        cuisine: "Turkish",
        specialty: "Lahmacun and içli köfte",
        priceRange: "$",
        contact: "(0212) 246 13 06"
    },
    {
        name: "Nişantaşı Başköşe",
        coordinates: [41.0470929, 28.993624],
        description: "Traditional kebab restaurant",
        cuisine: "Turkish Grill",
        specialty: "Adana kebab",
        priceRange: "$$",
        contact: "(0212) 230 38 68"
    },
    {
        name: "Casita",
        coordinates: [41.048595, 28.993747],
        description: "Cozy mantı restaurant",
        cuisine: "Turkish",
        specialty: "Mantı",
        priceRange: "$",
        contact: "(0212) 263 70 07"
    },
    {
        name: "Emek Mantı Evi",
        coordinates: [41.1188399, 29.0673193],
        description: "Famous mantı restaurant",
        cuisine: "Turkish",
        specialty: "Kıtır mantı and çiğ börek",
        priceRange: "$$",
        contact: "(0212) 262 69 81"
    },
    {
        name: "Aztek Club",
        coordinates: [41.0551948, 28.9856525],
        description: "Restaurant and nightclub",
        cuisine: "Turkish Fusion",
        specialty: "Mantı and yaprak sarma",
        priceRange: "$$$",
        contact: "(0212) 247 59 01"
    },
    {
        name: "Çeşme Bazlama Kahvaltı",
        coordinates: [41.0490609, 28.9952362],
        description: "Traditional Turkish breakfast",
        cuisine: "Turkish Breakfast",
        specialty: "Turkish open breakfast",
        priceRange: "$$",
        contact: "(0212) 951 06 91"
    },
    {
        name: "Kandilli Balıkçısı Suna Abla",
        coordinates: [41.074302, 29.058142],
        description: "Casual seafood restaurant with garden",
        cuisine: "Seafood",
        specialty: "Seasonal seafood dishes",
        priceRange: "$$",
        contact: "(0216) 308 45 12"
    },
    {
        name: "Deniz Yıldızı Restaurant",
        coordinates: [41.0504937, 29.0523507],
        description: "Seafood restaurant with Bosphorus view",
        cuisine: "Seafood",
        specialty: "Seafood dishes",
        priceRange: "$$",
        contact: "(0216) 422 80 83"
    },
    {
        name: "Però Yeniköy",
        coordinates: [41.122565, 29.071263],
        description: "Modern cuisine restaurant",
        cuisine: "Modern",
        specialty: "Modern Turkish cuisine",
        priceRange: "$$$",
        contact: "(0212) 223 77 77"
    },
    {
        name: "Gelik Restaurant",
        coordinates: [40.9738919, 28.8740629],
        description: "Traditional meat restaurant with garden",
        cuisine: "Turkish Grill",
        specialty: "Tas kebabı",
        priceRange: "$$",
        contact: "(0212) 560 72 82"
    },
    {
        name: "Ahali Teşvikiye",
        coordinates: [41.0506608, 28.9975195],
        description: "Modern Turkish meyhane",
        cuisine: "Modern Turkish",
        specialty: "Yeni nesil meyhane",
        priceRange: "$$$",
        contact: "0546 202 44 50"
    }
];

const FoodGuideContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Istanbul Food Guide 🍽️
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: { xs: 2, sm: 3 }, mb: 3 }}>
                <Map locations={foodSpots} />
            </Paper>

            <Paper className="content-card" elevation={3} sx={{ p: { xs: 2, sm: 3 } }}>
                <Typography paragraph>
                    Istanbul's culinary scene is as rich and diverse as its history. From street food to fine dining,
                    here are some must-try restaurants that showcase the best of each cuisine.
                </Typography>

                <Grid container spacing={{ xs: 2, sm: 3 }}>
                    {foodSpots.map((spot, index) => (
                        <Grid item xs={12} sm={12} md={6} key={index}>
                            <LocationCard
                                location={spot}
                                extraInfo={
                                    <Box sx={{ mt: 1 }}>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                            👨‍🍳 Cuisine: {spot.cuisine}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                            ⭐ Specialty: {spot.specialty}
                                        </Typography>
                                        <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                            💰 Price Range: {spot.priceRange}
                                        </Typography>
                                        {spot.contact && (
                                            <Typography variant="body2" color="text.secondary" sx={{ fontSize: { xs: '0.875rem', sm: '1rem' } }}>
                                                📞 Contact: {spot.contact}
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

export default FoodGuideContent; 
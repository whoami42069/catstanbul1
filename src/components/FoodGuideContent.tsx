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

const foodSpots: FoodSpot[] = [
    {
        name: "Karaköy Güllüoğlu",
        coordinates: [41.024886, 28.9809764],
        description: "A historic institution since 1949, famous for serving Istanbul's finest baklava. Their traditional recipe and expert craftsmanship create the perfect balance of flaky layers and sweet filling. The pistachio baklava is a must-try, and don't miss their kaymak (clotted cream) pairing.",
        cuisine: "Turkish Desserts",
        specialty: "Baklava",
        priceRange: "$$",
        contact: "(0212) 249 96 80"
    },
    {
        name: "Alaf 2tek",
        coordinates: [41.0602622, 29.0365668],
        description: "An innovative dining experience that beautifully blends traditional Anatolian flavors with modern culinary techniques. The restaurant's warm ambiance and creative presentations make each dish a unique journey through Turkish gastronomy. Their seasonal menu ensures the freshest ingredients.",
        cuisine: "Modern Turkish",
        specialty: "Lamb and Jerusalem artichoke",
        priceRange: "$$",
        contact: "0530 979 47 95"
    },
    {
        name: "ATLAS mühürdar 78",
        coordinates: [40.988487, 29.023012],
        description: "Set in an elegant atmosphere on the Asian side, this restaurant excels in traditional Turkish cuisine with a refined touch. Known for perfectly executed classic dishes and exceptional service. The historic building adds to the authentic dining experience.",
        cuisine: "Turkish",
        specialty: "Beef tripe",
        priceRange: "$$",
        contact: "0549 347 10 78"
    },
    {
        name: "Depo Burger",
        coordinates: [41.0510636, 28.9926146],
        description: "A modern take on American-style burgers in the heart of Nişantaşı. Their handcrafted burgers feature premium local beef and unique sauce combinations. The industrial-chic setting and friendly service make it a favorite among burger enthusiasts.",
        cuisine: "American",
        specialty: "Depo burger and hot dogs",
        priceRange: "$",
        contact: "(0212) 373 29 60"
    },
    {
        name: "Fiko Ocakbaşı",
        coordinates: [41.1214452, 29.0698389],
        description: "An authentic Turkish grill house where you can watch skilled chefs prepare your meal over an open charcoal grill. Famous for their perfectly seasoned kebabs and mezes. The traditional ocakbaşı setting creates a warm, convivial atmosphere perfect for groups.",
        cuisine: "Turkish Grill",
        specialty: "Mixed grill",
        priceRange: "$$",
        contact: "0532 162 70 01"
    },
    {
        name: "Sur Balık Arnavutköy",
        coordinates: [41.0671964, 29.0436777],
        description: "Perched along the Bosphorus in historic Arnavutköy, this seafood restaurant offers both stunning views and exceptional fresh fish. Watch the sunset while enjoying their famous sea bass and seasonal mezes. The terrace seating provides an unforgettable Istanbul dining experience.",
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
        description: "Authentic Adana cuisine (this place is my favorite kebab place in Istanbul)",
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
        description: "Experience a traditional Turkish breakfast at its finest. Famous for their freshly baked bazlama bread and extensive spread of organic breakfast items. The homemade jams, local cheeses, and free-range eggs create an authentic morning feast. Their terrace offers a delightful setting for a leisurely breakfast.",
        cuisine: "Turkish Breakfast",
        specialty: "Turkish open breakfast",
        priceRange: "$$",
        contact: "(0212) 951 06 91"
    },
    {
        name: "Kandilli Balıkçısı Suna Abla",
        coordinates: [41.074302, 29.058142],
        description: "A beloved local seafood spot with a charming garden setting. Run by the legendary Suna Abla, this casual restaurant serves some of the freshest fish on the Asian side. The home-style cooking and family atmosphere make you feel like you're dining at a friend's house.",
        cuisine: "Seafood",
        specialty: "Seasonal seafood dishes",
        priceRange: "$$",
        contact: "(0216) 308 45 12"
    },
    {
        name: "Deniz Yıldızı Restaurant",
        coordinates: [41.0504937, 29.0523507],
        description: "A classic seafood restaurant offering panoramic Bosphorus views and expertly prepared fish dishes. Known for their attentive service and extensive wine list. The sunset views from their terrace create a magical dining atmosphere, especially during summer evenings.",
        cuisine: "Seafood",
        specialty: "Seafood dishes",
        priceRange: "$$",
        contact: "(0216) 422 80 83"
    },
    {
        name: "Però Yeniköy",
        coordinates: [41.122565, 29.071263],
        description: "A sophisticated venue where modern culinary techniques meet Turkish flavors. The innovative menu changes seasonally, showcasing local ingredients in creative ways. The elegant interior design and professional service make it perfect for special occasions.",
        cuisine: "Modern",
        specialty: "Modern Turkish cuisine",
        priceRange: "$$$",
        contact: "(0212) 223 77 77"
    },
    {
        name: "Gelik Restaurant",
        coordinates: [40.9738919, 28.8740629],
        description: "A meat lover's paradise set in a beautiful garden setting. Famous for their traditional tas kebabı slow-cooked to perfection. The spacious garden provides a relaxed atmosphere, and their extensive menu includes both classic Turkish grills and unique house specialties.",
        cuisine: "Turkish Grill",
        specialty: "Tas kebabı",
        priceRange: "$$",
        contact: "(0212) 560 72 82"
    },
    {
        name: "Ahali Teşvikiye",
        coordinates: [41.0506608, 28.9975195],
        description: "A modern interpretation of the traditional Turkish meyhane concept. This trendy spot combines classic mezes with contemporary presentations. The vibrant atmosphere, creative cocktails, and fusion of old and new make it a popular choice for both dining and socializing.",
        cuisine: "Modern Turkish",
        specialty: "Yeni nesil meyhane",
        priceRange: "$$$",
        contact: "0546 202 44 50"
    },
    {
        name: "Kızılkayalar Islak Hamburger",
        coordinates: [41.0358725, 28.9846528],
        description: "A legendary spot in Taksim Square, famous for its unique wet burgers steamed in a garlicy tomato sauce. A must-try Istanbul street food experience that's been satisfying late-night cravings since 1970. The secret sauce recipe and steaming process create an irresistibly soft, flavorful burger.",
        cuisine: "Street Food",
        specialty: "Islak (Wet) Burger",
        priceRange: "$",
        contact: "(0212) 251 13 95"
    },
    {
        name: "Köşkeroğlu Baklava",
        coordinates: [41.0177478, 28.9553557],
        description: "One of Istanbul's premier destinations for authentic baklava, using traditional methods passed down through generations. Their master pastry chefs create perfectly layered, crispy baklava with generous nut fillings. Though a bit far from the center, baklava enthusiasts consider it worth the journey.",
        cuisine: "Turkish Desserts",
        specialty: "Traditional Baklava",
        priceRange: "$$",
        contact: "(0212) 533 73 73"
    },
    {
        name: "İskele Livar Balık",
        coordinates: [41.0672039, 29.0434007],
        description: "A hidden gem in charming Arnavutköy offering fresh seafood with breathtaking Bosphorus views. More affordable than typical seafood restaurants while maintaining high quality. The daily catch is displayed on ice, and their mezes are prepared fresh each morning. The peaceful atmosphere makes it perfect for long, leisurely meals.",
        cuisine: "Seafood",
        specialty: "Fresh Fish",
        priceRange: "$$",
        contact: "(0212) 287 12 12"
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
import React from 'react';
import { Box, Tabs, Tab } from '@mui/material';
import Image from 'next/image';
import {
    LocationOn,
    Warning,
    Restaurant,
    Nightlife,
    Pets,
    Attractions,
    DirectionsSubway,
    ShoppingBag
} from '@mui/icons-material';
import dynamic from 'next/dynamic';
import type { District, SafetyTip } from '../types/common';

const IntroductionContent = dynamic(() => import('../components/IntroductionContent'));
const SafetyContent = dynamic(() => import('../components/SafetyContent'));
const DistrictsContent = dynamic(() => import('../components/DistrictsContent'));
const NightlifeContent = dynamic(() => import('../components/NightlifeContent'));
const FoodGuideContent = dynamic(() => import('../components/FoodGuideContent'));
const CatSpotsContent = dynamic(() => import('../components/CatSpotsContent'));
const ActivitiesContent = dynamic(() => import('../components/ActivitiesContent'));
const TransportationContent = dynamic(() => import('../components/TransportationContent'));
const ShoppingContent = dynamic(() => import('../components/ShoppingContent'));

// Define the data
const safetyTips: SafetyTip[] = [
    { tip: "Always have VPN on your mobile - Discord is banned in Turkey!", icon: Warning },
    { tip: "Use Uber for taxis and pay online to avoid price scams", icon: Warning },
    { tip: "Don't enter dark alleys, especially in Tarlabaşı area", icon: Warning },
    { tip: "Pickpocket awareness - don't put valuables in back pockets", icon: Warning },
    { tip: "Avoid counting money in the middle of the street", icon: Warning },
    { tip: "Don't smoke in public areas - it's restricted", icon: Warning }
];

const districts: District[] = [
    {
        name: "Fatih",
        description: "The heart of historic Istanbul, home to iconic landmarks like Hagia Sophia and Blue Mosque. Traditional neighborhoods with authentic Turkish life, bazaars, and centuries-old architecture.",
        landmark: "Sultanahmet Square",
        priceRange: "$$",
        coordinates: [41.0186, 28.9397] as [number, number]
    },
    {
        name: "Cihangir",
        description: "Bohemian neighborhood with charming cafes, art galleries, and antique shops. Known for its creative community, beautiful architecture, and cat-friendly streets with Bosphorus views.",
        landmark: "Cihangir Mosque",
        priceRange: "$$-$$$",
        coordinates: [41.0317, 28.9833] as [number, number]
    },
    {
        name: "Kadıköy",
        description: "Vibrant cultural hub on the Asian side, known for its art scene, trendy cafes, bars, and food markets. Popular among young people and artists with a bohemian atmosphere.",
        landmark: "Kadıköy Market",
        priceRange: "$$",
        coordinates: [40.9906, 29.0233] as [number, number]
    },
    {
        name: "Nişantaşı",
        description: "Luxury shopping and fine dining district with elegant architecture and high-end boutiques. Home to designer stores, gourmet restaurants, and sophisticated cafes.",
        landmark: "Nişantaşı City's Mall",
        priceRange: "$$-$$$",
        coordinates: [41.0488, 28.9951] as [number, number]
    },
    {
        name: "İstiklal Caddesi",
        description: "Historic pedestrian street with a perfect blend of shopping, dining, and culture. Lined with historic buildings, international brands, local shops, and street performers.",
        landmark: "Galata Tower",
        priceRange: "$$",
        coordinates: [41.0335, 28.9777] as [number, number]
    },
    {
        name: "Beşiktaş",
        description: "Vibrant neighborhood with great nightlife, traditional markets, and a youthful atmosphere. Famous for its fish market, street food, and energetic football culture.",
        landmark: "Beşiktaş Fish Market",
        priceRange: "$$",
        coordinates: [41.0430, 29.0046] as [number, number]
    },
    {
        name: "Arnavutköy",
        description: "Charming historic neighborhood with beautiful wooden houses and seafood restaurants along the Bosphorus. Known for its romantic atmosphere and waterfront dining.",
        landmark: "Arnavutköy Pier",
        priceRange: "$$$",
        coordinates: [41.0555, 29.0357] as [number, number]
    },
    {
        name: "Bebek",
        description: "Upscale waterfront neighborhood perfect for morning runs and luxury dining. Famous for its breakfast spots, coffee culture, and beautiful coastal promenade.",
        landmark: "Bebek Sahili",
        priceRange: "$$$",
        coordinates: [41.0776519, 29.0440416] as [number, number]
    },
    {
        name: "Etiler",
        description: "Upscale residential area known for high-end restaurants, trendy cafes, and luxury shopping. Popular for its vibrant nightlife and exclusive rooftop venues with Bosphorus views.",
        landmark: "Akmerkez Shopping Mall",
        priceRange: "$$$",
        coordinates: [41.0819, 29.0328] as [number, number]
    },
    {
        name: "Galataport",
        description: "Modern waterfront development combining culture, dining, and shopping. Features world-class museums, international restaurants, and a cruise port with stunning Bosphorus views.",
        landmark: "Istanbul Modern Museum",
        priceRange: "$$$",
        coordinates: [41.0252, 28.9831] as [number, number]
    },
    {
        name: "Kuzguncuk",
        description: "Picturesque neighborhood on the Asian side known for its colorful historic houses and artistic community. Tree-lined streets filled with cozy cafes, art galleries, and local boutiques.",
        landmark: "Kuzguncuk Synagogue",
        priceRange: "$$",
        coordinates: [41.0340971, 29.0339012] as [number, number]
    },
    {
        name: "Ortaköy",
        description: "Charming waterfront district famous for its iconic mosque and vibrant street food scene. Must-try local specialty is kumpir (stuffed baked potatoes) while enjoying Bosphorus views.",
        landmark: "Ortaköy Mosque",
        priceRange: "$$",
        coordinates: [41.0474, 29.0277] as [number, number]
    },
    {
        name: "Bağdat Avenue",
        description: "Prestigious shopping street on the Asian side lined with luxury boutiques and cafes. A favorite destination for high-end shopping, dining, and leisurely strolls.",
        landmark: "Suadiye",
        priceRange: "$$$",
        coordinates: [40.9625, 29.0750] as [number, number]
    }
];

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

const TabPanel: React.FC<TabPanelProps> = (props) => {
    const { children, value, index, ...other } = props;
    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`tabpanel-${index}`}
            aria-labelledby={`tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    {children}
                </Box>
            )}
        </div>
    );
};

const Home: React.FC = () => {
    const [selectedTab, setSelectedTab] = React.useState(0);

    const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
        setSelectedTab(newValue);
    };

    return (
        <Box
            className="guide-container"
            sx={{
                position: 'relative',
                '&::before': {
                    content: '""',
                    position: 'fixed',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '100%',
                    height: '100%',
                    backgroundImage: 'url(/images/jupiter-ag-jup-logo.png)',
                    backgroundSize: '800px',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat',
                    opacity: 0.15,
                    zIndex: 0,
                    filter: 'blur(1px)',
                    pointerEvents: 'none',
                }
            }}
        >
            <Box sx={{ position: 'relative', zIndex: 1, p: 3 }}>
                <Box sx={{
                    display: 'flex',
                    justifyContent: 'center',
                    mb: 4,
                    mt: 2,
                }}>
                    <Box sx={{
                        padding: { xs: '8px', sm: '12px' },
                        borderRadius: '20px',
                        background: 'linear-gradient(145deg, rgba(102,255,178,0.12), rgba(102,255,178,0.03))',
                        backdropFilter: 'blur(8px)',
                        border: '1px solid rgba(102,255,178,0.2)',
                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                        width: '100%',
                        overflowX: 'auto',
                        '&:hover': {
                            background: 'linear-gradient(145deg, rgba(102,255,178,0.18), rgba(102,255,178,0.08))',
                            boxShadow: '0 0 30px rgba(102,255,178,0.25)',
                        }
                    }}>
                        <Tabs
                            value={selectedTab}
                            onChange={handleTabChange}
                            variant="scrollable"
                            scrollButtons="auto"
                            allowScrollButtonsMobile
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    justifyContent: { xs: 'flex-start', sm: 'center' },
                                },
                                '& .MuiTabs-scroller': {
                                    scrollBehavior: 'smooth',
                                },
                                '& .MuiTab-root': {
                                    fontSize: { xs: '0.9rem', sm: '1.1rem' },
                                    padding: { xs: '8px 16px', sm: '12px 24px' },
                                    minHeight: { xs: '48px', sm: '64px' },
                                    color: '#66FFB2',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                    whiteSpace: 'nowrap',
                                    minWidth: { xs: 'auto', sm: '120px' },
                                    '&:hover': {
                                        color: '#FFFFFF',
                                        transform: 'translateY(-3px)',
                                        textShadow: '0 0 10px rgba(102,255,178,0.5)',
                                        '& .MuiSvgIcon-root': {
                                            transform: 'scale(1.15) rotate(5deg)',
                                        }
                                    },
                                    '&.Mui-selected': {
                                        color: '#FFFFFF',
                                    },
                                    '& .MuiSvgIcon-root': {
                                        fontSize: { xs: '1.2rem', sm: '1.5rem' },
                                        mb: { xs: 0.5, sm: 1 },
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        color: '#66FFB2'
                                    }
                                },
                                '& .MuiTabs-indicator': {
                                    backgroundColor: '#66FFB2',
                                    height: '3px',
                                    borderRadius: '3px',
                                    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)'
                                }
                            }}
                        >
                            <Tab icon={<LocationOn />} label="Introduction" />
                            <Tab icon={<Warning />} label="Safety" />
                            <Tab icon={<DirectionsSubway />} label="Transportation" />
                            <Tab icon={<Attractions />} label="Activities" />
                            <Tab icon={<Pets />} label="Cat Spots" />
                            <Tab icon={<LocationOn />} label="Districts" />
                            <Tab icon={<Restaurant />} label="Food" />
                            <Tab icon={<Nightlife />} label="Nightlife" />
                            <Tab icon={<ShoppingBag />} label="Shopping" />
                        </Tabs>
                    </Box>
                </Box>

                <TabPanel value={selectedTab} index={0}>
                    <IntroductionContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={1}>
                    <SafetyContent tips={safetyTips} />
                </TabPanel>
                <TabPanel value={selectedTab} index={2}>
                    <TransportationContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={3}>
                    <ActivitiesContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={4}>
                    <CatSpotsContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={5}>
                    <DistrictsContent districts={districts} />
                </TabPanel>
                <TabPanel value={selectedTab} index={6}>
                    <FoodGuideContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={7}>
                    <NightlifeContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={8}>
                    <ShoppingContent />
                </TabPanel>

                <Box
                    sx={{
                        width: '100%',
                        display: 'flex',
                        justifyContent: 'center',
                        mt: 6,
                        mb: 3
                    }}
                >
                    <Box
                        sx={{
                            position: 'relative',
                            width: '800px',
                            height: '400px',
                            borderRadius: '12px',
                            overflow: 'hidden',
                            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                        }}
                    >
                        <Image
                            src="/images/catstanbulfoto1.jpg"
                            alt="Catstanbul 2025"
                            fill
                            style={{
                                objectFit: 'contain',
                                backgroundColor: '#1a1b1f'
                            }}
                            priority
                        />
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Home; 
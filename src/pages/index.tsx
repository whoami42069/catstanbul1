import React from 'react';
import { Box, Card, Tabs, Tab, Typography } from '@mui/material';
import Image from 'next/image';
import {
    LocationOn,
    Warning,
    Restaurant,
    Nightlife,
    Pets,
    Attractions
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
        name: "Nişantaşı",
        description: "Luxury shopping and fine dining district",
        landmark: "Nişantaşı City's Mall",
        priceRange: "$$-$$$",
        coordinates: [41.0488, 28.9951] as [number, number]
    },
    {
        name: "İstiklal Caddesi",
        description: "Historic pedestrian street with shops and cafes",
        landmark: "Galata Tower",
        priceRange: "$$",
        coordinates: [41.0355, 28.9778] as [number, number]
    },
    {
        name: "Beşiktaş",
        description: "Vibrant neighborhood with great nightlife",
        landmark: "Beşiktaş Fish Market",
        priceRange: "$$",
        coordinates: [41.0430, 29.0046] as [number, number]
    },
    {
        name: "Arnavutköy",
        description: "Charming neighborhood with seafood restaurants",
        landmark: "Arnavutköy Pier",
        priceRange: "$$$",
        coordinates: [41.0555, 29.0357] as [number, number]
    },
    {
        name: "Bebek",
        description: "Runners' paradise, luxurious breakfast spots. High-level food. Morning coffee routine for rich.",
        landmark: "Bebek Sahili",
        priceRange: "$$$",
        coordinates: [41.0776519, 29.0440416] as [number, number]
    },
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

const IstanbulGuide: React.FC = () => {
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
                            centered
                            sx={{
                                '& .MuiTabs-flexContainer': {
                                    justifyContent: 'center',
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
                            <Tab icon={<Attractions />} label="Activities" />
                            <Tab icon={<Pets />} label="Cat Spots" />
                            <Tab icon={<LocationOn />} label="Districts" />
                            <Tab icon={<Restaurant />} label="Food" />
                            <Tab icon={<Nightlife />} label="Nightlife" />
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
                    <ActivitiesContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={3}>
                    <CatSpotsContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={4}>
                    <DistrictsContent districts={districts} />
                </TabPanel>
                <TabPanel value={selectedTab} index={5}>
                    <FoodGuideContent />
                </TabPanel>
                <TabPanel value={selectedTab} index={6}>
                    <NightlifeContent />
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

export default IstanbulGuide;

// Add static page configuration
export const config = {
    unstable_runtimeJS: false
}; 
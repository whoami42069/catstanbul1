import React from 'react';
import { Box, Paper, Typography, List, ListItem, ListItemIcon, ListItemText, Chip } from '@mui/material';
import {
    VpnLock, Warning, MoneyOff, SecurityOutlined, LocalTaxi,
    NightlightRound, RemoveRedEye, SmokeFree, LocationOff,
    SupportAgent, EmojiPeople, Favorite
} from '@mui/icons-material';
import type { SafetyTip } from '../types/common';

interface SafetyContentProps {
    tips: SafetyTip[];
}

const SafetyContent: React.FC<SafetyContentProps> = ({ tips }) => {
    const safetyTips = [
        { icon: <VpnLock color="primary" />, tip: "VPN: Essential for accessing banned apps." },
        { icon: <Warning color="error" />, tip: "Do not go with anyone who says 'come my friend'. If you do, expect to pay at least triple what it should cost." },
        { icon: <MoneyOff color="warning" />, tip: "Do not count money in the middle of the street." },
        { icon: <SecurityOutlined />, tip: "Pickpocketing is less common compared to Spain or Belgium, but still, don't put things in your back pocket." },
        { icon: <LocalTaxi color="success" />, tip: "Use Uber for taxis and pay online to avoid price gouging." },
        { icon: <NightlightRound />, tip: "Do not enter dark alleys; they're mostly safe, but why risk it?" },
        { icon: <RemoveRedEye />, tip: "Avoid eye contact for more than 10 seconds with strangers to avoid confrontations." },
        { icon: <SmokeFree color="error" />, tip: "Don't smoke weed on the street." },
        { icon: <LocationOff color="error" />, tip: "Avoid Esenyurt (40km from your hotel), Tarlabaşı (near Taksim), Dolapdere (near Taksim), and Kuştepe (near Mecidiyeköy). If you end up there, use GPS or get a taxi back to safety." },
        { icon: <SupportAgent color="primary" />, tip: "If you encounter issues and can't contact the police, reach out to me as a last resort." },
        { icon: <EmojiPeople color="warning" />, tip: "Be a degen, but with caution; this is real life." },
        { icon: <Favorite color="error" />, tip: "People here are generally friendly; feel free to ask for help." }
    ];

    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Safety! 🛡️
            </Typography>

            <Paper elevation={3} sx={{ p: 3, bgcolor: 'rgba(0,0,0,0.02)' }}>
                <List>
                    {safetyTips.map((tip, index) => (
                        <ListItem
                            key={index}
                            sx={{
                                mb: 2,
                                bgcolor: 'black',
                                borderRadius: 1,
                                boxShadow: 1,
                                '&:hover': {
                                    bgcolor: 'rgba(255,215,0,0.05)',
                                    transform: 'translateX(10px)',
                                    transition: 'all 0.3s ease'
                                }
                            }}
                        >
                            <ListItemIcon>
                                {tip.icon}
                            </ListItemIcon>
                            <ListItemText
                                primary={tip.tip}
                                sx={{
                                    '& .MuiListItemText-primary': {
                                        fontWeight: index === 0 ? 'bold' : 'normal'
                                    }
                                }}
                            />
                        </ListItem>
                    ))}
                </List>

                <Box sx={{ mt: 3, display: 'flex', gap: 1, flexWrap: 'wrap' }}>
                    <Chip
                        icon={<Warning />}
                        label="Emergency: 112"
                        color="error"
                        variant="outlined"
                    />
                    <Chip
                        icon={<Warning />}
                        label="Police: 155"
                        color="error"
                        variant="outlined"
                    />
                    <Chip
                        icon={<LocalTaxi />}
                        label="Tourist Police: +90 212 527 4503"
                        color="primary"
                        variant="outlined"
                    />
                    <Chip
                        icon={<LocalTaxi />}
                        label="Tourist Police WhatsApp: +90 505 187 6614"
                        color="primary"
                        variant="outlined"
                    />
                </Box>
            </Paper>
        </Box>
    );
};

export default SafetyContent; 
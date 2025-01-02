import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Divider, Link } from '@mui/material';
import { VpnLock, WhatsApp, DirectionsWalk, SubwayOutlined, AttachMoney, LocationCity } from '@mui/icons-material';

const IntroductionContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Welcome to Istanbul, catdets! 🌟
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    First is first. Welcome to Istanbul, catdets! In this guide, all places I recommend will be about 80% close to you.
                    Since it's a huge city, our understanding of "close" might differ. However, this is as close as it can get. 🗺️
                </Typography>

                <Typography paragraph>
                    In Turkey, Discord is banned. Please keep your VPN on at all times on your mobile! Otherwise, you won't be able to use Discord.
                    WhatsApp and Telegram are widely used in Turkey. Remember, Istanbul is a cosmopolitan city with a population of 20 million -
                    bigger than many countries. You can easily find everything you might need here. 🌆
                </Typography>

                <Typography paragraph>
                    We all walk fast; if you need to count money, please do it on the side. Not that it's dangerous, but someone might
                    accidentally bump into you. The same rules apply as in New York, Berlin, or Paris. However, there are specific places
                    you should visit before leaving Istanbul. 🚶‍♂️
                </Typography>

                <Typography paragraph>
                    Even though the minimum wage is low, our city is not cheap. Again, remember this is a cosmopolitan city; don't compare
                    high-quality product prices with cities that have a population of a million or two. 💰
                </Typography>

                <Divider sx={{ my: 3 }} />

                <Typography
                    variant="h6"
                    sx={{
                        mt: 3,
                        mb: 3,
                        fontSize: '1.5em',
                        fontWeight: 'bold',
                        color: '#FFD700'
                    }}
                >
                    Visa Information:{' '}
                    <Link
                        href="https://www.mfa.gov.tr/visa-information-for-foreigners.en.mfa"
                        target="_blank"
                        rel="noopener noreferrer"
                        sx={{
                            color: '#FFD700',
                            textDecoration: 'underline',
                            '&:hover': {
                                color: '#66FFB2'
                            }
                        }}
                    >
                        Click here for official visa requirements
                    </Link>
                </Typography>

                <Typography paragraph sx={{ mb: 3 }}>
                    Depending on your money, time, and freedom, you'll find something for you in this guide. ✨
                </Typography>

                <Typography paragraph sx={{ mb: 3 }}>
                    Bonus: It is nice to say "teşekkürler /teh-shek-kur-ler/" to show gratitude; it means "thank you" and locals love it when foreigners say it.
                </Typography>

                <Typography variant="subtitle1" sx={{ fontWeight: 'bold', color: '#66FFB2' }}>
                    For any questions or help on guide, you can contact me via twitter and discord: incluck
                </Typography>
            </Paper>
        </Box>
    );
};

export default IntroductionContent; 
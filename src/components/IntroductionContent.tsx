import React from 'react';
import { Typography, Box, Paper, List, ListItem, ListItemIcon, ListItemText, Divider } from '@mui/material';
import { VpnLock, WhatsApp, DirectionsWalk, SubwayOutlined, AttachMoney, LocationCity } from '@mui/icons-material';

const IntroductionContent: React.FC = () => {
    return (
        <Box>
            <Typography variant="h4" gutterBottom sx={{ textAlign: 'center', mb: 4 }}>
                Welcome to Istanbul, catdets! 🌟
            </Typography>

            <Paper className="content-card" elevation={3} sx={{ p: 3 }}>
                <Typography paragraph>
                    First is first. Welcome to Istanbul, catdets! In this guide, all places I recommend will be about 90% close to you.
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

                <Divider sx={{ my: 2 }} />

                <Typography variant="h6" gutterBottom>
                    Transportation Tips 🚇
                </Typography>

                <Typography paragraph>
                    In Turkey, Uber is just a software for taxis; we don't have private Uber cars. For public transportation like the subway
                    or buses, you'll need an Istanbulcard, which you can buy near any subway station. No ID is needed; it costs around 3-4 dollars.
                    You can top up with cash or a credit card.
                </Typography>

                <Typography paragraph>
                    Pro tip: Don't buy a 2-pass or similar; it's overly expensive. We're degens who like to keep something as a memory.
                    Just buy the card if you're using public transport. 🎫
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
                    Depending on your money, time, and freedom, you'll find something for you in this guide. ✨

                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold', color: '#FFD700' }}>
                    Bonus: It is nice to say "teşekkürler" to show gratitude; it means "thank you" and locals love it when foreigners say it.
                </Typography>

                <Typography variant="subtitle1" sx={{ mt: 3, fontWeight: 'bold', color: '#66FFB2' }}>
                    For any questions or help on guide, you can contact me via twitter and discord: incluck
                </Typography>
            </Paper>
        </Box>
    );
};

export default IntroductionContent; 
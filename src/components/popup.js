import React from 'react';
import { Box, Button, Typography } from '@mui/material';

const Popup = ({ closePopup }) => {
    return (
        <Box
            sx={{
                position: 'fixed', // Fix the position on screen
                top: '20vh', // Reduce the margin from the top to make it larger
                left: '20vw', // Reduce the margin from the left to make it larger
                width: '70vw', // Increase width to 70% of the viewport
                height: '70vh', // Increase height to 70% of the viewport
                bgcolor: 'background.paper',
                border: '2px solid white',
                boxShadow: 24,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                zIndex: 9999, 
                
            }}
        >
            
        </Box>
    );
};

export default Popup;

import React, { useState } from 'react';
import { Box, ButtonGroup, Button, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import Popup from './popup'; 
import { Typography } from '@mui/material';

const Filterbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true); 
    };

    const closePopup = () => {
        setShowPopup(false); 
    };

    return (
        <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            sx={{
                backgroundColor: "white",
                width: "100%",
                height: "60px",
                padding: "0 16px",
                position: "relative",
            }}
        >
            <Box flex={1} />
     
            
            {/* <Box flex={1} sx={{ display: 'flex', justifyContent: 'start', alignItems: 'start' }}>
    <Typography variant="h5" sx={{ mb: 1 }}>Senior Manager</Typography>
</Box> */}
<Box flex={1} sx={{ display: 'flex', justifyContent: 'flex-start', alignItems: 'center' }}>
    <Typography variant="h5" sx={{ mb: 1 }}>Senior Manager</Typography>
</Box>



            <ButtonGroup
                variant="contained"
                aria-label="Basic button group"
                sx={{ backgroundColor: "white" }}
            >
                <Button
                    sx={{
                        backgroundColor: "white", 
                        color: "#283356", 
                        '&:hover': {
                            backgroundColor: "#283356", 
                            color: "white",
                        },
                        '&:active': {
                            backgroundColor: "#283356", 
                            color: "white",
                        },
                        '&:focus': {
                            backgroundColor: "#283356", 
                            color: "white", 
                        }
                    }}
                >
                    Action
                </Button>
                <Button
                    sx={{
                        backgroundColor: "white", 
                        color: "#283356", 
                        '&:hover': {
                            backgroundColor: "#283356", 
                            color: "white",
                        },
                        '&:active': {
                            backgroundColor: "#283356", 
                            color: "white", 
                        },
                        '&:focus': {
                            backgroundColor: "#283356", 
                            color: "white", 
                        }
                    }}
                >
                    Label
                </Button>
                <Button
                    sx={{
                        backgroundColor: "white", 
                        color: "#283356", 
                        '&:hover': {
                            backgroundColor: "#283356", 
                            color: "white",
                        },
                        '&:active': {
                            backgroundColor: "#283356", 
                            color: "white", 
                        },
                        '&:focus': {
                            backgroundColor: "#283356", 
                            color: "white", 
                        }
                    }}
                    onClick={openPopup} 
                >
                    New
                </Button>
            </ButtonGroup>

            <IconButton
                sx={{
                    color: "grey",
                    borderRadius: "50%",
                    padding: "8px",
                    marginLeft: "16px", 
                }}
            >
                <Settings />
            </IconButton>

            {showPopup && <Popup closePopup={closePopup} />}
        </Box>
    );
};

export default Filterbar;

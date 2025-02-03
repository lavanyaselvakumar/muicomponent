// import { Box, ButtonGroup, Button, IconButton, Dialog, DialogActions, DialogContent, DialogTitle } from '@mui/material';
// import React, { useState } from 'react';
// import { ArrowDropDown, Settings } from '@mui/icons-material';
// const Filterbar = () => {
//     const [openDialog, setOpenDialog] = useState(false);

//     const openDialogBox = () => {
//         setOpenDialog(true);
//     };

//     const closeDialogBox = () => {
//         setOpenDialog(false);
//     };

//     return (
//         <Box
//             display="flex"
//             justifyContent="space-between"
//             alignItems="center"
//             sx={{
//                 backgroundColor: "white",
//                 width: "100%",
//                 height: "60px", 
//                 padding: "0 16px",
//                 position: "relative"
//             }}
//         >
//             <Box flex={1} />
            
//             <Box flex={1} sx={{ display: 'flex', justifyContent: 'flex-start', paddingRight: '500px' }}>
//   <h2 style={{ color: 'light black' }}>Senior Manager</h2>
//                   </Box>
//        <ButtonGroup
//     variant="contained"
//     aria-label="Basic button group"
//     sx={{ backgroundColor: "white" }} 
// >
//     <Button
//         sx={{
//             backgroundColor: "white", 
//             color: "#283356", 
//             '&:hover': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             },
//             '&:active': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             },
//             '&:focus': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             }
//         }}
//     >
//         Action
//     </Button>
//     <Button
//         sx={{
//             backgroundColor: "white", 
//             color: "#283356", 
//             '&:hover': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             },
//             '&:active': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             },
//             '&:focus': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             }
//         }}
//     >
//         Label
//     </Button>
//     <Button
//         sx={{
//             backgroundColor: "white", 
//             color: "#283356", 
//             '&:hover': {
//                 backgroundColor: "#283356", 
//                 color: "white",
//             },
//             '&:active': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             },
//             '&:focus': {
//                 backgroundColor: "#283356", 
//                 color: "white", 
//             }
//         }}
//     >
//         EDIT
//     </Button>
// </ButtonGroup>
//             <IconButton
//                 onClick={openDialogBox}
//                 sx={{
//                     color: "grey",
//                     borderRadius: "50%",
//                     padding: "8px",
//                     marginLeft: "16px", // Space between the buttons and the settings icon
//                 }}
//             >
//                 <Settings />
//             </IconButton>
//         </Box>
//     );
// };

// export default Filterbar;



import React, { useState } from 'react';
import { Box, ButtonGroup, Button, IconButton } from '@mui/material';
import { Settings } from '@mui/icons-material';
import Popup from './popup'; // Make sure the import path is correct

const Filterbar = () => {
    const [showPopup, setShowPopup] = useState(false);

    const openPopup = () => {
        setShowPopup(true); // Open the Popup when "New" is clicked
    };

    const closePopup = () => {
        setShowPopup(false); // Close the Popup when the button inside Popup is clicked
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
            {/* Left side of the container */}
            <Box flex={1} />
            
            <Box flex={1} sx={{ display: 'flex', justifyContent: 'flex-start', paddingRight: '500px' }}>
                <h2 style={{ color: 'light black' }}>Senior Manager</h2>
            </Box>

            {/* Button Group */}
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
                    onClick={openPopup} // Open Popup when this button is clicked
                >
                    New
                </Button>
            </ButtonGroup>

            {/* Settings Icon */}
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

            {/* Conditionally render the Popup */}
            {showPopup && <Popup closePopup={closePopup} />} {/* Show Popup when state is true */}
        </Box>
    );
};

export default Filterbar;

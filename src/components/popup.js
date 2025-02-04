
import React, { useState } from 'react';
import { Box, Button, Typography, Grid, TextField, InputAdornment, IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';

const Popup = ({ closePopup }) => {
  const [emailEdit, setEmailEdit] = useState(false);
  const [phoneEdit, setPhoneEdit] = useState(false);

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
      <Box sx={{ backgroundColor: "white", width: "93%", height: "300px", pb: 20 }}>
        <Typography variant="h5" sx={{ mb: 2,paddingRight:2, marginLeft: 0 }}>Section Heading</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Email*"
              id="outlined-size-small"
              defaultValue="Value"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Email*"
              id="outlined-size-small"
              defaultValue="Small"
              size="small"
              fullWidth
              sx={{ width: "60ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="State*"
              id="outlined-size-small"
              defaultValue="Alabama"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Zipcode*"
              id="outlined-size-small"
              defaultValue="567032"
              size="small"
              fullWidth
              sx={{ width: "60ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Grid container sx={{ mt: 2 }}>
        <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Bio*"
              id="outlined-size-small"
              defaultValue="She is a very good girl she is a very good girl she is a very good girl she is a very good girl lorem y good girl she is a very good girl she is a very good girl she is a very good gi"
              size="normal"
              fullWidth
              sx={{ width: "119ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                    </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>

        <Typography variant="h5" sx={{ mb: 2,paddingRight:2, marginLeft: 0,mt:2}}>Typography</Typography>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Cardnumber*"
              id="outlined-size-small"
              defaultValue="4242 **** **** ****"
              size="small"
              fullWidth
              sx={{ width: "119ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>

        <Grid container spacing={2} sx={{mt:0}}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Cardnumber*"
              id="outlined-size-small"
              defaultValue="4242 **** **** ****"
              size="small"
              fullWidth
              sx={{ width: "119ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Grid container spacing={2} sx={{ mt: 0 }}>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="Expiration date*"
              id="outlined-size-small"
              defaultValue="MM/YY"
              size="small"
              fullWidth
              sx={{ width: "55ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
          <Grid item xs={6}>
          <TextField
              disabled={emailEdit}
              label="CVC/CVC2*"
              id="outlined-size-small"
              defaultValue="567032"
              size="small"
              fullWidth
              sx={{ width: "60ch" }}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton edge="end" onClick={() => setEmailEdit(!emailEdit)}>
                      <EditIcon />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              onBlur={() => setEmailEdit(true)}
            />
          </Grid>
        </Grid>
        <Box display="flex" justifyContent="flex-end" gap={2} mt={1}>
                        <Button
                                 onClick={closePopup}  

                            sx={{
                                color: "black",                    // Text color inside the button
                                backgroundColor: "#ffffff00",      // Transparent background (no color)
                                border: "1px solid lightgrey",         // Black border around the button
                                textTransform: 'none',             // Prevent text from being capitalized
                                padding: '4px 12px',               // Padding for button size
                                minWidth: 'auto',                  // Make the button width flexible based on content
                                display: 'flex',                   // Flexbox layout for centering icons and text
                                justifyContent: 'center',          // Center text/icon horizontally
                                alignItems: 'center'               // Center text/icon vertically
                            }}
                        >
                            CANCEL
                        </Button>
                        <Button
                            type="submit" 
                            variant="contained"
                        >
                            SUBMIT
                        </Button>
                    </Box>
      </Box>
      
       </Box>
  );
};

export default Popup;






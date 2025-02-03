import * as React from 'react';
import { useState } from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Grid from '@mui/material/Grid';
import TextField from "@mui/material/TextField";
import { Timeline, TimelineItem, TimelineSeparator,TimelineConnector, TimelineDot, TimelineContent } from '@mui/lab';
import Button from '@mui/material/Button';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EditIcon from '@mui/icons-material/Edit';
import InputAdornment from "@mui/material/InputAdornment";
import IconButton from "@mui/material/IconButton";



function TabPanel({ children, value, index }) {
  return (
    <Typography component="div" role="tabpanel" hidden={value !== index}>
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </Typography>
  );
}

export default function DataTable() {
  const [activeTab, setActiveTab] = useState(0);

  const handleChange = (event, newValue) => {
    setActiveTab(newValue);
  };

  return (
    <Box sx={{ width: "100%", height: "150vh", pt: 10,paddingTop:"10px"}}> {/* Add padding-top to avoid overlap with AppBar */}
      <AppBar position="static" color="default">
        <Tabs value={activeTab} onChange={handleChange} indicatorColor="primary" textColor="primary">
          <Tab label="Overview" />
          <Tab label="Related" />
        </Tabs>
      </AppBar>
      <TabPanel value={activeTab} index={0}>
        <Grid container spacing={2}>
          <Grid item xs={8}>
            <Grid item xs={11}>
              <Box sx={{ backgroundColor: "white", width: "100%", height: "300px", p: 3 }}>
                
                <Typography variant="h5" sx={{ mb: 2 }}>
                  Section Heading
                </Typography>

                {/* Input Fields in a Grid Layout */}
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <TextField
                      label="Email*"
                      placeholder="value@gmail.com"
                      variant="standard"
                      fullWidth
                      sx={{ width: "35ch" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Phone Number*"
                      placeholder="414 414 414"
                      variant="standard"
                      fullWidth
                      sx={{ width: "35ch" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="State"
                      placeholder="Alabama"
                      variant="standard"
                      fullWidth
                      sx={{ width: "35ch" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={6}>
                    <TextField
                      label="Zipcode"
                      placeholder="563231"
                      variant="standard"
                      fullWidth
                      sx={{ width: "35ch" }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>

                  <Grid item xs={12}>
                    <TextField
                      label="Bio*"
                      placeholder="Enter bio here..."
                      variant="standard"
                      fullWidth
                      sx={{ marginTop: '30px' }}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton edge="end">
                              <EditIcon />
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </Grid>
                </Grid>
              </Box>
            </Grid>
          </Grid>

          <Grid item xs={4}>
            <Box sx={{ backgroundColor: "white", width: "100%", height: "500px" }}>
              <Typography variant='h5' sx={{padding:"20px"}}>Timeline</Typography>
              <hr style={{ border: "1px solid black", margin: "0 20px" }} />
              <Typography variant='h5' sx={{padding:"20px"}}>Upcoming Overdue</Typography>

              <Button variant="outlined"   style={{ border: "1px solid grey", marginLeft: "25px", height: "30px", marginTop: "-30px" }}
              >January</Button>


              <Timeline sx={{ marginRight:"250px" }}>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector sx={{ height: "120px" }}/>
                  </TimelineSeparator>
                  <TimelineContent>
               
<Box sx={{ height: "120px", width: "250px", backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "5px", paddingRight: "20px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
  <Box sx={{ marginBottom: "80px", marginLeft: "5px", display: "flex", alignItems: "center" }}>
    <CalendarTodayIcon />
    <Typography sx={{ marginLeft: "15px" }}>Follow Up</Typography>
    <Typography variant="body2" sx={{ marginLeft: "10px", color: "grey" }}>16:30:46 4Feb</Typography>
  </Box>
  <Typography variant="caption" sx={{color: "skuble", fontSize: "12px", textAlign: "center",Bottom:"100px"}}>
    This is your one-line sentence that will appear here from left to right.
  </Typography>
</Box>

 
</TimelineContent>

                </TimelineItem>
                <TimelineItem>
                  <TimelineSeparator>
                    <TimelineDot />
                    <TimelineConnector sx={{ height: "120px" }}/>
                  </TimelineSeparator>
                  <TimelineContent>
  <Box sx={{ height: "120px", width: "250px", backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "5px", paddingRight: "20px", display: "flex", alignItems: "center" }}>
                    <Box sx={{marginBottom:"80px",marginLeft:"5px",display:"flex"}}><CalendarTodayIcon />
  <Typography sx={{ marginLeft: "15px" }}>Follow Up</Typography>
  <Typography variant="body2" sx={{ marginLeft: "10px", color: "grey" }}>16:30:46 4Feb</Typography>
  </Box>  
</Box>                       </TimelineContent> 
                </TimelineItem>
              </Timeline>
            </Box>
          </Grid>
             
<Grid item xs={8} sx={{ position: "relative", top: "-150px" }}>
  <Box sx={{ backgroundColor: "white", width: "90%", height: "200px", p: 3 }}>
    <Typography variant="h5">
      Typography
    </Typography>
    <TextField
      label="Card number"
      variant="standard"
      placeholder="414 *** *** ***"
      fullWidth sx={{ width: "75ch" }}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end">
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    
    <TextField
      label="Cardholder number"
      variant="standard"
      placeholder="John Doe"
      fullWidth sx={{ width: "75ch", mt: 2 }} 
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton edge="end">
              <EditIcon />
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
    
    <Grid container spacing={2}>
      <Grid item xs={6}>
        <TextField
          id="standard-basic"
          label="Expiration Date"
          variant="standard"
          placeholder="MM/YY"
          fullWidth
          sx={{ width: "35ch" ,mt:2}}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          label="Zipcode"
          placeholder="563231"
          variant="standard"
          fullWidth
          sx={{ width: "35ch", mt: 2 }} 
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton edge="end">
                  <EditIcon />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Grid>
    </Grid>
  </Box>
</Grid>


          <Grid item xs={4}>
            <Box sx={{ backgroundColor: "white", width: "100%", height: "450px" }}>
            <Typography variant='h5' sx={{padding:"20px"}}>Timeline</Typography>
              <hr style={{ border: "1px solid black", margin: "0 20px" }} />
              <Typography variant='h5' sx={{padding:"20px"}}>Upcoming Overdue</Typography>

              <Button variant="outlined"   style={{backgroundColor:"skyblue",color:"white", border: "1px solid grey", marginLeft: "25px", height: "30px", marginTop: "-30px" }}
              >January</Button><Button variant="outlined"   style={{ backgroundColor:"skyblue",color:"white",bordeer:"1px solid grey",marginLeft: "5px", height: "30px", marginTop: "-30px" }}
              >January</Button>
              <Box sx={{ marginLeft:"20px",height: "120px", width: "300px", backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "5px", paddingRight: "20px", display: "flex", alignItems: "center" }}>
   
</Box>  <Box sx={{ marginLeft:"20px",marginTop:"20px", height: "120px", width: "300px", backgroundColor: "white", border: "1px solid lightgrey", borderRadius: "5px", paddingRight: "20px", display: "flex", alignItems: "center" }}>
          
</Box>  
            </Box>
          </Grid>
        </Grid>
      </TabPanel>
      <TabPanel value={activeTab} index={1}>
      </TabPanel>
    </Box>
  );
}

import React from 'react'
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { Grid } from '@mui/material';

export const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#3D3D3D",
        color: "white",
        
        bottom: 0,
        left: 0,
        right: 0,
        textAlign: "center",
        padding: "20px 0",
      }}
    >
        <Grid sx={{margin:'20px'}}>
            <Typography sx={{margin:'10px'}} variant="body1">Phone: 065-532-4151</Typography>
            <Typography sx={{margin:'10px'}} variant="body1">Line ID: @navindansaikul</Typography>
            <Typography sx={{margin:'10px'}} variant="body1">Instagram: @itititit________</Typography>
        </Grid>
      
    </Box>
  );
}

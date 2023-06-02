import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Summary = () => {
  let navigate = useNavigate();
  return (
    <Box>
      <Grid
        container
        maxWidth={5500}
        sx={{ display: "flex", justifyContent: "center" }}
      >

        <Grid item md={8} xs={8} sx={{ margin: "80px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
                Confirm order
            </Typography>
            <hr style={{ width: "100%" }} />

            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Total</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>629฿</Typography>
                </Grid>   
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Address</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>56/81 ม.มัณฑนา ต.ปลายบาง อ.บางกรวย จ.นนทบุรี 11130</Typography>
                </Grid>   
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Payment</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>Cash on delivery</Typography>
                </Grid>   
            </Grid>

            <hr style={{ width: "100%" }} />
            <Grid item md={12} xs={12} sx={{display:'flex', justifyContent:'flex-end'}}>
                <Button variant="contained" onClick={() => navigate("/Tracking")} >
                Confirm order
                </Button>
            </Grid>
            
        </Grid>

      </Grid>
    </Box>
  )
}

import { Box, Grid, Typography, Button } from '@mui/material'
import React from 'react'
import ClearIcon from "@mui/icons-material/Clear";
import { useNavigate } from "react-router-dom";

export const Cart = () => {
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
                Order list
            </Typography>
            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Oreo quart (s)</Typography>
                </Grid>
                <Grid item md={3} xs={3}>
                <Typography>1</Typography>
                </Grid>
                <Grid item md={1} xs={1}>
                <Typography>120฿</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{display:'flex',justifyContent:'right'}}>
                <ClearIcon />
                </Grid>
            </Grid>
            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                
                </Grid>
                <Grid item md={3} xs={3}>
                <Typography sx={{fontWeight:'bold'}}>Total</Typography>
                </Grid>
                <Grid item md={1} xs={1}>
                <Typography>120฿</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{display:'flex',justifyContent:'right'}}>
                
                </Grid>
            </Grid>
        </Grid>

        <Grid item md={8} xs={8} sx={{ margin: "80px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
                Address & Payment
            </Typography>
            <hr style={{ width: "100%" }} />

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
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Order</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>629฿</Typography>
                </Grid>   
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Shipping</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>0฿</Typography>
                </Grid>   
            </Grid>

            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                </Grid>
                <Grid item md={4} xs={4}>
                <Typography sx={{fontWeight:'bold'}}>Total price</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{display:'flex', justifyContent:'flex-end'}}>
                <Typography>629฿</Typography>
                </Grid>    
            </Grid>
            <Grid item md={12} xs={12} sx={{display:'flex', justifyContent:'flex-end'}}>
                <Button variant="contained" onClick={() => navigate("/Summary")} >
                Next
                </Button>
            </Grid>
            
        </Grid>

      </Grid>
    </Box>
  );
}



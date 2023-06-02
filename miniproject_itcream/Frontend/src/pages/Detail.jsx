import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const Detail = () => {
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
                #0001
            </Typography>
            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Order number</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>0001</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Date</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>20/04/23</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Time</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>13:00</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Time arrived</Typography>
                </Grid>
                <Grid item md={5} xs={5} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>13:35</Typography>
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
             <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={12} xs={12}>
                <Typography>Order</Typography>
                </Grid>
            </Grid>






            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Oreo quart (s)</Typography>
                </Grid>
                <Grid item md={4} xs={4}>
                <Typography>1</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>120฿</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Chocolate quart (L)</Typography>
                </Grid>
                <Grid item md={4} xs={4}>
                <Typography>1</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>240฿</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={7} xs={7}>
                <Typography>Chocolate cake (s)</Typography>
                </Grid>
                <Grid item md={4} xs={4}>
                <Typography>1</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>269฿</Typography>
                </Grid>
            </Grid>
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={11} xs={11}>
                <Typography>Total</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>629฿</Typography>
                </Grid>
            </Grid>


            <hr style={{ width: "100%" }} />
            <Grid sx={{display:'flex', justifyContent:'flex-end'}}>
                
                <Grid>
                    <Button variant="contained" onClick={() => navigate("/History")}>
                        Done
                    </Button>
                </Grid>
            </Grid>
        </Grid>
    </Grid>    
    </Box>    
  )
}

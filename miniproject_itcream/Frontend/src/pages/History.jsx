import React from 'react'
import { Box, Grid, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";


export const History = () => {
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
                History #0001
            </Typography>
            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={11} xs={11}>
                <Typography>Date</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>20/04/23</Typography>
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
                    <Button variant="contained" sx={{margin:'0px 15px'}} onClick={() => navigate("/Detail")}>
                        Detail
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" onClick={() => navigate("/Cart")}>
                        Order again
                    </Button>
                </Grid>
            </Grid>
        </Grid>

        <Grid item md={8} xs={8} sx={{ margin: "80px" }}>
            <Typography sx={{ fontWeight: "bold", fontSize: "32px" }}>
                History #0002
            </Typography>
            <hr style={{ width: "100%" }} />
            <Grid sx={{ display: "flex" , margin:'20px 0px'}}>
                <Grid item md={11} xs={11}>
                <Typography>Date</Typography>
                </Grid>
                <Grid item md={1} xs={1} sx={{ display: "flex", justifyContent: "flex-end" }}>
                <Typography>20/04/23</Typography>
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
                    <Button variant="contained" sx={{margin:'0px 15px'}} >
                        Detail
                    </Button>
                </Grid>
                <Grid>
                    <Button variant="contained" >
                        Order again
                    </Button>
                </Grid>
            </Grid>
        </Grid>

      </Grid>
    </Box>
  );
}

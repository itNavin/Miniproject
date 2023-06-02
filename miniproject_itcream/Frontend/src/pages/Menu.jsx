import React from 'react'
import { Box, Grid, Typography, CardMedia, Card, CardActionArea, CardContent, Button } from '@mui/material'
import id1 from "../assets/ice_id1.png"
import id2 from "../assets/ice_id2.png";
import id3 from "../assets/ice_id3.png";
import id4 from "../assets/ice_id4.png";
import id5 from "../assets/ice_id5.png";
import id6 from "../assets/ice_id6.png";
import id7 from "../assets/ice_id7.png";
import id8 from "../assets/ice_id8.png";
import id9 from "../assets/cake_01.png";
import id10 from "../assets/cake_02.png";
import id11 from "../assets/cake_03.png";
import id12 from "../assets/cake_04.png";
import id13 from "../assets/cake_05.png";
import id14 from "../assets/cake_06.png";
import id15 from "../assets/cake_07.png";
import id16 from "../assets/cake_08.png";

import ShoppingBasketIcon from "@mui/icons-material/ShoppingBasket";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  let navigate = useNavigate();
  return (
    <Box sx={{display:'flex', flexDirection:'column', justifyContent:'center'}}>
      <Typography
        style={{ fontWeight: "bold", fontSize: "36px", margin: "50px 10%" }}
      >
        Quart
      </Typography>

      
      <Grid container spacing={2} maxWidth={3000} >
        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id1} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id2} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id3} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id4} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id5} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>Size
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id6} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id7} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id8} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>








        <Typography
        style={{ fontWeight: "bold", fontSize: "36px", margin: "50px 10%" }}
      >
        Cake
      </Typography>
      <Grid container spacing={2} maxWidth={3000} >
        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id9} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id10} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id11} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id12} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id13} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id14} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id15} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

        <Grid item md={3} xs={12} sx={{display:'flex', justifyContent:'center'}}>
          <Card sx={{ maxWidth: 200 }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id16} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div" style={{display:'flex', justifyContent:'center'}}>
                  Chocolate
                </Typography>Size
                <Box sx={{display:'flex', justifyContent:'center', backgroundColor:'#004E7A',borderRadius:'30px'}}>
                    <Button sx={{justifyContent:'space-between', width:'80%', color:'white'}} onClick={() => navigate("/Size")}>
                        <Typography>
                            120฿
                        </Typography>
                        <ShoppingBasketIcon></ShoppingBasketIcon>
                    </Button>
                </Box>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      </Grid>




    </Box>



    
  );
}

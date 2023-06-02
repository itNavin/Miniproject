import React from "react";
import promo1 from "../../assets/promotion1.jpg";
// import promo2 from "../../assets/promotion2.jpg";
import str_jelly from "../../assets/ice_id6.png";
import choc from "../../assets/ice_id1.png";
import cakeoreo from "../../assets/Cake_01.png";

import Button from "@mui/material/Button";
import { CardMedia, Grid, Typography, Box } from "@mui/material";
import shadows from "@mui/material/styles/shadows";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFEDFF",
      }}
    >
      <Grid container justifyContent="center">
        <img src={promo1} style={{ width: "100%" }} alt="promotion1" />
      </Grid>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          sx={{ margin: "30px" }}
          onClick={() => navigate("/Menu")}
        >
          order now
        </Button>
      </Grid>

      <hr style={{ width: "50%" }} />

      <Grid container justifyContent="center">
        <Typography
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "36px" }}
        >
          Flavor of the month
        </Typography>
      </Grid>
      <Grid sx={{ margin: "30px" }}>
        <CardMedia
          component="img"
          height="200"
          image={str_jelly}
          sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)" }}
        />
      </Grid>
      <Grid>
        <Typography>Strawberry mango jelly</Typography>
      </Grid>

      <hr style={{ width: "50%", marginTop: "30px" }} />

      <Grid container justifyContent="center">
        <Typography
          style={{ marginTop: "30px", fontWeight: "bold", fontSize: "36px" }}
        >
          Best seller
        </Typography>
      </Grid>
      <Grid sx={{ display: "flex", flexDirection: "row" }}>
        <CardMedia
          component="img"
          height="200"
          image={str_jelly}
          sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", margin: "30px" }}
        />
        <CardMedia
          component="img"
          height="200"
          image={choc}
          sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", margin: "30px" }}
        />
        <CardMedia
          component="img"
          height="200"
          image={cakeoreo}
          sx={{ boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.5)", margin: "30px" }}
        />
      </Grid>
      <Grid container justifyContent="center">
        <Button
          variant="contained"
          sx={{ margin: "30px" }}
          onClick={() => navigate("/Menu")}
        >
          order now
        </Button>
      </Grid>
    </Box>
  );
};

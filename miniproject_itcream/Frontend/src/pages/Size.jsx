import { Box, Grid, Typography, CardMedia, Card, CardActionArea, CardContent, Button, ToggleButton, ToggleButtonGroup, Select,MenuItem, InputLabel, FormControl } from '@mui/material'
import React from 'react'
import id1 from "../assets/ice_id1.png";
import { useNavigate } from "react-router-dom";

export const Size = () => {
    const [alignment, setAlignment] = React.useState("left");

    const handleAlignment = (event, newAlignment) => {
        setAlignment(newAlignment);
};

    const [selectedValue, setSelectedValue] = React.useState("");

  let navigate = useNavigate();
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        marginTop: "5%",
      }}
    >
      <Grid
        container
        spacing={0}
        maxWidth={5500}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid
          item
          md={2}
          sx={{ display: "flex", justifyContent: "right", padding: "20px" }}
        >
          <Card sx={{ maxWidth: 200, borderRadius: "30px" }}>
            <CardActionArea>
              <CardMedia component="img" height="150" image={id1} />
            </CardActionArea>
          </Card>
        </Grid>
        <Grid
          item
          md={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "left",
            padding: "20px",
          }}
        >
          <Typography style={{ fontWeight: "bold", fontSize: "24px" }}>
            Chocolate 120฿
          </Typography>
          <Grid
            sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
          >
            <Typography style={{ marginRight: "15px" }}>choose size</Typography>
            <ToggleButtonGroup
              value={alignment}
              exclusive
              onChange={handleAlignment}
              aria-label="text alignment"
            >
              <ToggleButton value="left">S</ToggleButton>
              <ToggleButton value="center">M</ToggleButton>
              <ToggleButton value="right">L</ToggleButton>
            </ToggleButtonGroup>
          </Grid>
          <Grid sx={{ marginTop: "8px" }}>
            <FormControl fullWidth>
              <InputLabel>choose topping</InputLabel>
              <Select
                value={selectedValue}
                onChange={(e) => setSelectedValue(e.target.value)}
                defaultValue="option2"
                label="choose topping"
              >
                <MenuItem value="Brownie">Brownie</MenuItem>
                <MenuItem value="Strawberry">Strawberry</MenuItem>
                <MenuItem value="Oreo">Oreo</MenuItem>
                <MenuItem value="Jelly">Jelly</MenuItem>
                <MenuItem value="Rainbow">Rainbow</MenuItem>
              </Select>
            </FormControl>
          </Grid>
        </Grid>
      </Grid>
      <Grid sx={{ display: "flex", justifyContent: "center", margin: "30px" }}>
        <Button variant="contained" onClick={() => navigate("/Cart")}>
          Add to cart
        </Button>
      </Grid>
    </Box>
  );
}

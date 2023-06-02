import React from "react";
import { Box, Grid, Typography, Button } from "@mui/material";

export const NothingInHere = () => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <Grid
        container
        maxWidth={5500}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item md={8} xs={8} sx={{ margin: "80px" }}>
          <Typography
            sx={{
              fontWeight: "bold",
              fontSize: "32px",
              display: "flex",
              justifyContent: "center",
            }}
          >
            You haven't placed an order yet!
          </Typography>
          <Grid sx={{ display: "flex", justifyContent: "center", margin:'30px' }}>
            <Grid>
              <Button variant="contained">Order now</Button>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

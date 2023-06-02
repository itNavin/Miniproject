import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";


export const Registerform = () => {
  let navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    Axios.post("/register", {
      firstname: data.get("username"),
      lastname: data.get("email"),
      username: data.get("address"),
      password: data.get("password"),
    })
      .then((data) => {
        console.log(data.data);
        if (data.data.success) {
          navigate("/Home");
        } else {
          alert(data.data.message);
          console.log(data.data);
        }
      })
      .catch((e) => alert(e));
  };

  return (
    <Box>
      <Grid
        container
        spacing={8}
        sx={{ display: "flex", justifyContent: "center" }}
      >
        <Grid item md={6} xs={6}>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              fullWidth
              label="Username"
              placeholder="Type your username"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Email"
              placeholder="Type your email"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Address"
              placeholder="Type your address"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Password"
              type="password"
              placeholder="Type your password"
            />
            <TextField
              margin="normal"
              required
              fullWidth
              label="Confirm Password"
              type="password"
              placeholder="Type your password"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              // onClick={() => handleSubmit()}
            >
              Sign up
            </Button>
            <Box mb={2}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    color="#999999"
                    sx={{ alignSelf: "end", cursor: "pointer" }}
                    onClick={() => navigate("/")}
                  >
                    Already have an account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

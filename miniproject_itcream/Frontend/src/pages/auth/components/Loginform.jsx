import React from 'react'
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
import Axios from '../../../AxiosInstance';

export const Loginform = () => {
  let navigate = useNavigate();
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    Axios.post("/login", {
      username: data.get("username"),
      password: data.get("password"),
    })
      .then((data) => {
        if (data.data.success) {
          navigate("/Home");
        } else {
          alert(data.data.message);
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
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate>
            <TextField
              margin="normal"
              required
              // value={usernameOrEmail}
              // onChange={(e) => setUsernameOrEmail(e.target.value)}
              fullWidth
              // error={usernameOrEmailError !== ""}
              // helperText={usernameOrEmailError}
              label="Username or Email"
              placeholder="Type your username or email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              // onChange={(e) => setPassword(e.target.value)}
              fullWidth
              // error={passwordError !== ""}
              // helperText={passwordError}
              label="Password"
              type="password"
              placeholder="Type Your password"
            />
            <Button
              // onClick={handleSubmit}
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Box mb={2}>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    color="#999999"
                    sx={{ alignSelf: "end", cursor: "pointer" }}
                    onClick={() => navigate("/Registerform")}
                  >
                    No account?
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

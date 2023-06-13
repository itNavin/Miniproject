import React from 'react'
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from 'react';
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Axios from '../../../AxiosInstance';
import { AxiosError } from 'axios';

export const Loginform = ({ handleClose = () => {}, setIsLogin = () => {}, setStatus = () => {}, setUser = () => {} }) => {
  let navigate = useNavigate();

const [username, setUsername] = useState("");
const [usernameError, setUsernameError] = useState("");
const [password, setPassword] = useState("");
const [passwordError, setPasswordError] = useState("");

const validateForm = () => {
  let isValid = true;
  if (!username) {
    setUsernameError("Username is required");
    isValid = false;
  }
  if (!password) {
    setPasswordError("Password is required");
    isValid = false;
  }
  return isValid;
};

const navigateToHome = (id) => {
  navigate(`/Home/${id}`);
};

const handleSubmit = async () => {
  // TODO: Implement login
  // 1. validate form
  if (!validateForm()) return ;
  try {
    // 2. call API to login
    const response = await Axios.post("http://localhost:3000/login", {
      username: username,
      password: password,
    });
    // 3. if success, close modal, and update user information.
    if (response.data.success) {
      setUser({
        username: response.data.data.username,
      });
      handleClose();
      navigateToHome(localStorage.getItem("id"));
      setStatus({
        msg: response.data.msg,
        severity: "success",
      });
    }
  } catch (e) {
    // 4. if fail, show error message, and reset text fields value
    
    setUsername("");
    setPassword("");
    // check if e are AxiosError
    if (e instanceof AxiosError) {
      // check if e.response exist
      if (e.response)
        return setStatus({
          msg: e.response.data.error,
          severity: "error",
        });
    }
    // if e is not AxiosError or response doesn't exist, return error message
    return setStatus({
      msg: e.message,
      severity: "error",
    });
  }
};

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   Axios.post("/login", {
  //     username: data.get("username"),
  //     password: data.get("password"),
  //   })
  //     .then((data) => {
  //       if (data.data.success) {
  //         navigate("/Home");
  //       } else {
  //         alert(data.data.message);
  //       }
  //     })
  //     .catch((e) => alert(e));
  // };




  // const handleSubmit = () => {
  //   if (!validateForm()) {
  //     console.log("Must enter email and password");
  //     return;
  //   }
  //   Axios
  //     .post("http://localhost:3000/login", {
  //       username: username,
  //       password: password,
  //     })
  //     .then((res) => {
  //       if (res.data.success === true) {
  //         localStorage.setItem("token", res.data.token);
  //         localStorage.setItem("id", res.data.users.id);
  //         console.log("login success");
  //         // navigateToHome(localStorage.getItem("id"));
  //         navigate("/Home");
  //       } else {
  //         console.log("fail");
  //         console.log(res);
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // };





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
          <Box component="form">
            <TextField
              margin="normal"
              required
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              error={usernameError !== ""}
              helperText={usernameError}
              label="Username"
              placeholder="Type your username"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              error={passwordError !== ""}
              helperText={passwordError}
              label="Password"
              type="password"
              placeholder="Type Your password"
            />
            <Button
              onClick={handleSubmit}
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

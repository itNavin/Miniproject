import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import Axios from '../../../AxiosInstance'
import { AxiosError } from "axios";


export const Registerform = ({ setIsLogin = () => {}, setStatus = () => {} }) => {
  let navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  
  const validateForm = () => {
    //true ก่อนแล้ว check ใน if else ถ้ามันยังไม่ใส่ข้อมูล isValid จะ false
    let isValid = true;
    // check user
    if (!username) {
      setUsernameError("Username is required");
      isValid = false;
    }
    // check email
    if (!email) {
      setEmailError("Email is required");
      isValid = false;
    }
    if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email)) {
      setEmailError("Invalid email format");
      isValid = false;
    }
    // check password
    if (!password) {
      setPasswordError("Password is required");
      isValid = false;
    }
    return isValid;
  };

  // const handleSubmit = (event) => {
  //   event.preventDefault();
  //   const data = new FormData(event.currentTarget);

  //   Axios.post("/register", {
  //     firstname: data.get("username"),
  //     lastname: data.get("email"),
  //     username: data.get("address"),
  //     password: data.get("password"),
  //   })
  //     .then((data) => {
  //       console.log(data.data);
  //       if (data.data.success) {
  //         navigate("/Home");
  //       } else {
  //         alert(data.data.message);
  //         console.log(data.data);
  //       }
  //     })
  //     .catch((e) => alert(e));
  // };

  const handleSubmit = async () => {
    // TODO: Implement login
    // 1. validate form
    if (!validateForm()) return;
    try {
      // 2. send request to server
      const response = await Axios.post("/register", {
        username,
        email,
        address,
        password,
      });
      // 3. if successful, change modal to login mode
      if (response.data.success) {
        setIsLogin(true);
        setStatus({
          msg: response.data.msg,
          severity: "success",
        });
      }
    } catch (e) {
      // 4. if fail, show error message alert, and reset password fields
      setPassword("");
      // check if e are AxiosError
      if (e instanceof AxiosError)
        if (e.response)
          // check if e.response exist
          return setStatus({
            msg: e.response.data.error,
            severity: "error",
          });
      // if e is not AxiosError or response doesn't exist, return error message
      return setStatus({
        msg: e.message,
        severity: "error",
      });
    }
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
};

// import * as React from "react";
// import Button from "@mui/material/Button";
// import CssBaseline from "@mui/material/CssBaseline";
// import TextField from "@mui/material/TextField";
// import Link from "@mui/material/Link";
// import Grid from "@mui/material/Grid";
// import Box from "@mui/material/Box";
// import Typography from "@mui/material/Typography";
// import Container from "@mui/material/Container";
// import { createTheme, ThemeProvider } from "@mui/material/styles";
// import MenuItem from "@mui/material/MenuItem";

// const theme = createTheme();

// export default function PaymentPage() {
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     const data = new FormData(event.currentTarget);
//     console.log({
//       cardNumber: data.get("cardNumber"),
//       cardName: data.get("cardName"),
//       expiryMonth: data.get("expiryMonth"),
//       expiryYear: data.get("expiryYear"),
//       cvv: data.get("cvv"),
//       country: data.get("country"),
//     });
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <Container component="main" maxWidth="xs">
//         <CssBaseline />
//         <Box
//           sx={{
//             marginTop: 8,
//             display: "flex",
//             flexDirection: "column",
//             alignItems: "center",
//             height: "100vh",
//             justifyContent: "space-between",
//           }}
//         >
//           <Box>
//             <Typography component="h1" variant="h5">
//               Payment
//             </Typography>
//             <Box
//               component="form"
//               onSubmit={handleSubmit}
//               noValidate
//               sx={{ mt: 1 }}
//             >
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="cardNumber"
//                 label="Card number"
//                 name="cardNumber"
//                 autoFocus
//               />
//               <TextField
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="cardName"
//                 label="Card name"
//                 name="cardName"
//               />
//               <Grid container spacing={2}>
//                 <Grid item xs={6}>
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="expDate"
//                     label="MM/YY"
//                     name="expDate"
//                     autoComplete="expDate"
//                     inputProps={{ maxLength: 5 }}
//                   />
//                 </Grid>
//                 <Grid item xs={6}>
//                   <TextField
//                     margin="normal"
//                     required
//                     fullWidth
//                     id="cvv"
//                     label="CVV"
//                     name="cvv"
//                     maxLength="3"
//                   />
//                 </Grid>
//               </Grid>

//               <TextField
//                 select
//                 margin="normal"
//                 required
//                 fullWidth
//                 id="country"
//                 label="Country"
//                 name="country"
//                 defaultValue=""
//               >
//                 <MenuItem value="USA">USA</MenuItem>
//                 <MenuItem value="Canada">Canada</MenuItem>
//                 <MenuItem value="UK">UK</MenuItem>
//                 <MenuItem value="Australia">Australia</MenuItem>
//               </TextField>
//               <Button
//                 type="submit"
//                 fullWidth
//                 variant="contained"
//                 sx={{ mt: 3, mb: 2 }}
//               >
//                 Next
//               </Button>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </ThemeProvider>
//   );
// }
// ``;


import * as React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import MenuItem from "@mui/material/MenuItem";

const theme = createTheme();

export default function PaymentPage() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      cardNumber: data.get("cardNumber"),
      cardName: data.get("cardName"),
      expiryMonth: data.get("expiryMonth"),
      expiryYear: data.get("expiryYear"),
      cvv: data.get("cvv"),
      country: data.get("country"),
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            height: "100vh",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography component="h1" variant="h5">
              Payment
            </Typography>
            <Box
              component="form"
              onSubmit={handleSubmit}
              noValidate
              sx={{ mt: 1 }}
            >
              <TextField
                margin="normal"
                required
                fullWidth
                id="cardNumber"
                label="Card number"
                name="cardNumber"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                id="cardName"
                label="Card name"
                name="cardName"
              />
              <Grid container spacing={2}>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="expDate"
                    label="MM/YY"
                    name="expDate"
                    autoComplete="expDate"
                    inputProps={{ maxLength: 5 }}
                  />
                </Grid>
                <Grid item xs={6}>
                  <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="cvv"
                    label="CVV"
                    name="cvv"
                    maxLength="3"
                  />
                </Grid>
              </Grid>

              <TextField
                select
                margin="normal"
                required
                fullWidth
                id="country"
                label="Country"
                name="country"
                defaultValue=""
              >
                <MenuItem value="USA">USA</MenuItem>
                <MenuItem value="Canada">Canada</MenuItem>
                <MenuItem value="UK">UK</MenuItem>
                <MenuItem value="Australia">Australia</MenuItem>
              </TextField>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
                Next
              </Button>
              <Typography align="center" variant="body2">
                <Link href="#" onClick={(e) => e.preventDefault()}>
                  Skip
                </Link>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </ThemeProvider>
  );
}


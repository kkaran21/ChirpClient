import { Grid, Typography, Box, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import SnackbarComponent from "../Components/SnackbarComponent";
import { setCookie } from "../Utils/CookieUtils";
import { useNavigate } from "react-router-dom";

function LoginPage() {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<"success" | "error" | "info" | "warning">("success");
  const [toastMessage, setToastMessage] = useState("");
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  async function Login() {

    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

      const urlencoded = new URLSearchParams();
      urlencoded.append("username", email);
      urlencoded.append("password", password);

      const response = await fetch("http://127.0.0.1:8000/login", {
        headers: myHeaders,
        method: "POST",
        body: urlencoded,
        redirect: "follow"
      });

      const responseBody = await response.json();

      if (response.status == 200) {
        setOpen(true)
        setSeverity("success")
        setToastMessage("Redirecting You to Home Page!")
        setCookie('authToken', responseBody.access_token)
        navigate('/home')
      }
      else if (response.status == 403) {
        setOpen(true)
        setSeverity("error")
        setToastMessage(responseBody.detail)
      }
      else {
        setOpen(true)
        setSeverity("error")
        setToastMessage("Please try again")
      }
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setToastMessage("error occured in application")

    }

  }

  return <>
    <Grid container spacing={0.5}>
      <Grid item xs={6}>
        <h1>left</h1>
      </Grid>
      <Grid item xs={6}>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box sx={{ mt: 1 }}>
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={(e) => setEmail(e.target.value)}

          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={(e) => setPassword(e.target.value)}

          />
          <Button
            type="submit"
            onClick={Login}
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="/register" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Grid>
      <SnackbarComponent open={open}
        onClose={handleClose}
        severity={severity}
        message={toastMessage} />
    </Grid>
  </>
}

export default LoginPage

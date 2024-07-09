import { Grid, Typography, Box, TextField, Button, Link } from "@mui/material";
import { useState } from "react";
import SnackbarComponent from "../Components/SnackbarComponent";

function RegisterPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [open, setOpen] = useState(false);
    const [severity, setSeverity] = useState<"success" | "error" | "info" | "warning">("success");
    const [message, setMessage] = useState("");

    const handleClose = () => {
        setOpen(false);
    };

    async function createUser() {

        try {
            const response = await fetch("http://127.0.0.1:8000/users", {
                headers: {
                    "Content-Type": "application/json",
                },
                method: "POST",
                body: JSON.stringify({ email: email, password: password }),
            });

            if (response.status == 201) {
                setOpen(true)
                setSeverity("success")
                setMessage("You are successflly registered")

            }
            else {
                setOpen(true)
                setSeverity("error")
                setMessage("Please try again")

            }
        } catch (error) {
            setOpen(true)
            setSeverity("error")
            setMessage("error occured in application")
        }

    }

    return <>
        <Grid container spacing={0.5}>
            <Grid item xs={6}>
            </Grid>
            <Grid item xs={6}>
                <Typography component="h1" variant="h5">
                    Sign Up
                </Typography>
                <Box component="form" noValidate sx={{ mt: 1 }}>
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
                        onClick={createUser}
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
                            <Link href="/login" variant="body2">
                                {"Already have an account? Sign In"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Grid>
            <SnackbarComponent  open={open}
                onClose={handleClose}
                severity={severity}
                message={message}/>
        </Grid>
    </>
}

export default RegisterPage
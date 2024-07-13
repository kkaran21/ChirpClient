import { Grid } from "@mui/material";
import ChirpCardComponent from "../Components/ChirpCardComponent";
import CreatePostComponent from "../Components/CreatePostComponent";
import SnackbarComponent from "../Components/SnackbarComponent";
import { useState } from "react";
import { getCookie } from "../Utils/CookieUtils";

function HomePage() {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://example.com/avatar.jpg',
  };

  const tweet = {
    title:"",
    content: 'This is a sample tweet content.'
  };

  const [open, setOpen] = useState(false);
  const [severity, setSeverity] = useState<"success" | "error" | "info" | "warning">("success");
  const [toastMessage, setToastMessage] = useState("");
  const authToken = getCookie("authToken")

  const handleClose = () => {
    setOpen(false);
  };

  async function createChirp(title: string, message: string) {
    try {
      const response = await fetch("http://127.0.0.1:8000/posts", {
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${authToken}`
        },
        method: "POST",
        body: JSON.stringify({ title: title, content: message, published: true }),
      });

      const responseBody = await response.json();

      if (response.status == 201) {
        setOpen(true)
        setSeverity("success")
        setToastMessage("Successfully Chirped")

      }
      else {
        setOpen(true)
        setSeverity("error")
        setToastMessage(`Please try again ${responseBody.detail}`)

      }
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setToastMessage("error occured in application")
    } 

  }

  async function getChirp() {
    try {
      const response = await fetch("http://127.0.0.1:8000/posts", {
        headers: {
          "Content-Type": "application/json",
        },
        method: "GET",
      });

      if (response.status == 201) {
        const responseBody = await response.json();
        return responseBody
      }
    } catch (error) {
      setOpen(true)
      setSeverity("error")
      setToastMessage("error occured in application")
    }
  }
  return <>
    <Grid container spacing={1}>
      <Grid item xs={3}>

        <h1>left</h1>
      </Grid>
      <Grid item xs={6}>
        <CreatePostComponent onClick={createChirp}></CreatePostComponent>
        <ChirpCardComponent user={user} tweet={tweet} />
      </Grid>
      <Grid item xs={3}>
        <h1>following</h1>
      </Grid>
    </Grid>
    <SnackbarComponent open={open}
      onClose={handleClose}
      severity={severity}
      message={toastMessage} />
  </>
}

export default HomePage
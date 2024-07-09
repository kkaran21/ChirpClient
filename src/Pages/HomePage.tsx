import { Grid } from "@mui/material";
import ChirpCardComponent from "../Components/ChirpCardComponent";

function HomePage() {
  const user = {
    name: 'John Doe',
    username: 'johndoe',
    avatar: 'https://example.com/avatar.jpg',
  };

  const tweet = {
    content: 'This is a sample tweet content.'
  };

  

  return <>
    <Grid container spacing={1}>
      <Grid item xs={3}>

        <h1>left</h1>
      </Grid>
      <Grid item xs={6}>
        <h1>Home</h1>
        <ChirpCardComponent user={user} tweet={tweet} />
      </Grid>
      <Grid item xs={3}>
        <h1>following</h1>
      </Grid>
    </Grid>
  </>
}

export default HomePage
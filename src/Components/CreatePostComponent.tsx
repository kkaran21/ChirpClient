import { Card, CardContent,TextField, Button, IconButton } from '@mui/material';
import PhotoIcon from '@mui/icons-material/Photo';
import GifIcon from '@mui/icons-material/Gif';
import PollIcon from '@mui/icons-material/Poll';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';
import EventIcon from '@mui/icons-material/Event';
import { useState } from 'react';

interface Props {    
    onClick: (title:string ,message:string) => void;
  }

const CreatePostComponent = ({onClick}:Props) => {

    const[title, setTitle] = useState("")
    const[message, setMessage] = useState("")

    const handlePost= () => {onClick(title,message);setTitle(""); setMessage("")}
    
  return (
    <Card sx={{ maxWidth: 1, margin: 'auto', marginTop: 2, padding: 2 }}>

      <CardContent>
      <TextField
          fullWidth
          rows={3}
          variant="outlined"
          placeholder="Title"
          sx={{ marginBottom: 1 }}
          value={title}
          onChange={(e)=>{setTitle(e.target.value)}}
        />
        <TextField
          fullWidth
          multiline
          rows={3}
          variant="outlined"
          placeholder="What's happening?"
          sx={{ marginBottom: 1 }}
          value={message}
          onChange={(e)=>{setMessage(e.target.value)}}
        />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <IconButton color="primary">
              <PhotoIcon />
            </IconButton>
            <IconButton color="primary">
              <GifIcon />
            </IconButton>
            <IconButton color="primary">
              <PollIcon />
            </IconButton>
            <IconButton color="primary">
              <EmojiEmotionsIcon />
            </IconButton>
            <IconButton color="primary">
              <EventIcon />
            </IconButton>
          </div>
          <Button variant="contained" color="primary" onClick={handlePost}>
            Chirp
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default CreatePostComponent;

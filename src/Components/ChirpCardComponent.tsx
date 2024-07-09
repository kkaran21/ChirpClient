import React from 'react';
import { Card, CardContent, CardHeader, Avatar, IconButton, Typography, CardActions } from '@mui/material';
import { Favorite, Share, MoreVert, FavoriteOutlined } from '@mui/icons-material';
interface User {
    name: string;
    username: string;
    avatar: string;
  }
  
  interface Tweet {
    content: string;
  }
  
  // Define Props interface
  interface Props {
    user: User;
    tweet: Tweet;
  }
const ChirpCardComponent = ({ user , tweet  }: Props) => {
  return (
    <Card sx={{  width: 1, margin: 'auto', marginTop: 1 }}>
      <CardHeader
        avatar={
          <Avatar aria-label="user-avatar" src={user.avatar}>
            {user.name[0]}
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVert />
          </IconButton>
        }
        title={user.name}
        subheader={`@${user.username}`}
      />
      <CardContent>
      <Typography variant="h6" color="textSecondary" component="p" sx={{ fontWeight: 'bold' }}>
        static title
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {tweet.content}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteOutlined />
        </IconButton>
        <IconButton aria-label="share">
          <Share />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default ChirpCardComponent;

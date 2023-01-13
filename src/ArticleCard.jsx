import { Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, CardActions, Stack } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'


function ArticleCard(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;

  return (
          true ? (
            <Grid2 xs={3} >
              <Card elevation={3} sx={{ height: 1 }}>
                <CardMedia
                  sx={{ height: 200 }}
                  image={props.img}
                  title="green iguana"
                />

                <CardContent>
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Nat or Cael" src={avatar} />
                  <Typography gutterBottom variant="h5" component="div">
                    {props.title} 
                  </Typography>
                </Stack>
                </CardContent>

                <CardContent>
                  <Typography variant="body2" color="text.secondary">
                    {props.summary}
                  </Typography>
                  <CardActions>
                    <Button size="small" variant="outlined" onClick={props.handleOpenPost}>Read</Button>
                  </CardActions>
                </CardContent>
              </Card>
            </Grid2>
          ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )
  );
  }
  
  export default ArticleCard;
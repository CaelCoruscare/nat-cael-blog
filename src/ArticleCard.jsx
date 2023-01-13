import { Divider, Box, Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, CardActions, Stack, CardActionArea, Fade } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'
import Image from 'mui-image'


function ArticleCard(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;

  return (
          true ? (
            <Grid2 xs={3} >
              <Card elevation={3} sx={{ height: 1 }}>

              <CardActionArea onClick={props.handleOpenPost}>
                <Box sx={{bgcolor:'#989f40'}}>
                <Fade in timeout={1500} >
                  <CardMedia
                  sx={{ height: 200 }}
                  image={props.img}
                />
                </Fade>
                </Box>

                <CardContent >
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Nat or Cael" src={avatar} />
                  <Typography gutterBottom variant="h5" component="div" 
                  sx={{fontSize:'1.5vw'}}>
                    {props.title} 
                  </Typography>
                </Stack>
                </CardContent>
                
  <Divider />
                <CardContent>
                  <Typography variant="body2" color="text.secondary" 
                  sx={{ 
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    display: '-webkit-box',
                    WebkitLineClamp: '3',
                    WebkitBoxOrient: 'vertical'
                   }}>
                    {props.summary}
                  </Typography>
                </CardContent>

                </CardActionArea>
              </Card>
            </Grid2>
          ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )
  );
  }
  
  export default ArticleCard;
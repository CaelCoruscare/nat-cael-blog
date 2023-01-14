import { Divider, Box, Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, CardActions, Stack, CardActionArea, Fade } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'
import Image from 'mui-image'


function ArticleCard(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;
  const { loading = false } = props;

  return (
            <Grid2 xs={3} >
              <Card elevation={3} sx={{ height: 1 }}>

              <CardActionArea onClick={props.handleOpenPost}>
                
              {true ? (
                    <Skeleton variant="rectangular" animation='wave' height='80vh'/>
                )
                :
                (
                <Image
                height='24vh' 
                fit='cover'
                src={props.img}
                duration={1800}
                bgColor='#989f40'
                />
                )}

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
          
  );
  }
  
  export default ArticleCard;
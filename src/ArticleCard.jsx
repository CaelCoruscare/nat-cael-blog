import { Divider, Box, Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, CardActions, Stack, CardActionArea, Fade } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'
import Image from 'mui-image'


function ArticleCard(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;
  const { loading = false } = props;

  return (
            <Grid2 xs={6} md={3} >
              <Card elevation={3} sx={{ height: 1 }}>

              <CardActionArea onClick={props.handleOpenPost}>
                
              {loading ? (
                    <Skeleton variant="rectangular" animation='wave' height='24vh'/>
                )
                :
                (
                <Image
                height='24vh' 
                fit='cover'
                src={props.data.imag0}
                duration={1800}
                bgColor='#989f40'
                />
                )}

                <CardContent >
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Nat or Cael" src={avatar} />
                  <Typography gutterBottom variant="h5" component="div" 
                  sx={{fontSize:'1.2w'}}
                  md={{fontSize:'0.3vw'}}>
                    {props.data.title} 
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
                    {props.data.par0}
                  </Typography>
                </CardContent>

                </CardActionArea>
              </Card>
            </Grid2>
          
  );
  }
  
  export default ArticleCard;
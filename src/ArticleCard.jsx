import { Box, IconButton, Divider, Badge, Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, CardActions, Stack, CardActionArea, Fade } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'
import eyeOpen from './pictures/eyes/eyeOpenCircleNoColor.png'
import Image from 'mui-image'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useState } from 'react';


function ArticleCard(props) {
  const avatar = (props.data.author === 'cael' ) ? caelAvatar : natAvatar;
  const { loading = false } = props;
  const [isRead, setIsRead] = useState((localStorage.getItem("viewed-" + props.data.title)));

  return (
            <Grid2 xs={6} md={3} >
              
  <Badge badgeContent={!isRead ? 
                
                  <Image
                  height='4vh' 
                  fit='cover'
                  src={eyeOpen}
                  duration={1800}/>
                :<div></div>} >

              <Card elevation={3} sx={{ height: 1 }}>
              
              <CardActionArea onClick={()=>{setIsRead(true); props.handleOpenPost();}}>
                
              {loading ? (
                    <Skeleton variant="rectangular" animation='wave' height='24vh'/>
                )
                :
                (
                  <Box>
                <Image
                height='24vh' 
                fit='cover'
                src={"/content/" + props.data.imag0}
                duration={1}
                bgColor='#989f40'
                />
                
                
                
                </Box>
                )}

                <CardContent >
                <Stack direction="row" spacing={2}>
                  <Avatar alt="Nat or Cael" src={avatar} />
                  <Typography gutterBottom variant="h5" component="div" 
                  sx={{fontSize:'20px'}}
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
              </Badge>
              
            </Grid2>
          
  );
  }
  
  export default ArticleCard;
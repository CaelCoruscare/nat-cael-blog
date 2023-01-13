import * as React from 'react';
import { Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, Dialog, Stack, Box, Paper, Container, IconButton } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'mui-image'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'


function BlogPost(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;
  const [open, setOpen] = React.useState(false);

  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
          true ? (
            <div>
                
                
                <Image
                height='80vh' 
                fit='contain'
                src={props.img0}
                title="green iguana"
                duration={1800}
                bgColor='#2291bd'
                />

                <Container maxWidth="md">
                    <Stack direction="row" spacing={2} sx={{padding: 3}}>
                        <Avatar alt="Nat or Cael" src={caelAvatar}/>
                        <Typography variant="h5" component="div">
                            {'Arrival in Huahine'} 
                        </Typography>
                    </Stack>

                    <Paper sx={{padding: 2}}>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                            {props.p0}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                            {props.p1}
                        </Typography>
                        <Typography variant="body1" color="text.secondary" gutterBottom>
                            {props.p2}
                            </Typography>
                    </Paper>


                </Container>
                <IconButton
            edge="start"
            color="blue"
            onClick={props.handleClosePost}
            sx={{
                position: 'fixed',
                top: 0,
                right: 0,
            }}
            aria-label="close"
            >
                <CloseIcon />
            </IconButton>
            </div>
          ) : (
              <Skeleton variant="rectangular" width={210} height={118} />
            )
  );
  }
  
  export default BlogPost;
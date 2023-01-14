import * as React from 'react';
import { Card, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, Dialog, Stack, Box, Paper, Container, IconButton } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'mui-image'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'


function BlogPost(props) {
  const avatar = (props.author === 'cael' ) ? caelAvatar : natAvatar;
  const [open, setOpen] = React.useState(false);
  const { loading = false } = props;

  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
          loading ? (
            <Skeleton variant="rectangular" width={210} height={118} />
          )
          :
          (
            <Box
            sx={{
                backgroundColor:'#2291bd'}}
            >
                
                <Image
                height='80vh' 
                fit='contain'
                src={props.img0}
                duration={1800}
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
                left: 20,
            }}
            aria-label="close"
            >
                <ArrowBackIcon sx={{ fontSize: 32, color: '#ede1b5' }} />
            </IconButton>
            </Box>
          )
  );
  }
  
  export default BlogPost;
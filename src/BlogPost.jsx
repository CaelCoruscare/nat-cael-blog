import * as React from 'react';
import { Divider, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, Dialog, Stack, Box, Paper, Container, IconButton } from "@mui/material";
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'mui-image'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import caelAvatar from './avatars/avatarCael.jpg'
import natAvatar from './avatars/avatarNatalie.jpg'


function BlogPost(props) {
  const avatar = (props.data.author === 'cael' ) ? caelAvatar : natAvatar;
  const [open, setOpen] = React.useState(false);
  const { loading = false } = props;

  
const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  const handleClose = () => {
    setOpen(false);
  };

  return (
          
            <Box
            sx={{
                backgroundColor:'#3ba3bf'}}
            >
                {loading ? (
                    <Skeleton variant="rectangular" animation='wave' height='80vh'
                     />
                )
                :
                (
                <Image
                bgColor={'#64d4e4'}
                height='80vh' 
                fit='contain'
                src={"/content/" + props.data.imag0}
                duration={1800}
                />
                )}

                <Container maxWidth="md">
                    <Stack direction="row" spacing={2} sx={{padding: 3}}>
                        <Avatar alt="Nat or Cael" src={avatar}/>
                        <Typography variant="h5" component="div">
                            {props.data.title} 
                        </Typography>
                    </Stack>

                    <Paper sx={{padding: 2, paddingTop: 0, bgcolor:'#f3faf9'}}>
                        <Typography variant="body1" color="text.secondary" gutterBottom
                        sx={{paddingTop: 2, paddingBottom: 2}}>
                            {props.data.par0}
                        </Typography>
                        
                        
                        <Box>
                            {(props.data.imag1 === "") ? <Box/> : 
                                loading ? (
                                    <Skeleton variant="rectangular" animation='wave' height='70vh'
                                    />
                                )
                                :
                                (
                                    <Image
                                    bgColor={'#64d4e4'}
                                    height='70vh' 
                                    fit='cover'
                                    src={"/content/" + props.data.imag1}
                                    duration={1800}
                                    />
                                )

                            }
                        </Box>

                        <Typography variant="body1" color="text.secondary" gutterBottom
                        sx={{paddingTop: 2, paddingBottom: 2}}>
                            {props.data.par1}
                        </Typography>
                        
                        <Box>
                            {(props.data.imag2 === "") ? <Box/> : 
                                loading ? (
                                    <Skeleton variant="rectangular" animation='wave' height='50vh'
                                    />
                                )
                                :
                                (
                                    <Image
                                    bgColor={'#64d4e4'}
                                    height='50vh' 
                                    fit='cover'
                                    src={"/content/" + props.data.imag2}
                                    duration={1800}
                                    />
                                )

                            }
                        </Box>

                        <Typography variant="body1" color="text.secondary" gutterBottom
                        sx={{paddingTop: 2, paddingBottom: 2}}>
                            {props.data.par2}
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
                <ArrowBackIcon sx={{ fontSize: 32, color: 'black' }} />
            </IconButton>
            </Box>
  );
  }
  
  export default BlogPost;
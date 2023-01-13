import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Container, Avatar, Skeleton, CardMedia, Typography, CardContent, Button, Dialog, Stack, Form, Paper, IconButton } from '@mui/material';
import ArticleCard from './ArticleCard';
import { useState } from 'react';
import BlogPost from './BlogPost';
import Image from 'mui-image'
import Slide from '@mui/material/Slide';
import CloseIcon from '@mui/icons-material/Close';

import caelAvatar from './avatars/avatarCael.jpg'

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function GridOfPosts() {
    const[postIsOpen, setPostIsOpen] = useState(false);

    
    const[p0, setP0] = useState('Placeholder');
    const[p1, setP1] = useState('Placeholder');
    const[p2, setP2] = useState('Placeholder');

    const[img0, setImg0] = useState('');
    const[img1, setImg1] = useState('');
    const[img2, setImg2] = useState('');


    function handleOpenPost(postNum){
        console.log('hi');
        assignImages(postNum);
        assignParagraphs(postNum);
        setPostIsOpen(true);
    }

    function handleClosePost(){
        setPostIsOpen(false);
    }

    function assignParagraphs(postNum){
        switch (postNum){
        case 0:
            setP0('We decided to travel to the island of Huahine. The island is much like the better-known island of Bora Bora in terms of climate and terrain, but is not built up as a tourism spot. Instead of over-the-water bungalows there are home stays, and most of the islands ~6000 residents do not work in the tourism industry.');
            setP1('We wanted to continue traveling with our friend Leander, but found it difficult to find a place with two rooms open. There was some confusion in which we ended up separately booking the same exact room. This happened because Natalie and I booked online, and Leander booked over the phone after being swapped between several different numbers “my friend might have a room, call them at this number… my mother in law may have a room, call her at this number”. Thankfully the host was gracious enough to offer to pull an additional mattress into the room for a slightly higher cost per night.')
            setP2('')
            break
        case 1:
            setP0('Paragraph 1')
            setP1('Paragraph 2')
            setP2('Paragraph 3')
            break
        }
    }   
    
    function assignImages(postNum){
        switch (postNum){
        case 0:
            setImg0('/content/arrivalInHuahine/inFrontOfThePlane.jpg')

            break
        case 1:
            setImg0('/content/huahineLearningToBike/learningToBike.jpeg')
            break
        }
    }   
    
    return (
    <div>
        <Grid2 container spacing={2}>
            <ArticleCard author='cael' title='Arrival in Huahine' handleOpenPost={() => handleOpenPost(0)} img='/content/arrivalInHuahine/inFrontOfThePlane.jpg' summary='We have an interesting time finding a room, continue traveling with our friend Leander, and Natalie faces her fears by traveling on a small plane.'/>
            <ArticleCard author='nat' title='Learning to Ride a Bike' handleOpenPost={() => handleOpenPost(1)} img='/content/huahineLearningToBike/learningToBike.jpeg'/>
            <ArticleCard author='cael' title='Arrival in Huahine'/>
            <ArticleCard author='nat' title='Learning to Ride a Bike'/>
        </Grid2>

        <Dialog
        fullScreen
        open={postIsOpen}
        onClose={handleClosePost}
        TransitionComponent={Transition}
        >
            
            <BlogPost 
            handleClosePost={handleClosePost}
            img0={img0}
            p0={p0}
            p1={p1}
            p2={p2}
            />

        </Dialog>
    </div>
    );
  }
  
  export default GridOfPosts;
  
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
import natAvatar from './avatars/avatarNatalie.jpg'

const data = [
    {title: "Heading to Huahine"
    ,author: {name: "Cael", avatar: {caelAvatar}}
    ,imag0: "/content/arrivalInHuahine/inFrontOfThePlane.jpg"
    ,imag1: ""
    ,imag2: ""
    ,par0: "We decided to travel from Tahiti to the island of Huahine. The island is much like the better-known island of Bora Bora in terms of climate and terrain, but is not built up as a tourism spot. Instead of over-the-water bungalows there are home stays, and most of the islands ~6000 residents do not work in the tourism industry."
    ,par1: "We wanted to continue traveling with our friend Leander, but found it difficult to find a place with two rooms open. There was some confusion in which we ended up separately booking the same exact room. This happened because Natalie and I booked online, and Leander booked over the phone after being swapped between several different numbers “my friend might have a room, call them at this number… my mother in law may have a room, call her at this number”. Thankfully the host was gracious enough to offer to pull an additional mattress into the room for a slightly higher cost per night."
    ,par2: ""
    },
    {title: "Learning to Ride a Bike"
    ,author: {name: "Natalie", avatar: {natAvatar}}
    ,imag0: "/content/huahineLearningToBike/learningToBike.jpeg"
    ,imag1: ""
    ,imag2: ""
    ,par0: "Fear and memories of past embarrassments flooded my mind, as sweat poured down my back in the sticky heat and soaked the long shirt I had worn in case of falls. Part of me regretted agreeing to lessons the moment Cael rolled the rusting green bicycle out onto the dirt road near our homestay on Huahine. A combination of poor coordination and anxiety had prevented me from learning to ride as a child and Cael was dead set on helping me conquer that fear. Reluctantly I mounted the bike, my heart pounding as it wobbled violently."
    ,par1: "With Cael and our friend Leander there to support me, I practiced getting on and off until I could do so relatively smoothly. Next came practicing pedaling with one foot still on the ground to catch me in case of falling, and when that failed to send me flying into the road Cael instructed me to push down harder on the pedal. This sent me coasting a few feet before he told me to put my foot down. Sometimes I was even able to have both feet off the ground for brief periods of time. This was petrifying but exhilarating, and I felt like maybe I actually had a chance to actually learn how to bike. The lesson was cut short by rain and to my my immense relief I was able to change out of the long pants and shirt. If all goes well I will be riding bikes soon!"
    ,par2: ""
    },
    {title: "Cutting Off Most of My Hair"
    ,author: {name: "Natalie", avatar: {natAvatar}}
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: "During our stay in French Polynesia, I was dogged by a very persistent enemy. It clung to my shoulders and neck during hikes and walks through town, threatening to smother me with intolerable warmth. It grew tangled and bedraggled with rain and sweat and sunscreen and got caught in the buckles of my pack. My hair was quickly becoming my greatest nemesis, as I struggled with the Sisyphean task of keeping it clean and detangled in the tropical heat. Despite initial reluctance due to an awkward pageboy haircut in middle school (the result of Silly Putty and an overzealous little sibling armed with scissors), it was rapidly becoming my only option if I wanted to prevent becoming a dreadlocked walking carpet. "
    ,par1: "After trying and failing to find a skilled barber on the island of Huahine, I resolved that I would chop it all off once we returned to the Tahitian city of Papeete. I walked into the salon armed with a picture of a woman with a bob cut and my debit card, and asked that the offending tresses be hacked off. After shearing off all of the hair below my shoulders, the barber paraded the great thick ponytail around like a trophy of war before he proceeded to shampoo and finish my coiffure. I am still getting used to the end result, often trying to tuck hair that no longer exists behind my ears but I also feel unburdened and ready to take on the world."
    ,par2: ""
    },
    {title: "Learning to Ride a Bike"
    ,author: {name: "Natalie", avatar: {natAvatar}}
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: "Fear and memories of past embarrassments flooded my mind, as sweat poured down my back in the sticky heat and soaked the long shirt I had worn in case of falls. Part of me regretted agreeing to lessons the moment Cael rolled the rusting green bicycle out onto the dirt road near our homestay on Huahine. A combination of poor coordination and anxiety had prevented me from learning to ride as a child and Cael was dead set on helping me conquer that fear. Reluctantly I mounted the bike, my heart pounding as it wobbled violently."
    ,par1: "With Cael and our friend Leander there to support me, I practiced getting on and off until I could do so relatively smoothly. Next came practicing pedaling with one foot still on the ground to catch me in case of falling, and when that failed to send me flying into the road Cael instructed me to push down harder on the pedal. This sent me coasting a few feet before he told me to put my foot down. Sometimes I was even able to have both feet off the ground for brief periods of time. This was petrifying but exhilarating, and I felt like maybe I actually had a chance to actually learn how to bike. The lesson was cut short by rain and to my my immense relief I was able to change out of the long pants and shirt. If all goes well I will be riding bikes soon!"
    ,par2: ""
    },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function GridOfPosts() {
    const[postIsOpen, setPostIsOpen] = useState(false);

    const[blogTitle, setBlogTitle] = useState('Placeholder Title');

    const[p0, setP0] = useState('Placeholder Paragraph');
    const[p1, setP1] = useState('Placeholder');
    const[p2, setP2] = useState('Placeholder');

    const[img0, setImg0] = useState('');
    const[img1, setImg1] = useState('');
    const[img2, setImg2] = useState('');


    function handleOpenPost(postNum){
        assignTitle(postNum);
        assignImages(postNum);
        assignParagraphs(postNum);
        setPostIsOpen(true);
    }

    function handleClosePost(){
        setPostIsOpen(false);
    }


    function assignTitle(postNum){
        setBlogTitle(data[postNum].title);
    }

    function assignParagraphs(postNum){
        setP0(data[postNum].par0);
        setP1(data[postNum].par1);
        setP2(data[postNum].par2);
    }   
    
    function assignImages(postNum){
        setImg0(data[postNum].imag0);
        setImg1(data[postNum].imag1);
        setImg2(data[postNum].imag2);
    }   
    
    return (
    <div>
        <Grid2 container spacing={2}>
            <ArticleCard data={data[0]} handleOpenPost={() => handleOpenPost(0)}/>
            <ArticleCard data={data[1]} handleOpenPost={() => handleOpenPost(1)}/>
            <ArticleCard data={data[2]} handleOpenPost={() => handleOpenPost(2)}/>
            <ArticleCard data={data[3]} title='Snorkeling at the Coral Gardens'/>
        </Grid2>

        <Dialog
        fullScreen
        open={postIsOpen}
        onClose={handleClosePost}
        TransitionComponent={Transition}
        >
            
            <BlogPost 
            handleClosePost={handleClosePost}
            title={blogTitle}
            img0={img0}
            p0={p0}
            img1={img1}
            p1={p1}
            img2={img2}
            p2={p2}
            />

        </Dialog>
    </div>
    );
  }
  
  export default GridOfPosts;
  
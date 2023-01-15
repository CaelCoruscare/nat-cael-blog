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
    ,author: "cael"
    ,imag0: "/content/arrivalInHuahine/inFrontOfThePlane.jpg"
    ,imag1: "/content/arrivalInHuahine/chattingOnThePorch.jpeg"
    ,imag2: "/content/arrivalInHuahine/tableInside.jpeg"
    ,par0: "We decided to travel from Tahiti to the island of Huahine. The island is much like the better-known island of Bora Bora in terms of climate and terrain, but is not built up as a tourism spot. Instead of over-the-water bungalows there are home stays, and most of the islands ~6000 residents do not work in the tourism industry."
    ,par1: "We wanted to continue traveling with our friend Leander, but found it difficult to find a place with two rooms open. There was some confusion in which we ended up separately booking the same exact room. This happened because Natalie and I booked online, and Leander booked over the phone after being swapped between several different numbers “my friend might have a room, call them at this number… my mother in law may have a room, call her at this number”. Thankfully the host was gracious enough to offer to pull an additional mattress into the room for a slightly higher cost per night."
    ,par2: ""
    },
    {title: "Learning to Ride a Bike"
    ,author: "nat"
    ,imag0: "/content/huahineLearningToBike/learningToBike.jpeg"
    ,imag1: "/content/huahineLearningToBike/bikingLearningArea.jpeg"
    ,imag2: ""
    ,par0: "Fear and memories of past embarrassments flooded my mind, as sweat poured down my back in the sticky heat and soaked the long shirt I had worn in case of falls. Part of me regretted agreeing to lessons the moment Cael rolled the rusting green bicycle out onto the dirt road near our homestay on Huahine. A combination of poor coordination and anxiety had prevented me from learning to ride as a child and Cael was dead set on helping me conquer that fear. Reluctantly I mounted the bike, my heart pounding as it wobbled violently."
    ,par1: "With Cael and our friend Leander there to support me, I practiced getting on and off until I could do so relatively smoothly. Next came practicing pedaling with one foot still on the ground to catch me in case of falling, and when that failed to send me flying into the road Cael instructed me to push down harder on the pedal. This sent me coasting a few feet before he told me to put my foot down. Sometimes I was even able to have both feet off the ground for brief periods of time. This was petrifying but exhilarating, and I felt like maybe I actually had a chance to actually learn how to bike. The lesson was cut short by rain and to my my immense relief I was able to change out of the long pants and shirt. If all goes well I will be riding bikes soon!"
    ,par2: ""
    },
    {title: "Cutting Off Most of My Hair"
    ,author: "nat"
    ,imag0: "/content/haircut/haircutInARestaurant.jpg"
    ,imag1: "/content/haircut/beforeNAfter.jpg"
    ,imag2: ""
    ,par0: "During our stay in French Polynesia, I was dogged by a very persistent enemy. It clung to my shoulders and neck during hikes and walks through town, threatening to smother me with intolerable warmth. It grew tangled and bedraggled with rain and sweat and sunscreen and got caught in the buckles of my pack. My hair was quickly becoming my greatest nemesis, as I struggled with the Sisyphean task of keeping it clean and detangled in the tropical heat. Despite initial reluctance due to an awkward pageboy haircut in middle school (the result of Silly Putty and an overzealous little sibling armed with scissors), it was rapidly becoming my only option if I wanted to prevent becoming a dreadlocked walking carpet. "
    ,par1: "After trying and failing to find a skilled barber on the island of Huahine, I resolved that I would chop it all off once we returned to the Tahitian city of Papeete. I walked into the salon armed with a picture of a woman with a bob cut and my debit card, and asked that the offending tresses be hacked off. After shearing off all of the hair below my shoulders, the barber paraded the great thick ponytail around like a trophy of war before he proceeded to shampoo and finish my coiffure. I am still getting used to the end result, often trying to tuck hair that no longer exists behind my ears but I also feel unburdened and ready to take on the world."
    ,par2: ""
    },
    {title: "Meeting Leander"
    ,author: "nat"
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: "Morning broke on our first day in French Polynesia, in the town of Faʻaʻā not far from the island's airport. Somewhat bleary eyed from our marathon of travel we made our way into the dining room for a breakfast of instant coffee and fruit. As we finished our meal we saw the door of Eva's home opening to admit a slim, muscular young man with short blond hair and a growth of beard on his face. He looked exhausted but he opened up when we greeted him, introducing himself as Leander and saying that he was a flight attendant and advocate for disabled children from Germany.  Despite how tired he was he readily agreed to come with us on our attempt to summit Mont Aorai, the third highest peak on Tahiti. Provisioned with dragonfruit and mixed nuts from the market, we set off for the nearby town of Perai after Eva gave us the directions to O'Belvedere Restaurant, the starting point of the hike. We took the bus and then we embarked on what quickly began to feel like a forced march rather than a pleasurable excursion."
    ,par1: "What we had assumed would be a quick walk to the restaurant proved to be a torturous slog of 11 km up the foothills of the mountain we hoped to climb. The pavement was far more punishing to our legs than soil and rocks would have been, each step sending a fresh wave of dull pain through our ankles, knees and hips. The sun beat down on us as we tromped up the road, relieved only by occasional islands of shade as the path grew steeper and steeper. We stopped to eat our provisions and rest, sure that our salvation was only 80 meters away after consulting google maps. This proved to be incorrect and we had to trudge several more kilometers before reaching the restaurant, too exhausted to even contemplate traveling further. Instead we ate lunch (burgers for the boys and a goat cheese salad for me) and took a taxi home. Following this, Leander collapsed in his bed and refused to stir for the rest of the day."
    ,par2: ""
    },
    {title: "Saying Goodbye to Leander"
    ,author: "nat"
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: "Once he had recovered from his exhaustion, Leander proved to be an amazing travel companion, always full of interesting stories and possessed of a sharp, often dark sense of humor that was as funny as it was shockingly innappropriate. We journeyed to the black sand beach at Venus Point, and worked together to find flights to Huahine and accommodations in a local woman's home. We shared expenses and a room on the island, and we feel we developed an enduring bond of friendship through our shared adventures. When the blisters I developed from a pair of cheap supermarket flip flops grew unbearably painful after breaking, Leander sat me down and assiduously cleaned them out before disinfecting and bandaging them so they could heal properly. "
    ,par1: "Following our ignominious failure at Aorai on Tahiti, we were determined to succeed in hiking up at least one French Polynesian peak and settled on one in Maeva near our bedsit, that took us up to beautiful old temples built of basalt high on the cloud shrouded slopes that gave us an amazing view of the coconut palm studded lowlands below. As amazing as the ascent was, we got lost on the way down and ended up having to bushwhack a path through the tangled undergrowth towards the road, only to see a beautifully manicured path meters from where we had burst out of the trees, which elicited a joint chorus of disbelieving laughter and exclamations of \"you're fucking kidding me.\" "
    ,par2: "We spent the rest of that day exploring the town of Fare together, knowing it was our last evening before we had to part ways. As we hugged him before his flight from the tiny airport on Huahine, Cael and I both felt sad to be parting from our new companion so quickly and expressed the hope of seeing him if our paths crossed during our travels. In Leander we have made a great new friend, and hope that we will see him again one day soon. "
    },
    {title: "TitleHere"
    ,author: "nat"
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: ""
    ,par1: ""
    ,par2: ""
    },
];

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function GridOfPosts() {
    const[postIsOpen, setPostIsOpen] = useState(false);
    const[activePostData, setActivePostData] = useState(null);


    function handleOpenPost(postNum){
        setActivePostData(data[postNum]);
        setPostIsOpen(true);
    }

    function handleClosePost(){
        setPostIsOpen(false);
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
            data={activePostData}
            />

        </Dialog>
    </div>
    );
  }
  
  export default GridOfPosts;
  
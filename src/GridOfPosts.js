import * as React from 'react';
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { Dialog, Stack, Form, Paper, IconButton, Badge } from '@mui/material';
import ArticleCard from './ArticleCard';
import { useState } from 'react';
import BlogPost from './BlogPost';
import Slide from '@mui/material/Slide';

const posts = [
    {title: "Heading to Huahine"
    ,author: "cael"
    ,date: "2023-01-08T00:00:00.000Z"
    ,imag0: "arrivalInHuahine/inFrontOfThePlane.jpg"
    ,imag1: "arrivalInHuahine/chattingOnThePorch.jpeg"
    ,imag2: "arrivalInHuahine/tableInside.jpeg"
    ,par0: "We decided to travel from Tahiti to the island of Huahine. The island is much like the better-known island of Bora Bora in terms of climate and terrain, but is not built up as a tourism spot. Instead of over-the-water bungalows there are home stays, and most of the islands ~6000 residents do not work in the tourism industry."
    ,par1: "We wanted to continue traveling with our friend Leander, but found it difficult to find a place with two rooms open. There was some confusion in which we ended up separately booking the same exact room. This happened because Natalie and I booked online, and Leander booked over the phone after being swapped between several different numbers “my friend might have a room, call them at this number… my mother in law may have a room, call her at this number”. Thankfully the host was gracious enough to offer to pull an additional mattress into the room for a slightly higher cost per night."
    ,par2: ""
    },
    {title: "Learning to Ride a Bike"
    ,author: "nat"
    ,date: "2023-01-10T10:00:00.000Z"
    ,imag0: "huahineLearningToBike/learningToBike.jpeg"
    ,imag1: "huahineLearningToBike/bikingLearningArea.jpeg"
    ,imag2: ""
    ,par0: "Fear and memories of past embarrassments flooded my mind, as sweat poured down my back in the sticky heat and soaked the long shirt I had worn in case of falls. Part of me regretted agreeing to lessons the moment Cael rolled the rusting green bicycle out onto the dirt road near our homestay on Huahine. A combination of poor coordination and anxiety had prevented me from learning to ride as a child and Cael was dead set on helping me conquer that fear. Reluctantly I mounted the bike, my heart pounding as it wobbled violently."
    ,par1: "With Cael and our friend Leander there to support me, I practiced getting on and off until I could do so relatively smoothly. Next came practicing pedaling with one foot still on the ground to catch me in case of falling, and when that failed to send me flying into the road Cael instructed me to push down harder on the pedal. This sent me coasting a few feet before he told me to put my foot down. Sometimes I was even able to have both feet off the ground for brief periods of time. This was petrifying but exhilarating, and I felt like maybe I actually had a chance to actually learn how to bike. The lesson was cut short by rain and to my my immense relief I was able to change out of the long pants and shirt. If all goes well I will be riding bikes soon!"
    ,par2: ""
    },
    {title: "Cutting Off Most of My Hair"
    ,author: "nat"
    ,date: "2023-01-12T00:00:00.000Z"
    ,imag0: "haircut/haircutInARestaurant.jpg"
    ,imag1: "haircut/beforeNAfter.jpg"
    ,imag2: ""
    ,par0: "During our stay in French Polynesia, I was dogged by a very persistent enemy. It clung to my shoulders and neck during hikes and walks through town, threatening to smother me with intolerable warmth. It grew tangled and bedraggled with rain and sweat and sunscreen and got caught in the buckles of my pack. My hair was quickly becoming my greatest nemesis, as I struggled with the Sisyphean task of keeping it clean and detangled in the tropical heat. Despite initial reluctance due to an awkward pageboy haircut in middle school (the result of Silly Putty and an overzealous little sibling armed with scissors), it was rapidly becoming my only option if I wanted to prevent becoming a dreadlocked walking carpet. "
    ,par1: "After trying and failing to find a skilled barber on the island of Huahine, I resolved that I would chop it all off once we returned to the Tahitian city of Papeete. I walked into the salon armed with a picture of a woman with a bob cut and my debit card, and asked that the offending tresses be hacked off. After shearing off all of the hair below my shoulders, the barber paraded the great thick ponytail around like a trophy of war before he proceeded to shampoo and finish my coiffure. I am still getting used to the end result, often trying to tuck hair that no longer exists behind my ears but I also feel unburdened and ready to take on the world."
    ,par2: ""
    },
    {title: "Meeting Leander & Mt Aorai"
    ,author: "nat"
    ,date: "2023-01-06T00:00:00.000Z"
    ,imag0: "mountAorai/leanderOnTheTree.jpeg"
    ,imag1: "mountAorai/viewFromNearBelvedere.jpeg"
    ,imag2: "mountAorai/popeInDaRestaurant.jpeg"
    ,par0: "Morning broke on our first day in French Polynesia, in the town of Faʻaʻā not far from the island's airport. Somewhat bleary eyed from our marathon of travel we made our way into the dining room for a breakfast of instant coffee and fruit. As we finished our meal we saw the door of Eva's home opening to admit a slim, muscular young man with short blond hair and a growth of beard on his face. He looked exhausted but he opened up when we greeted him, introducing himself as Leander and saying that he was a flight attendant and advocate for disabled children from Germany.  Despite how tired he was he readily agreed to come with us on our attempt to summit Mont Aorai, the third highest peak on Tahiti. Provisioned with dragonfruit and mixed nuts from the market, we set off for the nearby town of Perai after Eva gave us the directions to O'Belvedere Restaurant, the starting point of the hike. We took the bus and then we embarked on what quickly began to feel like a forced march rather than a pleasurable excursion."
    ,par1: "What we had assumed would be a quick walk to the restaurant proved to be a torturous slog of 11 km up the foothills of the mountain we hoped to climb. The pavement was far more punishing to our legs than soil and rocks would have been, each step sending a fresh wave of dull pain through our ankles, knees and hips. The sun beat down on us as we tromped up the road, relieved only by occasional islands of shade as the path grew steeper and steeper. We stopped to eat our provisions and rest, sure that our salvation was only 80 meters away after consulting google maps. This proved to be incorrect and we had to trudge several more kilometers before reaching the restaurant, too exhausted to even contemplate traveling further. Instead we ate lunch (burgers for the boys and a goat cheese salad for me) and took a taxi home. Following this, Leander collapsed in his bed and refused to stir for the rest of the day."
    ,par2: ""
    },
    {title: "Hanging with Leander"
    ,author: "nat"
    ,date: "2023-01-11T00:00:00.000Z"
    ,imag0: "mountainTemples/crazyInTheBackground.jpeg"
    ,imag1: "mountainTemples/fourArms.jpeg"
    ,imag2: "mountainTemples/thePath.jpeg"
    ,par0: "Once he had recovered from his exhaustion, Leander proved to be an amazing travel companion, always full of interesting stories and possessed of a sharp, often dark sense of humor that was as funny as it was shockingly innappropriate. We journeyed to the black sand beach at Venus Point, and worked together to find flights to Huahine and accommodations in a local woman's home. We shared expenses and a room on the island, and we feel we developed an enduring bond of friendship through our shared adventures. When the blisters I developed from a pair of cheap supermarket flip flops grew unbearably painful after breaking, Leander sat me down and assiduously cleaned them out before disinfecting and bandaging them so they could heal properly. "
    ,par1: "Following our ignominious failure at Aorai on Tahiti, we were determined to succeed in hiking up at least one French Polynesian peak and settled on one in Maeva near our bedsit, that took us up to beautiful old temples built of basalt high on the cloud shrouded slopes that gave us an amazing view of the coconut palm studded lowlands below. As amazing as the ascent was, we got lost on the way down and ended up having to bushwhack a path through the tangled undergrowth towards the road, only to see a beautifully manicured path meters from where we had burst out of the trees, which elicited a joint chorus of disbelieving laughter and exclamations of \"you're fucking kidding me.\" "
    ,par2: "We spent the rest of that day exploring the town of Fare together, knowing it was our last evening before we had to part ways. As we hugged him before his flight from the tiny airport on Huahine, Cael and I both felt sad to be parting from our new companion so quickly and expressed the hope of seeing him if our paths crossed during our travels. In Leander we have made a great new friend, and hope that we will see him again one day soon. "
    },
    {title: "Birds in Huahine"
    ,author: "nat"
    ,date: "2023-01-09T00:00:00.000Z"
    ,imag0: "birdsOfHuahine/mynahBird.jpeg"
    ,imag1: "birdsOfHuahine/bul-bulBird.jpeg"
    ,imag2: "birdsOfHuahine/mePretty.jpeg"
    ,par0: "On both Tahiti and Huahine, Cael and I have been spotting three distinct birds over and over. The Common Myna birds are about the size of a grackle and have a naked yellow patch of skin around its eyes to match its yellow legs and beak. They run and hop around on the ground collecting food and nesting material. "
    ,par1: "The Red Vented Bul Buls have a Cardinal-like crest and dark plumage, and we've seen them chattering in palms and swallowing large caterpillars."
    ,par2: "The last common birds we've seen is the Zebra Dove, a small grey bird that courts by bowing and extending its fan of tail feathers while cooing softly. All of these birds are actually introduced species, with Bul Buls and Mynas coming from India and the Zebra Dove from Southeast Asia. While interesting and beautiful they are not native like the terns and petrels that hunt the waters of this archipelago."
    },
    {title: "Beach at Coral Gardens"
    ,author: "cael"
    ,date: "2023-01-10T00:00:00.000Z"
    ,imag0: "/coralGardenBeach/coralCrab.jpeg"
    ,imag1: "/coralGardenBeach/natalieOnBeach.jpeg"
    ,imag2: "/coralGardenBeach/viewOfBeach.jpeg"
    ,par0: "Check out this really cute hermit crab that we found! Instead of a snail shell for a home, they found a piece of coral to live in. There were hundreds of these tiny hermit crabs crawling along the beach. No large ones though. For some reason, we didn't see much in the way of large shells, so perhaps it had something to do with that?"
    ,par1: "Natalie enjoyed the beach, although she was bitten by a few ants. She also made sure to wear a shawl to protect her shoulders from the sun, since we've seen plenty of sun in the last week."
    ,par2: "Off in the distance, we could see where the coral broke the waves. Where we were at had almost no waves, so it was surprisingly quiet. "
    },
    {title: "Arriving at the Faerie Penguin Sanctuary"
    ,author: "nat"
    ,date: "2023-01-17T21:00:00.000Z"
    ,imag0: "arrivalAtFaerieSanctuary/busStop.jpeg"
    ,imag1: "arrivalAtFaerieSanctuary/redBilledGull.jpeg"
    ,imag2: "arrivalAtFaerieSanctuary/woodArt.jpeg"
    ,par0: "When we learned that a colony of endangered fairy blue penguins (Eudyptula minor) lived on the Otago Peninsula near Dunedin, I knew that we needed to see them. I booked the Pukekura Penguin Experience at the Royal Albatross Center for 9 PM the night of our arrival, but exhaustion and an injured toe delayed us until Tuesday. On Tuesday night we set off at 7:30 in the rain for Harrington Point at the tip of the peninsula, driving along a winding coastal highway called Portobello Road. As we pulled into the parking lot of the Albatross Center we were amazed at the sheer number of endangered red-billed gulls (Chroicocephalus novaehollandiae scopulinus) aka tarāpunga flying overhead and sitting on fenceposts and parked cars."
    ,par1: "The next thing that struck us other than the cold wind was the sheer magnitude of the smell, a reek of ammonia and old fish wafting off of the vast galaxy of seabird droppings splattered on the pavement and cars in the lot. We gratefully entered the center and checked in before taking our seats for the opening presentation. We learned about the life history of the penguins, which are called kororā in Māori. By the time we visited the penguins were apparently wrapping up with their second clutch of young for the year, who were preparing to fledge but were still being fed by their parents for now. "
    ,par2: "We also learned that the beach we were going to visit is a wāhi tapu, or sacred place to the Manawhenua Māori, as it was one of the first places they landed on their arrival on the South Island. They call it Takiharuru, meaning \"the place that echoes with the cries of the sea\" and it was there that Chief Karetai signed the Treaty of Waitangi with the English in 1840. It went some way to protect the rights and cultural identity of the Māori people but it also gave the Crown dominion over New Zealand. The long history of violence and prejudice against the Māori is only now being addressed properly, as in many areas colonized by Europeans in the 15th-20th centuries."
    },
    {title: "Waiting for the Faerie Penguins"
    ,author: "nat"
    ,date: "2023-01-17T22:00:00.000Z"
    ,imag0: "waitingForFaeries/theBeach.jpeg"
    ,imag1: "waitingForFaeries/theLion.jpeg"
    ,imag2: "waitingForFaeries/theGuard.jpeg"
    ,par0: "Once the presentation wrapped up we stepped out into the cold, blustery evening and began walking downhill towards the viewing platforms on Takiharuru Beach. It was disheartening to see rabbits hopping on the grassy slopes, where they had been living ever since they were introduced by Europeans for hunting. Their voracious appetites make them a danger to native vegetation and their burrowing helps speed soil erosion in sensitive coastal areas like the Otago Peninsula."
    ,par1: "We were informed by our guides that we would hear a high pitched quacking noise out at sea as the penguins gathered together in a raft for safety, but that they would not come ashore until it was dark to avoid attention from predators like birds of prey and sea lions that might be on the beach. For a while all we heard were the long, mournful calls of gulls wheeling overhead and the cries of the sea as it pounded against the shore. The only creature on the beach was a solitary sea lion, barely visible against the dark rocks. As darkness fell, the temperature fell too."
    ,par2: "We were shivering when we spotted something moving near one of the nest boxes. It was a kororā chick, still mostly covered in brown down and so round it looked like a plush toy. The patches of white feathers on its belly revealed that it was beginning to molt into a juvenile coat of waterproof plumage. Like us the chick was eagerly awaiting the arrival of the adults, standing guard in front of its nest box that was situated next to what was essentially a well worn penguin highway. After the sun finally dipped below the horizon, we heard the quacking of assembling kororā out at sea, but we could not yet make them out in the gloom beyond the viewing platform lights."
    },
    {title: "The Faeries Arrive!"
    ,author: "nat"
    ,date: "2023-01-17T23:00:00.000Z"
    ,imag0: "faeriesArrive/running.jpeg"
    ,imag1: "faeriesArrive/climbing.jpeg"
    ,imag2: "faeriesArrive/chasing.jpeg"
    ,par0: "Suddenly, a densely packed crowd of tiny blue penguins barely 30 cm (12 inches) tall flopped ashore, landing on their bellies before using their flippers to stand up. Once on land, the graceful raft became a waddle and the penguins rushed across the open beach towards the vegetated dunes where we were sitting. (Cael's note: It's really hard to take pictures of penguins in the dark, with no flash allowed)"
    ,par1: "Once in the shelter of dune grass, their demeanor changed at once. Out in the open they had evoked the image of a tiny business man desperately trying to get to a meeting on time as they waddled/hopped across the sand. Now that they felt safe, the penguins seemed content to preen themselves and their partners, squabble and loiter at the bottom of the dune. One of our guides explained that with their chicks rapidly growing towards independence, the parents were not in a hurry to get home. We soon saw why when one of the penguins made its way up the hill, only to be tackled by the large chick waiting in the path. The youngster's strident begging calls were reinforced with pecks aimed at the back and hindquarters and flipper slaps. Eventually, the ravenous youngster's harried parent obliged and regurgitated a warm seafood soup into its waiting beak. The parent had to do this multiple times before the chick stopped screaming and thrashing. It apparently was not satisfied yet, because it kept going after every adult that passed until it finally found its other parent, who gave it second helpings of seafood chowder fresh from the crop. Begrudgingly, the almost spherical chick retreated into its nest box after the second parent refused to feed it anymore. It was already being weaned off of food brought by its parents, and soon the chick would molt its down and have to catch its own fish. This drama was repeated across the colony, with some parents having two boisterous chicks running after them and tackling them as they squabbled for the limited food available. (Cael's note: Another note on pictures. This was the clearest one I could get, because I needed a long capture time to make up for the lack of light. Trust me though, the baby was vicously attacking.)"
    ,par2: "I stayed to watch for some time, even after the cold overcame Cael, and I will never forget what a privilege it is to see such beautiful, endangered birds up close. They face the challenges of climate change, overfishing and pollution, but their numbers are on the rise on the Otago Peninsula because of the dedication of the amazing conservationists working for the Pukekura Penguin Trust, who have removed invasive predators like weasels and are revegetating the beaches to provide nesting sites. With our help, the kororā might just grace the shores of New Zealand for many years to come."
  }
];

const template =  
    {title: "TitleHere"
    ,author: "nat"
    ,date: "2023-01-01T00:00:00.000Z"
    ,imag0: ""
    ,imag1: ""
    ,imag2: ""
    ,par0: ""
    ,par1: ""
    ,par2: ""
    }

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

function GridOfPosts() {
    const[postIsOpen, setPostIsOpen] = useState(false);
    const[activePostData, setActivePostData] = useState(null);


    function handleOpenPost(postNum){
        setActivePostData(posts[postNum]);
        setPostIsOpen(true);
        localStorage.setItem("viewed-" + posts[postNum].title, true)
    }

    function handleClosePost(){
        setPostIsOpen(false);
    }

    const articleCards = posts
    .sort((a, b) => a.date > b.date ? -1 : 1)
    .map((post, index) =>
        <ArticleCard data={post} handleOpenPost={() => handleOpenPost(index)}/>
    );
 
    
    return (
    <div>
        <Grid2 container spacing={2}>
            {articleCards}
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
  
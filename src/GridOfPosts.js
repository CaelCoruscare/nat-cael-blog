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
    ,imag0: "coralGardenBeach/coralCrab.jpeg"
    ,imag1: "coralGardenBeach/natalieOnBeach.jpeg"
    ,imag2: "coralGardenBeach/viewOfBeach.jpeg"
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
  },
  {title: "Kaka Point Beach"
  ,author: "cael"
  ,date: "2023-01-18T00:00:00.000Z"
  ,imag0: "kakaPointBeach/seagull.jpeg"
  ,imag1: "kakaPointBeach/seaweed.jpeg"
  ,imag2: "kakaPointBeach/bee.jpeg"
  ,par0: "We stopped on a beach just outside Kaka Point, for a chilly morning walk. Got a good picture of an endangered red billed seagull taking off. It was spooked by man wandering the rocky section of the beach. I think he was looking for clams and mussels."
  ,par1: "Nat found a big chunk of rubbery seaweed called bull kelp. According to an info board we found, the Maori used to stitch them together and use them as their primary form of container. Like a clay pot."
  ,par2: "On the walk back, I was finally able to get a good picture of on of the local bumble bees! I've been trying since we got here, but they're always on the move, because the wildflowers don't have much nectar or many flowers grouped together. The bumble bees look about three times the size of the ones near where I grew up, in the Northeast US. Fun fact: they don't have honeycombs, and instead build little wax pots, that look kind of like clay vessels."
  },
  {title: "Secret Tunnel, Secret Tunnnnnel"
    ,author: "cael"
    ,date: "2023-01-18T01:00:00.000Z"
    ,imag0: "ghibliTunnel/natalieEnters.jpeg"
    ,imag1: "ghibliTunnel/creepy.jpeg"
    ,imag2: "ghibliTunnel/tunnelEnd.jpeg"
    ,par0: "We found a hike that went through an old railway tunnel. Ever seen Spirited Away? Gave us big Spirited Away vibes... Don't worry though, the info placard says that only two people died while building the train line, and they both died a little further ahead, past the tunnel."
    ,par1: "We didn't have a flashlight, so we used the flash on the camera as a light source, every couple seconds, to make sure we were walking the right way. I've never been somewhere so incredibly dark. You could see the entrance, far off behind you. And we could just make out the exit, although it never seemed to get larger. Eventually, the flash revealed something on the side of the wall. It was revealed by the camera flash, so I could only (barely) see an unexplained giant hole in the side of the tunnel, for a fraction of a second. Scared me pretty bad, and the camera suddenly refused to take any more pictures (\"processing\") so we were stuck in the darkness. We ended up going back to the car, although Natalie convinced me to get my phone from the car and use the flashlight to try again. The giant hole turned out to be made of masonry, and is probably a place where someone could hide if a train came through the tunnel, so they didn't get squished."
    ,par2: "Here is the other end of the tunnel. Was quite a long walk to this point. It is beautiful though. Much more overgrown than the other side."
    },
    {title: "Wisp-River hike"
    ,author: "cael"
    ,date: "2023-01-18T02:00:00.000Z"
    ,imag0: "wispHike/bridge.jpeg"
    ,imag1: "wispHike/miromiro.jpeg"
    ,imag2: "wispHike/rainbows.jpeg"
    ,par0: "In the Catlins, we hiked the Wisp-River trail. We were low on water when we reached the trailhead, so we got a chance to try the water filter that my uncle Matt got us for Christmas. We used it on the river water flowing underneath the suspension bridge that you can see in the picture. Natalie suprised me, crossing the swaying and rusted bridge with no issue, despite her once severe fear of heights. We found a second, larger bridge, which was crossed as well, shortly before deciding to turn back. We were hungry, and had not had an opportunity to stock up on snacks, since the Catlins are rather sparsely populated."
    ,par1: "We found this Miromiro on the trail. She showed no fear, and flitted about us, catching bugs and cocking her head to keep an eye on us. Made it easy to snap some excellent pictures, despite the low light of the thick forest."
    ,par2: "On our way to our next destination, we took a wrong turn and drove past enough sheep to populate New York City three times over. It was well worth the detour though, since we saw this amazing double rainbow. By the time I had swapped lenses, there was not much left to the second rainbow, but you can see it if you look closely, on the left."
    },
    {title: "Nurseries at the Lighthouse"
    ,author: "cael"
    ,date: "2023-01-19T00:00:00.000Z"
    ,imag0: "nurseriesByTheLighthouse/zoomedOut.jpeg"
    ,imag1: "nurseriesByTheLighthouse/seaLions.jpeg"
    ,imag2: "nurseriesByTheLighthouse/spoonBills.jpeg"
    ,par0: "On our way to the lighthouse, we saw two sealife nurseries. The rock on the right has a nursery of young Royal Spoonbills, while the rock on the left is a playground and nursery for sea lion pups."
    ,par1: "The sea lion pups are well camoflauged, although they were running all over the place like 4 year old humans, which counteracted the camoflauge pretty well. In this picture, I counted 8 baby sea lions. How many can you see?"
    ,par2: "The Royal Spoonbills, pictured here, specialize in filtering small shrimps and other invertebrates out of marshes and estuaries. The parents were coming and going, so there were never many of the large birds on the rock at one time."
    },
    {title: "The Lighthouse"
    ,author: "Cael"
    ,date: "2023-01-19T01:00:00.000Z"
    ,imag0: "lighthouse/islands.jpeg"
    ,imag1: "lighthouse/tiny.jpeg"
    ,imag2: "lighthouse/lighthouse.jpeg"
    ,par0: "Out past the lighthouse, a string of islands jutted out of the water. They were bleak and majestic, and they took the breath away. Seagulls wheeled over them, sea lions clambered on them, and seaweed choked the sections where the tide and waves came and went. I've never seen such austere beauty in my life."
    ,par1: "Even the smallest of the islands, upon zooming in, revealed awe inspiring patterns and colors."
    ,par2: "Honestly, the lighthouse itself was by far the least interesting part of the hike. We barely glanced at it before pushing past to see the raw natural beauty."
    },
    {title: "Catlins Mirror Lake"
    ,author: "cael"
    ,date: "2023-01-20T00:00:00.000Z"
    ,imag0: "mirrorLakeCatlins/lake.jpeg"
    ,imag1: "mirrorLakeCatlins/swamp.jpeg"
    ,imag2: "mirrorLakeCatlins/tree.jpeg"
    ,par0: "On our way to Invercargill, we made a few stops along the western side of the Catlins. One of them was this reflective pond, carved out by a glacier. Something about the tannins and the chemical content of the water made it jet black, and quite reflective. Reminded me of a few ponds I've seen in Northeast US while growing up."
    ,par1: "At the waters edge, the soil transitioned to a soupy swamp. There were a lot of plants that specialized specifically in inhabiting this biome."
    ,par2: "Further into the forest were a number of strange trees. Apparently they are adapted to regularly flooding when it rains. This one was twisted in a strange corkscrew."
    },
    {title: "Lost Gypsey"
    ,author: "nat"
    ,date: "2023-01-20T01:00:00.000Z"
    ,imag0: "lostGypsy/art.jpeg"
    ,imag1: "lostGypsy/natalie.jpeg"
    ,imag2: "lostGypsy/Bus.jpeg"
    ,par0: "We were pretty tired after our two morning hikes at Kaka Point and Nugget Point, and sort of downcast after failing to reach the Cathedral Caves before the high tide closed them, when we spotted a sheet metal sperm whale on the side of the road, and behind that a brightly colored caravan advertising coffee and snacks. The sign declared that we were arriving at The Lost Gypsy, and we saw that in addition to the coffee caravan there was a small building that served as a giftshop and next to that a garden of strange sculptures. There was a crank near the metal whale, and when we turned it we watched in amazement as the segments of metal moved and the whale swam through the air. Intrigued, we decided to stay a while and ordered a chai latte and a flat white with a ginger slice to split and sat at a little table with books of New Zealand slang and jokes on top of it. The slice was sweet and tasty and the hot drinks felt nice after all the wind at Nuggget Point." 
    ,par1: "While we were finishing our chai lattes, we noticed a button with a sign reading \"There are many temptations in life... the button below is one of them.\" Now some people may have been able to ignore this, but we were not up to the challenge, having the self control of a pair toddlers doing a marshmallow test. Pushing the button caused one of the strange masks set into the wall to open ans squirt us with water. Once we had finished our drinks, we entered the bus and found a plethora of strange, beautiful little kinetic sculptures made of found materials. We were invited to crank the handles on the side, which animated the junk sculptures in all sorts of ways. (Cael's note: There were a lot of people in the bus, so I didn't want to hog space and to take pictures. The only picture of the bus that I got was this one of the outside)"
    ,par2: "Cael and I watched as little metal flowers opened and closed and tiny unicyclists made their way across a miniature highwire, and marveled as pulling one level caused a model train to chug its way across the ceiling. The artist responsible for the little wonders emerged from the backroom with a small greeen and gray parrot perched on his shoulder. He greeted us warmly and invited us to browse the curiosities on the shelves. Afraid of trying to transport such delicate mechanical devices in our backpacks, Cael and I settled on a necklace made with a river pebble, two postcards, and a pair of tickets into the strange garden we had seen when we had arrived at The Lost Gypsy..."
    },
    {title: "Lost Gypsey Garden"
    ,author: "nat"
    ,date: "2023-01-20T02:00:00.000Z"
    ,imag0: "lostGypsy/jelly.jpg"
    ,imag1: ""
    ,imag2: ""
    ,par0: "After purchasing tickets from the man with the parrot, we opened the gates of the Lost Gypsey Garden and entered a paradise of sensory exploration. Turning cranks caused huge disco balls (made of pieces of salvaged mirrors) to revolve high above us. Tentacles made of painted tin cans thrashed out of the underbrush. Snail shells on huge waterwheels dumped water into a Rube Goldberg machine of old boots and bottles until strange music sounded from the center of the machine."
    ,par1: "Under a series of gazebos, we found less waterproof contraptions. A piano was hooked up to about 100 different random sound producers, from tape rewinders to hairdryers, each mapped to a different tone. Lightning from a tesla coil completed the sculpture of a gull in flight. Sitting in an old hair salon chair caused the strange booming mating call of the endangered Kakapo parrot to sound in your ears. There were bizarre interactive art pieces everywhere we turned, and we excitedly tried them all. My favorite was an old Grampohone with gulls in the trumpet. When the crank was turned the gulls flew gracefully while the sounds of the crashing sea and gull cries issued from the gramophone."
    ,par2: "The Lost Gypsy was interactive, fun, and incredibly unique. A must-see for travelers in the Catlins who have a taste for the weird."
    },
    {title: "Steward Island Pigeons"
    ,author: "cael"
    ,date: "2023-01-22T00:00:00.000Z"
    ,imag0: "stewardPigeons/smooth.jpeg"
    ,imag1: "stewardPigeons/floof.jpeg"
    ,imag2: "stewardPigeons/head.jpeg"
    ,par0: "The Kererū, the pidgeons of New Zealand, are wonderful. They seem to have taken the opportunity of having no predators to become quite large. They typically measure 50cm, or 20 inches. Living in the cold climate, they also became quite fluffy. The only part of their anatomy that did not grow much seems to be their heads."
    ,par1: "In the frigid morning air, the Kererū will land somewhere in the sunlight (highly visible) and fluff their feathers. This makes them appear to more than double in size. With their tiny heads just poking over their massive chests, they remind me of a body builder or a cartoon of a big buff knight."
    ,par2: "At over a foot and a half, they are quite conspicuous, and you can hear their wingbeats from a long ways off. They like landing in trees with berries, and are surprisingly agile at climbing through branches, reaching their neck out pluck berry after berry from the branch."
    },
    {title: "Oyster Catchers"
    ,author: "nat"
    ,date: "2023-01-22T01:00:00.000Z"
    ,imag0: "oysterCatchers/nice.jpeg"
    ,imag1: "oysterCatchers/pair.jpeg"
    ,imag2: "oysterCatchers/nice.jpeg"
    ,par0: ""
    ,par1: ""
    ,par2: ""
    },
    {title: "Walking to Raikura"
    ,author: "Cael"
    ,date: "2023-01-22T02:00:00.000Z"
    ,imag0: "toRaikura/nat.JPG"
    ,imag1: "toRaikura/hike.JPG"
    ,imag2: "toRaikura/bumble.JPG"
    ,par0: ""
    ,par1: ""
    ,par2: ""
    },
    {title: "To Maori Beach"
    ,author: "Cael"
    ,date: "2023-01-22T03:00:00.000Z"
    ,imag0: "raikuraOne/chain.jpeg"
    ,imag1: "raikuraOne/tree.jpeg"
    ,imag2: "raikuraOne/tide.jpeg"
    ,par0: "The first leg of our journey involved walking to Maori Beach"
    ,par1: ""
    ,par2: ""
    },
    {title: "On Maori Beach"
    ,author: "Cael"
    ,date: "2023-01-22T04:00:00.000Z"
    ,imag0: "maoriBeach/nat.jpeg"
    ,imag1: "maoriBeach/shell.jpeg"
    ,imag2: "maoriBeach/bridge.jpeg"
    ,par0: "The first leg of our journey involved walking to Maori Beach"
    ,par1: ""
    ,par2: ""
    },
    {title: "Port William"
    ,author: "Cael"
    ,date: "2023-01-22T05:00:00.000Z"
    ,imag0: "portWilliam/port.jpeg"
    ,imag1: "portWilliam/cooking.jpeg"
    ,imag2: "portWilliam/cormorants.jpeg"
    ,par0: "A few hours before dusk, we finally stumbled into camp. At this point the temperature had dropped quite low, due to the nearby antartic circle. The ranger warned us abot sea lions and causing him paperwork."
    ,par1: "We cooked a delicous meal with cobbled together ingredients, which tasted like heaven. We ate our food on the beach, while watching the cormorants and seagulls and oystercatchers hunting."
    ,par2: "We had only one pad to sleep on, since the other did not fit on the tiny airplane to Steward Island, so we were crammed on top of it. In the middle of the night we had to get up to use the bathroom, and were convinced that every shadow was a sea lion ready to pounce. Cael was afraid of a bikini top in a tree, because it moved in the wind. Then Natalie's water bottle leaked most of its contents into the tent, soaking everything. It was a good thing we had plenty of wool clothing, and were able to stay warm enough. It did not feel like the middle of Summer."
    },
    {title: "FanTails"
    ,author: "Cael"
    ,date: "2023-01-23T06:00:00.000Z"
    ,imag0: "fanTails/looking.jpeg"
    ,imag1: "fanTails/action.jpeg"
    ,imag2: "fanTails/poof.jpeg"
    ,par0: "Fact: Fan tails are adorable. They do a lot of looking directly at you."
    ,par1: "Fan tails flit around you catching, bugs that you disturb. They use their wide tails and wings to turn on a dime, more effectively catching bugs mid-air. It does slow them down significantly, but they do't have any native mammal predators to worry about. They are constantly moving, which makes it difficult to catch a picture of them. The middle picture is of a fantail mid-flight, coming in for a tasty bug."
    ,par2: "Fantails are rather curious of the strange featherless bipeds walking in their patch of forest. They are definitely afraid. They will keep out from under your feet, but aside from that they have no qualms about coming close enough to brush your face with their wingtips."
    },
    {title: "Silvereyes"
    ,author: "nat"
    ,date: "2023-01-23T07:00:00.000Z"
    ,imag0: "silverEyes/stare.jpeg"
    ,imag1: "silverEyes/pair.jpeg"
    ,imag2: "silverEyes/hop.jpeg"
    ,par0: "Silvereyes have absoloutely no fear of mammals, making them quite rare outside of Steward Island (if memory serves). They have front facing eyes that they can use to stare directly at you."
    ,par1: "We saw a group of them, traveling together."
    ,par2: "They were in dense bushes and used a lot of hopping to get around, only flying occasionally."
    },
    {title: "Return from Raikura"
    ,author: "nat"
    ,date: "2023-01-23T09:00:00.000Z"
    ,imag0: "raikuraReturn/bridge.jpeg"
    ,imag1: "raikuraReturn/duck.jpeg"
    ,imag2: "raikuraReturn/hobbits.jpeg"
    ,par0: "The river under the bridge was almost entirely dried up, because it is a tidal river. No car mishap this time, unlike in Costa Rica."
    ,par1: "We saw a cool duck on the way back."
    ,par2: "Natalie was all \"This is how the hobbits felt when returning from Mordor\""
    },
    {title: "Ulva - Kakas"
    ,author: "nat"
    ,date: "2023-01-24T00:00:00.000Z"
    ,imag0: "kakas/clever.jpeg"
    ,imag1: "kakas/sneaky.jpeg"
    ,imag2: "kakas/look.jpeg"
    ,par0: "Kakas are cute."
    ,par1: ""
    ,par2: ""
    },
    {title: "Ulva - Wekas"
    ,author: "nat"
    ,date: "2023-01-24T01:00:00.000Z"
    ,imag0: "wekas/stride.jpeg"
    ,imag1: "wekas/sneaky.jpeg"
    ,imag2: "wekas/look.jpeg"
    ,par0: "On Ulva Island, there are no omnivorous mammals the invasive possums and rats that plague the rest of New Zealand. This niche is instead filled by a flightless bird called the weka. Weka are about the size of a small chicken, with drab brown and black feathers that give them good camouflage on the forest floor and on rocky beaches. They are not picky eaters, feeding on fruits, seeds, insects, marine invertebrates, and the eggs and nestlings of other birds. It is for this reason that weka are not popular with their avian neighbors. We saw this firsthand when a weka on one of the island's beaches began stalking towards a low rocky ledge where an oystercatcher sat on its nest. The sitting parent's partner spotted the would-be egg robber and began screaming its strident threat call and heading towards the interloper. The sitting parent risked briefly leaving the nest to reinforce the message \"Back off or you will be sorry!\" Stymied, the weka retreated and circled back around to reassess its target. The weka attempted to use us as cover for its approach from the other side of the nest, but the sharp eyed oystercatchers spotted it all the same and let loose with another string of angry cries."
    ,par1: "One of the other weka on the beach decided that there was easier food on offer and attempted to leap onto the lap of a tourist who was eating her lunch. Fortunately, she was able to protect her sandwich from the feathery thief and shoo it away. The remaining weka were seeking tiny worms and crabs hiding under the rocks at the strandline, flipping over flat rocks of impressive size for such small birds. They were so enthusiastic about this activity that they mistook one tourist's flat phone and wallet for stones and tried flipping them too before he reclaimed his belongings! Cael even had one eyeing his knees before he placed his hands on them to discourage pecking. "
    ,par2: "The weka were one of the most amusing and interesting sights on Ulva Island, and we hope that they thrive for years to come. They have posed a unique problem for conservation. They struggle to deal with introduced mammal predators such as possums, stoats, and cats. Their population is decreasing and they are listed as \"Vulnerable\". However, moving them to predator-free or predator-controlled zones can cause additional strains on other birds, due to their habit of eating eggs and baby birds of other, more vulnerable species."
    },
    {title: "Ulva - Robins"
    ,author: "cael"
    ,date: "2023-01-24T03:00:00.000Z"
    ,imag0: "robins/face.jpeg"
    ,imag1: "robins/stick.jpeg"
    ,imag2: "robins/cloak.jpeg"
    ,par0: "The robins of New Zealand are so cute. They hop around on their giant legs, and look up at you with their puppy-dog eyes. Their body, not including the legs, is about the size of a tennis ball."
    ,par1: "Unlike other birds in New Zealand, not only are they very friendly and inquisitive, they are also happy to jump around underfoot. You end up a little worried of walking on them, like an overly-friendly dog with bad spacial awareness. If you walk, they will occasionally jump up and eat an insect that you kick up, much like the fantails. But if you stand still they hop around you in circles, curious of the featherless bipeds walking through their patch of forest. On Ulva island, one of them hopped onto my shoe while I was sitting. For this reason, they were pretty rare outside of heavily predator controlled areas (where New Zealanders spend massive amounts of money on trapping and poisoning invasive mammal predators). If you visit New Zealand and want to support these friendly little birds, make sure to buy some possum fur. They have basically no mammal predator response, even on the main islands."
    ,par2: "From the back, the robins look like they have little grey cloak, especially in the colder areas. They also are very fighty. It was quite common for a robin to be hopping around us and being adorable... and then another robin showed up. The first robin would scream at the interloper, with startling volume, which would be answered in kind. Then they would fly at each other, chirping loudly and nipping at each other as they disappeared into the forest canopy. Oftentimes, the robin would come back a minute or two later, land on the ground in front of us, looking as though they were about to say \"Pardon the interruption, where were we?\""
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
  
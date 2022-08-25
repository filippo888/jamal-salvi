import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Box,
    Divider,
} from "@material-ui/core"

import ResponsiveAppBar from './ResponsiveAppBar'
import { grey } from '@mui/material/colors';
import Footer from './Footer'
import ResumeCard from './ResumeCard'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper' 
import CardContent from '@mui/material/CardContent';

import AboutMePage  from './AboutMePage'

const useStyles = makeStyles(theme => ({
    firstContainer:{
        background: "linear-gradient(319deg, #00ffbd82, transparent)",
        paddingTop: "60px",
        minHeight: "80vh",
        display: "flex"
    },
    secondsContainer:{
        background: "transparent",
  
        flexGrow:1,
        minHeight: "80vh",
        display: "flex"
    },
    secondsContainerColor:{
        background: "#ccf6ff",

        flexGrow:1,
        minHeight: "80vh",
        display: "flex"
    },


}))

const AboutMe = () => {
  
  const classes = useStyles()
  return (
    <>
    

    <Box  className={classes.firstContainer} >
         
        <AboutMePage val={{
                    withImage: true,
                    leftImage: true,
                    text: {  
                        caption: "Studies",
                        title: "Graduate Studies",
                        body: "After obtaining my Bachelor of Science in Mechatronics, I decided to go \"back\" to a more Business-related study, both to develop different skills and to aliment my new interest and passion in the managerial field. The choice landed on a Master program in Entrepreneurship and Innovation, offered by HULT International Business School in San Francisco. \n This road gives me the ability to persue different careers, ranging from the possibility to start in a management position, to opening up a hadware company, to follow-up on my blockchain passion and start a related project. The possibilities are virtually endless and I am eager to further shape my future. ",
                    },
                    image: {
                      title: "Me at a Hackaton in Paris, hosted by HULT",
                      body: "[...] To be filled",
                        imagePath: "/Hackaton_Paris_pic_2022.jpg"
                    },
                    
                    }}/>
    </Box>
    <Box className={classes.secondsContainer} >
    <AboutMePage val={{
                    leftImage: false,
                    withImage: true,
                    text: {  
                        caption: "Studies",
                        title: " Undergraduate Studies",
                        body: "After finishing High School I had already planned to enroll in an University abroad. I didn't have specifics but I knew that I wanted two things: 1. To go abroad and 2. To pick something technical. \n Point 1. comes from my everlasting wish to be independent together with my passion for new and challenging experiences. Point 2. comes from the fact that I didn't exactly excel in math and physics during High School, hence I wanted to fill that hole. \n The two requirements brought me to enroll in a Bachelor of Science in Mechatronics at SDU, in Denmark. Filled with excitement and a sane dose of fear, I left my family and friends and went to Denmark with my motorcycle. \n The program indeed helped me to make up for my previous deficency in math and physics and my ability as a student granted me some wonderful academic accomplishments. I also landed a part-time job to pay my rent and further develop my technical skills (see resume section). \n During the study, I have been inexpectedly fascinated by a mandtory class that was not as technical as other topics: Project Management. Following the course and completing assignments made me grow an interest in management as a career. \n As for my Bachelor thesis, I decided to once again go for a blockchain-related research. I collaborated with a Danish company where I have been responsible for a \"feasibility study on the tokenization of Carbon Offsetting Credits \", which is also the title of my Thesis .",
                    },
                    image:{
                        title: "Third place at the SDU autonomous-case competition",
                        body: "[...] To be filled",
                        imagePath: "/SDU_hackaton_pic_2019_2.jpg"
                    },
                }}/>
                

    </Box>

    <Box className={classes.secondsContainerColor} >
    <AboutMePage val={{
                    leftImage: true,
                    withImage: true,
                    text: {  
                        caption: "Work",
                        title: "My first full-time occupation",
                      body: "Odd as it might sound, attending the military in Switerland is mandatory for any swiss boy that turns 18. Since I also am a swiss boy, and I also turned 18, the military called me in as well. However, there is the possibility of doing some kind of socially useful work instead of joining the army (this is just a half-truth but for the sake of simplicity I won't go into details) and that is what I decided to do. By law, that meant doing a total of 368 days of social work(which can be scattered throughout years). I wanted to get as much done as fast as possible, both to avoid that this obligation would \"block\" me in the future and to gather some money for university. Luckily enough I found a position in a nursery school for 1 year. This has been the first time that I had a full- time job and honestly it worked out great! I learned a lot, I worked in close relation with the headmaster and I took on some great responsibilities with the childrens. I believe that during that year I grew as much as those kids did, just in a different way. They learned to walk and talk some words while I learned to work in a team, to meet expectations, to be responsible and diligent and much more.",
                    },
                    image:{
                        title: "The nursery school where I worked",
                        body: "[...] To be filled",
                        imagePath: "/Nido_pic_2018.jpg"
                    },
                }}/>
                

    </Box>

    <Box className={classes.secondsContainer} >
    <AboutMePage val={{
                    withImage: true,
                    leftImage: false,
                    text: {  
                        caption: "Personal Interest",
                        title: "New Interests",
                      body: "2017 has probably been the first year that I got truly passionate about something. Particularly, I discovered Bitcoin and consequently the blockchain technology. I quickly became very fond of it and spent hours of my free time trying to understand first the concept of decentralization and public ledger, then the idea of mining, then cryptography basics, and so on and so forth. Not much later, I also discovered Ethereum and a whole new world opened to my eyes, Smartcontracts, DeFi, NFTs, DAOs, layer-two solutions, and so on. This technology never ceases to amaze me and the developer working with it are finding more interesting and innovative ways to apply it almost on a daily basis. I truly do believe that blockchain is here to stay. This passion pushed me to write my final High School paper (in 2018) about Bitcoin and its price. I won't lie, I was feeling very good about it while writing it but looking back, it was a just partially correct research and very biased (due to my emotions about the tech). Nontheless I fondly keep this memory with me as schooling my own teacher about a new technology that he doesn't know about (and quite frankly, that he despised) has been a quite interesting experience and feeling.",
                    },
                    image:{

                        imagePath: "/BTC_pic_2017.jpg"
                    },
                    }}/>
 

    </Box>
    <Footer/>
    </>
    )
  }
  
  export default AboutMe

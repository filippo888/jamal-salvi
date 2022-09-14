import React from 'react'
import { makeStyles } from '@material-ui/core/styles'


import Box from '@mui/material/Box';

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
        background: "#71C9CE",
        minHeight: "100vh",
        display: "flex"
    },
    secondsContainer:{
        background: "trasparent",
  
        flexGrow:1,
        minHeight: "100vh",
        display: "flex"
    },
    secondsContainerColor:{
        background: "#71C9CE",

        flexGrow:1,
        minHeight: "100vh",
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
                        title: "GRADUATE STUDIES",
                        body: "After obtaining my Bachelor of Science in Mechatronics, I decided to go \"back\" to a more Business-related study, both to develop different skills and to aliment my new interest and passion in the managerial field. The choice landed on a Master program in Entrepreneurship and Innovation, offered by HULT International Business School in San Francisco. This road gives me the ability to pursue different careers, ranging from the possibility to start in a management position, to opening up a hardware company, to follow-up on my blockchain passion and start a related project. The possibilities are virtually endless and I am eager to further shape my future."},
                    image: {
                        title: "Entrepreneurship Challenge in Paris",
                        body: "A picture of me at a Hackaton in Paris, hosted by HULT",
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
                        title: "UNDERGRADUATE STUDIES",
                        body: "After finishing High School I had already planned to enrol in an University abroad. I didn't have specifics but I knew that I wanted two things:\n 1. To go abroad \n 2. To pick a technical topic, such as engineering. \nPoint 1. comes from my everlasting wish to be independent together with my passion for new and challenging experiences. \nPoint 2. comes from the fact that I didn't exactly excel in math and physics during High School, hence I wanted to fill that hole. \nThe two requirements brought me to enrol in a Bachelor of Science in Mechatronics at SDU, in Denmark. Filled with excitement and a sane dose of fear, I left my family and friends and went to Denmark with my motorcycle. The program indeed helped me to make up for my previous deficiency in math and physics and my ability as a student granted me some wonderful academic accomplishments. While attending my undergrad program I also landed a part-time job to pay my rent and further develop my analytical skills (see resume section). \nDuring the studies, I have been unexpectedly fascinated by a mandatory class that was not as technical as other topics: Project Management. Following the course and completing assignments made me grow an interest in management as a career. \nAs for my Bachelor thesis, I decided to once again go for a blockchain-related research. I collaborated with a Danish company where I have been responsible for a \"feasibility study on the tokenization of Carbon Offsetting Credits\", which is also the title of my Thesis.",
                    },
                    image:{
                        title: "SDU Hackaton",
                        body: "A picture of me, when we won third place at the SDU Autonomous-Case competition",
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
                        title: "MY FIRST FULL-TIME OCCUPATION",
                        body: "Odd as it might sound, attending the military in Switzerland is mandatory for any Swiss citizen that turns 18. Since I also am a Swiss citizen, and I also turned 18, the military called me in as well. However, there is the possibility of doing socially useful work instead of joining the army (this is just a half-truth but for the sake of simplicity I won't go into details) and that is what I decided to do. By law, that meant doing a total of 368 days of social work (which can be scattered throughout years). I wanted to get as much done as fast as possible, both to avoid this obligation from \"blocking\" me in the future and to gather some money for university. Luckily enough, I found a 1-year position in a nursery school. This has been the first time that I had a full-time job and honestly it worked out great! I learned a lot, I worked in close relation with the headmaster and I took on some great responsibilities with the children. I believe that during that year I grew as much as those kids did, just in a different way. They learned to walk and talk some words while I learned to work in a team, to meet expectations, to be responsible and diligent and much more."
                    },
                    image:{
                        title: "Nido Comunale",
                        body: "This is the nursery school where I worked",
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
                        title: "NEW INTERESTS",
                      body: "2017 has probably been the first year that I got truly passionate about something. Particularly, I discovered Bitcoin and consequently the blockchain technology. I quickly became very fond of it and spent hours of my free time trying to understand first the concept of decentralization and public ledger, then the idea of mining, then cryptography basics, and so on and so forth. \nNot much later, I also discovered Ethereum and a whole new world opened to my eyes, Smartcontracts, DeFi, NFTs, DAOs, layer-two solutions, and so on. This technology never ceases to amaze me and the developer working with it are finding more interesting and innovative ways to apply it, almost on a daily basis. I truly do believe that blockchain is here to stay. \nThis passion pushed me to write my final High School paper (in 2018) about Bitcoin and its price. I won't lie, I was feeling very good about it while writing it but looking back, it was a just partially correct research and very biased (due to my emotions about the tech). Nonetheless I fondly keep this memory with me as schooling my own teacher about a new technology that he didn't know about (and quite frankly, that he despised) has been a very enjoyable experience."},
                    image:{
                        not_caption: true,
                        imagePath: "/BTC_pic_2017.jpg"
                    },
                    }}/>
 

          </Box>

    <Box className={classes.secondsContainerColor} >
    <AboutMePage val={{
                    leftImage: true,
                    withImage: true,
                    text: {
                        caption: "Studies",
                        title: "HIGH-SCHOOL",
                        body: "In Switzerland, education is mandatory until the end of the so-called \"middle school\" (equivalent of 9th grade). After that, teenagers can decide whether they wish to continue studying, hence going to High-School for 4 years, or if they wish to take a different route, perhaps starting a technical education. Given my interest in certain academic topics (and honestly, the fear of having to pick a career at such a young age) I decided to enrol in High-School. Particularly, I decided to follow a curriculum called \"Economy and Law\", which to summarize gave me a first introduction to civic law and macro/micro economics."},
                    image: {
                        title: "Liceo di Locarno",
                        body: "A picture of me and some of my classmates, on a High-School organized trip",
                        imagePath: "/High_School_pic.jpg"
                    },
                    }} />


          </Box>

          <Box className={classes.secondsContainer} >
              <AboutMePage val={{
                  leftImage: false,
                  withImage: true,
                  text: {
                      caption: "Story",
                      title: "EARLY LIFE",
                      body: "I was born on December the 4th, in Locarno (Tessin, Switzerland). The Italian-speaking part of Switzerland is truly wonderful, awesome landscapes, warm climate in summer that allows you to bath in lakes and rivers that are all across the area and cold snowy climate in winter that allows you to ski in the beautiful mountains. I spent the first years of my life here, from being just a toddler to becoming a young 19-years-old adult."},
                  image: {
                      title: "Locarno",
                      body: "A picture of Locarno (Tessin, CH), my hometown",
                      imagePath: "Locarno_pic_1998.jpg"
                  },
              }} />


          </Box>

    
    </>
    )
  }
  
  export default AboutMe

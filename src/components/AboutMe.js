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
                        imagePath: "/SDU_hackaton_pic_2019.jpg"
                    },
                }}/>
                

    </Box>

    /*<Box className={classes.secondsContainer} >
    <AboutMePage val={{
                    leftImage: false,
                    withImage: true,
                    text: {  
                        caption: "Study",
                        title: " Undergraduate Studies",
                        body: "After finishing High School I had already planned to enroll in an University abroad. I didn't have specifics but I knew that I wanted two things: 1. To go abroad and 2. To pick something technical. \n Point 1. comes from my everlasting thrive to be independent and my passion for new and challenging experiences, point 2. comes from the fact that I didn't exactly excell in math and physics in High School and hence wanted to fill that hole. \n The two things brought me to enroll in a Bachelor of Science in Mechatronics at SDU, in Denmark. Filled with excitement and at the same time fear, I left my family and friends and went to Denmark with my motorcycle. \n The program indeed helped me to make up for my previous deficency in math and physics and my ability as a student granted me some wonderful academic accomplishments. I also landed a part-time job to pay my rent and further develop my technical skills (see resume section). \n During the study, I have been inexpectedly fascinated by a mandtory class that is not as technical as everything else I have studies: Project Management. Following the course and completing assignments made me grow an interest in management as a career. \n As for my Bachelor thesis, I decided to once again go for a blockchain-related research. I collaborated with a small Danish company to perform a \"feasibility study on the tokenization of Carbon Offsetting Credits \" .",
                    },
                    image:{
                        title: "Locarno",
                        body: "[...] To be filled",
                        imagePath: "/Locarno_pic_1998.jpg"
                    },
                }}/>
                

    </Box>*/

    <Box className={classes.secondsContainerColor} >
    <AboutMePage val={{
                    withImage: true,
                    leftImage: false,
                    text: {  
                        caption: "Personal Interest",
                        title: "Business",
                        body: "You can apply for a range of merit-based scholarships that reward your achievements and potential. So whether you’re an academic high achiever, an aspiring entrepreneur, or have a demonstrated aptitude to lead—there could be a scholarship for you at Hult.",
                    },
                    image:{
                        title: "Campus",
                        body: "You can apply for a range of merit-based scholarships that reward your achievements and potential. ",
                        imagePath: "/HULT.jpeg"
                    },
                    }}/>
 

    </Box>
    <Footer/>
    </>
    )
  }
  
  export default AboutMe

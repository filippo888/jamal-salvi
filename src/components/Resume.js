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
import CardContent from '@mui/material/CardContent';


const useStyles = makeStyles(theme => ({
    mainContainer: {
        background: "#ccf6ff",
        paddingTop: "4rem",

        
    },
    timeLine: {
        position: "relative",
        padding: "1rem",
        margin: "0 auto",
        "&:before": {
            content: "''",
            position: "absolute",
            height: "98%",
            border: "1px solid",
            borderColor: grey[800],
            right: "40px",
            
        },
        "&:after": {
            content: "''",
            display: "table",
            clear: "both",
        },
        [theme.breakpoints.up("md")]: {
            padding: "2rem",
            "&:before": {
                left: "calc(50% - 1px)",
                right: "auto",
            },
        },
    },
    timeLineItem: {
       
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
       
        position: "relative",
        margin: "1rem 3rem 1rem 1rem",
        clear: "both",
       
        "&:before": {
            content: "''",
            position: "absolute",
            right: "-1rem",
            top: "calc(50% - 5px)",
            borderStyle: "solid",
            borderColor: "#000000 #000000 transparent transparent",
            borderWidth: "0.325rem",
            transform: "rotate(45deg)",
        },
        [theme.breakpoints.up("md")]: {
            width: "44%",
            margin: "1rem",
            "&:nth-of-type(2n)": {
                float: "right",
                margin: "1rem",
                borderColor: "#fff",
            },
            "&:nth-of-type(2n):before": {
                right: "auto",
                left: "-1rem",
                borderColor: "transparent transparent #000000 #000000",
            },
        },
    },
    timeLineYear: {
        textAlign: "center",
        maxWidth: "11.375rem",
        margin: "0 3rem 0 auto",
        fontSize: "1.8rem",
        color: grey[800],
        background: "white",
        lineHeight: 1,
        padding: "0.5rem 1rem",
        "&:before": {
            display: "none",
        },
        [theme.breakpoints.up("md")]: {
            textAlign: "center",
            margin: "0 auto",
            "&:nth-of-type(2n)": {
                float: "none",
                margin: "0 auto",
            },
            "&:nth-of-type(2n):before": {
                display: "none",
            },
        },
    },
    subHeading: {
        color: grey[900],
        padding: 0,
        textTransform: "uppercase",
    },
    body1: {
        color: grey[600],

    },
    subtitle1: {
        color: grey[800],

    },
}))

const Resume = () => {
    const classes = useStyles()
    const current = new Date();
    const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
  return (
    <>
    
    <Box component="div" className={classes.mainContainer}>
        <Box component="div" className={classes.timeLine}>
            
            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>  
                {date}
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                     {
                        title: "Master in Entrepreneurship and Innovation",
                        caption: "Graduate Student at HULT International Business School",
                        body: "[...] To be filled",

                    }
            }/></Box>

            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>  
                2022
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                     {
                        title: "Technical Developer at Nordic Waves Group",
                        caption: "Blockchain R&D",
                        body: "For my last semester, I looked for an interesting opportunity to match with the writing of my Bachelor Thesis. This research brought me to Nordic Waves Group, a start-up that deals with circular economy and acts as a carbon offsetting credits retailer. \n Particualrly, I have been responsible for an extensive research on the feasibility of the tokenization of Offsetting Credits. This research allowed me to utilize my interest and knowledge of the blockchain technology while also allowing me to get familiar with some business aspects. \n I mapped out the Voluntary Carbon Market, pointed out sustainable blockchains protocols, investigated NFT technology, considered NWG's role in the space and more. My thoroughness and understanding granted me a grade of 12 on this research, which is the highest obtainable mark in the Danish grading system. ",
                        researchPath: "./ref2.pdf",
                        research: "Bachelor Thesis",
                        duration: "8 months",
                        recommendation: "Nicolai Alexandrowski - Nordic Waves Group CEO",
                        recommendationPath: "./NWG.pdf",
                    }
            }/>
            </Box>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                    {
                        title: "Student Worker at AmiNIC",
                        caption: "Experiments Facilitations and Data Analysis",
                        body: "I started a part-time occupation at AmiNIC, a tech start-up that is working on developing a sensor used to accurately determining the expiration date of meat and fish priducts in order to reduce waste. \n Particularly, I have been responsible for performing some experiments (data gathering) and partially analyze the results, giving a preliminary report to my supervisor. I also had the chance to set-up some experiments that I independently carried on. \n I also designed and 3D printed some fundamental parts, performed fluid-flow analysis, assembled and properly initialized devices and fixed some as well.",
                        duration: "1 years and 6 months",
                        recommendation: "Simon Overgaard Høegh - R&D Program Managers",
                        recommendationPath: "./ref1.pdf",
                                        
                    }
            }/>
            </Box>

            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>  
                2021
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                    {
                        title: "Bachelor of Science in Mechatronics",
                        caption: "Student of Mechatronics at SDU",
                        body: "During my education I learned a lot of theory about mechatronics products, ranging from thermodynamics and other physics topics to 3D modelling and simulation, to embededd programming and neural networks.  \n I also undertook a project for each semester, these projects usually consisted in building simple robots or machines.  \n The practicality of the program helped me to fully integrate and understand the practical aspects of the engineering process and allowed me to have a \"reality-check\" - meaning understanding the limitations of the theory (that mostly deals with ideal, non-real-life conditions) and how to practically compensate for them. ",
                        duration: "3 years",
                        recommendation: "Roana Melina de Oliveira Hansen - Associate Professor at SDU",
                        research: false                    
                    }
            }/>
            </Box>

            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>  
                2019
            </Typography>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                    {
                        title: "Nursery school \"Nido Comunale di Locarno \" ",
                        caption: "Civil Worker as General Collaborator",
                        body: "I have been a handyman but to summarize, 50% of my time was invested in taking care of some management and organization tasks for the principal, I made extensive use of Excel and Word and dealt with some optimization problems. \n The other 50% of the time I was a \"substitute teacher\", I took care of the kids and was responsible for them together with the educators (age ranging from 2 to 4).",
                        duration: "1 year 6 months",
                        recommendation: "Daniela Manfredi - Headmaster",
                        research: false                    
                    }
            }/>
            </Box>

            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                    {
                        title: "High School Degree",
                        caption: "Economics",
                        body: "Acquired the Switzerland National diploma at Liceo Cantonale Locarno (LiLo).",
                        duration: false,
                        recommendation: false,
                        research: false                    
                    }
            }/>
            </Box>

            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                2018
            </Typography> 
            <Box component="div" className={classes.timeLineItem}>
            <ResumeCard val={
                    {
                        title: "Born",
                        caption: "Locarno",
                        body: "Born on December the 4th, 1998, Locarno (Ticino), CH",
                        duration: false,
                        recommendation: false,
                        research: false                    
                    }
            }/>
            </Box>
            <Typography
                variant="h2"
                className={`${classes.timeLineYear} ${classes.timeLineItem}`}>
                1998
            </Typography> 
          
           
                
        </Box>
    </Box>
    <Footer/>
    

    </>
  )
}

export default Resume
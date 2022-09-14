import React from 'react'
import Typed from "react-typed"
import {
    Grid,
    Avatar,
    Typography,
    Box,Paper,Divider
   
} from "@material-ui/core"
import { grey } from '@mui/material/colors';
import HeroCard from './HeroCard'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import { CenterFocusStrong } from '@material-ui/icons'
import avatar from "../Avatar.jpg";
import { width } from '@mui/material/node_modules/@mui/system'
import { dividerClasses } from '@mui/material'

// CSS STYLES
const useStyles = makeStyles(theme => ({

    mainContainer:{
        height: "100vh",
        background: "linear-gradient(90deg,  #abd7fe,  #e5f3ff)",
        display: "flex",
        justifyContent: "center",
        flexDirection: "row",
        alignItems: "center",
        

        [theme.breakpoints.down("sm")]: {
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center"
            },
        [theme.breakpoints.up("md")]: {
            justifyContent: "space-evenly"

        }
    },
    cardContainer:{
        margin: "10px"
    },
    textContainer:{
        display: "flex",
        width: "30vh",
        alignContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "900",
        paddingBottom: "25px"
        
    },
    typed:{
        color: grey[700],
        fontWeight: "100"
    },
    avatar: {
        width: "106px",
        height:"106px",

    },
    divider:{
        width: "130%",
        marginBottom:"10%",
        marginTop:"10%"
    }
}))



  

const Home = () => {
    const classes = useStyles()
  return (


    <Box container className={classes.mainContainer} >
        
        <Box className={classes.textContainer}  >
            <Avatar
                alt="Jamal Salvi"
                src={avatar}
                className={classes.avatar}
                />

            <Divider className={classes.divider} />

            <Typography  variant="h4">
                Jamal Salvi

            </Typography>
            <br/>
            <Box container className={classes.typed}>
            <Typography  variant="h7">
                <Typed
                          strings={["Industry Experience", "Engineering", "Problem-solving", "Teamwork", "Creativity", "Blockchain Enthusiast", "Passion for Management", "Entrepreneurship and Innovation", "BSc in Mechatronics"]}
                    typeSpeed={40}
                    backSpeed={100}
                    loop
                    />
            </Typography>
            </Box>
        </Box>

        <Box className={classes.cardContainer} >
            <HeroCard />
        </Box>

    </Box>


  )
}

export default Home
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
        height: "90vh",
        background: "linear-gradient(319deg, #00ffbd82, transparent)",
        display: "flex",
        justifyContent: "space-evenly",
        flexDirection: "row",
        alignItems: "center",
        

        [theme.breakpoints.down("sm")]: {
            justifyContent: "space-evenly",
            flexDirection: "column",
            alignItems: "center"
            },
        [theme.breakpoints.up("md")]: {
            justifyContent: "space-evenly"

        }
    },
    cardContainer:{
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"
    },
    textContainer:{
        display: "flex",
        alignContent: "space-evenly",
        flexDirection: "column",
        alignItems: "center",
        fontWeight: "900"
        
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
        width: "160%",
        marginBottom:"10%",
        marginTop:"10%"
    }
}))



  

const Header = () => {
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
                    strings={["Industry skills", "Problem-solving", "Teamwork", "Creativity"]}
                    typeSpeed={40}
                    backSpeed={60}
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

export default Header
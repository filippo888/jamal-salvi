import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import {
    Typography,
    Box,
    Divider,
    Grid
} from "@material-ui/core"

import ResponsiveAppBar from './ResponsiveAppBar'
import { grey } from '@mui/material/colors';
import Footer from './Footer'
import ResumeCard from './ResumeCard'
import Card from '@mui/material/Card';
import Paper from '@mui/material/Paper' 
import CardContent from '@mui/material/CardContent';

import MediaCard  from './MediaCard'

const useStyles = makeStyles(theme => ({
    mainContainer:{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        justifyContent: "space-around",
        alignContent: "space-around",
        padding: "20px",
        height: "70vh",
        [theme.breakpoints.up("md")]:{
            flexDirection: "row",
        }
    },

    textContainer:{
        width: "250px",
        boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)",
        [theme.breakpoints.up("md")]:
        {
            width: "650px",
        }
        
    },
    caption:{
        color: grey[700]
    },
    text:{
        margin: theme.spacing(4)
    },
    mainCont:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around"
    }
}))

const AboutMePage = (props) => {
  
  const classes = useStyles()
  return (
    <>
    
    {  props.val.leftImage ? (
    <Grid container spacing={2} className={classes.mainCont}>
        <Grid item sx={3}> 
            <MediaCard val={props.val}/>
        </Grid>

        <Grid item sx={3}> 
            <Card variant="" className={classes.text} sx={{ maxWidth: 645 }}>
                <CardContent >
                    <Box className={classes.caption}>
                    <Typography sx={{ mb: 1.5 }} >
                        { props.val.text.caption}
                    </Typography>
                    </Box>
                    <Typography gutterBottom variant="h5" component="div">
                        {props.val.text.title}
                    </Typography>
                    
                    <Typography variant="body2" sx={{whiteSpace: "pre-line"}}>
                        {props.val.text.body}
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    </Grid>
    ) : (
        
        <Grid container spacing={1} className={classes.mainCont}>
            <Grid item sx={3}> 
                <Card variant="" className={classes.text} sx={{ maxWidth: 645}}>
                    <CardContent >
                        <Box className={classes.caption}>
                        <Typography sx={{ mb: 1.5 }} >
                            { props.val.text.caption}
                        </Typography>
                        </Box>
                        <Typography gutterBottom variant="h5" component="div">
                            {props.val.text.title}
                        </Typography>
                
                        <Typography variant="body2" sx={{whiteSpace: "pre-line"}}>
                            {props.val.text.body}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
            <Grid item sx={6}> 
                <MediaCard val={props.val}/>
            </Grid>
        </Grid>

    )}
    </>
    )
  }
  
  export default AboutMePage
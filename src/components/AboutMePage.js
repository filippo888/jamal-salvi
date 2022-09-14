import React from 'react'
import { makeStyles } from '@material-ui/core/styles'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import CardContent from '@mui/material/CardContent';

import Typography from '@mui/material/Typography';


import { grey } from '@mui/material/colors';

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


    caption:{
        color: grey[700]
    },
    
    mainCont:{
    display: "flex",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBlock: "90px"
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
            <Card variant="" sx={{ maxWidth: 645, margin: "20px", padding: "15px", borderRadius: 10, boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"}}>
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
                <Card variant="" sx={{ margin: "20px", padding: "15px", borderRadius: 10, maxWidth: 645}}>
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
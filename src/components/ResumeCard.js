import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';
import { makeStyles } from '@material-ui/core/styles'





export default function ResumeCard(props) {

  return (
    <Box >
               <Box sx={{ minWidth: { xs: 175, md: 350 } }}>
                   <Card variant="">{<CardContent >
                            <Typography variant="h5" component="div">
                           {props.val.title}
                            </Typography>
                            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                            { props.val.caption}
                            </Typography>
                            <Typography variant="body2" sx={{whiteSpace: "pre-line"}}>
                            {props.val.body}
                            </Typography>
                            <Box container sx={{display: "flex",
                                                flexDirection: "column",
                                                alignItems: "flex-start",
                                                paddingTop: "35px"}}>
                            <Typography component="a" href={props.val.recommendationPath}  color="text.secondary">
                            {props.val.recommendation}
                            </Typography>
                            <Typography component="a" href={props.val.researchPath}  color="text.secondary">
                            {props.val.research}
                            </Typography>
                            <Typography color="text.secondary">
                            {props.val.duration}
                            </Typography>
                            </Box>
                        </CardContent>}</Card>
       
           </Box>
     
    </Box>
    
  );
}

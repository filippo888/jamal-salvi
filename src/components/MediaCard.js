import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import { Box } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles(theme => ({
  card:{
    margin: theme.spacing(4),

  },
  }))
export default function MediaCard(props) {
  const classes = useStyles()
  return (
    <>
    {  props.val.withImage ? (
        <Card sx={{ width: 346, margin: "20px",boxShadow: "0 8px 40px -12px rgba(0,0,0,0.4)"}} className={classes.card}>

        <CardMedia
          component="img"
          image= {props.val.image.imagePath} //"/static/images/cards/contemplative-reptile.jpg"
          alt={props.val.title}
        />

        <CardContent sx={{display:props.val.image.not_caption? 'none':'inherit'}}>
          <Typography gutterBottom variant="h5" component="div">
          {props.val.image.title}
          </Typography>
          <Typography variant="body2"  color="text.secondary">
          {props.val.image.body}  
        </Typography>
        </CardContent>
      </Card>
      ) : (
        <Box sx={{ maxWidth: 345, minWidth: 345}} className={classes.card}/>
      )}
    
    </>
  );
}

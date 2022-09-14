import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { grey } from '@mui/material/colors';


const card = (
  <React.Fragment>
    <CardContent>
      

      <Typography variant="h5" component="div">
      Mechatronics Engineer
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
      Passion for Management,
      
      Blockchain enthusiast
      </Typography>
      <Typography variant="body2">
      Entrepreneurship and Innovation student 
      
      at HULT International Business School, San Fransisco.
      <br />
      BSc in Mechatronics at SDU.
      </Typography>
    </CardContent>
    <CardActions >
      <Button size="big" href='\contact' sx={{color:grey[800]}} >Contact</Button>
    </CardActions>
  </React.Fragment>
);

export default function HeroCard() {
  return (
    <Box sx={{ maxWidth: { xs: 375, md: 675 } }}>
      <Card sx={{ padding: "15px", borderRadius: 10, boxShadow: "0 8px 40px -12px rgba(0,0,0,0.3)"}} variant="">{card}</Card>
    </Box>
  );
}

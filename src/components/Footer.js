import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import MenuItem from '@material-ui/core/MenuItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';

const menuItems = [
    {
        listIcon: <FacebookIcon/>,
        listPath: "/FacebookIcon"
    },
    {
        listIcon: <LinkedInIcon/>,
        listPath: "/LinkedInIcon"
    },
    {
        listIcon: <InstagramIcon/>,
        listPath: "/InstagramIcon"
    },
    {
        listIcon: <AlternateEmailIcon/>,
        listPath: "/AlternateEmailIcon"
        
    }
  ]

const useStyles = makeStyles((theme) => ({
    rootBox: {
        justifyContent: 'center',
    },
    footerNav: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'center',
      marginRight: 'auto',
      width: '100%',
      marginLeft: 'auto',
      marginTop: theme.spacing(3),
      marginBottom: theme.spacing(2),
      
    },
    link:{
        justifyContent: 'center',
        
    }
    
  }));

export default function Footer(props) {
    const classes = useStyles();

  
return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} display="flex" flexWrap="wrap" alignItems="center" className={classes.rootBox}>
          <Box component="nav" className={classes.footerNav}>
            {menuItems.map((page) => (
            <MenuItem key={page.listText} component={Link} to={page.listPath}>
              <ListItemIcon className={classes.link} > {page.listIcon}</ListItemIcon>
            </MenuItem>
            ))}</Box>
        </Box>
      </Container>
    </footer>
  );
}
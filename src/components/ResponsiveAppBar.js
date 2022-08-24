import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import {ListItemIcon,
  ListItemText} from "@material-ui/core"
import {Home, AssignmentInd,Apps ,ContactMail, Person}from "@material-ui/icons"
import {Link} from "react-router-dom"
import { grey } from '@mui/material/colors';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'


const menuItems = [
  {
      listIcon: <Home/>,
      listText: "HOME",
      listPath: "/"
  },
  {
      listIcon: <AssignmentInd/>,
      listText: "RESUME",
      listPath: "/resume"
  },
  {
    listIcon: <Person/>,
    listText: "ABOUT ME",
    listPath: "/aboutMe"
  },
  {
      listIcon: <ContactMail/>,
      listText: "CONTACT",
      listPath: "/contact"
  }
]

const useStyles = makeStyles(theme => ({
  menuIcon: {
    color: "black"
  },
  }))

const ResponsiveAppBar = () => {

  const classes = useStyles()


  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };


  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar  sx={{background: "white", position: "fixed",
    top: 0}} >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
          <Box sx={{ flexGrow: 1, justifyContent: "right", display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon className={classes.menuIcon}/>
            </IconButton>
            <Menu 
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                width:"250px"
              }}
              
            >

                
              {menuItems.map((page) => (
                <MenuItem key={page.listText} component={Link} to= {page.listPath} onClick={handleCloseNavMenu}>
                  <ListItemIcon > {page.listIcon}</ListItemIcon>
                  <ListItemText  primary={<Typography textAlign="center">{page.listText}</Typography>}/>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          
          
          <Box sx={{ flexGrow: 1,justifyContent: "right", color: 'black', display: { xs: 'none', md: 'flex' } }}>
            {menuItems.map((page) => (
            <MenuItem key={page.listText} component={Link} to= {page.listPath} onClick={handleCloseNavMenu}>
              <ListItemIcon  > {page.listIcon}</ListItemIcon>
              <ListItemText primary={<Typography textAlign="center" color={grey[800]}> {page.listText}</Typography>}/>
            </MenuItem>

            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>

          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;

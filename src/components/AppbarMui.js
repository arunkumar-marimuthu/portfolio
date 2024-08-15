import * as React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { HomeMaxRounded } from '@mui/icons-material';

const drawerWidth = 240;
const navItems = ['Home', 'About', 'Experience', 'Projects', 'Qualification', 'Skills', 'Contact'];

function AppbarMui(props) {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };


    
  const about =()=>{
    const element = document.getElementById('about');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const experience =()=>{
    const element = document.getElementById('experience');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const projects =()=>{
    const element = document.getElementById('projects');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const qualification =()=>{
    const element = document.getElementById('qualification');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const skills =()=>{
    const element = document.getElementById('skills');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const home =()=>{
    const element = document.getElementById('home');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const contact =()=>{
    const element = document.getElementById('contact');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const stacks =()=>{
    const element = document.getElementById('stacks');
    if (element) {
     
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }




    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center', backgroundColor: "black", color: "white" }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                PORTFOLIO
            </Typography>
            <Divider />
            <List>

            <ListItem disablePadding>
      <ListItemButton
        sx={{
          textAlign: 'center'
        }}
        onClick={home}
      >
        <ListItemText primary="Home" />
      </ListItemButton>
    </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={about}>
                        <ListItemText primary="About" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={experience}>
                        <ListItemText primary="Experience" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={projects}>
                        <ListItemText primary="Projects" />
                    </ListItemButton>
                </ListItem>

                  <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={qualification}>
                        <ListItemText primary="Qualification" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={stacks}>
                        <ListItemText primary="Technical Stacks" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={skills}>
                        <ListItemText primary="Skills" />
                    </ListItemButton>
                </ListItem>
                <ListItem disablePadding>
                    <ListItemButton sx={{ textAlign: 'center' }} onClick={contact}>
                        <ListItemText primary="Contacts" />
                    </ListItemButton>
                </ListItem>

            </List>
        </Box>
    );

    const handleNav = (value) => {
        console.log(value)
    }

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <>
            <AppBar sx={{ backgroundColor: "black" }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' },justifyItems:'end' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        PORTFOLIO
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' },marginLeft:"50px" }}>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={home}>Home</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}}  onClick={about}>About</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={experience}>Experience</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={projects}>Projects</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}}  onClick={qualification}>Qualification</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={stacks}>Technical Stacks</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={skills}>Skills</Button>
                        <Button sx={{ color: '#fff' ,'&:hover':{color:"#FFFF00"}}} onClick={contact}>Contacts</Button>
                    </Box>
                </Toolbar>
            </AppBar>v
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
        </>
    );
}

AppbarMui.propTypes = {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window: PropTypes.func,
};

export default AppbarMui;
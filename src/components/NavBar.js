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
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';



import logo from "../img/logo.jpg"
import "./NavBar.css";
import CartWidget from "./CartWidget";

const pages = ['Tintas', 'Resmas', 'Perifericos'];


const NavBar = ()=>{
    const [anchorElNav, setAnchorElNav] = React.useState(null);
   
  
    const handleOpenNavMenu = (event) => {
      setAnchorElNav(event.currentTarget);
    };
   

  
    const handleCloseNavMenu = () => {
      setAnchorElNav(null);
    };
  
  
    return (
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
            >
              <img src={logo}  alt="logo"/>
            </Typography>
  
            <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
              <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
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
                }}
              >
                {pages.map((page,i) => (
                  <MenuItem key={i} onClick={handleCloseNavMenu}>
                    <Typography textAlign="center">{page}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <img src={logo}  alt="logo"/>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <Button
                  key={page}
                  onClick={handleCloseNavMenu}
                  sx={{ my: 2, color: 'white', display: 'block' }}
                >
                  {page}
                </Button>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
                <CartWidget></CartWidget>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
    


export default NavBar 

/*return (
        <div className="NavBar">
            <img src={logo}  alt="logo"/>
            <h1>WS-Web</h1>
            <nav>
                <a href="#">Tintas</a>
                <a href="#">Resmas</a>
                <a href="#">Perifericos</a>
            </nav>
            <CartWidget/>
        </div>
    )*/
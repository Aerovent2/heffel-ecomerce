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

import logo from "../img/logo.jpg"
import "./NavBar.css";
import CartWidget from "./CartWidget";
import { NavLink } from 'react-router-dom';

const pages = [{Name:"Tintas", Id:1, Url:"categorias/tintas"},
                {Name:"Resmas", Id:2, Url:"categorias/resmas"},
                {Name:"Perifericos", Id:3, Url:"categorias/perifericos"}];


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
              <NavLink to="/">
                <img src={logo}  alt="logo"/>
              </NavLink>
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
                {pages.map((page) => (
                    <NavLink key={page.Id} to={page.Url} style= { { textDecoration: 'none' }}>
                      <MenuItem  onClick={handleCloseNavMenu}>
                        <Typography sx={{color:"black"}} textAlign="center">{page.Name}</Typography>
                    </MenuItem>
                  </NavLink>
                ))}
              </Menu>
            </Box>
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
            >
              <NavLink to="/">
                <img src={logo}  alt="logo"/>
              </NavLink>
            </Typography>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pages.map((page) => (
                <NavLink key={page.Id} to={page.Url} style= { { textDecoration: 'none' }} >
                  <Button onClick={handleCloseNavMenu} sx={{ my: 2, color: 'white', display: 'block' }}
                  >{page.Name} 
                  </Button>
                </NavLink>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <NavLink to="/cart" style={{color: 'white'}}  > 
                <CartWidget>  </CartWidget>
              </NavLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    );
  };
    


export default NavBar 


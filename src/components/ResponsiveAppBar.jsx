import {React, useEffect, useState} from 'react'
import {AppBar, Box, Toolbar, IconButton, Typography, Menu, MenuItem, Tooltip, Container, Button, Stack, Avatar, Badge} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import {NavLink, Outlet} from 'react-router-dom';

const ResponsiveAppBar = () => {

    const [anchorElNav, setAnchorElNav] = useState(null);
    const [anchorElUser, setAnchorElUser] = useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };

    return (
        <>
            <AppBar sx={{backgroundColor:'white'}}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        {/* LOGO */}
                        <Typography
                            noWrap
                            component="a"
                            href="/"
                            sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.2rem',
                            color: 'info.main',
                            textDecoration: 'none',
                            fontFamily:'inherit',
                            fontSize:'30px'
                            }}
                        >
                            NEWS
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
                            <MenuIcon sx={{color: 'black'}}/>
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
                                <Stack direction='column-reverse'>
                                    <NavLink to='sports'><MenuItem onClick={handleCloseNavMenu} sx={{color:'#536872', '&:hover': { color: 'info.main' }}}>Seattle Sports</MenuItem></NavLink>
                                    <NavLink to='/'><MenuItem onClick={handleCloseNavMenu} sx={{color:'#536872', '&:hover': { color: 'info.main' }}}>Seattle Politics</MenuItem></NavLink>
                                    <NavLink to='bussiness'><MenuItem onClick={handleCloseNavMenu} sx={{color:'#536872', '&:hover': { color: 'info.main' }}}>Seattle Bussiness</MenuItem></NavLink>
                                    <NavLink to='hedge'><MenuItem onClick={handleCloseNavMenu} sx={{color:'#536872', '&:hover': { color: 'info.main' }}}>Zerohedge</MenuItem></NavLink>
                                    <NavLink to='rockwell'><MenuItem onClick={handleCloseNavMenu} sx={{color:'#536872', '&:hover': { color: 'info.main' }}}>Lewrockwell</MenuItem></NavLink>
                                </Stack>
                            </Menu>
                        </Box>
                        <Typography
                            variant="body1"
                            noWrap
                            component="a"
                            sx={{
                            display: { xs: 'flex', md: 'none' },
                            flexGrow: 1,
                            fontWeight: 300,
                            letterSpacing: '.1rem',
                            color: 'info.main',
                            textDecoration: 'none',
                            fontSize:'20px'
                            }}
                        >
                            NEWS
                        </Typography>
                        <Stack direction='row-reverse' spacing={2} sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            <NavLink to='sports'>
                                <Button color='info' size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: '#536872', '&:hover': { color: 'info.main' }, display: 'block' }}>Seattle Sports</Button>
                            </NavLink>

                            <NavLink to='/'>
                                <Button color='info' size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: '#536872','&:hover': { color: 'info.main' }, display: 'block' }}>Seattle Politics</Button>
                            </NavLink>
                                                        
                            <NavLink to='bussiness'>
                                <Button color='info' size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: '#536872','&:hover': { color: 'info.main' }, display: 'block' }}>Seattle Bussiness</Button>
                            </NavLink>
                            
                            <NavLink to='hedge'>
                                <Button color='info' size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: '#536872','&:hover': { color: 'info.main' }, display: 'block' }}>Zerohedge</Button>
                            </NavLink>
                            
                            <NavLink to='rockwell'>
                                <Button color='info' size='large' onClick={handleCloseNavMenu} sx={{ my: 2, color: '#536872','&:hover': { color: 'info.main' }, display: 'block' }}>Lewrockwell</Button>
                            </NavLink>
                        </Stack>
                    </Toolbar>
                </Container>
            </AppBar>
            <main>
                <Outlet/>
            </main>
        </>
    );
}
export default ResponsiveAppBar;
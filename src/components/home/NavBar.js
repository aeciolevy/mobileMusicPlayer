import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';

const NavBar = ({ classes, handleDrawerToggle }) => (
    <AppBar className={classes.appBar}>
        <Toolbar>
            <IconButton color="inherit" aria-label="Open drawer" onClick={handleDrawerToggle}
                className={classes.navIconHide}
            >
                <MenuIcon />
            </IconButton>
            <Typography variant="title" color="inherit" noWrap>
                Playing<strong>fy</strong>
            </Typography>
        </Toolbar>
    </AppBar>
);

export default NavBar;

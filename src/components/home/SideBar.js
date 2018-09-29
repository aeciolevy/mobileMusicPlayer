import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import ListOfLinks from './ListOfLinks';

const SideBar = ({variant, classes, mobileOpen, handleDrawerToggle}) => (
    <Drawer style={{ border: 'none', height: '100vh'}}
        variant={variant}
        open={mobileOpen}
        onClose={handleDrawerToggle}
        classes={{
            paper: classes.drawerPaper,
        }}
        ModalProps={{
            keepMounted: variant === 'temporary' ? true : false, // Better open performance on mobile.
        }}
    >
        <ListOfLinks classes={classes}/>
    </Drawer>
);

export default SideBar;

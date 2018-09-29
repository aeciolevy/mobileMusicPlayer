import React, { Fragment } from 'react';
import { List, Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Favorite from '@material-ui/icons/Favorite';
export const Links = (
    <Fragment>
        
        <ListItem button style={{ color: 'white' }}>
            <ListItemIcon>
                <Favorite style={{ color: 'white', margin: 'unset' }}/>
            </ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary="Favorites"
                primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>

    </Fragment>
);

const ListOfLinks = ({ classes }) => (
    <div>
        <div className={classes.toolbar} />
        <Divider />
        <List style={{ color: 'white' }}>{Links}</List>
    </div>
);

export default ListOfLinks;

import React, { Fragment } from 'react';
import { List, Divider } from '@material-ui/core';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import DraftsIcon from '@material-ui/icons/Drafts';
import StarIcon from '@material-ui/icons/Star';
import SendIcon from '@material-ui/icons/Send';

export const Links = (
    <Fragment>
        
        <ListItem button style={{ color: 'white' }}>
            <ListItemIcon>
                <StarIcon style={{ color: 'white', margin: 'unset' }}/>
            </ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary="Starred"
                primaryTypographyProps={{ style: { color: 'white' } }} />
        </ListItem>
        
        <ListItem button>
            <ListItemIcon>
                <DraftsIcon style={{ color: 'white', margin: 'unset' }}/>
            </ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary="Drafts" primaryTypographyProps={{ style: { color: 'white'}}} />
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

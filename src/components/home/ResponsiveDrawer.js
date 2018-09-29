import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Hidden from '@material-ui/core/Hidden';
import NavBar from './NavBar';
import SideBar from './SideBar';

const drawerWidth = 150;
const themePrimaryColor = '#272727';

const styles = theme => ({
    root: {
        flexGrow: 1,
        height: '100vh',
        zIndex: 1,
        overflow: 'hidden',
        position: 'relative',
        display: 'flex',
        width: '100%',
    },
    appBar: {
        position: 'absolute',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('md')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    navIconHide: {
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
        backgroundColor: themePrimaryColor,
        [theme.breakpoints.up('md')]: {
            position: 'relative',
        },
    },
    drawerModal: {
        backgroundColor: 'gray',
    },
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing.unit * 3,
    },
});

class ResponsiveDrawer extends React.Component {
    state = {
        mobileOpen: false,
    };

    handleDrawerToggle = () => {
        this.setState(state => ({ mobileOpen: !state.mobileOpen }));
    };

    render() {
        const { classes, children } = this.props;

        return (
            <div className={classes.root}>
                <NavBar classes={classes} handleDrawerToggle={this.handleDrawerToggle} />
                <Hidden mdUp>
                    <SideBar classes={classes} variant="temporary" 
                        mobileOpen={this.state.mobileOpen} 
                        handleDrawerToggle={this.handleDrawerToggle}
                    />
                </Hidden>
                <Hidden smDown implementation="css">
                    <SideBar classes={classes} variant="permanent"
                        mobileOpen={this.state.mobileOpen} />
                </Hidden>
                { children }
            </div>
        );
    }
}

ResponsiveDrawer.propTypes = {
    classes: PropTypes.object.isRequired,
    theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(ResponsiveDrawer);

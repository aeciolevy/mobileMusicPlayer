import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TableStyled } from '../styled/MainHomeStyled';
import PlaylistTableHeader from './PlaylistTableHeader';
import PlaylistBodyContainer from './PlaylistBodyContainer';

const styles = theme => ({
    root: {
        width: '100%',
        height: 'inherit',
        overflowX: 'auto',
        overflowY: 'auto',
        backgroundColor: '#212121',
        boxShadow: 'unset',
    },
});

const PlaylistTable = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <TableStyled >
                <PlaylistTableHeader />
                <PlaylistBodyContainer />
            </TableStyled>
        </Paper>
    );
};

PlaylistTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistTable);

import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import { TableStyled } from '../styled/MainHomeStyled';
import PlaylistTableHeader from './PlaylistTableHeader';
import PlaylistTableBody from './PlaylistTableBody';

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

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

const PlaylistTable = (props) => {
    const { classes } = props;

    return (
        <Paper className={classes.root}>
            <TableStyled >
                <PlaylistTableHeader />
                <PlaylistTableBody rows={rows} />
            </TableStyled>
        </Paper>
    );
};

PlaylistTable.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PlaylistTable);

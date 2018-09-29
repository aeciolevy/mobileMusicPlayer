import React from 'react';
import PropTypes from 'prop-types';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import { withStyles } from '@material-ui/core';
import PlayCircleFilled from '@material-ui/icons/PlayCircleFilled';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = theme => ({
    cell: {
        [theme.breakpoints.down(960)]: {
            display: 'none',
        },
    },
});

const PlaylistTableBody = ({ rows, classes }) => (
    <TableBody>
        {rows.map(row => {
            return (
                <TableRow key={row.id}>
                    <TableCell> <PlayCircleFilled /> </TableCell>
                    <TableCell className={classes.cell}> <FavoriteBorder /> </TableCell>
                    <TableCell component="th" scope="row">
                        {row.name}
                    </TableCell>
                    <TableCell className={classes.cell}>{row.calories}</TableCell>
                    <TableCell className={classes.cell}>{row.fat}</TableCell>
                    <TableCell className={classes.cell} numeric>{row.carbs}</TableCell>
                </TableRow>
            );
        })}
    </TableBody>
);

PlaylistTableBody.propTypes = {
    rows: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
};

export default withStyles(styles)(PlaylistTableBody);

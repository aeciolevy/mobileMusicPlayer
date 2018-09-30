import React from 'react';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import { withStyles } from '@material-ui/core/styles';
import AccessTime from '@material-ui/icons/AccessTime';

const styles = theme => ({
    cell: {
        [theme.breakpoints.down(960)]: {
            display: 'none',
        },
    },
});

const PlaylistTableHeader = ({classes}) => (
    <TableHead>
        <TableRow>
            <TableCell>  </TableCell>
            <TableCell className={classes.cell}>  </TableCell>
            <TableCell> Title </TableCell>
            <TableCell className={classes.cell}> Artist </TableCell>
            <TableCell className={classes.cell} numeric> <AccessTime /> </TableCell>
        </TableRow>
    </TableHead>
);

export default withStyles(styles)(PlaylistTableHeader);

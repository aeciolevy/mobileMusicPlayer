import React, { Component } from 'react';
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

const highlightColor = '#00abfd';



class PlaylistTableBody extends Component {
    
    handleSelected = (row, selectable = false) => {
        if (!selectable){
            this.props.selectedTrack(row);
        }
    }

    handlePlay = (event, song) => {
        event.stopPropagation();
        this.props.playSong(song);
    }

    render() {
        const { rows, classes, selected, currentTrack } = this.props; 
        console.log(currentTrack)
        return(
            <TableBody>
                {rows.map(row => {
                    const active = currentTrack && currentTrack.title === row.title; 
                    return (
                        <TableRow key={row.title} onClick={() => this.handleSelected(row)}>
                            <TableCell onClick={(event) => this.handlePlay(event, row)} style={{ color: active ? highlightColor : 'white' }}> 
                                <PlayCircleFilled /> 
                            </TableCell>
                            <TableCell className={classes.cell} style={{ color: active ? highlightColor : 'white' }}> 
                                <FavoriteBorder /> 
                            </TableCell>
                            <TableCell style={{ color: active ? highlightColor : 'white'}}>
                                {row.title}
                            </TableCell>
                            <TableCell style={{ color: active ? highlightColor : 'white' }} className={classes.cell}>
                                {row.artist}
                            </TableCell>
                            <TableCell style={{ color: active ? highlightColor : 'white' }} className={classes.cell} numeric>
                                {row.durationFormatted}
                            </TableCell>
                        </TableRow>
                    );
                })}
            </TableBody>
        );
    }
};

PlaylistTableBody.propTypes = {
    rows: PropTypes.oneOfType([PropTypes.object, PropTypes.array]).isRequired,
    selected: PropTypes.object,
};

export default withStyles(styles)(PlaylistTableBody);

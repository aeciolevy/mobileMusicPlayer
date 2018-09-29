import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgressStyled } from '../styled/HomeStyled';

const styles = {
    barColor: {
        backgroundColor: '#00abfd',
    },
};

const SongProgress = ({ classes }) => (
    <LinearProgressStyled variant="determinate" value={50} 
        classes={{
            bar1Determinate: classes.barColor,
        }}/>
);

export default withStyles(styles)(SongProgress);

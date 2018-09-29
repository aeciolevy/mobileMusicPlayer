import React from 'react';
import { TrackStyled } from '../styled/HomeStyled';
import { Typography } from '@material-ui/core';

const Track = () => (
    <TrackStyled> 
        <Typography variant="headline" align="center" style={{ color: 'white'}}> Track Title </Typography>
        <Typography variant="subheading" align="center" style={{ color: 'white' }}> Artist </Typography>
    </TrackStyled>
);

export default Track;

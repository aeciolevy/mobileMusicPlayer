import React from 'react';
import { connect } from 'react-redux';
import { TrackStyled } from '../styled/HomeStyled';
import { Typography } from '@material-ui/core';
import { getCurrentTrackSelector } from '../../reducers';

const Track = ({currentTrack}) => (
    <TrackStyled> 
        <Typography variant="headline" align="center" style={{ color: 'white'}}>
            {currentTrack ? currentTrack.title : ''}
        </Typography>
        <Typography variant="subheading" align="center" style={{ color: 'white' }}>
            {currentTrack ? currentTrack.artist : ''}
        </Typography>
    </TrackStyled>
);


const mapStateToProps = state => ({
    currentTrack: getCurrentTrackSelector(state).info,
});

export default connect(mapStateToProps)(Track);

import React from 'react';
import { connect } from 'react-redux';
import { TrackStyled } from '../styled/HomeStyled';
import { Typography } from '@material-ui/core';
import { getCurrentTrackSelector, getSelectedTrackSelector } from '../../reducers';

const Track = ({currentTrack, selectedTrack}) => (
    <TrackStyled> 
        <Typography variant="headline" align="center" style={{ color: 'white'}}>
            {currentTrack ? currentTrack.title : selectedTrack ? selectedTrack.title : ''}
        </Typography>
        <Typography variant="subheading" align="center" style={{ color: 'white' }}>
            {currentTrack ? currentTrack.artist : selectedTrack ? selectedTrack.title : ''}
        </Typography>
    </TrackStyled>
);


const mapStateToProps = state => ({
    currentTrack: getCurrentTrackSelector(state).info,
    selectedTrack: getSelectedTrackSelector(state),
});

export default connect(mapStateToProps)(Track);

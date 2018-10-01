import React from 'react';
import { connect } from 'react-redux';
import { ControlsStyled, TrackName } from '../styled/HomeStyled';
import PlayerController from './PlayerController';
import SongProgress from './SongProgress';
import { getSelectedTrackSelector, getCurrentTrackSelector } from '../../reducers';

const Controls = ({ currentTrack }) => (
    <ControlsStyled> 
        <TrackName > {currentTrack && currentTrack.info ? currentTrack.info.title : ''} </TrackName>
        <PlayerController />
        <SongProgress />
    </ControlsStyled>
);

const mapStateToProps = state => ({
    currentTrack: getCurrentTrackSelector(state),
});

export default connect(mapStateToProps)(Controls);

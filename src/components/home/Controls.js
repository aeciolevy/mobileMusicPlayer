import React from 'react';
import { ControlsStyled, TrackName } from '../styled/HomeStyled';
import PlayerController from './PlayerController';
import SongProgress from './SongProgress';


const Controls = () => (
    <ControlsStyled> 
        <TrackName > Track Title </TrackName>
        <PlayerController />
        <SongProgress />
    </ControlsStyled>
);

export default Controls;

import React from 'react';
import { Controllers } from '../styled/HomeStyled';
import PlayArrow from '@material-ui/icons/PlayArrow';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';

const buttonsStyle = { fontSize: '2.8rem', color: '#00abfd'};
const playStyle = { fontSize: '3.5rem', color: '#00abfd'};

const PlayerController = () => {
    return(
        <Controllers>
            <SkipPrevious style={buttonsStyle}/>
            <PlayArrow style={playStyle}/>
            <SkipNext style={buttonsStyle}/>
        </Controllers>
    );
};

export default PlayerController;

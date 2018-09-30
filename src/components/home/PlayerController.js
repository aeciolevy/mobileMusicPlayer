import React from 'react';
import { Controllers } from '../styled/HomeStyled';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';
import PlayContainer from './PlayContainer';

const buttonsStyle = { fontSize: '2.8rem', color: '#00abfd'};

const PlayerController = () => {
    return(
        <Controllers>
            <SkipPrevious style={buttonsStyle}/>
            <PlayContainer />
            <SkipNext style={buttonsStyle}/>
        </Controllers>
    );
};

export default PlayerController;

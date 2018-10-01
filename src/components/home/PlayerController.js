import React from 'react';
import { connect } from 'react-redux';
import { skipSong } from '../../actions';
import { Controllers } from '../styled/HomeStyled';
import SkipNext from '@material-ui/icons/SkipNext';
import SkipPrevious from '@material-ui/icons/SkipPrevious';
import PlayContainer from './PlayContainer';


const buttonsStyle = { fontSize: '2.8rem', color: '#00abfd', cursor: 'pointer'};

const PlayerController = ({ skipSong }) => {
    return(
        <Controllers>
            <SkipPrevious style={buttonsStyle} onClick={() => skipSong(false)} />
            <PlayContainer />
            <SkipNext style={buttonsStyle} onClick={skipSong}/>
        </Controllers>
    );
};

export default connect(null, {skipSong})(PlayerController);

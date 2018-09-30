import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { getIsPlayingSelector, getCurrentTrackSelector } from '../../reducers';

const playStyle = { fontSize: '3.5rem', color: '#00abfd', cursor: 'pointer' };

const PlayerContainer = ({ isPlaying, currentTrack }) => {
    
    return(
        <Fragment>
            { isPlaying ?
                <Pause style={ playStyle } />
                :
                <PlayArrow style={ playStyle} />
            }
        </Fragment>
    );
};



const mapStateToProps = state => ({
    
});
    

export default connect(mapStateToProps)(PlayerContainer);


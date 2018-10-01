import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { getIsPlayingSelector, getCurrentTrackSelector, getNextTrackSelector, getSongsSelector } from '../../reducers';
import { playSong, pauseSong } from '../../actions';

const playStyle = { fontSize: '3.5rem', color: '#00abfd', cursor: 'pointer' };

const TIME_TO_PLAY_NEXT = 3;

class PlayerContainer extends Component {
    
    state = { isPlaying: false }

    frameId = null;

    checkIfIsPlaying() {
        const { songs, currentTrack, nextTrack, playSong } = this.props;
        if (currentTrack.ref) {
            const isPlaying = currentTrack.ref.playing();
            const timeToFinish = currentTrack.ref.duration() - currentTrack.ref.seek();
            if (( timeToFinish < TIME_TO_PLAY_NEXT) && isPlaying){
                playSong(songs[nextTrack.id]);
            }
            this.setState({ isPlaying });
            requestAnimationFrame(this.checkIfIsPlaying.bind(this));
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack.id !== prevProps.currentTrack.id && !this.frameId) {
            this.frameId = requestAnimationFrame(this.checkIfIsPlaying.bind(this));
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
    }

    render(){
        const { isPlaying } = this.state;
        const { playSong, pauseSong } = this.props;
        return(
            <Fragment>
                { isPlaying ?
                    <Pause style={ playStyle } onClick={pauseSong}/>
                    :
                    <PlayArrow style={ playStyle} onClick={ () => playSong(null, true)}/>
                }
            </Fragment>
        );
    }
};

const mapStateToProps = state => ({
    isPlaying: getIsPlayingSelector(state),
    currentTrack: getCurrentTrackSelector(state),
    nextTrack: getNextTrackSelector(state),
    songs: getSongsSelector(state),
});
    

export default connect(mapStateToProps, {playSong, pauseSong})(PlayerContainer);


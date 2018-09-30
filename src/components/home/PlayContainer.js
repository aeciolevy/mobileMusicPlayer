import React, { Fragment, Component } from 'react';
import { connect } from 'react-redux';
import PlayArrow from '@material-ui/icons/PlayArrow';
import Pause from '@material-ui/icons/Pause';
import { getIsPlayingSelector, getCurrentTrackSelector } from '../../reducers';
import { playSong, pauseSong } from '../../actions';

const playStyle = { fontSize: '3.5rem', color: '#00abfd', cursor: 'pointer' };

class PlayerContainer extends Component {
    
    state = { isPlaying: false }

    frameId = null;

    checkIfIsPlaying() {
        const { currentTrack } = this.props;
        const isPlaying = currentTrack.ref.playing();
        this.setState({ isPlaying });
        requestAnimationFrame(this.checkIfIsPlaying.bind(this));
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
});
    

export default connect(mapStateToProps, {playSong, pauseSong})(PlayerContainer);


import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import { LinearProgressStyled } from '../styled/HomeStyled';
import { getCurrentTrackSelector } from '../../reducers';

const styles = {
    barColor: {
        backgroundColor: '#00abfd',
    },
};

class SongProgress extends Component {
    constructor(props) {
        super(props);
        this.frameId = null;
        this.state = { progress: 0 };
    }
    
    updateProgress() {      
        const { currentTrack } = this.props;
        const progress = currentTrack.instance.getProgress();
        this.setState({ progress });
        requestAnimationFrame(this.updateProgress.bind(this));
    }

    componentDidUpdate(prevProps) {
        if (this.props.currentTrack.id !== prevProps.currentTrack.id && !this.frameId) {
            this.frameId = requestAnimationFrame(this.updateProgress.bind(this));
        }
    }

    componentWillUnmount() {
        cancelAnimationFrame(this.frameId);
    }

    render() {
        const { classes} = this.props;
        
        return(
            <LinearProgressStyled variant="determinate" value={this.state.progress} 
                classes={{
                    bar1Determinate: classes.barColor,
                }}/>
        );
    }
}

const mapStateToProps = state => ({
    currentTrack: getCurrentTrackSelector(state),
});

export default connect(mapStateToProps)(withStyles(styles)(SongProgress));

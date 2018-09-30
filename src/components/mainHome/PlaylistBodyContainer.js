import { connect } from 'react-redux';
import { playSong, selectedTrack } from '../../actions';
import { getSongsSelector, getSelectedTrackSelector, getCurrentTrackSelector } from '../../reducers';
import PlaylistTableBody from  './PlaylistTableBody';

const mapStateToProps = state => ({
    rows: getSongsSelector(state),
    selected: getSelectedTrackSelector(state),
    currentTrack: getCurrentTrackSelector(state).info,
});

export default connect(mapStateToProps, {playSong, selectedTrack})(PlaylistTableBody);

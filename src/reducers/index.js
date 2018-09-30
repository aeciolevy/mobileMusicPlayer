import { combineReducers } from 'redux';
import { reducer as flashReducer } from 'redux-flash';
import mediaPlay, * as fromSongs from './songs';

export default combineReducers({
    flash: flashReducer,
    mediaPlay,
});

// SONGS SELECTORS
export const getSongsSelector = state => fromSongs.getSongs(state.mediaPlay);
export const getIsPlayingSelector = state => fromSongs.getIsPlaying(state.mediaPlay);
export const getCurrentTrackSelector = state => fromSongs.getCurrentTrack(state.mediaPlay);
export const getNextTrackSelector = state => fromSongs.getNextTrack(state.mediaPlay);
export const getSelectedTrackSelector = state => fromSongs.getSelectedTrack(state.mediaPlay);
export const getSelectedTrackTitleSelector = state => fromSongs.getSelectedTrackTitle(state.mediaPlay);

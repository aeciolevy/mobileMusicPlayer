import * as types from './types';
import * as api from '../api/songs';
import to from '../utils/to';
import { flashErrorMessage } from 'redux-flash';
import { getSongsSelector, getCurrentTrackSelector, getSelectedTrackSelector } from '../reducers';
import MediaPlayer from '../mediaPlayer';

export const addSongToStore = () => async dispatch => {
    const [error, response] = await to(api.getSongs());
    if (error) {
        dispatch(flashErrorMessage(error.message));
    }
    let songsArray = [];
    response.forEach( doc => {
        songsArray = [...songsArray, doc.data()]; 
    });
    if (response) {
        dispatch({ type: types.ADD_SONGS, payload: songsArray });
    }
};

const actionsToPlay = (song, index, dispatch) => {
    const mediaPlayer = new MediaPlayer();
    mediaPlayer.playSong(song.downloadURL);
    const currentTrack = mediaPlayer.getSongReference();
    dispatch({ type: types.SET_CURRENT_TRACK, payload: { instance: mediaPlayer, ref: currentTrack, info: song, id: index } });
}

export const playSong = (song, playingSelected = false) => async (dispatch, store) => {
    const currentPlay = getCurrentTrackSelector(store());
    const songs = getSongsSelector(store());
    const selectedSong = getSelectedTrackSelector(store());
    const songToPlay = playingSelected ? selectedSong : song;
    if (currentPlay.ref && !playingSelected) {
        currentPlay.ref.stop();
    }
    // If playing selected song from playing list
    // check if there is a selected song first
    if (playingSelected && !selectedSong.title) {
        return {};
    }
    const index = songs.findIndex(el => el.title === songToPlay.title);
    actionsToPlay(songToPlay, index, dispatch);
};

export const pauseSong = () => async (dispatch, store) => {
    const currentTrack = getCurrentTrackSelector(store());
    currentTrack.ref.pause();
};

export const resumeSong = () => async (dispatch, store) => {
    const currentTrack = getCurrentTrackSelector(store());
    currentTrack.ref.play();
};

export const selectedTrack = (song) => {
    return { type: types.SELECTED_TRACK, payload: song };
};

export const skipSong = (isNext = true) => async (dispatch, store) => {
    const currentTrack = getCurrentTrackSelector(store());
    const { id } = currentTrack;
    // just skip if it playing
    if (!currentTrack.ref) {
        return {};
    }
    const songs = getSongsSelector(store());
    let newId = isNext ? (id + 1) % songs.length : (id - 1) % songs.length;
    if (newId < 0) {
        newId = songs.length - 1;
    }
    if (currentTrack.ref) {
        currentTrack.ref.stop();
    }
    const skipSong = songs[newId];
    actionsToPlay(skipSong, newId, dispatch);
};

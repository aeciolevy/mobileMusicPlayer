import * as types from './types';
import * as api from '../api/songs';
import to from '../utils/to';
import { flashErrorMessage } from 'redux-flash';
import { getSongsSelector, getCurrentTrackSelector } from '../reducers';
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

export const playSong = (song) => async (dispatch, store) => {
    const currentPlay = getCurrentTrackSelector(store());
    const songs = getSongsSelector(store());
    if (currentPlay.ref) {
        currentPlay.ref.stop();
    }
    const index = songs.findIndex(el => el.title === song.title);
    const mediaPlayer = new MediaPlayer();
    mediaPlayer.playSong(song.downloadURL);
    const currentTrack = mediaPlayer.getSongReference();
    dispatch({ type: types.SET_CURRENT_TRACK, payload: { ref: currentTrack, info: song, id: index }});
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
    console.log(song)
    return { type: types.SELECTED_TRACK, payload: song };
};


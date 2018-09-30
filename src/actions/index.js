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

export const playSong = (song, playingSelected = false) => async (dispatch, store) => {
    const currentPlay = getCurrentTrackSelector(store());
    const songs = getSongsSelector(store());
    const selectedSong = getSelectedTrackSelector(store());
    const songToPlay = playingSelected ? selectedSong : song;
    if (currentPlay.ref && !playingSelected) {
        currentPlay.ref.stop();
    }
    const index = songs.findIndex(el => el.title === songToPlay.title);
    const mediaPlayer = new MediaPlayer();
    mediaPlayer.playSong(songToPlay.downloadURL);
    const currentTrack = mediaPlayer.getSongReference();
    dispatch({ type: types.SET_CURRENT_TRACK, payload: { instance: mediaPlayer, ref: currentTrack, info: songToPlay, id: index }});
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

export const playFromControl = () => async (dispatch, store) => {
    const currentPlay = getCurrentTrackSelector(store());
    const selectedSong = getSelectedTrackSelector(store());
    const songs = getSongsSelector(store());
    // if it is selected and is not playing 
    // play the selected song;
    if (!currentPlay.ref && selectedSong.title) {
        const mediaPlayer = new MediaPlayer();
        mediaPlayer.playSong(selectedSong.downloadURL);
        const currentTrack = mediaPlayer.getSongReference();
        const index = songs.findIndex(el => el.title === selectedSong.title);
        dispatch({ type: types.SET_CURRENT_TRACK, payload: { instance: mediaPlayer, ref: currentTrack, info: selectedSong, id: index } });
    }
};

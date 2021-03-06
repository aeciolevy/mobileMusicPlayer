import { combineReducers } from 'redux';
import * as types from '../actions/types';

const addZero = value => value <= 9 ? `0${value}` : value; 

const addDurationFormatted = (array) => array && 
    array.map( el => ({...el, durationFormatted: `${Math.floor(el.duration/60)}:${addZero(el.duration%60)}` }));

const songs = (state = [], action) => {
    switch(action.type){
    case types.ADD_SONGS: {    
        const payloadFormatted = addDurationFormatted(action.payload);
        return [...state, ...payloadFormatted];
    }
    default:
        return state;
    }
};

const currentTrack = (state = {}, action) => {
    switch(action.type) {
    case types.SET_CURRENT_TRACK: {
        return {...state, ...action.payload};
    }
    default:
        return state;
    }
};

const nextTrack = (state = {}, action) => {
    switch(action.type) {
    case types.SET_CURRENT_TRACK: {
        return { ...state, id: (action.payload.id + 1) % state.songsSize };
    }
    case types.ADD_SONGS: {
        return {...state, songsSize: action.payload.length};
    }
    default: 
        return state;
    }
};

const selectedTrack = (state = {}, action) => {
    switch (action.type) {
    case types.SELECTED_TRACK: {
        return { ...state, ...action.payload };
    }
    default:
        return state;
    }
};

export default combineReducers({
    songs,
    currentTrack,
    nextTrack,
    selectedTrack,
});

// SELECTORS

export const getSongs = state => state.songs;
export const getCurrentTrack = state => state.currentTrack;
export const getIsPlaying = state => state.currentTrack.ref ? state.currentTrack.ref.playing() : false;
export const getNextTrack = state => state.nextTrack;
export const getSelectedTrack = state => state.selectedTrack;
export const getSelectedTrackTitle = state => state.selectedTrack.title;

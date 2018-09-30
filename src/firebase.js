import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBXGweH7UQPWuMQ7xB38TRQMfucoODK1KQ",
    authDomain: "musicplayer-e6bef.firebaseapp.com",
    databaseURL: "https://musicplayer-e6bef.firebaseio.com",
    projectId: "musicplayer-e6bef",
    storageBucket: "musicplayer-e6bef.appspot.com",
    messagingSenderId: "779292420974"
};

var fire = firebase.initializeApp(config);
const databaseRef = fire.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
databaseRef.settings(settings);


export const songs = databaseRef.collection('songs');

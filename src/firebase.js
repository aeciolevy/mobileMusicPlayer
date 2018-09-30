import firebase from 'firebase';

var config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_DATABASE_URL,
    databaseURL: "https://musicplayer-e6bef.firebaseio.com",
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    messagingSenderId: "779292420974"
};

var fire = firebase.initializeApp(config);
const databaseRef = fire.firestore();
const settings = {/* your settings... */ timestampsInSnapshots: true };
databaseRef.settings(settings);


export const songs = databaseRef.collection('songs');

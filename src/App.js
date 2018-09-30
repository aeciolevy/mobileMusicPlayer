import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addSongToStore, playSong } from  './actions';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import MediaPlayer from './mediaPlayer';
import './App.css';
import {Howl} from 'howler';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#272727',
        },
        secondary: {
            main: '#ff3d00',
        },
    },
});


class App extends Component {
    
    async componentDidMount () {
        await this.props.addSongToStore();
    }
    
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Home />
            </MuiThemeProvider>
        );
    }
}

export default connect(null, {addSongToStore, playSong})(App);

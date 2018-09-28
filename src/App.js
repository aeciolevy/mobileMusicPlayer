import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './Home';
import './App.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#383838',
        },
        secondary: {
            main: '#ff3d00',
        },
    },
});


class App extends Component {
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Home />
            </MuiThemeProvider>
        );
    }
}

export default App;

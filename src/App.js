import React, { Component } from 'react';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Home from './pages/Home';
import './App.css';

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
    render() {
        return (
            <MuiThemeProvider theme={theme}>
                <Home />
            </MuiThemeProvider>
        );
    }
}

export default App;

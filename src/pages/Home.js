import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ResponsiveDrawer from '../components/home/ResponsiveDrawer';
import styled from 'styled-components';
import PlayerControls from '../components/home/PlayerControls';
import MainHome from './MainHome';

const styles = theme => ({
    toolbar: theme.mixins.toolbar,
});

class Home extends Component {

    state = {toRender: 'main'}

    render () {
        const { classes } = this.props;
        const { toRender } = this.state;
        return(
            <div>
                <ResponsiveDrawer >
                    <Container >
                        <main style={{ flex: 1, backgroundColor: '#212121'}}>
                            <div className={classes.toolbar} />
                            { toRender === 'main' && <MainHome /> } 
                        </main>
                    </Container>
                    <PlayerControls />
                </ResponsiveDrawer>
            </div>
        );
    }
}


export default withStyles(styles)(Home);

const Container = styled.div`
    display: flex;
    flex-flow: column;
    width: 100%;
    min-height: 100vh;
`;

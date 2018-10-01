import React, { Fragment } from 'react';
import { connect } from 'react-redux'
import { MainHomeContainer, Image } from '../components/styled/MainHomeStyled';
import SongsList from '../components/mainHome/SongsList';
import { getCurrentTrackSelector } from '../reducers';

const MainHome = ({currentTrack}) => (
    <Fragment>
        <MainHomeContainer>
            <Image  imageLink={currentTrack && currentTrack.info ? currentTrack.info.albumURL : null}/>
        </MainHomeContainer>
        <SongsList />
    </Fragment>
);

const mapStateToProps = state => ({
    currentTrack: getCurrentTrackSelector(state),
});

export default connect(mapStateToProps)(MainHome);



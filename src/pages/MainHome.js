import React, { Fragment } from 'react';
import { MainHomeContainer, Image } from '../components/styled/MainHomeStyled';
import SongsList from '../components/mainHome/SongsList';

// const Link = 'http://neonlimelight.com/wp-content/uploads/2013/02/jt-2020-album-cover.jpg';

const MainHome = (props) => (
    <Fragment>
        <MainHomeContainer>
            <Image  />
        </MainHomeContainer>
            <SongsList />
    </Fragment>
);

export default MainHome;



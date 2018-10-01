import React from 'react';
import { SongListContainer } from '../styled/MainHomeStyled';
import PlaylistTable from './PlaylistTable';

const SongsList = () => (
    <SongListContainer>
        <PlaylistTable />
    </SongListContainer>
);

export default SongsList;


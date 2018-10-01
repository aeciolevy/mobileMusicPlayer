import React from 'react';
import { Footer } from '../styled/GeneralElement';
import Track from './Track';
import Controls from './Controls';

const PlayerControls = () => (
    <Footer>
        <Track />
        <Controls />
    </Footer>           
);

export default PlayerControls;
